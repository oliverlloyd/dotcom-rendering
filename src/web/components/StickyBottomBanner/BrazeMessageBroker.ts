import {
	getConsentFor,
	onConsentChange,
} from '@guardian/consent-management-platform';

import { createNanoEvents, Emitter } from 'nanoevents';

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
	emitter: Emitter;

	constructor(appboy) {
		this.appboy = appboy;
		this.emitter = createNanoEvents();

		const callback = (message: any) => {
			const { extras } = message;

			if (extras && extras.slotName) {
				this.emit(extras.slotName, extras);
			}
		};

		appboy.subscribeToInAppMessage(callback);
	}

	private emit(slotName: string, extras: any) {
		this.emitter.emit(slotName, extras);
	}

	public on(slotName: string, callback: () => any) {
		return this.emitter.on(slotName, callback);
	}
}

const brazeMessageBroker = new BrazeMessageBroker();

// e.g.
// getInitialisedAppboy(
//     window.guardian.config.page.brazeApiKey,
//     getBrazeUuid(idApiUrl),
//     hasRequiredConsents()
// )

const getInitialisedAppboy = async (
	apiKey: string,
	asyncBrazeUuid: Promise<string>,
	ayncHasGivenConsent: Promise<boolean>,
): appboy => {
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

export { brazeMessageBroker, getInitialisedAppboy };
