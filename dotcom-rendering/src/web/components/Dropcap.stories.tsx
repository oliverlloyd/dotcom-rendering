import { css } from '@emotion/react';
import { ArticleDesign, ArticleDisplay, ArticlePillar } from '@guardian/libs';
import { body } from '@guardian/source-foundations';
import { DropCap } from './DropCap';

export default {
	component: DropCap,
	title: 'Components/DropCap',
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

export const Article = () => {
	return (
		<Container>
			<p
				css={css`
					${body.medium()};
				`}
			>
				<DropCap
					letter="T"
					format={{
						design: ArticleDesign.Standard,
						display: ArticleDisplay.Standard,
						theme: ArticlePillar.News,
					}}
				/>
				here once was a dropcap. Lorem ipsum dolor sit amet, consectetur
				adipiscing elit, sed do eiusmod tempor incididunt ut labore et
				dolore magna aliqua. Ut enim ad minim veniam, quis nostrud
				exercitation ullamco laboris nisi ut aliquip ex ea commodo
				consequat. Duis aute irure dolor in reprehenderit in voluptate
				velit esse cillum dolore eu fugiat nulla pariatur. Excepteur
				sint occaecat cupidatat non proident, sunt in culpa qui officia
				deserunt mollit anim id est laborum.
			</p>
		</Container>
	);
};
Article.story = { name: 'Article | news' };

export const OpinionArticle = () => {
	return (
		<Container>
			<p
				css={css`
					${body.medium()};
				`}
			>
				<DropCap
					letter="L"
					format={{
						design: ArticleDesign.Standard,
						display: ArticleDisplay.Standard,
						theme: ArticlePillar.Opinion,
					}}
				/>
				ong, long ago, there lived a dropcap. Lorem ipsum dolor sit
				amet, consectetur adipiscing elit, sed do eiusmod tempor
				incididunt ut labore et dolore magna aliqua. Ut enim ad minim
				veniam, quis nostrud exercitation ullamco laboris nisi ut
				aliquip ex ea commodo consequat. Duis aute irure dolor in
				reprehenderit in voluptate velit esse cillum dolore eu fugiat
				nulla pariatur. Excepteur sint occaecat cupidatat non proident,
				sunt in culpa qui officia deserunt mollit anim id est laborum.
			</p>
		</Container>
	);
};
OpinionArticle.story = { name: 'Article | opinion' };

export const Feature = () => {
	return (
		<Container>
			<p
				css={css`
					${body.medium()};
				`}
			>
				<DropCap
					letter="O"
					format={{
						design: ArticleDesign.Feature,
						display: ArticleDisplay.Standard,
						theme: ArticlePillar.Culture,
					}}
				/>
				nce upon a time there was a dropcap. Lorem ipsum dolor sit amet,
				consectetur adipiscing elit, sed do eiusmod tempor incididunt ut
				labore et dolore magna aliqua. Ut enim ad minim veniam, quis
				nostrud exercitation ullamco laboris nisi ut aliquip ex ea
				commodo consequat. Duis aute irure dolor in reprehenderit in
				voluptate velit esse cillum dolore eu fugiat nulla pariatur.
				Excepteur sint occaecat cupidatat non proident, sunt in culpa
				qui officia deserunt mollit anim id est laborum.
			</p>
		</Container>
	);
};
Feature.story = { name: 'Feature | culture' };

export const PhotoEssay = () => {
	return (
		<Container>
			<p
				css={css`
					${body.medium()};
				`}
			>
				<DropCap
					letter="O"
					format={{
						design: ArticleDesign.PhotoEssay,
						display: ArticleDisplay.Standard,
						theme: ArticlePillar.Sport,
					}}
				/>
				nce upon a time there was a dropcap. Lorem ipsum dolor sit amet,
				consectetur adipiscing elit, sed do eiusmod tempor incididunt ut
				labore et dolore magna aliqua. Ut enim ad minim veniam, quis
				nostrud exercitation ullamco laboris nisi ut aliquip ex ea
				commodo consequat. Duis aute irure dolor in reprehenderit in
				voluptate velit esse cillum dolore eu fugiat nulla pariatur.
				Excepteur sint occaecat cupidatat non proident, sunt in culpa
				qui officia deserunt mollit anim id est laborum.
			</p>
		</Container>
	);
};
PhotoEssay.story = { name: 'PhotoEssay | sport' };

export const Interview = () => {
	return (
		<Container>
			<p
				css={css`
					${body.medium()};
				`}
			>
				<DropCap
					letter="O"
					format={{
						design: ArticleDesign.Interview,
						display: ArticleDisplay.Standard,
						theme: ArticlePillar.Lifestyle,
					}}
				/>
				nce upon a time there was a dropcap. Lorem ipsum dolor sit amet,
				consectetur adipiscing elit, sed do eiusmod tempor incididunt ut
				labore et dolore magna aliqua. Ut enim ad minim veniam, quis
				nostrud exercitation ullamco laboris nisi ut aliquip ex ea
				commodo consequat. Duis aute irure dolor in reprehenderit in
				voluptate velit esse cillum dolore eu fugiat nulla pariatur.
				Excepteur sint occaecat cupidatat non proident, sunt in culpa
				qui officia deserunt mollit anim id est laborum.
			</p>
		</Container>
	);
};
Interview.story = { name: 'Interview | lifestyle' };

export const Comment = () => {
	return (
		<Container>
			<p
				css={css`
					${body.medium()};
				`}
			>
				<DropCap
					letter="O"
					format={{
						design: ArticleDesign.Comment,
						display: ArticleDisplay.Standard,
						theme: ArticlePillar.Opinion,
					}}
				/>
				nce upon a time there was a dropcap. Lorem ipsum dolor sit amet,
				consectetur adipiscing elit, sed do eiusmod tempor incididunt ut
				labore et dolore magna aliqua. Ut enim ad minim veniam, quis
				nostrud exercitation ullamco laboris nisi ut aliquip ex ea
				commodo consequat. Duis aute irure dolor in reprehenderit in
				voluptate velit esse cillum dolore eu fugiat nulla pariatur.
				Excepteur sint occaecat cupidatat non proident, sunt in culpa
				qui officia deserunt mollit anim id est laborum.
			</p>
		</Container>
	);
};
Comment.story = { name: 'Comment | opinion' };

export const CommentSport = () => {
	return (
		<Container>
			<p
				css={css`
					${body.medium()};
				`}
			>
				<DropCap
					letter="O"
					format={{
						design: ArticleDesign.Comment,
						display: ArticleDisplay.Standard,
						theme: ArticlePillar.Sport,
					}}
				/>
				nce upon a time there was a dropcap. Lorem ipsum dolor sit amet,
				consectetur adipiscing elit, sed do eiusmod tempor incididunt ut
				labore et dolore magna aliqua. Ut enim ad minim veniam, quis
				nostrud exercitation ullamco laboris nisi ut aliquip ex ea
				commodo consequat. Duis aute irure dolor in reprehenderit in
				voluptate velit esse cillum dolore eu fugiat nulla pariatur.
				Excepteur sint occaecat cupidatat non proident, sunt in culpa
				qui officia deserunt mollit anim id est laborum.
			</p>
		</Container>
	);
};
CommentSport.story = { name: 'Comment | sport' };

export const CommentCulture = () => {
	return (
		<Container>
			<p
				css={css`
					${body.medium()};
				`}
			>
				<DropCap
					letter="O"
					format={{
						design: ArticleDesign.Comment,
						display: ArticleDisplay.Standard,
						theme: ArticlePillar.Culture,
					}}
				/>
				nce upon a time there was a dropcap. Lorem ipsum dolor sit amet,
				consectetur adipiscing elit, sed do eiusmod tempor incididunt ut
				labore et dolore magna aliqua. Ut enim ad minim veniam, quis
				nostrud exercitation ullamco laboris nisi ut aliquip ex ea
				commodo consequat. Duis aute irure dolor in reprehenderit in
				voluptate velit esse cillum dolore eu fugiat nulla pariatur.
				Excepteur sint occaecat cupidatat non proident, sunt in culpa
				qui officia deserunt mollit anim id est laborum.
			</p>
		</Container>
	);
};
CommentCulture.story = { name: 'Comment | culture' };
