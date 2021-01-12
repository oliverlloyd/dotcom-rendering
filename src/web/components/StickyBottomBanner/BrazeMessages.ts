import { Appboy, BrazeMessageBroker, Extras } from './BrazeMessageBroker';

class BrazeMessages {
	broker: BrazeMessageBroker;

	constructor(appboy: Appboy) {
		this.broker = new BrazeMessageBroker(appboy);
	}

	getMessagesFor(slotName: string): Promise<Extras> {
		return new Promise((resolve) => {
			this.broker.on(slotName, (data) => resolve(data));
		});
	}
}

export { BrazeMessages };
