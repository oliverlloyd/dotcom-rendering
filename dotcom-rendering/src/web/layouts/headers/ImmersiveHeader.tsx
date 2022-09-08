import { css } from 'npm:@emotion/react';
import { ArticleDesign, ArticleSpecial } from 'npm:@guardian/libs';
import type { ArticleFormat } from 'npm:@guardian/libs';
import {
	border,
	brandBackground,
	from,
	labs,
} from 'npm:@guardian/source-foundations';
import { buildAdTargeting } from '../../../lib/ad-targeting.ts';
import type { NavType } from '../../../model/extract-nav.ts';
import type { CAPIArticleType } from '../../../types/frontend.ts';
import type { Palette } from '../../../types/palette.ts';
import { ArticleHeadline } from '../../components/ArticleHeadline.ts';
import { ArticleTitle } from '../../components/ArticleTitle.ts';
import { Caption } from '../../components/Caption.ts';
import { Section } from '../../components/Section.ts';
import { Island } from '../../components/Island.ts';
import { LabsHeader } from '../../components/LabsHeader.importable.ts';
import { MainMedia } from '../../components/MainMedia.ts';
import { Nav } from '../../components/Nav/Nav.ts';
import { decidePalette } from '../../lib/decidePalette.ts';
import { getZIndex } from '../../lib/getZIndex.ts';
import { getCurrentPillar } from '../../lib/layoutHelpers.ts';
import { Stuck } from '../lib/stickiness.ts';

const hasMainMediaStyles = css`
	height: 80vh;
	/**
    80vh is normally enough but don't let the content shrink vertically too
    much just in case
    */
	min-height: 25rem;
	${from.desktop} {
		height: 100vh;
		min-height: 31.25rem;
	}
	${from.wide} {
		min-height: 50rem;
	}
`;

interface Props {
	CAPIArticle: CAPIArticleType;
	NAV: NavType;
	format: ArticleFormat;
}

const decideCaption = (mainMedia: ImageBlockElement): string => {
	const caption = [];
	if (mainMedia && mainMedia.data && mainMedia.data.caption)
		caption.push(mainMedia.data.caption);
	if (
		mainMedia &&
		mainMedia.displayCredit &&
		mainMedia.data &&
		mainMedia.data.credit
	)
		caption.push(mainMedia.data.credit);
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
				the healine so it inherits the correct height based on the length
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

export const ImmersiveHeader = ({ CAPIArticle, NAV, format }: Props) => {
	const {
		config: { host },
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

	// TODO:
	// 1) Read 'forceEpic' value from URL parameter and use it to force the slot to render
	// 2) Otherwise, ensure slot only renders if `CAPIArticle.config.shouldHideReaderRevenue` equals false.

	const mainMedia = CAPIArticle.mainMediaElements[0] as ImageBlockElement;
	const captionText = decideCaption(mainMedia);

	const HEADLINE_OFFSET = mainMedia ? 120 : 0;

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

	const palette = decidePalette(format);

	return (
		<>
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
									theme: getCurrentPillar(CAPIArticle),
								}}
								nav={NAV}
								subscribeUrl={
									CAPIArticle.nav.readerRevenueLinks.header
										.subscribe
								}
								editionId={CAPIArticle.editionId}
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

					<MainMedia
						format={format}
						elements={CAPIArticle.mainMediaElements}
						adTargeting={adTargeting}
						starRating={
							format.design === ArticleDesign.Review &&
							CAPIArticle.starRating
								? CAPIArticle.starRating
								: undefined
						}
						host={host}
						hideCaption={true}
						pageId={CAPIArticle.pageId}
						webTitle={CAPIArticle.webTitle}
						ajaxUrl={CAPIArticle.config.ajaxUrl}
						switches={CAPIArticle.config.switches}
						isAdFreeUser={CAPIArticle.isAdFreeUser}
						isSensitive={CAPIArticle.config.isSensitive}
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
									tags={CAPIArticle.tags}
									sectionLabel={CAPIArticle.sectionLabel}
									sectionUrl={CAPIArticle.sectionUrl}
									guardianBaseURL={
										CAPIArticle.guardianBaseURL
									}
									badge={CAPIArticle.badge}
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
										headlineString={CAPIArticle.headline}
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
								</Section>
							</Box>
						</div>
					</>
				)}
			</header>
		</>
	);
};
