import {
	checkDependencies,
	DependencyConfig,
	DependencyResult,
} from '@root/src/web/lib/dependencyChecker';

import { hasRequiredConsents } from './hasRequiredConsents';

const getCompleteDependencies = async (
	asyncBrazeUuid: Promise<null | string>,
	shouldHideSupportMessaging: undefined | boolean,
): Promise<Array<DependencyConfig>> => {
	return [
		{
			name: 'brazeSwitch',
			dependency: Promise.resolve(
				window.guardian.config.switches.brazeSwitch,
			),
		},
		{
			name: 'apiKey',
			dependency: Promise.resolve(
				window.guardian.config.page.brazeApiKey,
			),
		},
		{
			name: 'consent',
			dependency: hasRequiredConsents(),
		},
		{
			name: 'isNotPaidContent',
			dependency: Promise.resolve(
				!window.guardian.config.page.isPaidContent,
			),
		},
		{
			name: 'brazeUuid',
			dependency: asyncBrazeUuid,
		},
		{
			name: 'userIsGuSupporter',
			// Currently all active web canvases in Braze target existing supporters,
			// subscribers or otherwise those with a Guardian product. We can use the
			// value of `shouldHideSupportMessaging` to identify these users, limiting
			// the number of requests we need to initialise Braze on the page:
			dependency: Promise.resolve(shouldHideSupportMessaging),
		},
	];
};

const checkBrazeDependencies = async (
	asyncBrazeUuid: Promise<null | string>,
	shouldHideSupportMessaging: undefined | boolean,
): Promise<DependencyResult> => {
	return checkDependencies(
		await getCompleteDependencies(
			asyncBrazeUuid,
			shouldHideSupportMessaging,
		),
	);
};

export { checkBrazeDependencies };
