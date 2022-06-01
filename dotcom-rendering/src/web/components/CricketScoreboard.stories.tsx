import { ArticleDesign, ArticleDisplay, ArticlePillar } from '@guardian/libs';
import { breakpoints } from '@guardian/source-foundations';
import { match } from '../../../fixtures/manual/cricket-scoreboard';
import { CricketScoreboard } from './CricketScoreboard';

export default {
	component: CricketScoreboard,
	title: 'Components/CricketScoreboard',
	parameters: {
		chromatic: {
			viewports: [breakpoints.mobileLandscape],
		},
	},
};

export const defaultStory = () => {
	return (
		<div>
			<CricketScoreboard
				format={{
					display: ArticleDisplay.Standard,
					design: ArticleDesign.LiveBlog,
					theme: ArticlePillar.Sport,
				}}
				match={match}
				scorecardUrl="/test"
			/>
		</div>
	);
};
defaultStory.story = { name: 'Cricket Scoreboard' };
