import { css, Global } from '@emotion/react';
import type { ArticleFormat } from '@guardian/libs';
import { ArticleDisplay, ArticleSpecial } from '@guardian/libs';
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
import {
	adCollapseStyles,
	labelStyles as adLabelStyles,
	MobileStickyContainer,
} from '../components/AdSlot';
import { ElementContainer } from '../components/ElementContainer';
import { Footer } from '../components/Footer';
import { Header } from '../components/Header';
import { HeaderAdSlot } from '../components/HeaderAdSlot';
import { Island } from '../components/Island';
import { LabsHeader } from '../components/LabsHeader.importable';
import { Nav } from '../components/Nav/Nav';
import { StickyBottomBanner } from '../components/StickyBottomBanner.importable';
import { SubNav } from '../components/SubNav.importable';
import { decidePalette } from '../lib/decidePalette';
import { getZIndex } from '../lib/getZIndex';
import { getCurrentPillar } from '../lib/layoutHelpers';
import { renderElement } from '../lib/renderElement';
import { interactiveGlobalStyles } from './lib/interactiveLegacyStyling';
import { BannerWrapper, Stuck } from './lib/stickiness';

interface Props {
	CAPIArticle: CAPIArticleType;
	NAV: NavType;
	format: ArticleFormat;
}

const Renderer: React.FC<{
	format: ArticleFormat;
	elements: CAPIElement[];
	host?: string;
	pageId: string;
	webTitle: string;
	ajaxUrl: string;
	isAdFreeUser: boolean;
	isSensitive: boolean;
	switches: { [key: string]: boolean };
}> = ({
	format,
	elements,
	host,
	pageId,
	webTitle,
	ajaxUrl,
	isAdFreeUser,
	isSensitive,
	switches,
}) => {
	// const cleanedElements = elements.map(element =>
	//     'html' in element ? { ...element, html: clean(element.html) } : element,
	// );
	// ^^ Until we decide where to do the "isomorphism split" in this this code is not safe here.
	//    But should be soon.
	const output = elements.map((element, index) => {
		const [ok, el] = renderElement({
			format,

			element,
			adTargeting: undefined,
			host,
			index,
			isMainMedia: false,
			pageId,
			webTitle,
			ajaxUrl,
			isAdFreeUser,
			isSensitive,
			switches,
		});

		if (ok) {
			switch (element._type) {
				// Here we think it makes sense not to wrap every `p` inside a `figure`
				case 'model.dotcomrendering.pageElements.InteractiveBlockElement':
				case 'model.dotcomrendering.pageElements.TextBlockElement':
					return el;

				default:
					return (
						<figure
							id={
								'elementId' in element
									? element.elementId
									: undefined
							}
							key={index}
						>
							{el}
						</figure>
					);
			}
		}

		return null;
	});

	const adStyles = css`
		${adLabelStyles}
		${adCollapseStyles}

		${from.tablet} {
			.mobile-only .ad-slot {
				display: none;
			}
		}
		${until.tablet} {
			.hide-until-tablet .ad-slot {
				display: none;
			}
		}
	`;

	return <div css={adStyles}>{output}</div>;
};

const NavHeader = ({ CAPIArticle, NAV, format }: Props): JSX.Element => {
	// Typically immersives use the slim nav, but this switch is used to force
	// the full nav - typically during special events such as Project 200, or
	// the Euros. The motivation is to better onboard new visitors; interactives
	// often reach readers who are less familiar with the Guardian.
	const isSlimNav = !CAPIArticle.config.switches.interactiveFullHeaderSwitch;

	if (isSlimNav) {
		return (
			<div
				css={css`
					${getZIndex('headerWrapper')}
					order: 0;
				`}
			>
				<ElementContainer
					showSideBorders={true}
					borderColour={brandLine.primary}
					showTopBorder={false}
					padded={false}
					backgroundColour={brandBackground.primary}
					element="nav"
				>
					<Nav
						format={{
							display: format.display,
							design: format.design,
							theme: getCurrentPillar(CAPIArticle),
						}}
						nav={NAV}
						subscribeUrl={
							CAPIArticle.nav.readerRevenueLinks.header.subscribe
						}
						edition={CAPIArticle.editionId}
					/>
				</ElementContainer>
			</div>
		);
	}

	return (
		<section
			/* Note, some interactives require this - e.g. https://www.theguardian.com/environment/ng-interactive/2015/jun/05/carbon-bomb-the-coal-boom-choking-china. */
			css={css`
				${getZIndex('headerWrapper')};
				position: relative;
			`}
		>
			<Stuck>
				<div data-print-layout="hide">
					<ElementContainer
						showTopBorder={false}
						showSideBorders={false}
						padded={false}
						shouldCenter={false}
						element="aside"
					>
						<HeaderAdSlot
							isAdFreeUser={CAPIArticle.isAdFreeUser}
							shouldHideAds={CAPIArticle.shouldHideAds}
							display={format.display}
						/>
					</ElementContainer>
				</div>
			</Stuck>

			{format.theme !== ArticleSpecial.Labs && (
				<div data-print-layout="hide">
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
							supporterCTA={
								CAPIArticle.nav.readerRevenueLinks.header
									.supporter
							}
							discussionApiUrl={
								CAPIArticle.config.discussionApiUrl
							}
							urls={CAPIArticle.nav.readerRevenueLinks.header}
							remoteHeader={
								CAPIArticle.config.switches.remoteHeader
							}
							contributionsServiceUrl={
								CAPIArticle.contributionsServiceUrl
							}
						/>
					</ElementContainer>
				</div>
			)}

			<ElementContainer
				showSideBorders={true}
				borderColour={brandLine.primary}
				showTopBorder={false}
				padded={false}
				backgroundColour={brandBackground.primary}
				element="nav"
			>
				<Nav
					format={{
						display: ArticleDisplay.Standard,
						design: format.design,
						theme: getCurrentPillar(CAPIArticle),
					}}
					nav={NAV}
					subscribeUrl={
						CAPIArticle.nav.readerRevenueLinks.header.subscribe
					}
					edition={CAPIArticle.editionId}
				/>
			</ElementContainer>

			{NAV.subNavSections && format.theme !== ArticleSpecial.Labs && (
				<ElementContainer
					backgroundColour={neutral[100]}
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
		</section>
	);
};

export const FullPageInteractiveLayout = ({
	CAPIArticle,
	NAV,
	format,
}: Props): JSX.Element => {
	const {
		config: { host },
	} = CAPIArticle;

	const palette = decidePalette(format);

	return (
		<>
			{CAPIArticle.isLegacyInteractive && (
				<Global styles={interactiveGlobalStyles} />
			)}
			<header
				css={css`
					background-color: ${palette.background.article};
				`}
			>
				<NavHeader
					CAPIArticle={CAPIArticle}
					NAV={NAV}
					format={format}
				/>

				{format.theme === ArticleSpecial.Labs && (
					<Stuck>
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
				)}
			</header>

			<ElementContainer
				showTopBorder={false}
				showSideBorders={false}
				shouldCenter={false}
				padded={false}
				backgroundColour={palette.background.article}
				element="main"
			>
				<article>
					<Renderer
						format={format}
						elements={
							CAPIArticle.blocks[0]
								? CAPIArticle.blocks[0].elements
								: []
						}
						host={host}
						pageId={CAPIArticle.pageId}
						webTitle={CAPIArticle.webTitle}
						ajaxUrl={CAPIArticle.config.ajaxUrl}
						switches={CAPIArticle.config.switches}
						isAdFreeUser={CAPIArticle.isAdFreeUser}
						isSensitive={CAPIArticle.config.isSensitive}
					/>
				</article>
			</ElementContainer>

			{NAV.subNavSections && (
				<ElementContainer
					padded={false}
					backgroundColour={neutral[100]}
					element="aside"
				>
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
					urls={CAPIArticle.nav.readerRevenueLinks.header}
					edition={CAPIArticle.editionId}
					contributionsServiceUrl={
						CAPIArticle.contributionsServiceUrl
					}
				/>
			</ElementContainer>

			<BannerWrapper>
				<Island deferUntil="idle" clientOnly={true}>
					<StickyBottomBanner
						contentType={CAPIArticle.contentType}
						contributionsServiceUrl={
							CAPIArticle.contributionsServiceUrl
						}
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
							CAPIArticle.config.switches.remoteBanner
						}
						puzzleBannerSwitch={
							CAPIArticle.config.switches.puzzlesBanner
						}
						tags={CAPIArticle.tags}
					/>
				</Island>
			</BannerWrapper>
			<MobileStickyContainer />
		</>
	);
};
