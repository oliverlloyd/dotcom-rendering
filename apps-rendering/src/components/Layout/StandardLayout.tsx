// ----- Imports ----- //

import type { SerializedStyles } from '@emotion/react';
import { css } from '@emotion/react';
import { background } from '@guardian/common-rendering/src/editorialPalette';
import type { ArticleFormat } from '@guardian/libs';
import { ArticleDesign, ArticlePillar } from '@guardian/libs';
import { breakpoints, from } from '@guardian/source-foundations';
import {
	DottedLines,
	StraightLines,
} from '@guardian/source-react-components-development-kitchen';
import { map, withDefault } from '@guardian/types';
import { pillarToId, themeToPillar } from 'articleFormat';
import Body from 'components/ArticleBody';
import Epic from 'components/Epic';
import FootballScores from 'components/FootballScores';
import Footer from 'components/Footer';
import Headline from 'components/Headline';
import Logo from 'components/Logo';
import MainMedia from 'components/MainMedia';
import Metadata from 'components/Metadata';
import RelatedContent from 'components/RelatedContent';
import Standfirst from 'components/Standfirst';
import Tags from 'components/Tags';
import type { MatchScores } from 'football';
import { getFormat } from 'item';
import type {
	Correction,
	Explainer,
	Feature,
	Interactive,
	Interview,
	Item,
	MatchReport,
	Obituary,
	PhotoEssay,
	PrintShop,
	Quiz,
	Recipe,
	Review,
	Standard,
} from 'item';
import { maybeRender, pipe } from 'lib';
import { Optional } from 'optional';
import type { FC } from 'react';
import {
	articleWidthStyles,
	darkModeCss,
	lineStyles,
	onwardStyles,
} from 'styles';

// ----- Styles ----- //
const backgroundStyles = (format: ArticleFormat): SerializedStyles => css`
	background-color: ${background.articleContent(format)};

	${darkModeCss`
        background-color: ${background.articleContentDark(format)}
    `}
`;

const BorderStyles = css`
	${from.wide} {
		width: ${breakpoints.wide}px;
		margin: 0 auto;
	}
`;

const decideLines = (
	item: Item,
	cssOverrides?: SerializedStyles | SerializedStyles[],
): JSX.Element => {
	const count = item.design === ArticleDesign.Comment ? 8 : 4;

	if (item.theme === ArticlePillar.Sport) {
		return <DottedLines cssOverrides={cssOverrides} count={count} />;
	}

	return <StraightLines cssOverrides={cssOverrides} count={count} />;
};

interface Props {
	item:
		| Feature
		| Explainer
		| Review
		| Standard
		| Interactive
		| Quiz
		| MatchReport
		| Obituary
		| Correction
		| Interview
		| Recipe
		| PrintShop
		| PhotoEssay;
}

const StandardLayout: FC<Props> = ({ item }) => {
	const format = getFormat(item);
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
						data-pillar={pipe(
							item.theme,
							themeToPillar,
							pillarToId,
						)}
						data-short-id={id}
					></section>
				)),
				withDefault(<></>),
		  )
		: null;

	const matchScores: Optional<MatchScores> =
		'football' in item ? item.football : Optional.none();
	return (
		<main css={backgroundStyles(format)}>
			<article className="js-article" css={BorderStyles}>
				{maybeRender(matchScores.toOption(), (scores) => (
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
				<header>
					<MainMedia
						format={getFormat(item)}
						mainMedia={item.mainMedia}
					/>

					<Headline item={item} />
					<div css={articleWidthStyles}>
						<Standfirst item={item} />
					</div>
					{decideLines(item, lineStyles)}
					<section css={articleWidthStyles}>
						<Metadata item={item} />
						<Logo item={item} />
					</section>
				</header>
				<Body
					className={[articleWidthStyles]}
					format={item}
					body={item.body}
					shouldHideAdverts={item.shouldHideAdverts}
				/>
				{epicContainer}
				<section className="js-tags" css={articleWidthStyles}>
					<Tags item={item} />
				</section>
			</article>
			<section css={onwardStyles}>
				<RelatedContent item={item} />
			</section>
			{commentContainer}
			<Footer isCcpa={false} format={item} />
		</main>
	);
};

// ----- Exports ----- //

export default StandardLayout;
