import { renderToString } from 'npm:react-dom/server';
import type { CAPIOnwards } from '../../types/onwards.ts';
import type { CAPITrailType, TrailType } from '../../types/trails.ts';
import { Carousel } from '../components/Carousel.importable.tsx';
import { decideFormat } from '../lib/decideFormat.ts';
import { decideTrail } from '../lib/decideTrail.ts';

const buildTrails = (
	trails: CAPITrailType[],
	trailLimit: number,
): TrailType[] => {
	return trails.slice(0, trailLimit).map(decideTrail);
};

/**
 * onwardsToHtml is used by the /Onwards endpoint to render the Carousel at the bottom of articles
 * It takes an array of json key-event blocks and returns the resulting html string
 *
 * @returns string (the html)
 */
export const onwardsToHtml = ({
	heading,
	// description,
	// url,
	onwardsSource,
	trails,
	format: CAPIFormat,
}: CAPIOnwards): string => {
	const format = decideFormat(CAPIFormat);

	const html = renderToString(
		<Carousel
			heading={heading}
			onwardsSource={onwardsSource}
			trails={buildTrails(trails, 8)}
			format={format}
		/>,
	);

	return html;
};
