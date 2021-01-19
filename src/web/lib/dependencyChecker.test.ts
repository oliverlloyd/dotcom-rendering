import { checkDependencies } from './dependencyChecker';

afterEach(() => {
	// Wait for any unsettled promises to complete at the end of each test. Once
	// we encounter a failure in our list of checks we don't need to wait on
	// subsequent operations to complete which is why there might be unsettled
	// promises.
	const flushPromises = new Promise(setImmediate);
	return flushPromises;
});

describe('checkDependencies', () => {
	describe('when all checks are successful', () => {
		it('returns a promise which resolves with success status and data from checks', async () => {
			const checks = [
				{ name: 'first', dependency: Promise.resolve(true) },
				{ name: 'second', dependency: Promise.resolve(true) },
			];

			const got = await checkDependencies(checks);

			expect(got).toEqual({
				isSuccessful: true,
				data: { first: true, second: true },
			});
		});
	});

	describe('when a check fails', () => {
		it('returns a promise which resolves with failure status and data from checks so far', async () => {
			const checks = [
				{
					name: 'passedCheckFirst',
					dependency: Promise.resolve(true),
				},
				{
					name: 'failedCheck',
					dependency: Promise.resolve(false),
				},
				{
					name: 'passedCheckSecond',
					dependency: Promise.resolve(true),
				},
			];

			const got = await checkDependencies(checks);

			expect(got).toEqual({
				isSuccessful: false,
				failureField: 'failedCheck',
				failureData: false,
				data: { passedCheckFirst: true },
			});
		});
	});

	describe('when a check errors', () => {
		it('returns a promise which resolves with failure status and data from checks so far', async () => {
			const checks = [
				{
					name: 'passedCheckFirst',
					dependency: Promise.resolve(true),
				},
				{
					name: 'errorCheck',
					dependency: Promise.reject(
						new Error('Something went wrong'),
					),
				},
			];

			const got = await checkDependencies(checks);

			expect(got).toEqual({
				isSuccessful: false,
				failureField: 'errorCheck',
				failureData: 'Something went wrong',
				data: { passedCheckFirst: true },
			});
		});
	});
});
