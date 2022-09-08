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

export const FixedSmallSlowIV = ({
	trails,
	containerPalette,
	showAge,
}: Props) => {
	const slicedTrails = trails.slice(0, 4);

	return (
		<UL direction="row">
			{slicedTrails.map((trail, index) => {
				return (
					<LI
						key={trail.url}
						padSides={true}
						showDivider={index > 0}
						padBottomOnMobile={true}
					>
						<FrontCard
							trail={trail}
							starRating={trail.starRating}
							containerPalette={containerPalette}
							showAge={showAge}
							imageSize="medium"
						/>
					</LI>
				);
			})}
		</UL>
	);
};
