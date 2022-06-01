import { css } from '@emotion/react';
import {
	neutral,
	textSans,
	visuallyHidden,
} from '@guardian/source-foundations';
import React from 'react';
import InfoIcon from '../../static/icons/info.svg';
import { bestFitImage, heightEstimate } from '../lib/image-fit';
import { scrsetStringFromImagesSources } from '../lib/srcset-utils';
import { YoutubeBlockComponentAMP } from './elements/YoutubeBlockComponentAMP';

const figureStyle = css`
	margin: 0 0;
	position: relative;

	input:checked ~ figcaption {
		display: block;
	}
`;

const captionStyle = css`
	position: absolute;
	left: 0;
	right: 0;
	bottom: 0;
	background: rgba(18, 18, 18, 0.8);
	color: ${neutral[100]};
	display: none;
	padding: 6px 40px 12px 10px;
	max-width: 100%;
	min-height: 46px;
	${textSans.small()};
`;

const inputStyle = css`
	border: 0;
	clip: rect(0 0 0 0);
	height: 1px;
	margin: -1px;
	overflow: hidden;
	padding: 0;
	position: absolute;
	width: 1px;
`;

const labelStyle = css`
	position: absolute;
	right: 6px;
	width: 32px;
	height: 32px;
	z-index: 1;
	background-color: rgba(18, 18, 18, 0.6);
	border-radius: 50%;
	bottom: 6px;

	svg {
		top: 0;
		bottom: 0;
		right: 0;
		left: 0;
		margin: auto;
		position: absolute;
		fill: ${neutral[100]};
	}
`;

const mainImage = (element: ImageBlockElement) => {
	const containerWidth = 600;
	const image: SrcSetItem = bestFitImage(
		element.imageSources,
		containerWidth,
	);
	const height: number = heightEstimate(
		element.media.allImages[0],
		image.width,
	);

	if (!image) {
		return null;
	}

	return (
		<figure css={figureStyle}>
			<amp-img
				src={image.src}
				alt={element.data.alt}
				attribution={element.data.credit}
				height={height.toString()}
				width={image.width.toString()}
				layout="responsive"
				srcset={scrsetStringFromImagesSources(element.imageSources)}
			/>
			{(element.data.caption ||
				(element.data.credit && element.displayCredit)) && (
				<>
					<input
						aria-checked={false}
						type="checkbox"
						id="show-caption"
						css={inputStyle}
					/>
					{}
					<label css={labelStyle} htmlFor="show-caption">
						<span
							css={css`
								${visuallyHidden}
							`}
						>
							Show caption
						</span>
						<InfoIcon />
					</label>
					<figcaption css={captionStyle}>
						{element.data.caption}{' '}
						{element.displayCredit && element.data.credit}
					</figcaption>
				</>
			)}
		</figure>
	);
};

// used to break out of the inner container margin
const expanded = css`
	margin: 0 -10px;
`;

const asComponent = (
	element: CAPIElement,
	pillar: ArticlePillar,
	adTargeting?: any,
) => {
	switch (element._type) {
		case 'model.dotcomrendering.pageElements.ImageBlockElement':
			return mainImage(element);
		case 'model.dotcomrendering.pageElements.YoutubeBlockElement':
			return (
				<YoutubeBlockComponentAMP
					element={element}
					pillar={pillar}
					adTargeting={adTargeting}
				/>
			);
		default:
			return null;
	}
};

export const MainMedia: React.FC<{
	element: CAPIElement;
	pillar: ArticleTheme;
	adTargeting?: any;
}> = ({ element, pillar, adTargeting }) => {
	return (
		<div css={expanded}>{asComponent(element, pillar, adTargeting)}</div>
	);
};
