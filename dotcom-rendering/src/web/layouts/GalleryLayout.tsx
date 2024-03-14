import { css } from '@emotion/react';
import type { SerializedStyles } from '@emotion/react';
import { ArticleDesign, ArticleSpecial } from '@guardian/libs';
import type { ArticleFormat } from '@guardian/libs';
import {
	border,
	brandBackground,
	brandBorder,
	from,
	labs,
	neutral,
	until,
} from '@guardian/source-foundations';
import { StraightLines } from '@guardian/source-react-components-development-kitchen';
import { buildAdTargeting } from '../../lib/ad-targeting';
import { parse } from '../../lib/slot-machine-flags';
import type { NavType } from '../../model/extract-nav';
import type { FEElement } from '../../types/content';
import type { FEArticleType } from '../../types/frontend';
import type { Palette } from '../../types/palette';
import type { RenderingTarget } from '../../types/renderingTarget';
import { AdSlot, MobileStickyContainer } from '../components/AdSlot';
import { ArticleHeadline } from '../components/ArticleHeadline';
import { ArticleMeta } from '../components/ArticleMeta';
import { ArticleTitle } from '../components/ArticleTitle';
import { Caption } from '../components/Caption';
import { Carousel } from '../components/Carousel.importable';
import { DiscussionLayout } from '../components/DiscussionLayout';
import { Footer } from '../components/Footer';
import { HeadlineByline } from '../components/HeadlineByline';
import { Hide } from '../components/Hide';
import { ImageBlockComponent } from '../components/ImageBlockComponent';
import { Island } from '../components/Island';
import { LabsHeader } from '../components/LabsHeader.importable';
import { MainMedia } from '../components/MainMedia';
import { MostViewedFooterData } from '../components/MostViewedFooterData.importable';
import { MostViewedFooterLayout } from '../components/MostViewedFooterLayout';
import { minNavHeight, Nav } from '../components/Nav/Nav';
import { OnwardsUpper } from '../components/OnwardsUpper.importable';
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
import { getZIndex } from '../lib/getZIndex';
import { LABS_HEADER_HEIGHT } from '../lib/labs-constants';
import { getCurrentPillar } from '../lib/layoutHelpers';
import { BannerWrapper, Stuck } from './lib/stickiness';

const maxWidth = css`
	${from.desktop} {
		max-width: 620px;
	}
`;

interface Props {
	article: FEArticleType;
	NAV: NavType;
	format: ArticleFormat;
	renderingTarget: RenderingTarget;
}

const decideCaption = (mainMedia: FEElement | undefined): string => {
	const caption = [];

	if (
		mainMedia?._type ===
		'model.dotcomrendering.pageElements.ImageBlockElement'
	) {
		if (mainMedia.data.caption) {
			caption.push(mainMedia.data.caption);
		}

		if (mainMedia.displayCredit && mainMedia.data.credit) {
			caption.push(mainMedia.data.credit);
		}
	}

	return caption.join(' ');
};

const Box = ({
	palette,
	children,
}: {
	palette: Palette;
	children: React.ReactNode;
}) => (
	<div
		css={css`
			/*
				This pseudo css shows a black box to the right of the headline
				so that the black background of the inverted text stretches
				all the way right. But only from mobileLandscape because below
				that we want to show a gap. To work properly it needs to wrap
				the headline so it inherits the correct height based on the length
				of the headline text
			*/
			${from.mobileLandscape} {
				position: relative;
				:after {
					content: '';
					display: block;
					position: absolute;
					width: 50%;
					right: 0;
					background-color: ${palette.background.headline};
					${getZIndex('immersiveBlackBox')}
					top: 0;
					bottom: 0;
				}
			}
		`}
	>
		{children}
	</div>
);

export const GalleryLayout = ({
	article,
	NAV,
	format,
	renderingTarget,
}: Props) => {
	const {
		config: { isPaidContent, host },
	} = article;

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

	const showComments = article.isCommentable;

	const mainMedia = article.mainMediaElements[0];

	const captionText = decideCaption(mainMedia);
	const HEADLINE_OFFSET = mainMedia ? 120 : 0;
	const { branding } = article.commercialProperties[article.editionId];

	const contributionsServiceUrl = getContributionsServiceUrl(article);

	const palette = decidePalette(format);

	const isLabs = format.theme === ArticleSpecial.Labs;

	const isInEuropeTest =
		article.config.abTests.europeNetworkFrontVariant === 'variant';

	/**
	We need change the height values depending on whether the labs header is there or not to keep
	the headlines appearing at a consistent height between labs and non labs immersive articles.
	*/

	const labsHeaderHeight = LABS_HEADER_HEIGHT;
	const navHeightCSS: SerializedStyles = minNavHeight;
	const navHeight = parseInt(navHeightCSS.styles.slice(11, -2));
	const combinedHeight = (navHeight + labsHeaderHeight).toString();

	const navAndLabsHeaderHeight = isLabs
		? `${combinedHeight}px`
		: `${navHeight}px`;

	const hasMainMediaStyles = css`
		height: calc(80vh - ${navAndLabsHeaderHeight});
		/**
		80vh is normally enough but don't let the content shrink vertically too
		much just in case
		*/
		min-height: calc(25rem - ${navAndLabsHeaderHeight});
		${from.desktop} {
			height: calc(100vh - ${navAndLabsHeaderHeight});
			min-height: calc(31.25rem - ${navAndLabsHeaderHeight});
		}
		${from.wide} {
			min-height: calc(50rem - ${navAndLabsHeaderHeight});
		}
	`;

	const LeftColCaption = () => (
		<div
			css={css`
				margin-top: ${HEADLINE_OFFSET}px;
				position: absolute;
				margin-left: 20px;
			`}
		>
			<Caption
				captionText={captionText}
				format={format}
				shouldLimitWidth={true}
				isLeftCol={true}
			/>
		</div>
	);

	const renderAds = canRenderAds(article);

	const allImages = article.blocks
		.flatMap((block) => {
			return block.elements.map((bodyElement) => {
				if (
					bodyElement._type ===
					'model.dotcomrendering.pageElements.ImageBlockElement'
				) {
					return bodyElement;
				}
				return false;
			});
		})
		.filter(Boolean);

	return (
		<>
			<div
				css={css`
					${getZIndex('headerWrapper')}
					order: 0;
				`}
			>
				<Section
					fullWidth={true}
					showSideBorders={false}
					showTopBorder={false}
					padSides={false}
					backgroundColour={brandBackground.primary}
					element="nav"
				>
					<Nav
						format={{
							...format,
							theme: getCurrentPillar(article),
						}}
						nav={NAV}
						subscribeUrl={
							article.nav.readerRevenueLinks.header.contribute
						}
						editionId={article.editionId}
						headerTopBarSwitch={
							!!article.config.switches.headerTopNav
						}
						isInEuropeTest={isInEuropeTest}
					/>
				</Section>
			</div>

			{format.theme === ArticleSpecial.Labs && (
				<Stuck>
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
			)}

			<header
				css={css`
					background-color: ${palette.background.article};
				`}
			>
				<div
					css={[
						mainMedia && hasMainMediaStyles,
						css`
							display: flex;
							flex-direction: column;
						`,
					]}
				>
					<MainMedia
						format={format}
						elements={article.mainMediaElements}
						adTargeting={adTargeting}
						starRating={
							format.design === ArticleDesign.Review &&
							article.starRating !== undefined
								? article.starRating
								: undefined
						}
						host={host}
						hideCaption={true}
						pageId={article.pageId}
						webTitle={article.webTitle}
						ajaxUrl={article.config.ajaxUrl}
						switches={article.config.switches}
						isAdFreeUser={article.isAdFreeUser}
						isSensitive={article.config.isSensitive}
					/>
				</div>
				{mainMedia && (
					<>
						<div
							css={css`
								margin-top: -${HEADLINE_OFFSET}px;
								/*
                        This z-index is what ensures the headline title text shows above main media. For
                        the actual headline we set the z-index deeper in ArticleHeadline itself so that
                        the text appears above the pseudo Box element
                    */
								position: relative;
								${getZIndex('articleHeadline')};
							`}
						>
							<Section
								verticalMargins={false}
								padContent={false}
								showTopBorder={false}
								padSides={false}
								showSideBorders={false}
								leftContent={<LeftColCaption />}
							>
								<ArticleTitle
									format={format}
									tags={article.tags}
									sectionLabel={article.sectionLabel}
									sectionUrl={article.sectionUrl}
									guardianBaseURL={article.guardianBaseURL}
									badge={article.badge}
								/>
							</Section>
							<Box palette={palette}>
								<Section
									verticalMargins={false}
									padContent={false}
									padSides={false}
									showTopBorder={false}
									showSideBorders={false}
								>
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
								</Section>
							</Box>
						</div>
					</>
				)}
			</header>

			<main data-layout="GalleryLayout">
				<Section
					centralBorder="full"
					backgroundColour={palette.background.article}
					borderColour={palette.border.article}
					showTopBorder={false}
					showSideBorders={false}
				>
					<Hide when="above" breakpoint="leftCol">
						<Caption
							captionText={captionText}
							format={format}
							shouldLimitWidth={false}
						/>
					</Hide>
					{!mainMedia && (
						<>
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
									tags={article.tags}
									sectionLabel={article.sectionLabel}
									sectionUrl={article.sectionUrl}
									guardianBaseURL={article.guardianBaseURL}
									badge={article.badge}
								/>
							</div>
							<div css={maxWidth}>
								<ArticleHeadline
									format={format}
									headlineString={article.headline}
									tags={article.tags}
									byline={article.byline}
									webPublicationDateDeprecated={
										article.webPublicationDateDeprecated
									}
									hasStarRating={
										typeof article.starRating === 'number'
									}
								/>
							</div>
						</>
					)}
					<Standfirst
						format={format}
						standfirst={article.standfirst}
					/>
					{!!article.byline && (
						<HeadlineByline
							format={format}
							tags={article.tags}
							byline={article.byline}
						/>
					)}
					<div css={maxWidth}>
						<ArticleMeta
							branding={branding}
							format={format}
							pageId={article.pageId}
							webTitle={article.webTitle}
							byline={article.byline}
							tags={article.tags}
							primaryDateline={article.webPublicationDateDisplay}
							secondaryDateline={
								article.webPublicationSecondaryDateDisplay
							}
							isCommentable={article.isCommentable}
							discussionApiUrl={article.config.discussionApiUrl}
							shortUrlId={article.config.shortUrlId}
							ajaxUrl={article.config.ajaxUrl}
							showShareCount={
								!!article.config.switches.serverShareCounts
							}
						/>
					</div>
				</Section>

				{allImages.map((image, index) => {
					if (image === false) return <></>;
					return (
						<Section
							centralBorder="full"
							showTopBorder={index === 0}
							stretchRight={true}
							backgroundColour={palette.background.article}
							borderColour={palette.border.article}
							key={image.elementId}
							leftContent={
								<Caption
									captionText={decideCaption(image)}
									format={format}
									shouldLimitWidth={true}
									isLeftCol={true}
								/>
							}
						>
							<ImageBlockComponent
								format={format}
								element={{ ...image, role: 'immersive' }}
								hideCaption={true}
								isMainMedia={false}
								title={image.title}
								isAvatar={false}
							/>
							<Hide when="above" breakpoint="leftCol">
								<Caption
									captionText={decideCaption(image)}
									format={format}
									isLeftCol={false}
								/>
							</Hide>
						</Section>
					);
				})}

				<Section
					stretchRight={true}
					centralBorder="full"
					showTopBorder={false}
					backgroundColour={palette.background.article}
					borderColour={palette.border.article}
					key="ff"
				>
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
								isPaidContent={article.pageType.isPaidContent}
								keywordIds={article.config.keywordIds}
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
					<StraightLines count={4} color={palette.border.article} />
					<SubMeta
						format={format}
						subMetaKeywordLinks={article.subMetaKeywordLinks}
						subMetaSectionLinks={article.subMetaSectionLinks}
						pageId={article.pageId}
						webUrl={article.webURL}
						webTitle={article.webTitle}
						showBottomSocialButtons={
							article.showBottomSocialButtons
						}
						badge={article.badge}
					/>
				</Section>

				{!isLabs && renderAds && (
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
						isPaidContent={article.config.isPaidContent ?? false}
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
						element="aside"
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
				{!isLabs && renderAds && (
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
			{renderAds && <MobileStickyContainer />}
		</>
	);
};
