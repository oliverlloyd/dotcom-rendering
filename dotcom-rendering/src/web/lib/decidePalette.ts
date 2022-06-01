import type { ArticleFormat } from '@guardian/libs';
import {
	ArticleDesign,
	ArticleDisplay,
	ArticlePillar,
	ArticleSpecial,
} from '@guardian/libs';
import {
	border,
	brand,
	brandAlt,
	brandAltBackground,
	culture,
	labs,
	lifestyle,
	neutral,
	news,
	opinion,
	specialReport,
	sport,
	text,
} from '@guardian/source-foundations';

// Here is the one place where we use `pillarPalette`
import { pillarPalette_DO_NOT_USE as pillarPalette } from '../../lib/pillars';
import { decideContainerOverrides } from './decideContainerOverrides';
import { transparentColour } from './transparentColour';

const WHITE = neutral[100];
const BLACK = neutral[7];

const blogsGrayBackgroundPalette = (format: ArticleFormat): string => {
	switch (format.theme) {
		case ArticlePillar.News:
			return pillarPalette[format.theme].main;
		default:
			return pillarPalette[format.theme].dark;
	}
};

const textHeadline = (format: ArticleFormat): string => {
	switch (format.display) {
		case ArticleDisplay.Immersive:
			if (format.theme === ArticleSpecial.SpecialReport) return WHITE;
			switch (format.design) {
				case ArticleDesign.PrintShop:
					return BLACK;
				default:
					return WHITE;
			}
		case ArticleDisplay.Showcase:
		case ArticleDisplay.NumberedList:
		case ArticleDisplay.Standard: {
			if (
				format.theme === ArticleSpecial.SpecialReport &&
				format.design !== ArticleDesign.Interview
			)
				return specialReport[100];
			switch (format.design) {
				case ArticleDesign.Review:
				case ArticleDesign.Recipe:
				case ArticleDesign.Feature:
					return pillarPalette[format.theme].dark;
				case ArticleDesign.Interview:
				case ArticleDesign.LiveBlog:
					return WHITE;
				default:
					return BLACK;
			}
		}
		default:
			return BLACK;
	}
};

const textSeriesTitle = (format: ArticleFormat): string => {
	if (
		format.theme === ArticleSpecial.Labs &&
		format.design !== ArticleDesign.LiveBlog
	) {
		return BLACK;
	}
	if (format.theme === ArticleSpecial.SpecialReport)
		return specialReport[300];
	switch (format.display) {
		case ArticleDisplay.Immersive:
			return WHITE;
		case ArticleDisplay.Showcase:
		case ArticleDisplay.NumberedList:
		case ArticleDisplay.Standard:
			switch (format.design) {
				case ArticleDesign.LiveBlog:
					switch (format.theme) {
						case ArticlePillar.News:
							return news[600];
						case ArticlePillar.Sport:
						case ArticlePillar.Lifestyle:
						case ArticlePillar.Culture:
						case ArticlePillar.Opinion:
						default:
							return WHITE;
					}
				case ArticleDesign.DeadBlog:
					return blogsGrayBackgroundPalette(format);
				case ArticleDesign.MatchReport:
					return BLACK;
				default:
					return pillarPalette[format.theme].main;
			}
		default:
			return BLACK;
	}
};

const textSeriesTitleWhenMatch = (format: ArticleFormat): string => {
	switch (format.design) {
		case ArticleDesign.MatchReport:
		case ArticleDesign.LiveBlog:
			return BLACK;
		default:
			return textSeriesTitle(format);
	}
};

const textSectionTitle = textSeriesTitle;

const textByline = (format: ArticleFormat): string => {
	if (
		format.design === ArticleDesign.LiveBlog ||
		format.design === ArticleDesign.DeadBlog
	)
		return blogsGrayBackgroundPalette(format);
	if (format.theme === ArticleSpecial.Labs) return BLACK;
	if (format.theme === ArticleSpecial.SpecialReport)
		return specialReport[300];
	switch (format.display) {
		case ArticleDisplay.Immersive:
			return WHITE;
		case ArticleDisplay.Showcase:
		case ArticleDisplay.NumberedList:
		case ArticleDisplay.Standard:
			switch (format.design) {
				case ArticleDesign.Interview:
					return BLACK;
				default:
					return pillarPalette[format.theme].main;
			}
		default:
			return pillarPalette[format.theme].main;
	}
};

const textHeadlineByline = (format: ArticleFormat): string => {
	if (format.theme === ArticleSpecial.SpecialReport)
		return specialReport[300];
	if (format.theme === ArticleSpecial.Labs) return BLACK;
	return pillarPalette[format.theme].main;
};

const textStandfirst = (format: ArticleFormat): string => {
	if (format.design === ArticleDesign.LiveBlog) return WHITE;
	return BLACK;
};

const textLastUpdated = (format: ArticleFormat): string => {
	if (format.design === ArticleDesign.LiveBlog) {
		switch (format.theme) {
			case ArticlePillar.News:
				return news[600];
			case ArticlePillar.Culture:
				return culture[600];
			case ArticlePillar.Lifestyle:
				return lifestyle[600];
			case ArticlePillar.Sport:
				return sport[600];
			case ArticlePillar.Opinion:
				return opinion[600];
			case ArticleSpecial.Labs:
				return news[600];
			case ArticleSpecial.SpecialReport:
				return specialReport[700];
		}
	}
	return BLACK;
};

const textTwitterHandle = (format: ArticleFormat): string => {
	if (format.theme === ArticleSpecial.Labs) return BLACK;
	if (format.theme === ArticleSpecial.SpecialReport)
		return specialReport[300];
	return text.supporting;
};

const textTwitterHandleBelowDesktop = (format: ArticleFormat): string => {
	if (format.design === ArticleDesign.LiveBlog) return WHITE;

	return textTwitterHandle(format);
};

const textCaption = (format: ArticleFormat): string => {
	if (format.theme === ArticleSpecial.SpecialReport)
		return specialReport[100];
	if (format.theme === ArticleSpecial.Labs) return neutral[20];

	switch (format.design) {
		case ArticleDesign.PhotoEssay:
			return pillarPalette[format.theme].dark;
		default:
			return text.supporting;
	}
};

const textCaptionLink = (format: ArticleFormat): string => {
	if (format.theme === ArticleSpecial.SpecialReport)
		return specialReport[300];
	return pillarPalette[format.theme].main;
};

const textSubMeta = (format: ArticleFormat): string => {
	if (format.theme === ArticleSpecial.Labs) return BLACK;
	if (format.theme === ArticleSpecial.SpecialReport)
		return specialReport[100];
	if (
		format.design === ArticleDesign.DeadBlog ||
		format.design === ArticleDesign.LiveBlog
	)
		return blogsGrayBackgroundPalette(format);
	return pillarPalette[format.theme].main;
};

const textSubMetaLabel = (format: ArticleFormat): string => {
	if (format.theme === ArticleSpecial.Labs) return BLACK;
	if (format.theme === ArticleSpecial.SpecialReport)
		return specialReport[300];
	return text.supporting;
};

const textSubMetaLink = (format: ArticleFormat): string => {
	if (format.theme === ArticleSpecial.Labs) return BLACK;
	if (format.theme === ArticleSpecial.SpecialReport)
		return specialReport[300];
	return text.supporting;
};

const textSyndicationButton = (format: ArticleFormat): string => {
	if (format.theme === ArticleSpecial.Labs) return BLACK;
	if (format.theme === ArticleSpecial.SpecialReport)
		return specialReport[100];
	return text.supporting;
};

const textArticleLink = (format: ArticleFormat): string => {
	if (format.design === ArticleDesign.DeadBlog) {
		switch (format.theme) {
			case ArticlePillar.News:
				return news[400];
			case ArticlePillar.Culture:
				return culture[350];
			case ArticlePillar.Lifestyle:
				return lifestyle[400];
			case ArticlePillar.Sport:
				return sport[400];
			case ArticlePillar.Opinion:
				return opinion[300];
			case ArticleSpecial.Labs:
				return BLACK;
			case ArticleSpecial.SpecialReport:
				return specialReport[300];
		}
	}

	if (format.theme === ArticleSpecial.Labs) return BLACK;
	if (format.theme === ArticleSpecial.SpecialReport) {
		return specialReport[300];
	}
	switch (format.theme) {
		case ArticlePillar.Opinion:
		case ArticlePillar.Culture:
			return pillarPalette[format.theme].dark;
		default:
			return pillarPalette[format.theme].main;
	}
};

const textDisclaimerLink = (format: ArticleFormat): string =>
	pillarPalette[format.theme].dark;

const textWitnessIcon = (format: ArticleFormat): string =>
	pillarPalette[format.theme].main;

const textWitnessTitle = (format: ArticleFormat): string =>
	pillarPalette[format.theme].main;

const textWitnessAuthor = (format: ArticleFormat): string =>
	pillarPalette[format.theme].main;

const textPullQuote = (format: ArticleFormat): string => {
	return pillarPalette[format.theme].dark;
};

const textKeyEvent = (format: ArticleFormat): string => {
	switch (format.theme) {
		case ArticlePillar.News:
			return news[300];
		case ArticlePillar.Sport:
			return sport[300];
		case ArticlePillar.Lifestyle:
			return lifestyle[300];
		case ArticlePillar.Culture:
			return culture[300];
		case ArticlePillar.Opinion:
			return opinion[300];
		case ArticleSpecial.Labs:
			return labs[300];
		case ArticleSpecial.SpecialReport:
			return specialReport[300];
	}
};

const textStandfirstLink = (format: ArticleFormat): string => {
	if (format.design === ArticleDesign.LiveBlog) return WHITE;
	if (format.design === ArticleDesign.DeadBlog) {
		switch (format.theme) {
			case ArticlePillar.Opinion:
				return opinion[200];
			case ArticlePillar.News:
				return news[400];
			default:
				return pillarPalette[format.theme].dark;
		}
	}

	if (format.theme === ArticleSpecial.SpecialReport)
		return specialReport[400];
	switch (format.theme) {
		case ArticlePillar.Opinion:
		case ArticlePillar.Culture:
			return pillarPalette[format.theme].dark;
		default:
			return pillarPalette[format.theme].main;
	}
};

const textBranding = (format: ArticleFormat): string => {
	if (format.theme === ArticleSpecial.Labs) return BLACK;
	return pillarPalette[format.theme].main;
};

const textArticleLinkHover = (format: ArticleFormat): string => {
	if (format.design === ArticleDesign.DeadBlog) {
		switch (format.theme) {
			case ArticlePillar.News:
				return news[400];
			case ArticlePillar.Culture:
				return culture[350];
			case ArticlePillar.Lifestyle:
				return lifestyle[400];
			case ArticlePillar.Sport:
				return sport[400];
			case ArticlePillar.Opinion:
				return opinion[300];
			case ArticleSpecial.Labs:
				return BLACK;
			case ArticleSpecial.SpecialReport:
				return specialReport[100];
		}
	}

	if (format.theme === ArticleSpecial.Labs) return BLACK;
	if (format.theme === ArticleSpecial.SpecialReport)
		return specialReport[100];
	switch (format.theme) {
		case ArticlePillar.Opinion:
		case ArticlePillar.Culture:
			return pillarPalette[format.theme].dark;
		default:
			return pillarPalette[format.theme].main;
	}
};

const textCardHeadline = (format: ArticleFormat): string => {
	if (format.theme === ArticleSpecial.SpecialReport) return WHITE;
	if (format.display === ArticleDisplay.Immersive) return BLACK;
	switch (format.design) {
		case ArticleDesign.Feature:
		case ArticleDesign.Interview:
			return pillarPalette[format.theme].dark;
		case ArticleDesign.Gallery:
		case ArticleDesign.Audio:
		case ArticleDesign.Video:
			return WHITE;
		case ArticleDesign.LiveBlog:
			switch (format.theme) {
				case ArticleSpecial.Labs:
					return BLACK;
				case ArticlePillar.News:
				case ArticlePillar.Sport:
				case ArticlePillar.Opinion:
				case ArticlePillar.Culture:
				case ArticlePillar.Lifestyle:
				default:
					return WHITE;
			}
		default:
			return BLACK;
	}
};

const textCardStandfirst = textCardHeadline;

/** same as textByline except for SpecialReport */
const textCardByline = (format: ArticleFormat): string => {
	if (format.theme === ArticleSpecial.SpecialReport)
		return specialReport[700];

	return textByline(format);
};

const textCardKicker = (format: ArticleFormat): string => {
	if (
		format.theme === ArticleSpecial.SpecialReport &&
		(format.design === ArticleDesign.Comment ||
			format.design === ArticleDesign.Letter)
	)
		return opinion[550];
	if (format.theme === ArticleSpecial.SpecialReport) return brandAlt[400];
	switch (format.design) {
		case ArticleDesign.LiveBlog:
			switch (format.theme) {
				case ArticlePillar.News:
					return news[600];
				case ArticlePillar.Sport:
					return sport[600];
				case ArticlePillar.Opinion:
					return WHITE;
				case ArticlePillar.Culture:
					return culture[600];
				case ArticlePillar.Lifestyle:
					return lifestyle[500];
				case ArticleSpecial.Labs:
				default:
					return BLACK;
			}
		case ArticleDesign.Gallery:
		case ArticleDesign.Audio:
		case ArticleDesign.Video:
			switch (format.theme) {
				case ArticlePillar.News:
					return news[600];
				case ArticlePillar.Sport:
					return sport[600];
				case ArticlePillar.Opinion:
					return opinion[550];
				case ArticlePillar.Lifestyle:
				case ArticlePillar.Culture:
				default:
					return pillarPalette[format.theme][500];
			}
		default:
			return pillarPalette[format.theme].main;
	}
};

const textCardFooter = (format: ArticleFormat): string => {
	switch (format.design) {
		case ArticleDesign.Comment:
		case ArticleDesign.Letter:
			switch (format.theme) {
				case ArticleSpecial.SpecialReport:
					return opinion[550];
				default:
					return neutral[46];
			}
		case ArticleDesign.LiveBlog:
			switch (format.theme) {
				case ArticlePillar.News:
					return news[600];
				case ArticlePillar.Sport:
					return sport[600];
				case ArticlePillar.Opinion:
					return WHITE;
				case ArticlePillar.Culture:
					return culture[600];
				case ArticlePillar.Lifestyle:
					return lifestyle[500];
				case ArticleSpecial.SpecialReport:
					return brandAlt[400];
				case ArticleSpecial.Labs:
				default:
					return BLACK;
			}
		case ArticleDesign.Gallery:
		case ArticleDesign.Audio:
		case ArticleDesign.Video:
			switch (format.theme) {
				case ArticleSpecial.SpecialReport:
					return brandAlt[400];
				case ArticlePillar.News:
					return news[600];
				case ArticlePillar.Sport:
					return sport[600];
				case ArticlePillar.Opinion:
					return opinion[550];
				case ArticlePillar.Lifestyle:
				case ArticlePillar.Culture:
				default:
					return pillarPalette[format.theme][500];
			}
		default:
			switch (format.theme) {
				case ArticleSpecial.SpecialReport:
					return brandAltBackground.primary;
				default:
					return neutral[46];
			}
	}
};

const textLinkKicker = (format: ArticleFormat): string => {
	return pillarPalette[format.theme].main;
};

const textCricketScoreboardLink = (): string => {
	return sport[300];
};

const backgroundArticle = (format: ArticleFormat): string => {
	// specialreport blogs should have specialreport background
	if (
		(format.design === ArticleDesign.LiveBlog ||
			format.design === ArticleDesign.DeadBlog) &&
		format.theme !== ArticleSpecial.SpecialReport
	)
		return neutral[97];
	// Order matters. We want comment special report pieces to have the opinion background
	if (format.design === ArticleDesign.Letter) return opinion[800];
	if (format.design === ArticleDesign.Comment) return opinion[800];
	if (format.design === ArticleDesign.Editorial) return opinion[800];
	if (format.theme === ArticleSpecial.SpecialReport)
		return specialReport[800]; // Note, check theme rather than design here
	if (
		format.theme === ArticleSpecial.Labs &&
		format.display !== ArticleDisplay.Immersive
	)
		return neutral[97];

	return 'transparent';
};

const backgroundSeriesTitle = (format: ArticleFormat): string => {
	if (format.theme === ArticleSpecial.SpecialReport)
		return brandAltBackground.primary;
	switch (format.display) {
		case ArticleDisplay.Immersive:
			return pillarPalette[format.theme].main;
		case ArticleDisplay.Showcase:
		case ArticleDisplay.NumberedList:
		case ArticleDisplay.Standard:
		default:
			return 'transparent';
	}
};

const backgroundSectionTitle = (format: ArticleFormat): string => {
	switch (format.display) {
		case ArticleDisplay.Immersive:
			return pillarPalette[format.theme].main;
		case ArticleDisplay.Showcase:
		case ArticleDisplay.NumberedList:
		case ArticleDisplay.Standard:
		default:
			return 'transparent';
	}
};

const backgroundAvatar = (format: ArticleFormat): string => {
	switch (format.theme) {
		case ArticleSpecial.SpecialReport:
			return specialReport[800];
		case ArticlePillar.Opinion:
			return pillarPalette[ArticlePillar.Opinion].main;
		default:
			return pillarPalette[format.theme].bright;
	}
};

const backgroundCard = (format: ArticleFormat): string => {
	if (format.theme === ArticleSpecial.SpecialReport)
		return specialReport[300];
	switch (format.design) {
		case ArticleDesign.Editorial:
		case ArticleDesign.Letter:
		case ArticleDesign.Comment:
			return opinion[800];
		case ArticleDesign.Gallery:
		case ArticleDesign.Audio:
		case ArticleDesign.Video:
			return neutral[20];
		case ArticleDesign.LiveBlog:
			switch (format.theme) {
				case ArticleSpecial.Labs:
					return labs[400];
				case ArticlePillar.News:
				case ArticlePillar.Sport:
				case ArticlePillar.Opinion:
				case ArticlePillar.Lifestyle:
				case ArticlePillar.Culture:
				default:
					return pillarPalette[format.theme][300];
			}
		default:
			return neutral[97];
	}
};

const backgroundHeadline = (format: ArticleFormat): string => {
	switch (format.display) {
		case ArticleDisplay.Immersive:
			if (format.theme === ArticleSpecial.SpecialReport)
				return specialReport[300];
			return BLACK;
		case ArticleDisplay.Showcase:
		case ArticleDisplay.NumberedList:
		case ArticleDisplay.Standard:
			if (format.design === ArticleDesign.Interview) return BLACK;
			return 'transparent';
		default:
			return 'transparent';
	}
};

const backgroundAgeWarning = (format: ArticleFormat): string => {
	switch (format.design) {
		case ArticleDesign.Interview:
			return backgroundArticle(format);
		default:
			return backgroundHeadline(format);
	}
};

const backgroundHeadlineByline = (format: ArticleFormat): string => {
	if (format.theme === ArticleSpecial.SpecialReport)
		return brandAltBackground.primary;
	return 'transparent';
};

const backgroundBullet = (format: ArticleFormat): string => {
	if (format.theme === ArticleSpecial.Labs) return BLACK;
	if (format.theme === ArticleSpecial.SpecialReport)
		return specialReport[300];
	return pillarPalette[format.theme].main;
};

const backgroundBulletStandfirst = (format: ArticleFormat): string => {
	if (format.design === ArticleDesign.DeadBlog) {
		return neutral[60];
	}
	if (format.design === ArticleDesign.LiveBlog) {
		switch (format.theme) {
			case ArticlePillar.News:
				return news[600];
			case ArticlePillar.Culture:
				return culture[400];
			case ArticlePillar.Lifestyle:
				return lifestyle[500];
			case ArticlePillar.Sport:
				return sport[600];
			case ArticlePillar.Opinion:
				return opinion[500];
			case ArticleSpecial.Labs:
				return news[600];
			case ArticleSpecial.SpecialReport:
				return specialReport[700];
		}
	}

	return neutral[86]; // default previously defined in Standfirst.tsx
};

const backgroundHeader = (format: ArticleFormat): string => {
	switch (format.design) {
		case ArticleDesign.LiveBlog:
			switch (format.theme) {
				case ArticleSpecial.Labs:
					return news[300];
				case ArticleSpecial.SpecialReport:
					return specialReport[700];
				default:
					return pillarPalette[format.theme][300];
			}
		default:
			return backgroundArticle(format);
	}
};

const backgroundStandfirst = (format: ArticleFormat): string => {
	switch (format.design) {
		case ArticleDesign.LiveBlog:
			switch (format.theme) {
				case ArticlePillar.News:
					return news[200];
				case ArticlePillar.Culture:
					return culture[200];
				case ArticlePillar.Sport:
					return sport[100];
				case ArticlePillar.Lifestyle:
					return lifestyle[200];
				case ArticlePillar.Opinion:
					return opinion[200];
				case ArticleSpecial.Labs:
					return news[200];
				case ArticleSpecial.SpecialReport:
					return specialReport[300];
			}
			break;
		case ArticleDesign.DeadBlog:
			switch (format.theme) {
				case ArticleSpecial.SpecialReport:
					return specialReport[700];
				default:
					return neutral[93];
			}

		default:
			return backgroundArticle(format);
	}
};

const backgroundImageTitle = (format: ArticleFormat): string => {
	return pillarPalette[format.theme].main;
};

const backgroundSpeechBubble = (format: ArticleFormat): string => {
	return pillarPalette[format.theme].main;
};

const fillCommentCount = (format: ArticleFormat): string => {
	if (
		format.design === ArticleDesign.LiveBlog ||
		format.design === ArticleDesign.DeadBlog
	)
		return neutral[46];
	if (format.theme === ArticleSpecial.Labs) return BLACK;
	if (format.theme === ArticleSpecial.SpecialReport)
		return specialReport[300];
	return pillarPalette[format.theme].main;
};

const fillCommentCountUntilDesktop = (format: ArticleFormat): string => {
	if (format.design === ArticleDesign.LiveBlog) return WHITE;

	return fillCommentCount(format);
};

const fillShareIcon = (format: ArticleFormat): string => {
	if (format.design === ArticleDesign.DeadBlog) {
		switch (format.theme) {
			case ArticlePillar.Culture:
				return culture[350];
			case ArticlePillar.News:
				return news[400];
			case ArticlePillar.Lifestyle:
				return lifestyle[400];
			case ArticlePillar.Sport:
				return sport[400];
			case ArticlePillar.Opinion:
				return opinion[300];
			case ArticleSpecial.Labs:
				return BLACK;
			case ArticleSpecial.SpecialReport:
				return specialReport[300];
		}
	}

	if (format.theme === ArticleSpecial.Labs) return BLACK;
	if (format.theme === ArticleSpecial.SpecialReport)
		return specialReport[300];

	return pillarPalette[format.theme].main;
};

const fillShareCountIcon = (): string => {
	return neutral[46];
};

const fillShareCountIconUntilDesktop = (format: ArticleFormat): string => {
	if (format.design === ArticleDesign.LiveBlog) return WHITE;
	return fillShareCountIcon();
};

const fillShareIconGrayBackground = (format: ArticleFormat): string => {
	switch (format.design) {
		case ArticleDesign.LiveBlog:
		case ArticleDesign.DeadBlog:
			return blogsGrayBackgroundPalette(format);
		default:
			return pillarPalette[format.theme].dark;
	}
};

const fillCaptionCamera = (format: ArticleFormat): string =>
	textCaption(format);

const fillBlockquoteIcon = (format: ArticleFormat): string =>
	pillarPalette[format.theme].main;

const fillTwitterHandleBelowDesktop = (format: ArticleFormat): string => {
	if (format.design === ArticleDesign.LiveBlog) return WHITE;

	return neutral[46];
};
const borderSyndicationButton = (format: ArticleFormat): string => {
	if (format.theme === ArticleSpecial.Labs) return neutral[60];
	return border.secondary;
};

const borderSubNav = (format: ArticleFormat): string => {
	return pillarPalette[format.theme].main;
};

const borderLiveBlock = (format: ArticleFormat): string => {
	if (format.design === ArticleDesign.DeadBlog) {
		switch (format.theme) {
			case ArticlePillar.News:
				return news[400];
			case ArticlePillar.Culture:
				return culture[350];
			case ArticlePillar.Lifestyle:
				return lifestyle[400];
			case ArticlePillar.Sport:
				return sport[400];
			case ArticlePillar.Opinion:
				return opinion[300];
			case ArticleSpecial.Labs:
				return labs[400];
			case ArticleSpecial.SpecialReport:
				return specialReport[400];
		}
	}

	return pillarPalette[format.theme].main;
};

const borderPinnedPost = (format: ArticleFormat): string => {
	return pillarPalette[format.theme][300];
};

const borderArticleLink = (format: ArticleFormat): string => {
	if (format.theme === ArticleSpecial.Labs) return neutral[60];
	if (format.theme === ArticleSpecial.SpecialReport)
		return specialReport[300];
	return border.secondary;
};

const borderStandfirstLink = (format: ArticleFormat): string => {
	if (format.design === ArticleDesign.LiveBlog) {
		switch (format.theme) {
			case ArticlePillar.News:
				return news[600];
			case ArticlePillar.Culture:
				return culture[400];
			case ArticlePillar.Lifestyle:
				return lifestyle[500];
			case ArticlePillar.Sport:
				return sport[600];
			case ArticlePillar.Opinion:
				return opinion[500];
			case ArticleSpecial.Labs:
				return news[600];
			case ArticleSpecial.SpecialReport:
				return specialReport[450];
		}
	}
	if (format.theme === ArticleSpecial.SpecialReport)
		return specialReport[400];
	return border.secondary;
};

const borderHeadline = (format: ArticleFormat): string => {
	if (format.design === ArticleDesign.LiveBlog) {
		return 'rgba(255,255,255, 0.2)';
	}
	if (format.design === ArticleDesign.DeadBlog) return '#CDCDCD';
	return border.secondary;
};

const borderStandfirst = (format: ArticleFormat): string => {
	if (format.design === ArticleDesign.LiveBlog) {
		return 'rgba(255,255,255, 0.2)';
	}
	if (format.design === ArticleDesign.DeadBlog) return '#BDBDBD';
	return border.secondary;
};

const matchTab = (): string => {
	return border.secondary;
};

const activeMatchTab = (): string => {
	return sport[300];
};

const borderCardSupporting = (format: ArticleFormat): string => {
	switch (format.design) {
		case ArticleDesign.Comment:
		case ArticleDesign.Letter:
			switch (format.theme) {
				case ArticleSpecial.SpecialReport:
					return opinion[550];
				default:
					return neutral[46];
			}
		case ArticleDesign.LiveBlog:
			switch (format.theme) {
				case ArticlePillar.News:
					return news[600];
				case ArticlePillar.Sport:
					return sport[600];
				case ArticlePillar.Opinion:
					return WHITE;
				case ArticlePillar.Culture:
					return culture[600];
				case ArticlePillar.Lifestyle:
					return lifestyle[500];
				case ArticleSpecial.SpecialReport:
					return brandAlt[400];
				case ArticleSpecial.Labs:
				default:
					return BLACK;
			}
		case ArticleDesign.Gallery:
		case ArticleDesign.Audio:
		case ArticleDesign.Video:
			switch (format.theme) {
				case ArticleSpecial.SpecialReport:
					return brandAlt[400];
				case ArticlePillar.News:
					return news[600];
				case ArticlePillar.Sport:
					return sport[600];
				case ArticlePillar.Opinion:
					return opinion[550];
				case ArticlePillar.Lifestyle:
				case ArticlePillar.Culture:
				default:
					return pillarPalette[format.theme][500];
			}
		default:
			switch (format.theme) {
				case ArticleSpecial.SpecialReport:
					return brandAltBackground.primary;
				default:
					return neutral[86];
			}
	}
};

const backgroundMatchNav = (): string => {
	return '#FFE500';
};

const backgroundUnderline = (format: ArticleFormat): string =>
	transparentColour(textCardKicker(format));

const borderArticleLinkHover = (format: ArticleFormat): string => {
	if (format.theme === ArticleSpecial.Labs) return BLACK;
	if (format.theme === ArticleSpecial.SpecialReport)
		return specialReport[100];
	return pillarPalette[format.theme].main;
};

const topBarCard = (format: ArticleFormat): string => {
	if (format.theme === ArticleSpecial.SpecialReport)
		return brandAltBackground.primary;
	return pillarPalette[format.theme].main;
};

const hoverHeadlineByline = (format: ArticleFormat): string => {
	if (format.theme === ArticleSpecial.Labs) return BLACK;
	return pillarPalette[format.theme].dark;
};

const textRichLink: (format: ArticleFormat) => string = (format) => {
	if (format) {
		switch (format.theme) {
			case ArticlePillar.News:
				return news[400];
			case ArticlePillar.Culture:
				return culture[350];
			case ArticlePillar.Lifestyle:
				return lifestyle[300];
			case ArticlePillar.Sport:
				return sport[400];
			case ArticlePillar.Opinion:
				return opinion[300];
			case ArticleSpecial.Labs:
				return BLACK;
			case ArticleSpecial.SpecialReport:
				return specialReport[400];
		}
	}
	return pillarPalette[ArticlePillar.News][400];
};

const hoverStandfirstLink = (format: ArticleFormat): string => {
	if (format.design === ArticleDesign.DeadBlog)
		return pillarPalette[format.theme].main;
	if (format.design === ArticleDesign.LiveBlog) {
		return WHITE;
	}
	if (format.theme === ArticleSpecial.SpecialReport)
		return specialReport[400];
	return border.secondary;
};

const borderRichLink: (format: ArticleFormat) => string = (format) => {
	if (format) {
		switch (format.theme) {
			case ArticlePillar.News:
				return news[400];
			case ArticlePillar.Culture:
				return culture[350];
			case ArticlePillar.Lifestyle:
				return lifestyle[300];
			case ArticlePillar.Sport:
				return sport[400];
			case ArticlePillar.Opinion:
				return opinion[300];
			case ArticleSpecial.Labs:
				return labs[400];
			case ArticleSpecial.SpecialReport:
				return specialReport[400];
		}
	}
	return pillarPalette[ArticlePillar.News][400];
};

const borderNavPillar: (format: ArticleFormat) => string = (format) =>
	pillarPalette[format.theme].bright;

const borderArticle: (format: ArticleFormat) => string = (format) => {
	if (
		format.design === ArticleDesign.LiveBlog ||
		format.design === ArticleDesign.DeadBlog
	)
		return '#CDCDCD';
	if (format.theme === ArticleSpecial.Labs) return neutral[60];
	return border.secondary;
};

const borderLines = (format: ArticleFormat): string => {
	if (format.theme === ArticleSpecial.Labs) return border.primary;
	return border.secondary;
};

const backgroundRichLink: (format: ArticleFormat) => string = (format) => {
	if (format) {
		return pillarPalette[format.theme].main;
	}
	return pillarPalette[ArticlePillar.News][400];
};

const borderCricketScoreboardTop = (): string => {
	return sport[300];
};

const borderCricketScoreboardDivider = (): string => {
	return neutral[86];
};

const borderKeyEvent = (): string => neutral[46];

const fillRichLink: (format: ArticleFormat) => string = (format) => {
	if (format) {
		switch (format.theme) {
			case ArticlePillar.News:
				return news[400];
			case ArticlePillar.Culture:
				return culture[350];
			case ArticlePillar.Lifestyle:
				return lifestyle[300];
			case ArticlePillar.Sport:
				return sport[400];
			case ArticlePillar.Opinion:
				return opinion[300];
			case ArticleSpecial.Labs:
				return labs[400];
			case ArticleSpecial.SpecialReport:
				return specialReport[400];
		}
	}
	return pillarPalette[ArticlePillar.News][400];
};

const fillQuoteIcon: (format: ArticleFormat) => string = (format) => {
	if (format) {
		return pillarPalette[format.theme].main;
	}
	return pillarPalette[ArticlePillar.News][400];
};

const textPullQuoteAttribution = (format: ArticleFormat): string =>
	fillQuoteIcon(format);

const textSignInLink = (format: ArticleFormat): string => {
	return pillarPalette[format.theme].dark;
};

const textCarouselTitle = (format: ArticleFormat): string => {
	return pillarPalette[format.theme].main;
};

const textCalloutHeading = (): string => {
	return brand[500];
};

const textDropCap = (format: ArticleFormat): string => {
	switch (format.design) {
		case ArticleDesign.Editorial:
		case ArticleDesign.Letter:
		case ArticleDesign.Comment:
			return format.theme === ArticlePillar.Opinion
				? pillarPalette[format.theme].main
				: pillarPalette[format.theme].dark;
		default:
			return pillarPalette[format.theme].dark;
	}
};

const textBlockquote = (format: ArticleFormat): string => {
	switch (format.design) {
		case ArticleDesign.LiveBlog:
		case ArticleDesign.DeadBlog:
			return BLACK;
		default:
			return neutral[46];
	}
};

const textNumberedTitle = (format: ArticleFormat): string => {
	return pillarPalette[format.theme].main;
};

const textNumberedPosition = (): string => {
	return text.supporting;
};

const textOverlayed = (): string => {
	return WHITE;
};

const textKeyEventTime = (): string => neutral[7];

const backgroundHeadlineTag = (format: ArticleFormat): string =>
	pillarPalette[format.theme].dark;

const backgroundCarouselDot = (format: ArticleFormat): string => {
	return pillarPalette[format.theme][400];
};

const backgroundCarouselDotFocus = (format: ArticleFormat): string => {
	return pillarPalette[format.theme].main;
};

const backgroundMostViewedTab = (format: ArticleFormat): string => {
	return pillarPalette[format.theme].dark;
};

const textShareCount = (): string => {
	return text.supporting;
};

const textShareCountUntilDesktop = (format: ArticleFormat): string => {
	if (format.design === ArticleDesign.LiveBlog) return WHITE;

	return text.supporting;
};

const backgroundMatchStats = (format: ArticleFormat): string => {
	switch (format.design) {
		case ArticleDesign.LiveBlog:
		case ArticleDesign.DeadBlog:
			return neutral[97];
		default:
			return '#d9edf6';
	}
};

const backgroundKeyEventBullet = (): string => neutral[46];

const backgroundKeyEvent = (): string => neutral[97];

const backgroundKeyEventFromDesktop = (): string => neutral[93];

const backgroundSummaryEventBullet = (format: ArticleFormat): string => {
	switch (format.theme) {
		case ArticlePillar.News:
			return news[400];
		case ArticlePillar.Sport:
			return sport[400];
		case ArticlePillar.Lifestyle:
			return lifestyle[400];
		case ArticlePillar.Culture:
			return culture[400];
		case ArticlePillar.Opinion:
			return opinion[400];
		case ArticleSpecial.Labs:
			return labs[400];
		case ArticleSpecial.SpecialReport:
			return specialReport[400];
	}
};

const hoverKeyEventLink = (format: ArticleFormat): string => {
	switch (format.theme) {
		case ArticlePillar.News:
			return news[400];
		case ArticlePillar.Sport:
			return sport[400];
		case ArticlePillar.Lifestyle:
			return lifestyle[400];
		case ArticlePillar.Culture:
			return culture[400];
		case ArticlePillar.Opinion:
			return opinion[400];
		case ArticleSpecial.Labs:
			return labs[400];
		case ArticleSpecial.SpecialReport:
			return specialReport[400];
	}
};

const hoverKeyEventBullet = (): string => neutral[0];

const hoverSummaryEventBullet = (format: ArticleFormat): string => {
	switch (format.theme) {
		case ArticlePillar.News:
			return news[200];
		case ArticlePillar.Sport:
			return sport[200];
		case ArticlePillar.Lifestyle:
			return lifestyle[200];
		case ArticlePillar.Culture:
			return culture[200];
		case ArticlePillar.Opinion:
			return opinion[200];
		case ArticleSpecial.Labs:
			return labs[200];
		case ArticleSpecial.SpecialReport:
			return specialReport[200];
	}
};

export const decidePalette = (
	format: ArticleFormat,
	containerPalette?: DCRContainerPalette,
): Palette => {
	const overrides =
		containerPalette && decideContainerOverrides(containerPalette);
	return {
		text: {
			headline: textHeadline(format),
			seriesTitle: textSeriesTitle(format),
			seriesTitleWhenMatch: textSeriesTitleWhenMatch(format),
			sectionTitle: textSectionTitle(format),
			byline: textByline(format),
			twitterHandle: textTwitterHandle(format),
			twitterHandleBelowDesktop: textTwitterHandleBelowDesktop(format),
			caption: textCaption(format),
			captionLink: textCaptionLink(format),
			subMeta: textSubMeta(format),
			subMetaLabel: textSubMetaLabel(format),
			subMetaLink: textSubMetaLink(format),
			syndicationButton: textSyndicationButton(format),
			articleLink: textArticleLink(format),
			articleLinkHover: textArticleLinkHover(format),
			cardHeadline:
				overrides?.text.cardHeadline || textCardHeadline(format),
			cardByline: overrides?.text.cardByline || textCardByline(format),
			cardKicker: overrides?.text.cardKicker || textCardKicker(format),
			linkKicker: textLinkKicker(format),
			cardStandfirst:
				overrides?.text.cardStandfirst || textCardStandfirst(format),
			cardFooter: overrides?.text.cardFooter || textCardFooter(format),
			headlineByline: textHeadlineByline(format),
			standfirst: textStandfirst(format),
			standfirstLink: textStandfirstLink(format),
			lastUpdated: textLastUpdated(format),
			branding: textBranding(format),
			disclaimerLink: textDisclaimerLink(format),
			signInLink: textSignInLink(format),
			richLink: textRichLink(format),
			pullQuote: textPullQuote(format),
			pullQuoteAttribution: textPullQuoteAttribution(format),
			witnessIcon: textWitnessIcon(format),
			witnessAuthor: textWitnessAuthor(format),
			witnessTitle: textWitnessTitle(format),
			carouselTitle: textCarouselTitle(format),
			calloutHeading: textCalloutHeading(),
			dropCap: textDropCap(format),
			blockquote: textBlockquote(format),
			numberedTitle: textNumberedTitle(format),
			numberedPosition: textNumberedPosition(),
			overlayedCaption: textOverlayed(),
			shareCount: textShareCount(),
			shareCountUntilDesktop: textShareCountUntilDesktop(format),
			cricketScoreboardLink: textCricketScoreboardLink(),
			keyEvent: textKeyEvent(format),
			keyEventTime: textKeyEventTime(),
		},
		background: {
			article: backgroundArticle(format),
			seriesTitle: backgroundSeriesTitle(format),
			sectionTitle: backgroundSectionTitle(format),
			avatar: backgroundAvatar(format),
			card: overrides?.background.card || backgroundCard(format),
			headline: backgroundHeadline(format),
			headlineByline: backgroundHeadlineByline(format),
			bullet: backgroundBullet(format),
			bulletStandfirst: backgroundBulletStandfirst(format),
			header: backgroundHeader(format),
			standfirst: backgroundStandfirst(format),
			richLink: backgroundRichLink(format),
			imageTitle: backgroundImageTitle(format),
			speechBubble: backgroundSpeechBubble(format),
			carouselDot: backgroundCarouselDot(format),
			carouselDotFocus: backgroundCarouselDotFocus(format),
			headlineTag: backgroundHeadlineTag(format),
			mostViewedTab: backgroundMostViewedTab(format),
			matchNav: backgroundMatchNav(),
			analysisUnderline: backgroundUnderline(format),
			matchStats: backgroundMatchStats(format),
			ageWarning: backgroundAgeWarning(format),
			keyEventBullet: backgroundKeyEventBullet(),
			summaryEventBullet: backgroundSummaryEventBullet(format),
			keyEvent: backgroundKeyEvent(),
			keyEventFromDesktop: backgroundKeyEventFromDesktop(),
		},
		fill: {
			commentCount: fillCommentCount(format),
			commentCountUntilDesktop: fillCommentCountUntilDesktop(format),
			shareIcon: fillShareIcon(format),
			shareCountIcon: fillShareCountIcon(),
			shareCountIconUntilDesktop: fillShareCountIconUntilDesktop(format),
			shareIconGrayBackground: fillShareIconGrayBackground(format),
			cameraCaptionIcon: fillCaptionCamera(format),
			richLink: fillRichLink(format),
			quoteIcon: fillQuoteIcon(format),
			blockquoteIcon: fillBlockquoteIcon(format),
			twitterHandleBelowDesktop: fillTwitterHandleBelowDesktop(format),
		},
		border: {
			syndicationButton: borderSyndicationButton(format),
			subNav: borderSubNav(format),
			articleLink: borderArticleLink(format),
			articleLinkHover: borderArticleLinkHover(format),
			liveBlock: borderLiveBlock(format),
			pinnedPost: borderPinnedPost(format),
			standfirstLink: borderStandfirstLink(format),
			headline: borderHeadline(format),
			standfirst: borderStandfirst(format),
			richLink: borderRichLink(format),
			navPillar: borderNavPillar(format),
			article: borderArticle(format),
			lines: overrides?.border.lines || borderLines(format),
			cricketScoreboardTop: borderCricketScoreboardTop(),
			cricketScoreboardDivider: borderCricketScoreboardDivider(),
			matchTab: matchTab(),
			activeMatchTab: activeMatchTab(),
			cardSupporting: borderCardSupporting(format),
			keyEvent: borderKeyEvent(),
		},
		topBar: {
			card: overrides?.topBar.card || topBarCard(format),
		},
		hover: {
			headlineByline: hoverHeadlineByline(format),
			standfirstLink: hoverStandfirstLink(format),
			keyEventLink: hoverKeyEventLink(format),
			keyEventBullet: hoverKeyEventBullet(),
			summaryEventBullet: hoverSummaryEventBullet(format),
		},
	};
};
