import { css } from 'npm:@emotion/react';
import { ArticleDesign, timeAgo } from 'npm:@guardian/libs';
import { textSans, until } from 'npm:@guardian/source-foundations';
import ClockIcon from '../../../../static/icons/clock.svg.ts';
import type { DCRContainerPalette } from '../../../../types/front.ts';
import type { Palette } from '../../../../types/palette.ts';
import { decidePalette } from '../../../lib/decidePalette.ts';

type Props = {
	format: ArticleFormat;
	containerPalette?: DCRContainerPalette;
	webPublicationDate: string;
	showClock?: boolean;
	isDynamo?: true;
};

const ageStyles = (
	format: ArticleFormat,
	palette: Palette,
	isDynamo?: true,
) => {
	return css`
		${textSans.xxsmall({ lineHeight: 'tight' })};
		margin-top: -4px;
		color: ${isDynamo
			? palette.text.dynamoHeadline
			: palette.text.cardFooter};

		/* Provide side padding for positioning and also to keep spacing
    between any sibings (like Lines) */
		padding-left: 5px;
		padding-right: 5px;
		${until.tablet} {
			line-height: 1.25;
		}

		svg {
			fill: ${palette.text.cardFooter};
			margin-bottom: -1px;
			height: 11px;
			width: 11px;
			margin-right: 2px;
		}

		> time {
			${textSans.xxsmall({
				fontWeight:
					format.design === ArticleDesign.Gallery ||
					format.design === ArticleDesign.Audio ||
					format.design === ArticleDesign.Video
						? `bold`
						: `regular`,
			})};
		}
	`;
};

export const CardAge = ({
	format,
	containerPalette,
	webPublicationDate,
	showClock,
	isDynamo,
}: Props) => {
	const displayString = timeAgo(new Date(webPublicationDate).getTime());
	const palette = decidePalette(format, containerPalette);

	if (!displayString) {
		return null;
	}

	return (
		<span css={ageStyles(format, palette, isDynamo)}>
			<span>
				{showClock && <ClockIcon />}
				<time dateTime={webPublicationDate} data-relativeformat="med">
					{displayString}
				</time>
			</span>
		</span>
	);
};
