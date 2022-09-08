import type {
	DCRContainerPalette,
	DCRContainerType,
	DCRFrontCard,
	DCRGroupedTrails,
} from '../../types/front.ts';
import { DynamicFast } from '../components/DynamicFast.ts';
import { DynamicPackage } from '../components/DynamicPackage.ts';
import { DynamicSlow } from '../components/DynamicSlow.ts';
import { DynamicSlowMPU } from '../components/DynamicSlowMPU.ts';
import { FixedLargeSlowXIV } from '../components/FixedLargeSlowXIV.ts';
import { FixedMediumSlowVI } from '../components/FixedMediumSlowVI.ts';
import { FixedMediumSlowVII } from '../components/FixedMediumSlowVII.ts';
import { FixedMediumSlowXIIMPU } from '../components/FixedMediumSlowXIIMPU.ts';
import { FixedSmallSlowI } from '../components/FixedSmallSlowI.ts';
import { FixedSmallSlowIII } from '../components/FixedSmallSlowIII.ts';
import { FixedSmallSlowIV } from '../components/FixedSmallSlowIV.ts';
import { FixedSmallSlowVMPU } from '../components/FixedSmallSlowVMPU.ts';
import { FixedSmallSlowVThird } from '../components/FixedSmallSlowVThird.ts';

type Props = {
	trails: DCRFrontCard[];
	index: number;
	groupedTrails: DCRGroupedTrails;
	containerType: DCRContainerType;
	containerPalette?: DCRContainerPalette;
	showAge?: boolean;
};

export const DecideContainer = ({
	trails,
	index,
	groupedTrails,
	containerType,
	containerPalette,
	showAge,
}: Props) => {
	switch (containerType) {
		case 'dynamic/fast':
			return (
				<DynamicFast
					groupedTrails={groupedTrails}
					containerPalette={containerPalette}
					showAge={showAge}
				/>
			);
		case 'dynamic/slow':
			return (
				<DynamicSlow
					groupedTrails={groupedTrails}
					containerPalette={containerPalette}
					showAge={showAge}
				/>
			);
		case 'dynamic/slow-mpu':
			return (
				<DynamicSlowMPU
					groupedTrails={groupedTrails}
					containerPalette={containerPalette}
					showAge={showAge}
					index={index}
				/>
			);
		case 'dynamic/package':
			return (
				<DynamicPackage
					groupedTrails={groupedTrails}
					containerPalette={containerPalette}
					showAge={showAge}
				/>
			);
		case 'fixed/large/slow-XIV':
			return (
				<FixedLargeSlowXIV
					trails={trails}
					containerPalette={containerPalette}
					showAge={showAge}
				/>
			);
		case 'fixed/small/slow-IV':
			return (
				<FixedSmallSlowIV
					trails={trails}
					containerPalette={containerPalette}
					showAge={showAge}
				/>
			);
		case 'fixed/small/slow-V-mpu':
			return (
				<FixedSmallSlowVMPU
					trails={trails}
					containerPalette={containerPalette}
					showAge={showAge}
					index={index}
				/>
			);
		case 'fixed/small/slow-III':
			return (
				<FixedSmallSlowIII
					trails={trails}
					containerPalette={containerPalette}
					showAge={showAge}
				/>
			);
		case 'fixed/small/slow-I':
			return (
				<FixedSmallSlowI
					trails={trails}
					containerPalette={containerPalette}
					showAge={showAge}
				/>
			);
		case 'fixed/small/slow-V-third':
			return (
				<FixedSmallSlowVThird
					trails={trails}
					containerPalette={containerPalette}
					showAge={showAge}
				/>
			);
		case 'fixed/medium/slow-VI':
			return (
				<FixedMediumSlowVI
					trails={trails}
					containerPalette={containerPalette}
					showAge={showAge}
				/>
			);
		case 'fixed/medium/slow-VII':
			return (
				<FixedMediumSlowVII
					trails={trails}
					containerPalette={containerPalette}
					showAge={showAge}
				/>
			);
		case 'fixed/medium/slow-XII-mpu':
			return (
				<FixedMediumSlowXIIMPU
					trails={trails}
					containerPalette={containerPalette}
					showAge={showAge}
					index={index}
				/>
			);
		default:
			return <p>{containerType} is not yet supported</p>;
	}
};
