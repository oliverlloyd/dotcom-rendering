import { css, Global } from '@emotion/react';
import { ArticleDesign } from '@guardian/libs';
import { brandAlt, focusHalo, neutral } from '@guardian/source-foundations';
import { StrictMode } from 'react';
import { filterABTestSwitches } from '../../model/enhance-switches';
import type { NavType } from '../../model/extract-nav';
import type { FEArticleType } from '../../types/frontend';
import type { RenderingTarget } from '../../types/renderingTarget';
import { DecideLayout } from '../layouts/DecideLayout';
import { decidePalette } from '../lib/decidePalette';
import { AlreadyVisited } from './AlreadyVisited.importable';
import { AnimatePulsingDots } from './AnimatePulsingDots.importable';
import { BrazeMessaging } from './BrazeMessaging.importable';
import { FetchCommentCounts } from './FetchCommentCounts.importable';
import { FocusStyles } from './FocusStyles.importable';
import { Island } from './Island';
import { Metrics } from './Metrics.importable';
import { ReaderRevenueDev } from './ReaderRevenueDev.importable';
import { SetABTests } from './SetABTests.importable';
import { SkipTo } from './SkipTo';

interface BaseProps {
	article: FEArticleType;
	format: ArticleFormat;
	renderingTarget: RenderingTarget;
}

interface WebProps extends BaseProps {
	renderingTarget: 'Web';
	NAV: NavType;
}

interface AppProps extends BaseProps {
	renderingTarget: 'Apps';
}

/**
 * @description
 * Article is a high level wrapper for article pages on Dotcom. Sets strict mode and some globals
 * */
export const ArticlePage = (props: WebProps | AppProps) => {
	const { article, format, renderingTarget } = props;
	const palette = decidePalette(format);
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
					article {
						color: ${palette.text.article};
					}
				`}
			/>
			<SkipTo id="maincontent" label="Skip to main content" />
			<Island clientOnly={true} deferUntil="idle">
				<FocusStyles />
			</Island>
			{(format.design === ArticleDesign.LiveBlog ||
				format.design === ArticleDesign.DeadBlog) && (
				<SkipTo id={'key-events-carousel'} label="Skip to key events" />
			)}
			<Island clientOnly={true} deferUntil="idle">
				<FetchCommentCounts repeat={true} />
			</Island>
			{format.design === ArticleDesign.LiveBlog && (
				<Island clientOnly={true} deferUntil="idle">
					<AnimatePulsingDots />
				</Island>
			)}
			{renderingTarget === 'Web' && (
				<>
					<SkipTo id="navigation" label="Skip to navigation" />
					<Island clientOnly={true} deferUntil="idle">
						<AlreadyVisited />
					</Island>
					<Island clientOnly={true} deferUntil="idle">
						<Metrics
							commercialMetricsEnabled={
								!!article.config.switches.commercialMetrics
							}
						/>
					</Island>
					<Island clientOnly={true} deferUntil="idle">
						<BrazeMessaging idApiUrl={article.config.idApiUrl} />
					</Island>
					<Island clientOnly={true} deferUntil="idle">
						<ReaderRevenueDev
							shouldHideReaderRevenue={
								article.shouldHideReaderRevenue
							}
						/>
					</Island>
					<Island clientOnly={true}>
						<SetABTests
							abTestSwitches={filterABTestSwitches(
								article.config.switches,
							)}
							pageIsSensitive={article.config.isSensitive}
							isDev={!!article.config.isDev}
						/>
					</Island>
				</>
			)}
			{renderingTarget === 'Apps' ? (
				<DecideLayout
					article={article}
					format={format}
					renderingTarget={renderingTarget}
				/>
			) : (
				<DecideLayout
					article={article}
					NAV={props.NAV}
					format={format}
					renderingTarget={renderingTarget}
				/>
			)}
		</StrictMode>
	);
};
