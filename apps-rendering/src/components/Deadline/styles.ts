import { css } from '@emotion/react';
import { brandAlt, neutral, remSpace } from '@guardian/source-foundations';
import { darkModeCss } from 'styles';

export const highlight = css`
	color: ${neutral[7]};
	display: flex;
	align-items: center;
	padding: 0 ${remSpace[1]};
	font-family: GuardianTextSans;
	background: ${brandAlt[400]};
	${darkModeCss`
		background: ${brandAlt[200]};
	`}
`;
