import { stripHTML } from './sanitise';

describe('stripHTML', () => {
	it('removes all HTML tags', () => {
		const test = '<p>foo <span>bar</span></p>';

		expect(stripHTML(test)).toBe('foo bar');
	});
});
