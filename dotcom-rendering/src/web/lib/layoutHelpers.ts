import type { CAPIArticleType } from '../../types/frontend.ts';
import { decideNavTheme } from './decideNavTheme.ts';

export const getCurrentPillar = (
	CAPIArticle: CAPIArticleType,
): ArticleTheme => {
	const currentPillar =
		(CAPIArticle.nav.currentPillarTitle &&
			(CAPIArticle.nav.currentPillarTitle.toLowerCase() as LegacyPillar)) ||
		CAPIArticle.pillar;
	return decideNavTheme(currentPillar);
};
