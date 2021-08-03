// Mon 2 Aug 2021 06.00 BST
// Last modified on Mon 2 Aug 2021 10.54 BST
// 06.00 BST

import { NonBootJs } from 'src/web/components/elements/InteractiveBlockComponent.stories';

type Part = { type: string; value: string };

// See:
// https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Intl/DateTimeFormat/formatToParts.
const partsToObject = (parts: Part[]): Map<string, string> => {
	const kvs = parts.map((pair) => ({ [pair.type]: pair.value }));
	const obj = Object.assign({}, ...kvs);
	return new Map(Object.entries(obj));
};

export const formatDateTime = (dt: string, edition: Edition): string => {
	// E d MMM yyyy HH.mm
	return dt;
};
