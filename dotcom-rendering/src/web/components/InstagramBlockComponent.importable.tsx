import { css } from 'npm:@emotion/react';
import { updateIframeHeight } from '../browser/updateIframeHeight.ts';
import { ClickToView } from './ClickToView.ts';

const fullWidthStyles = css`
	width: 100%;
`;

/**
 * Note the iframe created in this component is dependent on the embedIFrame function being
 * called to be size correctly.
 * src/web/browser/embedIframe/embedIframe.ts
 */
export const InstagramBlockComponent: React.FC<{
	element: InstagramBlockElement;
	index: number;
	isMainMedia: boolean;
}> = ({ element, index, isMainMedia }) => {
	return (
		<ClickToView
			role={element.role}
			isTracking={element.isThirdPartyTracking}
			isMainMedia={isMainMedia}
			source={element.source}
			sourceDomain={element.sourceDomain}
			onAccept={() =>
				updateIframeHeight(`iframe[name="instagram-embed-${index}"]`)
			}
		>
			<iframe
				css={fullWidthStyles}
				className="js-embed__iframe"
				name={`instagram-embed-${index}`}
				data-cy="instagram-embed"
				title={`Instagram Post ${index}`}
				srcDoc={`${element.html}
			<script src="https://interactive.guim.co.uk/libs/iframe-messenger/iframeMessenger.js"></script>
			<gu-script>iframeMessenger.enableAutoResize();</gu-script>`}
			/>
		</ClickToView>
	);
};
