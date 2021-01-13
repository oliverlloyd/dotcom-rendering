import { runPreChecks } from './conditionChecker';

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
			failureReason: 'failedCheck',
			data: { passedCheckFirst: true },
		});
	});
});
