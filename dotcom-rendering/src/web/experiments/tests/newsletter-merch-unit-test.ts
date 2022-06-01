import type { ABTest } from '@guardian/ab-core';

export const newsletterMerchUnitLighthouseControl: ABTest = {
	id: 'NewsletterMerchUnitLighthouseControl',
	start: '2020-11-11',
	expiry: '2020-12-08',
	author: 'Josh Buckland & Alex Dufournet',
	description:
		'Show BAU merch unit to 50% of users. This is the control for the NewsletterMerchUnitLighthouseVariants test.',
	audience: 0.5,
	audienceOffset: 0.0,
	successMeasure:
		'We see increased engagement from users shown the Newsletters ad unit',
	audienceCriteria: 'Website users only.',
	idealOutcome: 'Investigate lighthouse segment engagement via newsletters',
	showForSensitive: false,
	canRun: () => true,
	variants: [
		{
			id: 'control',
			test: (): void => {},
		},
	],
};

export const newsletterMerchUnitLighthouseVariants: ABTest = {
	id: 'NewsletterMerchUnitLighthouseVariants',
	start: '2020-11-11',
	expiry: '2020-12-08',
	author: 'Josh Buckland & Alex Dufournet',
	description:
		'Show a newsletter advert in the merchandising unit to 25% of users and reader revenue' +
		'to another 25%. The remaining 50% are covered by NewsletterMerchUnitLighthouseControl ' +
		'which needs to run at the same time. These two variants test the value of showing ' +
		'newsletter merch units instead of reader revenue ones. ',
	audience: 0.5,
	audienceOffset: 0.5,
	successMeasure:
		'We see increased engagement from users shown the Newsletters ad unit',
	audienceCriteria: 'Website users only.',
	idealOutcome: 'Investigate lighthouse segment engagement via newsletters',
	showForSensitive: false,
	canRun: () => true,
	variants: [
		{
			id: 'newsletter',
			test: (): void => {},
		},
		{
			id: 'reader-revenue',
			test: (): void => {},
		},
	],
};
