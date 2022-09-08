import '../webpackPublicPath';

import { startup } from '../startup.ts';
import { initHydration } from './initHydration.ts';

const init = () => {
	const elements = document.querySelectorAll('gu-island');
	initHydration(elements);

	return Promise.resolve();
};

startup('islands', null, init);
