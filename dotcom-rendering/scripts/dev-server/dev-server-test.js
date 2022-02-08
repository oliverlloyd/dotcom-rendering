const express = require('express');
const fetch = require('node-fetch');

const router = express.Router();

router.get('/hello', (req, res) => {
	console.log(req.serverBuild);
	res.send('hello');
});

function buildUrlFromQueryParam(req) {
	// eslint-disable-next-line @typescript-eslint/no-unsafe-member-access
	if (!req.query.url) {
		throw new Error('The url query parameter is mandatory');
	}

	// eslint-disable-next-line @typescript-eslint/no-unsafe-member-access
	const url = new URL(req.query.url);
	// searchParams will only work for the first set of query params because 'url' is already a query param itself
	const searchparams = url.searchParams && url.searchParams.toString();
	// Reconstruct the parsed url adding .json?dcr which we need to force dcr to return json
	return `${url.origin}${url.pathname}.json?dcr=true&${searchparams}`;
}

router.get('/Article', async (req, res) => {
	if (!req.serverBuild) return res.send('Waiting for build ...');

	// Eg. http://localhost:9000/Article?url=https://www.theguardian.com/commentisfree/...
	try {
		const url = buildUrlFromQueryParam(req);
		const { html, ...config } = await fetch(url).then((article) =>
			article.json(),
		);

		req.body = config;
		// console.log(req.serverBuild.default({ path: '/Article' })(req, res));
		req.serverBuild.renderArticle(req, res);
	} catch (error) {
		// eslint-disable-next-line no-console
		console.error(error);
	}
});

module.exports = router;
