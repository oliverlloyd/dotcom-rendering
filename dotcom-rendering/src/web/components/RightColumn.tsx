import { css } from 'npm:@emotion/react';
import { from, until } from 'npm:@guardian/source-foundations';

const hideBelowDesktop = css`
	${until.desktop} {
		/* below 980 */
		display: none;
	}

	${from.desktop} {
		/* above 980 */
		height: 100%;
		display: block;
		flex-basis: 300px;
		flex-grow: 0;
		flex-shrink: 0;
	}
`;

type Props = {
	children: React.ReactNode;
};

export const RightColumn = ({ children }: Props) => {
	return <section css={hideBelowDesktop}>{children}</section>;
};
