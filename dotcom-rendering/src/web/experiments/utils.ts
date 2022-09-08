import { bypassCommercialMetricsSampling } from 'npm:@guardian/commercial-core';
import { bypassCoreWebVitalsSampling } from 'npm:@guardian/libs';

export const bypassMetricsSampling = (): void => {
	void bypassCommercialMetricsSampling();
	void bypassCoreWebVitalsSampling();
};
