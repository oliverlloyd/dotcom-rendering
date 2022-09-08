import type { ABTest } from 'npm:@guardian/ab-core';
import {
	initCommercialMetrics,
	bypassCommercialMetricsSampling as switchOffSampling,
} from 'npm:@guardian/commercial-core';
import { getCookie } from 'npm:@guardian/libs';
import type { ServerSideTestNames } from '../../types/config.ts';
import { tests } from '../experiments/ab-tests.ts';
import { useAB } from '../lib/useAB.ts';
import { useAdBlockInUse } from '../lib/useAdBlockInUse.ts';
import { useOnce } from '../lib/useOnce.ts';

type Props = {
	enabled: boolean;
};

export const CommercialMetrics = ({ enabled }: Props) => {
	const ABTestAPI = useAB();
	const adBlockerInUse = useAdBlockInUse();

	useOnce(() => {
		const browserId = getCookie({ name: 'bwid', shouldMemoize: true });
		const pageViewId = window.guardian.config.ophan.pageViewId;

		// Only send metrics if the switch is enabled
		if (!enabled) return;

		// For these tests switch off sampling and collect metrics for 100% of views
		const clientSideTestsToForceMetrics: ABTest[] = [
			/* keep array multi-line */
		];

		const userInClientSideTestToForceMetrics = ABTestAPI?.allRunnableTests(
			tests,
		).some((test) =>
			clientSideTestsToForceMetrics.map((t) => t.id).includes(test.id),
		);

		const serverSideTestsToForceMetrics: Array<ServerSideTestNames> = [
			/* keep array multi-line */
			'commercialEndOfQuarterMegaTestVariant',
			'commercialEndOfQuarterMegaTestControl',
		];

		const userInServerSideTestToForceMetrics =
			serverSideTestsToForceMetrics.some((test) =>
				Object.keys(window.guardian.config.tests).includes(test),
			);

		const isDev =
			window.guardian.config.page.isDev ||
			window.location.hostname.includes(
				process.env.HOSTNAME || 'localhost',
			);

		initCommercialMetrics({
			pageViewId,
			browserId: browserId || undefined,
			isDev,
			adBlockerInUse,
		})
			.then(() => {
				if (
					userInClientSideTestToForceMetrics ||
					userInServerSideTestToForceMetrics
				) {
					// TODO: rename this in commercial-core and update here

					void switchOffSampling();
				}
			})
			.catch((e) =>
				console.error(
					`Error initialising commercial metrics: ${String(e)}`,
				),
			);
	}, [ABTestAPI, adBlockerInUse, enabled]);

	// We don’t render anything
	return null;
};
