// ----- Imports ----- //

import type { SerializedStyles } from '@emotion/react';
import { css } from '@emotion/react';
import { fill } from '@guardian/common-rendering/src/editorialPalette';
import type { ArticleFormat } from '@guardian/libs';
import { ArticleDesign } from '@guardian/libs';
import {
	border,
	from,
	neutral,
	remSpace,
	textSans,
} from '@guardian/source-foundations';
import type { Option } from '@guardian/types';
import { map, withDefault } from '@guardian/types';
import { pipe } from 'lib';
import type { FC } from 'react';
import { darkModeCss } from 'styles';
import { getThemeStyles } from 'themeStyles';

// ----- Component ----- //

interface Props extends ArticleFormat {
	count: Option<number>;
	commentable: boolean;
}

const styles = (
	colour: string,
	borderColor: string,
	darkBorderColour: string,
): SerializedStyles => css`
	${textSans.medium({ fontWeight: 'bold' })}
	border: none;
	background: none;
	border-left: 1px solid ${borderColor};
	padding-top: ${remSpace[3]};
	color: ${colour};
	${darkModeCss`
        border-left: 1px solid ${darkBorderColour};
    `}
`;

const bubbleStyles = (colour: string): SerializedStyles => css`
	width: 1rem;
	display: block;
	margin-left: auto;
	fill: ${colour};
`;

const blogStyles = (color: string): SerializedStyles => css`
	${styles(color, 'rgba(255, 255, 255, 0.4)', 'rgba(255, 255, 255, 0.4)')}

	${from.desktop} {
		color: ${neutral[46]};
		border-left: 1px solid ${neutral[86]};

		${darkModeCss`
			border-left-color: ${neutral[20]}
		`}
	}
	padding-top: ${remSpace[2]};
	margin-bottom: ${remSpace[2]};
`;

const deadblogStyles = css`
	border-left: none;
	padding-left: ${remSpace[3]};
	${from.phablet} {
		padding-left: ${remSpace[5]};
	}
	${from.desktop} {
		padding-left: 0;
		border-left: none;
	}
`;

const getStyles = (format: ArticleFormat): SerializedStyles => {
	const colours = getThemeStyles(format.theme);
	const commentCount = fill.commentCount(format);

	switch (format.design) {
		case ArticleDesign.LiveBlog:
			return blogStyles(neutral[93]);
		case ArticleDesign.DeadBlog:
			return css(blogStyles(commentCount), deadblogStyles);
		default:
			return styles(colours.kicker, border.secondary, neutral[20]);
	}
};

const liveblogBubbleStyles = css`
	${from.desktop} {
		fill: ${neutral[46]};
	}
`;

const deadblogBubbleStyles = (color: string): SerializedStyles => css`
	fill: ${color};
	margin-left: revert;
	${from.desktop} {
		fill: ${neutral[46]};
	}
`;

const getBubbleStyles = (format: ArticleFormat): SerializedStyles => {
	const colours = getThemeStyles(format.theme);
	const commentCount = fill.commentCount(format);

	switch (format.design) {
		case ArticleDesign.LiveBlog:
			return css(bubbleStyles(neutral[93]), liveblogBubbleStyles);
		case ArticleDesign.DeadBlog:
			return css(
				bubbleStyles(neutral[93]),
				deadblogBubbleStyles(commentCount),
			);
		default:
			return bubbleStyles(colours.kicker);
	}
};

const CommentCount: FC<Props> = ({ count, commentable, ...format }: Props) => {
	if (!commentable) {
		return null;
	}

	return pipe(
		count,
		map((count: number) => (
			<button css={getStyles(format)}>
				<svg
					css={getBubbleStyles(format)}
					xmlns="http://www.w3.org/2000/svg"
					viewBox="0 0 9 8"
				>
					<rect x="0" y="0" width="9" height="6" rx="1.2" />
					<polygon points="2,6 2,8 2.5,8 4,6" />
				</svg>
				{count.toLocaleString()}
			</button>
		)),
		withDefault(<></>),
	);
};

// ----- Exports ----- //

export default CommentCount;
