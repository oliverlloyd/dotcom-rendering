import {
	ArticleDesign,
	ArticleDisplay,
	ArticlePillar,
	ArticleSpecial,
} from '@guardian/libs';
import { ElementContainer } from './ElementContainer';
import { LinkHeadline } from './LinkHeadline';

export default {
	component: LinkHeadline,
	title: 'Components/LinkHeadline',
};

export const xsmallStory = () => (
	<ElementContainer showTopBorder={false} showSideBorders={false}>
		<LinkHeadline
			headlineText="This is how a large headline link looks"
			format={{
				display: ArticleDisplay.Standard,
				design: ArticleDesign.Standard,
				theme: ArticlePillar.News,
			}}
			size="large"
		/>
	</ElementContainer>
);
xsmallStory.story = { name: 'Size | large' };

export const liveStory = () => (
	<ElementContainer showTopBorder={false} showSideBorders={false}>
		<LinkHeadline
			headlineText="This is how a headline with a live kicker looks"
			format={{
				display: ArticleDisplay.Standard,
				design: ArticleDesign.Standard,
				theme: ArticlePillar.News,
			}}
			kickerText="Live"
		/>
	</ElementContainer>
);
liveStory.story = { name: 'With Live kicker' };

export const noSlash = () => (
	<ElementContainer showTopBorder={false} showSideBorders={false}>
		<LinkHeadline
			headlineText="This is how a headline with no kicker slash looks"
			format={{
				display: ArticleDisplay.Standard,
				design: ArticleDesign.Standard,
				theme: ArticlePillar.News,
			}}
			kickerText="Live"
			showSlash={false}
		/>
	</ElementContainer>
);
noSlash.story = { name: 'With Live kicker but no slash' };

export const pulsingDot = () => (
	<ElementContainer showTopBorder={false} showSideBorders={false}>
		<LinkHeadline
			headlineText="This is how a headline with a pulsing dot looks"
			format={{
				display: ArticleDisplay.Standard,
				design: ArticleDesign.Standard,
				theme: ArticlePillar.News,
			}}
			kickerText="Live"
			showPulsingDot={true}
		/>
	</ElementContainer>
);
pulsingDot.story = { name: 'With pulsing dot' };

export const cultureVariant = () => (
	<ElementContainer showTopBorder={false} showSideBorders={false}>
		<LinkHeadline
			headlineText="This is how a headline with the culture pillar looks"
			format={{
				display: ArticleDisplay.Standard,
				design: ArticleDesign.Standard,
				theme: ArticlePillar.Culture,
			}}
			kickerText="Art and stuff"
		/>
	</ElementContainer>
);
cultureVariant.story = { name: 'With a culture kicker' };

export const opinionxxxsmall = () => (
	<ElementContainer showTopBorder={false} showSideBorders={false}>
		<LinkHeadline
			headlineText="This is how small links to opinion articles look"
			format={{
				display: ArticleDisplay.Standard,
				design: ArticleDesign.Comment,
				theme: ArticlePillar.Opinion,
			}}
			showQuotes={true}
			size="small"
			byline="Comment byline"
		/>
	</ElementContainer>
);
opinionxxxsmall.story = { name: 'Quotes | small' };

export const OpinionKicker = () => (
	<ElementContainer showTopBorder={false} showSideBorders={false}>
		<LinkHeadline
			headlineText="This is how an opinion headline with a kicker looks"
			format={{
				display: ArticleDisplay.Standard,
				design: ArticleDesign.Comment,
				theme: ArticlePillar.Opinion,
			}}
			showQuotes={true}
			kickerText="George Monbiot"
			showSlash={true}
		/>
	</ElementContainer>
);
OpinionKicker.story = { name: 'With an opinion kicker' };

export const SpecialReport = () => (
	<ElementContainer showTopBorder={false} showSideBorders={false}>
		<LinkHeadline
			headlineText="This is how a Special Report headline with a kicker looks"
			format={{
				display: ArticleDisplay.Standard,
				design: ArticleDesign.Comment,
				theme: ArticleSpecial.SpecialReport,
			}}
			showQuotes={true}
			kickerText="Special Report"
			showSlash={true}
		/>
	</ElementContainer>
);
SpecialReport.story = { name: 'when Special Report' };

export const InUnderlinedState = () => (
	<ElementContainer showTopBorder={false} showSideBorders={false}>
		<LinkHeadline
			headlineText="This is the underlined state when showUnderline is true"
			format={{
				display: ArticleDisplay.Standard,
				design: ArticleDesign.Standard,
				theme: ArticlePillar.News,
			}}
			showUnderline={true}
			size="small"
			kickerText="I am never underlined"
			showSlash={true}
			link={{
				to: 'https://www.theguardian.com/us-news/2019/nov/14/nancy-pelosi-trump-ukraine-bribery',
			}}
		/>
	</ElementContainer>
);
InUnderlinedState.story = { name: 'With showUnderline true' };

export const linkStory = () => (
	<ElementContainer showTopBorder={false} showSideBorders={false}>
		<LinkHeadline
			headlineText="This is how a headline looks as a link"
			format={{
				display: ArticleDisplay.Standard,
				design: ArticleDesign.Standard,
				theme: ArticlePillar.Sport,
			}}
			kickerText="I am not a link"
			showSlash={true}
			link={{
				to: 'https://www.theguardian.com/us-news/2019/nov/14/nancy-pelosi-trump-ukraine-bribery',
			}}
		/>
	</ElementContainer>
);
linkStory.story = { name: 'With linkTo provided' };

export const LiveBlogSizes = () => (
	<ElementContainer showTopBorder={false} showSideBorders={false}>
		<LinkHeadline
			headlineText="Revealed: how US and UK spy agencies defeat internet privacy and security"
			format={{
				display: ArticleDisplay.Standard,
				design: ArticleDesign.LiveBlog,
				theme: ArticlePillar.News,
			}}
			showQuotes={true}
			kickerText="Large live"
			showSlash={true}
			showPulsingDot={true}
			size="large"
		/>
		<br />
		<LinkHeadline
			headlineText="Revealed: how US and UK spy agencies defeat internet privacy and security"
			format={{
				display: ArticleDisplay.Standard,
				design: ArticleDesign.LiveBlog,
				theme: ArticlePillar.News,
			}}
			showQuotes={true}
			kickerText="Medium live"
			showSlash={true}
			showPulsingDot={true}
			size="medium"
		/>
		<br />
		<LinkHeadline
			headlineText="Revealed: how US and UK spy agencies defeat internet privacy and security"
			format={{
				display: ArticleDisplay.Standard,
				design: ArticleDesign.LiveBlog,
				theme: ArticlePillar.News,
			}}
			showQuotes={true}
			kickerText="Small live"
			showSlash={true}
			showPulsingDot={true}
			size="small"
		/>
		<br />
		<LinkHeadline
			headlineText="Revealed: how US and UK spy agencies defeat internet privacy and security"
			format={{
				display: ArticleDisplay.Standard,
				design: ArticleDesign.LiveBlog,
				theme: ArticlePillar.News,
			}}
			showQuotes={true}
			kickerText="Tiny live"
			showSlash={true}
			showPulsingDot={true}
			size="tiny"
		/>
	</ElementContainer>
);
LiveBlogSizes.story = { name: 'With various sizes (live)' };

export const DeadBlogSizes = () => (
	<ElementContainer showTopBorder={false} showSideBorders={false}>
		<LinkHeadline
			headlineText="Revealed: how US and UK spy agencies defeat internet privacy and security"
			format={{
				display: ArticleDisplay.Standard,
				design: ArticleDesign.DeadBlog,
				theme: ArticlePillar.News,
			}}
			showQuotes={true}
			kickerText="Large dead"
			showSlash={true}
			showPulsingDot={false}
			size="large"
		/>
		<br />
		<LinkHeadline
			headlineText="Revealed: how US and UK spy agencies defeat internet privacy and security"
			format={{
				display: ArticleDisplay.Standard,
				design: ArticleDesign.DeadBlog,
				theme: ArticlePillar.News,
			}}
			showQuotes={true}
			kickerText="Medium dead"
			showSlash={true}
			showPulsingDot={false}
			size="medium"
		/>
		<br />
		<LinkHeadline
			headlineText="Revealed: how US and UK spy agencies defeat internet privacy and security"
			format={{
				display: ArticleDisplay.Standard,
				design: ArticleDesign.DeadBlog,
				theme: ArticlePillar.News,
			}}
			showQuotes={true}
			kickerText="Small dead"
			showSlash={true}
			showPulsingDot={false}
			size="small"
		/>
		<br />
		<LinkHeadline
			headlineText="Revealed: how US and UK spy agencies defeat internet privacy and security"
			format={{
				display: ArticleDisplay.Standard,
				design: ArticleDesign.DeadBlog,
				theme: ArticlePillar.News,
			}}
			showQuotes={true}
			kickerText="Tiny dead"
			showSlash={true}
			showPulsingDot={false}
			size="tiny"
		/>
	</ElementContainer>
);
DeadBlogSizes.story = { name: 'With various sizes (dead)' };

export const Updated = () => (
	<ElementContainer showTopBorder={false} showSideBorders={false}>
		<LinkHeadline
			headlineText=""
			format={{
				display: ArticleDisplay.Standard,
				design: ArticleDesign.LiveBlog,
				theme: ArticlePillar.News,
			}}
			showPulsingDot={true}
			showSlash={false}
			kickerText="Updated 7m ago"
			size="tiny"
		/>
	</ElementContainer>
);
Updated.story = { name: 'Last updated' };
