import type { EditionId } from '../types/edition.ts';
import type { DCRCollectionType, FECollectionType } from '../types/front.ts';
import { decideContainerPalette } from './decideContainerPalette.ts';
import { enhanceCards } from './enhanceCards.ts';
import { enhanceTreats } from './enhanceTreats.ts';
import { groupCards } from './groupCards.ts';

const FORBIDDEN_CONTAINERS = [
	'Palette styles new do not delete',
	'culture-treat',
	'newsletter treat',
];
const isSupported = (collection: FECollectionType): boolean =>
	!FORBIDDEN_CONTAINERS.includes(collection.displayName);

export const enhanceCollections = (
	collections: FECollectionType[],
	editionId: EditionId,
	pageId: string,
): DCRCollectionType[] => {
	return collections.filter(isSupported).map((collection) => {
		const { id, displayName, collectionType } = collection;
		const containerPalette = decideContainerPalette(
			collection.config.metadata?.map((meta) => meta.type),
		);
		return {
			id,
			displayName,
			collectionType,
			containerPalette,
			grouped: groupCards(
				collectionType,
				collection.curated,
				collection.backfill,
				containerPalette,
			),
			curated: enhanceCards(collection.curated, containerPalette),
			backfill: enhanceCards(collection.backfill, containerPalette),
			treats: enhanceTreats(
				collection.treats,
				displayName,
				editionId,
				pageId,
			),
			config: {
				showDateHeader: collection.config.showDateHeader,
			},
		};
	});
};
