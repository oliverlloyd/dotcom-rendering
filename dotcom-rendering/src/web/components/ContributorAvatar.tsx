import { css } from 'npm:@emotion/react';
import { from } from 'npm:@guardian/source-foundations';

const imageStyles = css`
	height: 9.375rem;

	${from.mobileLandscape} {
		height: 11.25rem;
	}
`;

export const ContributorAvatar: React.FC<{
	imageSrc: string;
	imageAlt: string;
}> = ({ imageSrc, imageAlt }) => {
	return <img src={imageSrc} alt={imageAlt} css={imageStyles} />;
};
