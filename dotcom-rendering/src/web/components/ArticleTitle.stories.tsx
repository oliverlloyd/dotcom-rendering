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
import { ArticleTitle } from './ArticleTitle';

const Container = ({ children }: { children: React.ReactNode }) => (
	<div
		css={css`
			width: 200px;
			padding: 20px;
		`}
	>
		{children}
	</div>
);
const CAPIArticle = {
	tags: [],
	guardianBaseURL: 'https://theguardian.com',
	inLeftCol: true,
	fallbackToSection: true,
	sectionLabel: 'Section label',
	sectionUrl: '/section_url',
};
const brexitCAPI = {
	...CAPIArticle,
	...{
		sectionLabel: 'Brexit',
		sectionUrl: '/brexit',
		badge: {
			seriesTag: 'politics/series/brexit-how-it-came-to-this',
			imageUrl:
				'https://assets.guim.co.uk/images/badges/05c6ace4e60dd0209a3f80eb03e16524/EUReferendumBadge.svg',
		},
	},
};

const beyondTheBladeCAPI = {
	...CAPIArticle,
	...{
		sectionLabel: 'Beyond the blade',
		sectionUrl: '/beyond-the-blade',
		badge: {
			seriesTag: 'membership/series/beyond-the-blade',
			imageUrl:
				'https://assets.guim.co.uk/images/badges/bfc00bc58eb966845ccf1200fd8c54e0/beyondthebladebadge.svg',
		},
	},
};

export default {
	component: ArticleTitle,
	title: 'Components/ArticleTitle',
};

export const defaultStory = () => {
	return (
		<Container>
			<ArticleTitle
				{...brexitCAPI}
				format={{
					display: ArticleDisplay.Standard,
					theme: ArticlePillar.Sport,
					design: ArticleDesign.Standard,
				}}
			/>
		</Container>
	);
};
defaultStory.story = { name: 'Brexit badge' };

export const beyondTheBlade = () => {
	return (
		<Container>
			<ArticleTitle
				{...beyondTheBladeCAPI}
				format={{
					display: ArticleDisplay.Standard,
					theme: ArticlePillar.News,
					design: ArticleDesign.Standard,
				}}
			/>
		</Container>
	);
};
beyondTheBlade.story = { name: 'Beyond the blade badge' };

export const immersiveComment = () => {
	return (
		<div
			css={css`
				background-color: lightgray;
				padding: 20px;
			`}
		>
			<ArticleTitle
				{...brexitCAPI}
				format={{
					display: ArticleDisplay.Immersive,
					theme: ArticlePillar.Sport,
					design: ArticleDesign.Comment,
				}}
			/>
		</div>
	);
};
immersiveComment.story = { name: 'Immersive comment piece' };

export const immersiveCommentTag = () => {
	return (
		<div
			css={css`
				background-color: lightgray;
				padding: 20px;
			`}
		>
			<ArticleTitle
				{...CAPIArticle}
				format={{
					display: ArticleDisplay.Immersive,
					theme: ArticlePillar.Sport,
					design: ArticleDesign.Comment,
				}}
				tags={[
					{
						id: '',
						title: 'Tag title',
						type: 'Blog',
					},
				]}
			/>
		</div>
	);
};
immersiveCommentTag.story = { name: 'Immersive comment piece with Blog tag' };

export const ImmersiveSeriesTag = () => {
	return (
		<Container>
			<ArticleTitle
				{...CAPIArticle}
				format={{
					display: ArticleDisplay.Immersive,
					theme: ArticlePillar.Sport,
					design: ArticleDesign.Review,
				}}
				tags={[
					{
						id: '',
						title: 'Series title with the addition of some more text to see how this wraps',
						type: 'Series',
					},
				]}
			/>
		</Container>
	);
};
ImmersiveSeriesTag.story = { name: 'Immersive with a Series tag' };

export const ArticleBlogTag = () => {
	return (
		<Container>
			<ArticleTitle
				{...CAPIArticle}
				format={{
					display: ArticleDisplay.Standard,
					theme: ArticlePillar.Sport,
					design: ArticleDesign.Standard,
				}}
				tags={[
					{
						id: '',
						title: 'Blog title',
						type: 'Blog',
					},
				]}
			/>
		</Container>
	);
};
ArticleBlogTag.story = { name: 'Article with a Blog tag' };

export const LiveblogTitle = () => {
	return (
		<Container>
			<div
				css={css`
					/* stylelint-disable-next-line color-no-hex */
					background-color: #005689;
				`}
			>
				<ArticleTitle
					{...CAPIArticle}
					format={{
						display: ArticleDisplay.Standard,
						theme: ArticlePillar.Sport,
						design: ArticleDesign.LiveBlog,
					}}
					tags={[
						{
							id: '',
							title: 'Liveblog title',
							type: 'Blog',
						},
					]}
				/>
			</div>
			<div
				css={css`
					/* stylelint-disable-next-line color-no-hex */
					background-color: #ffe500;
				`}
			>
				<ArticleTitle
					{...CAPIArticle}
					format={{
						display: ArticleDisplay.Standard,
						theme: ArticlePillar.Sport,
						design: ArticleDesign.LiveBlog,
					}}
					tags={[
						{
							id: '',
							title: 'Match liveblog title',
							type: 'Blog',
						},
					]}
					isMatch={true}
				/>
			</div>
		</Container>
	);
};
LiveblogTitle.story = { name: 'Liveblog title' };

export const ArticleOpinionTag = () => {
	return (
		<Container>
			<ArticleTitle
				{...CAPIArticle}
				format={{
					display: ArticleDisplay.Standard,
					theme: ArticlePillar.Sport,
					design: ArticleDesign.Standard,
				}}
				tags={[
					{
						id: '',
						title: 'Opinion title',
						type: 'Opinion',
					},
				]}
			/>
		</Container>
	);
};
ArticleOpinionTag.story = { name: 'Article with a Opinion tag' };

export const ArticleSeriesTag = () => {
	return (
		<Container>
			<ArticleTitle
				{...CAPIArticle}
				format={{
					display: ArticleDisplay.Standard,
					theme: ArticlePillar.Sport,
					design: ArticleDesign.Standard,
				}}
				tags={[
					{
						id: '',
						title: 'Series title',
						type: 'Series',
					},
				]}
			/>
		</Container>
	);
};
ArticleSeriesTag.story = { name: 'Article with a Series tag' };

export const SpecialReportTitle = () => {
	return (
		<Container>
			<ArticleTitle
				{...CAPIArticle}
				format={{
					display: ArticleDisplay.Standard,
					theme: ArticleSpecial.SpecialReport,
					design: ArticleDesign.Standard,
				}}
				tags={[
					{
						id: '',
						title: 'Special',
						type: 'Series',
					},
				]}
			/>
		</Container>
	);
};
SpecialReportTitle.story = { name: 'Special report' };

export const ArticleNoTags = () => {
	return (
		<Container>
			<ArticleTitle
				{...CAPIArticle}
				format={{
					display: ArticleDisplay.Standard,
					theme: ArticlePillar.Culture,
					design: ArticleDesign.Standard,
				}}
			/>
		</Container>
	);
};
ArticleNoTags.story = { name: 'Article with no tags' };

export const LabsStory = () => {
	return (
		<Container>
			<ArticleTitle
				{...CAPIArticle}
				format={{
					display: ArticleDisplay.Standard,
					theme: ArticleSpecial.Labs,
					design: ArticleDesign.Standard,
				}}
				tags={[
					{
						id: '',
						title: 'Series title',
						type: 'Series',
					},
				]}
			/>
		</Container>
	);
};
LabsStory.story = { name: 'Labs' };

export const LongStory = () => {
	return (
		<Container>
			<ArticleTitle
				{...CAPIArticle}
				format={{
					display: ArticleDisplay.Standard,
					theme: ArticlePillar.News,
					design: ArticleDesign.Standard,
				}}
				tags={[
					{
						id: '',
						title: "Edward Snowden's choice of Hong Kong as haven is a high-stakes gamble",
						type: 'Series',
					},
				]}
			/>
		</Container>
	);
};
LongStory.story = { name: 'Long title' };

export const LongWord = () => {
	return (
		<Container>
			<ArticleTitle
				{...CAPIArticle}
				format={{
					display: ArticleDisplay.Standard,
					theme: ArticlePillar.News,
					design: ArticleDesign.Standard,
				}}
				tags={[
					{
						id: '',
						title: 'Antidisestablishmentarianism',
						type: 'Series',
					},
				]}
			/>
		</Container>
	);
};
LongWord.story = { name: 'Long word' };

export const ArticleDeadBlogTitle = () => {
	return (
		<>
			{getAllThemes({
				display: ArticleDisplay.Standard,
				design: ArticleDesign.DeadBlog,
			}).map((format) => (
				<div>
					<p>{getThemeNameAsString(format)}</p>
					<ArticleTitle
						{...CAPIArticle}
						format={format}
						tags={[
							{
								id: '',
								title: 'Deadblog title',
								type: 'Blog',
							},
						]}
					/>
					<br />
					<br />
				</div>
			))}
		</>
	);
};

ArticleDeadBlogTitle.story = { name: 'Deadblog - All pillars' };
