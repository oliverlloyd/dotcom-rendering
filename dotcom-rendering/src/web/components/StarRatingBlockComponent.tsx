import { css } from 'npm:@emotion/react';
import { brandAltBackground } from 'npm:@guardian/source-foundations';
import { StarRating } from './StarRating/StarRating.ts';

type Props = {
	rating: number;
	size: RatingSizeType;
};

const starsWrapper = css`
	background-color: ${brandAltBackground.primary};
	display: inline-block;
`;

export const StarRatingBlockComponent = ({ rating, size }: Props) => (
	<div css={starsWrapper}>
		<StarRating rating={rating} size={size} />
	</div>
);
