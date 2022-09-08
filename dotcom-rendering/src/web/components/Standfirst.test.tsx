import { ArticleDesign, ArticleDisplay, ArticlePillar } from 'npm:@guardian/libs';
import { render } from '@testing-library/react';
import { interactiveLegacyClasses } from '../layouts/lib/interactiveLegacyStyling.ts';
import { Standfirst } from './Standfirst.ts';

describe('Standfirst', () => {
	it('It should contain legacy class names to support customised styling in interactives', () => {
		const { container } = render(
			<Standfirst
				format={{
					theme: ArticlePillar.Lifestyle,
					design: ArticleDesign.Interactive,
					display: ArticleDisplay.Immersive,
				}}
				standfirst="Standfirst"
			/>,
		);

		expect(
			container.querySelector(`.${interactiveLegacyClasses.standFirst}`),
		).not.toBeNull();
	});

	it("It should not contain legacy class names for articles that aren't interactives", () => {
		const { container } = render(
			<Standfirst
				format={{
					theme: ArticlePillar.Lifestyle,
					design: ArticleDesign.Standard,
					display: ArticleDisplay.Standard,
				}}
				standfirst="Standfirst"
			/>,
		);

		expect(
			container.querySelector(`.${interactiveLegacyClasses.standFirst}`),
		).toBeNull();
	});
});
