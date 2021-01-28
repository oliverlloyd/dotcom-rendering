import type { Appboy, Extras, InternalMessage } from './BrazeMessages';

class BrazeMessage {
	appboy: Appboy;

	message: InternalMessage;

	constructor(appboy: Appboy, message: InternalMessage) {
		this.appboy = appboy;
		this.message = message;
	}

	logImpression(): void {
		this.appboy.logInAppMessageImpression(this.message);
	}

	extras(): Extras {
		return this.message.extras || {};
	}
}

export { BrazeMessage };
