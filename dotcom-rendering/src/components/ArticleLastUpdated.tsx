import { css } from '@emotion/react';
import { ArticleDesign, timeAgo } from '@guardian/libs';
import { textSans } from '@guardian/source-foundations';
import type { Palette } from '../types/palette';
import { decidePalette } from '../lib/decidePalette';
import { PulsingDot } from './PulsingDot';

const lastUpdatedStyles = (palette: Palette) => css`
	${textSans.small()}
	padding-bottom: 0.125rem;
	padding-top: 0.125rem;
	color: ${palette.text.lastUpdated};
`;

const livePulseIconStyles = (palette: Palette) => css`
	${textSans.small({ fontWeight: 'bold' })}
	color: ${palette.text.standfirst};
`;

type Props = {
	format: ArticleFormat;
	lastUpdated: number;
};

export const ArticleLastUpdated = ({ format, lastUpdated }: Props) => {
	const palette = decidePalette(format);
	const displayString = timeAgo(lastUpdated);
	const date = new Date(lastUpdated);

	return (
		<div css={lastUpdatedStyles(palette)}>
			{format.design === ArticleDesign.LiveBlog && (
				<span css={livePulseIconStyles(palette)}>
					<PulsingDot />
					LIVE
				</span>
			)}
			&nbsp;Updated&nbsp;
			<time
				dateTime={date.toString()}
				data-relativeformat="med"
				data-gu-marker="liveblog-last-updated"
			>
				{displayString}
			</time>
		</div>
	);
};
