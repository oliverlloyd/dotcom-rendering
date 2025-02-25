import { ArticlePillar, ArticleSpecial, isString } from '@guardian/libs';

export const getThemeNameAsString = (format: ArticleFormat): string => {
	const themeName =
		ArticlePillar[format.theme] ?? ArticleSpecial[format.theme];
	if (!themeName) throw new Error('Unknown theme');
	return themeName;
};

/**
 * We need a type guard because TypeScript enums are (confusingly)
 * returning both strings and numbers.
 */
const isTheme = (theme: string | ArticleTheme): theme is ArticleTheme =>
	!isString(theme);

export const getAllThemes = ({
	display,
	design,
}: {
	display: ArticleDisplay;
	design: ArticleDesign;
}): Array<ArticleFormat> =>
	Object.values({ ...ArticlePillar, ...ArticleSpecial })
		.filter(isTheme)
		.map((theme) => ({
			theme,
			display,
			design,
		}));
