type Callback = (message: Message) => void;

type Extras = Record<string, string>;

interface Appboy {
	subscribeToInAppMessage: (callback: Callback) => string;
}

interface Message {
	extras?: Extras;
	triggerId?: string; // This keeps Typescript happy, because Message could be an InAppMessage or a ControlMessage
}

const localStorageKeyBase = 'gu.brazeMessageCache';

type SlotName = 'Banner' | 'EndOfArticle';

class BrazeMessage {
	appboy: Appboy;
	message: Message;
	cache: LocalMessageCache;

	constructor(appboy: Appboy, message: Message, cache: LocalMessageCache) {
		this.appboy = appboy;
		this.message = message;
		this.cache = cache;
	}

	logImpression() {
		this.cache.shift(this?.message?.extras?.slotName as SlotName);
		this.appboy.logInAppMessageImpression(this.message);
	}

	extras() {
		return this.message.extras;
	}
}

class LocalMessageCache {
	shift(slotName: SlotName): Message | undefined {
		const key = `${localStorageKeyBase}.${slotName}`;
		const q = localStorage.getItem(key);

		if (q) {
			const queue = JSON.parse(q);
			const topItem = queue.shift();

			if (topItem) {
				localStorage.setItem(key, JSON.stringify(queue));
				return topItem;
			}
		}
	}

	peek(slotName: SlotName): Message | undefined {
		const key = `${localStorageKeyBase}.${slotName}`;
		const q = localStorage.getItem(key);

		if (q) {
			const queue = JSON.parse(q);
			const topItem = queue.shift();

			if (topItem) {
				return topItem;
			}
		}
	}

	unshift(slotName: SlotName, message: Message) {
		const key = `${localStorageKeyBase}.${slotName}`;

		const q = localStorage.getItem(key);

		if (q) {
			const queue = JSON.parse(q);
			queue.unshift(message);
			localStorage.setItem(key, JSON.stringify(queue));
		} else {
			localStorage.setItem(key, JSON.stringify([message]));
		}
	}

	push(slotName: SlotName, message: Message) {
		const key = `${localStorageKeyBase}.${slotName}`;

		const q = localStorage.getItem(key);

		if (q) {
			const queue = JSON.parse(q);
			queue.push(message);
			localStorage.setItem(key, JSON.stringify(queue));
		} else {
			localStorage.setItem(key, JSON.stringify([message]));
		}
	}

	clear() {
		['Banner', 'SlotName'].forEach((s) => localStorage.removeItem(s));
	}
}

class BrazeMessages {
	appboy: Appboy;
	q: LocalMessageCache;

	constructor(appboy: Appboy) {
		this.appboy = appboy;
		this.q = new LocalMessageCache();
	}

	refreshMessages(): void {
		this.appboy.subscribeToInAppMessage((message: Message) => {
			if (message.extras && message.extras.slotName) {
				this.q.push(message.extras.slotName as SlotName, message);
			}
		});
	}

	getMessageForBanner(): Promise<BrazeMessage> {
		return new Promise((resolve) => {
			const m = this.q.peek('Banner');
			if (m) resolve(new BrazeMessage(this.appboy, m, this.q));
		});
	}

	getMessageForEndOfArticle(): Promise<BrazeMessage> {
		return new Promise((resolve) => {
			const m = this.q.peek('EndOfArticle');
			if (m) resolve(new BrazeMessage(this.appboy, m, this.q));
		});
	}
}

export { BrazeMessages, Message, Callback };
