import { isObject, isString } from 'npm:@guardian/libs';
import type { Options } from 'npm:ajv';
import Ajv from 'npm:ajv';
import addFormats from 'npm:ajv-formats';
import type { FEFrontType } from '../../src/types/front.ts';
import type { CAPIArticleType } from '../types/frontend.ts';
import articleSchema from './article-schema.json' assert { type: 'json' };
import frontSchema from './front-schema.json' assert { type: 'json' };

const options: Options = {
	verbose: false,
	allErrors: false,
	logger: false,
	useDefaults: 'empty',
};

const ajv = new Ajv(options);
addFormats(ajv);

const validateArticle = ajv.compile<CAPIArticleType>(articleSchema);
const validateFront = ajv.compile<FEFrontType>(frontSchema);

export const validateAsCAPIType = (data: unknown): CAPIArticleType => {
	if (validateArticle(data)) return data;

	const url =
		isObject(data) && isString(data.webURL) ? data.webURL : 'unknown url';

	throw new TypeError(
		`Unable to validate request body for url ${url}.\n
            ${JSON.stringify(validateArticle.errors, null, 2)}`,
	);
};

export const validateAsFrontType = (data: unknown): FEFrontType => {
	if (validateFront(data)) return data;

	const url =
		isObject(data) && isString(data.webURL) ? data.webURL : 'unknown url';

	throw new TypeError(
		`Unable to validate request body for url ${url}.\n
            ${JSON.stringify(validateFront.errors, null, 2)}`,
	);
};
