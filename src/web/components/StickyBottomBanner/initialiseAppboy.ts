import {
	getConsentFor,
	onConsentChange,
} from '@guardian/consent-management-platform';

import { Appboy } from './BrazeMessageBroker';

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
): Promise<Appboy | undefined> => {
	const [brazeUuid, hasGivenConsent] = await Promise.all([
		asyncBrazeUuid,
		ayncHasGivenConsent,
	]);

	if (!(brazeUuid && hasGivenConsent)) return;

	const { default: appboy } = await import(
		/* webpackChunkName: "braze-web-sdk-core" */ '@braze/web-sdk-core'
	);

	appboy.initialize(apiKey, SDK_OPTIONS);

	return appboy;
};

export { getInitialisedAppboy };
