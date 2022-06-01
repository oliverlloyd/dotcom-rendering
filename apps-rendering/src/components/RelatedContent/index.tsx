import { css } from '@emotion/react';
import { RelatedItemType } from '@guardian/apps-rendering-api-models/relatedItemType';
import {
	from,
	headline,
	neutral,
	remSpace,
	until,
} from '@guardian/source-foundations';
import type { Option } from '@guardian/types';
import { map, none, withDefault } from '@guardian/types';
import BylineCard from 'components/BylineCard';
import Card from 'components/Card';
import type { ResizedRelatedContent } from 'item';
import { pipe } from 'lib';
import type { FC } from 'react';
import { darkModeCss } from 'styles';

interface Props {
	content: Option<ResizedRelatedContent>;
}

const headingStyles = css`
	${headline.xsmall({ fontWeight: 'bold' })}
	margin: 0 0 ${remSpace[4]} 0;

	${darkModeCss`
        color: ${neutral[86]};
    `}
`;

const listStyles = css`
	list-style: none;
	display: flex;
	flex-direction: row;
	margin: 0;
	padding: 0;
	overflow-x: scroll;

	&::-webkit-scrollbar {
		display: none;
	}

	.js-android & {
		li {
			flex: 1 1 50%;
			max-width: initial;
		}
		li:nth-child(n + 3) {
			display: none;
		}
		li {
			margin-right: 0;
			margin-left: ${remSpace[2]};
		}

		li:first-of-type {
			margin-left: 0;
		}

		${from.mobileLandscape} {
			li {
				flex: 1 1 33.33%;
			}
			li:nth-child(3) {
				display: flex;
			}
		}
		${from.tablet} {
			li {
				flex: 0 0 10rem;
			}
			li:nth-child(n + 3) {
				display: flex;
			}
			li:nth-child(n + 2) {
				margin-left: ${remSpace[5]};
			}
		}
		${from.desktop} {
			li {
				flex: 0 0 13.75rem;
			}
		}
	}
`;

const styles = css`
	border-top: 1px solid ${neutral[46]};
	padding-top: ${remSpace[3]};

	${until.wide} {
		padding-left: ${remSpace[4]};
		padding-right: ${remSpace[4]};
	}

	${darkModeCss`
		background: ${neutral[0]};
	`}
`;

const COMMENT = RelatedItemType.COMMENT;

const RelatedContent: FC<Props> = ({ content }) => {
	return pipe(
		content,
		map(({ title, relatedItems, resizedImages }) => {
			if (relatedItems.length === 0) {
				return null;
			}

			return (
				<section css={styles}>
					<h2 css={headingStyles}>{title}</h2>
					<ul css={listStyles}>
						{relatedItems.map((relatedItem, key) => {
							return relatedItem.type === COMMENT &&
								relatedItem.bylineImage ? (
								<BylineCard
									key={key}
									relatedItem={relatedItem}
								/>
							) : (
								<Card
									key={key}
									relatedItem={relatedItem}
									image={resizedImages[key]}
									kickerText={none}
								/>
							);
						})}
					</ul>
				</section>
			);
		}),
		withDefault<JSX.Element | null>(null),
	);
};

export default RelatedContent;
