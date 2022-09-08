import { css } from 'npm:@emotion/react';

type Props = {
	title: string;
	srcDoc: string;
};

export const MainMediaEmbedBlockComponent = ({ title, srcDoc }: Props) => (
	<iframe
		css={css`
			width: 100%;
			height: 100vh;
		`}
		title={title}
		srcDoc={srcDoc}
	/>
);
