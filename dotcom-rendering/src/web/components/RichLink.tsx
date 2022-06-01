import { css } from '@emotion/react';
import type { ArticleFormat } from '@guardian/libs';
import { ArticleDesign, ArticleSpecial } from '@guardian/libs';
import {
	brandAltBackground,
	from,
	headline,
	neutral,
	text,
	textSans,
} from '@guardian/source-foundations';
import ArrowInCircle from '../../static/icons/arrow-in-circle.svg';
import { decidePalette } from '../lib/decidePalette';
import { Avatar } from './Avatar';
import { Hide } from './Hide';
import { QuoteIcon } from './QuoteIcon';
import { StarRating } from './StarRating/StarRating';

interface Props {
	richLinkIndex: number;
	cardStyle: RichLinkCardType;
	imageData: RichLinkImageData;
	headlineText: string;
	contentType: ContentType;
	url: string;
	starRating?: number;
	linkFormat: ArticleFormat;
	format: ArticleFormat;
	tags: TagType[];
	sponsorName: string;
	contributorImage?: string;
	isPlaceholder?: boolean; // use 'true' for server-side default prior to client-side enrichment
}
export interface RichLinkImageData {
	thumbnailUrl: string;
	altText: string;
	width: string;
	height: string;
}

const neutralBackground = css`
	background-color: ${neutral[97]};
	a {
		color: inherit;
	}
	:hover {
		background-color: ${neutral[93]};
	}
`;

const pillarBackground = (palette: Palette) => {
	return css`
		background-color: ${palette.background.richLink};
	`;
};

const textColour = (palette: Palette) => {
	return css`
		color: ${palette.text.richLink};
	`;
};

const richLinkTopBorder = (palette: Palette) => {
	return css`
		border-top: 1px;
		border-top-style: solid;
		border-top-color: ${palette.border.richLink};
	`;
};

const richLinkLink = css`
	text-decoration: none;
`;

const richLinkElements = css`
	padding-top: 2px;
	padding-right: 5px;
	padding-left: 5px;
	padding-bottom: 5px;
`;

const richLinkHeader = css`
	padding-bottom: 10px;
	color: ${neutral[0]};
`;

const richLinkTitle = css`
	${headline.xxxsmall()};
	font-size: 14px;
	padding-top: 1px;
	padding-bottom: 1px;
	font-weight: 400;
	${from.wide} {
		${headline.xxsmall()};
		padding-bottom: 5px;
	}
`;

const labsRichLinkTitle = css`
	${from.wide} {
		${textSans.medium({ fontWeight: 'bold', lineHeight: 'regular' })}
	}
	${textSans.small({ fontWeight: 'bold', lineHeight: 'regular' })}
`;

const richLinkReadMore = (palette: Palette) => {
	return css`
		fill: ${palette.fill.richLink};
		color: ${palette.text.richLink};
		padding-top: 2px;
	`;
};

const readMoreTextStyle = css`
	${headline.xxxsmall()};
	font-size: 14px;
	${from.wide} {
		${headline.xxxsmall()}
		line-height: 25px;
	}
	display: inline-block;
	height: 30px;
	line-height: 25px;
	padding-left: 4px;
	vertical-align: top;
	font-weight: 500;
	text-decoration: none;
`;

const labsReadMoreTextStyle = css`
	${textSans.medium({ fontWeight: 'regular' })}
	display: inline-block;
	height: 30px;
	line-height: 25px;
	padding-left: 4px;
	vertical-align: top;
	text-decoration: none;
	color: ${neutral[7]};
`;

const byline = css`
	${headline.xxxsmall()};
	font-size: 14px;
	font-style: italic;
	${from.wide} {
		${headline.xxsmall()};
	}
`;

const contributorImageWrapper = css`
	width: 5rem;
	height: 5rem;
	margin-left: auto;
	margin-right: 0.3rem;
	${from.wide} {
		width: 8.5rem;
		height: 8.5rem;
	}

	/* TODO remove the default img styling in ArticleBody.tsx - do we need direct element styling? */
	img {
		width: 100%;
		height: 100%;
	}
`;

const paidForBranding = css`
	${textSans.xxsmall()};
	font-weight: bold;
	color: ${text.supporting};
`;

const starWrapper = css`
	background-color: ${brandAltBackground.primary};
	display: inline-block;
`;

const readMoreText: (contentType: string) => string = (contentType) => {
	switch (contentType) {
		case 'audio':
			return 'Listen';
		case 'gallery':
			return 'View Gallery';
		case 'video':
			return 'Watch';
		default:
			return 'Read more';
	}
};

const getMainContributor: (tags: TagType[]) => string = (tags) => {
	const contributorTags = tags.filter((t) => t.type === 'Contributor');
	return contributorTags.length > 0 ? contributorTags[0].title : '';
};

const imageStyles = css`
	width: 100%;
	height: auto;
`;

export const RichLink = ({
	richLinkIndex,
	cardStyle,
	imageData,
	headlineText,
	contentType,
	url,
	starRating,
	linkFormat,
	format,
	tags,
	sponsorName,
	contributorImage,
	isPlaceholder,
}: Props) => {
	const palette = decidePalette(linkFormat);
	const linkText =
		cardStyle === 'letters' ? `${headlineText} | Letters ` : headlineText;

	const imageCardStyles = ['news', 'letters', 'media', 'feature'];
	const parentIsBlog =
		format.design === ArticleDesign.LiveBlog ||
		format.design === ArticleDesign.DeadBlog;

	const showImage =
		imageData &&
		imageData.thumbnailUrl &&
		imageCardStyles.includes(cardStyle) &&
		!parentIsBlog;
	const isPaidContent = tags
		? tags.filter((t) => t.id === 'tone/advertisement-features').length > 0
		: false;
	const isOpinion = cardStyle === 'comment';
	const mainContributor = getMainContributor(tags);
	const isLabs = linkFormat.theme === ArticleSpecial.Labs;

	return (
		<div
			data-print-layout="hide"
			data-link-name={`rich-link-${richLinkIndex} | ${richLinkIndex}`}
			data-component="rich-link"
			css={pillarBackground(palette)}
			data-name={(isPlaceholder && 'placeholder') || ''}
		>
			<div css={neutralBackground}>
				<a css={richLinkLink} href={url}>
					<div css={richLinkTopBorder(palette)} />
					{showImage && (
						<div>
							<img
								css={imageStyles}
								src={imageData.thumbnailUrl}
								alt={imageData.altText}
								width={imageData.width}
								height={imageData.height}
							/>
						</div>
					)}
					<div css={richLinkElements}>
						<div css={richLinkHeader}>
							<div
								css={isLabs ? labsRichLinkTitle : richLinkTitle}
							>
								{isOpinion && (
									<>
										<Hide when="above" breakpoint="wide">
											<QuoteIcon
												colour={palette.fill.quoteIcon}
											/>
										</Hide>
										<Hide when="below" breakpoint="wide">
											<QuoteIcon
												colour={palette.fill.quoteIcon}
											/>
										</Hide>
									</>
								)}
								{linkText}
							</div>
							{isOpinion && (
								<div css={[byline, textColour(palette)]}>
									{mainContributor}
								</div>
							)}
							{starRating && starRating > 0 && (
								<div css={starWrapper}>
									<StarRating
										rating={starRating}
										size="medium"
									/>
								</div>
							)}
							{isPaidContent && sponsorName && (
								<div css={paidForBranding}>
									Paid for by {sponsorName}
								</div>
							)}
						</div>
						{isOpinion && contributorImage && (
							<div css={contributorImageWrapper}>
								<Avatar
									imageSrc={contributorImage}
									imageAlt={mainContributor}
									format={format}
								/>
							</div>
						)}
						<div css={richLinkReadMore(palette)}>
							<ArrowInCircle />
							<div
								css={
									isLabs
										? labsReadMoreTextStyle
										: readMoreTextStyle
								}
							>
								{readMoreText(contentType)}
							</div>
						</div>
					</div>
				</a>
			</div>
		</div>
	);
};
