import '../webpackPublicPath';
import { startup } from '../startup.ts';
import { updateTimeElements } from './updateTimeElements.ts';

const init = (): Promise<void> => {
	updateTimeElements();
	window.setInterval(() => {
		updateTimeElements();
	}, 15000);

	return Promise.resolve();
};

startup('relativeTime', null, init);
