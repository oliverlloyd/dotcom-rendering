const prepare = <T extends string | number>(
	obj: Record<string, T>,
): Array<{ name: string; value: T }> =>
	Object.entries(obj).map(([name, value]) => ({ name, value }));

const listener = (e: Event) => {
	if (e.type === 'visibilitychange' && document.visibilityState !== 'hidden')
		return;

	const isDev = true;

	const { perf } = window.guardian;

	const data = {
		label: 'dotcom.initPerf',
		metrics: prepare(perf),
	};

	const endpoint = isDev
		? 'https://logs.code.dev-guardianapis.com/log'
		: 'https://logs.guardianapis.com/log';

	navigator.sendBeacon(endpoint, JSON.stringify(data));
	console.log('dotcom', 'Performance metrics queued for sending', perf);
};

window.addEventListener('visibilitychange', listener, { once: true });
window.addEventListener('pagehide', listener, { once: true });
