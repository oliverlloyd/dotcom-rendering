import { css } from 'npm:@emotion/react';
import type { ArticleFormat } from 'npm:@guardian/libs';
import { ArticleDesign, ArticleDisplay, ArticleSpecial } from 'npm:@guardian/libs';
import {
	brandAltBackground,
	headline,
	neutral,
	space,
	textSans,
	until,
} from 'npm:@guardian/source-foundations';
import { getSoleContributor } from '../../lib/byline.ts';
import type { Palette } from '../../types/palette.ts';
import { decidePalette } from '../lib/decidePalette.ts';
import { BylineLink } from './BylineLink.ts';

const wrapperStyles = css`
	margin-left: 6px;
	margin-top: 4px;
	/* Without z-index here the byline appears behind the main image for showcase views */
	z-index: 1;
`;

const yellowBoxStyles = (format: ArticleFormat) => css`
	${format.theme === ArticleSpecial.Labs
		? textSans.large({ lineHeight: 'regular' })
		: headline.xxsmall({
				fontWeight: 'regular',
				lineHeight: 'loose',
		  })}
	font-style: italic;
	background-color: ${brandAltBackground.primary};
	box-shadow: 4px 0 0 ${brandAltBackground.primary},
		-6px 0 0 ${brandAltBackground.primary};
	display: inline-block;
	box-decoration-break: clone;

	a {
		color: inherit;
		text-decoration: none;
		:hover {
			text-decoration: underline;
		}
	}
`;

const opinionWrapperStyles = css`
	display: inline-block;
`;

const opinionStyles = (palette: Palette, format: ArticleFormat) => css`
	${format.theme === ArticleSpecial.Labs
		? textSans.xxxlarge({ lineHeight: 'loose' })
		: headline.medium({
				fontWeight: 'light',
		  })}
	line-height: 38px;
	/* Used to prevent the byline stretching full width */
	display: inline;
	font-style: italic;
	color: ${palette.text.headlineByline};
	background: ${palette.background.headlineByline};

	${until.mobileMedium} {
		${headline.small({
			fontWeight: 'light',
		})}
	}

	a {
		color: inherit;
		text-decoration: none;
		:hover {
			text-decoration: underline;
		}
	}
`;

const analysisStyles = (palette: Palette, hasSingleContributor: boolean) => css`
	${headline.medium({
		fontWeight: 'light',
	})}
	line-height: 38px;
	font-style: italic;
	color: ${palette.text.headlineByline};
	background: ${palette.background.headlineByline};

	${hasSingleContributor &&
	css`
		display: flex;
		flex-direction: column;
	`}

	${until.tablet} {
		${headline.small({
			fontWeight: 'light',
		})}
	}

	a {
		color: inherit;
		text-decoration: none;
		:hover {
			text-decoration: underline;
		}
	}
	span {
		color: ${neutral[46]};
	}
`;

const immersiveStyles = (format: ArticleFormat) => css`
	${format.theme === ArticleSpecial.Labs
		? textSans.large({ lineHeight: 'tight' })
		: headline.xsmall({
				fontWeight: 'light',
		  })}
	margin-bottom: ${space[6]}px;
`;

const immersiveLinkStyles = (palette: Palette, format: ArticleFormat) => css`
	a {
		color: ${palette.text.headlineByline};
		border-bottom: 1px solid
			${format.theme === ArticleSpecial.Labs
				? palette.border.articleLink
				: palette.text.headlineByline};
		text-decoration: none;
		:hover {
			border-bottom: 1px solid ${palette.hover.headlineByline};
			color: ${palette.hover.headlineByline};
			text-decoration: none;
		}
	}
`;

// If there is an image reduce the width of the author div
const authorBylineWithImage = css`
	width: 68%;
`;

type Props = {
	format: ArticleFormat;
	byline: string;
	tags: TagType[];
};

export const HeadlineByline = ({ format, byline, tags }: Props) => {
	if (byline === '') {
		return null;
	}

	const palette = decidePalette(format);

	const hasSingleContributor = !!getSoleContributor(tags, byline);

	switch (format.display) {
		case ArticleDisplay.Immersive:
			return (
				<div css={immersiveStyles(format)}>
					by{' '}
					<span css={immersiveLinkStyles(palette, format)}>
						<BylineLink
							byline={byline}
							tags={tags}
							format={format}
						/>
					</span>
				</div>
			);
		case ArticleDisplay.Showcase:
		case ArticleDisplay.NumberedList:
		case ArticleDisplay.Standard:
		default: {
			switch (format.design) {
				case ArticleDesign.Interview:
					return (
						<div css={wrapperStyles}>
							<div css={yellowBoxStyles(format)}>
								<BylineLink
									byline={byline}
									tags={tags}
									format={format}
								/>
							</div>
						</div>
					);
				case ArticleDesign.Editorial:
				case ArticleDesign.Letter:
				case ArticleDesign.Comment:
					return (
						<div
							css={[
								opinionWrapperStyles,
								hasSingleContributor && authorBylineWithImage,
							]}
						>
							<div css={opinionStyles(palette, format)}>
								<BylineLink
									byline={byline}
									tags={tags}
									format={format}
								/>
							</div>
						</div>
					);
				case ArticleDesign.Analysis:
					return (
						<div css={opinionWrapperStyles}>
							<div
								css={analysisStyles(
									palette,
									hasSingleContributor,
								)}
							>
								<BylineLink
									byline={byline}
									tags={tags}
									format={format}
								/>
							</div>
						</div>
					);
				default:
					return null;
			}
		}
	}
};
