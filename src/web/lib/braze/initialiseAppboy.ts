const SDK_OPTIONS = {
	enableLogging: false,
	noCookies: true,
	baseUrl: 'https://sdk.fra-01.braze.eu/api/v3',
	sessionTimeoutInSeconds: 1,
	minimumIntervalBetweenTriggerActionsInSeconds: 0,
};

let memoizedAppboyPromise: Promise<any>;

const getInitialisedAppboy = async (apiKey: string): Promise<any> => {
	if (memoizedAppboyPromise) {
		console.log('appboy is memoized');
		return memoizedAppboyPromise;
	}
	console.log('appboy is not memoized');

	memoizedAppboyPromise = import(
		/* webpackChunkName: "braze-web-sdk-core" */ '@braze/web-sdk-core'
	).then(({ default: appboy }) => {
		appboy.initialize(apiKey, SDK_OPTIONS);
		return appboy;
	});

	return memoizedAppboyPromise;
};

export { getInitialisedAppboy };
