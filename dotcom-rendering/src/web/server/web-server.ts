import type express from 'express';
import { Standard as ExampleArticle } from '../../../fixtures/generated/articles/Standard.ts';
import { enhanceBlocks } from '../../model/enhanceBlocks.ts';
import { enhanceCollections } from '../../model/enhanceCollections.ts';
import { enhanceCommercialProperties } from '../../model/enhanceCommercialProperties.ts';
import { enhanceStandfirst } from '../../model/enhanceStandfirst.ts';
import {
	validateAsCAPIType,
	validateAsFrontType,
} from '../../model/validate.ts';
import type { DCRFrontType, FEFrontType } from '../../types/front.ts';
import type { CAPIArticleType } from '../../types/frontend.ts';
import type { CAPIOnwards } from '../../types/onwards.ts';
import { articleToHtml } from './articleToHtml.tsx';
import { blocksToHtml } from './blocksToHtml.tsx';
import { frontToHtml } from './frontToHtml.tsx';
import { keyEventsToHtml } from './keyEventsToHtml.tsx';
import { onwardsToHtml } from './onwardsToHtml.tsx';

function enhancePinnedPost(format: CAPIFormat, block?: Block) {
	return block ? enhanceBlocks([block], format)[0] : block;
}

const enhanceCAPIType = (body: unknown): CAPIArticleType => {
	const data = validateAsCAPIType(body);

	const CAPIArticle: CAPIArticleType = {
		...data,
		blocks: enhanceBlocks(
			data.blocks,
			data.format,
			data.promotedNewsletter,
		),
		pinnedPost: enhancePinnedPost(data.format, data.pinnedPost),
		standfirst: enhanceStandfirst(data.standfirst),
		commercialProperties: enhanceCommercialProperties(
			data.commercialProperties,
		),
	};
	return CAPIArticle;
};

const getStack = (e: unknown): string =>
	e instanceof Error ? e.stack ?? 'No error stack' : 'Unknown error';

const enhanceFront = (body: unknown): DCRFrontType => {
	const data: FEFrontType = validateAsFrontType(body);
	return {
		...data,
		pressedPage: {
			...data.pressedPage,
			collections: enhanceCollections(
				data.pressedPage.collections,
				data.editionId,
				data.pageId,
			),
		},
	};
};

export const renderArticle = (
	{ body }: express.Request,
	res: express.Response,
): void => {
	try {
		const article = enhanceCAPIType(body);
		const resp = articleToHtml({
			article,
		});

		res.status(200).send(resp);
	} catch (e) {
		res.status(500).send(`<pre>${getStack(e)}</pre>`);
	}
};

export const renderArticleJson = (
	{ body }: express.Request,
	res: express.Response,
): void => {
	try {
		const CAPIArticle = enhanceCAPIType(body);
		const resp = {
			data: {
				CAPIArticle,
			},
		};

		res.status(200).send(resp);
	} catch (e) {
		res.status(500).send(`<pre>${getStack(e)}</pre>`);
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
		const article = enhanceCAPIType(body);
		const resp = articleToHtml({
			article,
		});

		res.status(200).send(resp);
	} catch (e) {
		res.status(500).send(`<pre>${getStack(e)}</pre>`);
	}
};

export const renderBlocks = (
	{ body }: { body: BlocksRequest },
	res: express.Response,
): void => {
	try {
		const {
			blocks,
			format,
			host,
			pageId,
			webTitle,
			ajaxUrl,
			isAdFreeUser,
			isSensitive,
			videoDuration,
			edition,
			section,
			sharedAdTargeting,
			adUnit,
			switches,
		} = body;

		const enhancedBlocks = enhanceBlocks(blocks, format);
		const html = blocksToHtml({
			blocks: enhancedBlocks,
			format,
			host,
			pageId,
			webTitle,
			ajaxUrl,
			isAdFreeUser,
			isSensitive,
			videoDuration,
			edition,
			section,
			sharedAdTargeting,
			adUnit,
			switches,
		});

		res.status(200).send(html);
	} catch (e) {
		res.status(500).send(`<pre>${getStack(e)}</pre>`);
	}
};

export const renderKeyEvents = (
	{ body }: { body: KeyEventsRequest },
	res: express.Response,
): void => {
	try {
		const { keyEvents, format, filterKeyEvents } = body;

		const html = keyEventsToHtml({
			keyEvents,
			format,
			filterKeyEvents,
		});

		res.status(200).send(html);
	} catch (e) {
		res.status(500).send(`<pre>${getStack(e)}</pre>`);
	}
};

export const renderOnwards = (
	{ body }: { body: CAPIOnwards },
	res: express.Response,
): void => {
	try {
		const { heading, description, url, onwardsSource, trails, format } =
			body;

		const html = onwardsToHtml({
			heading,
			description,
			url,
			onwardsSource,
			trails,
			format,
		});

		res.status(200).send(html);
	} catch (e) {
		res.status(500).send(`<pre>${getStack(e)}</pre>`);
	}
};

export const renderFront = (
	{ body }: express.Request,
	res: express.Response,
): void => {
	try {
		const front = enhanceFront(body);
		const html = frontToHtml({
			front,
		});
		res.status(200).send(html);
	} catch (e) {
		res.status(500).send(`<pre>${getStack(e)}</pre>`);
	}
};

export const renderFrontJson = (
	{ body }: express.Request,
	res: express.Response,
): void => {
	res.json(enhanceFront(body));
};
