// ----- Imports ----- //

import type { SerializedStyles } from '@emotion/react';
import { css } from '@emotion/react';
import { ArticleDesign, ArticlePillar } from '@guardian/libs';
import {
	background,
	breakpoints,
	from,
	neutral,
} from '@guardian/source-foundations';
import {
	DottedLines,
	StraightLines,
} from '@guardian/source-react-components-development-kitchen';
import { map, none, withDefault } from '@guardian/types';
import Body from 'components/ArticleBody';
import Epic from 'components/Epic';
import FootballScores from 'components/FootballScores';
import Footer from 'components/Footer';
import Headline from 'components/Headline';
import ImmersiveCaption from 'components/ImmersiveCaption';
import Logo from 'components/Logo';
import Metadata from 'components/Metadata';
import RelatedContent from 'components/RelatedContent';
import Series from 'components/Series';
import Standfirst from 'components/Standfirst';
import Tags from 'components/Tags';
import { getFormat } from 'item';
import type {
	Item,
	MatchReport as MatchReportItem,
	Review as ReviewItem,
	Standard as StandardItem,
} from 'item';
import { maybeRender, pipe } from 'lib';
import MainMedia from 'mainMedia';
import type { FC, ReactNode } from 'react';
import {
	articleWidthStyles,
	darkModeCss,
	lineStyles,
	onwardStyles,
} from 'styles';
import { themeToPillarString } from 'themeStyles';

// ----- Styles ----- //

const Styles = css`
	background: ${neutral[97]};
`;

const DarkStyles = darkModeCss`
    background: ${background.inverse};
`;

const BorderStyles = css`
	background: ${neutral[100]};
	${darkModeCss`background: ${background.inverse};`}

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
	item: StandardItem | ReviewItem | MatchReportItem;
	children: ReactNode[];
}

const StandardLayout: FC<Props> = ({ item, children }) => {
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
		<main css={[Styles, DarkStyles]}>
			<article className="js-article" css={BorderStyles}>
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
				<header>
					<MainMedia
						format={getFormat(item)}
						mainMedia={item.mainMedia}
					/>
					<Series item={item} />
					<Headline item={item} />
					<div css={articleWidthStyles}>
						<Standfirst item={item} />
						<ImmersiveCaption item={item} />
					</div>
					{decideLines(item, lineStyles)}
					<section css={articleWidthStyles}>
						<Metadata item={item} />
						<Logo item={item} />
					</section>
				</header>
				<Body className={[articleWidthStyles]} format={item}>
					{children}
				</Body>
				{epicContainer}
				<section className="js-tags" css={articleWidthStyles}>
					<Tags tags={item.tags} format={item} />
				</section>
			</article>
			<section css={onwardStyles}>
				<RelatedContent content={item.relatedContent} />
			</section>
			{commentContainer}
			<Footer isCcpa={false} format={item} />
		</main>
	);
};

// ----- Exports ----- //

export default StandardLayout;
