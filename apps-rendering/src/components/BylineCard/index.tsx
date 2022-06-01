import type { SerializedStyles } from '@emotion/react';
import { css } from '@emotion/react';
import type { RelatedItem } from '@guardian/apps-rendering-api-models/relatedItem';
import type { ArticleFormat } from '@guardian/libs';
import { ArticleDesign, ArticleDisplay } from '@guardian/libs';
import {
	from,
	headline,
	neutral,
	opinion,
	remSpace,
	text,
	textSans,
} from '@guardian/source-foundations';
import { SvgQuote } from '@guardian/source-react-components';
import type { Option } from '@guardian/types';
import { fromNullable, map, withDefault } from '@guardian/types';
import { makeRelativeDate } from 'date';
import { pipe } from 'lib';
import type { FC, ReactElement } from 'react';
import { darkModeCss } from 'styles';
import { themeFromString } from 'themeStyles';

interface Props {
	relatedItem: RelatedItem;
}

const listStyles = (format: ArticleFormat): SerializedStyles => {
	return css`
		margin-right: ${remSpace[2]};
		flex: 0 0 42vw;
		justify-content: space-between;
		border-top: 1px solid ${neutral[86]};
		max-width: 10rem;

		&.fade {
			opacity: 0.7;
		}

		${darkModeCss`
			border-top: 1px solid ${neutral[20]};
            background: ${neutral[0]};
        `}

		${from.tablet} {
			margin-right: ${remSpace[5]};
		}

		${from.desktop} {
			max-width: 13.75rem;
		}

		&:last-of-type {
			margin-right: 0;
		}
	`;
};

const bylineImage = css`
	border-radius: 50%;
	right: 0.625rem;
	top: 0.375rem;
	overflow: hidden;
	height: 4.75rem;
	width: 4.75rem;
	contain: paint;
	background-color: ${opinion[400]};
	float: right;
	position: relative;

	img {
		margin: auto;
		position: absolute;
		top: 0;
		bottom: 0;
		right: 0;
		height: 4.75rem;
		left: -0.625rem;

		${from.desktop} {
			height: 8.25rem;
		}
	}

	${from.desktop} {
		width: 8.25rem;
		height: 8.25rem;
	}
`;

const anchorStyles = css`
	color: ${neutral[7]};
	text-decoration: none;
	display: flex;
	flex-direction: column;
	height: 100%;
	${darkModeCss`
        color: ${neutral[86]};
    `}
`;

const headingWrapperStyles = css`
	padding: 0.125rem ${remSpace[2]} ${remSpace[4]};
	flex-grow: 1;
`;

const headingStyles: SerializedStyles = css`
	${headline.xxxsmall()}
	margin: 0;

	${from.desktop} {
		${headline.xxsmall()}
	}
`;

const cardStyles: SerializedStyles = css`
	${headline.xxsmall()}
`;

const commentIconStyle = (): SerializedStyles => {
	return css`
		width: 1.5rem;
		height: 1.5rem;
		display: inline-block;
		fill: ${opinion[400]};
		vertical-align: text-bottom;
		margin-bottom: -3px;
		margin-left: -3px;

		${from.desktop} {
			width: 1.688rem;
			height: 1.688rem;
		}
	`;
};

const bylineStyles: SerializedStyles = css`
	color: ${opinion[400]};
	font-style: italic;
`;

const byline = (relatedItem: RelatedItem): ReactElement | null => {
	return pipe(
		fromNullable(relatedItem.byline),
		map((byline) => {
			return <div css={bylineStyles}>{byline}</div>;
		}),
		withDefault<ReactElement | null>(null),
	);
};

const cardImage = (relatedItem: RelatedItem): ReactElement | null => {
	if (!relatedItem.bylineImage) {
		return null;
	}

	return (
		<div css={bylineImage}>
			<img
				alt={relatedItem.byline ?? 'Byline image'}
				src={relatedItem.bylineImage}
			/>
		</div>
	);
};

const dateStyles = css`
	${textSans.small()};
	color: ${text.supporting};
	text-align: right;
	display: inline-block;
	vertical-align: top;
	float: right;
	margin-right: ${remSpace[3]};
	align-self: flex-end;
	font-weight: 700;
`;

const relativeFirstPublished = (date: Option<Date>): ReactElement | null =>
	pipe(
		date,
		map((date) => <time css={dateStyles}>{makeRelativeDate(date)}</time>),
		withDefault<ReactElement | null>(null),
	);

const footerStyles = css`
	display: flex;
	justify-content: space-between;
	align-items: center;
	clear: both;
	min-height: 2rem;
`;

const BylineCard: FC<Props> = ({ relatedItem }) => {
	const { title, link, pillar, webPublicationDate } = relatedItem;
	const format = {
		theme: themeFromString(pillar.id),
		design: ArticleDesign.Standard,
		display: ArticleDisplay.Standard,
	};

	const img = cardImage(relatedItem);
	const date = webPublicationDate
		? relativeFirstPublished(
				fromNullable(new Date(webPublicationDate.iso8601)),
		  )
		: null;
	return (
		<li
			className="js-card"
			data-article-id={link}
			css={[listStyles(format), cardStyles]}
		>
			<a css={anchorStyles} href={`https://theguardian.com/${link}`}>
				<section css={headingWrapperStyles}>
					<h3 css={headingStyles}>
						<span css={commentIconStyle}>
							<SvgQuote />
						</span>
						{title}
						{byline(relatedItem)}
					</h3>
				</section>
				<section>
					{img}
					<footer css={footerStyles}>
						<div css={dateStyles}></div>
						{date}
					</footer>
				</section>
			</a>
		</li>
	);
};

export default BylineCard;
