import type { CountryCode } from '@guardian/libs';
import { getCookie, removeCookie, setCookie } from '@guardian/libs';
import { setAlreadyVisited } from './alreadyVisited';
import {
	HIDE_SUPPORT_MESSAGING_COOKIE,
	RECURRING_CONTRIBUTOR_COOKIE,
	SUPPORT_ONE_OFF_CONTRIBUTION_COOKIE,
	SUPPORT_RECURRING_CONTRIBUTOR_ANNUAL_COOKIE,
	SUPPORT_RECURRING_CONTRIBUTOR_MONTHLY_COOKIE,
} from './contributions';
import { getLocaleCode, overrideCountryCode } from './getCountryCode';

const readerRevenueCookies = [
	HIDE_SUPPORT_MESSAGING_COOKIE,
	RECURRING_CONTRIBUTOR_COOKIE,
	SUPPORT_RECURRING_CONTRIBUTOR_MONTHLY_COOKIE,
	SUPPORT_RECURRING_CONTRIBUTOR_ANNUAL_COOKIE,
	SUPPORT_ONE_OFF_CONTRIBUTION_COOKIE,
];

const clearEpicViewLog = (): void =>
	localStorage.removeItem('gu.contributions.views');

const clearBannerLastClosedAt = (): void => {
	localStorage.removeItem('gu.prefs.engagementBannerLastClosedAt');
	localStorage.removeItem('gu.prefs.subscriptionBannerLastClosedAt');
	localStorage.removeItem('gu.noRRBannerTimestamp');
};

const fakeOneOffContributor = (): void =>
	setCookie({
		name: SUPPORT_ONE_OFF_CONTRIBUTION_COOKIE,
		value: Date.now().toString(),
	});

const MULTIVARIATE_ID_COOKIE = 'GU_mvt_id';
const MAX_CLIENT_MVT_ID = 1000000;
const incrementMvtCookie = (): void => {
	const mvtId = parseInt(
		getCookie({ name: MULTIVARIATE_ID_COOKIE }) || '10',
		10,
	);
	if (mvtId) {
		if (mvtId === MAX_CLIENT_MVT_ID) {
			// Wrap back to 1 if it would exceed the max
			setCookie({ name: MULTIVARIATE_ID_COOKIE, value: '1' });
		} else {
			setCookie({ name: MULTIVARIATE_ID_COOKIE, value: `${mvtId + 1}` });
		}
	}
};
const decrementMvtCookie = (): void => {
	const mvtId = parseInt(
		getCookie({ name: MULTIVARIATE_ID_COOKIE }) || '10',
		10,
	);
	if (mvtId) {
		if (mvtId === 0) {
			// Wrap back to max if it would be less than 0
			setCookie({
				name: MULTIVARIATE_ID_COOKIE,
				value: MAX_CLIENT_MVT_ID.toString(),
			});
		} else {
			setCookie({ name: MULTIVARIATE_ID_COOKIE, value: `${mvtId - 1}` });
		}
	}
};

const clearCommonReaderRevenueStateAndReload = (
	asExistingSupporter: boolean,
	shouldHideReaderRevenue: boolean,
): void => {
	if (shouldHideReaderRevenue) {
		alert(
			'This page has "Prevent membership/contribution appeals" ticked in Composer. Please try a different page',
		);
		return;
	}

	readerRevenueCookies.forEach((cookie) => removeCookie({ name: cookie }));
	clearEpicViewLog();

	if (asExistingSupporter) {
		fakeOneOffContributor();
	}

	window.location.reload();
};

const showMeTheEpic = (
	asExistingSupporter: boolean = false,
	shouldHideReaderRevenue: boolean,
): void => {
	clearCommonReaderRevenueStateAndReload(
		asExistingSupporter,
		shouldHideReaderRevenue,
	);
};

const showMeTheBanner = (
	asExistingSupporter: boolean = false,
	shouldHideReaderRevenue: boolean,
): void => {
	clearBannerLastClosedAt();
	setAlreadyVisited(2);
	clearCommonReaderRevenueStateAndReload(
		asExistingSupporter,
		shouldHideReaderRevenue,
	);
};

const showNextVariant = (
	asExistingSupporter: boolean = false,
	shouldHideReaderRevenue: boolean,
): void => {
	incrementMvtCookie();
	clearCommonReaderRevenueStateAndReload(
		asExistingSupporter,
		shouldHideReaderRevenue,
	);
};

const showPreviousVariant = (
	asExistingSupporter: boolean = false,
	shouldHideReaderRevenue: boolean,
): void => {
	decrementMvtCookie();
	clearCommonReaderRevenueStateAndReload(
		asExistingSupporter,
		shouldHideReaderRevenue,
	);
};

const changeGeolocation = (
	asExistingSupporter: boolean = false,
	shouldHideReaderRevenue: boolean,
): void => {
	getLocaleCode()
		.then((current) => {
			const geo = window.prompt(
				`Enter two-letter geolocation code (e.g. GB, US, AU). Current is ${current}.`,
			);
			if (geo === 'UK') {
				alert(
					`'UK' is not a valid geolocation - please use 'GB' instead!`,
				);
			} else if (geo) {
				overrideCountryCode(geo as CountryCode);
				clearCommonReaderRevenueStateAndReload(
					asExistingSupporter,
					shouldHideReaderRevenue,
				);
			}
		})
		.catch((e) => console.error(`changeGeolocation - error: ${e}`));
};

type ReaderRevenueDevUtil = (
	asExistingSupporter: boolean,
	shouldHideReaderRevenue: boolean,
) => void;
export interface ReaderRevenueDevUtils {
	changeGeolocation: ReaderRevenueDevUtil;
	showMeTheEpic: ReaderRevenueDevUtil;
	showMeTheBanner: ReaderRevenueDevUtil;
	showNextVariant: ReaderRevenueDevUtil;
	showPreviousVariant: ReaderRevenueDevUtil;
}

const getForcedVariant = (type: 'epic' | 'banner'): string | null => {
	if (URLSearchParams) {
		const params = new URLSearchParams(window.location.search);
		const value = params.get(`force-${type}`);
		if (value) {
			return value;
		}
	}

	return null;
};

export {
	changeGeolocation,
	showMeTheEpic,
	showMeTheBanner,
	showNextVariant,
	showPreviousVariant,
	getForcedVariant,
};
