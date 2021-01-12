import { BrazeMessageBroker } from './BrazeMessageBroker';
import { FakeAppBoy } from './FakeAppBoy';

describe('BrazeMessageBroker', () => {
	it('notifies subscriptions for a given slot', () => {
		const appboy = new FakeAppBoy();
		const broker = new BrazeMessageBroker(appboy);
		const bannerSpy = jest.fn();
		broker.on('banner', bannerSpy);
		const endOfArticleSpy = jest.fn();
		broker.on('endOfArticle', bannerSpy);

		const appboyPayload = {
			extras: { slotName: 'banner', title: 'Example' },
		};
		appboy.emit(appboyPayload);

		expect(bannerSpy).toHaveBeenCalledTimes(1);
		expect(endOfArticleSpy).not.toHaveBeenCalled();
	});

	it('handles multiple subscriptions for a slot', () => {
		const appboy = new FakeAppBoy();
		const broker = new BrazeMessageBroker(appboy);
		const bannerSpy = jest.fn();
		broker.on('banner', bannerSpy);
		const anotherBannerSpy = jest.fn();
		broker.on('banner', anotherBannerSpy);

		const appboyPayload = {
			extras: { slotName: 'banner', title: 'Example' },
		};
		appboy.emit(appboyPayload);

		expect(bannerSpy).toHaveBeenCalledTimes(1);
		expect(anotherBannerSpy).toHaveBeenCalledTimes(1);
	});

	it('yields the correct payload to the callback', () => {
		const appboy = new FakeAppBoy();
		const broker = new BrazeMessageBroker(appboy);
		const endOfArticleSpy = jest.fn();
		broker.on('endOfArticle', endOfArticleSpy);

		const extras = { slotName: 'endOfArticle', title: 'Example' };
		const appboyPayload = { extras };
		appboy.emit(appboyPayload);

		expect(endOfArticleSpy).toHaveBeenCalledWith(extras);
	});
});
