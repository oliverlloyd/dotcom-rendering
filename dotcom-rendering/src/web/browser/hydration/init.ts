/* eslint-disable @typescript-eslint/no-floating-promises */
/* eslint-disable @typescript-eslint/no-unsafe-member-access */
import '../webpackPublicPath';

import { startup } from '@root/src/web/browser/startup';
import { hydrate, h } from 'preact';
import { initPerf } from '../initPerf';

const init = () => {
	const markers = document.querySelectorAll('[data-hydrate="true"]');
	markers.forEach((marker) => {
		if (marker instanceof HTMLElement) {
			const p = marker.dataset.props || '';
			const name = marker.dataset.name || '';
			const data = JSON.parse(p);
			if (name) {
				const { start, end } = initPerf(name);
				start();
				import(
					/* webpackInclude: /ClientComponent\.tsx$/ */
					/* webpackMode: "lazy-once" */
					/* webpackChunkName: "hydrate" */
					`../../components/${name}`
				).then((module) => {
					hydrate(h(module[name], data), marker);
					end();
				});
			}
		}
	});

	return Promise.resolve();
};

startup('hydration', null, init);
