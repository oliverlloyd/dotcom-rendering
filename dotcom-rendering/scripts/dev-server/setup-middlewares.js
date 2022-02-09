const path = require('path');
const express = require('express');
const webpackHotServerMiddleware = require('webpack-hot-server-middleware');
const {
	getConfigFromURLMiddleware,
} = require('../../src/server/lib/get-config-from-url');

module.exports = (middlewares, devServer) => {
	if (!devServer) {
		throw new Error('webpack-dev-server is not defined');
	}

	devServer.app.use(
		'/static/frontend',
		express.static(path.join(__dirname, '../..', 'src', 'static')),
	);

	devServer.app.use(getConfigFromURLMiddleware);

	devServer.app.use(
		webpackHotServerMiddleware(devServer.compiler, {
			chunkName: 'frontend.server',
		}),
	);

	devServer.app.get('/', (req, res) => {
		res.sendFile(path.join(__dirname, 'index.html'));
	});

	return middlewares;
};
