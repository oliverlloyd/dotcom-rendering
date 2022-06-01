// ----- Imports ----- //

import type { SerializedStyles } from '@emotion/react';
import { css } from '@emotion/react';
import {
	background,
	border,
	text,
} from '@guardian/common-rendering/src/editorialPalette';
import type { ArticleFormat } from '@guardian/libs';
import { ArticleDesign, ArticleDisplay, ArticleSpecial } from '@guardian/libs';
import {
	headline,
	neutral,
	remSpace,
	textSans,
} from '@guardian/source-foundations';
import { map, withDefault } from '@guardian/types';
import { standfirstBackgroundColour } from 'editorialStyles';
import type { Item } from 'item';
import { getFormat } from 'item';
import { pipe } from 'lib';
import type { FC, ReactElement, ReactNode } from 'react';
import { renderStandfirstText } from 'renderer';
import { darkModeCss } from 'styles';

// ----- Component ----- //

interface Props {
	item: Item;
}

const darkStyles = (format: ArticleFormat): SerializedStyles => darkModeCss`
    background: ${background.standfirstDark(format)};
    color: ${text.standfirstDark(format)};

    a {
        color: ${text.standfirstLinkDark(format)};
		border-bottom: 0.0625rem solid ${border.standfirstLinkDark(format)};
    }
`;

const isNotBlog = (format: ArticleFormat): boolean =>
	format.design !== ArticleDesign.LiveBlog &&
	format.design !== ArticleDesign.DeadBlog;

const styles = (format: ArticleFormat): SerializedStyles => css`
	margin-bottom: ${remSpace[3]};
	color: ${text.standfirst(format)};

	${standfirstBackgroundColour(format)}

	p,
	ul {
		padding: ${remSpace[3]} 0 0;
		margin: 0;
	}

	address {
		font-style: normal;
	}

	a {
		text-decoration: none;
		border-bottom: 0.0625rem solid ${border.standfirstLink(format)};
	}

	${isNotBlog(format) && darkStyles(format)}
`;

const normalHeadline = css`
	${headline.xxxsmall({ fontWeight: 'bold' })}
	padding: 0;
`;

const thinHeadline = css`
	${headline.xxsmall({ fontWeight: 'light' })}
`;

const immersive: SerializedStyles = css`
	${headline.xsmall({ fontWeight: 'light' })}
	margin-top: ${remSpace[3]};
`;

const immersiveLabs: SerializedStyles = css`
	${textSans.large()}
	margin-top: ${remSpace[3]};
`;

const liveblogStyles: SerializedStyles = css`
	${headline.xxxsmall()};
	margin-bottom: 0;
	padding-bottom: ${remSpace[3]};

	p {
		margin: 0;
		padding: 0.75rem 0;

		${darkModeCss`color: ${neutral[93]};`}
	}

	ul {
		margin-bottom: 0;
	}
`;

const deadblogStyles = (format: ArticleFormat): SerializedStyles => {
	const colour = text.standfirstLink(format);

	return css`
		${headline.xxxsmall({ fontWeight: 'bold' })};

		a {
			text-decoration: none;
		}

		a:link {
			color: ${colour};
			border-bottom: 1px solid ${neutral[86]};
		}

		a:hover {
			color: ${colour};
			border-bottom: 1px solid ${colour};
		}

		${darkModeCss`
			a:link, a:hover {
				color: ${text.standfirstLinkDark(format)};
				border-bottom-color: ${border.standfirstLinkDark(format)};
			}
		`}
	`;
};

const media = (format: ArticleFormat): SerializedStyles => css`
	color: ${text.standfirst(format)};
	p,
	ul,
	li {
		${headline.xxxsmall({ fontWeight: 'bold' })}
	}
`;

const advertisementFeature = css`
	${textSans.medium()}
`;

const getStyles = (item: Item): SerializedStyles => {
	const format = getFormat(item);
	if (item.display === ArticleDisplay.Immersive) {
		return item.theme === ArticleSpecial.Labs
			? css(styles(format), immersiveLabs)
			: css(styles(format), immersive);
	}

	if (item.theme === ArticleSpecial.Labs) {
		return css(styles(format), advertisementFeature);
	}

	switch (item.design) {
		case ArticleDesign.LiveBlog:
			return css(styles(format), liveblogStyles);
		case ArticleDesign.DeadBlog:
			return css(styles(format), liveblogStyles, deadblogStyles(format));
		case ArticleDesign.Review:
		case ArticleDesign.Feature:
		case ArticleDesign.Editorial:
		case ArticleDesign.Letter:
		case ArticleDesign.Comment:
			return css(styles(format), thinHeadline);
		case ArticleDesign.Gallery:
		case ArticleDesign.Audio:
		case ArticleDesign.Video:
			return media(format);

		default:
			return css(styles(format), normalHeadline);
	}
};
function content(standfirst: DocumentFragment, item: Item): ReactNode {
	const format = getFormat(item);
	const rendered = renderStandfirstText(standfirst, format);

	// Immersives append the byline to the standfirst.
	// Sometimes CAPI includes this within the standfirst HTML,
	// sometimes we have to add it ourselves
	const bylineInStandfirst =
		item.byline !== '' && standfirst.textContent?.includes(item.byline);

	if (item.display === ArticleDisplay.Immersive && !bylineInStandfirst) {
		return pipe(
			item.bylineHtml,
			map((byline) => (
				<>
					{rendered}
					<address>
						<p>By {renderStandfirstText(byline, format)}</p>
					</address>
				</>
			)),
			withDefault<ReactNode>(rendered),
		);
	}

	return rendered;
}

const Standfirst: FC<Props> = ({ item }) =>
	pipe(
		item.standfirst,
		map((standfirst) => (
			<div css={getStyles(item)}>{content(standfirst, item)}</div>
		)),
		withDefault<ReactElement | null>(null),
	);

// ----- Exports ----- //

export default Standfirst;
