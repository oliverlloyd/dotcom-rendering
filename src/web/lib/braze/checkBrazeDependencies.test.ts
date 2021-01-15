import { checkBrazeDependencies } from './checkBrazeDependencies';

afterEach(() => {
	// Wait for any unsettled promises to complete at the end of each test. Once
	// we encounter a failure in our list of checks we don't need to wait on
	// subsequent operations to complete which is why there might be unsettled
	// promises.
	const flushPromises = new Promise(setImmediate);
	return flushPromises;
});

let mockBrazeUuid: string | null;
jest.mock('@root/src/web/lib/getBrazeUuid', () => ({
	getBrazeUuid: () => {
		return Promise.resolve(mockBrazeUuid);
	},
}));

let mockHasRequiredConsents: boolean;
jest.mock('./hasRequiredConsents', () => ({
	hasRequiredConsents: () => {
		return Promise.resolve(mockHasRequiredConsents);
	},
}));

let mockHideSupportMessaging: boolean;
jest.mock('./hideSupportMessaging', () => ({
	hideSupportMessaging: () => {
		return mockHideSupportMessaging;
	},
}));

let windowSpy: jest.SpyInstance<any>;

beforeEach(() => {
	windowSpy = jest.spyOn(window, 'window', 'get');
});

afterEach(() => {
	windowSpy.mockRestore();
});

const setWindow = (windowData: { [key: string]: any }) =>
	windowSpy.mockImplementation(() => windowData);

describe('checkBrazeDependecies', () => {
	it('succeeds if all dependencies are fulfilled', async () => {
		setWindow({
			guardian: {
				config: {
					switches: {
						brazeSwitch: true,
					},
					page: {
						brazeApiKey: 'fake-api-key',
						isPaidContent: false,
					},
				},
			},
		});
		mockBrazeUuid = 'fake-uuid';
		mockHasRequiredConsents = true;
		mockHideSupportMessaging = true;

		const isSignedIn = true;
		const idApiUrl = 'https://idapi.example.com';
		const { isSuccessful } = await checkBrazeDependencies(
			isSignedIn,
			idApiUrl,
		);

		expect(isSuccessful).toEqual(true);
	});

	it('fails if the switch is disabled', async () => {
		setWindow({
			guardian: {
				config: {
					switches: {
						brazeSwitch: false,
					},
					page: {
						brazeApiKey: 'fake-api-key',
						isPaidContent: false,
					},
				},
			},
		});
		mockBrazeUuid = 'fake-uuid';
		mockHasRequiredConsents = true;
		mockHideSupportMessaging = true;

		const isSignedIn = true;
		const idApiUrl = 'https://idapi.example.com';
		const { isSuccessful } = await checkBrazeDependencies(
			isSignedIn,
			idApiUrl,
		);

		expect(isSuccessful).toEqual(false);
	});

	it('fails if the api key is not set', async () => {
		setWindow({
			guardian: {
				config: {
					switches: {
						brazeSwitch: true,
					},
					page: {
						brazeApiKey: null,
						isPaidContent: false,
					},
				},
			},
		});
		mockBrazeUuid = 'fake-uuid';
		mockHasRequiredConsents = true;
		mockHideSupportMessaging = true;

		const isSignedIn = true;
		const idApiUrl = 'https://idapi.example.com';
		const { isSuccessful } = await checkBrazeDependencies(
			isSignedIn,
			idApiUrl,
		);

		expect(isSuccessful).toEqual(false);
	});

	it('fails if the page is a paid content page', async () => {
		setWindow({
			guardian: {
				config: {
					switches: {
						brazeSwitch: true,
					},
					page: {
						brazeApiKey: 'fake-api-key',
						isPaidContent: true,
					},
				},
			},
		});
		mockBrazeUuid = 'fake-uuid';
		mockHasRequiredConsents = true;
		mockHideSupportMessaging = true;

		const isSignedIn = true;
		const idApiUrl = 'https://idapi.example.com';
		const { isSuccessful } = await checkBrazeDependencies(
			isSignedIn,
			idApiUrl,
		);

		expect(isSuccessful).toEqual(false);
	});

	it('fails if the brazeUuid is not available', async () => {
		setWindow({
			guardian: {
				config: {
					switches: {
						brazeSwitch: true,
					},
					page: {
						brazeApiKey: 'fake-api-key',
						isPaidContent: false,
					},
				},
			},
		});
		mockBrazeUuid = null;
		mockHasRequiredConsents = true;
		mockHideSupportMessaging = true;

		const isSignedIn = true;
		const idApiUrl = 'https://idapi.example.com';
		const { isSuccessful } = await checkBrazeDependencies(
			isSignedIn,
			idApiUrl,
		);

		expect(isSuccessful).toEqual(false);
	});

	it('fails if the required consents are not given', async () => {
		setWindow({
			guardian: {
				config: {
					switches: {
						brazeSwitch: true,
					},
					page: {
						brazeApiKey: 'fake-api-key',
						isPaidContent: false,
					},
				},
			},
		});
		mockBrazeUuid = 'fake-uuid';
		mockHasRequiredConsents = false;
		mockHideSupportMessaging = true;

		const isSignedIn = true;
		const idApiUrl = 'https://idapi.example.com';
		const { isSuccessful } = await checkBrazeDependencies(
			isSignedIn,
			idApiUrl,
		);

		expect(isSuccessful).toEqual(false);
	});

	it('fails if support messaging is not hidden', async () => {
		setWindow({
			guardian: {
				config: {
					switches: {
						brazeSwitch: true,
					},
					page: {
						brazeApiKey: 'fake-api-key',
						isPaidContent: false,
					},
				},
			},
		});
		mockBrazeUuid = 'fake-uuid';
		mockHasRequiredConsents = true;
		mockHideSupportMessaging = false;

		const isSignedIn = true;
		const idApiUrl = 'https://idapi.example.com';
		const { isSuccessful } = await checkBrazeDependencies(
			isSignedIn,
			idApiUrl,
		);

		expect(isSuccessful).toEqual(false);
	});
});
