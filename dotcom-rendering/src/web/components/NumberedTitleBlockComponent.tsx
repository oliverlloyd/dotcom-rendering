import { css } from 'npm:@emotion/react';
import { headline } from 'npm:@guardian/source-foundations';
import type { Palette } from '../../types/palette.ts';
import { decideFormat } from '../lib/decideFormat.ts';
import { decidePalette } from '../lib/decidePalette.ts';

type Props = {
	position: number;
	html: string;
	format: CAPIFormat;
};

const titleStyles = (palette: Palette) => css`
	h2 {
		${headline.medium({ fontWeight: 'light' })}
	}

	strong {
		${headline.medium({ fontWeight: 'bold' })}
		display: block;
		color: ${palette.text.numberedTitle};
	}
`;

const numberStyles = (palette: Palette) => css`
	${headline.large({ fontWeight: 'bold' })}
	font-size: 56px;
	color: ${palette.text.numberedPosition};
`;

export const NumberedTitleBlockComponent = ({
	position,
	html,
	format,
}: Props) => {
	const palette = decidePalette(decideFormat(format));
	return (
		<div
			css={css`
				margin-top: -16px; /* Hack used to align Title number closer to adjacent divider */
			`}
		>
			<div css={numberStyles(palette)}>{position}</div>
			<div
				css={titleStyles(palette)}
				dangerouslySetInnerHTML={{ __html: html }}
			/>
		</div>
	);
};
