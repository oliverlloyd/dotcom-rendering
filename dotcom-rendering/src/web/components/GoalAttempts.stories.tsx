import { css } from '@emotion/react';
import { ArticleDesign, ArticleDisplay, ArticlePillar } from '@guardian/libs';
import { GoalAttempts } from './GoalAttempts';

export default {
	component: GoalAttempts,
	title: 'Components/GoalAttempts',
};

const Container = ({ children }: { children: React.ReactNode }) => (
	<div
		css={css`
			width: 340px;
			padding: 20px;
			background: lightgray;
		`}
	>
		{children}
	</div>
);

export const Default = () => {
	return (
		<Container>
			<GoalAttempts
				left={{
					onTarget: 23,
					offTarget: 11,
					color: '#eb121a',
				}}
				right={{
					onTarget: 6,
					offTarget: 4,
					color: '#e3f45a',
				}}
				format={{
					design: ArticleDesign.Standard,
					theme: ArticlePillar.Sport,
					display: ArticleDisplay.Standard,
				}}
			/>
		</Container>
	);
};
Default.story = { name: 'default' };
