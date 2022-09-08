import type { ABTest } from 'npm:@guardian/ab-core';

export const consentlessAds: ABTest = {
	id: 'ConsentlessAds',
	author: '@commercial-dev',
	start: '2022-08-11',
	expiry: '2023-06-01',
	audience: 0 / 100,
	audienceOffset: 0 / 100,
	audienceCriteria: 'All pageviews',
	successMeasure: 'Testing Opt Out ads in production',
	description: 'Use consentless ad stack rather than consented / standalone',
	variants: [
		{ id: 'control', test: (): void => {} },
		{ id: 'variant', test: (): void => {} },
	],
	canRun: () => true,
};
