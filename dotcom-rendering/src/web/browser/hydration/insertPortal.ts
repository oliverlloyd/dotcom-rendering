/* eslint-disable @typescript-eslint/no-unsafe-member-access */
import { render, h } from 'preact';
// import { log } from '@guardian/libs';
import { initPerf } from '../initPerf';

export const insertPortal = (name: string, data: any, marker: HTMLElement) => {
	const { start, end } = initPerf(name);
	start();
	import(
		/* webpackInclude: /(ReaderRevenueLinks|HelloWorld)\.tsx$/ */
		`../../components/${name}`
	)
		.then((module) => {
			render(h(module[name], data), marker);
			end();
		})
		.catch((error) => {
			if (name && error.message.includes(name)) {
				// Most likely, we're being asked to render a component whose name hasn't been added to the
				// webpackInclude option in the dynamic import statement above
				console.error(
					`🚨 Error importing ${name}. Did you forget to update webpackInclude in hydration/insertPortal.ts? 🚨`,
				);
			}
			throw error;
		});
};
