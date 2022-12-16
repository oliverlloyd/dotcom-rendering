// ----- Imports ----- //

import type { SerializedStyles } from '@emotion/react';
import { css } from '@emotion/react';
import CaptionIcon, {
	CaptionIconVariant,
} from '@guardian/common-rendering/src/components/captionIcon';
import { text } from '@guardian/common-rendering/src/editorialPalette';
import type { ArticleFormat } from '@guardian/libs';
import { from, remSpace, textSans } from '@guardian/source-foundations';
import type { Option } from '@guardian/types';
import { OptionKind } from '@guardian/types';
import Caption from 'components/caption';
import { grid } from 'grid/grid';
import { maybeRender } from 'lib';
import type { MainMedia } from 'mainMedia';
import { MainMediaKind } from 'mainMedia';
import type { FC } from 'react';
import { darkModeCss } from 'styles';
import { immersiveCaptionId } from './MainMedia.defaults';

// ----- Component ----- //

const styles = (format: ArticleFormat): SerializedStyles => css`
	${textSans.xsmall()}
	color: ${text.figCaption(format)};
	${grid.column.centre}

	${from.leftCol} {
		${grid.column.left}
		grid-row: 6;
		padding-top: ${remSpace[1]};
	}

	${darkModeCss`
		color: ${text.figCaptionDark(format)};
	`}
`;

type Props = {
	mainMedia: Option<MainMedia>;
	format: ArticleFormat;
};

const ImmersiveCaption: FC<Props> = ({ mainMedia, format }) =>
	maybeRender(mainMedia, (media) => {
		if (media.kind === MainMediaKind.Video) {
			return null;
		}

		const { caption, credit } = media.image;

		if (
			caption.kind === OptionKind.None &&
			credit.kind === OptionKind.None
		) {
			return null;
		}

		return (
			<p id={immersiveCaptionId} css={styles(format)}>
				<CaptionIcon
					variant={CaptionIconVariant.Image}
					format={format}
					supportsDarkMode={true}
				/>
				<Caption caption={caption} format={format} />{' '}
				{maybeRender(credit, (cred) => (
					<>{cred}</>
				))}
			</p>
		);
	});

// ----- Exports ----- //

export default ImmersiveCaption;
