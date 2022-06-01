// ----- Imports ----- //

import { css } from '@emotion/react';
import { background, breakpoints, from } from '@guardian/source-foundations';
import Footer from 'components/Footer';
import Headline from 'components/Headline';
import Body from 'components/media/articleBody';
import Series from 'components/media/articleSeries';
import Byline from 'components/media/byline';
import Tags from 'components/media/tags';
import RelatedContent from 'components/RelatedContent';
import Standfirst from 'components/Standfirst';
import { getFormat } from 'item';
import type { Item } from 'item';
import MainMedia from 'mainMedia';
import type { FC, ReactNode } from 'react';
import { articleWidthStyles, onwardStyles } from 'styles';

// ----- Styles ----- //

const Styles = css`
	background: ${background.inverse};
	height: 100vh;
`;

const BorderStyles = css`
	${from.wide} {
		width: ${breakpoints.wide}px;
		margin: 0 auto;
	}
`;

// ----- Component ----- //

interface Props {
	item: Item;
	children: ReactNode[];
}

const MediaLayout: FC<Props> = ({ item, children }) => (
	<main css={[Styles]}>
		<article css={BorderStyles}>
			<header>
				<MainMedia
					format={getFormat(item)}
					mainMedia={item.mainMedia}
				/>
				<div css={articleWidthStyles}>
					<Series series={item.series} theme={item.theme} />
				</div>
				<Headline item={item} />
				<div css={articleWidthStyles}>
					<Standfirst item={item} />
				</div>
				<section>
					<Byline
						publicationDate={item.publishDate}
						className={articleWidthStyles}
						item={item}
					/>
				</section>
			</header>
			<Body
				theme={item.theme}
				className={[articleWidthStyles]}
				format={item}
			>
				{children}
			</Body>
			<section css={articleWidthStyles}>
				<Tags tags={item.tags} />
			</section>
		</article>
		<section css={onwardStyles}>
			<RelatedContent content={item.relatedContent} />
		</section>
		<Footer isCcpa={false} format={item} />
	</main>
);

// ----- Exports ----- //

export default MediaLayout;
