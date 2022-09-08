import { css } from 'npm:@emotion/react';
import { unescapeData } from '../../lib/escapeData.ts';

const widthOverride = css`
	iframe {
		/* The  embed js hijacks the iframe and calculated an incorrect width, which pushed the body out */
		width: 100%;
	}
`;

export const SoundcloudBlockComponent: React.FC<{
	element: SoundcloudBlockElement;
}> = ({ element }) => {
	return (
		<div css={widthOverride}>
			<div
				data-cy="soundcloud-embed"
				dangerouslySetInnerHTML={{ __html: unescapeData(element.html) }}
			/>
		</div>
	);
};
