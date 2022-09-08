import { css } from 'npm:@emotion/react';
import type { ArticleFormat } from 'npm:@guardian/libs';
import { ArticleDesign, ArticleSpecial } from 'npm:@guardian/libs';
import { from, neutral } from 'npm:@guardian/source-foundations';
import type {
	DCRContainerPalette,
	DCRContainerType,
} from '../../../../types/front.ts';
import type { Palette } from '../../../../types/palette.ts';
import { decidePalette } from '../../../lib/decidePalette.ts';

type Props = {
	children: React.ReactNode;
	format: ArticleFormat;
	containerPalette?: DCRContainerPalette;
	containerType?: DCRContainerType;
	/** The first card in a dynamic package is ”Dynamo” and gets special styling */
	isDynamo?: true;
};

const cardStyles = (
	format: ArticleFormat,
	palette: Palette,
	isDynamo?: true,
	containerPalette?: DCRContainerPalette,
) => {
	const baseCardStyles = css`
		display: flex;
		flex-direction: column;
		justify-content: space-between;
		width: 100%;
		/* We absolutely position the faux link
		so this is required here */
		position: relative;

		:hover .image-overlay {
			position: absolute;
			top: 0;
			width: 100%;
			height: 100%;
			left: 0;
			background-color: ${neutral[7]};
			opacity: 0.1;
		}

		/* a tag specific styles */
		color: inherit;
		text-decoration: none;
		background-color: ${isDynamo ? 'transparent' : palette.background.card};
	`;

	const decidePaletteBrightness = (thePalette: DCRContainerPalette) => {
		switch (thePalette) {
			case 'EventPalette':
				return `96%`;
			case 'BreakingPalette':
				return `85%`;
			case 'EventAltPalette':
				return `95%`;
			case 'InvestigationPalette':
				return `90%`;
			case 'LongRunningPalette':
				return `84%`;
			case 'LongRunningAltPalette':
				return `95%`;
			case 'SombrePalette':
				return `90%`;
			case 'SombreAltPalette':
				return `85%`;
			default:
				return `90%`;
		}
	};
	if (containerPalette) {
		return css`
			${baseCardStyles};
			:hover {
				filter: brightness(
					${decidePaletteBrightness(containerPalette)}
				);
			}
		`;
	}

	if (format.theme === ArticleSpecial.SpecialReport) {
		return css`
			${baseCardStyles};
			:hover {
				filter: brightness(90%);
			}
		`;
	}

	switch (format.design) {
		case ArticleDesign.Editorial:
		case ArticleDesign.Letter:
		case ArticleDesign.Comment:
			return css`
				${baseCardStyles};
				:hover {
					/* TODO: This colour is hard coded here because it does not yet
                           exist in source-foundations. Once it's been added, please
                           remove this. @siadcock is aware. */
					/* stylelint-disable-next-line color-no-hex */
					background-color: #fdf0e8;
				}
			`;
		case ArticleDesign.Gallery:
		case ArticleDesign.Audio:
		case ArticleDesign.Video:
		case ArticleDesign.LiveBlog:
			return css`
				${baseCardStyles};
				:hover {
					filter: brightness(90%);
				}
			`;
		default:
			return css`
				${baseCardStyles};
				:hover {
					background-color: ${neutral[93]};
				}
			`;
	}
};

const topBarStyles = ({
	isDynamo,
	palette,
	containerType,
}: {
	isDynamo?: true;
	palette: Palette;
	containerType?: DCRContainerType;
}) => {
	/* Styling for top bar */
	const baseStyles = css`
		background-color: ${isDynamo
			? palette.text.dynamoKicker
			: palette.topBar.card};
		content: '';
		height: ${containerType === 'dynamic/package' ? '4px' : '1px'};
		z-index: 2;
		width: 100%;
	`;

	if (isDynamo) {
		return css`
			:before {
				${baseStyles}
				${from.phablet} {
					width: 25%;
				}
			}
		`;
	}
	return css`
		:before {
			${baseStyles}
		}
	`;
};

export const CardWrapper = ({
	children,
	format,
	containerPalette,
	containerType,
	isDynamo,
}: Props) => {
	const palette = decidePalette(format, containerPalette);
	return (
		<div
			css={[
				cardStyles(format, palette, isDynamo, containerPalette),
				topBarStyles({ isDynamo, palette, containerType }),
			]}
		>
			{children}
		</div>
	);
};
