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

export const FixedSmallSlowIII = ({
	trails,
	containerPalette,
	showAge,
}: Props) => {
	const smallTrails = trails.slice(0, 3);

	return (
		<UL direction="row">
			{smallTrails.map((trail, index) => {
				return (
					<LI
						padSides={true}
						showDivider={index > 0}
						padBottomOnMobile={true}
						percentage={index === 0 ? '50%' : '25%'}
						key={trail.url}
					>
						<FrontCard
							trail={trail}
							starRating={trail.starRating}
							containerPalette={containerPalette}
							showAge={showAge}
							headlineSize={index === 0 ? 'large' : 'medium'}
							imagePositionOnMobile={index === 0 ? 'top' : 'left'}
							trailText={
								index === 0 ? undefined : trail.trailText
							}
						/>
					</LI>
				);
			})}
		</UL>
	);
};
