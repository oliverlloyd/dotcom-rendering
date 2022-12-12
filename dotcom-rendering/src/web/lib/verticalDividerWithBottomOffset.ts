import type { SerializedStyles } from '@emotion/react';
import { css } from '@emotion/react';
import { border, from } from '@guardian/source-foundations';
import type { DCRContainerPalette } from '../../types/front';
import { decideContainerOverrides } from './decideContainerOverrides';

export function verticalDividerWithBottomOffset(
	bottomPaddingSize: string,
	containerPalette?: DCRContainerPalette,
): SerializedStyles {
	const containerOverrides =
		containerPalette && decideContainerOverrides(containerPalette);

	return css`
		${from.tablet} {
			:before {
				content: '';
				display: block;
				position: absolute;
				top: 0;
				bottom: 0;
				left: 0;
				width: 1px;
				/* 100% is a reasonable fallback for browsers which don't support calc() */
				height: 100%;
				height: calc(100% + ${bottomPaddingSize});
				border-left: 1px solid
					${containerOverrides
						? containerOverrides.border.container
						: border.secondary};
			}
		}
	`;
}
