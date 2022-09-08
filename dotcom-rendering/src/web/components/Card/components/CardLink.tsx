import { css } from 'npm:@emotion/react';
import { focusHalo } from 'npm:@guardian/source-foundations';
import type { DCRContainerPalette } from '../../../../types/front.ts';
import { getZIndex } from '../../../lib/getZIndex.ts';

const fauxLinkStyles = css`
	position: absolute;
	${getZIndex('card-link')};
	top: 0;
	right: 0;
	bottom: 0;
	left: 0;
	background-color: transparent;

	:focus {
		${focusHalo};
	}
`;

type Props = {
	linkTo: string;
	headlineText: string;
	containerPalette?: DCRContainerPalette;
	dataLinkName?: string;
};

export const CardLink = ({
	linkTo,
	headlineText,
	dataLinkName = 'article',
}: Props) => {
	return (
		<a
			href={linkTo}
			css={fauxLinkStyles}
			data-link-name={dataLinkName}
			aria-label={headlineText}
		/>
	);
};
