import { css } from 'npm:@emotion/react';
import { border, space } from 'npm:@guardian/source-foundations';
import {
	DottedLines,
	StraightLines,
} from 'npm:@guardian/source-react-components-development-kitchen';

const block = css`
	display: block;
`;

export const GuardianLabsLines = () => (
	<>
		<StraightLines cssOverrides={block} count={1} color={border.primary} />
		<div
			css={css`
				height: ${space[2]}px;
			`}
		/>
		<DottedLines cssOverrides={block} count={1} color={border.primary} />
	</>
);
