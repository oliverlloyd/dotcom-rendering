import { css } from 'npm:@emotion/react';
import { adSizes } from 'npm:@guardian/commercial-core';
import { ArticleDesign } from 'npm:@guardian/libs';
import { from, neutral, space, until } from 'npm:@guardian/source-foundations';
import { carrotAdStyles, labelHeight, labelStyles } from './AdSlot.ts';

type Props = {
	format: ArticleFormat;
	children: React.ReactNode;
};

const articleWidth = (format: ArticleFormat) => {
	switch (format.design) {
		case ArticleDesign.Interactive: {
			/* These articles use a special template which manages it's own width */
			return null;
		}
		case ArticleDesign.LiveBlog:
		case ArticleDesign.DeadBlog: {
			return css`
				${from.desktop} {
					width: 700px;
				}
			`;
		}
		default: {
			return css`
				${from.desktop} {
					width: 620px;
				}
			`;
		}
	}
};

const articleWrapper = css`
	${until.leftCol} {
		/* below 1140 */
		padding-left: 0;
	}

	flex-grow: 1;

	/* Due to MainMedia using position: relative, this seems to effect the rendering order
		To mitigate we use z-index
		TODO: find a cleaner solution */
	z-index: 1;
`;

const adStyles = css`
	.ad-slot {
		@media print {
			/* stylelint-disable-next-line declaration-no-important */
			display: none !important;
		}
		&.ad-slot--collapse {
			display: none;
		}
	}
	.ad-slot--mostpop {
		${from.desktop} {
			margin: 0;
			width: auto;
		}
	}
	.ad-slot--fluid {
		width: 100%;
	}

	.ad-slot-container {
		margin: ${space[3]}px auto;
		/* this is centring the ad iframe as they are display: inline; elements by default */
		text-align: center;
		display: flex;
		justify-content: center;

		${from.tablet} {
			background-color: ${neutral[97]};
		}

		/* Prevent merger with any nearby float left elements e.g. rich-links */
		${until.desktop} {
			clear: left;
		}

		.ad-slot {
			${from.tablet} {
				/* from tablet the ad slot will stretch to the full width of the container and the iframe will be centred by the text-align: center; on the container */
				flex: 1;
				/* Ensures slots do not take on 100% of the container height, allowing them to be sticky in containers */
				align-self: flex-start;
			}
		}

		.ad-slot--interscroller {
			/* this fixes inter-scrollers stealing mouse events */
			overflow: hidden;
			position: relative;

			/* position the iframe absolutely (relative to the slot) so that it is in the correct position to detect viewability */
			.ad-slot__content {
				position: absolute;
				height: 100%;
				left: 0;
				top: 0;
				right: 0;

				/* must be behind as the actual ad is on top of the iframe */
				z-index: -1;
			}
		}

		/* liveblogs ads have different background colours due the darker page background */
		.ad-slot--liveblog-inline {
			/* outstreamMobile is the ad with the smallest height that we serve for mobile
			   liveblog-inline slots. For desktop, this is an mpu */
			min-height: ${adSizes.outstreamMobile.height + labelHeight}px;
			${from.desktop} {
				min-height: ${adSizes.mpu.height + labelHeight}px;
			}

			background-color: ${neutral[93]};
			.ad-slot__label {
				color: ${neutral[46]};
				border-top-color: ${neutral[86]};
			}
		}
	}

	.ad-slot-container--offset-right {
		${from.desktop} {
			float: right;
			max-width: 300px;
			margin-right: -318px;
			background-color: transparent;
		}

		${from.wide} {
			margin-right: -398px;
		}
	}
`;

export const ArticleContainer = ({ children, format }: Props) => {
	return (
		<div
			css={[
				articleWrapper,
				articleWidth(format),
				adStyles,
				carrotAdStyles,
				labelStyles,
			]}
		>
			{children}
		</div>
	);
};
