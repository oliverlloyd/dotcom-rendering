import { css, Global } from 'npm:@emotion/react';
import { TOP_ABOVE_NAV_HEIGHT } from 'npm:@guardian/commercial-core/dist/esm/constants';
import type { ArticleDisplay } from 'npm:@guardian/libs';
import { border, neutral, space } from 'npm:@guardian/source-foundations';
import { AdSlot, labelHeight } from './AdSlot.tsx';
import { Hide } from './Hide.tsx';

type Props = {
	display: ArticleDisplay;
};

const headerWrapper = css`
	position: static;
`;

const padding = space[4] + 2; // 18px - currently being reviewed

const headerAdWrapper = css`
	z-index: 1080;
	width: 100%;
	background-color: ${neutral[97]};
	min-height: ${TOP_ABOVE_NAV_HEIGHT + padding + labelHeight}px;
	border-bottom: 1px solid ${border.secondary};
	padding-bottom: ${padding}px;

	display: flex;
	flex-direction: column;
	justify-content: center;

	position: sticky;
	top: 0;
`;

export const HeaderAdSlot = ({ display }: Props) => (
	<div css={headerWrapper}>
		<Global
			styles={css`
				/**
				* Hides the top-above-nav ad-slot container when a
				* Bonzai TrueSkin (Australian 3rd Party page skin) is shown
				* Temporary fix - introduced 06-Sep-2021
				*/
				.bz-custom-container
					~ #bannerandheader
					.top-banner-ad-container {
					display: none;
				}
			`}
		/>
		<Hide when="below" breakpoint="tablet">
			<div css={[headerAdWrapper]} className="top-banner-ad-container">
				<AdSlot position="top-above-nav" display={display} />
			</div>
		</Hide>
	</div>
);
