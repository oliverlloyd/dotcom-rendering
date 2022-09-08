import { css, Global } from 'npm:@emotion/react';
import { ArticleDesign } from 'npm:@guardian/libs';
import { brandAlt, focusHalo, neutral } from 'npm:@guardian/source-foundations';
import { StrictMode } from 'npm:react';
import { filterABTestSwitches } from '../../model/enhance-switches.ts';
import type { NavType } from '../../model/extract-nav.ts';
import type { CAPIArticleType } from '../../types/frontend.ts';
import { DecideLayout } from '../layouts/DecideLayout.tsx';
import { AlreadyVisited } from './AlreadyVisited.importable.tsx';
import { BrazeMessaging } from './BrazeMessaging.importable.tsx';
import { CommercialMetrics } from './CommercialMetrics.importable.tsx';
import { CoreVitals } from './CoreVitals.importable.tsx';
import { FetchCommentCounts } from './FetchCommentCounts.importable.tsx';
import { FocusStyles } from './FocusStyles.importable.tsx';
import { Island } from './Island.tsx';
import { ReaderRevenueDev } from './ReaderRevenueDev.importable.tsx';
import { SetABTests } from './SetABTests.importable.tsx';
import { SkipTo } from './SkipTo.tsx';

type Props = {
	CAPIArticle: CAPIArticleType;
	NAV: NavType;
	format: ArticleFormat;
};

/**
 * @description
 * Article is a high level wrapper for article pages on Dotcom. Sets strict mode and some globals
 *
 * @param {Props} props
 * @param {CAPIArticleType} props.CAPIArticle - The article JSON data
 * @param {NAVType} props.NAV - The article JSON data
 * @param {ArticleFormat} props.format - The format model for the article
 * */
export const ArticlePage = ({ CAPIArticle, NAV, format }: Props) => {
	return (
		<StrictMode>
			<Global
				styles={css`
					/* Crude but effective mechanism. Specific components may need to improve on this behaviour. */
					/* The not(.src...) selector is to work with Source's FocusStyleManager. */
					*:focus {
						${focusHalo}
					}
					::selection {
						background: ${brandAlt[400]};
						color: ${neutral[7]};
					}
				`}
			/>
			<SkipTo id="maincontent" label="Skip to main content" />
			<SkipTo id="navigation" label="Skip to navigation" />
			{(format.design === ArticleDesign.LiveBlog ||
				format.design === ArticleDesign.DeadBlog) && (
				<SkipTo id={'key-events-carousel'} label="Skip to key events" />
			)}
			<Island clientOnly={true} deferUntil="idle">
				<AlreadyVisited />
			</Island>
			<Island clientOnly={true} deferUntil="idle">
				<FocusStyles />
			</Island>
			<Island clientOnly={true} deferUntil="idle">
				<CommercialMetrics
					enabled={!!CAPIArticle.config.switches.commercialMetrics}
				/>
			</Island>
			<Island clientOnly={true} deferUntil="idle">
				<CoreVitals />
			</Island>
			<Island clientOnly={true} deferUntil="idle">
				<BrazeMessaging idApiUrl={CAPIArticle.config.idApiUrl} />
			</Island>
			<Island clientOnly={true} deferUntil="idle">
				<ReaderRevenueDev
					shouldHideReaderRevenue={
						CAPIArticle.shouldHideReaderRevenue
					}
				/>
			</Island>
			<Island clientOnly={true} deferUntil="idle">
				<FetchCommentCounts repeat={true} />
			</Island>
			<Island clientOnly={true}>
				<SetABTests
					abTestSwitches={filterABTestSwitches(
						CAPIArticle.config.switches,
					)}
					pageIsSensitive={CAPIArticle.config.isSensitive}
					isDev={!!CAPIArticle.config.isDev}
				/>
			</Island>
			<DecideLayout CAPIArticle={CAPIArticle} NAV={NAV} format={format} />
		</StrictMode>
	);
};
