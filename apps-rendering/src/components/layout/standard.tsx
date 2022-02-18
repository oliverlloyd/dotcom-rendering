// ----- Imports ----- //

import type { SerializedStyles } from '@emotion/react';
import { css } from '@emotion/react';
import { ArticleDisplay } from '@guardian/libs';
import {
	background,
	from,
	remSpace,
} from '@guardian/source-foundations';
import { Lines } from '@guardian/source-react-components-development-kitchen';
import { map, none, withDefault } from '@guardian/types';
import FootballScores from 'components/footballScores';
import Footer from 'components/footer';
import GridItem from 'components/gridItem';
import Headline from 'components/headline';
import ImmersiveCaption from 'components/immersiveCaption';
import Metadata from 'components/metadata';
import Series from 'components/series';
import Body from 'components/shared/articleBody';
import Epic from 'components/shared/epic';
import OptionalLogo from 'components/shared/logo';
import RelatedContent from 'components/shared/relatedContent';
import Standfirst from 'components/standfirst';
import Tags from 'components/tags';
import HeaderMedia from 'headerMedia';
import type {
	Item,
	MatchReport as MatchReportItem,
	Review as ReviewItem,
	Standard as StandardItem,
} from 'item';
import { maybeRender, pipe } from 'lib';
import type { FC, ReactNode } from 'react';
import {
	articleWidthStyles,
	darkModeCss,
	onwardStyles,
} from 'styles';
import { getThemeStyles, themeToPillarString } from 'themeStyles';

// ----- Styles ----- //

const styles = darkModeCss`
    background: ${background.inverse};
`;

const gridColumns = css`
	display: grid;
	grid-template-columns: 10px 1fr 10px;

	${from.mobileLandscape} {
		grid-template-columns: 20px 1fr 20px;
	}

	${from.tablet} {
		column-gap: 20px;
		grid-template-columns: 1fr 700px 1fr;
	}

	${from.desktop} {
		grid-template-columns: 1fr 620px 300px 1fr;
	}

	${from.leftCol} {
		grid-template-columns: 1fr 140px 620px 300px 1fr;
	}

	${from.wide} {
		grid-template-columns: 1fr 220px 620px 60px 300px 1fr;
	}
`;

const headerStyles = css`
	${gridColumns}
	grid-template-areas:
		'main-media main-media main-media'
		'. series .'
		'. headline-standfirst .'
		'multilines multilines multilines'
		'. metadata .';

	${from.phablet} {
		grid-template-areas:
			'. main-media .'
			'. series .'
			'. headline-standfirst .'
			'. multilines .'
			'. metadata .';
	}

	${from.tablet} {
		grid-template-areas:
			'. series .'
			'. headline-standfirst .'
			'. main-media .'
			'. multilines .'
			'. metadata .';
	}

	${from.leftCol} {
		grid-template-areas:
			'. series headline-standfirst . .'
			'. multilines main-media . .'
			'. metadata main-media . .'
			'. . main-media . .';
	}
`;

const mainStyles = css`
	${gridColumns}
	grid-template-areas:
		'. body .';

	${from.leftCol} {
		grid-template-areas:
			'. . body . .';
	}
`;

const itemStyles = (item: Item): SerializedStyles => {
	const { kicker, inverted } = getThemeStyles(item.theme);

	switch (item.display) {
		case ArticleDisplay.Immersive:
			return css`
				> p:first-of-type:first-letter,
				> hr + p:first-letter {
					color: ${kicker};
					display: inline-block;
					vertical-align: text-top;
					line-height: 5.625rem;
					font-size: 6.8125rem;
					display: inline-block;
					font-weight: 900;
					float: left;
					margin-right: ${remSpace[3]};

					${darkModeCss`
                        color: ${inverted};
                    `}
				}
			`;

		default:
			return css``;
	}
};

interface Props {
	item: StandardItem | ReviewItem | MatchReportItem;
	children: ReactNode[];
}

const Standard: FC<Props> = ({ item, children }) => {
	// client side code won't render an Epic if there's an element with this id
	const epicContainer = item.shouldHideReaderRevenue ? null : (
		<div css={articleWidthStyles}>
			<Epic />
		</div>
	);

	const commentContainer = item.commentable
		? pipe(
				item.internalShortId,
				map((id) => (
					<section
						css={onwardStyles}
						id="comments"
						data-closed={false}
						data-pillar={themeToPillarString(item.theme)}
						data-short-id={id}
					></section>
				)),
				withDefault(<></>),
		  )
		: null;

	const matchScores = 'football' in item ? item.football : none;

	return (
		<article css={styles}>
			<header css={headerStyles}>
				<GridItem area="series">
					<Series item={item} />
				</GridItem>
				<GridItem area="headline-standfirst">
					<Headline item={item} />
					<Standfirst item={item} />
					<ImmersiveCaption item={item} />
				</GridItem>
				<GridItem area="main-media">
					<HeaderMedia item={item} />
				</GridItem>
				<GridItem area="multilines">
					<Lines count={4} />
				</GridItem>
				<GridItem area="metadata">
					<Metadata item={item} />
					{OptionalLogo(item)}
				</GridItem>
			</header>

			<main className="js-article" css={mainStyles}>
				{maybeRender(matchScores, (scores) => (
					<div id="js-football-scores">
						<FootballScores
							league={scores.league}
							stadium={scores.stadium}
							homeTeam={scores.homeTeam}
							awayTeam={scores.awayTeam}
							status={scores.status}
						/>
					</div>
				))}
				<GridItem area="body">
					<Body
						className={[itemStyles(item)]}
						format={item}
					>
						{children}
					</Body>
					{epicContainer}
					<section className="js-tags" css={articleWidthStyles}>
						<Tags tags={item.tags} format={item} />
					</section>
				</GridItem>
			</main>

			<section css={onwardStyles}>
				<RelatedContent content={item.relatedContent} />
			</section>
			{commentContainer}
			<Footer isCcpa={false} />
		</article>
	);
};

// ----- Exports ----- //

export default Standard;
