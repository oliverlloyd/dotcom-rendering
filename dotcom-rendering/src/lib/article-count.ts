import { storage } from 'npm:@guardian/libs';
import {
	getWeeklyArticleHistory,
	incrementWeeklyArticleCount,
} from 'npm:@guardian/support-dotcom-components';
import type { WeeklyArticleHistory } from 'npm:@guardian/support-dotcom-components/dist/dotcom/src/types';
import { hasOptedOutOfArticleCount } from '../web/lib/contributions.ts';
import type { DailyArticleHistory } from '../web/lib/dailyArticleCount.ts';
import {
	getDailyArticleCount,
	incrementDailyArticleCount,
} from '../web/lib/dailyArticleCount.ts';

export interface ArticleCounts {
	weeklyArticleHistory: WeeklyArticleHistory;
	dailyArticleHistory: DailyArticleHistory;
}

// We should monitor this function call to ensure it only happens within an
// article pages when other pages are supported by DCR.
export const getArticleCounts = async (
	pageId: string,
	keywordIds: string,
): Promise<ArticleCounts | undefined> => {
	if (await hasOptedOutOfArticleCount()) return undefined;

	// hasOptedOut needs to be done before we check if articleCount is set in the window
	// This is because a potential race condition where one invocation of getArticleCounts
	// is waiting for hasOptedOut another invocation might receive it and increment the article count.
	if (!window.guardian.weeklyArticleCount) {
		incrementWeeklyArticleCount(
			storage.local,
			pageId,
			keywordIds.split(','),
		);

		window.guardian.weeklyArticleCount = getWeeklyArticleHistory(
			storage.local,
		);
	}
	if (!window.guardian.dailyArticleCount) {
		incrementDailyArticleCount();
		window.guardian.dailyArticleCount = getDailyArticleCount();
	}

	return {
		weeklyArticleHistory: window.guardian.weeklyArticleCount || [],
		dailyArticleHistory: window.guardian.dailyArticleCount || [],
	};
};
