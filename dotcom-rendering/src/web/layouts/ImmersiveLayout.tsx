import { css } from 'npm:@emotion/react';
import { ArticleDesign, ArticleSpecial } from 'npm:@guardian/libs';
import type { ArticleFormat } from 'npm:@guardian/libs';
import {
	brandBackground,
	brandBorder,
	from,
	neutral,
	space,
	until,
} from 'npm:@guardian/source-foundations';
import { StraightLines } from 'npm:@guardian/source-react-components-development-kitchen';
import { buildAdTargeting } from '../../lib/ad-targeting.ts';
import { parse } from '../../lib/slot-machine-flags.ts';
import type { NavType } from '../../model/extract-nav.ts';
import type { CAPIArticleType } from '../../types/frontend.ts';
import { AdSlot, MobileStickyContainer } from '../components/AdSlot.ts';
import { ArticleBody } from '../components/ArticleBody.ts';
import { ArticleContainer } from '../components/ArticleContainer.ts';
import { ArticleHeadline } from '../components/ArticleHeadline.ts';
import { ArticleMeta } from '../components/ArticleMeta.ts';
import { ArticleTitle } from '../components/ArticleTitle.ts';
import { Border } from '../components/Border.ts';
import { Caption } from '../components/Caption.ts';
import { Carousel } from '../components/Carousel.importable.ts';
import { DecideLines } from '../components/DecideLines.ts';
import { DecideOnwards } from '../components/DecideOnwards.ts';
import { DiscussionLayout } from '../components/DiscussionLayout.ts';
import { Footer } from '../components/Footer.ts';
import { GridItem } from '../components/GridItem.ts';
import { GuardianLabsLines } from '../components/GuardianLabsLines.ts';
import { HeadlineByline } from '../components/HeadlineByline.ts';
import { Hide } from '../components/Hide.ts';
import { Island } from '../components/Island.ts';
import { MostViewedFooterData } from '../components/MostViewedFooterData.importable.ts';
import { MostViewedFooterLayout } from '../components/MostViewedFooterLayout.ts';
import { OnwardsUpper } from '../components/OnwardsUpper.importable.ts';
import { RightColumn } from '../components/RightColumn.ts';
import { Section } from '../components/Section.ts';
import { SlotBodyEnd } from '../components/SlotBodyEnd.importable.ts';
import { Standfirst } from '../components/Standfirst.ts';
import { StickyBottomBanner } from '../components/StickyBottomBanner.importable.ts';
import { SubMeta } from '../components/SubMeta.ts';
import { SubNav } from '../components/SubNav.importable.ts';
import { getContributionsServiceUrl } from '../lib/contributions.ts';
import { decidePalette } from '../lib/decidePalette.ts';
import { decideTrail } from '../lib/decideTrail.ts';
import { ImmersiveHeader } from './headers/ImmersiveHeader.ts';
import { BannerWrapper } from './lib/stickiness.ts';

const ImmersiveGrid = ({ children }: { children: React.ReactNode }) => (
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

				/*
					Explanation of each unit of grid-template-columns

					Left Column (220 - 1px border)
					Vertical grey border
					Main content
					Right Column
				*/
				${from.wide} {
					grid-column-gap: 10px;
					grid-template-columns: 219px 1px 1fr 300px;
					grid-template-areas:
						'caption    border      title       right-column'
						'.          border      headline    right-column'
						'.          border      standfirst  right-column'
						'.          border      byline      right-column'
						'lines      border      body        right-column'
						'meta       border      body        right-column'
						'meta       border      body        right-column'
						'.          border      body        right-column'
						'.          border      .           right-column';
				}

				/*
					Explanation of each unit of grid-template-columns

					Left Column (220 - 1px border)
					Vertical grey border
					Main content
					Right Column
				*/
				${until.wide} {
					grid-column-gap: 10px;
					grid-template-columns: 140px 1px 1fr 300px;
					grid-template-areas:
						'.          border      title       right-column'
						'.          border      headline    right-column'
						'.          border      standfirst  right-column'
						'.          border      byline      right-column'
						'lines      border      body        right-column'
						'meta       border      body        right-column'
						'meta       border      body        right-column'
						'.          border      body        right-column'
						'.          border      .           right-column';
				}

				/*
					Explanation of each unit of grid-template-columns

					Main content
					Right Column
				*/
				${until.leftCol} {
					grid-template-columns: 1fr 300px;
					grid-column-gap: 20px;
					grid-template-areas:
						'title       right-column'
						'headline    right-column'
						'standfirst  right-column'
						'byline      right-column'
						'caption     right-column'
						'lines       right-column'
						'meta        right-column'
						'body        right-column';
				}

				${until.desktop} {
					grid-column-gap: 0px;
					grid-template-columns: 1fr; /* Main content */
					grid-template-areas:
						'title'
						'headline'
						'standfirst'
						'byline'
						'caption'
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
interface Props {
	CAPIArticle: CAPIArticleType;
	NAV: NavType;
	format: ArticleFormat;
}

const decideCaption = (mainMedia: ImageBlockElement): string => {
	const caption = [];
	// eslint-disable-next-line @typescript-eslint/no-unnecessary-condition -- because sometimes mainMedia isn't an image
	if (mainMedia?.data?.caption) {
		caption.push(mainMedia.data.caption);
	}

	// eslint-disable-next-line @typescript-eslint/no-unnecessary-condition -- because sometimes mainMedia isn't an image
	if (mainMedia?.displayCredit && mainMedia?.data?.credit) {
		caption.push(mainMedia.data.credit);
	}

	return caption.join(' ');
};

export const ImmersiveLayout = ({ CAPIArticle, NAV, format }: Props) => {
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

	const showComments = CAPIArticle.isCommentable;

	const mainMedia = CAPIArticle.mainMediaElements[0] as ImageBlockElement;
	const captionText = decideCaption(mainMedia);
	const { branding } =
		CAPIArticle.commercialProperties[CAPIArticle.editionId];

	const contributionsServiceUrl = getContributionsServiceUrl(CAPIArticle);

	return (
		<>
			<ImmersiveHeader
				CAPIArticle={CAPIArticle}
				NAV={NAV}
				format={format}
			/>
			<main data-layout="ImmersiveLayout">
				<Section
					fullWidth={true}
					showTopBorder={false}
					showSideBorders={false}
					backgroundColour={decidePalette(format).background.article}
					element="article"
				>
					<ImmersiveGrid>
						{/* Above leftCol, the Caption is controlled by Section ^^ */}
						<GridItem area="caption">
							<Hide when="above" breakpoint="leftCol">
								<Caption
									captionText={captionText}
									format={format}
									shouldLimitWidth={false}
								/>
							</Hide>
						</GridItem>
						<GridItem area="border">
							{format.design === ArticleDesign.PhotoEssay ? (
								<></>
							) : (
								<Border format={format} />
							)}
						</GridItem>
						<GridItem area="title" element="aside">
							<>
								{!mainMedia && (
									<div
										css={css`
											margin-top: -8px;
											margin-left: -4px;
											margin-bottom: 12px;

											${until.tablet} {
												margin-left: -20px;
											}
										`}
									>
										<ArticleTitle
											format={format}
											tags={CAPIArticle.tags}
											sectionLabel={
												CAPIArticle.sectionLabel
											}
											sectionUrl={CAPIArticle.sectionUrl}
											guardianBaseURL={
												CAPIArticle.guardianBaseURL
											}
											badge={CAPIArticle.badge}
										/>
									</div>
								)}
							</>
						</GridItem>
						<GridItem area="headline">
							<>
								{!mainMedia && (
									<div css={maxWidth}>
										<ArticleHeadline
											format={format}
											headlineString={
												CAPIArticle.headline
											}
											tags={CAPIArticle.tags}
											byline={CAPIArticle.byline}
											webPublicationDateDeprecated={
												CAPIArticle.webPublicationDateDeprecated
											}
											hasStarRating={
												!!CAPIArticle.starRating ||
												CAPIArticle.starRating === 0
											}
										/>
									</div>
								)}
							</>
						</GridItem>
						<GridItem area="standfirst">
							<Standfirst
								format={format}
								standfirst={CAPIArticle.standfirst}
							/>
						</GridItem>
						<GridItem area="byline">
							{!!CAPIArticle.byline && (
								<HeadlineByline
									format={format}
									tags={CAPIArticle.tags}
									byline={CAPIArticle.byline}
								/>
							)}
						</GridItem>
						<GridItem area="lines">
							{format.design === ArticleDesign.PhotoEssay &&
							format.theme !== ArticleSpecial.Labs ? (
								<></>
							) : (
								<div css={maxWidth}>
									<div css={stretchLines}>
										{format.theme ===
										ArticleSpecial.Labs ? (
											<GuardianLabsLines />
										) : (
											<DecideLines format={format} />
										)}
									</div>
								</div>
							)}
						</GridItem>
						<GridItem area="meta" element="aside">
							<div css={maxWidth}>
								<ArticleMeta
									branding={branding}
									format={format}
									pageId={CAPIArticle.pageId}
									webTitle={CAPIArticle.webTitle}
									byline={CAPIArticle.byline}
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
										!!CAPIArticle.config.switches
											.serverShareCounts
									}
								/>
							</div>
						</GridItem>
						<GridItem area="body">
							<ArticleContainer format={format}>
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
									abTests={CAPIArticle.config.abTests}
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
								<StraightLines count={4} />
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
									<>
										{mainMedia && (
											<div
												css={css`
													margin-top: ${space[4]}px;
												`}
											>
												{!CAPIArticle.shouldHideAds && (
													<AdSlot
														position="right"
														display={format.display}
														shouldHideReaderRevenue={
															CAPIArticle.shouldHideReaderRevenue
														}
														isPaidContent={
															CAPIArticle.pageType
																.isPaidContent
														}
													/>
												)}
											</div>
										)}
									</>
								</RightColumn>
							</div>
						</GridItem>
					</ImmersiveGrid>
				</Section>

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

				{CAPIArticle.onwards ? (
					<DecideOnwards
						onwards={CAPIArticle.onwards}
						format={format}
					/>
				) : (
					<>
						{CAPIArticle.storyPackage && (
							<Section fullWidth={true}>
								<Island deferUntil="visible">
									<Carousel
										heading={
											CAPIArticle.storyPackage.heading
										}
										trails={CAPIArticle.storyPackage.trails.map(
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
								editionId={CAPIArticle.editionId}
								shortUrlId={CAPIArticle.config.shortUrlId}
							/>
						</Island>
					</>
				)}

				{!isPaidContent && showComments && (
					<Section
						fullWidth={true}
						sectionId="comments"
						element="aside"
					>
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
								!!CAPIArticle.config.switches
									.enableDiscussionSwitch
							}
							isAdFreeUser={CAPIArticle.isAdFreeUser}
							shouldHideAds={CAPIArticle.shouldHideAds}
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
									sectionName={CAPIArticle.sectionName}
									format={format}
									ajaxUrl={CAPIArticle.config.ajaxUrl}
								/>
							</Island>
						</MostViewedFooterLayout>
					</Section>
				)}

				<Section
					fullWidth={true}
					padSides={false}
					showTopBorder={false}
					showSideBorders={false}
					backgroundColour={neutral[93]}
					element="aside"
				>
					<AdSlot position="merchandising" display={format.display} />
				</Section>
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
					pageFooter={CAPIArticle.pageFooter}
					pillar={format.theme}
					pillars={NAV.pillars}
					urls={CAPIArticle.nav.readerRevenueLinks.header}
					editionId={CAPIArticle.editionId}
					contributionsServiceUrl={
						CAPIArticle.contributionsServiceUrl
					}
				/>
			</Section>

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
						remoteBannerSwitch={
							!!CAPIArticle.config.switches.remoteBanner
						}
						puzzleBannerSwitch={
							!!CAPIArticle.config.switches.puzzlesBanner
						}
						tags={CAPIArticle.tags}
					/>
				</Island>
			</BannerWrapper>
			<MobileStickyContainer />
		</>
	);
};
