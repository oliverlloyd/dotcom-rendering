import { isValidUrl } from './isValidUrl.ts';

describe('isValidUrl', () => {
	describe('invalidInputs', () => {
		const invalidInputs = [
			'',
			'guardian.co',
			'anemailaddress@company.com',
			'com/hello?athing=1&anotherthing=%20',
			'https://guardian.co.uk withASpace',
		];

		it.each(invalidInputs)(
			'returns false for invalid input of `%s`',
			(input) => {
				expect(isValidUrl(input)).toBeFalsy();
			},
		);
	});

	describe('validInputs', () => {
		const validInputs = [
			'https://guardian.co.uk/australia-news/series/guardian-australia-s-morning-mail',
			'https://regexr.com/39nr7',
			'http://www.google.com/hello?athing=1&anotherthing=%20',
		];

		it.each(validInputs)(
			'returns true for valid input of `%s`',
			(input) => {
				expect(isValidUrl(input)).toBeTruthy();
			},
		);
	});
});
