import { Appboy, BrazeMessageBroker, Message } from './BrazeMessageBroker';

class BrazeMessages {
	broker: BrazeMessageBroker;

	constructor(appboy: Appboy) {
		this.broker = new BrazeMessageBroker(appboy);
	}

	getMessagesFor(slotName: string): Promise<Message> {
		return new Promise((resolve) => {
			this.broker.on(slotName, (data) => resolve(data));
		});
	}
}

export { BrazeMessages };
