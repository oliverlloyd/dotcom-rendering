import { css } from 'npm:@emotion/react';
import { body, until } from 'npm:@guardian/source-foundations';
import type { DCRContainerPalette } from '../../../../types/front.ts';
import { decidePalette } from '../../../lib/decidePalette.ts';

type Props = {
	children: string | React.ReactNode;
	format: ArticleFormat;
	containerPalette?: DCRContainerPalette;
};

export const TrailTextWrapper = ({
	children,
	format,
	containerPalette,
}: Props) => {
	const palette = decidePalette(format, containerPalette);
	return (
		<div
			css={css`
				display: flex;
				flex-direction: column;
				color: ${palette.text.cardStandfirst};

				${body.small({ lineHeight: 'regular' })};
				font-size: 14px;

				padding-left: 5px;
				padding-right: 5px;
				padding-bottom: 8px;

				${until.tablet} {
					display: none;
				}
			`}
		>
			{children}
		</div>
	);
};
