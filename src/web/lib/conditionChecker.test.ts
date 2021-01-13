import { runPreChecks } from './conditionChecker';

describe('runPreChecks', () => {
	it('resolves with a promise containing check values when all checks are successful', async () => {
		const checks = [
			{ name: 'first', condition: Promise.resolve(true) },
			{ name: 'second', condition: Promise.resolve(true) },
		];

		const got = await runPreChecks(checks);

		expect(got).toEqual({
			first: true,
			second: true,
		});
	});

	it('returns a rejected promise if any of the underlying checks fail', () => {
		expect.assertions(1);
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

		return runPreChecks(checks).catch((e) => {
			expect(e).toEqual(new Error('Failed check: failedCheck'));
		});
	});
});
