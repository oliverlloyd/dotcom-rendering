import { log } from '@guardian/libs';

export const initPerf = (
	name: string,
): { start: () => void; end: () => number; clear: () => void } => {
	type TimeTakenInMilliseconds = number;

	const perf = window.performance;
	const startKey = `${name}-start`;
	const endKey = `${name}-end`;

	if (!perf || !perf.getEntriesByName) {
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
		perf.measure(name, startKey, endKey);

		log('dotcom', JSON.stringify(perf.getEntriesByName(name)));

		const measureEntries = perf.getEntriesByName(name, 'measure');
		const timeTakenFloat =
			(measureEntries &&
				measureEntries[0] &&
				measureEntries[0].duration) ||
			0;
		const timeTakenInt = Math.round(timeTakenFloat);

		return timeTakenInt;
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
