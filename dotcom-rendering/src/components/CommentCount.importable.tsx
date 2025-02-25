import { css } from '@emotion/react';
import { joinUrl } from '@guardian/libs';
import { between, textSans, until } from '@guardian/source-foundations';
import { decidePalette } from '../lib/decidePalette';
import { formatCount } from '../lib/formatCount';
import { useDiscussion } from '../lib/useDiscussion';
import CommentIcon from '../static/icons/comment.svg';
import type { Palette } from '../types/palette';

type Props = {
	format: ArticleFormat;
	discussionApiUrl: string;
	shortUrlId: string;
};

const containerStyles = (palette: Palette) => css`
	display: flex;
	align-self: flex-end;
	flex-direction: column;
	${textSans.medium()};
	font-weight: bold;
	color: ${palette.fill.commentCount};
	padding-top: 5px;

	${until.desktop} {
		color: ${palette.fill.commentCountUntilDesktop};
	}
`;

const iconContainerStyles = css`
	height: 15px;
	margin: 0;
	text-align: right;
	margin-bottom: -2px;
	svg {
		height: 18px;
		width: 18px;
	}
`;

const iconStyles = (palette: Palette) => css`
	fill: ${palette.fill.commentCount};
	${until.desktop} {
		fill: ${palette.fill.commentCountUntilDesktop};
	}
`;

const longStyles = css`
	display: block;

	${between.leftCol.and.wide} {
		display: none;
	}
`;

const shortStyles = css`
	display: none;

	${between.leftCol.and.wide} {
		display: block;
	}
`;

const linkStyles = css`
	color: inherit;
	text-decoration: none;
	:hover {
		text-decoration: underline;
	}
	:visited {
		color: inherit;
	}
`;

/**
 * # CommentCount
 *
 * Shows the number of comments at the top of an article.
 * Fetches the count from the discussion API.
 *
 * [Storybook `Count`](https://637e40d1bc73bf3f604394b9-rzazjyrwhc.chromatic.com/?path=/story/components-counts)
 */
export const CommentCount = ({
	format,
	discussionApiUrl,
	shortUrlId,
}: Props) => {
	const { commentCount } = useDiscussion(
		joinUrl(discussionApiUrl, 'discussion', shortUrlId),
	);

	// If the comment count is 0 we still want to display it
	if (commentCount === undefined) return null;

	const { short, long } = formatCount(commentCount);
	const palette = decidePalette(format);

	return (
		<data
			css={containerStyles(palette)}
			data-cy="comment-counts"
			value={`${long} comments on this article`}
		>
			<a
				href="#comments"
				css={linkStyles}
				aria-label={`${short} Comments`}
			>
				<div css={iconContainerStyles}>
					<CommentIcon css={iconStyles(palette)} />
				</div>
				<div
					data-testid="long-comment-count"
					css={longStyles}
					aria-hidden="true"
				>
					{long}
				</div>
				<div
					data-testid="short-comment-count"
					css={shortStyles}
					aria-hidden="true"
				>
					{short}
				</div>
			</a>
		</data>
	);
};
