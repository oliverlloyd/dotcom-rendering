import { css } from 'npm:@emotion/react';
import { from } from 'npm:@guardian/source-foundations';
import { decidePalette } from '../lib/decidePalette.ts';

export const Border = ({ format }: { format: ArticleFormat }) => (
	<div
		css={css`
			${from.leftCol} {
				border-left: 1px solid ${decidePalette(format).border.article};
				height: 100%;
			}
		`}
	/>
);
