import '../webpackPublicPath';
import { isAdBlockInUse } from '@guardian/commercial-core';

const loadSentry = (): void => {
	try {
		// Downloading and initiliasing Sentry is asynchronous so we need a way
		// to ensure injection only happens once and to capture any other errors that
		// might happen while this script is loading
		let injected = false;
		const queue: Error[] = [];

		// Function that gets called when an error happens before Sentry is ready
		const injectSentry = async (error?: Error) => {
			// Remember this error for later
			if (error) queue.push(error);

			// Only inject once
			if (injected) {
				return;
			}
			injected = true;

			// Make this call blocking. We are queing errors while we wait for this code to run
			// so we won't miss any and by waiting here we ensure we will never make calls we
			// expect to be blocked
			// Ad blocker detection can be expensive so it is checked here rather than in init
			// to avoid blocking of the init flow
			const adBlockInUse: boolean = await isAdBlockInUse();
			if (adBlockInUse) {
				// Ad Blockers prevent calls to Sentry from working so don't try to load the lib
				return;
			}

			// Load sentry.ts
			const { reportError } = await import(
				/* webpackChunkName: "sentry" */ './sentry'
			);

			// Sentry takes over control of the window.onerror and
			// window.onunhandledrejection listeners but we need to
			// manually redefine our own custom error reporting function
			window.guardian.modules.sentry.reportError = reportError;

			// Now that we have the real reportError function available,
			// send any queued errors
			while (queue.length) {
				const queuedError = queue.shift();
				if (queuedError) reportError(queuedError);
			}
		};

		// This is how we lazy load Sentry. We setup custom functions and
		// listeners to inject Sentry when an error happens
		window.onerror = (message, url, line, column, error) =>
			injectSentry(error);
		window.onunhandledrejection = (event: undefined | { reason?: any }) =>
			event && injectSentry(event.reason);
		window.guardian.modules.sentry.reportError = (error) => {
			injectSentry(error).catch((e) =>
				console.error(`injectSentry - error: ${String(e)}`),
			);
		};
	} catch {
		// We failed to setup Sentry :(
	}
};

export { loadSentry };
