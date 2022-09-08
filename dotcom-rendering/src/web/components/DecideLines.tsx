import { css } from 'npm:@emotion/react';
import { ArticleDesign, ArticlePillar } from 'npm:@guardian/libs';
import {
	DottedLines,
	StraightLines,
} from 'npm:@guardian/source-react-components-development-kitchen';

type Props = {
	format: ArticleFormat;
	color?: string;
};

export const DecideLines = ({ format, color }: Props) => {
	const count = format.design === ArticleDesign.Comment ? 8 : 4;

	switch (format.theme) {
		case ArticlePillar.Sport:
			return (
				<DottedLines
					cssOverrides={css`
						display: block;
					`}
					count={count}
					color={color}
				/>
			);
		default:
			return (
				<StraightLines
					cssOverrides={css`
						display: block;
					`}
					count={count}
					color={color}
				/>
			);
	}
};
