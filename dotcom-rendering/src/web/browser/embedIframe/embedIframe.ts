import { updateIframeHeight } from '../updateIframeHeight.ts';

export const embedIframe = (): Promise<void> =>
	updateIframeHeight('.js-embed__iframe');
