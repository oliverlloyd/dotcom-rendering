import { css } from 'npm:@emotion/react';
import { headline, neutral } from 'npm:@guardian/source-foundations';
import React from 'react';
import { getAgeWarning } from '../../../lib/age-warning.ts';
import { getSoleContributor } from '../../../lib/byline.ts';
import { pillarPalette_DO_NOT_USE } from '../../../lib/pillars.ts';
import { getSharingUrls } from '../../../lib/sharing-urls.ts';
import type { ArticleModel } from '../../types/ArticleModel.ts';
import { MainMedia } from '../MainMedia.ts';
import { Branding, BrandingRegionContainer } from './Branding.ts';
import { Byline } from './Byline.ts';
import { SeriesLink } from './SeriesLink.ts';
import { Standfirst } from './Standfirst.ts';
import { TopMetaExtras } from './TopMetaExtras.ts';

const headerStyle = css`
	${headline.small()};
	font-weight: 100;
	padding-top: 3px;
	color: ${neutral[7]};
`;

const bylineStyle = (pillar: ArticleTheme) => css`
	${headline.small()};
	color: ${pillarPalette_DO_NOT_USE[pillar].main};
	font-style: italic;
	font-weight: 100;
	padding-top: 3px;

	a {
		color: ${pillarPalette_DO_NOT_USE[pillar].main};
		text-decoration: none;
	}
`;

const bylineImageStyle = css`
	display: block;
	margin-right: -18px;
	flex-shrink: 0;
`;

const bylineWrapper = css`
	display: flex;
	justify-content: space-between;

	background-image: repeating-linear-gradient(
		to bottom,
		${neutral[86]},
		${neutral[86]} 1px,
		transparent 1px,
		transparent 4px
	);
	background-repeat: repeat-x;
	background-position: bottom;
	background-size: 1px 29px;
	margin: 0 -10px;
	padding: 0 10px;
`;

const bottomPadding = css`
	padding-bottom: 72px;
`;

const BylineMeta: React.FunctionComponent<{
	articleData: ArticleModel;
	pillar: ArticleTheme;
}> = ({ articleData, pillar }) => {
	const contributorTag = articleData.tags.find(
		(t) => t.type === 'Contributor',
	);
	const contributorCount = articleData.tags.filter(
		(t) => t.type === 'Contributor',
	).length;
	const bylineImageUrl = contributorTag
		? contributorTag.bylineLargeImageUrl
		: null;

	const shouldShowBylineImage =
		contributorTag && bylineImageUrl && contributorCount === 1;

	return (
		<div css={bylineWrapper}>
			<div
				css={[
					bylineStyle(pillar),
					!shouldShowBylineImage && bottomPadding,
				]}
			>
				<Byline
					byline={articleData.byline}
					tags={articleData.tags}
					guardianBaseURL={articleData.guardianBaseURL}
				/>
			</div>

			{!!shouldShowBylineImage && (
				<amp-img
					class={bylineImageStyle}
					src={bylineImageUrl}
					alt={`Contributor image for: ${contributorTag.title}`}
					width="180"
					height="150"
				/>
			)}
		</div>
	);
};

export const TopMetaOpinion: React.FC<{
	articleData: ArticleModel;
	pillar: ArticleTheme;
}> = ({ articleData, pillar }) => {
	return (
		<header>
			{articleData.mainMediaElements.map((element, i) => (
				<MainMedia key={i} element={element} pillar={pillar} />
			))}

			<SeriesLink
				baseURL={articleData.guardianBaseURL}
				tags={articleData.tags}
				pillar={pillar}
				fallbackToSection={false}
			/>

			<h1 css={headerStyle}>{articleData.headline}</h1>

			<BrandingRegionContainer
				commercialProperties={articleData.commercialProperties}
			>
				{(branding) => <Branding branding={branding} pillar={pillar} />}
			</BrandingRegionContainer>

			<BylineMeta articleData={articleData} pillar={pillar} />

			<Standfirst text={articleData.standfirst} pillar={pillar} />

			<TopMetaExtras
				sharingUrls={getSharingUrls(
					articleData.pageId,
					articleData.webTitle,
				)}
				pillar={pillar}
				ageWarning={getAgeWarning(
					articleData.tags,
					articleData.webPublicationDateDeprecated,
				)}
				webPublicationDate={articleData.webPublicationDateDisplay}
				twitterHandle={
					getSoleContributor(articleData.tags, articleData.byline)
						?.twitterHandle
				}
			/>
		</header>
	);
};
