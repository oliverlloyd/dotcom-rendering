import {
	Button,
	SvgPlus,
	SvgMinus,
	SvgSpinner,
} from '@guardian/source-react-components';
import { neutral, remSpace } from '@guardian/source-foundations';
import { css } from '@emotion/react';
import { useState } from 'react';

/**
 * addDoc
 * @param collectionId
 * @param ajaxUrl
 */

// function getUrl(collectionId: string, ajaxUrl: string): string | undefined {
// 	try {
// 		const url = new URL(`${collectionId}`, ajaxUrl);
// 		url.searchParams.set('dcr', 'true');
//
// 		return url.href;
// 	} catch {
// 		window.guardian.modules.sentry.reportError(
// 			new Error(
// 				`An error was thrown trying to get more cards using collectionId: ${collectionId} and ajaxUrl: ${ajaxUrl}`,
// 			),
// 			'fronts-showMoreCards',
// 		);
// 		// Returning undefined here means the request is never made
// 		// See: https://swr.vercel.app/docs/conditional-fetching#conditional
// 		return undefined;
// 	}
// }

export const ShowMore: React.FC<{
	id: string;
	displayName: string;
}> = ({ displayName }) => {
	const [isLoading, setLoading] = useState(false);
	const [isDataFetched, setDataFetched] = useState(false);
	const [showLess, setShowLess] = useState(false);

	if (isDataFetched && !showLess) {
		return (
			// somewhere here we'll add the extra cards
			<Button
				size="xsmall"
				icon={<SvgMinus />}
				onClick={() => setShowLess(false)}
			>
				Less
			</Button>
		);
	} else if (isLoading) {
		return (
			<Button
				size="xsmall"
				icon={<SvgSpinner />}
				iconSide="left"
				cssOverrides={css`
					background-color: ${neutral[0]};
					margin-top: ${remSpace[1]};
					margin-left: ${remSpace[1]};
				`}
			>
				Loading...
			</Button>
		);
	} else {
		return (
			<Button
				size="xsmall"
				icon={<SvgPlus />}
				iconSide="left"
				cssOverrides={css`
					background-color: ${neutral[0]};
					margin-top: ${remSpace[1]};
					margin-left: ${remSpace[1]};
				`}
				onClick={() => {
					setLoading(true);
					setTimeout(() => 3000); // Mimicking fetching time. Will be replaced.
					setDataFetched(true);
					setShowLess(true);
				}}
			>
				More {displayName}
			</Button>
		);
	}
};
