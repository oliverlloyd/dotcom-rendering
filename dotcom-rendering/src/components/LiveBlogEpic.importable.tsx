import { css } from '@emotion/react';
import type { CountryCode } from '@guardian/libs';
import { getCookie, log, storage } from '@guardian/libs';
import { space } from '@guardian/source-foundations';
import { getEpicViewLog } from '@guardian/support-dotcom-components';
import type { EpicPayload } from '@guardian/support-dotcom-components/dist/dotcom/src/types';
import React, { useEffect, useState } from 'react';
import { createPortal } from 'react-dom';
import { useArticleCounts } from '../lib/articleCount';
import type { TagType } from '../types/tag';
import { submitComponentEvent } from '../client/ophan/ophan';
import {
	getLastOneOffContributionTimestamp,
	isRecurringContributor,
	shouldHideSupportMessaging,
	useHasOptedOutOfArticleCount,
} from '../lib/contributions';
import { getLocaleCode } from '../lib/getCountryCode';
import { setAutomat } from '../lib/setAutomat';
import { useAB } from '../lib/useAB';
import { useSDCLiveblogEpic } from '../lib/useSDC';

type Props = {
	section: string;
	shouldHideReaderRevenue: boolean;
	isPaidContent: boolean;
	tags: TagType[];
	contributionsServiceUrl: string;
	pageId: string;
	keywordIds: string;
};

const useCountryCode = () => {
	const [countryCode, setCountryCode] = useState<CountryCode | null>();

	useEffect(() => {
		getLocaleCode()
			.then((cc) => {
				setCountryCode(cc);
			})
			.catch((e) => {
				const msg = `Error fetching country code: ${String(e)}`;
				window.guardian.modules.sentry.reportError(
					new Error(msg),
					'liveblog-epic',
				);
			});
	}, []);

	return countryCode;
};

const useEpic = ({ url, name }: { url: string; name: string }) => {
	// Using state here to store the Epic component that gets imported allows
	// us to render it with React (instead of inserting it into the dom manually)
	const [Epic, setEpic] =
		useState<React.ElementType<{ [key: string]: unknown }>>();

	useEffect(() => {
		setAutomat();
		window
			.guardianPolyfilledImport(url)
			.then((epicModule) => {
				// eslint-disable-next-line @typescript-eslint/no-unsafe-member-access, @typescript-eslint/no-unsafe-return -- required for dynamic import
				setEpic(() => epicModule[name]); // useState requires functions to be wrapped
			})
			.catch((err) => {
				const msg = `Error importing LiveBlog epic: ${String(err)}`;
				window.guardian.modules.sentry.reportError(
					new Error(msg),
					'liveblog-epic',
				);
			});
	}, [url, name]);

	return { Epic };
};

/**
 * usePayload
 *
 * takes a series of CAPI values, reads consent, the users country, some cookie
 * values and then constructs a config object with `tracking` and `targeting`
 * properties
 *
 * @returns the payload object required to make the POST request to contributions
 */
const usePayload = ({
	shouldHideReaderRevenue,
	section,
	isPaidContent,
	tags,
	pageId,
	keywordIds,
}: {
	shouldHideReaderRevenue: boolean;
	section: string;
	isPaidContent: boolean;
	tags: TagType[];
	pageId: string;
	keywordIds: string;
}): EpicPayload | undefined => {
	const articleCounts = useArticleCounts(pageId, keywordIds);
	const hasOptedOutOfArticleCount = useHasOptedOutOfArticleCount();
	const countryCode = useCountryCode();
	const mvtId =
		Number(getCookie({ name: 'GU_mvt_id', shouldMemoize: true })) || 0;
	const isSignedIn = !!getCookie({ name: 'GU_U', shouldMemoize: true });

	if (articleCounts === 'Pending') return;
	if (hasOptedOutOfArticleCount === 'Pending') return;
	log('dotcom', 'LiveBlogEpic has consent state');
	if (!countryCode) return;
	log('dotcom', 'LiveBlogEpic has countryCode');

	return {
		tracking: {
			ophanPageId: window.guardian.config.ophan.pageViewId,
			platformId: 'GUARDIAN_WEB',
			clientName: 'dcr',
			referrerUrl: window.location.origin + window.location.pathname,
		},
		targeting: {
			contentType: 'LiveBlog',
			sectionId: section,
			shouldHideReaderRevenue,
			isMinuteArticle: true,
			isPaidContent,
			tags,
			showSupportMessaging: !shouldHideSupportMessaging(isSignedIn),
			isRecurringContributor: isRecurringContributor(isSignedIn),
			lastOneOffContributionDate:
				getLastOneOffContributionTimestamp() ?? undefined,
			mvtId,
			countryCode,
			epicViewLog: getEpicViewLog(storage.local),
			weeklyArticleHistory: articleCounts?.weeklyArticleHistory,
			hasOptedOutOfArticleCount,
			modulesVersion: 'v3',
			url: window.location.origin + window.location.pathname,
		},
	};
};

/**
 * Render
 *
 * Dynamically imports and renders a given module
 *
 * @param props
 * @param props.url string - The url of the component
 * @param props.name tring - The name of the component
 * @param props.props object - The props of the component
 * @returns The resulting react component
 */
const Render = ({
	url,
	name,
	props,
}: {
	url: string;
	name: string;
	props: { [key: string]: unknown };
}) => {
	const { Epic } = useEpic({ url, name });

	if (Epic === undefined) return null;
	log('dotcom', 'LiveBlogEpic has the Epic');

	return (
		<aside
			css={css`
				margin-bottom: ${space[3]}px;
			`}
		>
			{}
			<Epic {...props} />
		</aside>
	);
};

/**
 * Using the payload, make a fetch request to contributions service
 *
 * @param payload - unknown
 * @param contributionsServiceUrl - string
 */
const Fetch = ({
	payload,
	contributionsServiceUrl,
}: {
	payload: EpicPayload;
	contributionsServiceUrl: string;
}) => {
	const response = useSDCLiveblogEpic(contributionsServiceUrl, payload);

	// If we didn't get a module in response (or we're still waiting) do nothing. If
	// no epic should be shown the response is equal to {}, hence the Object.keys
	if (!response?.data || Object.keys(response).length === 0) {
		return null;
	}
	log('dotcom', 'LiveBlogEpic has a module');

	// Add submitComponentEvent function to props to enable Ophan tracking in the component
	const props = {
		...response.data.module.props,
		submitComponentEvent,
	};

	// Take any returned module and render it
	return (
		<Render
			url={response.data.module.url}
			name={response.data.module.name}
			props={props}
		/>
	);
};

function insertAfter(referenceNode: HTMLElement, newNode: Element) {
	referenceNode.parentNode?.insertBefore(newNode, referenceNode.nextSibling);
}

/**
 * LiveBlogEpic is the support epic which appears in-between blocks in blogs
 *
 * There are three main steps to create this epic:
 *
 * 1. usePayload - Build the payload. The config object we send to contributions
 * 2. Fetch - POST the payload to the contributions endpoint
 * 3. Render - Take the url, props and name data we got in response to our fetch and dynamically import
 *    and render the Epic component using it
 */
export const LiveBlogEpic = ({
	section,
	shouldHideReaderRevenue,
	isPaidContent,
	tags,
	contributionsServiceUrl,
	pageId,
	keywordIds,
}: Props) => {
	log('dotcom', 'LiveBlogEpic started');

	const ABTestAPI = useAB()?.api;
	const userIsInRemoveLiveblogEpicTest = ABTestAPI?.isUserInVariant(
		'RemoveBusinessLiveblogEpics',
		'variant',
	);

	const removeEpic =
		(userIsInRemoveLiveblogEpicTest ?? false) && section == 'business';

	// First construct the payload
	const payload = usePayload({
		shouldHideReaderRevenue,
		section,
		isPaidContent,
		tags,
		pageId,
		keywordIds,
	});
	if (!payload) return null;
	if (removeEpic) return null;

	/**
	 * Here we decide where to insert the epic.
	 *
	 * If the url contains a permalink then we
	 * want to insert it immediately after that block to prevent any CLS issues.
	 *
	 * Otherwise, we choose a random position near the top of the blog
	 */
	const epicPlaceholder = document.createElement('article');
	if (window.location.href.includes('#block-')) {
		// Because we're using a permalink there's a possibility the epic will render in
		// view. To prevent confusing layout shift we initially hide the message so that
		// we can reveal (animate in) it once it has been rendered
		epicPlaceholder.classList.add('pending');
		const blockId = window.location.hash.slice(1);
		const blockLinkedTo = document.getElementById(blockId);
		if (blockLinkedTo) {
			insertAfter(blockLinkedTo, epicPlaceholder);
		}
		epicPlaceholder.classList.add('reveal');
		epicPlaceholder.classList.remove('pending');
	} else {
		// This is a simple page load so we simply insert the epic somewhere near the top
		// of the blog
		const randomPosition = Math.floor(Math.random() * 3) + 1; // 1, 2 or 3
		const aBlockNearTheTop =
			document.querySelectorAll<HTMLElement>('article.block')[
				randomPosition
			];
		if (aBlockNearTheTop) {
			insertAfter(aBlockNearTheTop, epicPlaceholder);
		}
	}

	return createPortal(
		<Fetch
			payload={payload}
			contributionsServiceUrl={contributionsServiceUrl}
		/>,
		epicPlaceholder,
	);
};
