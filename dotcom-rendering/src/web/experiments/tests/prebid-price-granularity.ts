import type { ABTest } from '@guardian/ab-core';

export const prebidPriceGranularity: ABTest = {
	id: 'PrebidPriceGranularity',
	start: '2022-04-05',
	expiry: '2022-06-09',
	author: 'Chris Jones (@chrislomaxjones)',
	description:
		'Test the commercial impact of changing Prebid Price granularity for Ozone',
	audience: 5 / 100,
	audienceOffset: 25 / 100,
	successMeasure:
		'No significant negative impact on CPM when using a granularity that permits fewer line items',
	audienceCriteria: 'n/a',
	canRun: () => true,
	variants: [
		{
			id: 'control',
			test: () => {},
		},
		{
			id: 'variant',
			test: () => {},
		},
	],
};
