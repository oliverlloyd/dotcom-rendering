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

class BrazeMessageBroker {
	initialized: boolean;

	constructor() {
		this.initialized = false;
	}

	async initialize(asyncBrazeUuid: Promise<string>): Promise<void> {
		if (!this.initialized) {
			const apiKey = window.guardian.config.page.brazeApiKey;

			if (!apiKey) return;

			const [brazeUuid, hasGivenConsent] = await Promise.all([
				asyncBrazeUuid,
				hasRequiredConsents(),
			]);

			this.initialized = true;

			if (!(brazeUuid && hasGivenConsent)) return;

			console.log('foo');

			const { default: appboy } = await import(
				/* webpackChunkName: "braze-web-sdk-core" */ '@braze/web-sdk-core'
			);

			appboy.initialize(apiKey, SDK_OPTIONS);

			const callback = (message: any) => {
				const { extras } = message;

				if (extras && extras.slotName) {
					this.emit(extras.slotName, extras);
				}
			};

			appboy.subscribeToInAppMessage(callback);
		}
	}
}

const brazeMessageBroker = new BrazeMessageBroker();

export { brazeMessageBroker };
