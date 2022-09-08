import type { DropdownLinkType } from '../components/Dropdown.ts';

export const linkNotificationCount = (links: DropdownLinkType[]): number => {
	return links.reduce((runningCount, link) => {
		const thisLinkNotificationCount = link.notifications?.length ?? 0;
		return runningCount + thisLinkNotificationCount;
	}, 0);
};
