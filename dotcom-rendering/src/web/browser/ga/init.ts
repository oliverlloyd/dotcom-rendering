import '../webpackPublicPath';
import { startup } from '../startup.ts';
import { init as initGa, sendPageView } from './ga.ts';

const init = (): Promise<void> => {
	initGa();
	sendPageView();

	return Promise.resolve();
};

startup('ga', null, init);
