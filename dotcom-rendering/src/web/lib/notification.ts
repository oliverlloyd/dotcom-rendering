import type { BrazeCard } from 'npm:@guardian/braze-components';
import type { DropdownLinkType } from '../components/Dropdown.ts';

export interface Notification {
	target: string;
	message: string;
}

const hasTargetAndMessage = (
	card: BrazeCard,
): card is BrazeCard & { extras: Notification } =>
	Boolean(card.extras.message) && Boolean(card.extras.target);

export const mapBrazeCardsToNotifications = (
	cards: BrazeCard[],
): Notification[] => {
	return cards.filter(hasTargetAndMessage).map((card) => {
		return {
			target: card.extras.target,
			message: card.extras.message,
		};
	});
};

const groupNotificationsByTarget = (
	notifications: Notification[],
): { [k: string]: Notification[] } => {
	return notifications.reduce<{ [k: string]: Notification[] }>(
		(groupings, notification) => {
			const alreadyGotNotificationsForTarget =
				Object.prototype.hasOwnProperty.call(
					groupings,
					notification.target,
				);

			if (!alreadyGotNotificationsForTarget) {
				groupings[notification.target] = [];
			}

			groupings[notification.target].push(notification);

			return groupings;
		},
		{},
	);
};

export const addNotificationsToDropdownLinks = (
	links: DropdownLinkType[],
	notifications: Notification[],
): DropdownLinkType[] => {
	const notificationsByTarget = groupNotificationsByTarget(notifications);

	const linksWithNotifications = links.map((link) => {
		const targetHasNewNotifications = Object.prototype.hasOwnProperty.call(
			notificationsByTarget,
			link.id,
		);

		if (targetHasNewNotifications) {
			const newMessages = notificationsByTarget[link.id].map(
				(n) => n.message,
			);

			const existingNotifications = link.notifications;
			if (existingNotifications) {
				return {
					...link,
					notifications: [...existingNotifications, ...newMessages],
				};
			} else {
				return {
					...link,
					notifications: newMessages,
				};
			}
		} else {
			return link;
		}
	});

	return linksWithNotifications;
};
