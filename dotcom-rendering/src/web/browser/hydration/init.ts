import '../webpackPublicPath';

import { startup } from '@root/src/web/browser/startup';
// import { log } from '@guardian/libs';
import { whenVisible } from './whenVisible';
import { whenIdle } from './whenIdle';
import { doHydration } from './doHydration';
import { insertPortal } from './insertPortal';
import { getName } from './getName';
import { getProps } from './getProps';

const init = () => {
	const hydrationMarkers = document.querySelectorAll('gu-hydrate');
	hydrationMarkers.forEach((domElement) => {
		if (domElement instanceof HTMLElement) {
			const name = getName(domElement);
			const props = getProps(domElement);

			if (!name) return;

			const when = domElement.getAttribute('when');
			switch (when) {
				case 'idle':
					{
						whenIdle(() => {
							doHydration(name, props, domElement);
						});
					}
					break;
				case 'visible':
					{
						whenVisible(domElement, () => {
							doHydration(name, props, domElement);
						});
					}
					break;
				case 'immediate':
				default: {
					doHydration(name, props, domElement);
				}
			}
		}
	});

	const portalMarkers = document.querySelectorAll('gu-portal');
	portalMarkers.forEach((domElement) => {
		if (domElement instanceof HTMLElement) {
			const name = getName(domElement);
			const props = getProps(domElement);

			if (!name) return;

			const when = domElement.getAttribute('when');
			switch (when) {
				case 'idle':
					{
						whenIdle(() => {
							insertPortal(name, props, domElement);
						});
					}
					break;
				case 'visible':
					{
						whenVisible(domElement, () => {
							insertPortal(name, props, domElement);
						});
					}
					break;
				case 'immediate':
				default: {
					insertPortal(name, props, domElement);
				}
			}
		}
	});

	return Promise.resolve();
};

startup('hydration', null, init);
