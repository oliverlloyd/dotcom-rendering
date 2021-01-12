import { createNanoEvents, Emitter } from 'nanoevents';

type Callback = (message: Message) => void;

type Extras = Record<string, string>;

interface Appboy {
	subscribeToInAppMessage: (callback: Callback) => string;
}

interface Message {
	extras?: Extras;
	triggerId?: string; // This keeps Typescript happy, because Message could be an InAppMessage or a ControlMessage
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

	public on(slotName: string, callback: (message: Extras) => any) {
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

export { BrazeMessageBroker, Appboy, Message, Callback, Extras };
