// ----- Imports ----- //

import type { SerializedStyles } from '@emotion/react';
import { css } from '@emotion/react';
import { background } from '@guardian/common-rendering/src/editorialPalette';
import { maybeRender } from '@guardian/common-rendering/src/lib';
import type { ArticleFormat } from '@guardian/libs';
import { remSpace, textSans, until } from '@guardian/source-foundations';
import { SvgClock } from '@guardian/source-react-components';
import { OptionKind } from '@guardian/types/dist/option';
import ArticleBody from 'components/ArticleBody';
import Footer from 'components/Footer';
import Headline from 'components/Headline';
import MainMedia from 'components/MainMedia';
import RelatedContent from 'components/RelatedContent';
import Standfirst from 'components/Standfirst';
import { grid } from 'grid/grid';
import { getFormat } from 'item';
import type { NewsletterSignup } from 'item';
import type { FC } from 'react';
import { darkModeCss, onwardStyles } from 'styles';
import InPageNewsletterSignup from '../InPageNewsletterSignup';

// ----- Styles ----- //
const backgroundStyles = (format: ArticleFormat): SerializedStyles => css`
	background-color: ${background.articleContent(format)};

	${darkModeCss`
        background-color: ${background.articleContentDark(format)}
    `}
`;

const gridContainerStyles = css`
	${grid.container}
`;

const imageRow = css`
	${until.tablet} {
		${grid.column.all};
	}
	${grid.column.centre};
`;

const contentRow = css`
	${grid.column.centre};
`;

const frequencyBlockStyles = css`
	display: flex;
	margin-bottom: ${remSpace[2]};

	span {
		margin-left: ${remSpace[1]};
		${textSans.xsmall()}

		b {
			${textSans.xsmall({ fontWeight: 'bold' })}
		}
	}
`;

// ----- Component ----- //

interface Props {
	item: NewsletterSignup;
}

const NewsletterSignUpLayout: FC<Props> = ({ item }) => {
	const format = getFormat(item);

	return (
		<main css={backgroundStyles(format)}>
			<article className="js-article" css={gridContainerStyles}>
				<header css={imageRow}>
					<MainMedia
						format={getFormat(item)}
						mainMedia={item.mainMedia}
					/>
				</header>
				<section css={contentRow}>
					<Headline item={item} />
					<Standfirst item={item} />

					{maybeRender(item.promotedNewsletter, (newsletter) => (
						<div css={frequencyBlockStyles}>
							<SvgClock size="xsmall" />

							<span>
								You&apos;ll receive this newsletter
								<b> {newsletter.frequency}</b>
							</span>
						</div>
					))}

					{maybeRender(item.promotedNewsletter, (newsletter) => (
						<InPageNewsletterSignup
							newsletter={newsletter}
							format={getFormat(item)}
							fallbackContent={
								<ArticleBody
									format={item}
									body={item.body}
									shouldHideAdverts={item.shouldHideAdverts}
								/>
							}
						/>
					))}
					{item.promotedNewsletter.kind === OptionKind.None && (
						<ArticleBody
							format={item}
							body={item.body}
							shouldHideAdverts={item.shouldHideAdverts}
						/>
					)}
				</section>
			</article>

			<section css={onwardStyles}>
				<RelatedContent item={item} />
			</section>

			<Footer isCcpa={false} format={item} />
		</main>
	);
};

// ----- Exports ----- //

export default NewsletterSignUpLayout;
