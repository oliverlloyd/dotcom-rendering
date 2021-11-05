import { css } from '@emotion/react';
import {
	ArticleDisplay,
	ArticleDesign,
	ArticlePillar,
	ArticleSpecial,
} from '@guardian/libs';
import { breakpoints } from '@guardian/src-foundations/mq';

import { Pagination } from './Pagination';

export default {
	component: Pagination,
	title: 'Components/Pagination',
};

const Container = ({ children }: { children: React.ReactNode }) => (
	<div
		css={css`
			padding: 20px;
		`}
	>
		{children}
	</div>
);

export const Themes = () => {
	return (
		<Container>
			<Pagination
				format={{
					display: ArticleDisplay.Standard,
					design: ArticleDesign.Standard,
					theme: ArticlePillar.News,
				}}
				currentPage={2}
				totalPages={6}
				oldest="/"
				older="/"
				newest="/"
				newer="/"
			/>
			<br />
			<Pagination
				format={{
					display: ArticleDisplay.Standard,
					design: ArticleDesign.Standard,
					theme: ArticlePillar.Sport,
				}}
				currentPage={2}
				totalPages={6}
				oldest="/"
				older="/"
				newest="/"
				newer="/"
			/>
			<br />
			<Pagination
				format={{
					display: ArticleDisplay.Standard,
					design: ArticleDesign.Standard,
					theme: ArticlePillar.Lifestyle,
				}}
				currentPage={2}
				totalPages={6}
				oldest="/"
				older="/"
				newest="/"
				newer="/"
			/>
			<br />
			<Pagination
				format={{
					display: ArticleDisplay.Standard,
					design: ArticleDesign.Standard,
					theme: ArticlePillar.Culture,
				}}
				currentPage={2}
				totalPages={6}
				oldest="/"
				older="/"
				newest="/"
				newer="/"
			/>
			<br />
			<Pagination
				format={{
					display: ArticleDisplay.Standard,
					design: ArticleDesign.Standard,
					theme: ArticlePillar.Opinion,
				}}
				currentPage={2}
				totalPages={6}
				oldest="/"
				older="/"
				newest="/"
				newer="/"
			/>
			<br />
			<Pagination
				format={{
					display: ArticleDisplay.Standard,
					design: ArticleDesign.Standard,
					theme: ArticleSpecial.Labs,
				}}
				currentPage={2}
				totalPages={6}
				oldest="/"
				older="/"
				newest="/"
				newer="/"
			/>
			<br />
			<Pagination
				format={{
					display: ArticleDisplay.Standard,
					design: ArticleDesign.Standard,
					theme: ArticleSpecial.SpecialReport,
				}}
				currentPage={2}
				totalPages={6}
				oldest="/"
				older="/"
				newest="/"
				newer="/"
			/>
		</Container>
	);
};
Themes.story = {
	name: 'Themes',
	parameters: {
		viewport: { defaultViewport: 'phablet' },
		chromatic: { viewports: [breakpoints.phablet] },
	},
};

export const LastPage = () => {
	return (
		<Container>
			<Pagination
				format={{
					display: ArticleDisplay.Standard,
					design: ArticleDesign.Standard,
					theme: ArticlePillar.News,
				}}
				currentPage={6}
				totalPages={6}
				newest="/"
				newer="/"
			/>
		</Container>
	);
};
LastPage.story = { name: 'LastPage' };

export const FirstPage = () => {
	return (
		<Container>
			<Pagination
				format={{
					display: ArticleDisplay.Standard,
					design: ArticleDesign.Standard,
					theme: ArticlePillar.News,
				}}
				currentPage={1}
				totalPages={6}
				oldest="/"
				older="/"
			/>
		</Container>
	);
};
FirstPage.story = { name: 'FirstPage' };
