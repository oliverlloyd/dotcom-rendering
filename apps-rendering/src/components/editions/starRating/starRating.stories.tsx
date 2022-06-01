// ----- Imports ----- //

import { some } from '@guardian/types';
import { radios, withKnobs } from '@storybook/addon-knobs';
import { article, review } from 'fixtures/item';
import type { ReactElement } from 'react';
import StarRating from '.';

// ----- Setup ----- //

const starRating = { 0: 0, 1: 1, 2: 2, 3: 3, 4: 4, 5: 5 };

// ----- Stories ----- //

const Default = (): ReactElement => (
	<StarRating
		item={{
			...review,
			starRating: some(radios('Rating', starRating, 3)),
		}}
	/>
);

const NotReview = (): ReactElement => <StarRating item={article} />;

// ----- Exports ----- //

export default {
	component: StarRating,
	title: 'AR/Editions/Star Rating',
	decorators: [withKnobs],
};

export { Default, NotReview };
