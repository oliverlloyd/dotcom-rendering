import { NumberedList } from '../../fixtures/generated/articles/NumberedList.ts';
import { Standard as ExampleArticle } from '../../fixtures/generated/articles/Standard.ts';
import { images } from '../../fixtures/generated/images.ts';
import { blockMetaData } from '../../fixtures/manual/block-meta-data.ts';
import { enhanceNumberedLists } from './enhance-numbered-lists.ts';

describe('Enhance Numbered Lists', () => {
	it('does not enhance articles if they are not numbered lists', () => {
		const input: Block[] = [
			{
				...blockMetaData,
				elements: [
					{
						...images[0],
						role: 'thumbnail',
					},
				],
			},
		];
		const expectedOutput: Block[] = [
			{
				...blockMetaData,
				elements: [
					{
						...images[0],
						role: 'thumbnail',
					},
				],
			},
		];
		expect(enhanceNumberedLists(input, ExampleArticle.format)).toEqual(
			expectedOutput,
		);
	});

	it('replaces faux h3s with real ones, prefixing them with a divider', () => {
		const input: Block[] = [
			{
				...blockMetaData,
				elements: [
					{
						_type: 'model.dotcomrendering.pageElements.TextBlockElement',
						elementId: 'mockId',
						html: '<p><strong>Faux H3 text</strong></p>',
					},
				],
			},
		];
		const expectedOutput: Block[] = [
			{
				...blockMetaData,
				elements: [
					{
						_type: 'model.dotcomrendering.pageElements.DividerBlockElement',
						size: 'full',
						spaceAbove: 'tight',
					},
					{
						_type: 'model.dotcomrendering.pageElements.TextBlockElement',
						elementId: 'mockId',
						html: '<h3>Faux H3 text</h3>',
					},
				],
			},
		];
		expect(enhanceNumberedLists(input, NumberedList.format)).toEqual(
			expectedOutput,
		);
	});

	it('does set a h3 if there is more than one strong tag', () => {
		const input: Block[] = [
			{
				...blockMetaData,
				elements: [
					{
						_type: 'model.dotcomrendering.pageElements.TextBlockElement',
						elementId: 'mockId',
						html: '<p><strong>Strong 1</strong> <strong>Strong 2</strong></p>',
					},
				],
			},
		];
		const expectedOutput: Block[] = [
			{
				...blockMetaData,
				elements: [
					{
						_type: 'model.dotcomrendering.pageElements.DividerBlockElement',
						size: 'full',
						spaceAbove: 'tight',
					},
					{
						_type: 'model.dotcomrendering.pageElements.TextBlockElement',
						elementId: 'mockId',
						html: '<h3>Strong 1 Strong 2</h3>',
					},
				],
			},
		];
		expect(enhanceNumberedLists(input, NumberedList.format)).toEqual(
			expectedOutput,
		);
	});

	it('does set a h3 if there is more than one strong tag', () => {
		const input: Block[] = [
			{
				...blockMetaData,
				elements: [
					{
						_type: 'model.dotcomrendering.pageElements.TextBlockElement',
						elementId: 'mockId',
						html: '<p><strong>Strong 1</strong> <strong>Strong 2 <a href="example.com">Some Link</a></strong></p>',
					},
				],
			},
		];
		const expectedOutput: Block[] = [
			{
				...blockMetaData,
				elements: [
					{
						_type: 'model.dotcomrendering.pageElements.DividerBlockElement',
						size: 'full',
						spaceAbove: 'tight',
					},
					{
						_type: 'model.dotcomrendering.pageElements.TextBlockElement',
						elementId: 'mockId',
						html: '<h3>Strong 1 Strong 2 <a href="example.com">Some Link</a></h3>',
					},
				],
			},
		];
		expect(enhanceNumberedLists(input, NumberedList.format)).toEqual(
			expectedOutput,
		);
	});

	it('does set an h3 and extract all text even if it is between stong tages', () => {
		const input: Block[] = [
			{
				...blockMetaData,
				elements: [
					{
						_type: 'model.dotcomrendering.pageElements.TextBlockElement',
						elementId: 'mockId',
						html: '<p><strong>Strong 1</strong> some text inbetween <strong>Strong 2</strong></p>',
					},
				],
			},
		];
		const expectedOutput: Block[] = [
			{
				...blockMetaData,
				elements: [
					{
						_type: 'model.dotcomrendering.pageElements.DividerBlockElement',
						size: 'full',
						spaceAbove: 'tight',
					},
					{
						_type: 'model.dotcomrendering.pageElements.TextBlockElement',
						elementId: 'mockId',
						html: '<h3>Strong 1 some text inbetween Strong 2</h3>',
					},
				],
			},
		];
		expect(enhanceNumberedLists(input, NumberedList.format)).toEqual(
			expectedOutput,
		);
	});

	it('does not set a h3 if there is text before the strong tag', () => {
		const input: Block[] = [
			{
				...blockMetaData,
				elements: [
					{
						_type: 'model.dotcomrendering.pageElements.TextBlockElement',
						elementId: 'mockId',
						html: '<p>Some text before <strong>Strong 1</strong></p>',
					},
				],
			},
		];
		const expectedOutput: Block[] = [
			{
				...blockMetaData,
				elements: [
					{
						_type: 'model.dotcomrendering.pageElements.TextBlockElement',
						elementId: 'mockId',
						html: '<p>Some text before <strong>Strong 1</strong></p>',
					},
				],
			},
		];
		expect(enhanceNumberedLists(input, NumberedList.format)).toEqual(
			expectedOutput,
		);
	});

	it('does not set a h3 if there is text after the strong tag', () => {
		const input: Block[] = [
			{
				...blockMetaData,
				elements: [
					{
						_type: 'model.dotcomrendering.pageElements.TextBlockElement',
						elementId: 'mockId',
						html: '<p><strong>Strong 1</strong>Some text after</p>',
					},
				],
			},
		];
		const expectedOutput: Block[] = [
			{
				...blockMetaData,
				elements: [
					{
						_type: 'model.dotcomrendering.pageElements.TextBlockElement',
						elementId: 'mockId',
						html: '<p><strong>Strong 1</strong>Some text after</p>',
					},
				],
			},
		];
		expect(enhanceNumberedLists(input, NumberedList.format)).toEqual(
			expectedOutput,
		);
	});

	it('does not set a h3 if there is text before and after the strong tag', () => {
		const input: Block[] = [
			{
				...blockMetaData,
				elements: [
					{
						_type: 'model.dotcomrendering.pageElements.TextBlockElement',
						elementId: 'mockId',
						html: '<p>Some text before <strong>Strong 1</strong>Some text after</p>',
					},
				],
			},
		];
		const expectedOutput: Block[] = [
			{
				...blockMetaData,
				elements: [
					{
						_type: 'model.dotcomrendering.pageElements.TextBlockElement',
						elementId: 'mockId',
						html: '<p>Some text before <strong>Strong 1</strong>Some text after</p>',
					},
				],
			},
		];
		expect(enhanceNumberedLists(input, NumberedList.format)).toEqual(
			expectedOutput,
		);
	});

	it('does not set a h3 if there if the html does not end with a strong p tag combo', () => {
		const input: Block[] = [
			{
				...blockMetaData,
				elements: [
					{
						_type: 'model.dotcomrendering.pageElements.TextBlockElement',
						elementId: 'mockId',
						html: '<p><strong>abc</strong>some other text</p>',
					},
				],
			},
		];
		const expectedOutput: Block[] = [
			{
				...blockMetaData,
				elements: [
					{
						_type: 'model.dotcomrendering.pageElements.TextBlockElement',
						elementId: 'mockId',
						html: '<p><strong>abc</strong>some other text</p>',
					},
				],
			},
		];
		expect(enhanceNumberedLists(input, NumberedList.format)).toEqual(
			expectedOutput,
		);
	});

	it('does set divider `spaceAbove` to `loose` if ItemLinkBlockElement is followed by fauxH3', () => {
		const input: Block[] = [
			{
				...blockMetaData,
				elements: [
					{
						_type: 'model.dotcomrendering.pageElements.ItemLinkBlockElement',
						elementId: 'mockId',
						html: '<ul><li><strong>Item link block</strong><a href="https://www.theguardian.com">Link</a></li></ul>',
					},
					{
						_type: 'model.dotcomrendering.pageElements.TextBlockElement',
						elementId: 'mockId',
						html: '<p><strong>Faux H3 text</strong></p>',
					},
				],
			},
		];
		const expectedOutput: Block[] = [
			{
				...blockMetaData,
				elements: [
					{
						_type: 'model.dotcomrendering.pageElements.ItemLinkBlockElement',
						elementId: 'mockId',
						html: '<ul><li><strong>Item link block</strong><a href="https://www.theguardian.com">Link</a></li></ul>',
					},
					{
						_type: 'model.dotcomrendering.pageElements.DividerBlockElement',
						size: 'full',
						spaceAbove: 'loose',
					},
					{
						_type: 'model.dotcomrendering.pageElements.TextBlockElement',
						elementId: 'mockId',
						html: '<h3>Faux H3 text</h3>',
					},
				],
			},
		];
		expect(enhanceNumberedLists(input, NumberedList.format)).toEqual(
			expectedOutput,
		);
	});

	it('does set divider `spaceAbove` to `tight` if fauxH3 is not proceeded by ItemLinkBlockElement', () => {
		const input: Block[] = [
			{
				...blockMetaData,
				elements: [
					{
						_type: 'model.dotcomrendering.pageElements.TextBlockElement',
						elementId: 'mockId',
						html: 'some HTML text',
					},
					{
						_type: 'model.dotcomrendering.pageElements.TextBlockElement',
						elementId: 'mockId',
						html: '<p><strong>Faux H3 text</strong></p>',
					},
				],
			},
		];
		const expectedOutput: Block[] = [
			{
				...blockMetaData,
				elements: [
					{
						_type: 'model.dotcomrendering.pageElements.TextBlockElement',
						elementId: 'mockId',
						html: 'some HTML text',
					},
					{
						_type: 'model.dotcomrendering.pageElements.DividerBlockElement',
						size: 'full',
						spaceAbove: 'tight',
					},
					{
						_type: 'model.dotcomrendering.pageElements.TextBlockElement',
						elementId: 'mockId',
						html: '<h3>Faux H3 text</h3>',
					},
				],
			},
		];
		expect(enhanceNumberedLists(input, NumberedList.format)).toEqual(
			expectedOutput,
		);
	});

	it('replaces ★★★★☆ with the StarRating component', () => {
		const input: Block[] = [
			{
				...blockMetaData,
				elements: [
					{
						_type: 'model.dotcomrendering.pageElements.TextBlockElement',
						elementId: 'mockId',
						html: '<p>★★★★☆</p>',
					},
				],
			},
		];

		const expectedOutput: Block[] = [
			{
				...blockMetaData,
				elements: [
					{
						_type: 'model.dotcomrendering.pageElements.StarRatingBlockElement',
						elementId: 'mockId',
						rating: 4,
						size: 'large',
					},
				],
			},
		];

		expect(enhanceNumberedLists(input, NumberedList.format)).toEqual(
			expectedOutput,
		);
	});

	it('ignores ascii stars when there is other text present', () => {
		const input: Block[] = [
			{
				...blockMetaData,
				elements: [
					{
						_type: 'model.dotcomrendering.pageElements.TextBlockElement',
						elementId: 'mockId',
						html: '<p>I give this 4 ★★★★☆</p>',
					},
				],
			},
		];

		const expectedOutput: Block[] = input;

		expect(enhanceNumberedLists(input, NumberedList.format)).toEqual(
			expectedOutput,
		);
	});

	it('ignores ascii stars when there are not 5 stars', () => {
		const input: Block[] = [
			{
				...blockMetaData,
				elements: [
					{
						_type: 'model.dotcomrendering.pageElements.TextBlockElement',
						elementId: 'mockId',
						html: '<p>★★☆</p>',
					},
				],
			},
		];

		const expectedOutput: Block[] = input;

		expect(enhanceNumberedLists(input, NumberedList.format)).toEqual(
			expectedOutput,
		);
	});

	it('ignores ascii stars that are not wrapped in p tags', () => {
		const input: Block[] = [
			{
				...blockMetaData,
				elements: [
					{
						_type: 'model.dotcomrendering.pageElements.TextBlockElement',
						elementId: 'mockId',
						html: '<h2 data-ignore="global-h2-styling">★★★★☆</h2>',
					},
				],
			},
		];
		const expectedOutput: Block[] = input;

		expect(enhanceNumberedLists(input, NumberedList.format)).toEqual(
			expectedOutput,
		);
	});

	it('can handle zero (selected) stars', () => {
		const input: Block[] = [
			{
				...blockMetaData,
				elements: [
					{
						_type: 'model.dotcomrendering.pageElements.TextBlockElement',
						elementId: 'mockId',
						html: '<p>☆☆☆☆☆</p>',
					},
				],
			},
		];

		const expectedOutput: Block[] = [
			{
				...blockMetaData,
				elements: [
					{
						_type: 'model.dotcomrendering.pageElements.StarRatingBlockElement',
						elementId: 'mockId',
						rating: 0,
						size: 'large',
					},
				],
			},
		];

		expect(enhanceNumberedLists(input, NumberedList.format)).toEqual(
			expectedOutput,
		);
	});

	it('can handle really good things that have five stars!', () => {
		const input: Block[] = [
			{
				...blockMetaData,
				elements: [
					{
						_type: 'model.dotcomrendering.pageElements.TextBlockElement',
						elementId: 'mockId',
						html: '<p>★★★★★</p>',
					},
				],
			},
		];

		const expectedOutput: Block[] = [
			{
				...blockMetaData,
				elements: [
					{
						_type: 'model.dotcomrendering.pageElements.StarRatingBlockElement',
						elementId: 'mockId',
						rating: 5,
						size: 'large',
					},
				],
			},
		];

		expect(enhanceNumberedLists(input, NumberedList.format)).toEqual(
			expectedOutput,
		);
	});

	it('When stars are found ahead of images, it updates the image and then removes the stars', () => {
		const input: Block[] = [
			{
				...blockMetaData,
				elements: [
					{
						_type: 'model.dotcomrendering.pageElements.TextBlockElement',
						elementId: 'mockId',
						html: '<p>★☆☆☆☆</p>',
					},
					images[0],
				],
			},
		];

		const expectedOutput: Block[] = [
			{
				...blockMetaData,
				elements: [
					{
						...images[0],
						starRating: 1,
					},
				],
			},
		];

		expect(enhanceNumberedLists(input, NumberedList.format)).toEqual(
			expectedOutput,
		);
	});

	it('When stars are found ahead of images, it updates the image and then removes the stars, even when rating is zero', () => {
		const input: Block[] = [
			{
				...blockMetaData,
				elements: [
					{
						_type: 'model.dotcomrendering.pageElements.TextBlockElement',
						elementId: 'mockId',
						html: '<p>☆☆☆☆☆</p>',
					},
					images[0],
				],
			},
		];

		const expectedOutput: Block[] = [
			{
				...blockMetaData,
				elements: [
					{
						...images[0],
						starRating: 0,
					},
				],
			},
		];

		expect(enhanceNumberedLists(input, NumberedList.format)).toEqual(
			expectedOutput,
		);
	});

	it('Sets the isAvatar flag for thumbnail images', () => {
		const input: Block[] = [
			{
				...blockMetaData,
				elements: [{ ...images[0], role: 'thumbnail' }],
			},
		];

		const expectedOutput: Block[] = [
			{
				...blockMetaData,
				elements: [{ ...images[0], role: 'thumbnail', isAvatar: true }],
			},
		];

		expect(enhanceNumberedLists(input, NumberedList.format)).toEqual(
			expectedOutput,
		);
	});

	it('replaces h2s with NumberedTitles', () => {
		const input: Block[] = [
			{
				...blockMetaData,
				elements: [
					{
						_type: 'model.dotcomrendering.pageElements.SubheadingBlockElement',
						elementId: 'mockId',
						html: '<h2 data-ignore="global-h2-styling">Some text</h2>',
					},
				],
			},
		];

		const expectedOutput: Block[] = [
			{
				...blockMetaData,
				elements: [
					{
						_type: 'model.dotcomrendering.pageElements.DividerBlockElement',
						size: 'full',
						spaceAbove: 'loose',
					},
					{
						_type: 'model.dotcomrendering.pageElements.NumberedTitleBlockElement',
						elementId: 'mockId',
						position: 1,
						html: '<h2 data-ignore="global-h2-styling">Some text</h2>',
						format: NumberedList.format,
					},
				],
			},
		];

		expect(enhanceNumberedLists(input, NumberedList.format)).toEqual(
			expectedOutput,
		);
	});

	it('increments the position for multiple h2s', () => {
		const input: Block[] = [
			{
				...blockMetaData,
				elements: [
					{
						_type: 'model.dotcomrendering.pageElements.SubheadingBlockElement',
						elementId: 'mockId1',
						html: '<h2 data-ignore="global-h2-styling">Some text</h2>',
					},
					{
						_type: 'model.dotcomrendering.pageElements.TextBlockElement',
						elementId: 'mockId',
						html: '<p>☆☆☆☆☆</p>',
					},
					images[0],
					{
						_type: 'model.dotcomrendering.pageElements.SubheadingBlockElement',
						elementId: 'mockId2',
						html: '<h2 data-ignore="global-h2-styling">Other text</h2>',
					},
					{
						_type: 'model.dotcomrendering.pageElements.SubheadingBlockElement',
						elementId: 'mockId3',
						html: '<h2 data-ignore="global-h2-styling">More text</h2>',
					},
				],
			},
		];

		const expectedOutput: Block[] = [
			{
				...blockMetaData,
				elements: [
					{
						_type: 'model.dotcomrendering.pageElements.DividerBlockElement',
						size: 'full',
						spaceAbove: 'loose',
					},
					{
						_type: 'model.dotcomrendering.pageElements.NumberedTitleBlockElement',
						elementId: 'mockId1',
						position: 1,
						html: '<h2 data-ignore="global-h2-styling">Some text</h2>',
						format: NumberedList.format,
					},
					{
						...images[0],
						starRating: 0,
					},
					{
						_type: 'model.dotcomrendering.pageElements.DividerBlockElement',
						size: 'full',
						spaceAbove: 'loose',
					},
					{
						_type: 'model.dotcomrendering.pageElements.NumberedTitleBlockElement',
						elementId: 'mockId2',
						position: 2,
						html: '<h2 data-ignore="global-h2-styling">Other text</h2>',
						format: NumberedList.format,
					},
					{
						_type: 'model.dotcomrendering.pageElements.DividerBlockElement',
						size: 'full',
						spaceAbove: 'loose',
					},
					{
						_type: 'model.dotcomrendering.pageElements.NumberedTitleBlockElement',

						elementId: 'mockId3',
						position: 3,
						html: '<h2 data-ignore="global-h2-styling">More text</h2>',
						format: NumberedList.format,
					},
				],
			},
		];

		expect(enhanceNumberedLists(input, NumberedList.format)).toEqual(
			expectedOutput,
		);
	});
});
