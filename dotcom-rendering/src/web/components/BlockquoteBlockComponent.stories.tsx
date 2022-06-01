import { css } from '@emotion/react';
import {
	ArticleDesign,
	ArticleDisplay,
	ArticlePillar,
	ArticleSpecial,
} from '@guardian/libs';
import { decidePalette } from '../lib/decidePalette';
import { BlockquoteBlockComponent } from './BlockquoteBlockComponent';

const shortQuoteHtml =
	'<blockquote class="quoted"> \n <p>We’ve now got evidence</blockquote>';
const blockquoteHtml =
	'<blockquote class="quoted"> \n <p>We’ve now got evidence that under <a href="https://www.theguardian.com/politics/boris-johnson">Boris Johnson</a> the NHS is on the table and will be up for sale. He tried to cover it up in a secret agenda but today it’s been exposed.</p> \n</blockquote>';

export default {
	component: BlockquoteBlockComponent,
	title: 'Components/BlockquoteComponent',
};

const containerStyles = css`
	max-width: 620px;
	margin: 20px;
`;

export const Unquoted = () => {
	return (
		<div css={containerStyles}>
			<h1>Long</h1>
			<BlockquoteBlockComponent
				html={blockquoteHtml}
				palette={decidePalette({
					design: ArticleDesign.Standard,
					display: ArticleDisplay.Standard,
					theme: ArticlePillar.News,
				})}
			/>
			<h1>Short</h1>
			<BlockquoteBlockComponent
				html={shortQuoteHtml}
				palette={decidePalette({
					design: ArticleDesign.Standard,
					display: ArticleDisplay.Standard,
					theme: ArticlePillar.News,
				})}
			/>
		</div>
	);
};
Unquoted.story = { name: 'Unquoted' };

export const Quoted = () => {
	return (
		<div css={containerStyles}>
			<h1>News</h1>
			<BlockquoteBlockComponent
				html={blockquoteHtml}
				palette={decidePalette({
					design: ArticleDesign.Standard,
					display: ArticleDisplay.Standard,
					theme: ArticlePillar.News,
				})}
				quoted={true}
			/>
			<h1>Sport</h1>
			<BlockquoteBlockComponent
				html={blockquoteHtml}
				palette={decidePalette({
					design: ArticleDesign.Standard,
					display: ArticleDisplay.Standard,
					theme: ArticlePillar.Sport,
				})}
				quoted={true}
			/>
			<h1>Culture</h1>
			<BlockquoteBlockComponent
				html={blockquoteHtml}
				palette={decidePalette({
					design: ArticleDesign.Standard,
					display: ArticleDisplay.Standard,
					theme: ArticlePillar.Culture,
				})}
				quoted={true}
			/>
			<h1>Lifestyle</h1>
			<BlockquoteBlockComponent
				html={blockquoteHtml}
				palette={decidePalette({
					design: ArticleDesign.Standard,
					display: ArticleDisplay.Standard,
					theme: ArticlePillar.Lifestyle,
				})}
				quoted={true}
			/>
			<h1>Opinion</h1>
			<BlockquoteBlockComponent
				html={blockquoteHtml}
				palette={decidePalette({
					design: ArticleDesign.Standard,
					display: ArticleDisplay.Standard,
					theme: ArticlePillar.Opinion,
				})}
				quoted={true}
			/>
			<h1>SpecialReport</h1>
			<BlockquoteBlockComponent
				html={blockquoteHtml}
				palette={decidePalette({
					design: ArticleDesign.Standard,
					display: ArticleDisplay.Standard,
					theme: ArticleSpecial.SpecialReport,
				})}
				quoted={true}
			/>
			<h1>Labs</h1>
			<BlockquoteBlockComponent
				html={blockquoteHtml}
				palette={decidePalette({
					design: ArticleDesign.Standard,
					display: ArticleDisplay.Standard,
					theme: ArticleSpecial.Labs,
				})}
				quoted={true}
			/>
			<h1>LiveBlog News</h1>
			<BlockquoteBlockComponent
				html={blockquoteHtml}
				palette={decidePalette({
					design: ArticleDesign.LiveBlog,
					display: ArticleDisplay.Standard,
					theme: ArticlePillar.News,
				})}
				quoted={true}
			/>
			<h1>DeadBlog News</h1>
			<BlockquoteBlockComponent
				html={blockquoteHtml}
				palette={decidePalette({
					design: ArticleDesign.DeadBlog,
					display: ArticleDisplay.Standard,
					theme: ArticlePillar.News,
				})}
				quoted={true}
			/>
			<h1>LiveBlog News</h1>
			<BlockquoteBlockComponent
				html={blockquoteHtml}
				palette={decidePalette({
					design: ArticleDesign.LiveBlog,
					display: ArticleDisplay.Standard,
					theme: ArticlePillar.Sport,
				})}
				quoted={true}
			/>
			<h1>DeadBlog Sport</h1>
			<BlockquoteBlockComponent
				html={blockquoteHtml}
				palette={decidePalette({
					design: ArticleDesign.DeadBlog,
					display: ArticleDisplay.Standard,
					theme: ArticlePillar.Sport,
				})}
				quoted={true}
			/>
		</div>
	);
};
Quoted.story = { name: 'Quoted' };
