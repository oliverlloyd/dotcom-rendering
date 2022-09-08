import type { Branding } from './branding.ts';
import type { EditionId } from './edition.ts';

export interface EditionCommercialProperties {
	adTargeting: AdTargetParam[];
	branding?: Branding;
}

export type CommercialProperties = {
	[E in EditionId]: EditionCommercialProperties;
};
