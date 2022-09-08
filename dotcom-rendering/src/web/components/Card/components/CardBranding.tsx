import { css } from 'npm:@emotion/react';
import { space, textSans, visuallyHidden } from 'npm:@guardian/source-foundations';
import type { Branding } from '../../../../types/branding.ts';
import type { Palette } from '../../../../types/palette.ts';
import { trackSponsorLogoLinkClick } from '../../../browser/ga/ga.ts';
import { decideLogo } from '../../../lib/decideLogo.ts';
import { decidePalette } from '../../../lib/decidePalette.ts';
import { getZIndex } from '../../../lib/getZIndex.ts';

type Props = {
	branding: Branding;
	format: ArticleFormat;
};

const logoImageStyle = css`
	max-height: 60px;
	margin-left: ${space[3]}px;
	vertical-align: middle;
	height: auto;
	width: auto;
`;

const brandingWrapperStyle = css`
	padding-right: ${space[2]}px;
	padding-bottom: ${space[2]}px;
	text-align: right;
	flex: auto;
	/* See: https://css-tricks.com/nested-links/ */
	${getZIndex('card-nested-link')}
	position: relative;
`;

const labelStyle = (palette: Palette) => {
	return css`
		${textSans.xxsmall()}
		color: ${palette.text.cardFooter};
	`;
};

export const CardBranding = ({ branding, format }: Props) => {
	const logo = decideLogo(format, branding);
	const palette = decidePalette(format);
	return (
		<div css={brandingWrapperStyle}>
			<div css={labelStyle(palette)}>{logo.label}</div>
			<span
				css={css`
					${visuallyHidden};
				`}
			>
				{branding.sponsorName
					? `This content was paid for by ${branding.sponsorName} and produced by the Guardian Labs team.`
					: 'This content has been paid for by an advertiser and produced by the Guardian Labs team.'}
			</span>
			<a
				href={logo.link}
				data-sponsor={branding.sponsorName.toLowerCase()}
				rel="nofollow"
				aria-label={`Visit the ${branding.sponsorName} website`}
				onClick={() =>
					trackSponsorLogoLinkClick(
						branding.sponsorName.toLowerCase(),
					)
				}
				data-cy="card-branding-logo"
			>
				<img
					css={logoImageStyle}
					src={logo.src}
					alt={branding.sponsorName}
					width={logo.dimensions.width}
					height={logo.dimensions.height}
				/>
			</a>
		</div>
	);
};
