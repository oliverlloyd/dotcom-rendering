import { css } from 'npm:@emotion/react';
import { ArticleDesign, ArticleDisplay, ArticlePillar } from 'npm:@guardian/libs';
import {
	brandBackground,
	brandBorder,
	brandLine,
	neutral,
} from 'npm:@guardian/source-foundations';
import { StraightLines } from 'npm:@guardian/source-react-components-development-kitchen';
import type { NavType } from '../../model/extract-nav.ts';
import type { DCRFrontType } from '../../types/front.ts';
import { AdSlot } from '../components/AdSlot.tsx';
import { Footer } from '../components/Footer.tsx';
import { Header } from '../components/Header.tsx';
import { HeaderAdSlot } from '../components/HeaderAdSlot.tsx';
import { Island } from '../components/Island.tsx';
import { MostViewedFooter } from '../components/MostViewedFooter.tsx';
import { MostViewedFooterLayout } from '../components/MostViewedFooterLayout.tsx';
import { Nav } from '../components/Nav/Nav.tsx';
import { Section } from '../components/Section.tsx';
import { Snap } from '../components/Snap.tsx';
import { SubNav } from '../components/SubNav.importable.tsx';
import { DecideContainer } from '../lib/DecideContainer.tsx';
import { decidePalette } from '../lib/decidePalette.ts';
import { Stuck } from './lib/stickiness.tsx';

interface Props {
	front: DCRFrontType;
	NAV: NavType;
}

const spaces = / /g;
/** TODO: Confirm with is a valid way to generate component IDs. */
const ophanComponentId = (name: string) =>
	name.toLowerCase().replace(spaces, '-');

export const FrontLayout = ({ front, NAV }: Props) => {
	const {
		config: { isPaidContent },
	} = front;

	const format = {
		display: ArticleDisplay.Standard,
		design: ArticleDesign.Standard,
		theme: ArticlePillar.News,
	};

	const palette = decidePalette(format);

	// const contributionsServiceUrl = getContributionsServiceUrl(front);

	/**
	 * This property currently only applies to the header and merchandising slots
	 */
	const renderAds = !front.isAdFreeUser;

	return (
		<>
			<div data-print-layout="hide" id="bannerandheader">
				<>
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

					<Section
						fullWidth={true}
						showTopBorder={false}
						showSideBorders={false}
						padSides={false}
						backgroundColour={brandBackground.primary}
						element="header"
					>
						<Header
							editionId={front.editionId}
							idUrl={front.config.idUrl}
							mmaUrl={front.config.mmaUrl}
							supporterCTA={
								front.nav.readerRevenueLinks.header.supporter
							}
							discussionApiUrl={front.config.discussionApiUrl}
							urls={front.nav.readerRevenueLinks.header}
							remoteHeader={!!front.config.switches.remoteHeader}
							contributionsServiceUrl="https://contributions.guardianapis.com" // TODO: Pass this in
							idApiUrl="https://idapi.theguardian.com/" // TODO: read this from somewhere as in other layouts
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
							format={format}
							subscribeUrl={
								front.nav.readerRevenueLinks.header.subscribe
							}
							editionId={front.editionId}
						/>
					</Section>
					{NAV.subNavSections && (
						<>
							<Section
								fullWidth={true}
								showTopBorder={false}
								backgroundColour={palette.background.article}
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
							<Section
								fullWidth={true}
								backgroundColour={palette.background.article}
								padSides={false}
								showTopBorder={false}
							>
								<StraightLines
									cssOverrides={css`
										display: block;
									`}
									count={4}
								/>
							</Section>
						</>
					)}
				</>
			</div>

			<main data-layout="FrontLayout">
				{front.pressedPage.collections.map((collection, index) => {
					// Backfills should be added to the end of any curated content
					const trails = collection.curated.concat(
						collection.backfill,
					);
					// There are some containers that have zero trails. We don't want to render these
					if (trails.length === 0) return null;

					const ophanName = ophanComponentId(collection.displayName);
					const ophanComponentLink = `container-${index} | ${ophanName}`;

					if (collection.collectionType === 'fixed/thrasher') {
						return (
							<Section
								fullWidth={true}
								padSides={false}
								padBottom={true}
								showTopBorder={false}
								showSideBorders={true}
								ophanComponentLink={ophanComponentLink}
								ophanComponentName={ophanName}
								containerName={collection.collectionType}
							>
								<Snap snapData={trails[0].snapData} />
							</Section>
						);
					}

					if (
						collection.collectionType === 'news/most-popular' &&
						!isPaidContent &&
						front.config.switches.mostViewedFronts
					) {
						return (
							<Section
								key={collection.id}
								title="Most viewed"
								showTopBorder={index > 0}
								padContent={false}
								verticalMargins={false}
								url={collection.href}
								ophanComponentLink={ophanComponentLink}
								ophanComponentName={ophanName}
								containerName={collection.collectionType}
								containerPalette={collection.containerPalette}
								sectionId={collection.id}
								showDateHeader={
									collection.config.showDateHeader
								}
								editionId={front.editionId}
								treats={collection.treats}
								data-print-layout="hide"
								element="aside"
							>
								<MostViewedFooterLayout>
									<MostViewedFooter
										tabs={[
											{
												trails: trails.slice(10),
											},
										]}
										sectionName="Most viewed"
										// TODO: Include mostCommented & mostShared once we have this data in the FE response
									/>
								</MostViewedFooterLayout>
							</Section>
						);
					}

					return (
						<Section
							key={collection.id}
							title={collection.displayName}
							showTopBorder={index > 0}
							padContent={false}
							centralBorder="partial"
							url={collection.href}
							ophanComponentLink={ophanComponentLink}
							ophanComponentName={ophanName}
							containerName={collection.collectionType}
							containerPalette={collection.containerPalette}
							toggleable={true}
							sectionId={collection.id}
							showDateHeader={collection.config.showDateHeader}
							editionId={front.editionId}
							treats={collection.treats}
						>
							<DecideContainer
								trails={trails}
								index={index}
								groupedTrails={collection.grouped}
								containerType={collection.collectionType}
								containerPalette={collection.containerPalette}
								showAge={collection.displayName === 'Headlines'}
							/>
						</Section>
					);
				})}
			</main>

			<Section
				fullWidth={true}
				data-print-layout="hide"
				padSides={false}
				showTopBorder={false}
				showSideBorders={false}
				backgroundColour={neutral[93]}
				element="aside"
			>
				<AdSlot position="merchandising" display={format.display} />
			</Section>

			{NAV.subNavSections && (
				<Section
					fullWidth={true}
					showTopBorder={false}
					data-print-layout="hide"
					padSides={false}
					element="aside"
				>
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
				data-print-layout="hide"
				padSides={false}
				backgroundColour={brandBackground.primary}
				borderColour={brandBorder.primary}
				showSideBorders={false}
				showTopBorder={false}
				element="footer"
			>
				<Footer
					pageFooter={front.pageFooter}
					pillar={format.theme}
					pillars={NAV.pillars}
					urls={front.nav.readerRevenueLinks.header}
					editionId={front.editionId}
					contributionsServiceUrl="https://contributions.guardianapis.com" // TODO: Pass this in
				/>
			</Section>
		</>
	);
};
