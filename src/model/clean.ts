import createDOMPurify from 'dompurify';
import { JSDOM } from 'jsdom';
import { minify } from 'html-minifier';

// We don't represent lists in incopy, so things will just come across with bullet characters.
// These may also be used for emphasis, so bullet characters don't mean list.
export const bigBullets = (s: string): string =>
	s.replace(/•/g, '<span class="bullet">&bull;</span>');

const { window } = new JSDOM('');
const DOMPurify = createDOMPurify((window as unknown) as Window);

export const clean = (s?: string): string => {
	if (s === undefined) return '';

	const bulleted = bigBullets(s);
	const minified = minify(bulleted, {
		collapseWhitespace: true,
		removeEmptyElements: true,
		minifyCSS: true,
		minifyJS: true,
	});

	return DOMPurify.sanitize(minified);
};
