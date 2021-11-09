import '../webpackPublicPath';

import { startup } from '@root/src/web/browser/startup';
import { hydrate, h } from 'preact';
import { initPerf } from '../initPerf';

const init = () => {
	const markers = document.querySelectorAll('gu-hydrate');
	markers.forEach((marker) => {
		if (marker instanceof HTMLElement) {
			const p = marker.getAttribute('props');
			const name = marker.getAttribute('name');

			try {
				const data = p && JSON.parse(p);
				if (name) {
					const { start, end } = initPerf(name);
					start();
					import(
						/* webpackInclude: /(ClientComponent|HelloWorld)\.tsx$/ */
						/* webpackMode: "lazy-once" */
						/* webpackChunkName: "hydrate" */
						`../../components/${name}`
					)
						.then((module) => {
							hydrate(h(module[name], data), marker);
							end();
						})
						.catch((error) => {
							if (name && error.message.includes(name)) {
								// Most likely, we're being asked to hydrate a component whose name hasn't been added to the
								// webpackInclude option in the dynamic import statement above
								console.error(
									`🚨 Error importing ${name}. Did you forget to update webpackInclude in hydration/init.ts? 🚨`,
								);
								return;
							}
							throw error;
						});
				} else {
					console.error(
						`🚨 Error hydrating marker. No component name attribute supplied, check children.type.name in Hydrate.tsx 🚨`,
					);
				}
			} catch (error: unknown) {
				console.error(
					`🚨 Error hydrating ${name}. Are these props serialisable? ${p} 🚨`,
				);
				throw error;
			}
		}
	});

	return Promise.resolve();
};

startup('hydration', null, init);
