import { css, Global } from 'npm:@emotion/react';
import { brandAlt, focusHalo, neutral } from 'npm:@guardian/source-foundations';
import { StrictMode } from 'npm:react';
import type { NavType } from '../../model/extract-nav.ts';
import type { DCRFrontType } from '../../types/front.ts';
import { FrontLayout } from '../layouts/FrontLayout.tsx';
import { AlreadyVisited } from './AlreadyVisited.importable.tsx';
import { CoreVitals } from './CoreVitals.importable.tsx';
import { FetchCommentCounts } from './FetchCommentCounts.importable.tsx';
import { FocusStyles } from './FocusStyles.importable.tsx';
import { Island } from './Island.tsx';
import { ShowHideContainers } from './ShowHideContainers.importable.tsx';
import { SkipTo } from './SkipTo.tsx';

type Props = {
	front: DCRFrontType;
	NAV: NavType;
};

/**
 * @description
 * FrontPage is a high level wrapper for front pages on Dotcom. Sets strict mode and some globals
 *
 * @param {Props} props
 * @param {DCRFrontType} props.front - The article JSON data
 * @param {NAVType} props.NAV - The article JSON data
 * */
export const FrontPage = ({ front, NAV }: Props) => {
	return (
		<StrictMode>
			<Global
				styles={css`
					/* Crude but effective mechanism. Specific components may need to improve on this behaviour. */
					/* The not(.src...) selector is to work with Source's FocusStyleManager. */
					*:focus {
						${focusHalo}
					}
					::selection {
						background: ${brandAlt[400]};
						color: ${neutral[7]};
					}
				`}
			/>
			<SkipTo id="maincontent" label="Skip to main content" />
			<SkipTo id="navigation" label="Skip to navigation" />
			<Island clientOnly={true} deferUntil="idle">
				<AlreadyVisited />
			</Island>
			<Island clientOnly={true} deferUntil="idle">
				<FocusStyles />
			</Island>
			<Island clientOnly={true} deferUntil="idle">
				<CoreVitals />
			</Island>
			<Island clientOnly={true} deferUntil="idle">
				<FetchCommentCounts repeat={true} />
			</Island>
			<Island clientOnly={true} expediteLoading={true}>
				<ShowHideContainers />
			</Island>
			<FrontLayout front={front} NAV={NAV} />
		</StrictMode>
	);
};
