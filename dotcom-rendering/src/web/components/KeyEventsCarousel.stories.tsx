import { css } from '@emotion/react';
import { ArticleDesign, ArticleDisplay, ArticlePillar } from '@guardian/libs';
import { from } from '@guardian/source-foundations';
import {
	LongKeyEvents,
	ShortKeyEvents,
	SingleKeyEvent,
} from '../../../fixtures/manual/live-blog-key-events';

import { KeyEventsCarousel } from './KeyEventsCarousel.importable';

const getFormat = (theme: ArticleTheme) => {
	return {
		design: ArticleDesign.Standard,
		display: ArticleDisplay.Standard,
		theme,
	};
};

const format = getFormat(ArticlePillar.News);

const Wrapper = ({ children }: { children: React.ReactNode }) => {
	return (
		<div
			css={css`
				position: relative;
				max-width: 700px;
				${from.tablet} {
					width: 700px;
				}
			`}
		>
			{children}
		</div>
	);
};

const SingleKeyEventCarousel = () => {
	return (
		<Wrapper>
			<KeyEventsCarousel
				keyEvents={SingleKeyEvent}
				filterKeyEvents={false}
				format={format}
			/>
		</Wrapper>
	);
};
const ShortKeyEventCarousel = () => {
	return (
		<Wrapper>
			<KeyEventsCarousel
				keyEvents={ShortKeyEvents}
				filterKeyEvents={false}
				format={format}
			/>
		</Wrapper>
	);
};

const LongKeyEventCarousel = () => {
	return (
		<Wrapper>
			<KeyEventsCarousel
				keyEvents={LongKeyEvents}
				filterKeyEvents={false}
				format={format}
			/>
		</Wrapper>
	);
};

export default {
	component: KeyEventsCarousel,
	title: 'Components/KeyEventsCarousel',
};

export { SingleKeyEventCarousel, ShortKeyEventCarousel, LongKeyEventCarousel };
