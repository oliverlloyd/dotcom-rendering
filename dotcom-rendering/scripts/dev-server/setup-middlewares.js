const fetch = require('node-fetch');
const path = require('path');
const express = require('express');
const webpackHotServerMiddleware = require('webpack-hot-server-middleware');


module.exports = (middlewares, devServer) => {
	if (!devServer) {
		throw new Error('webpack-dev-server is not defined');
	}



	const { app } = devServer;

	app.use(
		'/static/frontend',
		express.static(path.join(__dirname, '../..', 'src', 'static')),
	);

	app.use(webpackHotServerMiddleware(devServer.compiler, {
		chunkName: 'frontend.server',
	}));



	app.get('/', (req, res) => {
		res.sendFile(path.join(__dirname, 'index.html'));
	});

	// app.get('*', (req, res) => {
	// 	res.redirect('/');
	// });

	return middlewares;
};
