import express from 'express';
import { extractNAV } from '@root/src/model/extract-nav';

import { document } from '@root/src/web/server/document';
import { enhanceCAPI } from '@root/src/model/enhanceCAPI';
import { extract as extractGA } from '@root/src/model/extract-ga';
import { Article as ExampleArticle } from '@root/fixtures/generated/articles/Article';

export const renderArticle = (
	req: express.Request,
	res: express.Response,
): void => {
	// This code is copied from:
	// https://web.dev/user-preference-media-features-headers/
	// Tell the client the server accepts the `Sec-CH-Prefers-Color-Scheme` client hint…
	res.set('Accept-CH', 'Sec-CH-Prefers-Color-Scheme');
	// …and that the server's response will vary based on its value…
	res.set('Vary', 'Sec-CH-Prefers-Color-Scheme');
	// …and that the server considers this client hint a _critical_ client hint.
	res.set('Critical-CH', 'Sec-CH-Prefers-Color-Scheme');
	// Read the user's preferred color scheme from the headers…
	const prefersColorScheme = req.get('sec-ch-prefers-color-scheme');

	try {
		const CAPI = enhanceCAPI(req.body);
		const resp = document({
			data: {
				CAPI,
				site: 'frontend',
				page: 'Article',
				NAV: extractNAV(CAPI.nav),
				GA: extractGA(CAPI),
				linkedData: CAPI.linkedData,
			},
			prefersColorScheme,
		});

		res.status(200).send(resp);
	} catch (e) {
		// @ts-expect-error
		// eslint-disable-next-line @typescript-eslint/no-unsafe-member-access
		res.status(500).send(`<pre>${e.stack}</pre>`);
	}
};

export const renderArticleJson = (
	{ body }: express.Request,
	res: express.Response,
): void => {
	try {
		const CAPI = enhanceCAPI(body);
		const resp = {
			data: {
				CAPI,
				site: 'frontend',
				page: 'Article',
				NAV: extractNAV(CAPI.nav),
				GA: extractGA(CAPI),
				linkedData: CAPI.linkedData,
			},
		};

		res.status(200).send(resp);
	} catch (e) {
		// @ts-expect-error
		// eslint-disable-next-line @typescript-eslint/no-unsafe-member-access
		res.status(500).send(`<pre>${e.stack}</pre>`);
	}
};

export const renderPerfTest = (
	req: express.Request,
	res: express.Response,
): void => {
	req.body = ExampleArticle;
	renderArticle(req, res);
};

export const renderInteractive = (
	{ body }: express.Request,
	res: express.Response,
): void => {
	try {
		const CAPI = enhanceCAPI(body);
		const resp = document({
			data: {
				CAPI,
				site: 'frontend',
				page: 'Interactive',
				NAV: extractNAV(CAPI.nav),
				GA: extractGA(CAPI),
				linkedData: CAPI.linkedData,
			},
			prefersColorScheme: 'light',
		});

		res.status(200).send(resp);
	} catch (e) {
		// @ts-expect-error
		// eslint-disable-next-line @typescript-eslint/no-unsafe-member-access
		res.status(500).send(`<pre>${e.stack}</pre>`);
	}
};
