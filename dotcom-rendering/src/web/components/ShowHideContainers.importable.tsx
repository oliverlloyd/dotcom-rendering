import { isObject, isString, storage } from 'npm:@guardian/libs';
import { useOnce } from '../lib/useOnce.ts';

type ContainerStates = { [id: string]: string };

const isContainerStates = (item: unknown): item is ContainerStates => {
	if (!isObject(item)) return false;
	if (!Object.keys(item).every(isString)) return false;
	if (!Object.values(item).every(isString)) return false;
	return true;
};

const getContainerStates = (): ContainerStates => {
	const item = storage.local.get(`gu.prefs.container-states`);

	if (!isContainerStates(item)) return {};

	return item;
};

export const ShowHideContainers = () => {
	useOnce(() => {
		const containerStates = getContainerStates();

		const toggleContainer = (sectionId: string, element: HTMLElement) => {
			const isExpanded = element.getAttribute('aria-expanded') === 'true';

			const section: Element | null = window.document.getElementById(
				`container-${sectionId}`,
			);

			if (isExpanded) {
				containerStates[sectionId] = 'closed';
				section?.classList.add('hidden');
				element.innerHTML = 'Show';
				element.setAttribute('aria-expanded', 'false');
				element.setAttribute('data-link-name', 'Show');
			} else {
				containerStates[sectionId] = 'opened';
				section?.classList.remove('hidden');
				element.innerHTML = 'Hide';
				element.setAttribute('aria-expanded', 'true');
				element.setAttribute('data-link-name', 'Hide');
			}

			storage.local.set(`gu.prefs.container-states`, containerStates);
		};

		window.document
			.querySelectorAll<HTMLElement>('[data-show-hide-button]')
			.forEach((e) => {
				const sectionId = e.getAttribute('data-show-hide-button');
				if (!sectionId) return;

				e.onclick = () => toggleContainer(sectionId, e);

				if (containerStates[sectionId] === 'closed') {
					toggleContainer(sectionId, e);
				}
			});
	}, []);

	return <></>;
};
