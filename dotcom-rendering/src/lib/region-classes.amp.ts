import { css } from '@emotion/react';

// Array of possible ad regions
export const adRegions = ['UK', 'US', 'AU', 'INT', 'EUR'] as const;

export type AdRegion = (typeof adRegions)[number];

/**
 * Class that will display an element if the user accesses the AMP page
 * from Great Britain
 */
const ukRegionClass = css`
	display: none;
	.amp-iso-country-gb & {
		display: block;
	}
`;

/**
 * Class that will display an element if the user accesses the AMP page from US
 */
const usRegionClass = css`
	display: none;
	.amp-iso-country-us & {
		display: block;
	}
`;

/**
 * Class that will display an element if the user accesses the AMP page
 * from the Australia geo group (including New Zealand)
 */
const auRegionClass = css`
	display: none;
	.amp-geo-group-au & {
		display: block;
	}
`;

/**
 * Class that will display an element if the user accesses the AMP page from
 * the region denoted as "Rest of World"
 *
 * Currently this region is set to any access either from the European Economic
 * Area or where no AMP geo group is assigned
 *
 */
const rowRegionClass = css`
	display: none;
	.amp-geo-group-eea & {
		display: block;
	}
	.amp-geo-no-group & {
		display: block;
	}
`;

/**
 * Class that will display an element if the user accesses the AMP page from
 * the region denoted as "International"
 *
 * Currently this region is set to any access from the European Economic
 * Area EXCEPT Great Britain or where no AMP geo group is assigned
 */
const internationalRegionClass = css`
	display: none;
	.amp-geo-group-eea:not(.amp-iso-country-gb) &,
	.amp-geo-no-group & {
		display: block;
	}
`;

/**
 * Class that *should* display an element if the user accesses the AMP page from
 * the region denoted as "Europe"
 *
 * Currently we do not want to show any european ads and this will always fall back to international
 */
const europeRegionClass = css`
	display: none;
`;

/**
 * Dictionary mapping region code to the associated AMP region style
 *
 * E.g. Applying `regionClasses["US"]` to an element will only display the
 * element if the user is accessing the AMP page from the US
 * */
export const regionClasses = {
	UK: ukRegionClass,
	US: usRegionClass,
	AU: auRegionClass,
	INT: internationalRegionClass,
	EUR: europeRegionClass,
	ROW: rowRegionClass,
};
