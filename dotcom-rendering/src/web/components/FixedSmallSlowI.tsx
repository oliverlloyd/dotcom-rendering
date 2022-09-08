import type { DCRContainerPalette } from '../../types/front.ts';
import type { TrailType } from '../../types/trails.ts';
import { LI } from './Card/components/LI.ts';
import { UL } from './Card/components/UL.ts';
import { FrontCard } from './FrontCard.ts';

type Props = {
	trails: TrailType[];
	containerPalette?: DCRContainerPalette;
	showAge?: boolean;
};

export const FixedSmallSlowI = ({
	trails,
	containerPalette,
	showAge,
}: Props) => {
	const trail = trails[0];

	return (
		<UL>
			<LI padSides={true}>
				<FrontCard
					trail={trail}
					containerPalette={containerPalette}
					showAge={showAge}
					imagePosition="right"
					imagePositionOnMobile="top"
					imageSize="jumbo"
					headlineSize="huge"
					headlineSizeOnMobile="large"
					trailText={trail.trailText}
				/>
			</LI>
		</UL>
	);
};
