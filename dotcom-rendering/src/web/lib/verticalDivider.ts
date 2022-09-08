import { css } from 'npm:@emotion/react';
import { border, from } from 'npm:@guardian/source-foundations';

export const verticalDivider = css`
	${from.tablet} {
		:before {
			content: '';
			display: block;
			position: absolute;
			top: 0;
			bottom: 0;
			left: 0;
			width: 1px;
			height: 100%;
			border-left: 1px solid ${border.secondary};
		}
	}
`;
