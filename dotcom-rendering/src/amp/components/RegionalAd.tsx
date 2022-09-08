import { ClassNames } from 'npm:@emotion/react';
import { getRTCParameters } from '../lib/real-time-config.ts';
import { adRegions, regionClasses } from '../lib/region-classes.ts';
import type { BaseAdProps } from './Ad.ts';
import { Ad } from './Ad.ts';

/**
 * Ad slot component whose config differs based on region.
 * For each adRegion, create an Ad component with styling so that all but the component for the
 * user's region are hidden
 * @param RegionalAdProps
 * @returns an Ad component per region
 */
export const RegionalAd = ({
	editionId,
	section,
	contentType,
	commercialProperties,
	config,
	adTargeting,
}: BaseAdProps) => (
	<>
		{adRegions.map((adRegion) => (
			<ClassNames key={adRegion}>
				{({ css, cx }) => (
					<div
						className={cx(
							css`
								${regionClasses[adRegion].styles}
							`,
						)}
					>
						<Ad
							isSticky={false}
							editionId={editionId}
							section={section}
							contentType={contentType}
							commercialProperties={commercialProperties}
							config={config}
							rtcParameters={getRTCParameters({ adRegion })}
							adTargeting={adTargeting}
						/>
					</div>
				)}
			</ClassNames>
		))}
	</>
);
