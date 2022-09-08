import { updateIframeHeight } from '../updateIframeHeight.ts';

export const atomIframe = (): Promise<void> =>
	updateIframeHeight('.atom__iframe');
