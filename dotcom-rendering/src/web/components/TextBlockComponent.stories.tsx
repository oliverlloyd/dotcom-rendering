import { css } from '@emotion/react';
import { ArticleDesign, ArticleDisplay, ArticlePillar } from '@guardian/libs';
import { TextBlockComponent } from './TextBlockComponent';

const html =
	'<p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Pellentesquepharetra libero nec varius feugiat. Nulla commodo sagittis erat amalesuada. Ut iaculis interdum eros, et tristique ex. In veldignissim arcu. Nulla nisi urna, laoreet a aliquam at, viverra eueros. Proin imperdiet pellentesque turpis sed luctus. Donecdignissim lacus in risus fermentum maximus eu vel justo. Duis nontortor ac elit dapibus imperdiet ut at risus. Etiam pretium, odioeget accumsan venenatis, tortor mi aliquet nisl, vel ullamcorperneque nulla vel elit. Etiam porta mauris nec sagittis luctus.</p>';
const quotedHtml =
	'<p>“Lorem ipsum dolor sit amet, consectetur adipiscing elit. Pellentesquepharetra libero nec varius feugiat. Nulla commodo sagittis erat amalesuada. Ut iaculis interdum eros, et tristique ex. In veldignissim arcu. Nulla nisi urna, laoreet a aliquam at, viverra eueros. Proin imperdiet pellentesque turpis sed luctus. Donecdignissim lacus in risus fermentum maximus eu vel justo. Duis nontortor ac elit dapibus imperdiet ut at risus. Etiam pretium, odioeget accumsan venenatis, tortor mi aliquet nisl, vel ullamcorperneque nulla vel elit. Etiam porta mauris nec sagittis luctus.</p>';
const shortHtml =
	'Since its arrival on Netflix last month, The Queen’s Gambit has attracted a staggering <a href="https://www.theguardian.com/tv-and-radio/2020/nov/26/the-queens-gambit-netflix-most-watched-series-hit-chess">62 million</a> viewers – making it the streaming service’s most-watched scripted limited series.';
const differentWrapperTags =
	'<span><p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Pellentesquepharetra libero nec varius feugiat. Nulla commodo sagittis erat amalesuada. Ut iaculis interdum eros, et tristique ex. In veldignissim arcu. Nulla nisi urna, laoreet a aliquam at, viverra eueros. Proin imperdiet pellentesque turpis sed luctus. Donecdignissim lacus in risus fermentum maximus eu vel justo. Duis nontortor ac elit dapibus imperdiet ut at risus. Etiam pretium, odioeget accumsan venenatis, tortor mi aliquet nisl, vel ullamcorperneque nulla vel elit. Etiam porta mauris nec sagittis luctus.</p></span>';
const aListHtml =
	'<ul><li>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Pellentesquepharetra libero nec varius feugiat.</li><li>Nulla commodo sagittis erat amalesuada. Ut iaculis interdum eros, et tristique ex. In veldignissim arcu. Nulla nisi urna, laoreet a aliquam at, viverra eueros. Proin imperdiet pellentesque turpis sed luctus. Donecdignissim lacus in risus fermentum maximus eu vel justo. Duis nontortor ac elit dapibus imperdiet ut at risus. Etiam pretium, odioeget accumsan venenatis, tortor mi aliquet nisl, vel ullamcorperneque nulla vel elit. Etiam porta mauris nec sagittis luctus.</li></ul>';
const badMarkup =
	'<html>\n <head></head>\n <body>\n  <p>In its <a href="https://www.admiral.com/magazine/guides/home/the-jargon-free-guide-to-bicycle-insurance" title="">guide to protecting your bike</a>, the insurer Admiral cites the Kryptonite New York M18 U-lock as being good quality. It costs <a href="http://go.theguardian.com/?id=114047X1572903&amp;url=https%3A%2F%2Fwww.wiggle.co.uk%2Fkryptonite-new-york-m18-u-lock&amp;sref=https://www.theguardian.com/money/2020/jul/18/bike-theft-uk-cycle-sales-best-locks-insurance-bicycle.json?dcr" title="">£82.99 at Wiggle.co.uk</a>. Add a <a href="http://go.theguardian.com/?id=114047X1572903&amp;url=https%3A%2F%2Fwww.wiggle.co.uk%2Fkryptonite-kryptoflex-7-foot-cable-bike-lock%2F&amp;sref=https://www.theguardian.com/money/2020/jul/18/bike-theft-uk-cycle-sales-best-locks-insurance-bicycle.json?dcr" title="">cable</a> for another tenner, so you can loop it through the wheels and secure them, too.</p>\n </body>\n</html>';
const htmlWithDot =
	'<p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Pellentesquepharetra libero nec varius feugiat. Nulla commodo sagittis erat amalesuada. Ut iaculis interdum eros, et tristique ex. In veldignissim arcu. Nulla nisi urna, laoreet a aliquam at, viverra eueros. Proin imperdiet pellentesque turpis sed luctus. Donecdignissim lacus in risus fermentum maximus eu vel justo. Duis nontortor ac elit dapibus imperdiet ut at risus. Etiam pretium, odioeget accumsan venenatis, tortor mi aliquet nisl, vel ullamcorperneque nulla vel elit.<br><span data-dcr-style="bullet"></span> Etiam porta mauris nec sagittis luctus.</p>';
const longWords =
	'<p>Test In Mobile Modes</p><br><p>This is to test whether extremely long edge case words are wrapped when in mobile portrait. Word one: Pneumonoultramicroscopicsilicovolcanoconiosis. Word two: Hippopotomonstrosesquippedaliophobia. Word three: Pseudopseudohypoparathyroidism. Link test: https://www.theguardian.com/commentisfree/2021/mar/24/trust-britain-covid-vaccine-compromise?dcr</p>';

const containerStyles = css`
	max-width: 620px;
	margin: 20px;
`;

export default {
	component: TextBlockComponent,
	title: 'Components/TextBlockComponent',
};

export const defaultStory = () => {
	return (
		<div css={containerStyles}>
			<TextBlockComponent
				html={html}
				format={{
					theme: ArticlePillar.News,
					design: ArticleDesign.Standard,
					display: ArticleDisplay.Standard,
				}}
				isFirstParagraph={false}
			/>
		</div>
	);
};
defaultStory.story = { name: 'default' };

export const DropCap = () => {
	return (
		<div css={containerStyles}>
			<TextBlockComponent
				html={html}
				forceDropCap={true}
				format={{
					theme: ArticlePillar.Culture,
					design: ArticleDesign.Standard,
					display: ArticleDisplay.Immersive,
				}}
				isFirstParagraph={false}
			/>
		</div>
	);
};
DropCap.story = { name: 'with drop cap' };

export const QuotedDropCap = () => {
	return (
		<div css={containerStyles}>
			<TextBlockComponent
				html={quotedHtml}
				forceDropCap={false}
				format={{
					theme: ArticlePillar.Opinion,
					design: ArticleDesign.Comment,
					display: ArticleDisplay.Standard,
				}}
				isFirstParagraph={true}
			/>
		</div>
	);
};
QuotedDropCap.story = { name: 'with quoted drop cap' };

export const ShortText = () => {
	return (
		<div css={containerStyles}>
			<TextBlockComponent
				html={shortHtml}
				forceDropCap={true}
				format={{
					theme: ArticlePillar.News,
					design: ArticleDesign.Standard,
					display: ArticleDisplay.Standard,
				}}
				isFirstParagraph={false}
			/>
		</div>
	);
};
ShortText.story = { name: 'with text less than 200 characters' };

export const NoTags = () => {
	return (
		<div css={containerStyles}>
			<TextBlockComponent
				html={differentWrapperTags}
				forceDropCap={true}
				format={{
					theme: ArticlePillar.News,
					design: ArticleDesign.Standard,
					display: ArticleDisplay.Standard,
				}}
				isFirstParagraph={false}
			/>
		</div>
	);
};
NoTags.story = { name: 'with no p tags' };

export const FeatureDropCap = () => {
	return (
		<div css={containerStyles}>
			<TextBlockComponent
				html={html}
				forceDropCap={false}
				format={{
					theme: ArticlePillar.Culture,
					design: ArticleDesign.Feature,
					display: ArticleDisplay.Standard,
				}}
				isFirstParagraph={true}
			/>
		</div>
	);
};
FeatureDropCap.story = { name: 'with design of Feature' };

export const AList = () => {
	return (
		<div css={containerStyles}>
			<TextBlockComponent
				html={aListHtml}
				forceDropCap={true}
				format={{
					theme: ArticlePillar.News,
					design: ArticleDesign.Standard,
					display: ArticleDisplay.Standard,
				}}
				isFirstParagraph={false}
			/>
		</div>
	);
};
AList.story = { name: 'with a list' };

export const BadMarkup = () => {
	return (
		<div css={containerStyles}>
			<TextBlockComponent
				html={badMarkup}
				forceDropCap={false}
				format={{
					theme: ArticlePillar.News,
					design: ArticleDesign.Standard,
					display: ArticleDisplay.Standard,
				}}
				isFirstParagraph={false}
			/>
		</div>
	);
};
BadMarkup.story = { name: 'with a bad markup' };

export const SubSupscript = () => {
	return (
		<div css={containerStyles}>
			<TextBlockComponent
				html="<p><strong>P<sub>kj</sub> = (1-r<sub>j</sub>)C<sup>kj</sup> + r<sub>j</sub>(C<sub>kj</sub> + q<sub>kj</sub> - p<sub>kj</sub>)</strong></p><p><var>a<sup>2</sup></var> + <var>b<sup>2</sup></var> = <var>c<sup>2</sup></var></p>"
				forceDropCap={false}
				format={{
					theme: ArticlePillar.News,
					design: ArticleDesign.Standard,
					display: ArticleDisplay.Standard,
				}}
				isFirstParagraph={false}
			/>
		</div>
	);
};
SubSupscript.story = { name: 'with a sub and sup' };

export const dotStory = () => {
	return (
		<div css={containerStyles}>
			<TextBlockComponent
				html={htmlWithDot}
				format={{
					theme: ArticlePillar.News,
					design: ArticleDesign.Standard,
					display: ArticleDisplay.Standard,
				}}
				isFirstParagraph={false}
			/>
		</div>
	);
};
dotStory.story = { name: 'With Dot' };

export const longWordStory = () => {
	return (
		<div css={containerStyles}>
			<TextBlockComponent
				html={longWords}
				format={{
					theme: ArticlePillar.News,
					design: ArticleDesign.Standard,
					display: ArticleDisplay.Standard,
				}}
				isFirstParagraph={false}
			/>
		</div>
	);
};
longWordStory.story = { name: 'Long Words' };
