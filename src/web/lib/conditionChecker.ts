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
	return preChecks.reduce(async (acc: Promise<PreCheckResult>, cur) => {
		const [syncAcc, result] = await Promise.all([acc, cur.condition]);

		if (result) {
			return {
				isSuccessful: true,
				data: {
					[cur.name]: result,
					...syncAcc.data,
				},
			};
		}

		return Promise.resolve({
			isSuccessful: false,
			failureReason: cur.name,
			data: syncAcc.data,
		});
	}, Promise.resolve({ isSuccessful: true, data: {} } as SuccessResult));
};

export { runPreChecks };
