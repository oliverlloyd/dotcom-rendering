import { AB } from 'npm:@guardian/ab-core';
import type { CoreAPIConfig } from 'npm:@guardian/ab-core/dist/types';
import { getCookie, log } from 'npm:@guardian/libs';
import type { ABTestSwitches } from '../../model/enhance-switches.ts';
import { getOphanRecordFunction } from '../browser/ophan/ophan.ts';
import { tests } from '../experiments/ab-tests.ts';
import { getCypressSwitches } from '../experiments/cypress-switches.ts';
import { getForcedParticipationsFromUrl } from '../lib/getAbUrlHash.ts';
import { setABTests } from '../lib/useAB.ts';

type Props = {
	abTestSwitches: ABTestSwitches;
	forcedTestVariants?: CoreAPIConfig['forcedTestVariants'];
	isDev: boolean;
	pageIsSensitive: CoreAPIConfig['pageIsSensitive'];
};

export const SetABTests = ({
	isDev,
	pageIsSensitive,
	abTestSwitches,
	forcedTestVariants,
}: Props) => {
	const mvtId = Number(
		(isDev &&
			getCookie({ name: 'GU_mvt_id_local', shouldMemoize: true })) || // Simplify localhost testing by creating a different mvt id
			getCookie({ name: 'GU_mvt_id', shouldMemoize: true }),
	);
	if (!mvtId) {
		// 0 is default and falsy here

		console.log('There is no MVT ID set, see SetABTests.importable.tsx');
	}
	const ophanRecord = getOphanRecordFunction();
	const windowHash = window.location.hash;
	// Get the forced switches to use for when running within cypress
	// Is empty object if not in cypress
	const cypressAbSwitches = getCypressSwitches();

	const ab = new AB({
		mvtId,
		pageIsSensitive,
		abTestSwitches: {
			...abTestSwitches,
			...cypressAbSwitches, // by adding cypress switches below CAPI, we can override any production switch in Cypress
		},
		arrayOfTestObjects: tests,
		ophanRecord,
		forcedTestVariants: {
			...forcedTestVariants,
			...getForcedParticipationsFromUrl(windowHash),
		},
	});
	setABTests(ab);

	const allRunnableTests = ab.allRunnableTests(tests);
	ab.trackABTests(allRunnableTests);
	ab.registerImpressionEvents(allRunnableTests);
	ab.registerCompleteEvents(allRunnableTests);
	log('dotcom', 'AB tests initialised');

	// we don’t render anything
	return null;
};
