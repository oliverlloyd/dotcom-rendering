import { renderToString } from 'react-dom/server';
import { ShowMoreContainer } from '../components/ShowMoreContainer';

interface DCRShowMoreContainer {
	cards: DCRFrontCard[];
	startIndex: number;
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
	startIndex,
	containerPalette,
}: DCRShowMoreContainer): string => {
	console.log(cards, startIndex, containerPalette);
	const html = renderToString(
		<ShowMoreContainer
			trails={cards}
			startIndex={startIndex}
			containerPalette={containerPalette}
		/>,
	);

	return html;
};
