import { css } from '@emotion/react';
import type { ArticleFormat } from '@guardian/libs';
import { ArticleDesign, ArticleDisplay, ArticleSpecial } from '@guardian/libs';
import {
	from,
	headline,
	space,
	textSans,
	until,
} from '@guardian/source-foundations';
import { getAgeWarning } from '../../lib/age-warning';
import { interactiveLegacyClasses } from '../layouts/lib/interactiveLegacyStyling';
import { decidePalette } from '../lib/decidePalette';
import { getZIndex } from '../lib/getZIndex';
import { AgeWarning } from './AgeWarning';
import { HeadlineByline } from './HeadlineByline';
import { HeadlineTag } from './HeadlineTag';

type Props = {
	headlineString: string;
	format: ArticleFormat;
	byline?: string;
	tags: TagType[];
	webPublicationDateDeprecated: string;
	hasStarRating?: boolean;
	hasAvatar?: boolean;
};

const curly = (x: any) => x;

const topPadding = css`
	${from.leftCol} {
		padding-top: ${space[1]}px;
	}
`;

const standardFont = css`
	${headline.medium()};
	${until.tablet} {
		${headline.small()};
	}
`;

const labsFont = css`
	${textSans.xlarge({ fontWeight: 'bold' })};
	line-height: 32px;
	${from.tablet} {
		${textSans.xxxlarge({ fontWeight: 'bold' })};
		line-height: 38px;
	}
`;

const boldFont = css`
	${headline.medium({ fontWeight: 'bold' })};
	${until.tablet} {
		${headline.small({ fontWeight: 'bold' })};
	}
`;

const jumboFont = css`
	${headline.xlarge({ fontWeight: 'bold' })};
	line-height: 56px;
	${until.desktop} {
		${headline.medium({ fontWeight: 'bold' })};
	}
`;

const jumboLabsFont = css`
	${textSans.xxxlarge({ fontWeight: 'bold' })};
	font-size: 50px;
	line-height: 56px;
	${until.desktop} {
		${textSans.xxlarge({ fontWeight: 'bold' })};
		font-size: 34px;
		line-height: 38px;
	}
`;

const invertedFont = css`
	${headline.medium({ fontWeight: 'bold' })};
	line-height: 42px;
	${until.tablet} {
		${headline.small({ fontWeight: 'bold' })};
		line-height: 35px;
	}
`;

const lightFont = css`
	${headline.medium({ fontWeight: 'light' })};
	font-size: 2.125rem;
	line-height: 2.375rem;
	${until.mobileMedium} {
		${headline.small({ fontWeight: 'light' })};
	}
`;

const underlinedStyles = (colour: string) => css`
	background-image: repeating-linear-gradient(
		to bottom,
		transparent,
		transparent 47px,
		${colour}
	);
	line-height: 48px;
	background-size: 1rem 48px;
	${until.tablet} {
		background-image: repeating-linear-gradient(
			to bottom,
			transparent,
			transparent 39px,
			${colour}
		);
		line-height: 40px;
		background-size: 1px 40px;
	}

	background-position: top left;
	background-clip: content-box;
	background-origin: content-box;
`;

const displayBlock = css`
	display: block;
`;

const displayInline = css`
	display: inline;
`;

const displayFlex = css`
	display: flex;
	flex-direction: column;
`;

const shiftSlightly = css`
	margin-bottom: 16px;
`;

const invertedStyles = (palette: Palette) => css`
	position: relative;
	white-space: pre-wrap;
	padding-bottom: ${space[1]}px;
	padding-right: ${space[1]}px;
	box-shadow: -6px 0 0 ${palette.background.headline};
	/* Box decoration is required to push the box shadow out on Firefox */
	box-decoration-break: clone;
`;

const immersiveStyles = css`
	min-height: 112px;
	padding-bottom: ${space[9]}px;
	padding-left: ${space[1]}px;
	${from.mobileLandscape} {
		padding-left: ${space[3]}px;
	}
	${from.tablet} {
		padding-left: ${space[1]}px;
	}
	margin-right: ${space[5]}px;
`;

const reducedBottomPadding = css`
	padding-bottom: ${space[4]}px;
`;

const darkBackground = (palette: Palette) => css`
	background-color: ${palette.background.headline};
`;

const invertedText = css`
	white-space: pre-wrap;
	padding-bottom: ${space[1]}px;
	padding-right: ${space[1]}px;
`;

const maxWidth = css`
	${from.desktop} {
		max-width: 620px;
	}
`;

const invertedWrapper = css`
	/*
        Because we use box-shadow (to get clean and even background styles
        even when lines wrap) we need a margin on this wrapper div to
        shift everything back to the right
    */
	margin-left: 6px;
`;

const immersiveWrapper = css`
	/*
        Make sure we vertically align the headline font with the body font
    */
	margin-left: 6px;
	${from.tablet} {
		margin-left: 16px;
	}
	${from.leftCol} {
		margin-left: 25px;
	}
	/*
        We need this grow to ensure the headline fills the main content column
    */
	flex-grow: 1;
	/*
        This z-index is what ensures the headline text shows above the pseudo black
        box that extends the black background to the right
    */
	${getZIndex('articleHeadline')}
	${until.mobileLandscape} {
		margin-right: 40px;
	}
`;

// Due to MainMedia using position: relative, this seems to effect the rendering order
// To mitigate we use z-index
// TODO: find a cleaner solution
const zIndex = css`
	z-index: 1;
`;

const ageWarningMargins = (format: ArticleFormat) =>
	format.display === ArticleDisplay.Immersive
		? css`
				margin-left: 0px;
				margin-bottom: 0px;

				${from.tablet} {
					margin-left: 10px;
				}

				${from.leftCol} {
					margin-left: 20px;
				}
		  `
		: css`
				margin-top: 12px;
				margin-left: -10px;
				margin-bottom: 6px;

				${from.tablet} {
					margin-left: -20px;
				}

				${from.leftCol} {
					margin-left: -10px;
					margin-top: 0;
				}
		  `;

const backgroundStyles = (palette: Palette) => css`
	background-color: ${palette.background.ageWarning};
`;

const WithAgeWarning = ({
	tags,
	webPublicationDateDeprecated,
	format,
	children,
}: {
	tags: TagType[];
	webPublicationDateDeprecated: string;
	format: ArticleFormat;
	children: React.ReactNode;
}) => {
	const palette = decidePalette(format);
	const age = getAgeWarning(tags, webPublicationDateDeprecated);

	if (age) {
		return (
			<>
				<div
					css={[backgroundStyles(palette), ageWarningMargins(format)]}
				>
					<AgeWarning age={age} />
				</div>
				{children}
				<AgeWarning age={age} isScreenReader={true} />
			</>
		);
	}

	return <>{children}</>;
};

const decideBottomPadding = ({
	format,
	hasStarRating,
	hasAvatar,
}: {
	format: ArticleFormat;
	hasStarRating?: boolean;
	hasAvatar?: boolean;
}) => {
	const defaultPadding = css`
		padding-bottom: ${space[6]}px;
		${from.tablet} {
			padding-bottom: ${space[9]}px;
		}
	`;
	switch (format.display) {
		case ArticleDisplay.Immersive:
			// Immersive articles have no padding
			return '';
		case ArticleDisplay.Showcase:
			switch (format.design) {
				case ArticleDesign.Comment:
				case ArticleDesign.Editorial:
				case ArticleDesign.Letter:
					// Opinion pieces with an avatar have no padding
					// Those with no avatar always have 43 pixels of bottom padding
					return hasAvatar
						? ''
						: css`
								padding-bottom: 43px;
						  `;
				case ArticleDesign.LiveBlog:
				case ArticleDesign.DeadBlog:
					// Don't add extra padding
					return '';
				default:
					// Non opinion showcase articles always have 24 pixels
					return css`
						padding-bottom: ${space[6]}px;
					`;
			}
		default: {
			switch (format.design) {
				case ArticleDesign.Review:
					if (hasStarRating) {
						return '';
					}
					return defaultPadding;

				case ArticleDesign.Comment:
				case ArticleDesign.Editorial:
				case ArticleDesign.Letter:
					// Opinion pieces with an avatar have no padding
					// Those with no avatar always have 43 pixels of bottom padding
					return hasAvatar
						? ''
						: css`
								padding-bottom: 43px;
						  `;
				case ArticleDesign.Interview:
				case ArticleDesign.LiveBlog:
				case ArticleDesign.DeadBlog:
					// Don't add extra padding
					return '';
				default:
					return defaultPadding;
			}
		}
	}
};

export const ArticleHeadline = ({
	headlineString,
	format,
	tags,
	byline,
	webPublicationDateDeprecated,
	hasStarRating,
	hasAvatar,
}: Props) => {
	const palette = decidePalette(format);

	switch (format.display) {
		case ArticleDisplay.Immersive: {
			switch (format.design) {
				case ArticleDesign.PrintShop:
					// Immersive headlines have two versions, with main media, and (this one) without
					return (
						<div
							css={decideBottomPadding({
								format,
								hasStarRating,
								hasAvatar,
							})}
						>
							<WithAgeWarning
								tags={tags}
								webPublicationDateDeprecated={
									webPublicationDateDeprecated
								}
								format={format}
							>
								<h1
									css={[
										jumboFont,
										maxWidth,
										immersiveStyles,
										displayBlock,
										reducedBottomPadding,
									]}
								>
									{curly(headlineString)}
								</h1>
							</WithAgeWarning>
						</div>
					);
				case ArticleDesign.Comment:
				case ArticleDesign.Editorial:
				case ArticleDesign.Letter:
					return (
						<div
							css={decideBottomPadding({
								format,
								hasStarRating,
								hasAvatar,
							})}
						>
							<WithAgeWarning
								tags={tags}
								webPublicationDateDeprecated={
									webPublicationDateDeprecated
								}
								format={format}
							>
								<h1
									css={[
										lightFont,
										invertedText,
										css`
											color: ${palette.text.headline};
										`,
									]}
								>
									{curly(headlineString)}
								</h1>
							</WithAgeWarning>
							{byline && (
								<HeadlineByline
									format={format}
									byline={byline}
									tags={tags}
								/>
							)}
						</div>
					);
				default:
					return (
						// Immersive headlines with main media present, are large and inverted with
						// a black background. They also have no padding and we want to avoid any
						// wrapper div as this affects the z-index stack
						<WithAgeWarning
							tags={tags}
							webPublicationDateDeprecated={
								webPublicationDateDeprecated
							}
							format={format}
						>
							<h1
								css={[
									immersiveWrapper,
									darkBackground(palette),
									css`
										color: ${palette.text.headline};
									`,
								]}
							>
								<span
									css={[
										format.theme === ArticleSpecial.Labs
											? jumboLabsFont
											: jumboFont,
										maxWidth,
										invertedStyles(palette),
										immersiveStyles,
										displayBlock,
									]}
								>
									{curly(headlineString)}
								</span>
							</h1>
						</WithAgeWarning>
					);
			}
		}
		case ArticleDisplay.NumberedList:
			return (
				<div
					css={decideBottomPadding({
						format,
						hasStarRating,
						hasAvatar,
					})}
				>
					<WithAgeWarning
						tags={tags}
						webPublicationDateDeprecated={
							webPublicationDateDeprecated
						}
						format={format}
					>
						<h1
							css={[
								boldFont,
								topPadding,
								css`
									color: ${palette.text.headline};
								`,
							]}
						>
							{curly(headlineString)}
						</h1>
					</WithAgeWarning>
				</div>
			);
		case ArticleDisplay.Showcase:
		case ArticleDisplay.Standard:
		default: {
			switch (format.design) {
				case ArticleDesign.Review:
				case ArticleDesign.Recipe:
				case ArticleDesign.Feature:
					return (
						<div
							css={decideBottomPadding({
								format,
								hasStarRating,
								hasAvatar,
							})}
						>
							<WithAgeWarning
								tags={tags}
								webPublicationDateDeprecated={
									webPublicationDateDeprecated
								}
								format={format}
							>
								<h1
									css={[
										boldFont,
										topPadding,
										css`
											color: ${palette.text.headline};
										`,
									]}
								>
									{curly(headlineString)}
								</h1>
							</WithAgeWarning>
						</div>
					);
				case ArticleDesign.Comment:
				case ArticleDesign.Editorial:
					return (
						<div
							css={decideBottomPadding({
								format,
								hasStarRating,
								hasAvatar,
							})}
						>
							<WithAgeWarning
								tags={tags}
								webPublicationDateDeprecated={
									webPublicationDateDeprecated
								}
								format={format}
							>
								<h1
									css={[
										lightFont,
										topPadding,
										css`
											color: ${palette.text.headline};
										`,
									]}
								>
									{curly(headlineString)}
								</h1>
							</WithAgeWarning>
							{byline && (
								<HeadlineByline
									format={format}
									byline={byline}
									tags={tags}
								/>
							)}
						</div>
					);

				case ArticleDesign.Letter:
					return (
						<div
							css={decideBottomPadding({
								format,
								hasStarRating,
								hasAvatar,
							})}
						>
							<WithAgeWarning
								tags={tags}
								webPublicationDateDeprecated={
									webPublicationDateDeprecated
								}
								format={format}
							>
								<h1
									css={[
										lightFont,
										topPadding,
										css`
											color: ${palette.text.headline};
										`,
									]}
								>
									{curly(headlineString)}
								</h1>
							</WithAgeWarning>
						</div>
					);
				case ArticleDesign.Analysis:
					return (
						<div
							css={decideBottomPadding({
								format,
								hasStarRating,
								hasAvatar,
							})}
						>
							<WithAgeWarning
								tags={tags}
								webPublicationDateDeprecated={
									webPublicationDateDeprecated
								}
								format={format}
							>
								<h1
									css={[
										standardFont,
										topPadding,
										underlinedStyles(
											palette.background
												.analysisUnderline,
										),
										css`
											color: ${palette.text.headline};
										`,
									]}
								>
									{curly(headlineString)}
								</h1>
							</WithAgeWarning>
						</div>
					);
				case ArticleDesign.Interview:
					return (
						// Inverted headlines have a wrapper div for positioning
						// and a black background (only for the text)
						<div
							css={[
								shiftSlightly,
								maxWidth,
								displayFlex,
								decideBottomPadding({
									format,
									hasStarRating,
									hasAvatar,
								}),
							]}
						>
							<WithAgeWarning
								tags={tags}
								webPublicationDateDeprecated={
									webPublicationDateDeprecated
								}
								format={format}
							>
								<HeadlineTag
									tagText="Interview"
									palette={palette}
								/>
								<h1
									css={[
										invertedFont,
										invertedWrapper,
										zIndex,
										css`
											color: ${palette.text.headline};
										`,
									]}
								>
									<span
										css={[
											darkBackground(palette),
											invertedStyles(palette),
											displayInline,
										]}
									>
										{curly(headlineString)}
									</span>
								</h1>
							</WithAgeWarning>
							{byline && (
								<HeadlineByline
									format={format}
									byline={byline}
									tags={tags}
								/>
							)}
						</div>
					);
				case ArticleDesign.LiveBlog:
				case ArticleDesign.DeadBlog:
					return (
						<div
							css={decideBottomPadding({
								format,
								hasStarRating,
								hasAvatar,
							})}
						>
							<WithAgeWarning
								tags={tags}
								webPublicationDateDeprecated={
									webPublicationDateDeprecated
								}
								format={format}
							>
								<h1
									css={[
										standardFont,
										css`
											color: ${palette.text.headline};
											padding-bottom: ${space[9]}px;
										`,
									]}
								>
									{curly(headlineString)}
								</h1>
							</WithAgeWarning>
						</div>
					);
				case ArticleDesign.Interactive:
					return (
						<div
							css={[
								decideBottomPadding({
									format,
									hasStarRating,
									hasAvatar,
								}),
								css`
									position: relative;
								`,
							]}
						>
							<WithAgeWarning
								tags={tags}
								webPublicationDateDeprecated={
									webPublicationDateDeprecated
								}
								format={format}
							>
								<h1
									className={
										interactiveLegacyClasses.headline
									}
									css={[
										standardFont,
										topPadding,
										css`
											color: ${palette.text.headline};
										`,
									]}
								>
									{curly(headlineString)}
								</h1>
							</WithAgeWarning>
						</div>
					);
				default:
					return (
						<div
							css={decideBottomPadding({
								format,
								hasStarRating,
								hasAvatar,
							})}
						>
							<WithAgeWarning
								tags={tags}
								webPublicationDateDeprecated={
									webPublicationDateDeprecated
								}
								format={format}
							>
								<h1
									css={[
										format.theme === ArticleSpecial.Labs
											? labsFont
											: standardFont,
										topPadding,
										css`
											color: ${palette.text.headline};
										`,
									]}
								>
									{curly(headlineString)}
								</h1>
							</WithAgeWarning>
						</div>
					);
			}
		}
	}
};
