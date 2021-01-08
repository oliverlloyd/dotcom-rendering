import { createNanoEvents, Emitter } from 'nanoevents';

type Callback = (message: Message) => void;

type Extras = Record<string, string>;

interface Appboy {
	subscribeToInAppMessage: (callback: Callback) => string;
}

interface Message {
	extras?: Extras;
	triggerId?: string;
}

class BrazeMessageBroker {
	emitter: Emitter;

	appboy: Appboy;

	constructor(appboy: Appboy) {
		this.appboy = appboy;
		this.emitter = createNanoEvents();

		const callback = (message: Message) => {
			const { extras } = message;

			if (extras && extras.slotName) {
				this.emit(extras.slotName, extras);
			}
		};

		appboy.subscribeToInAppMessage(callback);
	}

	private emit(slotName: string, extras: Extras) {
		this.emitter.emit(slotName, extras);
	}

	public on(slotName: string, callback: () => any) {
		return this.emitter.on(slotName, callback);
	}
}

// const brazeMessageBroker = new BrazeMessageBroker();

// e.g.
// getInitialisedAppboy(
//     window.guardian.config.page.brazeApiKey,
//     getBrazeUuid(idApiUrl),
//     hasRequiredConsents()
// )

export { BrazeMessageBroker, Appboy, Message };
