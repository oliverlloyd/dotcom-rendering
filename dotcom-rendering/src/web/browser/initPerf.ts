import { log } from '@guardian/libs';

export const initPerf = (
	name: string,
): { start: () => void; end: () => number; clear: () => void } => {
	type TimeTakenInMilliseconds = number;

	const perf = window.performance;
	const startKey = `${name}-start`;
	const endKey = `${name}-end`;

	if (!perf?.getEntriesByName || !perf?.measure) {
		// Return noops if window.performance or the required functions don't exist
		return {
			start: () => {},
			end: () => 0,
			clear: () => {},
		};
	}

	const start = () => {
		perf.mark(startKey);
	};

	const end = (): TimeTakenInMilliseconds => {
		perf.mark(endKey);
		const measure = perf.measure(name, startKey, endKey);

		// eslint-disable-next-line no-console
		log('dotcom', JSON.stringify(perf.getEntriesByName(name)));

		if (!window.guardian.perf) window.guardian.perf = {};
		window.guardian.perf[name] = Math.round(measure.duration);

		return Math.round(measure.duration);
	};

	const clear = () => {
		perf.clearMarks(startKey);
		perf.clearMarks(endKey);
		perf.clearMeasures(name);
	};

	return {
		start,
		end,
		clear,
	};
};
