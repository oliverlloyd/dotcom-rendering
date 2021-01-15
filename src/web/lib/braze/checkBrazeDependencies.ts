import {
	checkDependencies,
	DependencyConfig,
	DependencyResult,
} from '@root/src/web/lib/dependencyChecker';
import { getBrazeUuid } from '@root/src/web/lib/getBrazeUuid';
import { hasRequiredConsents } from './hasRequiredConsents';
import { hideSupportMessaging } from './hideSupportMessaging';

const getCompleteDependencies = async (
	isSignedIn: boolean,
	idApiUrl: string,
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
			dependency: isSignedIn
				? getBrazeUuid(idApiUrl)
				: Promise.resolve(null),
		},
		{
			name: 'userIsGuSupporter',
			// Currently all active web canvases in Braze target existing supporters,
			// subscribers or otherwise those with a Guardian product. We can use the
			// value of `shouldHideSupportMessaging` to identify these users, limiting
			// the number of requests we need to initialise Braze on the page:
			dependency: Promise.resolve(hideSupportMessaging()),
		},
	];
};

const checkBrazeDependencies = async (
	isSignedIn: boolean,
	idApiUrl: string,
): Promise<DependencyResult> => {
	return checkDependencies(
		await getCompleteDependencies(isSignedIn, idApiUrl),
	);
};

export { checkBrazeDependencies };
