import { css } from '@emotion/react';
import { headline } from '@guardian/source-foundations';
import { StraightLines } from '@guardian/source-react-components-development-kitchen';
import type { FETrailTabType, TrailType } from '../../types/trails';
import { decidePalette } from '../lib/decidePalette';
import { decideTrail } from '../lib/decideTrail';
import { useApi } from '../lib/useApi';
import { MostViewedRightItem } from './MostViewedRightItem';

const wrapperStyles = css`
	margin-top: 24px;
	padding-bottom: 48px;
`;

// We only stick most viewed when ads are not showing. We do this
// to maximise right column space
const stickyStyles = css`
	position: sticky;
	top: 0;
`;

const headingStyles = css`
	${headline.xxxsmall({ fontWeight: 'bold' })}
	margin-bottom: 8px;
`;

interface Props {
	format: ArticleFormat;
	limitItems?: number;
	stickToTop?: boolean;
}

export const MostViewedRight = ({
	format,
	limitItems = 5,
	stickToTop = false,
}: Props) => {
	const endpointUrl =
		'https://api.nextgen.guardianapps.co.uk/most-read-geo.json?dcr=true';
	const { data, error } = useApi<FETrailTabType>(endpointUrl);

	const palette = decidePalette(format);

	if (error) {
		window.guardian.modules.sentry.reportError(error, 'most-viewed-right');
		return null;
	}

	if (data) {
		const trails: TrailType[] = data.trails
			.slice(0, limitItems)
			.map(decideTrail);

		// Look I don't know why data-component is geo-most-popular either, but it is, ok? Ok.
		return (
			<div
				css={[wrapperStyles, stickToTop && stickyStyles]}
				data-component="geo-most-popular"
			>
				<StraightLines
					cssOverrides={css`
						display: block;
					`}
					count={4}
					color={palette.border.article}
				/>
				<h3 css={headingStyles}>Most viewed</h3>
				<ul data-link-name="Right hand most popular geo GB">
					{trails.map((trail, index) => (
						<MostViewedRightItem
							key={trail.url}
							trail={trail}
							mostViewedItemIndex={index}
							format={format}
						/>
					))}
				</ul>
			</div>
		);
	}

	return null;
};
