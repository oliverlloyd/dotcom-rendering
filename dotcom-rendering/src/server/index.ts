import type { Request, Response, NextFunction } from 'express';
import { render as renderAMPArticle } from '../amp/server';
import {
	renderArticle,
	renderArticleJson,
	renderBlocks,
	renderInteractive,
} from '../web/server';
import { prodServer } from './prod-server';

// used by dev server
export default () => {
	return async (req: Request, res: Response, next: NextFunction) => {
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
			default:
				next();
		}
	};
};

// this is the actual production server
if (process.env.NODE_ENV === 'production') {
	prodServer();
}
