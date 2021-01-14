type PreCheck = {
	name: string;
	condition: PreCheckPromise;
};

type PreCheckPromise = Promise<any>;

type SuccessResult = { isSuccessful: true; data: { [key: string]: any } };
type FailureResult = {
	isSuccessful: false;
	failureReason: string;
	data: { [key: string]: any };
};
type PreCheckResult = SuccessResult | FailureResult;

const runPreChecks = async (
	preChecks: Array<PreCheck>,
): Promise<PreCheckResult> => {
	return preChecks.reduce<Promise<PreCheckResult>>(
		async (acc, cur): Promise<PreCheckResult> => {
			const syncAcc = await acc;
			if (!syncAcc.isSuccessful) {
				return acc;
			}

			let result;
			try {
				result = await cur.condition;
			} catch {
				result = null;
			}

			if (result) {
				return {
					isSuccessful: true,
					data: {
						[cur.name]: result,
						...syncAcc.data,
					},
				};
			}

			return {
				isSuccessful: false,
				failureReason: cur.name,
				data: syncAcc.data,
			};
		},
		Promise.resolve({
			isSuccessful: true,
			data: {},
		}),
	);
};

export { runPreChecks };
