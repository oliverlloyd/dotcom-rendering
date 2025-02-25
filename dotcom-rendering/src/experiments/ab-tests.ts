import type { ABTest } from '@guardian/ab-core';
import { abTestTest } from './tests/ab-test-test';
import { billboardsInMerch } from './tests/billboards-in-merch';
import { consentlessAds } from './tests/consentless-ads';
import { elementsManager } from './tests/elements-manager';
import { integrateIma } from './tests/integrate-ima';
import { limitInlineMerch } from './tests/limit-inline-merch';
import { removeBusinessLiveblogEpics } from './tests/remove-business-liveblog-epics';
import { signInGateCopyTestJan2023 } from './tests/sign-in-gate-copy-test-variants';
import { signInGateMainControl } from './tests/sign-in-gate-main-control';
import { signInGateMainVariant } from './tests/sign-in-gate-main-variant';

// keep in sync with ab-tests in frontend
// https://github.com/guardian/frontend/tree/main/static/src/javascripts/projects/common/modules/experiments/ab-tests.ts
export const tests: ABTest[] = [
	abTestTest,
	signInGateMainVariant,
	signInGateMainControl,
	signInGateCopyTestJan2023,
	consentlessAds,
	integrateIma,
	billboardsInMerch,
	elementsManager,
	limitInlineMerch,
	removeBusinessLiveblogEpics,
];
