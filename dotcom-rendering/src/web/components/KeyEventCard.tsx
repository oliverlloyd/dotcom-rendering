import { css } from '@emotion/react';
import { timeAgo } from '@guardian/libs';
import { from, space, textSans } from '@guardian/source-foundations';
import { Link } from '@guardian/source-react-components';
import { decidePalette } from '../lib/decidePalette';

interface Props {
	id: string;
	blockFirstPublished: number;
	title: string;
	isSummary: boolean;
	filterKeyEvents: boolean;
	format: ArticleFormat;
}

const linkStyles = (palette: Palette) => css`
	text-decoration: none;
	line-height: 1.35;

	&::before {
		content: '';
		display: block;
		position: relative;
		height: 13px;
		width: 13px;
		border-radius: 50%;
		background-color: ${palette.background.keyEventBullet};
		margin-bottom: ${space[1]}px;
		z-index: 2;

		${from.tablet} {
			height: 15px;
			width: 15px;
		}
	}

	&:hover::before {
		background-color: ${palette.hover.keyEventBullet};
	}

	&:hover {
		span {
			border-bottom: 1px solid ${palette.hover.keyEventLink};
		}
	}
`;

const summaryStyles = (palette: Palette) => css`
	&::before {
		background-color: ${palette.background.summaryEventBullet};
	}

	&:hover::before {
		background-color: ${palette.hover.summaryEventBullet};
	}
`;

const listItemStyles = (palette: Palette) => css`
	position: relative;
	padding-bottom: ${space[5]}px;
	padding-top: ${space[3]}px;
	padding-right: ${space[3]}px;
	background-color: ${palette.background.keyEvent};
	list-style: none;
	display: block;
	width: 162px;
	scroll-snap-align: start;

	${from.desktop} {
		background-color: ${palette.background.keyEventFromDesktop};
		width: 200px;
		padding-right: ${space[5]}px;
	}

	&::before {
		content: '';
		display: block;
		position: absolute;
		border-top: 1px dotted ${palette.border.keyEvent};
		left: 0;
		right: 0;
		top: 18px;
	}

	&:last-child::before {
		border-top: 0;
	}
`;

const textStyles = (palette: Palette) => css`
	${textSans.small({ fontWeight: 'regular', lineHeight: 'regular' })};
	color: ${palette.text.keyEvent};
`;

const timeStyles = (palette: Palette) => css`
	${textSans.xsmall({ fontWeight: 'bold', lineHeight: 'tight' })};
	color: ${palette.text.keyEventTime};
	display: block;
`;

export const KeyEventCard = ({
	id,
	blockFirstPublished,
	isSummary,
	title,
	filterKeyEvents,
	format,
}: Props) => {
	const palette = decidePalette(format);
	const url = `?filterKeyEvents=${filterKeyEvents}&page=with:block-${id}#block-${id}`;
	const date = new Date(blockFirstPublished);
	return (
		<li css={listItemStyles(palette)}>
			<Link
				priority="secondary"
				css={[linkStyles(palette), isSummary && summaryStyles(palette)]}
				href={url}
				data-link-name="key event card"
			>
				<time
					dateTime={date.toISOString()}
					data-relativeformat="med"
					title={`${date.toLocaleDateString('en-GB', {
						hour: '2-digit',
						minute: '2-digit',
						weekday: 'long',
						year: 'numeric',
						month: 'long',
						day: 'numeric',
						timeZoneName: 'long',
					})}`}
					css={timeStyles(palette)}
				>
					{timeAgo(date.getTime())}
				</time>
				<span css={textStyles(palette)}>{title}</span>
			</Link>
		</li>
	);
};
