import { Standard as ExampleArticle } from '../../fixtures/generated/articles/Standard.ts';
import { blockMetaData } from '../../fixtures/manual/block-meta-data.ts';
import { enhanceDividers } from './enhance-dividers.ts';

const example = ExampleArticle;

describe('Dividers and Drop Caps', () => {
	it('creates an identical but new object when no changes are needed', () => {
		expect(enhanceDividers(example.blocks)).not.toBe(example.blocks); // We created a new object
		expect(enhanceDividers(example.blocks)).toEqual(example.blocks); // The new object is what we expect
	});

	it('sets the divider flag correctly', () => {
		const input: Block[] = [
			{
				...blockMetaData,
				elements: [
					{
						_type: 'model.dotcomrendering.pageElements.TextBlockElement',
						elementId: 'mockId',
						html: '<p>I am the first paragraph</p>',
					},
					{
						_type: 'model.dotcomrendering.pageElements.SubheadingBlockElement',
						elementId: 'mockId',
						html: '<p>* * *</p>',
					},
					{
						_type: 'model.dotcomrendering.pageElements.TextBlockElement',
						elementId: 'mockId',
						html: '<p>I should become a drop cap.</p>',
					},
					{
						_type: 'model.dotcomrendering.pageElements.TextBlockElement',
						elementId: 'mockId',
						html: '<p>I should NOT become a drop cap.</p>',
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
						html: '<p>I am the first paragraph</p>',
					},
					{
						_type: 'model.dotcomrendering.pageElements.DividerBlockElement',
					},
					{
						_type: 'model.dotcomrendering.pageElements.TextBlockElement',
						dropCap: true,
						elementId: 'mockId',
						html: '<p>I should become a drop cap.</p>',
					},
					{
						_type: 'model.dotcomrendering.pageElements.TextBlockElement',
						elementId: 'mockId',
						html: '<p>I should NOT become a drop cap.</p>',
					},
				],
			},
		];

		expect(enhanceDividers(input)).toEqual(expectedOutput);
	});

	it('handles dot dinkuses as text elements', () => {
		const input: Block[] = [
			{
				...blockMetaData,
				elements: [
					{
						_type: 'model.dotcomrendering.pageElements.TextBlockElement',
						elementId: 'mockId',
						html: '<p>I am the first paragraph</p>',
					},
					{
						_type: 'model.dotcomrendering.pageElements.TextBlockElement',
						elementId: 'mockId',
						html: '<p>•••</p>',
					},
					{
						_type: 'model.dotcomrendering.pageElements.TextBlockElement',
						elementId: 'mockId',
						html: '<p>I should become a drop cap.</p>',
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
						html: '<p>I am the first paragraph</p>',
					},
					{
						_type: 'model.dotcomrendering.pageElements.DividerBlockElement',
					},
					{
						_type: 'model.dotcomrendering.pageElements.TextBlockElement',
						dropCap: true,
						elementId: 'mockId',
						html: '<p>I should become a drop cap.</p>',
					},
				],
			},
		];

		expect(enhanceDividers(input)).toEqual(expectedOutput);
	});

	it('handles when there are no spaces in the dinkus', () => {
		const input: Block[] = [
			{
				...blockMetaData,
				elements: [
					{
						_type: 'model.dotcomrendering.pageElements.TextBlockElement',
						elementId: 'mockId',
						html: '<p>I am the first paragraph</p>',
					},
					{
						_type: 'model.dotcomrendering.pageElements.SubheadingBlockElement',
						elementId: 'mockId',
						html: '<p>***</p>',
					},
					{
						_type: 'model.dotcomrendering.pageElements.TextBlockElement',
						elementId: 'mockId',
						html: '<p>I should become a drop cap.</p>',
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
						html: '<p>I am the first paragraph</p>',
					},
					{
						_type: 'model.dotcomrendering.pageElements.DividerBlockElement',
					},
					{
						_type: 'model.dotcomrendering.pageElements.TextBlockElement',
						dropCap: true,
						elementId: 'mockId',
						html: '<p>I should become a drop cap.</p>',
					},
				],
			},
		];

		expect(enhanceDividers(input)).toEqual(expectedOutput);
	});

	it('handles divider flags wrapped in h2 tags', () => {
		const input: Block[] = [
			{
				...blockMetaData,
				elements: [
					{
						_type: 'model.dotcomrendering.pageElements.TextBlockElement',
						elementId: 'mockId',
						html: '<p>I am the first paragraph</p>',
					},
					{
						_type: 'model.dotcomrendering.pageElements.SubheadingBlockElement',
						elementId: 'mockId',
						html: '<h2><strong>* * *</strong></h2>',
					},
					{
						_type: 'model.dotcomrendering.pageElements.TextBlockElement',
						elementId: 'mockId',
						html: '<p>I should become a drop cap.</p>',
					},
					{
						_type: 'model.dotcomrendering.pageElements.TextBlockElement',
						elementId: 'mockId',
						html: '<p>I should NOT become a drop cap.</p>',
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
						html: '<p>I am the first paragraph</p>',
					},
					{
						_type: 'model.dotcomrendering.pageElements.DividerBlockElement',
					},
					{
						_type: 'model.dotcomrendering.pageElements.TextBlockElement',
						dropCap: true,
						elementId: 'mockId',
						html: '<p>I should become a drop cap.</p>',
					},
					{
						_type: 'model.dotcomrendering.pageElements.TextBlockElement',
						elementId: 'mockId',
						html: '<p>I should NOT become a drop cap.</p>',
					},
				],
			},
		];

		expect(enhanceDividers(input)).toEqual(expectedOutput);
	});

	it('handles multiple divider flags', () => {
		const input: Block[] = [
			{
				...blockMetaData,
				elements: [
					{
						_type: 'model.dotcomrendering.pageElements.TextBlockElement',
						elementId: 'mockId',
						html: '<p>I am the first paragraph</p>',
					},
					{
						_type: 'model.dotcomrendering.pageElements.SubheadingBlockElement',
						elementId: 'mockId',
						html: '<p>* * *</p>',
					},
					{
						_type: 'model.dotcomrendering.pageElements.TextBlockElement',
						elementId: 'mockId',
						html: '<p>I should become a drop cap.</p>',
					},
					{
						_type: 'model.dotcomrendering.pageElements.SubheadingBlockElement',
						elementId: 'mockId',
						html: '<h2><strong>***</strong></h2>',
					},
					{
						_type: 'model.dotcomrendering.pageElements.TextBlockElement',
						elementId: 'mockId',
						html: '<p>I should also become a drop cap.</p>',
					},
					{
						_type: 'model.dotcomrendering.pageElements.TextBlockElement',
						elementId: 'mockId',
						html: '<p>I should NOT become a drop cap.</p>',
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
						html: '<p>I am the first paragraph</p>',
					},
					{
						_type: 'model.dotcomrendering.pageElements.DividerBlockElement',
					},
					{
						_type: 'model.dotcomrendering.pageElements.TextBlockElement',
						dropCap: true,
						elementId: 'mockId',
						html: '<p>I should become a drop cap.</p>',
					},
					{
						_type: 'model.dotcomrendering.pageElements.DividerBlockElement',
					},
					{
						_type: 'model.dotcomrendering.pageElements.TextBlockElement',
						dropCap: true,
						elementId: 'mockId',
						html: '<p>I should also become a drop cap.</p>',
					},
					{
						_type: 'model.dotcomrendering.pageElements.TextBlockElement',
						elementId: 'mockId',
						html: '<p>I should NOT become a drop cap.</p>',
					},
				],
			},
		];

		expect(enhanceDividers(input)).toEqual(expectedOutput);
	});

	it('handles divider flags being put before elements that are not text', () => {
		const input: Block[] = [
			{
				...blockMetaData,
				elements: [
					{
						_type: 'model.dotcomrendering.pageElements.TextBlockElement',
						elementId: 'mockId',
						html: '<p>I am the first paragraph</p>',
					},
					{
						_type: 'model.dotcomrendering.pageElements.SubheadingBlockElement',
						elementId: 'mockId',
						html: '<h2><strong>* * *</strong></h2>',
					},
					{
						_type: 'model.dotcomrendering.pageElements.InstagramBlockElement',
						elementId: 'mockId',
						isThirdPartyTracking: true,
						html: '',
						url: '',
						hasCaption: false,
					},
					{
						_type: 'model.dotcomrendering.pageElements.TextBlockElement',
						elementId: 'mockId',
						html: '<p>I should NOT become a drop cap.</p>',
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
						html: '<p>I am the first paragraph</p>',
					},
					{
						_type: 'model.dotcomrendering.pageElements.DividerBlockElement',
					},
					{
						_type: 'model.dotcomrendering.pageElements.InstagramBlockElement',
						elementId: 'mockId',
						isThirdPartyTracking: true,
						html: '',
						url: '',
						hasCaption: false,
					},
					{
						_type: 'model.dotcomrendering.pageElements.TextBlockElement',
						elementId: 'mockId',
						html: '<p>I should NOT become a drop cap.</p>',
					},
				],
			},
		];

		expect(enhanceDividers(input)).toEqual(expectedOutput);
	});

	it('handles multiple divider flags in sequence', () => {
		const input: Block[] = [
			{
				...blockMetaData,
				elements: [
					{
						_type: 'model.dotcomrendering.pageElements.TextBlockElement',
						elementId: 'mockId',
						html: '<p>I should NOT become a drop cap.</p>',
					},
					{
						_type: 'model.dotcomrendering.pageElements.SubheadingBlockElement',
						elementId: 'mockId',
						html: '<p>* * *</p>',
					},
					{
						_type: 'model.dotcomrendering.pageElements.SubheadingBlockElement',
						elementId: 'mockId',
						html: '<p>* * *</p>',
					},
					{
						_type: 'model.dotcomrendering.pageElements.SubheadingBlockElement',
						elementId: 'mockId',
						html: '<p>* * *</p>',
					},
					{
						_type: 'model.dotcomrendering.pageElements.TextBlockElement',
						elementId: 'mockId',
						html: '<p>I should become a drop cap.</p>',
					},
					{
						_type: 'model.dotcomrendering.pageElements.TextBlockElement',
						elementId: 'mockId',
						html: '<p>I should NOT become a drop cap.</p>',
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
						html: '<p>I should NOT become a drop cap.</p>',
					},
					{
						_type: 'model.dotcomrendering.pageElements.DividerBlockElement',
					},
					{
						_type: 'model.dotcomrendering.pageElements.DividerBlockElement',
					},
					{
						_type: 'model.dotcomrendering.pageElements.DividerBlockElement',
					},
					{
						_type: 'model.dotcomrendering.pageElements.TextBlockElement',
						dropCap: true,
						elementId: 'mockId',
						html: '<p>I should become a drop cap.</p>',
					},
					{
						_type: 'model.dotcomrendering.pageElements.TextBlockElement',
						elementId: 'mockId',
						html: '<p>I should NOT become a drop cap.</p>',
					},
				],
			},
		];

		expect(enhanceDividers(input)).toEqual(expectedOutput);
	});
});
