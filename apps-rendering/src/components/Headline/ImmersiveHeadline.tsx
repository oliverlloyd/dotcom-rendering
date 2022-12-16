// ----- Imports ----- //

import type { SerializedStyles } from '@emotion/react';
import { css } from '@emotion/react';
import {
	background,
	text,
} from '@guardian/common-rendering/src/editorialPalette';
import type { ArticleFormat } from '@guardian/libs';
import { from, headline, remSpace } from '@guardian/source-foundations';
import { grid } from 'grid/grid';
import { darkModeCss } from 'styles';

// ----- Component ----- //

const styles = (format: ArticleFormat): SerializedStyles => css`
	${headline.medium({ fontWeight: 'bold' })}
	background-color: ${background.headline(format)};
	color: ${text.headline(format)};
	padding: ${remSpace[1]} ${remSpace[5]} ${remSpace[9]} 0;
	${grid.between('centre-column-start', 'centre-column-end')}
	grid-row: 4/7;

	${from.mobileLandscape} {
		padding-top: ${remSpace[3]};
	}

	${from.tablet} {
		${grid.span('centre-column-start', 12)}
	}

	${from.tablet} {
		padding-top: ${remSpace[1]};
	}

	${from.desktop} {
		${headline.xlarge({ fontWeight: 'bold' })}
		${grid.span('centre-column-start', 8)}
		padding-top: 0;
	}

	${darkModeCss`
		background-color: ${background.headlineDark(format)};
		color: ${text.headlineDark(format)};
	`}
`;

const backgroundStyles = (format: ArticleFormat): SerializedStyles => css`
	background-color: ${background.headline(format)};
	${grid.between('viewport-start', 'centre-column-end')}
	grid-row: 4/7;

	${from.mobileLandscape} {
		${grid.between('viewport-start', 'viewport-end')}
	}

	${from.tablet} {
		${grid.between('centre-column-start', 'viewport-end')}
		margin-left: calc(${grid.columnGap} * -1/2);
	}

	${darkModeCss`
		background-color: ${background.headlineDark(format)};
	`}
`;

interface Props {
	headline: string;
	format: ArticleFormat;
}

const ImmersiveHeadline: React.FC<Props> = ({ headline, format }) => (
	<>
		<div css={backgroundStyles(format)} />
		<h1 css={styles(format)}>{headline}</h1>
	</>
);

// ----- Exports ----- //

export default ImmersiveHeadline;
