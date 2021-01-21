import { getBrazeUuid } from '@root/src/web/lib/getBrazeUuid';
import { hasRequiredConsents } from './hasRequiredConsents';
import { hideSupportMessaging } from './hideSupportMessaging';

type SuccessResult = {
	isSuccessful: true;
	data: ResultData;
};

type FailureResult = {
	isSuccessful: false;
	failureField: string;
	failureData: any;
	data: ResultData;
};

type DependenciesResult = SuccessResult | FailureResult;

type ResultData = { [key: string]: string | boolean };

type DependencyResult = {
	name: string;
	value: Promise<string | boolean | null | undefined>;
};
const buildFailureResponse = (name: string, value: any, data: ResultData) => ({
	isSuccessful: false,
	failureField: name,
	failureData: value,
	data,
});

const buildDependencies = (
	isSignedIn: boolean,
	idApiUrl: string,
): DependencyResult[] => {
	return [
		{
			name: 'brazeSwitch',
			value: Promise.resolve(window.guardian.config.switches.brazeSwitch),
		},
		{
			name: 'apiKey',
			value: Promise.resolve(window.guardian.config.page.brazeApiKey),
		},
		{
			name: 'brazeUuid',
			value: isSignedIn ? getBrazeUuid(idApiUrl) : Promise.resolve(null),
		},
		{
			name: 'consent',
			value: hasRequiredConsents(),
		},
		{
			name: 'userIsGuSupporter',
			value: Promise.resolve(hideSupportMessaging()),
		},
		{
			name: 'isNotPaidContent',
			value: Promise.resolve(!window.guardian.config.page.isPaidContent),
		},
	];
};

const checkBrazeDependencies = async (
	isSignedIn: boolean,
	idApiUrl: string,
): Promise<DependenciesResult> => {
	const dependencies = buildDependencies(isSignedIn, idApiUrl);

	const data: ResultData = {};

	for (const { name, value } of dependencies) {
		try {
			// eslint-disable-next-line no-await-in-loop
			const result = await value;

			if (result) {
				data[name] = result;
			} else {
				return buildFailureResponse(name, result, data);
			}
		} catch (e) {
			return buildFailureResponse(
				name,
				e && e.message ? e.message : e,
				data,
			);
		}
	}

	return {
		isSuccessful: true,
		data,
	};

	// return Promise.allSettled(dependencies.map((d) => d.value)).then(
	// 	(results) => {
	// 		const data: ResultData = {};
	// 		let failure: { failureField: string; failureData: any } | undefined;

	// 		results.forEach((result, idx) => {
	// 			if (failure) return;

	// 			const { name } = dependencies[idx];

	// 			if (result.status === 'fulfilled' && result.value) {
	// 				data[name] = result.value;
	// 			} else if (result.status === 'fulfilled') {
	// 				failure = {
	// 					failureField: name,
	// 					failureData: result.value,
	// 				};
	// 			} else {
	// 				failure = {
	// 					failureField: name,
	// 					failureData: result.reason,
	// 				};
	// 			}
	// 		});

	// 		if (failure) {
	// 			return {
	// 				isSuccessful: false,
	// 				data,
	// 				failureField: failure.failureField,
	// 				failureData: failure.failureData,
	// 			};
	// 		}

	// 		return {
	// 			isSuccessful: true,
	// 			data,
	// 		};
	// 	},
	// );
};

export { checkBrazeDependencies };
