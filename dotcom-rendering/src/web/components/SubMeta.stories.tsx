import { css } from '@emotion/react';
import {
	ArticleDesign,
	ArticleDisplay,
	ArticlePillar,
	ArticleSpecial,
} from '@guardian/libs';
import {
	getAllThemes,
	getThemeNameAsString,
} from '../../../../common-rendering/src/fixtures/article';
import { SubMeta } from './SubMeta';

export default {
	component: SubMeta,
	title: 'Components/SubMeta',
};

const Container = ({ children }: { children: React.ReactNode }) => (
	<div
		css={css`
			width: 620px;
			padding: 20px;
		`}
	>
		{children}
	</div>
);

const subMetaKeywordLinks = [
	{
		url: '/world/eu',
		title: 'European Union',
	},
	{
		url: '/world/europe-news',
		title: 'Europe',
	},
	{
		url: '/environment/flooding',
		title: 'Flooding',
	},
	{
		url: '/world/wildfires',
		title: 'Wildfires',
	},
	{
		url: '/world/natural-disasters',
		title: 'Natural disasters and extreme weather',
	},
	{
		url: '/tone/news',
		title: 'news',
	},
];

const subMetaSectionLinks = [
	{
		url: '/environment/climate-change',
		title: 'Climate change',
	},
];

export const News = () => {
	return (
		<Container>
			<SubMeta
				format={{
					display: ArticleDisplay.Standard,
					design: ArticleDesign.Standard,
					theme: ArticlePillar.News,
				}}
				subMetaKeywordLinks={subMetaKeywordLinks}
				subMetaSectionLinks={subMetaSectionLinks}
				pageId=""
				webUrl=""
				webTitle=""
				showBottomSocialButtons={true}
			/>
		</Container>
	);
};
News.story = { name: 'News' };

export const Sport = () => {
	return (
		<Container>
			<SubMeta
				format={{
					display: ArticleDisplay.Standard,
					design: ArticleDesign.Standard,
					theme: ArticlePillar.Sport,
				}}
				subMetaKeywordLinks={subMetaKeywordLinks}
				subMetaSectionLinks={subMetaSectionLinks}
				pageId=""
				webUrl=""
				webTitle=""
				showBottomSocialButtons={true}
			/>
		</Container>
	);
};
Sport.story = { name: 'Sport' };

export const Culture = () => {
	return (
		<Container>
			<SubMeta
				format={{
					display: ArticleDisplay.Standard,
					design: ArticleDesign.Standard,
					theme: ArticlePillar.Culture,
				}}
				subMetaKeywordLinks={subMetaKeywordLinks}
				subMetaSectionLinks={subMetaSectionLinks}
				pageId=""
				webUrl=""
				webTitle=""
				showBottomSocialButtons={true}
			/>
		</Container>
	);
};
Culture.story = { name: 'Culture' };

export const Lifestyle = () => {
	return (
		<Container>
			<SubMeta
				format={{
					display: ArticleDisplay.Standard,
					design: ArticleDesign.Standard,
					theme: ArticlePillar.Lifestyle,
				}}
				subMetaKeywordLinks={subMetaKeywordLinks}
				subMetaSectionLinks={subMetaSectionLinks}
				pageId=""
				webUrl=""
				webTitle=""
				showBottomSocialButtons={true}
			/>
		</Container>
	);
};
Lifestyle.story = { name: 'Lifestyle' };

export const Opinion = () => {
	return (
		<Container>
			<SubMeta
				format={{
					display: ArticleDisplay.Standard,
					design: ArticleDesign.Standard,
					theme: ArticlePillar.Opinion,
				}}
				subMetaKeywordLinks={subMetaKeywordLinks}
				subMetaSectionLinks={subMetaSectionLinks}
				pageId=""
				webUrl=""
				webTitle=""
				showBottomSocialButtons={true}
			/>
		</Container>
	);
};
Opinion.story = { name: 'Opinion' };

export const Labs = () => {
	return (
		<Container>
			<SubMeta
				format={{
					display: ArticleDisplay.Standard,
					design: ArticleDesign.Standard,
					theme: ArticleSpecial.Labs,
				}}
				subMetaKeywordLinks={subMetaKeywordLinks}
				subMetaSectionLinks={subMetaSectionLinks}
				pageId=""
				webUrl=""
				webTitle=""
				showBottomSocialButtons={true}
			/>
		</Container>
	);
};
Labs.story = { name: 'Labs' };

export const SpecialReport = () => {
	return (
		<Container>
			<SubMeta
				format={{
					display: ArticleDisplay.Standard,
					design: ArticleDesign.Standard,
					theme: ArticleSpecial.SpecialReport,
				}}
				subMetaKeywordLinks={subMetaKeywordLinks}
				subMetaSectionLinks={subMetaSectionLinks}
				pageId=""
				webUrl=""
				webTitle=""
				showBottomSocialButtons={true}
			/>
		</Container>
	);
};
SpecialReport.story = { name: 'SpecialReport' };

export const DeadBlogStory = () => {
	return (
		<>
			{getAllThemes({
				display: ArticleDisplay.Standard,
				design: ArticleDesign.DeadBlog,
			}).map((format) => (
				<Container>
					<p>{getThemeNameAsString(format)}</p>
					<SubMeta
						format={format}
						subMetaKeywordLinks={subMetaKeywordLinks}
						subMetaSectionLinks={subMetaSectionLinks}
						pageId=""
						webUrl=""
						webTitle=""
						showBottomSocialButtons={true}
					/>
				</Container>
			))}
		</>
	);
};
DeadBlogStory.story = { name: 'Deadblog - All pillars' };
