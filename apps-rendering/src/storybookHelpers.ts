// ----- Imports ----- //

import { ArticleDesign, ArticlePillar } from '@guardian/libs';
import { select } from '@storybook/addon-knobs';

// ----- Helpers ----- //

const pillarOptions = {
	News: ArticlePillar.News,
	Opinion: ArticlePillar.Opinion,
	Sport: ArticlePillar.Sport,
	Culture: ArticlePillar.Culture,
	Lifestyle: ArticlePillar.Lifestyle,
};

const selectPillar = (initial: ArticlePillar): ArticlePillar =>
	select('Pillar', pillarOptions, initial);

const designOptions = {
	Article: ArticleDesign.Standard,
	Gallery: ArticleDesign.Gallery,
	Audio: ArticleDesign.Audio,
	Video: ArticleDesign.Video,
	Review: ArticleDesign.Review,
	Analysis: ArticleDesign.Analysis,
	Comment: ArticleDesign.Comment,
	Letter: ArticleDesign.Letter,
	Feature: ArticleDesign.Feature,
	LiveBlog: ArticleDesign.LiveBlog,
	DeadBlog: ArticleDesign.DeadBlog,
	Recipe: ArticleDesign.Recipe,
	MatchReport: ArticleDesign.MatchReport,
	Interview: ArticleDesign.Interview,
	Editorial: ArticleDesign.Editorial,
	Quiz: ArticleDesign.Quiz,
	Interactive: ArticleDesign.Interactive,
	PhotoEssay: ArticleDesign.PhotoEssay,
	PrintShop: ArticleDesign.PrintShop,
};

const selectDesign = (initial: ArticleDesign): ArticleDesign =>
	select('ArticleDesign', designOptions, initial);

// ----- Exports ----- //

export { selectPillar, selectDesign };
