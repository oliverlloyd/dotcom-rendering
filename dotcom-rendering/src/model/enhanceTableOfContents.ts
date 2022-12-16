import { JSDOM } from 'jsdom';
import type { TableOfContentsItem } from 'src/types/frontend';
import { CAPIElement, SubheadingBlockElement } from '../types/content';

const isH2 = (element: CAPIElement): element is SubheadingBlockElement => {
	return (
		element._type ==
		'model.dotcomrendering.pageElements.SubheadingBlockElement'
	);
};

const extractText = (element: SubheadingBlockElement): string => {
	const frag = JSDOM.fragment(element.html);
	if (!frag.firstElementChild) return '';
	return frag.textContent?.trim() ?? '';
};

const extractID = (element: SubheadingBlockElement): string => {
	const frag = JSDOM.fragment(element.html);
	if (!frag.firstElementChild) return '';
	return frag.querySelector('H2')?.getAttribute('id') ?? '';
};

const hasInteractiveContentsElement = (blocks: Block[]): boolean => {
	return blocks.some((block) =>
		block.elements.some(
			(element) =>
				element._type ===
				'model.dotcomrendering.pageElements.InteractiveContentsBlockElement',
		),
	);
};

export const enhanceTableOfContents = (
	format: CAPIFormat,
	blocks: Block[],
): TableOfContentsItem[] | undefined => {
	if (
		// TODO: I don't think we need this any more, but double check please
		//format.design !== 'ExplainerDesign' ||
		hasInteractiveContentsElement(blocks)
	) {
		return undefined;
	}

	const tocItems: TableOfContentsItem[] = [];

	blocks.forEach((block) => {
		block.elements.forEach((element) => {
			if (isH2(element)) {
				tocItems.push({
					id: extractID(element),
					title: extractText(element),
				});
			}
		});
	});

	return tocItems.length >= 3 ? tocItems : undefined;
};
