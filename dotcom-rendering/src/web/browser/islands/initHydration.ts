import { doHydration } from './doHydration';
import { getName } from './getName';
import { getProps } from './getProps';
import { whenIdle } from './whenIdle';
import { whenVisible } from './whenVisible';

export const initHydration = (elements: NodeListOf<Element>) => {
	/**
	 * Partial Hydration / React Islands
	 *
	 * The code here looks for parts of the dom that have been marked using the `gu-island`
	 * marker, hydrating/rendering each one using the following properties:
	 *
	 * deferUntil - Used to optionally defer execution
	 * name - The name of the component. Used to dynamically import the code
	 * props - The data for the component that has been serialised in the dom
	 * element - The `gu-island` custom element which is wrapping the content
	 */
	elements.forEach((element) => {
		if (element instanceof HTMLElement) {
			const name = getName(element);
			const props = getProps(element);

			if (!name) return;

			const deferUntil = element.getAttribute('deferuntil');
			switch (deferUntil) {
				case 'idle': {
					whenIdle(() => {
						doHydration(name, props, element);
					});
					break;
				}
				case 'visible': {
					whenVisible(element, () => {
						doHydration(name, props, element);
					});
					break;
				}
				default: {
					doHydration(name, props, element);
				}
			}
		}
	});
};
