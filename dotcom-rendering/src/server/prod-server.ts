import compression from 'compression';
import type { Request, Response } from 'express';
import express from 'express';
import responseTime from 'response-time';
import { log, warn } from '../../scripts/env/log';
import {
	render as renderAMPArticle,
	renderPerfTest as renderAMPArticlePerfTest,
} from '../amp/server';
import {
	renderArticle,
	renderArticleJson,
	renderPerfTest as renderArticlePerfTest,
	renderBlocks,
	renderFront,
	renderInteractive,
	renderKeyEvents,
	renderShowMoreCards,
} from '../web/server';
import type { GuardianConfiguration } from './lib/aws/aws-parameters';
import { getGuardianConfiguration } from './lib/aws/aws-parameters';
import { recordBaselineCloudWatchMetrics } from './lib/aws/metrics-baseline';
import { getContentFromURLMiddleware } from './lib/get-content-from-url';
import { logger } from './lib/logging';

// Middleware to track route performance using 'response-time' lib
// Usage: app.post('/Article', logRenderTime, renderArticle);
const logRenderTime = responseTime(
	(req: Request, _: Response, time: number) => {
		const body: CAPIArticleType = req.body;
		logger.info({
			pageId: body.pageId,
			renderTime: time,
		});
	},
);

export const prodServer = () => {
	logger.info('dotcom-rendering is GO.');

	if (process.env.DISABLE_LOGGING_AND_METRICS !== 'true') {
		getGuardianConfiguration('prod')
			.then((config: GuardianConfiguration) => {
				log(`loaded ${config.size()} configuration parameters`);
			})
			.catch((err: any) => {
				warn('Failed to get configuration. Bad AWS credentials?');
				warn(err);
			});
	}

	const app = express();

	app.use(express.json({ limit: '50mb' }));
	app.use(compression());

	app.get('/_healthcheck', (req: Request, res: Response) => {
		res.status(200).send('OKAY');
	});

	// if running prod server locally, serve local assets
	if (!process.env.GU_PUBLIC) {
		app.use('/static/frontend', express.static(__dirname));

		app.use('/assets', express.static(__dirname));
	}

	app.post('/Article', logRenderTime, renderArticle);
	app.post('/AMPArticle', logRenderTime, renderAMPArticle);
	app.post('/Interactive', logRenderTime, renderInteractive);
	app.post('/AMPInteractive', logRenderTime, renderAMPArticle);
	app.post('/Blocks', logRenderTime, renderBlocks);
	app.post('/KeyEvents', logRenderTime, renderKeyEvents);
	app.post('/ShowMore', logRenderTime, renderShowMoreCards);
	app.post('/Front', logRenderTime, renderFront);

	// These GET's are for checking any given URL directly from PROD
	app.get(
		'/Article',
		logRenderTime,
		getContentFromURLMiddleware,
		async (req: Request, res: Response) => {
			// Eg. http://localhost:9000/Article?url=https://www.theguardian.com/commentisfree/...
			try {
				return renderArticle(req, res);
			} catch (error) {
				console.error(error);
			}
		},
	);

	app.get(
		'/AMPArticle',
		logRenderTime,
		getContentFromURLMiddleware,
		async (req: Request, res: Response) => {
			// Eg. http://localhost:9000/AMPArticle?url=https://www.theguardian.com/commentisfree/...
			try {
				return renderAMPArticle(req, res);
			} catch (error) {
				console.error(error);
			}
		},
	);

	app.get(
		'/Front',
		logRenderTime,
		// TODO: ensure getContentFromURLMiddleware supports fronts
		getContentFromURLMiddleware,
		async (req: Request, res: Response) => {
			// Eg. http://localhost:9000/Front?url=https://www.theguardian.com/uk/sport
			try {
				return renderFront(req, res);
			} catch (error) {
				console.error(error);
			}
		},
	);

	app.use('/ArticlePerfTest', renderArticlePerfTest);
	app.use('/AMPArticlePerfTest', renderAMPArticlePerfTest);
	app.use('/ArticleJson', renderArticleJson);

	app.get('/', (req: Request, res: Response) => {
		try {
			res.send(`
                <!DOCTYPE html>
                <html>
                <body>
                    <ul>
                        <li><a href="/Article">Article</a></li>
                        <li><a href="/AMPArticle">⚡️Article</a></li>
                        <li><a href="/ArticlePerfTest">⚡Article (perf test example)</a></li>
                        <li><a href="/AMPArticlePerfTest">⚡️Article (perf test example)</a></li>
                    </ul>
                    <ul>
                        <li><a href="/ArticlePerfTest">⚡Article (perf test example)</a></li>
                        <li><a href="/AMPArticlePerfTest">⚡️Article (perf test example)</a></li>
                    </ul>
                </body>
                </html>
            `);
		} catch (e) {
			const error = e as Error;
			res.status(500).send(`<pre>${error.stack}</pre>`);
		}
	});

	// express requires all 4 args here:
	// eslint-disable-next-line @typescript-eslint/no-unused-vars
	app.use((e: any, req: any, res: Response, next: any) => {
		const error = e as Error;
		res.status(500).send(`<pre>${error.stack}</pre>`);
	});

	if (process.env.DISABLE_LOGGING_AND_METRICS !== 'true') {
		setInterval(() => {
			recordBaselineCloudWatchMetrics();
		}, 10 * 1000);
	}

	const port = process.env.PORT || 9000;
	app.listen(port);

	console.log(`Started production server on port ${port}\nready`);
};
