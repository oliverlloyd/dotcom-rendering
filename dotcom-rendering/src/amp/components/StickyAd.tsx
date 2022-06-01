import { text, textSans } from '@guardian/source-foundations';
import { getRTCParameters } from '../lib/real-time-config';
import type { BaseAdProps } from './Ad';
import { Ad } from './Ad';

// This CSS should be imported and added to global styles in amp/server/document.tsx to add the Advertisement label to the sticky
export const stickyAdLabelCss = `
amp-sticky-ad:before {
	content: 'Advertisement';
	display: block;
	${textSans.xsmall()};
	font-family: 'Helvetica Neue',Helvetica,Arial,'Lucida Grande',sans-serif;
	padding: 3px 10px 0;
	color: ${text.supporting};
	text-align: right;
	line-height: 1;
	font-size: 0.75rem;
}`;

export const StickyAd = ({
	edition,
	section,
	contentType,
	config,
	commercialProperties,
	adTargeting,
}: BaseAdProps) => {
	return (
		<amp-sticky-ad layout="nodisplay">
			<Ad
				isSticky={true}
				edition={edition}
				section={section}
				contentType={contentType}
				commercialProperties={commercialProperties}
				config={config}
				adTargeting={adTargeting}
				rtcParameters={getRTCParameters({ isSticky: true })}
			/>
		</amp-sticky-ad>
	);
};
