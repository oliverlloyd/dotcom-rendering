import { css } from '@emotion/react';
import { ArticleDesign, ArticleSpecial } from '@guardian/libs';
import type { ArticleFormat } from '@guardian/libs';
import {
	border,
	brandBackground,
	brandBorder,
	brandLine,
	from,
	labs,
	neutral,
	until,
} from '@guardian/source-foundations';
import { StraightLines } from '@guardian/source-react-components-development-kitchen';
import { buildAdTargeting } from '../../lib/ad-targeting';
import { parse } from '../../lib/slot-machine-flags';
import type { NavType } from '../../model/extract-nav';
import type { FEArticleType } from '../../types/frontend';
import type { RenderingTarget } from '../../types/renderingTarget';
import { AdSlot, MobileStickyContainer } from '../components/AdSlot';
import { ArticleBody } from '../components/ArticleBody';
import { ArticleContainer } from '../components/ArticleContainer';
import { ArticleHeadline } from '../components/ArticleHeadline';
import { ArticleMeta } from '../components/ArticleMeta';
import { ArticleTitle } from '../components/ArticleTitle';
import { Border } from '../components/Border';
import { Carousel } from '../components/Carousel.importable';
import { DecideLines } from '../components/DecideLines';
import { DiscussionLayout } from '../components/DiscussionLayout';
import { Footer } from '../components/Footer';
import { GridItem } from '../components/GridItem';
import { Header } from '../components/Header';
import { HeaderAdSlot } from '../components/HeaderAdSlot';
import { Island } from '../components/Island';
import { LabsHeader } from '../components/LabsHeader.importable';
import { MainMedia } from '../components/MainMedia';
import { MostViewedFooterData } from '../components/MostViewedFooterData.importable';
import { MostViewedFooterLayout } from '../components/MostViewedFooterLayout';
import { MostViewedRightWithAd } from '../components/MostViewedRightWithAd';
import { Nav } from '../components/Nav/Nav';
import { OnwardsUpper } from '../components/OnwardsUpper.importable';
import { RightColumn } from '../components/RightColumn';
import { Section } from '../components/Section';
import { SlotBodyEnd } from '../components/SlotBodyEnd.importable';
import { Standfirst } from '../components/Standfirst';
import { StickyBottomBanner } from '../components/StickyBottomBanner.importable';
import { SubMeta } from '../components/SubMeta';
import { SubNav } from '../components/SubNav.importable';
import { canRenderAds } from '../lib/canRenderAds';
import { getContributionsServiceUrl } from '../lib/contributions';
import { decidePalette } from '../lib/decidePalette';
import { decideTrail } from '../lib/decideTrail';
import { decideLanguage, decideLanguageDirection } from '../lib/lang';
import { getCurrentPillar } from '../lib/layoutHelpers';
import { BannerWrapper, SendToBack, Stuck } from './lib/stickiness';

const ShowcaseGrid = ({ children }: { children: React.ReactNode }) => (
	<div
		css={css`
			/* IE Fallback */
			display: flex;
			flex-direction: column;
			${until.leftCol} {
				margin-left: 0px;
			}
			${from.leftCol} {
				margin-left: 151px;
			}
			${from.wide} {
				margin-left: 230px;
			}

			@supports (display: grid) {
				display: grid;
				width: 100%;
				margin-left: 0;

				grid-column-gap: 10px;

				/*
					Explanation of each unit of grid-template-columns

					Left Column (220 - 1px border)
					Vertical grey border
					Main content
					Right Column
				*/
				${from.wide} {
					grid-template-columns: 219px 1px 1fr 300px;
					grid-template-areas:
						'title  border  headline    headline'
						'lines  border  media       media'
						'meta   border  media       media'
						'meta   border  standfirst  right-column'
						'.      border  body        right-column'
						'.      border  .           right-column';
				}

				${until.wide} {
					grid-template-columns: 140px 1px 1fr 300px;
					grid-template-areas:
						'title  border  headline    headline'
						'lines  border  media       media'
						'meta   border  media       media'
						'meta   border  standfirst  right-column'
						'.      border  body        right-column'
						'.      border  .           right-column';
				}

				/*
					Explanation of each unit of grid-template-columns

					Main content
					Right Column
				*/
				${until.leftCol} {
					grid-template-columns: 1fr 300px;
					grid-template-areas:
						'title      right-column'
						'headline   right-column'
						'standfirst right-column'
						'media      right-column'
						'lines      right-column'
						'meta       right-column'
						'body       right-column'
						'.          right-column';
				}

				${until.desktop} {
					grid-column-gap: 0px;
					grid-template-columns: 1fr; /* Main content */
					grid-template-areas:
						'title'
						'headline'
						'standfirst'
						'media'
						'lines'
						'meta'
						'body';
				}

				${until.tablet} {
					grid-column-gap: 0px;
					grid-template-columns: 1fr; /* Main content */
					grid-template-areas:
						'media'
						'title'
						'headline'
						'standfirst'
						'lines'
						'meta'
						'body';
				}
			}
		`}
	>
		{children}
	</div>
);

const maxWidth = css`
	${from.desktop} {
		max-width: 620px;
	}
`;

const stretchLines = css`
	${until.phablet} {
		margin-left: -20px;
		margin-right: -20px;
	}
	${until.mobileLandscape} {
		margin-left: -10px;
		margin-right: -10px;
	}
`;

const mainMediaWrapper = css`
	position: relative;
`;

const PositionHeadline = ({
	design,
	children,
}: {
	design: ArticleDesign;
	children: React.ReactNode;
}) => {
	switch (design) {
		case ArticleDesign.Interview:
			return (
				<div
					css={css`
						${from.leftCol} {
							margin-bottom: -100px;
						}
					`}
				>
					<div css={maxWidth}>{children}</div>
				</div>
			);
		default:
			return <div css={maxWidth}>{children}</div>;
	}
};

interface Props {
	article: FEArticleType;
	NAV: NavType;
	format: ArticleFormat;
	renderingTarget: RenderingTarget;
}

export const ShowcaseLayout = ({
	article,
	NAV,
	format,
	renderingTarget,
}: Props) => {
	const {
		config: { isPaidContent, host },
	} = article;

	const isInEuropeTest =
		article.config.abTests.europeNetworkFrontVariant === 'variant';

	const adTargeting: AdTargeting = buildAdTargeting({
		isAdFreeUser: article.isAdFreeUser,
		isSensitive: article.config.isSensitive,
		videoDuration: article.config.videoDuration,
		edition: article.config.edition,
		section: article.config.section,
		sharedAdTargeting: article.config.sharedAdTargeting,
		adUnit: article.config.adUnit,
	});

	const showBodyEndSlot =
		parse(article.slotMachineFlags ?? '').showBodyEnd ||
		article.config.switches.slotBodyEnd;

	// TODO:
	// 1) Read 'forceEpic' value from URL parameter and use it to force the slot to render
	// 2) Otherwise, ensure slot only renders if `article.config.shouldHideReaderRevenue` equals false.

	const showComments = article.isCommentable;

	const { branding } = article.commercialProperties[article.editionId];

	const palette = decidePalette(format);

	const contributionsServiceUrl = getContributionsServiceUrl(article);

	const renderAds = canRenderAds(article);

	const isLabs = format.theme === ArticleSpecial.Labs;

	return (
		<>
			{!isLabs ? (
				<>
					<div>
						{renderAds && (
							<Stuck>
								<Section
									fullWidth={true}
									showTopBorder={false}
									showSideBorders={false}
									padSides={false}
									shouldCenter={false}
								>
									<HeaderAdSlot display={format.display} />
								</Section>
							</Stuck>
						)}
						<SendToBack>
							<Section
								fullWidth={true}
								shouldCenter={false}
								showTopBorder={false}
								showSideBorders={false}
								padSides={false}
								backgroundColour={brandBackground.primary}
								element="header"
							>
								<Header
									editionId={article.editionId}
									idUrl={article.config.idUrl}
									mmaUrl={article.config.mmaUrl}
									discussionApiUrl={
										article.config.discussionApiUrl
									}
									urls={article.nav.readerRevenueLinks.header}
									remoteHeader={
										!!article.config.switches.remoteHeader
									}
									contributionsServiceUrl={
										contributionsServiceUrl
									}
									idApiUrl={article.config.idApiUrl}
									isInEuropeTest={isInEuropeTest}
									headerTopBarSearchCapiSwitch={
										!!article.config.switches
											.headerTopBarSearchCapi
									}
								/>
							</Section>
							<Section
								fullWidth={true}
								borderColour={brandLine.primary}
								showTopBorder={false}
								padSides={false}
								backgroundColour={brandBackground.primary}
								element="nav"
							>
								<Nav
									nav={NAV}
									format={{
										...format,
										theme: getCurrentPillar(article),
									}}
									subscribeUrl={
										article.nav.readerRevenueLinks.header
											.subscribe
									}
									editionId={article.editionId}
									headerTopBarSwitch={
										!!article.config.switches.headerTopNav
									}
									isInEuropeTest={isInEuropeTest}
								/>
							</Section>

							{NAV.subNavSections && (
								<Section
									fullWidth={true}
									showTopBorder={false}
									backgroundColour={
										palette.background.article
									}
									borderColour={palette.border.article}
									padSides={false}
									element="aside"
								>
									<Island deferUntil="idle">
										<SubNav
											subNavSections={NAV.subNavSections}
											currentNavLink={NAV.currentNavLink}
											format={format}
										/>
									</Island>
								</Section>
							)}

							<Section
								fullWidth={true}
								backgroundColour={palette.background.article}
								borderColour={palette.border.article}
								padSides={false}
								showTopBorder={false}
							>
								<StraightLines
									count={4}
									cssOverrides={css`
										display: block;
									`}
									color={palette.border.article}
								/>
							</Section>
						</SendToBack>
					</div>
				</>
			) : (
				// Else, this is a labs article so just show Nav and the Labs header
				<>
					<div>
						{renderAds && (
							<Stuck zIndex="stickyAdWrapper">
								<Section
									fullWidth={true}
									showTopBorder={false}
									showSideBorders={false}
									padSides={false}
								>
									<HeaderAdSlot display={format.display} />
								</Section>
							</Stuck>
						)}
						<Stuck zIndex="stickyAdWrapperNav">
							<Section
								fullWidth={true}
								borderColour={brandLine.primary}
								showTopBorder={false}
								padSides={false}
								backgroundColour={brandBackground.primary}
								element="nav"
							>
								<Nav
									nav={NAV}
									format={{
										...format,
										theme: getCurrentPillar(article),
									}}
									subscribeUrl={
										article.nav.readerRevenueLinks.header
											.subscribe
									}
									editionId={article.editionId}
									headerTopBarSwitch={
										!!article.config.switches.headerTopNav
									}
									isInEuropeTest={isInEuropeTest}
								/>
							</Section>
						</Stuck>
					</div>
					<Stuck zIndex="stickyAdWrapperLabsHeader">
						<Section
							fullWidth={true}
							showTopBorder={false}
							backgroundColour={labs[400]}
							borderColour={border.primary}
							sectionId="labs-header"
						>
							<Island deferUntil="idle">
								<LabsHeader />
							</Island>
						</Section>
					</Stuck>
				</>
			)}

			<main
				data-layout="ShowcaseLayout"
				id="maincontent"
				lang={decideLanguage(article.lang)}
				dir={decideLanguageDirection(article.isRightToLeftLang)}
			>
				<Section
					fullWidth={true}
					showTopBorder={false}
					backgroundColour={palette.background.article}
					borderColour={palette.border.article}
					element="article"
				>
					<ShowcaseGrid>
						<GridItem area="media">
							<div css={mainMediaWrapper}>
								<MainMedia
									format={format}
									elements={article.mainMediaElements}
									adTargeting={adTargeting}
									starRating={
										format.design ===
											ArticleDesign.Review &&
										article.starRating !== undefined
											? article.starRating
											: undefined
									}
									host={host}
									pageId={article.pageId}
									webTitle={article.webTitle}
									ajaxUrl={article.config.ajaxUrl}
									switches={article.config.switches}
									isAdFreeUser={article.isAdFreeUser}
									isSensitive={article.config.isSensitive}
								/>
							</div>
						</GridItem>
						<GridItem area="title" element="aside">
							<ArticleTitle
								format={format}
								tags={article.tags}
								sectionLabel={article.sectionLabel}
								sectionUrl={article.sectionUrl}
								guardianBaseURL={article.guardianBaseURL}
								badge={article.badge}
							/>
						</GridItem>
						<GridItem area="border">
							<Border format={format} />
						</GridItem>
						<GridItem area="headline">
							<PositionHeadline design={format.design}>
								<ArticleHeadline
									format={format}
									headlineString={article.headline}
									tags={article.tags}
									byline={article.byline}
									webPublicationDateDeprecated={
										article.webPublicationDateDeprecated
									}
									hasStarRating={
										article.starRating !== undefined
									}
								/>
							</PositionHeadline>
						</GridItem>
						<GridItem area="standfirst">
							<Standfirst
								format={format}
								standfirst={article.standfirst}
							/>
						</GridItem>
						<GridItem area="lines">
							<div css={maxWidth}>
								<div css={stretchLines}>
									<DecideLines
										format={format}
										color={palette.border.article}
									/>
								</div>
							</div>
						</GridItem>
						<GridItem area="meta" element="aside">
							<div css={maxWidth}>
								<ArticleMeta
									branding={branding}
									format={format}
									pageId={article.pageId}
									webTitle={article.webTitle}
									byline={article.byline}
									tags={article.tags}
									primaryDateline={
										article.webPublicationDateDisplay
									}
									secondaryDateline={
										article.webPublicationSecondaryDateDisplay
									}
									isCommentable={article.isCommentable}
									discussionApiUrl={
										article.config.discussionApiUrl
									}
									shortUrlId={article.config.shortUrlId}
									ajaxUrl={article.config.ajaxUrl}
									showShareCount={
										!!article.config.switches
											.serverShareCounts
									}
								/>
							</div>
						</GridItem>
						<GridItem area="body">
							<ArticleContainer format={format}>
								<ArticleBody
									format={format}
									blocks={article.blocks}
									adTargeting={adTargeting}
									host={host}
									pageId={article.pageId}
									webTitle={article.webTitle}
									ajaxUrl={article.config.ajaxUrl}
									switches={article.config.switches}
									isSensitive={article.config.isSensitive}
									isAdFreeUser={article.isAdFreeUser}
									section={article.config.section}
									shouldHideReaderRevenue={
										article.shouldHideReaderRevenue
									}
									tags={article.tags}
									isPaidContent={
										!!article.config.isPaidContent
									}
									contributionsServiceUrl={
										contributionsServiceUrl
									}
									contentType={article.contentType}
									sectionName={article.sectionName ?? ''}
									isPreview={article.config.isPreview}
									idUrl={article.config.idUrl ?? ''}
									isDev={!!article.config.isDev}
									keywordIds={article.config.keywordIds}
									abTests={article.config.abTests}
									tableOfContents={article.tableOfContents}
									lang={article.lang}
									isRightToLeftLang={
										article.isRightToLeftLang
									}
									renderingTarget={renderingTarget}
								/>
								{showBodyEndSlot && (
									<Island clientOnly={true}>
										<SlotBodyEnd
											contentType={article.contentType}
											contributionsServiceUrl={
												contributionsServiceUrl
											}
											idApiUrl={article.config.idApiUrl}
											isMinuteArticle={
												article.pageType.isMinuteArticle
											}
											isPaidContent={
												article.pageType.isPaidContent
											}
											keywordIds={
												article.config.keywordIds
											}
											pageId={article.pageId}
											sectionId={article.config.section}
											sectionName={article.sectionName}
											shouldHideReaderRevenue={
												article.shouldHideReaderRevenue
											}
											stage={article.config.stage}
											tags={article.tags}
										/>
									</Island>
								)}
								<StraightLines
									count={4}
									cssOverrides={css`
										display: block;
									`}
								/>
								<SubMeta
									format={format}
									subMetaKeywordLinks={
										article.subMetaKeywordLinks
									}
									subMetaSectionLinks={
										article.subMetaSectionLinks
									}
									pageId={article.pageId}
									webUrl={article.webURL}
									webTitle={article.webTitle}
									showBottomSocialButtons={
										article.showBottomSocialButtons
									}
									badge={article.badge}
								/>
							</ArticleContainer>
						</GridItem>
						<GridItem area="right-column">
							<div
								css={css`
									padding-top: 6px;
									height: 100%;
									${from.desktop} {
										/* above 980 */
										margin-left: 20px;
										margin-right: -20px;
									}
									${from.leftCol} {
										/* above 1140 */
										margin-left: 0px;
										margin-right: 0px;
									}
								`}
							>
								<RightColumn>
									<MostViewedRightWithAd
										format={format}
										isPaidContent={
											article.pageType.isPaidContent
										}
										renderAds={renderAds}
										shouldHideReaderRevenue={
											article.shouldHideReaderRevenue
										}
									/>
								</RightColumn>
							</div>
						</GridItem>
					</ShowcaseGrid>
				</Section>

				{renderAds && !isLabs && (
					<Section
						fullWidth={true}
						padSides={false}
						showTopBorder={false}
						showSideBorders={false}
						backgroundColour={neutral[93]}
						element="aside"
					>
						<AdSlot
							position="merchandising-high"
							display={format.display}
						/>
					</Section>
				)}

				{article.storyPackage && (
					<Section fullWidth={true}>
						<Island deferUntil="visible">
							<Carousel
								heading={article.storyPackage.heading}
								trails={article.storyPackage.trails.map(
									decideTrail,
								)}
								onwardsSource="more-on-this-story"
								format={format}
							/>
						</Island>
					</Section>
				)}

				<Island
					clientOnly={true}
					deferUntil="visible"
					placeholderHeight={600}
				>
					<OnwardsUpper
						ajaxUrl={article.config.ajaxUrl}
						hasRelated={article.hasRelated}
						hasStoryPackage={article.hasStoryPackage}
						isAdFreeUser={article.isAdFreeUser}
						pageId={article.pageId}
						isPaidContent={!!article.config.isPaidContent}
						showRelatedContent={article.config.showRelatedContent}
						keywordIds={article.config.keywordIds}
						contentType={article.contentType}
						tags={article.tags}
						format={format}
						pillar={format.theme}
						editionId={article.editionId}
						shortUrlId={article.config.shortUrlId}
					/>
				</Island>

				{!isPaidContent && showComments && (
					<Section
						fullWidth={true}
						sectionId="comments"
						element="section"
					>
						<DiscussionLayout
							discussionApiUrl={article.config.discussionApiUrl}
							shortUrlId={article.config.shortUrlId}
							format={format}
							discussionD2Uid={article.config.discussionD2Uid}
							discussionApiClientHeader={
								article.config.discussionApiClientHeader
							}
							enableDiscussionSwitch={
								!!article.config.switches.enableDiscussionSwitch
							}
							isAdFreeUser={article.isAdFreeUser}
							shouldHideAds={article.shouldHideAds}
							idApiUrl={article.config.idApiUrl}
						/>
					</Section>
				)}

				{!isPaidContent && (
					<Section
						title="Most viewed"
						padContent={false}
						verticalMargins={false}
						element="aside"
						data-print-layout="hide"
						data-link-name="most-popular"
						data-component="most-popular"
					>
						<MostViewedFooterLayout>
							<Island clientOnly={true} deferUntil="visible">
								<MostViewedFooterData
									sectionName={article.sectionName}
									format={format}
									ajaxUrl={article.config.ajaxUrl}
									edition={article.editionId}
								/>
							</Island>
						</MostViewedFooterLayout>
					</Section>
				)}

				{renderAds && !isLabs && (
					<Section
						fullWidth={true}
						padSides={false}
						showTopBorder={false}
						showSideBorders={false}
						backgroundColour={neutral[93]}
						element="aside"
					>
						<AdSlot
							position="merchandising"
							display={format.display}
						/>
					</Section>
				)}
			</main>

			{NAV.subNavSections && (
				<Section fullWidth={true} padSides={false} element="aside">
					<Island deferUntil="visible">
						<SubNav
							subNavSections={NAV.subNavSections}
							currentNavLink={NAV.currentNavLink}
							format={format}
						/>
					</Island>
				</Section>
			)}

			<Section
				fullWidth={true}
				padSides={false}
				backgroundColour={brandBackground.primary}
				borderColour={brandBorder.primary}
				showSideBorders={false}
				element="footer"
			>
				<Footer
					pageFooter={article.pageFooter}
					pillar={format.theme}
					pillars={NAV.pillars}
					urls={article.nav.readerRevenueLinks.header}
					editionId={article.editionId}
					contributionsServiceUrl={article.contributionsServiceUrl}
				/>
			</Section>

			<BannerWrapper>
				<Island deferUntil="idle" clientOnly={true}>
					<StickyBottomBanner
						contentType={article.contentType}
						contributionsServiceUrl={contributionsServiceUrl}
						idApiUrl={article.config.idApiUrl}
						isMinuteArticle={article.pageType.isMinuteArticle}
						isPaidContent={article.pageType.isPaidContent}
						isPreview={!!article.config.isPreview}
						isSensitive={article.config.isSensitive}
						keywordIds={article.config.keywordIds}
						pageId={article.pageId}
						section={article.config.section}
						sectionName={article.sectionName}
						shouldHideReaderRevenue={
							article.shouldHideReaderRevenue
						}
						remoteBannerSwitch={
							!!article.config.switches.remoteBanner
						}
						puzzleBannerSwitch={
							!!article.config.switches.puzzlesBanner
						}
						tags={article.tags}
					/>
				</Island>
			</BannerWrapper>
			<MobileStickyContainer />
		</>
	);
};
