interface AssetHash {
	[key: string]: string;
}

let manifest: AssetHash = {};
let legacyManifest: AssetHash = {};

try {
	// path is relative to the server bundle

	// eslint-disable-next-line global-require -- this may fail
	manifest = require('./manifest.json');
	// eslint-disable-next-line global-require -- this may fail
	legacyManifest = require('./manifest.legacy.json');
} catch (e) {
	// do nothing
}

/**
 * Decides the url to use for fetching assets
 *
 * @param {'PROD' | 'CODE' | undefined} stage the environment code is executing in
 * @returns {string}
 */
const decideAssetOrigin = (stage: string | undefined): string => {
	switch (stage?.toUpperCase()) {
		case 'PROD':
			return 'https://assets.guim.co.uk/';
		case 'CODE':
			return 'https://assets-code.guim.co.uk/';
		default:
			return '/';
	}
};
export const ASSET_ORIGIN = decideAssetOrigin(process.env.GU_STAGE);

export const getScriptArrayFromFile = (
	file: `${string}.js`,
): { src: string; legacy?: boolean }[] => {
	if (!file.endsWith('.js'))
		throw new Error('Invalid filename: extension must be .js');

	const isDev = process.env.NODE_ENV === 'development';

	const filename = isDev ? file : manifest[file];
	const legacyFilename = isDev
		? file.replace('.js', '.legacy.js')
		: legacyManifest[file];

	const scripts = [];

	if (filename) {
		scripts.push({
			src: `${ASSET_ORIGIN}assets/${filename}`,
			legacy: false,
		});
	}
	if (legacyFilename) {
		scripts.push({
			src: `${ASSET_ORIGIN}assets/${legacyFilename}`,
			legacy: true,
		});
	}

	return scripts;
};
