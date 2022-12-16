// ----- Imports ----- //

import { css } from '@emotion/react';
import {
	breakpoints,
	from,
	neutral,
	opinion,
	palette,
} from '@guardian/source-foundations';
import { StraightLines } from '@guardian/source-react-components-development-kitchen';
import ArticleBody from 'components/ArticleBody';
import Byline from 'components/Byline';
import Cutout from 'components/Cutout';
import Footer from 'components/Footer';
import Headline from 'components/Headline';
import Logo from 'components/Logo';
import MainMedia from 'components/MainMedia';
import Metadata from 'components/Metadata';
import RelatedContent from 'components/RelatedContent';
import Standfirst from 'components/Standfirst';
import Tags from 'components/Tags';
import { getFormat } from 'item';
import type { Letter as LetterItem } from 'item';
import type { FC } from 'react';
import {
	articleWidthStyles,
	darkModeCss,
	lineStyles,
	onwardStyles,
} from 'styles';

// ----- Styles ----- //

const Styles = css`
	background: ${neutral[97]};
`;

const DarkStyles = darkModeCss`
	background: ${palette.neutral[10]}
`;

const BorderStyles = css`
	background: ${opinion[800]};
	${darkModeCss`background: ${palette.neutral[10]};`}

	${from.wide} {
		width: ${breakpoints.wide}px;
		margin: 0 auto;
	}
`;

const linePosition = css`
	margin-top: 83px;
`;

interface Props {
	item: LetterItem;
}

const LetterLayout: FC<Props> = ({ item }) => (
	<main css={[Styles, DarkStyles]}>
		<article css={BorderStyles}>
			<header>
				<Headline item={item} />

				<Cutout
					contributors={item.contributors}
					className={articleWidthStyles}
					format={item}
				/>
				<StraightLines
					cssOverrides={[linePosition, lineStyles]}
					count={8}
				/>
				<div css={articleWidthStyles}>
					<Standfirst item={item} />
					<Byline {...item} />
					<Metadata item={item} />
				</div>
				<MainMedia
					format={getFormat(item)}
					mainMedia={item.mainMedia}
				/>
				<section css={articleWidthStyles}>
					<Logo item={item} />
				</section>
			</header>
			<ArticleBody
				className={[articleWidthStyles]}
				format={item}
				body={item.body}
				shouldHideAdverts={item.shouldHideAdverts}
			/>
			<section css={articleWidthStyles}>
				<Tags item={item} />
			</section>
		</article>
		<section css={onwardStyles}>
			<RelatedContent item={item} />
		</section>
		<Footer isCcpa={false} format={item} />
	</main>
);

// ----- Exports ----- //

export default LetterLayout;
