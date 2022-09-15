// ***********************************************************
// This example plugins/index.js can be used to load plugins
//
// You can change the location of this file or turn off loading
// the plugins file with the 'pluginsFile' configuration option.
//
// You can read more here:
// https://on.cypress.io/plugins-guide
// ***********************************************************

import webpackPreprocessor from 'cypress-webpack-preprocessor-v5';
import { babelExclude } from '../../scripts/webpack/webpack.config.browser.js';

export default (on, config) => {
	config.env = { ...config.env, ...process.env };

	const webpackConfig = webpackPreprocessor.defaultOptions;
	webpackConfig.webpackOptions.module.rules[0].exclude = babelExclude;

	on('file:preprocessor', webpackPreprocessor(webpackConfig));
	return config;
};
