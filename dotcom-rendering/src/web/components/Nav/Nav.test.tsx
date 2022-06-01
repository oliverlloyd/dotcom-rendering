import { ArticleDesign, ArticleDisplay, ArticlePillar } from '@guardian/libs';
import { render, within } from '@testing-library/react';
import { Nav } from './Nav';
import { nav } from './Nav.mock';

describe('Nav', () => {
	it('should display pillar titles', () => {
		const { getByTestId } = render(
			<Nav
				nav={nav}
				format={{
					theme: ArticlePillar.News,
					display: ArticleDisplay.Standard,
					design: ArticleDesign.Standard,
				}}
				subscribeUrl=""
				edition="UK"
			/>,
		);
		const list = within(getByTestId('pillar-list'));

		expect(list.getByText('News')).toBeInTheDocument();
		expect(list.getByText('Opinion')).toBeInTheDocument();
		expect(list.getByText('Sport')).toBeInTheDocument();
		expect(list.getByText('Culture')).toBeInTheDocument();
	});

	it('should render the correct number of pillar items', () => {
		const { getByTestId } = render(
			<Nav
				format={{
					theme: ArticlePillar.News,
					display: ArticleDisplay.Standard,
					design: ArticleDesign.Standard,
				}}
				nav={nav}
				subscribeUrl=""
				edition="UK"
			/>,
		);

		const list = getByTestId('pillar-list');
		const listItems = list.querySelectorAll('li');

		expect(listItems.length).toEqual(nav.pillars.length);
	});
});
