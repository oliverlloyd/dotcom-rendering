import { BrazeMessage } from './BrazeMessage';

type Callback = (message: InternalMessage) => void;

type Extras = Record<string, string>;

interface Appboy {
	subscribeToInAppMessage: (callback: Callback) => string;
	logInAppMessageImpression: (message: InternalMessage) => void;
}

interface InternalMessage {
	extras?: Extras;
	triggerId?: string; // This keeps Typescript happy, because Message could be an InAppMessage or a ControlMessage
}

class BrazeMessages {
	// emitter: Emitter;
	appboy: Appboy;

	constructor(appboy: Appboy) {
		this.appboy = appboy;
	}

	private getMessagesForSlot(targetSlotName: string): Promise<BrazeMessage> {
		return new Promise((resolve) => {
			const callback = (message: InternalMessage) => {
				const { extras } = message;

				if (
					extras &&
					extras.slotName &&
					extras.slotName === targetSlotName
				) {
					resolve(new BrazeMessage(this.appboy, message));
				}
			};

			this.appboy.subscribeToInAppMessage(callback);
		});
	}

	getMessagesForBanner(): Promise<BrazeMessage> {
		return this.getMessagesForSlot('Banner');
	}

	getMessagesForEndOfArticle(): Promise<BrazeMessage> {
		return this.getMessagesForSlot('EndOfArticle');
	}
}

export { BrazeMessages, Callback, Appboy, InternalMessage, Extras };
