// import { ShowMoreContainer } from './ShowMoreContainer';
import { enhanceCards } from '../../model/enhanceCollections';
import showMoreTestData from '../server/showMoreTestData.json';
import { showMoreCardsToHtml } from '../server/showMoretoHtml';

const exampleData: ShowMoreRequest = showMoreTestData as ShowMoreRequest;
try {
	const { cards, startIndex, containerPalette } = exampleData;

	const dcrTrails = enhanceCards(cards, containerPalette);

	const html = showMoreCardsToHtml({
		cards: dcrTrails,
		startIndex,
		containerPalette,
	});

	console.log(html);
} catch (e) {
	const message = e instanceof Error ? e.stack : 'Unknown Error';
	console.log(message);
	// res.status(500).send(`<pre>${message}</pre>`);
}

export const Test = () => {
	return <div>Hello</div>;
};
