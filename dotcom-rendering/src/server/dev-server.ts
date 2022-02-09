


// this export is the function used by webpackHotServerMiddleware in /scripts/frontend-dev-server
export default (webpackConfig) => (req, res) => {
	// eslint-disable-next-line @typescript-eslint/no-unsafe-member-access
	switch (req.path) {
		case '/Article':
			return renderArticle(req, res);
		case '/ArticleJson':
			return renderArticleJson(req, res);
		case '/AMPArticle':
			return renderAMPArticle(req, res);
		case '/Interactive':
			return renderInteractive(req, res);
		case '/AMPInteractive':
			return renderAMPArticle(req, res);
		case '/Blocks':
			return renderBlocks(req, res);
	}

	return renderArticle(req, res);
};
