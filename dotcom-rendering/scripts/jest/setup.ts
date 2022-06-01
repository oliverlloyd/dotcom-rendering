// add some helpful assertions
import 'jest-dom/extend-expect';

import type { WindowGuardianConfig } from '../../src/model/window-guardian';

const windowGuardianConfig = {
	page: {
		sentryPublicApiKey: '344003a8d11c41d8800fbad8383fdc50',
		sentryHost: 'app.getsentry.com/35463',
		dcrSentryDsn:
			'https://1937ab71c8804b2b8438178dfdd6468f@sentry.io/1377847',
	},
	ophan: {
		browserId: 'jest-browser-id',
		pageViewId: 'jest-page-view-id',
	},
} as WindowGuardianConfig;

const windowGuardian = {
	app: {
		data: {},
	},
	config: windowGuardianConfig,
	mustardCut: false,
	polyfilled: false,
	onPolyfilled: () => undefined,
	queue: [],
	ophan: {
		setEventEmitter: () => null,
		trackComponentAttention: () => null,
		record: () => null,
		viewId: '',
		pageViewId: '',
	},
	modules: {
		sentry: {
			reportError: (error: Error): void => {
				console.log(
					`Error: attempting to log error without having registered sentry.\nError is: ${error.message}`,
				);
			},
		},
	},
	functions: {
		import: (url: string) => import(url),
	},
	automat: {
		react: undefined,
		preact: undefined,
		emotion: undefined,
		emotionCore: undefined,
		emotionTheming: undefined,
	},
	readerRevenue: {
		changeGeolocation: () => {},
		showMeTheEpic: () => {},
		showMeTheBanner: () => {},
		showNextVariant: () => {},
		showPreviousVariant: () => {},
	},
	gaPath: '/assets/ga.js',
};

// Stub global Guardian object
// We should never be able to directly set things to the global window object.
// But in this case we want to stub things for testing, so it's ok to ignore this rule
// @ts-expect-error
window.guardian = windowGuardian;

// Mock Local Storage
// See: https://github.com/facebook/jest/issues/2098#issuecomment-260733457

const localStorageMock = (function () {
	let store: {
		[key: string]: string;
	} = {};
	return {
		getItem(key: string) {
			return store[key] || null;
		},
		setItem(key: string, value: string) {
			store[key] = value.toString();
		},
		removeItem(key: string) {
			delete store[key];
		},
		clear() {
			store = {};
		},
	};
})();

Object.defineProperty(window, 'localStorage', {
	value: localStorageMock,
});
