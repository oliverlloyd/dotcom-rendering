type ConditionConfig = {
	name: string;
	condition: Condition;
};

type Condition = Promise<any>;

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

type ConditionResult = SuccessResult | FailureResult;

const checkConditions = async (
	preChecks: Array<ConditionConfig>,
): Promise<ConditionResult> => {
	return preChecks.reduce<Promise<ConditionResult>>(
		async (acc, cur): Promise<ConditionResult> => {
			const syncAcc = await acc;
			if (!syncAcc.isSuccessful) {
				return acc;
			}

			let result;
			try {
				result = await cur.condition;
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

export { checkConditions };
