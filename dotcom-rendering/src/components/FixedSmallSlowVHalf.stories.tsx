import { breakpoints } from '@guardian/source-foundations';
import { trails } from '../../fixtures/manual/trails';
import { FrontSection } from './FrontSection';
import { FixedSmallSlowVHalf } from './FixedSmallSlowVHalf';

export default {
	component: FixedSmallSlowVHalf,
	title: 'Components/FixedSmallSlowVHalf',
	parameters: {
		chromatic: {
			viewports: [
				breakpoints.mobile,
				breakpoints.tablet,
				breakpoints.wide,
			],
		},
	},
};

export const Default = () => (
	<FrontSection title="Fixed Small Slow V Half">
		<FixedSmallSlowVHalf trails={trails} showAge={true} />
	</FrontSection>
);
Default.storyName = 'FixedSmallSlowVHalf';
