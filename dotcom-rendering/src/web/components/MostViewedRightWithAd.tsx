import { css } from '@emotion/react';
import { AdSlot } from './AdSlot';
import { Island } from './Island';
import { MostViewedRightWrapper } from './MostViewedRightWrapper.importable';

type Props = {
	format: ArticleFormat;
	isPaidContent: boolean;
	renderAds: boolean;
	shouldHideReaderRevenue: boolean;
};

/**
 * The maximum height of the container that may contain
 * a right ad slot and a most viewed component
 */
const MAX_HEIGHT_PX = 1600;

export const MostViewedRightWithAd = ({
	format,
	isPaidContent,
	renderAds,
	shouldHideReaderRevenue,
}: Props) => {
	const componentDataAttribute = 'most-viewed-right-container';
	return (
		<div
			// This attribute is necessary so that most viewed wrapper
			// can measure the height of this component
			data-container={componentDataAttribute}
			css={css`
				/* The height can be smaller than the maximum height
				   For example if the article is very short */
				height: min(100%, ${MAX_HEIGHT_PX}px);
				display: flex;
				flex-direction: column;
			`}
		>
			{renderAds ? (
				<AdSlot
					position="right"
					display={format.display}
					shouldHideReaderRevenue={shouldHideReaderRevenue}
					isPaidContent={isPaidContent}
				/>
			) : null}

			{!isPaidContent ? (
				<Island
					clientOnly={true}
					deferUntil="visible"
					// Provide a much higher value for the top margin for the intersection observer
					// This is because the most viewed would otherwise only be lazy loaded when the
					// bottom of the container intersects with the viewport
					rootMargin="700px 100px"
				>
					<MostViewedRightWrapper
						format={format}
						maxHeightPx={MAX_HEIGHT_PX}
						componentDataAttribute={componentDataAttribute}
						renderAds={renderAds}
					/>
				</Island>
			) : null}
		</div>
	);
};
