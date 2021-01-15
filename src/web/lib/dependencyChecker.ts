type DependencyConfig = {
	name: string;
	dependency: Dependency;
};

type Dependency = Promise<any>;

type SuccessResult = {
	isSuccessful: true;
	data: { [key: string]: any };
};

type FailureResult = {
	isSuccessful: false;
	failureField: string;
	failureData: any;
	data: { [key: string]: any };
};

type DependencyResult = SuccessResult | FailureResult;

const checkDependencies = async (
	dependencies: Array<DependencyConfig>,
): Promise<DependencyResult> => {
	return dependencies.reduce<Promise<DependencyResult>>(
		async (acc, cur): Promise<DependencyResult> => {
			const syncAcc = await acc;
			if (!syncAcc.isSuccessful) {
				return acc;
			}

			let result;
			try {
				result = await cur.dependency;
			} catch (e) {
				return {
					isSuccessful: false,
					failureField: cur.name,
					failureData: e && e.message ? e.message : e,
					data: syncAcc.data,
				};
			}

			if (!result) {
				return {
					isSuccessful: false,
					failureField: cur.name,
					failureData: result,
					data: syncAcc.data,
				};
			}

			return {
				isSuccessful: true,
				data: {
					[cur.name]: result,
					...syncAcc.data,
				},
			};
		},
		Promise.resolve({
			isSuccessful: true,
			data: {},
		}),
	);
};

export { checkDependencies, DependencyConfig, DependencyResult };
