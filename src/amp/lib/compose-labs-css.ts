import { cx } from '@emotion/css';

import { Special } from '@guardian/types';

export const composeLabsCSS = (
	pillar: Theme,
	baseCSS: string,
	labsCSS: string,
): string => (pillar === Special.Labs ? cx(baseCSS, labsCSS) : baseCSS);
