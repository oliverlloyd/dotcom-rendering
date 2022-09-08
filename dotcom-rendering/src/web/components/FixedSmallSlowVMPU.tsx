import { Hide } from 'npm:@guardian/source-react-components';
import type { DCRContainerPalette } from '../../types/front.ts';
import type { TrailType } from '../../types/trails.ts';
import { AdSlot } from './AdSlot.ts';
import { LI } from './Card/components/LI.ts';
import { UL } from './Card/components/UL.ts';
import { FrontCard } from './FrontCard.ts';

type Props = {
	trails: TrailType[];
	containerPalette?: DCRContainerPalette;
	showAge?: boolean;
	index: number;
};

export const FixedSmallSlowVMPU = ({
	trails,
	containerPalette,
	showAge,
	index,
}: Props) => {
	return (
		<UL direction="row">
			<LI percentage="33.333%" padSides={true} padBottomOnMobile={true}>
				<FrontCard
					trail={trails[0]}
					containerPalette={containerPalette}
					showAge={showAge}
				/>
			</LI>
			<LI
				percentage="33.333%"
				padSides={true}
				showDivider={true}
				padBottomOnMobile={true}
			>
				<UL direction="column">
					<LI padBottom={true}>
						<FrontCard
							trail={trails[1]}
							containerPalette={containerPalette}
							showAge={showAge}
							imageUrl={undefined}
							headlineSize="small"
						/>
					</LI>
					<LI padBottom={true}>
						<FrontCard
							trail={trails[2]}
							containerPalette={containerPalette}
							showAge={showAge}
							imageUrl={undefined}
							headlineSize="small"
						/>
					</LI>
					<LI>
						<FrontCard
							trail={trails[3]}
							containerPalette={containerPalette}
							showAge={showAge}
							imageUrl={undefined}
							headlineSize="small"
						/>
					</LI>
				</UL>
			</LI>
			<LI percentage="33.333%" padSides={true} showDivider={true}>
				<Hide until="tablet">
					<AdSlot position="inline" index={index} />
				</Hide>
			</LI>
		</UL>
	);
};
