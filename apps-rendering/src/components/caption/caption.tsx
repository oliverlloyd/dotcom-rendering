// ----- Imports ----- //

import type { SerializedStyles } from '@emotion/react';
import { css } from '@emotion/react';
import type { ArticleFormat } from '@guardian/libs';
import { ArticleDesign } from '@guardian/libs';
import {
	headline,
	neutral,
	remSpace,
	textSans,
} from '@guardian/source-foundations';
import { withDefault } from '@guardian/types';
import Anchor from 'components/Anchor';
import type { FC, ReactNode } from 'react';
import { getHref, renderTextElement } from 'renderer';

// ----- Caption Elements ----- //

const headingStyles = css`
	${headline.xxxsmall()}
	color: ${neutral[86]};
	margin: 0 0 ${remSpace[3]};
	display: block;
`;

const emStyles = css`
	${textSans.xsmall({ fontStyle: 'italic', fontWeight: 'bold' })}
`;

const anchorStyles = (format: ArticleFormat): SerializedStyles | undefined =>
	format.design === ArticleDesign.Gallery ||
	format.design === ArticleDesign.Audio ||
	format.design === ArticleDesign.Video
		? css`
				color: ${neutral[86]};
		  `
		: undefined;

const textStyles = css`
	${textSans.xxsmall()}
	color: ${neutral[46]};
`;

const captionElement =
	(format: ArticleFormat) =>
	// eslint-disable-next-line react/display-name -- not a normal React component
	(node: Node, key: number): ReactNode => {
		const text = node.textContent ?? '';
		const children = Array.from(node.childNodes).map(
			captionElement(format),
		);

		switch (node.nodeName) {
			case 'STRONG':
				return format.design === ArticleDesign.Gallery ||
					format.design === ArticleDesign.Audio ||
					format.design === ArticleDesign.Video ? (
					<h2 css={headingStyles} key={key}>
						{children}
					</h2>
				) : (
					children
				);
			case 'BR':
				return null;
			case 'EM':
				return (
					<em css={emStyles} key={key}>
						{children}
					</em>
				);
			case 'A':
				return (
					<Anchor
						href={withDefault('')(getHref(node))}
						className={anchorStyles(format)}
						format={format}
						key={key}
					>
						{children}
					</Anchor>
				);
			case '#text':
				return (
					<span css={textStyles} key={key}>
						{text}
					</span>
				);
			default:
				return renderTextElement(format)(node, key);
		}
	};

// ----- Component ----- //

type Props = {
	caption: DocumentFragment;
	format: ArticleFormat;
};

const Caption: FC<Props> = ({ caption, format }) => (
	<>{Array.from(caption.childNodes).map(captionElement(format))}</>
);

// ----- Exports ----- //

export default Caption;
