import { breakpoints } from '@guardian/source-foundations';
import { trails } from '../../fixtures/manual/trails';
import type { DCRGroupedTrails } from '../types/front';
import { DynamicPackage } from './DynamicPackage';
import { FrontSection } from './FrontSection';

const defaultGroupedTrails: DCRGroupedTrails = {
	huge: [],
	veryBig: [],
	big: [],
	standard: [],
	snap: [],
};

export default {
	component: DynamicPackage,
	title: 'Components/DynamicPackage',
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

export const One = () => (
	<FrontSection title="Dynamic Package" showTopBorder={true}>
		<DynamicPackage
			groupedTrails={{
				...defaultGroupedTrails,
				snap: [],
				standard: trails.slice(0, 1),
			}}
			containerPalette="LongRunningPalette"
		/>
	</FrontSection>
);
One.storyName = 'With one standard card';

export const Two = () => (
	<FrontSection title="Dynamic Package" showTopBorder={true}>
		<DynamicPackage
			groupedTrails={{
				...defaultGroupedTrails,
				snap: [],
				standard: trails.slice(0, 2),
			}}
			containerPalette="LongRunningPalette"
		/>
	</FrontSection>
);
Two.storyName = 'With two standard cards';

export const Three = () => (
	<FrontSection title="Dynamic Package">
		<DynamicPackage
			groupedTrails={{
				...defaultGroupedTrails,
				snap: [],
				standard: trails.slice(0, 3),
			}}
			containerPalette="LongRunningPalette"
		/>
	</FrontSection>
);
Three.storyName = 'With three standard cards';

export const Four = () => (
	<FrontSection title="Dynamic Package">
		<DynamicPackage
			groupedTrails={{
				...defaultGroupedTrails,
				snap: [],
				standard: trails.slice(0, 4),
			}}
			containerPalette="LongRunningPalette"
		/>
	</FrontSection>
);
Four.storyName = 'With four standard cards';

export const Five = () => (
	<FrontSection title="Dynamic Package">
		<DynamicPackage
			groupedTrails={{
				...defaultGroupedTrails,
				snap: [],
				standard: trails.slice(0, 5),
			}}
			containerPalette="LongRunningPalette"
		/>
	</FrontSection>
);
Five.storyName = 'With five standard cards';

export const Six = () => (
	<FrontSection title="Dynamic Package" showTopBorder={true}>
		<DynamicPackage
			groupedTrails={{
				...defaultGroupedTrails,
				snap: [],
				standard: trails.slice(0, 6),
			}}
			containerPalette="LongRunningPalette"
		/>
	</FrontSection>
);
Six.storyName = 'With six standard cards';

export const Seven = () => (
	<FrontSection title="Dynamic Package" showTopBorder={true}>
		<DynamicPackage
			groupedTrails={{
				...defaultGroupedTrails,
				snap: [],
				standard: trails.slice(0, 7),
			}}
			containerPalette="LongRunningPalette"
		/>
	</FrontSection>
);
Seven.storyName = 'With seven standard cards';

export const Eight = () => (
	<FrontSection title="Dynamic Package" showTopBorder={true}>
		<DynamicPackage
			groupedTrails={{
				...defaultGroupedTrails,
				snap: [],
				standard: trails.slice(0, 8),
			}}
			containerPalette="LongRunningPalette"
		/>
	</FrontSection>
);
Eight.storyName = 'With eight standard cards';

export const Nine = () => (
	<FrontSection title="Dynamic Package" showTopBorder={true}>
		<DynamicPackage
			groupedTrails={{
				...defaultGroupedTrails,
				snap: [],
				standard: trails.slice(0, 9),
			}}
			containerPalette="LongRunningPalette"
		/>
	</FrontSection>
);
Nine.storyName = 'With nine standard cards';

export const Boosted1 = () => {
	const primary = trails[0];

	return (
		<FrontSection title="Dynamic Package" showTopBorder={true}>
			<DynamicPackage
				groupedTrails={{
					...defaultGroupedTrails,
					snap: [],
					standard: [{ ...primary, isBoosted: true }],
				}}
				showAge={true}
				containerPalette="LongRunningPalette"
			/>
		</FrontSection>
	);
};
Boosted1.storyName = 'With one standard card - boosted';

export const Boosted2 = () => {
	const primary = trails[0];
	const remaining = trails.slice(1, 2);

	return (
		<FrontSection title="Dynamic Package" showTopBorder={true}>
			<DynamicPackage
				groupedTrails={{
					...defaultGroupedTrails,
					snap: [],
					standard: [{ ...primary, isBoosted: true }, ...remaining],
				}}
				showAge={true}
				containerPalette="LongRunningPalette"
			/>
		</FrontSection>
	);
};
Boosted2.storyName = 'With two standard cards - boosted';

export const Boosted3 = () => {
	const primary = trails[0];
	const remaining = trails.slice(1, 3);

	return (
		<FrontSection title="Dynamic Package">
			<DynamicPackage
				groupedTrails={{
					...defaultGroupedTrails,
					snap: [],
					standard: [{ ...primary, isBoosted: true }, ...remaining],
				}}
				showAge={true}
				containerPalette="LongRunningPalette"
			/>
		</FrontSection>
	);
};
Boosted3.storyName = 'With three standard cards - boosted';

export const Boosted4 = () => {
	const primary = trails[0];
	const remaining = trails.slice(1, 4);

	return (
		<FrontSection title="Dynamic Package">
			<DynamicPackage
				groupedTrails={{
					...defaultGroupedTrails,
					snap: [],
					standard: [{ ...primary, isBoosted: true }, ...remaining],
				}}
				showAge={true}
				containerPalette="LongRunningPalette"
			/>
		</FrontSection>
	);
};
Boosted4.storyName = 'With four standard cards - boosted';

export const Boosted5 = () => {
	const primary = trails[0];
	const remaining = trails.slice(1, 5);

	return (
		<FrontSection title="Dynamic Package">
			<DynamicPackage
				groupedTrails={{
					...defaultGroupedTrails,
					snap: [],
					standard: [{ ...primary, isBoosted: true }, ...remaining],
				}}
				showAge={true}
				containerPalette="LongRunningPalette"
			/>
		</FrontSection>
	);
};
Boosted5.storyName = 'With five standard cards - boosted';

export const Boosted8 = () => {
	const primary = trails[0];
	const remaining = trails.slice(1, 8);

	return (
		<FrontSection title="Dynamic Package" showTopBorder={true}>
			<DynamicPackage
				groupedTrails={{
					...defaultGroupedTrails,
					snap: [],
					standard: [{ ...primary, isBoosted: true }, ...remaining],
				}}
				showAge={true}
				containerPalette="LongRunningPalette"
			/>
		</FrontSection>
	);
};
Boosted8.storyName = 'With eight standard cards - boosted';

export const Boosted9 = () => {
	const primary = trails[0];
	const remaining = trails.slice(1, 9);

	return (
		<FrontSection title="Dynamic Package" showTopBorder={true}>
			<DynamicPackage
				groupedTrails={{
					...defaultGroupedTrails,
					snap: [],
					standard: [{ ...primary, isBoosted: true }, ...remaining],
				}}
				showAge={true}
				containerPalette="LongRunningPalette"
			/>
		</FrontSection>
	);
};
Boosted9.storyName = 'With nine standard cards - boosted';

export const OneSnapThreeStandard = () => (
	<FrontSection title="Dynamic Package">
		<DynamicPackage
			groupedTrails={{
				...defaultGroupedTrails,
				snap: [trails[0]],
				standard: trails.slice(1, 4),
			}}
			containerPalette="LongRunningPalette"
		/>
	</FrontSection>
);
OneSnapThreeStandard.storyName = 'With one snap - three standard cards';

export const ThreeSnapTwoStandard = () => (
	<FrontSection title="Dynamic Package">
		<DynamicPackage
			groupedTrails={{
				...defaultGroupedTrails,
				snap: trails.slice(0, 3),
				standard: trails.slice(3, 5),
			}}
			containerPalette="LongRunningPalette"
		/>
	</FrontSection>
);
ThreeSnapTwoStandard.storyName = 'With three snaps - two standard cards';

export const ThreeSnapTwoStandard2ndBoosted = () => (
	<FrontSection title="Dynamic Package">
		<DynamicPackage
			groupedTrails={{
				...defaultGroupedTrails,
				snap: [trails[0], { ...trails[1], isBoosted: true }, trails[2]],
				standard: trails.slice(3, 5),
			}}
			containerPalette="LongRunningPalette"
		/>
	</FrontSection>
);
ThreeSnapTwoStandard2ndBoosted.storyName =
	'With three snaps (2nd boosted) - two standard cards';
