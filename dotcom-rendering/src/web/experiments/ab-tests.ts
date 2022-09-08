import type { ABTest } from 'npm:@guardian/ab-core';
import { abTestTest } from './tests/ab-test-test.ts';
import { consentlessAds } from './tests/consentless-ads.ts';
import {
	newsletterMerchUnitLighthouseControl,
	newsletterMerchUnitLighthouseVariants,
} from './tests/newsletter-merch-unit-test.ts';
import { signInGateMainControl } from './tests/sign-in-gate-main-control.ts';
import { signInGateMainVariant } from './tests/sign-in-gate-main-variant.ts';

// keep in sync with ab-tests in frontend
// https://github.com/guardian/frontend/tree/main/static/src/javascripts/projects/common/modules/experiments/ab-tests.ts
export const tests: ABTest[] = [
	abTestTest,
	signInGateMainVariant,
	signInGateMainControl,
	newsletterMerchUnitLighthouseControl,
	newsletterMerchUnitLighthouseVariants,
	consentlessAds,
];
