import type { SerializedStyles } from '@emotion/react';
import { css } from '@emotion/react';
import type { ArticleFormat } from '@guardian/libs';
import { headline, neutral } from '@guardian/source-foundations';
import { withDefault } from '@guardian/types';
import type { Option } from '@guardian/types';
import { maybeRender } from 'lib';
import type { ReactNode } from 'react';
import { getHref } from 'renderer';
import { darkModeCss } from 'styles';

export const defaultStyles = (kicker: string): SerializedStyles => css`
	${headline.xxxsmall({ fontStyle: 'italic' })}
	color: ${kicker};

	${darkModeCss`
        color: ${neutral[60]};
    `}
`;

export const defaultAnchorStyles = (
	kicker: string,
	inverted: string,
): SerializedStyles => css`
	${headline.xxxsmall({ fontWeight: 'bold' })}
	font-style: normal;
	color: ${kicker};
	text-decoration: none;

	${darkModeCss`
        color: ${inverted};
    `}
`;

export const toReact = (
	format: ArticleFormat,
	anchorStyles: SerializedStyles,
) => {
	return function getReactNode(node: Node, index: number): ReactNode {
		switch (node.nodeName) {
			case 'A':
				return (
					<a
						href={withDefault('')(getHref(node))}
						css={anchorStyles}
						key={`anchor-${index}`}
					>
						{node.textContent ?? ''}
					</a>
				);
			case 'SPAN':
				return Array.from(node.childNodes).map(
					toReact(format, anchorStyles),
				);
			case '#text':
				return node.textContent;
		}
	};
};

export const renderText = (
	format: ArticleFormat,
	byline: DocumentFragment,
	anchorStyles: SerializedStyles,
): ReactNode =>
	Array.from(byline.childNodes).map((node, i) =>
		toReact(format, anchorStyles)(node, i),
	);

interface DefaultProps {
	bylineHtml: Option<DocumentFragment>;
	format: ArticleFormat;
	styles: SerializedStyles;
	anchorStyles: SerializedStyles;
}

export const DefaultByline: React.FC<DefaultProps> = ({
	bylineHtml,
	styles,
	anchorStyles,
	format,
}) =>
	maybeRender(bylineHtml, (byline) => (
		<address css={styles}>
			{renderText(format, byline, anchorStyles)}
		</address>
	));
