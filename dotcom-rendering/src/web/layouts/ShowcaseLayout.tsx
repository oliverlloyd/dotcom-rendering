import { css } from '@emotion/react';

import {
	neutral,
	brandBackground,
	brandLine,
	brandBorder,
	labs,
	border,
	from,
	until,
} from '@guardian/source-foundations';
import { ArticleDesign, ArticleSpecial } from '@guardian/libs';
import type { ArticleFormat } from '@guardian/libs';

import {
	Lines,
	StraightLines,
} from '@guardian/source-react-components-development-kitchen';
import { ArticleBody } from '../components/ArticleBody';
import { RightColumn } from '../components/RightColumn';
import { ArticleTitle } from '../components/ArticleTitle';
import { ArticleContainer } from '../components/ArticleContainer';
import { ArticleMeta } from '../components/ArticleMeta';
import { SubMeta } from '../components/SubMeta';
import { MainMedia } from '../components/MainMedia';
import { ArticleHeadline } from '../components/ArticleHeadline';
import { Standfirst } from '../components/Standfirst';
import { Header } from '../components/Header';
import { Footer } from '../components/Footer';
import { SubNav } from '../components/SubNav.importable';
import { ElementContainer } from '../components/ElementContainer';
import { Nav } from '../components/Nav/Nav';
import { HeaderAdSlot } from '../components/HeaderAdSlot';
import { MobileStickyContainer, AdSlot } from '../components/AdSlot';
import { Border } from '../components/Border';
import { GridItem } from '../components/GridItem';
import { DiscussionLayout } from '../components/DiscussionLayout';
import { LabsHeader } from '../components/LabsHeader.importable';

import { buildAdTargeting } from '../../lib/ad-targeting';
import { parse } from '../../lib/slot-machine-flags';
import {
	decideLineCount,
	decideLineEffect,
	getCurrentPillar,
} from '../lib/layoutHelpers';
import { Stuck, SendToBack, BannerWrapper } from './lib/stickiness';
import { Island } from '../components/Island';
import { MostViewedRightWrapper } from '../components/MostViewedRightWrapper.importable';
import { OnwardsLower } from '../components/OnwardsLower.importable';
import { OnwardsUpper } from '../components/OnwardsUpper.importable';
import { MostViewedFooterLayout } from '../components/MostViewedFooterLayout';
import { SlotBodyEnd } from '../components/SlotBodyEnd.importable';
import { StickyBottomBanner } from '../components/StickyBottomBanner.importable';
import { getContributionsServiceUrl } from '../lib/contributions';
import { decidePalette } from '../lib/decidePalette';
import { BslVideoWidget } from '../components/BslVideoWidget.importable';

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
	CAPIArticle: CAPIArticleType;
	NAV: NavType;
	format: ArticleFormat;
}

export const ShowcaseLayout = ({
	CAPIArticle,
	NAV,
	format,
}: Props): JSX.Element => {
	const {
		config: { isPaidContent, host },
	} = CAPIArticle;

	const adTargeting: AdTargeting = buildAdTargeting({
		isAdFreeUser: CAPIArticle.isAdFreeUser,
		isSensitive: CAPIArticle.config.isSensitive,
		videoDuration: CAPIArticle.config.videoDuration,
		edition: CAPIArticle.config.edition,
		section: CAPIArticle.config.section,
		sharedAdTargeting: CAPIArticle.config.sharedAdTargeting,
		adUnit: CAPIArticle.config.adUnit,
	});

	const showBodyEndSlot =
		parse(CAPIArticle.slotMachineFlags || '').showBodyEnd ||
		CAPIArticle.config.switches.slotBodyEnd;

	// TODO:
	// 1) Read 'forceEpic' value from URL parameter and use it to force the slot to render
	// 2) Otherwise, ensure slot only renders if `CAPIArticle.config.shouldHideReaderRevenue` equals false.

	const seriesTag = CAPIArticle.tags.find(
		(tag) => tag.type === 'Series' || tag.type === 'Blog',
	);
	const showOnwardsLower = seriesTag && CAPIArticle.hasStoryPackage;

	const showComments = CAPIArticle.isCommentable;

	const { branding } =
		CAPIArticle.commercialProperties[CAPIArticle.editionId];

	const palette = decidePalette(format);

	const contributionsServiceUrl = getContributionsServiceUrl(CAPIArticle);

	return (
		<>
			{format.theme !== ArticleSpecial.Labs ? (
				<>
					<div>
						<Stuck>
							<ElementContainer
								showTopBorder={false}
								showSideBorders={false}
								padded={false}
								shouldCenter={false}
							>
								<HeaderAdSlot
									isAdFreeUser={CAPIArticle.isAdFreeUser}
									shouldHideAds={CAPIArticle.shouldHideAds}
									display={format.display}
								/>
							</ElementContainer>
						</Stuck>
						<SendToBack>
							<ElementContainer
								showTopBorder={false}
								showSideBorders={false}
								padded={false}
								backgroundColour={brandBackground.primary}
								element="header"
							>
								<Header
									edition={CAPIArticle.editionId}
									idUrl={CAPIArticle.config.idUrl}
									mmaUrl={CAPIArticle.config.mmaUrl}
									discussionApiUrl={
										CAPIArticle.config.discussionApiUrl
									}
									isAnniversary={
										CAPIArticle.config.switches
											.anniversaryHeaderSvg
									}
									urls={
										CAPIArticle.nav.readerRevenueLinks
											.header
									}
									remoteHeader={
										CAPIArticle.config.switches.remoteHeader
									}
									contributionsServiceUrl={
										contributionsServiceUrl
									}
								/>
							</ElementContainer>
							<ElementContainer
								showSideBorders={true}
								borderColour={brandLine.primary}
								showTopBorder={false}
								padded={false}
								backgroundColour={brandBackground.primary}
								element="nav"
							>
								<Nav
									nav={NAV}
									format={{
										...format,
										theme: getCurrentPillar(CAPIArticle),
									}}
									subscribeUrl={
										CAPIArticle.nav.readerRevenueLinks
											.header.subscribe
									}
									edition={CAPIArticle.editionId}
								/>
							</ElementContainer>

							{NAV.subNavSections && (
								<ElementContainer
									backgroundColour={
										palette.background.article
									}
									padded={false}
									element="aside"
								>
									<Island deferUntil="idle">
										<SubNav
											subNavSections={NAV.subNavSections}
											currentNavLink={NAV.currentNavLink}
											format={format}
										/>
									</Island>
								</ElementContainer>
							)}

							<ElementContainer
								backgroundColour={palette.background.article}
								padded={false}
								showTopBorder={false}
							>
								<StraightLines
									count={4}
									cssOverrides={css`
										display: block;
									`}
								/>
							</ElementContainer>
						</SendToBack>
					</div>
				</>
			) : (
				// Else, this is a labs article so just show Nav and the Labs header
				<>
					<div>
						<Stuck zIndex="stickyAdWrapper">
							<ElementContainer
								showTopBorder={false}
								showSideBorders={false}
								padded={false}
							>
								<HeaderAdSlot
									isAdFreeUser={CAPIArticle.isAdFreeUser}
									shouldHideAds={CAPIArticle.shouldHideAds}
									display={format.display}
								/>
							</ElementContainer>
						</Stuck>
						<Stuck zIndex="stickyAdWrapperNav">
							<ElementContainer
								showSideBorders={true}
								borderColour={brandLine.primary}
								showTopBorder={false}
								padded={false}
								backgroundColour={brandBackground.primary}
								element="nav"
							>
								<Nav
									nav={NAV}
									format={{
										...format,
										theme: getCurrentPillar(CAPIArticle),
									}}
									subscribeUrl={
										CAPIArticle.nav.readerRevenueLinks
											.header.subscribe
									}
									edition={CAPIArticle.editionId}
								/>
							</ElementContainer>
						</Stuck>
					</div>
					<Stuck zIndex="stickyAdWrapperLabsHeader">
						<ElementContainer
							showSideBorders={true}
							showTopBorder={false}
							backgroundColour={labs[400]}
							borderColour={border.primary}
							sectionId="labs-header"
						>
							<Island deferUntil="idle">
								<LabsHeader />
							</Island>
						</ElementContainer>
					</Stuck>
				</>
			)}

			<main>
				<ElementContainer
					showTopBorder={false}
					backgroundColour={palette.background.article}
					element="article"
				>
					<ShowcaseGrid>
						<GridItem area="title" element="aside">
							<ArticleTitle
								format={format}
								tags={CAPIArticle.tags}
								sectionLabel={CAPIArticle.sectionLabel}
								sectionUrl={CAPIArticle.sectionUrl}
								guardianBaseURL={CAPIArticle.guardianBaseURL}
								badge={CAPIArticle.badge}
							/>
						</GridItem>
						<GridItem area="border">
							<Border format={format} />
						</GridItem>
						<GridItem area="headline">
							<PositionHeadline design={format.design}>
								<ArticleHeadline
									format={format}
									headlineString={CAPIArticle.headline}
									tags={CAPIArticle.tags}
									byline={CAPIArticle.author.byline}
									webPublicationDateDeprecated={
										CAPIArticle.webPublicationDateDeprecated
									}
									hasStarRating={
										!!CAPIArticle.starRating ||
										CAPIArticle.starRating === 0
									}
								/>
							</PositionHeadline>
						</GridItem>
						<GridItem area="media">
							<div css={mainMediaWrapper}>
								<MainMedia
									format={format}
									elements={CAPIArticle.mainMediaElements}
									adTargeting={adTargeting}
									starRating={
										format.design ===
											ArticleDesign.Review &&
										CAPIArticle.starRating
											? CAPIArticle.starRating
											: undefined
									}
									host={host}
									pageId={CAPIArticle.pageId}
									webTitle={CAPIArticle.webTitle}
									ajaxUrl={CAPIArticle.config.ajaxUrl}
									switches={CAPIArticle.config.switches}
									isAdFreeUser={CAPIArticle.isAdFreeUser}
									isSensitive={CAPIArticle.config.isSensitive}
								/>
							</div>
						</GridItem>
						<GridItem area="standfirst">
							<Standfirst
								format={format}
								standfirst={CAPIArticle.standfirst}
							/>
						</GridItem>
						<GridItem area="lines">
							<div css={maxWidth}>
								<div css={stretchLines}>
									<Lines
										cssOverrides={css`
											display: block;
										`}
										count={decideLineCount(format.design)}
										effect={decideLineEffect(
											format.design,
											format.theme,
										)}
									/>
								</div>
							</div>
						</GridItem>
						<GridItem area="meta" element="aside">
							<div css={maxWidth}>
								<ArticleMeta
									branding={branding}
									format={format}
									pageId={CAPIArticle.pageId}
									webTitle={CAPIArticle.webTitle}
									author={CAPIArticle.author}
									tags={CAPIArticle.tags}
									primaryDateline={
										CAPIArticle.webPublicationDateDisplay
									}
									secondaryDateline={
										CAPIArticle.webPublicationSecondaryDateDisplay
									}
									isCommentable={CAPIArticle.isCommentable}
									discussionApiUrl={
										CAPIArticle.config.discussionApiUrl
									}
									shortUrlId={CAPIArticle.config.shortUrlId}
									ajaxUrl={CAPIArticle.config.ajaxUrl}
									showShareCount={
										CAPIArticle.config.switches
											.serverShareCounts
									}
								/>
							</div>
						</GridItem>
						<GridItem area="body">
							<ArticleContainer
								format={format}
								abTests={CAPIArticle.config.abTests}
							>
								<Island deferUntil="visible" clientOnly={false}>
									<BslVideoWidget
										CAPIArticle={CAPIArticle}
										format={format}
									/>
								</Island>
								<ArticleBody
									format={format}
									blocks={CAPIArticle.blocks}
									adTargeting={adTargeting}
									host={host}
									pageId={CAPIArticle.pageId}
									webTitle={CAPIArticle.webTitle}
									ajaxUrl={CAPIArticle.config.ajaxUrl}
									switches={CAPIArticle.config.switches}
									isSensitive={CAPIArticle.config.isSensitive}
									isAdFreeUser={CAPIArticle.isAdFreeUser}
									section={CAPIArticle.config.section}
									shouldHideReaderRevenue={
										CAPIArticle.shouldHideReaderRevenue
									}
									tags={CAPIArticle.tags}
									isPaidContent={
										!!CAPIArticle.config.isPaidContent
									}
									contributionsServiceUrl={
										contributionsServiceUrl
									}
									contentType={CAPIArticle.contentType}
									sectionName={CAPIArticle.sectionName || ''}
									isPreview={CAPIArticle.config.isPreview}
									idUrl={CAPIArticle.config.idUrl || ''}
									isDev={!!CAPIArticle.config.isDev}
								/>
								{showBodyEndSlot && (
									<Island clientOnly={true}>
										<SlotBodyEnd
											contentType={
												CAPIArticle.contentType
											}
											contributionsServiceUrl={
												contributionsServiceUrl
											}
											idApiUrl={
												CAPIArticle.config.idApiUrl
											}
											isMinuteArticle={
												CAPIArticle.pageType
													.isMinuteArticle
											}
											isPaidContent={
												CAPIArticle.pageType
													.isPaidContent
											}
											keywordsId={
												CAPIArticle.config.keywordIds
											}
											pageId={CAPIArticle.pageId}
											sectionId={
												CAPIArticle.config.section
											}
											sectionName={
												CAPIArticle.sectionName
											}
											shouldHideReaderRevenue={
												CAPIArticle.shouldHideReaderRevenue
											}
											stage={CAPIArticle.config.stage}
											tags={CAPIArticle.tags}
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
										CAPIArticle.subMetaKeywordLinks
									}
									subMetaSectionLinks={
										CAPIArticle.subMetaSectionLinks
									}
									pageId={CAPIArticle.pageId}
									webUrl={CAPIArticle.webURL}
									webTitle={CAPIArticle.webTitle}
									showBottomSocialButtons={
										CAPIArticle.showBottomSocialButtons
									}
									badge={CAPIArticle.badge}
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
									<AdSlot
										position="right"
										display={format.display}
										shouldHideReaderRevenue={
											CAPIArticle.shouldHideReaderRevenue
										}
										isPaidContent={
											CAPIArticle.pageType.isPaidContent
										}
									/>
									{!isPaidContent ? (
										<Island
											clientOnly={true}
											deferUntil="visible"
										>
											<MostViewedRightWrapper
												isAdFreeUser={
													CAPIArticle.isAdFreeUser
												}
											/>
										</Island>
									) : (
										<></>
									)}
								</RightColumn>
							</div>
						</GridItem>
					</ShowcaseGrid>
				</ElementContainer>

				<ElementContainer
					padded={false}
					showTopBorder={false}
					showSideBorders={false}
					backgroundColour={neutral[93]}
					element="aside"
				>
					<AdSlot
						position="merchandising-high"
						display={format.display}
					/>
				</ElementContainer>

				<Island
					clientOnly={true}
					deferUntil="visible"
					placeholderHeight={600}
				>
					<OnwardsUpper
						ajaxUrl={CAPIArticle.config.ajaxUrl}
						hasRelated={CAPIArticle.hasRelated}
						hasStoryPackage={CAPIArticle.hasStoryPackage}
						isAdFreeUser={CAPIArticle.isAdFreeUser}
						pageId={CAPIArticle.pageId}
						isPaidContent={
							CAPIArticle.config.isPaidContent || false
						}
						showRelatedContent={
							CAPIArticle.config.showRelatedContent
						}
						keywordIds={CAPIArticle.config.keywordIds}
						contentType={CAPIArticle.contentType}
						tags={CAPIArticle.tags}
						format={format}
						pillar={format.theme}
						edition={CAPIArticle.editionId}
						shortUrlId={CAPIArticle.config.shortUrlId}
					/>
				</Island>

				{showOnwardsLower && (
					<ElementContainer
						sectionId="onwards-lower"
						element="section"
					>
						<Island clientOnly={true} deferUntil="visible">
							<OnwardsLower
								ajaxUrl={CAPIArticle.config.ajaxUrl}
								hasStoryPackage={CAPIArticle.hasStoryPackage}
								tags={CAPIArticle.tags}
								format={format}
							/>
						</Island>
					</ElementContainer>
				)}

				{!isPaidContent && showComments && (
					<ElementContainer sectionId="comments" element="section">
						<DiscussionLayout
							discussionApiUrl={
								CAPIArticle.config.discussionApiUrl
							}
							shortUrlId={CAPIArticle.config.shortUrlId}
							format={format}
							discussionD2Uid={CAPIArticle.config.discussionD2Uid}
							discussionApiClientHeader={
								CAPIArticle.config.discussionApiClientHeader
							}
							enableDiscussionSwitch={
								CAPIArticle.config.switches
									.enableDiscussionSwitch
							}
							isAdFreeUser={CAPIArticle.isAdFreeUser}
							shouldHideAds={CAPIArticle.shouldHideAds}
						/>
					</ElementContainer>
				)}

				{!isPaidContent && (
					<ElementContainer data-print-layout="hide" element="aside">
						<MostViewedFooterLayout
							format={format}
							sectionName={CAPIArticle.sectionName}
							ajaxUrl={CAPIArticle.config.ajaxUrl}
						/>
					</ElementContainer>
				)}

				<ElementContainer
					padded={false}
					showTopBorder={false}
					showSideBorders={false}
					backgroundColour={neutral[93]}
					element="aside"
				>
					<AdSlot position="merchandising" display={format.display} />
				</ElementContainer>
			</main>

			{NAV.subNavSections && (
				<ElementContainer padded={false} element="aside">
					<Island deferUntil="visible">
						<SubNav
							subNavSections={NAV.subNavSections}
							currentNavLink={NAV.currentNavLink}
							format={format}
						/>
					</Island>
				</ElementContainer>
			)}

			<ElementContainer
				padded={false}
				backgroundColour={brandBackground.primary}
				borderColour={brandBorder.primary}
				showSideBorders={false}
				element="footer"
			>
				<Footer
					pageFooter={CAPIArticle.pageFooter}
					pillar={format.theme}
					pillars={NAV.pillars}
				/>
			</ElementContainer>

			<BannerWrapper>
				<Island deferUntil="idle" clientOnly={true}>
					<StickyBottomBanner
						contentType={CAPIArticle.contentType}
						contributionsServiceUrl={contributionsServiceUrl}
						idApiUrl={CAPIArticle.config.idApiUrl}
						isMinuteArticle={CAPIArticle.pageType.isMinuteArticle}
						isPaidContent={CAPIArticle.pageType.isPaidContent}
						isPreview={!!CAPIArticle.config.isPreview}
						isSensitive={CAPIArticle.config.isSensitive}
						keywordsId={CAPIArticle.config.keywordIds}
						pageId={CAPIArticle.pageId}
						section={CAPIArticle.config.section}
						sectionName={CAPIArticle.sectionName}
						shouldHideReaderRevenue={
							CAPIArticle.shouldHideReaderRevenue
						}
						switches={CAPIArticle.config.switches}
						tags={CAPIArticle.tags}
					/>
				</Island>
			</BannerWrapper>
			<MobileStickyContainer />
		</>
	);
};
