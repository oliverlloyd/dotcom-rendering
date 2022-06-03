import { renderToString } from 'react-dom/server';
import { ExtraCardsContainer } from '../components/ExtraCardsContainer';

interface DCRShowMoreContainer {
	cards: DCRFrontCard[];
	containerPalette?: DCRContainerPalette;
}
/**
 * showMoreCardsToHtml is used by the /ShowMore endpoint to render extra fronts cards
 * It takes an array of json key-event blocks and returns the resulting html string
 *
 * @returns string (the html)
 */

export const showMoreCardsToHtml = ({
	cards,
	containerPalette,
}: DCRShowMoreContainer): string => {
	const html = renderToString(
		<ExtraCardsContainer
			trails={cards}
			containerPalette={containerPalette}
		/>,
	);

	return html;
};
