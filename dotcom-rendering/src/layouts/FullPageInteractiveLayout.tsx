import { css, Global } from '@emotion/react';
import type { ArticleFormat } from '@guardian/libs';
import { ArticleDisplay, ArticleSpecial } from '@guardian/libs';
import {
	border,
	brandBackground,
	brandBorder,
	brandLine,
	from,
	labs,
	neutral,
	until,
} from '@guardian/source-foundations';
import {
	adContainerCollapseStyles,
	labelStyles as adLabelStyles,
	MobileStickyContainer,
} from '../components/AdSlot';
import { Footer } from '../components/Footer';
import { Header } from '../components/Header';
import { HeaderAdSlot } from '../components/HeaderAdSlot';
import { Island } from '../components/Island';
import { LabsHeader } from '../components/LabsHeader';
import { Nav } from '../components/Nav/Nav';
import { Section } from '../components/Section';
import { StickyBottomBanner } from '../components/StickyBottomBanner.importable';
import { SubNav } from '../components/SubNav.importable';
import { canRenderAds } from '../lib/canRenderAds';
import { decidePalette } from '../lib/decidePalette';
import { getZIndex } from '../lib/getZIndex';
import { decideLanguage, decideLanguageDirection } from '../lib/lang';
import { getCurrentPillar } from '../lib/layoutHelpers';
import { renderElement } from '../lib/renderElement';
import type { NavType } from '../model/extract-nav';
import type { Switches } from '../types/config';
import type { FEElement } from '../types/content';
import type { FEArticleType } from '../types/frontend';
import { interactiveGlobalStyles } from './lib/interactiveLegacyStyling';
import { BannerWrapper, Stuck } from './lib/stickiness';

interface Props {
	article: FEArticleType;
	NAV: NavType;
	format: ArticleFormat;
}

type RendererProps = {
	format: ArticleFormat;
	elements: FEElement[];
	host?: string;
	pageId: string;
	webTitle: string;
	ajaxUrl: string;
	isAdFreeUser: boolean;
	isSensitive: boolean;
	switches: Switches;
};

const Renderer = ({
	format,
	elements,
	host,
	pageId,
	webTitle,
	ajaxUrl,
	isAdFreeUser,
	isSensitive,
	switches,
}: RendererProps) => {
	// const cleanedElements = elements.map(element =>
	//     'html' in element ? { ...element, html: clean(element.html) } : element,
	// );
	// ^^ Until we decide where to do the "isomorphism split" in this this code is not safe here.
	//    But should be soon.
	const output = elements.map((element, index) => {
		const el = renderElement({
			format,

			element,
			adTargeting: undefined,
			host,
			index,
			isMainMedia: false,
			pageId,
			webTitle,
			ajaxUrl,
			isAdFreeUser,
			isSensitive,
			switches,
		});

		switch (element._type) {
			// Here we think it makes sense not to wrap every `p` inside a `figure`
			case 'model.dotcomrendering.pageElements.InteractiveBlockElement':
			case 'model.dotcomrendering.pageElements.TextBlockElement':
				return el;

			default:
				return (
					<figure
						id={
							'elementId' in element
								? element.elementId
								: undefined
						}
						key={index}
					>
						{el}
					</figure>
				);
		}
	});

	const adStyles = css`
		${adLabelStyles}
		${adContainerCollapseStyles}

		${from.tablet} {
			.mobile-only .ad-slot {
				display: none;
			}
		}
		${until.tablet} {
			.hide-until-tablet .ad-slot {
				display: none;
			}
		}
	`;

	return <div css={adStyles}>{output}</div>;
};

const NavHeader = ({ article, NAV, format }: Props) => {
	// Typically immersives use the slim nav, but this switch is used to force
	// the full nav - typically during special events such as Project 200, or
	// the Euros. The motivation is to better onboard new visitors; interactives
	// often reach readers who are less familiar with the Guardian.
	const isSlimNav = !article.config.switches.interactiveFullHeaderSwitch;

	/**
	 * This property currently only applies to the header and merchandising slots
	 */
	const renderAds = canRenderAds(article);

	const isInEuropeTest =
		article.config.abTests.europeNetworkFrontVariant === 'variant';

	if (isSlimNav) {
		return (
			<div
				css={css`
					${getZIndex('headerWrapper')}
					order: 0;
				`}
			>
				<Section
					fullWidth={true}
					borderColour={brandLine.primary}
					showTopBorder={false}
					padSides={false}
					backgroundColour={brandBackground.primary}
					element="nav"
				>
					<Nav
						format={{
							display: format.display,
							design: format.design,
							theme: getCurrentPillar(article),
						}}
						nav={NAV}
						subscribeUrl={
							article.nav.readerRevenueLinks.header.subscribe
						}
						editionId={article.editionId}
						headerTopBarSwitch={
							!!article.config.switches.headerTopNav
						}
						isInEuropeTest={isInEuropeTest}
					/>
				</Section>
			</div>
		);
	}

	return (
		<section
			/* Note, some interactives require this - e.g. https://www.theguardian.com/environment/ng-interactive/2015/jun/05/carbon-bomb-the-coal-boom-choking-china. */
			css={css`
				${getZIndex('headerWrapper')};
				position: relative;
			`}
		>
			{renderAds && (
				<Stuck>
					<div data-print-layout="hide">
						<Section
							fullWidth={true}
							showTopBorder={false}
							showSideBorders={false}
							padSides={false}
							shouldCenter={false}
							element="aside"
						>
							<HeaderAdSlot display={format.display} />
						</Section>
					</div>
				</Stuck>
			)}

			{format.theme !== ArticleSpecial.Labs && (
				<div data-print-layout="hide">
					<Section
						fullWidth={true}
						shouldCenter={false}
						showTopBorder={false}
						showSideBorders={false}
						padSides={false}
						backgroundColour={brandBackground.primary}
						element="header"
					>
						<Header
							editionId={article.editionId}
							idUrl={article.config.idUrl}
							mmaUrl={article.config.mmaUrl}
							discussionApiUrl={article.config.discussionApiUrl}
							urls={article.nav.readerRevenueLinks.header}
							remoteHeader={
								!!article.config.switches.remoteHeader
							}
							contributionsServiceUrl={
								article.contributionsServiceUrl
							}
							idApiUrl={article.config.idApiUrl}
							isInEuropeTest={isInEuropeTest}
							headerTopBarSearchCapiSwitch={
								!!article.config.switches.headerTopBarSearchCapi
							}
						/>
					</Section>
				</div>
			)}

			<Section
				fullWidth={true}
				borderColour={brandLine.primary}
				showTopBorder={false}
				padSides={false}
				backgroundColour={brandBackground.primary}
				element="nav"
			>
				<Nav
					format={{
						display: ArticleDisplay.Standard,
						design: format.design,
						theme: getCurrentPillar(article),
					}}
					nav={NAV}
					subscribeUrl={
						article.nav.readerRevenueLinks.header.subscribe
					}
					editionId={article.editionId}
					headerTopBarSwitch={!!article.config.switches.headerTopNav}
					isInEuropeTest={isInEuropeTest}
				/>
			</Section>

			{NAV.subNavSections && format.theme !== ArticleSpecial.Labs && (
				<Section
					fullWidth={true}
					backgroundColour={neutral[100]}
					padSides={false}
					element="aside"
				>
					<Island deferUntil="idle">
						<SubNav
							subNavSections={NAV.subNavSections}
							currentNavLink={NAV.currentNavLink}
							format={format}
						/>
					</Island>
				</Section>
			)}
		</section>
	);
};

export const FullPageInteractiveLayout = ({ article, NAV, format }: Props) => {
	const {
		config: { host },
	} = article;

	const palette = decidePalette(format);

	return (
		<>
			{article.isLegacyInteractive && (
				<Global styles={interactiveGlobalStyles} />
			)}
			<header
				css={css`
					background-color: ${palette.background.article};
				`}
			>
				<NavHeader article={article} NAV={NAV} format={format} />

				{format.theme === ArticleSpecial.Labs && (
					<Stuck>
						<Section
							fullWidth={true}
							showTopBorder={false}
							padSides={true}
							backgroundColour={labs[400]}
							borderColour={border.primary}
							sectionId="labs-header"
						>
							<LabsHeader />
						</Section>
					</Stuck>
				)}
			</header>

			<Section
				fullWidth={true}
				showTopBorder={false}
				showSideBorders={false}
				shouldCenter={false}
				padSides={false}
				backgroundColour={palette.background.article}
				element="main"
			>
				<article
					id="maincontent"
					lang={decideLanguage(article.lang)}
					dir={decideLanguageDirection(article.isRightToLeftLang)}
				>
					<Renderer
						format={format}
						elements={
							article.blocks[0] ? article.blocks[0].elements : []
						}
						host={host}
						pageId={article.pageId}
						webTitle={article.webTitle}
						ajaxUrl={article.config.ajaxUrl}
						switches={article.config.switches}
						isAdFreeUser={article.isAdFreeUser}
						isSensitive={article.config.isSensitive}
					/>
				</article>
			</Section>

			{NAV.subNavSections && (
				<Section
					fullWidth={true}
					padSides={false}
					backgroundColour={neutral[100]}
					element="aside"
				>
					<Island deferUntil="visible">
						<SubNav
							subNavSections={NAV.subNavSections}
							currentNavLink={NAV.currentNavLink}
							format={format}
						/>
					</Island>
				</Section>
			)}

			<Section
				fullWidth={true}
				padSides={false}
				backgroundColour={brandBackground.primary}
				borderColour={brandBorder.primary}
				showSideBorders={false}
				element="footer"
			>
				<Footer
					pageFooter={article.pageFooter}
					pillar={format.theme}
					pillars={NAV.pillars}
					urls={article.nav.readerRevenueLinks.header}
					editionId={article.editionId}
					contributionsServiceUrl={article.contributionsServiceUrl}
				/>
			</Section>

			<BannerWrapper>
				<Island deferUntil="idle" clientOnly={true}>
					<StickyBottomBanner
						contentType={article.contentType}
						contributionsServiceUrl={
							article.contributionsServiceUrl
						}
						idApiUrl={article.config.idApiUrl}
						isMinuteArticle={article.pageType.isMinuteArticle}
						isPaidContent={article.pageType.isPaidContent}
						isPreview={!!article.config.isPreview}
						isSensitive={article.config.isSensitive}
						keywordIds={article.config.keywordIds}
						pageId={article.pageId}
						section={article.config.section}
						sectionName={article.sectionName}
						shouldHideReaderRevenue={
							article.shouldHideReaderRevenue
						}
						remoteBannerSwitch={
							!!article.config.switches.remoteBanner
						}
						puzzleBannerSwitch={
							!!article.config.switches.puzzlesBanner
						}
						tags={article.tags}
					/>
				</Island>
			</BannerWrapper>
			<MobileStickyContainer />
		</>
	);
};
