import type {
	BrazeCardsInterface,
	BrazeMessagesInterface,
} from 'npm:@guardian/braze-components/logic';
import {
	NullBrazeCards,
	NullBrazeMessages,
} from 'npm:@guardian/braze-components/logic';
import useSWRImmutable from 'swr/immutable';
import { buildBrazeMessaging } from './braze/buildBrazeMessaging.ts';

/**
 * Returns brazeMessaging as BrazeMessagesInterface and BrazeCardsInterface
 *
 * BrazeMessages is used to show single-impression messages (like ad impressions).
 * In contrast, BrazeCards can provide persistent user notifications.
 *
 * We're using useSWRImmutable to ensure this call is only made once
 * [doc]: https://swr.vercel.app/docs/revalidation#disable-automatic-revalidations
 */
export const useBraze = (
	idApiUrl: string,
): {
	brazeMessages: BrazeMessagesInterface | undefined;
	brazeCards: BrazeCardsInterface | undefined;
} => {
	const { data, error } = useSWRImmutable('braze-message', () =>
		buildBrazeMessaging(idApiUrl),
	);

	if (error) {
		return {
			brazeMessages: new NullBrazeMessages(),
			brazeCards: new NullBrazeCards(),
		};
	}

	return {
		brazeMessages: data?.brazeMessages,
		brazeCards: data?.brazeCards,
	};
};
