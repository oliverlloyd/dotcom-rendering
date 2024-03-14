import { ArticleDisplay } from '@guardian/libs';

export const decideDisplay = ({
	display,
}: Partial<FEFormat>): ArticleDisplay => {
	return ArticleDisplay.Immersive;
	switch (display) {
		case 'StandardDisplay':
			return ArticleDisplay.Standard;
		case 'ImmersiveDisplay':
			return ArticleDisplay.Immersive;
		case 'ShowcaseDisplay':
			return ArticleDisplay.Showcase;
		case 'NumberedListDisplay':
			return ArticleDisplay.NumberedList;
		default:
			return ArticleDisplay.Standard;
	}
};
