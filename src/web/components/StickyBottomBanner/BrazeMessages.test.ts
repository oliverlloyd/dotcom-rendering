import { BrazeMessages } from './BrazeMessages';
import { FakeAppBoy } from './FakeAppBoy';

describe('BrazeMessages', () => {
	describe('getMessagesFor', () => {
		it('returns a promise which resolves with message data for the correct slot', async () => {
			const appboy = new FakeAppBoy();
			const brazeMessages = new BrazeMessages(appboy);

			const bannerPromise = brazeMessages.getMessagesFor('banner');
			const endOfArticlePromise = brazeMessages.getMessagesFor(
				'endOfArticle',
			);

			const bannerExtras = { slotName: 'banner', title: 'Example' };
			const bannerPayload = { extras: bannerExtras };
			appboy.emit(bannerPayload);

			const endOfArticleExtras = {
				slotName: 'endOfArticle',
				title: 'Example',
			};
			const endOfArticlePayload = { extras: endOfArticleExtras };
			appboy.emit(endOfArticlePayload);

			const data = await Promise.all([
				bannerPromise,
				endOfArticlePromise,
			]);
			expect(data[0]).toEqual(bannerExtras);
			expect(data[1]).toEqual(endOfArticleExtras);
		});

		it('supports multiple calls to the same slot, returning separate promises', async () => {
			const appboy = new FakeAppBoy();
			const brazeMessages = new BrazeMessages(appboy);

			const bannerPromise = brazeMessages.getMessagesFor('banner');
			const anotherBannerPromise = brazeMessages.getMessagesFor('banner');

			const extras = { slotName: 'banner', title: 'Example' };
			const appboyPayload = { extras };
			appboy.emit(appboyPayload);

			const data = await Promise.all([
				bannerPromise,
				anotherBannerPromise,
			]);
			expect(data[0]).toEqual(extras);
			expect(data[1]).toEqual(extras);
		});
	});
});
