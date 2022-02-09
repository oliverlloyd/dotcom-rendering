const fetch = require('node-fetch');
const path = require('path');
const express = require('express');

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

module.exports = (middlewares, devServer) => {
	if (!devServer) {
		throw new Error('webpack-dev-server is not defined');
	}

	const serverCompiler = devServer.compiler.compilers.find(
		(compiler) => compiler.name === 'server',
	);

	let serverBuild;

	serverCompiler.hooks.afterEmit.tap('gu-dev-server', () => {
		delete require.cache[require.resolve('../../dist/frontend.server')];
		serverBuild = require('../../dist/frontend.server');
	});

	const { app } = devServer;

	app.use(
		'/static/frontend',
		express.static(path.join(__dirname, '../..', 'src', 'static')),
	);

	app.get('/Article', async (req, res) => {
		if (!serverBuild) return res.send('Waiting for build ...');

		// Eg. http://localhost:9000/Article?url=https://www.theguardian.com/commentisfree/...
		try {
			const url = buildUrlFromQueryParam(req);
			const { html, ...config } = await fetch(url).then((article) =>
				article.json(),
			);

			req.body = config;

			serverBuild.renderArticle(req, res);
		} catch (error) {
			// eslint-disable-next-line no-console
			console.error(error);
		}
	});

	app.get('/', (req, res) => {
		res.sendFile(path.join(__dirname, 'index.html'));
	});

	// app.get('*', (req, res) => {
	// 	res.redirect('/');
	// });

	return middlewares;
};
