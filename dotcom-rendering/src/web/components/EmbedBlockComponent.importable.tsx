import { css } from '@emotion/react';
import { space, text, textSans } from '@guardian/source-foundations';
import { unescapeData } from '../../lib/escapeData';
import { ClickToView } from './ClickToView';

type Props = {
	html: string;
	caption?: string;
	role?: RoleType;
	isTracking: boolean;
	isMainMedia?: boolean;
	source?: string;
	sourceDomain?: string;
};

const emailCaptionStyle = css`
	${textSans.xxsmall()};
	word-break: break-all;
	color: ${text.supporting};
	padding-bottom: ${space[1]}px;
`;

const embedContainerStyles = (isEmailEmbed: boolean) => css`
	iframe {
		/* Some embeds can hijack the iframe and calculate an incorrect width, which pushes the body out */
		/* stylelint-disable-next-line declaration-no-important */
		width: 100% !important;
		${isEmailEmbed && `min-height: 60px;`}
	}
`;

export const EmbedBlockComponent = ({
	html,
	caption,
	role,
	isTracking,
	isMainMedia,
	source,
	sourceDomain,
}: Props) => {
	// TODO: Email embeds are being turned into atoms, so we can remove this hack when that happens
	const isEmailEmbed = html.includes('email/form');
	return (
		<ClickToView
			role={role}
			isTracking={isTracking}
			isMainMedia={isMainMedia}
			source={source}
			sourceDomain={sourceDomain}
		>
			<div data-cy="embed-block" css={embedContainerStyles(isEmailEmbed)}>
				{isEmailEmbed && caption && (
					<div
						css={emailCaptionStyle}
						dangerouslySetInnerHTML={{
							__html: caption,
						}}
					/>
				)}
				<div dangerouslySetInnerHTML={{ __html: unescapeData(html) }} />
			</div>
		</ClickToView>
	);
};
