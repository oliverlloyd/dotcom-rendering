import { css } from '@emotion/react';
import {
	from,
	neutral,
	space,
	visuallyHidden,
} from '@guardian/source-foundations';
import { SvgGuardianLogo } from '@guardian/source-react-components';
import type { EditionId } from '../lib/edition';
import { getZIndex } from '../lib/getZIndex';
import { SvgGuardianAustraliaLogo } from './SvgGuardianAustraliaLogo';
import { SvgGuardianBestNewspaperLogo } from './SvgGuardianBestNewspaperLogo';

const linkStyles = css`
	float: right;
	margin-top: 6px;
	margin-right: 54px;
	margin-bottom: 10px;
	width: 146px;

	${from.mobileMedium} {
		margin-right: 10px;
		width: 195px;
	}
	${from.mobileLandscape} {
		margin-right: 20px;
	}
	${from.tablet} {
		width: 224px;
	}
	${from.desktop} {
		margin-top: 5px;
		margin-bottom: ${space[3]}px;
		position: relative;
		width: 295px;
	}
	${from.wide} {
		margin-right: 96px;
	}

	${getZIndex('TheGuardian')}
`;

type Props = {
	editionId: EditionId;
};

export const Logo = ({ editionId }: Props) => {
	switch (editionId) {
		case 'UK':
			return (
				<a css={linkStyles} href="/" data-link-name="nav3 : logo">
					<span
						css={css`
							${visuallyHidden};
						`}
					>
						The Guardian - Back to home
					</span>
					<SvgGuardianBestNewspaperLogo />
				</a>
			);
		case 'AU':
			return (
				<a css={linkStyles} href="/" data-link-name="nav3 : logo">
					<span
						css={css`
							${visuallyHidden};
						`}
					>
						The Guardian - Back to home
					</span>
					<SvgGuardianAustraliaLogo />
				</a>
			);

		default:
			return (
				<a css={linkStyles} href="/" data-link-name="nav3 : logo">
					<span
						css={css`
							${visuallyHidden};
						`}
					>
						The Guardian - Back to home
					</span>
					<SvgGuardianLogo textColor={neutral[100]} />
				</a>
			);
	}
};
