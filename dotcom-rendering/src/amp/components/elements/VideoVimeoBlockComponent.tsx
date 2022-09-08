import React from 'react';
import { getIdFromUrl } from '../../lib/get-video-id.ts';
import { Caption } from '../Caption.ts';

export const VideoVimeoBlockComponent: React.FC<{
	element: VideoVimeoBlockElement;
	pillar: ArticleTheme;
}> = ({ element, pillar }) => {
	// This is a hack as `url` is coming through as `""` from the embed.ly oembed endpoint
	// which is used in composer.
	// see: https://github.com/guardian/dotcom-rendering/issues/4057
	// We should remove this once ☝️ is fixed.
	const url = element.url === '' ? element.originalUrl ?? '' : element.url;
	const vimeoId = getIdFromUrl(url, '(\\d+)($|\\/)', true);

	return (
		<Caption captionText={element.caption} pillar={pillar}>
			<amp-vimeo
				data-videoid={vimeoId}
				layout="responsive"
				width={element.width}
				height={element.height}
				do-not-track="do-not-track"
			/>
		</Caption>
	);
};
