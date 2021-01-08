import {
	getConsentFor,
	onConsentChange,
} from '@guardian/consent-management-platform';

export const hasRequiredConsents = (): Promise<boolean> =>
	new Promise((resolve, reject) => {
		onConsentChange((state) => {
			try {
				resolve(getConsentFor('braze', state));
			} catch (e) {
				reject(e);
			}
		});
	});

const SDK_OPTIONS = {
	enableLogging: false,
	noCookies: true,
	baseUrl: 'https://sdk.fra-01.braze.eu/api/v3',
	sessionTimeoutInSeconds: 1,
	minimumIntervalBetweenTriggerActionsInSeconds: 0,
};

const getInitialisedAppboy = async (
	apiKey: string,
	asyncBrazeUuid: Promise<string>,
	ayncHasGivenConsent: Promise<boolean>,
): Appboy => {
	const [brazeUuid, hasGivenConsent] = await Promise.all([
		asyncBrazeUuid,
		ayncHasGivenConsent,
	]);

	if (!(brazeUuid && hasGivenConsent)) return;

	const { default: appboy } = await import(
		/* webpackChunkName: "braze-web-sdk-core" */ '@braze/web-sdk-core'
	);

	return appboy.initialize(apiKey, SDK_OPTIONS);
};

export { getInitialisedAppboy };
