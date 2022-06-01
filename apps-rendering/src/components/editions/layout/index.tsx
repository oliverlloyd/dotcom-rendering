// ----- Imports ----- //

import type { SerializedStyles } from '@emotion/react';
import { css } from '@emotion/react';
import type { ArticleFormat } from '@guardian/libs';
import { ArticleDesign, ArticleDisplay } from '@guardian/libs';
import {
	background,
	border,
	from,
	neutral,
	remSpace,
} from '@guardian/source-foundations';
import { partition } from '@guardian/types';
import type { Item } from 'item';
import { isPicture } from 'item';
import type { FC } from 'react';
import { renderEditionsAll } from 'renderer';
import Header from '../header';
import {
	articleMarginStyles,
	articleWidthStyles,
	headerBackgroundColour,
	sidePadding,
	tabletContentWidth,
	wideContentWidth,
} from '../styles';

const wide = wideContentWidth + 12;
const tablet = tabletContentWidth + 12;

// ----- Component ----- //

interface Props {
	item: Item;
}

const mainStyles = css`
	height: 100%;
`;

const articleWrapperStyles = (item: ArticleFormat): SerializedStyles => css`
	min-height: 100%;
	background-color: ${item.design === ArticleDesign.Gallery ||
	item.design === ArticleDesign.Audio ||
	item.design === ArticleDesign.Video
		? neutral[7]
		: 'inherit'};
`;

const articleStyles = css`
	${articleMarginStyles}
`;

const headerStyles = css`
	${articleWidthStyles}
	border-bottom: 1px solid ${border.secondary};

	${from.tablet} {
		padding-right: ${remSpace[3]};
		border-right: 1px solid ${border.secondary};
	}
`;

const bodyStyles = css`
	padding-top: ${remSpace[3]};
	padding-bottom: ${remSpace[3]};
	iframe {
		width: 100%;
		border: none;
	}

	figcaption {
		background: ${background.primary};
		padding-bottom: ${remSpace[3]};
	}

	${from.tablet} {
		padding-top: 0;
		padding-bottom: 0;

		p {
			margin: 0;
			padding-top: ${remSpace[3]};
			padding-bottom: ${remSpace[3]};
		}
	}

	${sidePadding}
`;

const bodyWrapperStyles = css`
	${articleWidthStyles}

	${from.tablet} {
		padding-right: ${remSpace[3]};
		border-right: 1px solid ${border.secondary};
	}
`;

const extendedBodyStyles = css`
	height: 100vh;
	background-color: ${neutral[7]};
`;

export const galleryWrapperStyles = css`
	box-sizing: border-box;
	padding-top: ${remSpace[3]};
	padding-right: 0;
	padding-left: 0;
	border: none;
	${from.tablet} {
		width: ${tablet}px;
		padding-right: ${remSpace[4]};
		border-right: 1px solid ${neutral[100]};
	}

	${from.desktop} {
		width: ${wide}px;
	}
`;

const headerBackgroundStyles = (format: ArticleFormat): SerializedStyles => css`
	background-color: ${headerBackgroundColour(format)};
`;

const getSectionStyles = (item: ArticleFormat): SerializedStyles[] => {
	if (
		item.design === ArticleDesign.Interview ||
		item.design === ArticleDesign.Gallery ||
		item.design === ArticleDesign.Audio ||
		item.design === ArticleDesign.Video ||
		item.display === ArticleDisplay.Immersive
	) {
		return [];
	}
	return [headerStyles, articleStyles];
};

const Layout: FC<Props> = ({ item }) => {
	if (
		item.design === ArticleDesign.Analysis ||
		item.design === ArticleDesign.Standard ||
		item.design === ArticleDesign.Comment ||
		item.design === ArticleDesign.Review ||
		item.design === ArticleDesign.Interview ||
		item.design === ArticleDesign.Feature ||
		item.design === ArticleDesign.Gallery ||
		item.design === ArticleDesign.Audio ||
		item.design === ArticleDesign.Video ||
		item.design === ArticleDesign.Editorial ||
		item.design === ArticleDesign.Letter ||
		item.design === ArticleDesign.Quiz ||
		item.design === ArticleDesign.Recipe ||
		item.design === ArticleDesign.MatchReport ||
		item.design === ArticleDesign.Obituary ||
		item.design === ArticleDesign.Correction
	) {
		return (
			<main css={mainStyles}>
				<article css={articleWrapperStyles(item)}>
					<div css={headerBackgroundStyles(item)}>
						<section css={getSectionStyles(item)}>
							<Header item={item} />
						</section>
					</div>
					<div
						css={[
							bodyWrapperStyles,
							articleStyles,
							isPicture(item.tags) && extendedBodyStyles,
							item.design === ArticleDesign.Gallery ||
							item.design === ArticleDesign.Audio ||
							item.design === ArticleDesign.Video
								? galleryWrapperStyles
								: null,
						]}
					>
						<section className={'body-content'} css={bodyStyles}>
							{renderEditionsAll(item, partition(item.body).oks)}
						</section>
					</div>
				</article>
			</main>
		);
	}

	return <p>Not implemented</p>;
};

// ----- Exports ----- //

export default Layout;
