import { ArticleDesign, ArticleDisplay, ArticlePillar } from '@guardian/libs';
import { brandBackground, brandBorder } from '@guardian/source-foundations';
import { Section } from '../Section';
import { Nav } from './Nav';
import { nav } from './Nav.mock';

export default {
	component: Nav,
	title: 'Components/Nav',
};

export const StandardStory = () => {
	return (
		<Section
			fullWidth={true}
			borderColour={brandBorder.primary}
			showTopBorder={false}
			padSides={false}
			backgroundColour={brandBackground.primary}
		>
			<Nav
				format={{
					theme: ArticlePillar.News,
					display: ArticleDisplay.Standard,
					design: ArticleDesign.Standard,
				}}
				nav={nav}
				subscribeUrl=""
				editionId="UK"
				headerTopBarSwitch={false}
				isInEuropeTest={true}
			/>
		</Section>
	);
};
StandardStory.storyName = 'News Highlighted';

export const StandardStoryTopBarHeader = () => {
	return (
		<Section
			fullWidth={true}
			borderColour={brandBorder.primary}
			showTopBorder={false}
			padSides={false}
			backgroundColour={brandBackground.primary}
		>
			<Nav
				format={{
					theme: ArticlePillar.News,
					display: ArticleDisplay.Standard,
					design: ArticleDesign.Standard,
				}}
				nav={nav}
				subscribeUrl=""
				editionId="UK"
				headerTopBarSwitch={true}
				isInEuropeTest={true}
			/>
		</Section>
	);
};
StandardStoryTopBarHeader.storyName = 'News Highlighted';

export const OpinionStory = () => {
	return (
		<Section
			fullWidth={true}
			borderColour={brandBorder.primary}
			showTopBorder={false}
			padSides={false}
			backgroundColour={brandBackground.primary}
		>
			<Nav
				format={{
					theme: ArticlePillar.Opinion,
					display: ArticleDisplay.Standard,
					design: ArticleDesign.Standard,
				}}
				nav={nav}
				subscribeUrl=""
				editionId="UK"
				headerTopBarSwitch={false}
				isInEuropeTest={true}
			/>
		</Section>
	);
};
OpinionStory.storyName = 'Opinion Highlighted';

export const ImmersiveStory = () => {
	return (
		<Section
			fullWidth={true}
			showSideBorders={false}
			borderColour={brandBorder.primary}
			showTopBorder={false}
			padSides={false}
			backgroundColour={brandBackground.primary}
		>
			<Nav
				format={{
					theme: ArticlePillar.News,
					display: ArticleDisplay.Immersive,
					design: ArticleDesign.Standard,
				}}
				nav={nav}
				subscribeUrl=""
				editionId="UK"
				headerTopBarSwitch={false}
				isInEuropeTest={true}
			/>
		</Section>
	);
};
ImmersiveStory.storyName = 'Immersive';
