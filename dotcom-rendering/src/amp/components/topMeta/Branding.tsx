import { css } from 'npm:@emotion/react';
import { textSans } from 'npm:@guardian/source-foundations';
import React from 'react';
import { neutralBorder, pillarPalette_DO_NOT_USE } from '../../../lib/pillars.ts';
import type { Branding as BrandingType } from '../../../types/branding.ts';
import type { CommercialProperties } from '../../../types/commercial.ts';
import { isEditionId } from '../../../types/edition.ts';
import { regionClasses } from '../../lib/region-classes.ts';

const LinkStyle = (pillar: ArticleTheme) => css`
	a {
		color: ${pillarPalette_DO_NOT_USE[pillar].dark};
		text-decoration: none;
		border-bottom: 1px solid ${neutralBorder(pillar)};
		:hover {
			border-bottom: 1px solid ${pillarPalette_DO_NOT_USE[pillar].dark};
		}
	}
`;

const brandingStyle = (pillar: ArticleTheme) => css`
	padding: 10px 0;
	${LinkStyle(pillar)}

	a, a:hover {
		display: block;
		border-bottom: none;
		${textSans.xxsmall()}
	}
`;

const brandingLabelStyle = css`
	${textSans.xxsmall()};
`;

const brandingLogoStyle = css`
	padding: 10px 0;
`;

export const Branding: React.FC<{
	branding: BrandingType;
	pillar: ArticleTheme;
}> = ({ branding, pillar }) => {
	const { logo, sponsorName } = branding;

	return (
		<div css={brandingStyle(pillar)}>
			<div css={brandingLabelStyle}>{branding.logo.label}</div>
			<a
				css={brandingLogoStyle}
				href={logo.link}
				data-sponsor={sponsorName.toLowerCase()}
				rel="nofollow"
				aria-label={`Visit the ${sponsorName} website`}
			>
				<amp-img
					src={logo.src}
					width={logo.dimensions.width}
					height={logo.dimensions.height}
					alt={sponsorName}
				/>
			</a>
			<a href={branding.aboutThisLink}>About this content</a>
		</div>
	);
};

export const BrandingRegionContainer: React.FC<{
	children: (branding: BrandingType) => React.ReactNode;
	commercialProperties: CommercialProperties;
}> = ({ children, commercialProperties }) => (
	<>
		{Object.keys(commercialProperties)
			.filter(isEditionId)
			.map((editionId) => {
				const { branding } = commercialProperties[editionId];
				return branding !== undefined ? (
					<div key={editionId} css={regionClasses[editionId]}>
						{children(branding)}
					</div>
				) : null;
			})}
	</>
);
