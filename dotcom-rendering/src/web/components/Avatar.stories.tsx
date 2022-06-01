import {
	ArticleDesign,
	ArticleDisplay,
	ArticlePillar,
	ArticleSpecial,
} from '@guardian/libs';
import type { ArticleFormat } from '@guardian/libs';
import { Avatar } from './Avatar';

export default {
	component: Avatar,
	title: 'Components/Avatar',
};

const imageSrc173 =
	'https://i.guim.co.uk/img/uploads/2017/10/06/George-Monbiot,-L.png?width=173&quality=85&auto=format&fit=max&s=be5b0d3f3aa55682e4930057fc3929a3';
const imageSrc300 =
	'https://i.guim.co.uk/img/uploads/2017/10/06/Leah-Harper,-L.png?width=300&quality=85&auto=format&fit=max&s=4530b8769ac9f0b655d77a155ea13852';
const imageSrc300Sport =
	'https://i.guim.co.uk/img/uploads/2018/05/25/Sid_Lowe,_L.png?width=300&quality=85&auto=format&fit=max&s=4e058df05bd09dd029abe3d23bddb27c';

const format: ArticleFormat = {
	theme: ArticlePillar.News,
	design: ArticleDesign.Standard,
	display: ArticleDisplay.Standard,
};

export const defaultStory = () => (
	<div style={{ width: '136px', height: '136px' }}>
		<Avatar
			imageSrc={imageSrc173}
			imageAlt="The alt of the image"
			format={{
				...format,
				theme: ArticlePillar.Opinion,
			}}
		/>
	</div>
);
defaultStory.story = { name: 'Medium, Opinion (Rich Links)' };

export const largeStory = () => (
	<div style={{ width: '140px', height: '140px' }}>
		<Avatar
			imageSrc={imageSrc300}
			imageAlt="The alt of the image"
			format={{
				...format,
				theme: ArticlePillar.Lifestyle,
			}}
		/>
	</div>
);
largeStory.story = { name: 'Large, Lifestyle (Byline image - Desktop)' };

export const largeStoryNews = () => (
	<div style={{ width: '140px', height: '140px' }}>
		<Avatar
			imageSrc={imageSrc300}
			imageAlt="The alt of the image"
			format={format}
		/>
	</div>
);
largeStoryNews.story = { name: 'Large, News (Byline image - Desktop)' };

export const largeStoryCulture = () => (
	<div style={{ width: '140px', height: '140px' }}>
		<Avatar
			imageSrc={imageSrc300}
			imageAlt="The alt of the image"
			format={{
				...format,
				theme: ArticlePillar.Culture,
			}}
		/>
	</div>
);
largeStoryCulture.story = { name: 'Large, Culture (Byline image - Desktop)' };

export const SpecialReport = () => (
	<div style={{ width: '140px', height: '140px' }}>
		<Avatar
			imageSrc={imageSrc300}
			imageAlt="The alt of the image"
			format={{
				...format,
				theme: ArticleSpecial.SpecialReport,
			}}
		/>
	</div>
);
SpecialReport.story = { name: 'Large SpecialReport' };

export const smallStory = () => (
	<div style={{ width: '60px', height: '60px' }}>
		<Avatar
			imageSrc={imageSrc300Sport}
			imageAlt="The alt of the image"
			format={{
				...format,
				theme: ArticlePillar.Sport,
			}}
		/>
	</div>
);
smallStory.story = { name: 'Small, Sport (Byline image - Mobile)' };
