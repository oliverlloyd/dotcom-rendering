import { css } from 'npm:@emotion/react';
import { from, until } from 'npm:@guardian/source-foundations';
import type { DCRSupportingContent } from '../../types/front.ts';
import { CardHeadline } from './CardHeadline.ts';

type Alignment = 'vertical' | 'horizontal';

type Props = {
	supportingContent: DCRSupportingContent[];
	alignment: Alignment;
};

const wrapperStyles = css`
	position: relative;
	display: flex;
	margin-left: 5px;
	margin-right: 5px;
	margin-bottom: 5px;
`;

const directionStyles = (alignment: Alignment) => {
	switch (alignment) {
		case 'horizontal':
			return css`
				flex-direction: column;
				${from.phablet} {
					flex-direction: row;
				}
			`;
		case 'vertical':
			return css`
				flex-direction: column;
			`;
	}
};

const liStyles = css`
	display: flex;
	flex-direction: column;
	flex: 1;
	padding-top: 2px;
	position: relative;
	margin-top: 8px;
	${from.phablet} {
		margin-bottom: 4px;
	}
`;

const leftMargin = css`
	${from.desktop} {
		margin-left: 10px;
	}
`;

const bottomMargin = css`
	${until.phablet} {
		margin-bottom: 8px;
	}
`;

export const SupportingContent = ({ supportingContent, alignment }: Props) => {
	return (
		<ul css={[wrapperStyles, directionStyles(alignment)]}>
			{supportingContent.map((subLink: DCRSupportingContent, index) => {
				// The model has this property as optional but it is very likely
				// to exist
				if (!subLink.headline) return null;
				const shouldPadLeft = index > 0 && alignment === 'horizontal';
				return (
					<li
						key={subLink.url}
						css={[
							liStyles,
							shouldPadLeft && leftMargin,
							index === supportingContent.length - 1 &&
								bottomMargin,
						]}
					>
						<CardHeadline
							headlineText={subLink.headline}
							kickerText={subLink.kickerText}
							format={subLink.format}
							size="tiny"
							showSlash={false}
							showLine={true}
							linkTo={subLink.url}
						/>
					</li>
				);
			})}
		</ul>
	);
};
