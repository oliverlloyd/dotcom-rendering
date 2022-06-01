import createCache from '@emotion/cache';
import { CacheProvider } from '@emotion/react';
import createEmotionServer from '@emotion/server/create-instance';
import { ArticleDesign, ArticlePillar } from '@guardian/libs';
import { renderToString } from 'react-dom/server';
import { ASSET_ORIGIN, getScriptArrayFromFile } from '../../lib/assets';
import { escapeData } from '../../lib/escapeData';
import { makeWindowGuardian } from '../../model/window-guardian';
import { Article } from '../components/Article';
import { decideFormat } from '../lib/decideFormat';
import { decideTheme } from '../lib/decideTheme';
import { articleTemplate } from './articleTemplate';

interface Props {
	data: DCRServerDocumentData;
}

const generateScriptTags = (
	scripts: Array<{ src: string; legacy?: boolean } | false>,
) =>
	scripts.reduce<string[]>((scriptTags, script) => {
		if (script === false) return scriptTags;

		let attrs: string;
		switch (script.legacy) {
			case true:
				attrs = 'defer nomodule';
				break;
			case false:
				attrs = 'type="module"';
				break;
			default:
				attrs = 'defer';
				break;
		}

		return [
			...scriptTags,
			`<script ${attrs} src="${script.src}"></script>`,
		];
	}, []);

const decideTitle = (CAPIArticle: CAPIArticleType): string => {
	if (
		decideTheme(CAPIArticle.format) === ArticlePillar.Opinion &&
		CAPIArticle.author.byline
	) {
		return `${CAPIArticle.headline} | ${CAPIArticle.author.byline} | The Guardian`;
	}
	return `${CAPIArticle.headline} | ${CAPIArticle.sectionLabel} | The Guardian`;
};

export const articleToHtml = ({ data }: Props): string => {
	const { CAPIArticle, NAV, linkedData } = data;
	const title = decideTitle(CAPIArticle);
	const key = 'dcr';
	const cache = createCache({ key });

	// eslint-disable-next-line @typescript-eslint/unbound-method
	const { extractCriticalToChunks, constructStyleTagsFromChunks } =
		createEmotionServer(cache);

	const format: ArticleFormat = decideFormat(CAPIArticle.format);

	const html = renderToString(
		<CacheProvider value={cache}>
			<Article format={format} CAPIArticle={CAPIArticle} NAV={NAV} />
		</CacheProvider>,
	);

	const chunks = extractCriticalToChunks(html);
	const extractedCss = constructStyleTagsFromChunks(chunks);

	// We want to only insert script tags for the elements or main media elements on this page view
	// so we need to check what elements we have and use the mapping to the the chunk name
	const CAPIElements: CAPIElement[] = CAPIArticle.blocks
		.map((block) => block.elements)
		.flat();

	/**
	 * Preload the following woff2 font files
	 * TODO: Identify critical fonts to preload
	 */
	const fontFiles = [
		// 'https://assets.guim.co.uk/static/frontend/fonts/guardian-headline/noalts-not-hinted/GHGuardianHeadline-Light.woff2',
		// 'https://assets.guim.co.uk/static/frontend/fonts/guardian-headline/noalts-not-hinted/GHGuardianHeadline-LightItalic.woff2',
		'https://assets.guim.co.uk/static/frontend/fonts/guardian-headline/noalts-not-hinted/GHGuardianHeadline-Medium.woff2',
		'https://assets.guim.co.uk/static/frontend/fonts/guardian-headline/noalts-not-hinted/GHGuardianHeadline-MediumItalic.woff2',
		'https://assets.guim.co.uk/static/frontend/fonts/guardian-headline/noalts-not-hinted/GHGuardianHeadline-Bold.woff2',
		'https://assets.guim.co.uk/static/frontend/fonts/guardian-textegyptian/noalts-not-hinted/GuardianTextEgyptian-Regular.woff2',
		// 'https://assets.guim.co.uk/static/frontend/fonts/guardian-textegyptian/noalts-not-hinted/GuardianTextEgyptian-RegularItalic.woff2',
		'https://assets.guim.co.uk/static/frontend/fonts/guardian-textegyptian/noalts-not-hinted/GuardianTextEgyptian-Bold.woff2',
		'https://assets.guim.co.uk/static/frontend/fonts/guardian-textsans/noalts-not-hinted/GuardianTextSans-Regular.woff2',
		// 'http://assets.guim.co.uk/static/frontend/fonts/guardian-textsans/noalts-not-hinted/GuardianTextSans-RegularItalic.woff2',
		'https://assets.guim.co.uk/static/frontend/fonts/guardian-textsans/noalts-not-hinted/GuardianTextSans-Bold.woff2',
	];

	const polyfillIO =
		'https://assets.guim.co.uk/polyfill.io/v3/polyfill.min.js?rum=0&features=es6,es7,es2017,es2018,es2019,default-3.6,HTMLPictureElement,IntersectionObserver,IntersectionObserverEntry,URLSearchParams,fetch,NodeList.prototype.forEach,navigator.sendBeacon,performance.now,Promise.allSettled&flags=gated&callback=guardianPolyfilled&unknown=polyfill&cacheClear=1';

	const pageHasNonBootInteractiveElements = CAPIElements.some(
		(element) =>
			element._type ===
				'model.dotcomrendering.pageElements.InteractiveBlockElement' &&
			element.scriptUrl !==
				'https://interactive.guim.co.uk/embed/iframe-wrapper/0.1/boot.js', // We have rewritten this standard behaviour into Dotcom Rendering
	);

	const pageHasTweetElements = CAPIElements.some(
		(element) =>
			element._type ===
			'model.dotcomrendering.pageElements.TweetBlockElement',
	);

	/**
	 * The highest priority scripts.
	 * These scripts have a considerable impact on site performance.
	 * Only scripts critical to application execution may go in here.
	 * Please talk to the dotcom platform team before adding more.
	 * Scripts will be executed in the order they appear in this array
	 */
	const priorityScriptTags = generateScriptTags([
		{ src: polyfillIO },
		...getScriptArrayFromFile('bootCmp.js'),
		...getScriptArrayFromFile('ophan.js'),
		CAPIArticle.config && { src: CAPIArticle.config.commercialBundleUrl },
		...getScriptArrayFromFile('sentryLoader.js'),
		...getScriptArrayFromFile('dynamicImport.js'),
		pageHasNonBootInteractiveElements && {
			src: `${ASSET_ORIGIN}static/frontend/js/curl-with-js-and-domReady.js`,
		},
		...getScriptArrayFromFile('islands.js'),
	]);

	/**
	 * Low priority scripts. These scripts will be requested
	 * asynchronously after the main HTML has been parsed. Execution
	 * order is not guaranteed. It is even possible that these execute
	 * *before* the high priority scripts, although this is very
	 * unlikely.
	 */
	const lowPriorityScriptTags = generateScriptTags([
		...getScriptArrayFromFile('atomIframe.js'),
		...getScriptArrayFromFile('embedIframe.js'),
		...getScriptArrayFromFile('newsletterEmbedIframe.js'),
		...getScriptArrayFromFile('relativeTime.js'),
		...getScriptArrayFromFile('initDiscussion.js'),
	]);

	const gaChunk = getScriptArrayFromFile('ga.js');
	const modernScript = gaChunk.find((script) => script.legacy === false);
	const legacyScript = gaChunk.find((script) => script.legacy === true);
	const gaPath = {
		modern: modernScript?.src as string,
		legacy: legacyScript?.src as string,
	};

	/**
	 * We escape windowGuardian here to prevent errors when the data
	 * is placed in a script tag on the page
	 */
	const windowGuardian = escapeData(JSON.stringify(makeWindowGuardian(data)));

	const hasAmpInteractiveTag = CAPIArticle.tags.some(
		(tag) => tag.id === 'tracking/platformfunctional/ampinteractive',
	);

	// Only include AMP link for interactives which have the 'ampinteractive' tag
	const ampLink =
		CAPIArticle.format.design !== 'InteractiveDesign' ||
		hasAmpInteractiveTag
			? `https://amp.theguardian.com/${data.CAPIArticle.pageId}`
			: undefined;

	const { openGraphData } = CAPIArticle;
	const { twitterData } = CAPIArticle;
	const keywords =
		typeof CAPIArticle.config.keywords === 'undefined' ||
		CAPIArticle.config.keywords === 'Network Front'
			? ''
			: CAPIArticle.config.keywords;

	const initTwitter = `
		// https://developer.twitter.com/en/docs/twitter-for-websites/javascript-api/guides/set-up-twitter-for-websites
		window.twttr = (function(d, s, id) {
			var js, fjs = d.getElementsByTagName(s)[0],
			t = window.twttr || {};
			if (d.getElementById(id)) return t;
			js = d.createElement(s);
			js.id = id;
			js.src = "https://platform.twitter.com/widgets.js";
			fjs.parentNode.insertBefore(js, fjs);

			t._e = [];
			t.ready = function(f) {
			t._e.push(f);
			};

			return t;
		}(document, "script", "twitter-wjs"));
	`;

	return articleTemplate({
		linkedData,
		priorityScriptTags,
		lowPriorityScriptTags,
		css: extractedCss,
		html,
		fontFiles,
		title,
		description: CAPIArticle.trailText,
		windowGuardian,
		gaPath,
		ampLink,
		openGraphData,
		twitterData,
		keywords,
		initTwitter:
			pageHasTweetElements || format.design === ArticleDesign.LiveBlog
				? initTwitter
				: undefined,
	});
};
