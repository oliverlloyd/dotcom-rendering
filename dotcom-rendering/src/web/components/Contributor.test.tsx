import { ArticleDesign, ArticleDisplay, ArticlePillar } from '@guardian/libs';
import { render } from '@testing-library/react';
import { interactiveLegacyClasses } from '../layouts/lib/interactiveLegacyStyling';
import { Contributor } from './Contributor';

describe('Contributor', () => {
	it('It should contain legacy class names to support customised styling in interactives', () => {
		const format = {
			theme: ArticlePillar.Lifestyle,
			design: ArticleDesign.Interactive,
			display: ArticleDisplay.Immersive,
		};

		const { container } = render(
			<Contributor
				format={format}
				author={{ byline: 'Observer writers' }}
				tags={[
					{
						id: 'lifeandstyle/series/observer-design',
						type: 'Series',
						title: 'Observer Design',
					},
				]}
			/>,
		);

		expect(
			container.querySelector(`.${interactiveLegacyClasses.byline}`),
		).not.toBeNull();
	});

	it("It should not contain legacy class names for articles that aren't interactives", () => {
		const format = {
			theme: ArticlePillar.Lifestyle,
			design: ArticleDesign.Standard,
			display: ArticleDisplay.Standard,
		};

		const { container } = render(
			<Contributor
				format={format}
				author={{ byline: 'Observer writers' }}
				tags={[
					{
						id: 'lifeandstyle/series/observer-design',
						type: 'Series',
						title: 'Observer Design',
					},
				]}
			/>,
		);

		expect(
			container.querySelector(`.${interactiveLegacyClasses.byline}`),
		).toBeNull();
	});
});
