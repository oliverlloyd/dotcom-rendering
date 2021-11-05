import { matchReport } from '@root/fixtures/generated/match-report';
import { ArticleDisplay, ArticleDesign, ArticlePillar } from '@guardian/libs';

import { ElementContainer } from './ElementContainer';
import { Flex } from './Flex';
import { LeftColumn } from './LeftColumn';
import { ArticleContainer } from './ArticleContainer';

import { MatchStats } from './MatchStats';
import { RightColumn } from './RightColumn';

export default {
	component: MatchStats,
	title: 'Components/MatchStats',
};

export const Default = () => {
	return (
		<MatchStats
			format={{
				display: ArticleDisplay.Standard,
				design: ArticleDesign.Standard,
				theme: ArticlePillar.Sport,
			}}
			home={matchReport.homeTeam}
			away={matchReport.awayTeam}
		/>
	);
};
Default.story = { name: 'default' };

export const InArticle = () => {
	return (
		<ElementContainer>
			<Flex>
				<LeftColumn>
					<></>
				</LeftColumn>
				<ArticleContainer>
					<MatchStats
						format={{
							display: ArticleDisplay.Standard,
							design: ArticleDesign.Standard,
							theme: ArticlePillar.Sport,
						}}
						home={matchReport.homeTeam}
						away={matchReport.awayTeam}
					/>
				</ArticleContainer>
				<RightColumn>
					<></>
				</RightColumn>
			</Flex>
		</ElementContainer>
	);
};
InArticle.story = { name: 'when placed in article context' };

export const InLiveBlog = () => {
	return (
		<ElementContainer>
			<Flex>
				<LeftColumn>
					<MatchStats
						format={{
							display: ArticleDisplay.Standard,
							design: ArticleDesign.LiveBlog,
							theme: ArticlePillar.Sport,
						}}
						home={matchReport.homeTeam}
						away={matchReport.awayTeam}
					/>
				</LeftColumn>
				<ArticleContainer>
					<></>
				</ArticleContainer>
				<RightColumn>
					<></>
				</RightColumn>
			</Flex>
		</ElementContainer>
	);
};
InLiveBlog.story = { name: 'when placed in liveblog context' };
