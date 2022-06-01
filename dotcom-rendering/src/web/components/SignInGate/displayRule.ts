// use the dailyArticleCount from the local storage to see how many articles the user has viewed in a day
import { onConsentChange } from '@guardian/consent-management-platform';
import type { ConsentState } from '@guardian/consent-management-platform/dist/types';
import { getLocale } from '@guardian/libs';
import type { DailyArticle } from '../../lib/dailyArticleCount';
import { getDailyArticleCount } from '../../lib/dailyArticleCount';
import { hasUserDismissedGateMoreThanCount } from './dismissGate';
import type { CanShowGateProps } from './types';

// in our case if this is the n-numbered article or higher the user has viewed then set the gate
export const isNPageOrHigherPageView = (n: number = 2): boolean => {
	// get daily read article count array from local storage
	const [dailyCount = {} as DailyArticle] = getDailyArticleCount() || [];

	const { count = 0 } = dailyCount;

	return count >= n;
};

// determine if the useragent is running iOS 9 (known to be buggy for sign in flow)
export const isIOS9 = (): boolean => {
	// get the browser user agent
	const ua = navigator.userAgent;
	// check useragent if the device is an iOS device
	const appleDevice = /(iPhone|iPod|iPad)/i.test(ua);
	// check useragent if the os is version 9
	const os = /(CPU OS 9_)/i.test(ua);

	// if both true, then it's an apple ios 9 device
	return appleDevice && os;
};

// hide the sign in gate on article types that are not supported
export const isValidContentType = (contentType: string): boolean => {
	// It's safer to definitively *include* types as we
	// know new types will not break the sign-in-gate going forward
	const validTypes = ['Article'];

	return validTypes.some((type: string): boolean => contentType === type);
};

// hide the sign in gate on certain sections of the site, e.g info, about, help etc.
export const isValidSection = (sectionName?: string): boolean => {
	const invalidSections = [
		'about',
		'info',
		'membership',
		'help',
		'guardian-live-australia',
		'gnm-archive',
	];

	// we check for invalid section by reducing the above array, and then NOT the result so we know
	// its a valid section
	return !invalidSections.some(
		(section: string): boolean => sectionName === section,
	);
};

// hide the sign in gate for certain tags on the site
export const isValidTag = (tags: TagType[]): boolean => {
	const invalidTags = ['info/newsletter-sign-up'];

	return !invalidTags.some((invalidTag) =>
		tags.map((tag) => tag.id).includes(invalidTag),
	);
};

export const hasRequiredConsents = (): Promise<boolean> => {
	const hasConsentedToAll = (state: ConsentState) => {
		const consentFlags = state.tcfv2?.consents
			? Object.values(state.tcfv2.consents)
			: [];
		const vendorConsentFlags = state.tcfv2?.vendorConsents
			? Object.values(state.tcfv2.vendorConsents)
			: [];
		const isEmpty =
			consentFlags.length === 0 || vendorConsentFlags.length === 0;

		return (
			!isEmpty && [...consentFlags, ...vendorConsentFlags].every(Boolean)
		);
	};

	return new Promise((resolve) => {
		onConsentChange((state) => {
			if (state.tcfv2) {
				return resolve(hasConsentedToAll(state));
			}

			if (state.ccpa) {
				return resolve(!state.ccpa.doNotSell);
			}

			if (state.aus) {
				return resolve(state.aus.personalisedAdvertising);
			}

			// this shouldn't ever be hit, but this is here as safety
			return resolve(false);
		});
	});
};

export const canShowSignInGate = ({
	isSignedIn,
	currentTest,
	contentType,
	sectionName,
	tags,
	isPaidContent,
	isPreview,
}: CanShowGateProps): Promise<boolean> =>
	Promise.resolve(
		!isSignedIn &&
			!hasUserDismissedGateMoreThanCount(
				currentTest.variant,
				currentTest.name,
				5,
			) &&
			isNPageOrHigherPageView(3) &&
			isValidContentType(contentType) &&
			isValidSection(sectionName) &&
			isValidTag(tags) &&
			// hide the sign in gate on isPaidContent
			!isPaidContent &&
			// hide the sign in gate on internal tools preview &&
			!isPreview &&
			!isIOS9(),
	);

export const canShowMandatoryUs: ({
	isSignedIn,
	currentTest,
	contentType,
	sectionName,
	tags,
	isPaidContent,
	isPreview,
}: CanShowGateProps) => Promise<boolean> = async ({
	isSignedIn,
	currentTest,
	contentType,
	sectionName,
	tags,
	isPaidContent,
	isPreview,
}: CanShowGateProps) => {
	return (
		(await getLocale()) === 'US' &&
		(await hasRequiredConsents()) &&
		(await canShowSignInGate({
			isSignedIn,
			currentTest,
			contentType,
			sectionName,
			tags,
			isPaidContent,
			isPreview,
		}))
	);
};
