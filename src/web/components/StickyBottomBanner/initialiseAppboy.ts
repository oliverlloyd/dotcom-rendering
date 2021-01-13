import {
	getConsentFor,
	onConsentChange,
} from '@guardian/consent-management-platform';
import { getCookie } from '@root/src/web/browser/cookie';

const SDK_OPTIONS = {
	enableLogging: false,
	noCookies: true,
	baseUrl: 'https://sdk.fra-01.braze.eu/api/v3',
	sessionTimeoutInSeconds: 1,
	minimumIntervalBetweenTriggerActionsInSeconds: 0,
};

const getInitialisedAppboy = async (apiKey: string): Promise<typeof appboy> => {
	const { default: appboy } = await import(
		/* webpackChunkName: "braze-web-sdk-core" */ '@braze/web-sdk-core'
	);

	appboy.initialize(apiKey, SDK_OPTIONS);

	return appboy;
};

const hasRequiredConsents = (): Promise<boolean> =>
	new Promise((resolve, reject) => {
		onConsentChange((state) => {
			try {
				resolve(getConsentFor('braze', state));
			} catch (e) {
				reject(e);
			}
		});
	});
// Would be faster to have every check as a promise? - then do await Promise.all? Or, resolve the synchronous values first, and move onto the async.

const incompletePreChecks: Array<PreCheck> = [
	{
		name: 'brazeSwitchIsOn',
		condition: Promise.resolve(Boolean(window.guardian.config.switches)),
	},
	{
		name: 'apiKeyIsPresent',
		condition: Promise.resolve(window.guardian.config.page.brazeApiKey),
	},
	{
		name: 'hasRequiredConsents',
		condition: hasRequiredConsents(),
	},
	{
		name: 'userIsASupporter',
		condition: Promise.resolve(
			getCookie('gu_hide_support_messaging') === 'true',
		),
	},
];

export { getInitialisedAppboy, hasRequiredConsents };
