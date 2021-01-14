import { runPreChecks } from './conditionChecker';

afterEach(() => {
	// Wait for any unsettled promises to complete at the end of each test. Once
	// we encounter a failure in our list of checks we don't need to wait on
	// subsequent operations to complete which is why there might be unsettled
	// promises.
	const flushPromises = new Promise(setImmediate);
	return flushPromises;
});

describe('runPreChecks', () => {
	it('resolves with a promise containing check values when all checks are successful', async () => {
		const checks = [
			{ name: 'first', condition: Promise.resolve(true) },
			{ name: 'second', condition: Promise.resolve(true) },
		];

		const got = await runPreChecks(checks);

		expect(got).toEqual({
			isSuccessful: true,
			data: { first: true, second: true },
		});
	});

	it('returns a rejected promise if any of the underlying checks fail', async () => {
		const checks = [
			{
				name: 'passedCheckFirst',
				condition: Promise.resolve(true),
			},
			{
				name: 'failedCheck',
				condition: Promise.resolve(false),
			},
			{
				name: 'passedCheckSecond',
				condition: Promise.resolve(true),
			},
		];

		const got = await runPreChecks(checks);

		expect(got).toEqual({
			isSuccessful: false,
			failureField: 'failedCheck',
			failureData: false,
			data: { passedCheckFirst: true },
		});
	});

	it('returns a rejected promise if any of the underlying checks errors', async () => {
		const checks = [
			{
				name: 'passedCheckFirst',
				condition: Promise.resolve(true),
			},
			{
				name: 'errorCheck',
				condition: Promise.reject(new Error('Something went wrong')),
			},
		];

		const got = await runPreChecks(checks);

		expect(got).toEqual({
			isSuccessful: false,
			failureField: 'errorCheck',
			failureData: 'Something went wrong',
			data: { passedCheckFirst: true },
		});
	});
});
