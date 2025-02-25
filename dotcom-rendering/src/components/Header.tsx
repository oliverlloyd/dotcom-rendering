import { css } from '@emotion/react';
import { brand } from '@guardian/source-foundations';
import { center } from '../lib/center';
import type { EditionId } from '../lib/edition';
import { HeaderTopBar } from './HeaderTopBar.importable';
import { Island } from './Island';
import { Logo } from './Logo';
import { Snow } from './Snow.importable';
import { SupportTheG } from './SupportTheG.importable';

const headerStyles = css`
	background-color: ${brand[400]};
`;

type Props = {
	editionId: EditionId;
	idUrl?: string;
	mmaUrl?: string;
	discussionApiUrl: string;
	urls: ReaderRevenueCategories;
	remoteHeader: boolean;
	contributionsServiceUrl: string;
	idApiUrl: string;
	isInEuropeTest: boolean;
	headerTopBarSearchCapiSwitch: boolean;
};

export const Header = ({
	editionId,
	idUrl,
	mmaUrl,
	discussionApiUrl,
	urls,
	remoteHeader,
	contributionsServiceUrl,
	idApiUrl,
	headerTopBarSearchCapiSwitch,
	isInEuropeTest,
}: Props) => (
	<div css={headerStyles}>
		<Island>
			<HeaderTopBar
				editionId={editionId}
				dataLinkName="nav3 : topbar : edition-picker: toggle"
				idUrl={idUrl}
				mmaUrl={mmaUrl}
				discussionApiUrl={discussionApiUrl}
				idApiUrl={idApiUrl}
				headerTopBarSearchCapiSwitch={headerTopBarSearchCapiSwitch}
				isInEuropeTest={isInEuropeTest}
			/>
		</Island>
		<div
			css={[
				center,
				css`
					overflow: hidden;
				`,
			]}
		>
			<Island deferUntil="hash" clientOnly={true}>
				<Snow />
			</Island>
			<Logo editionId={editionId} />
			<Island deferUntil="idle" clientOnly={true}>
				<SupportTheG
					urls={urls}
					editionId={editionId}
					dataLinkNamePrefix="nav3 : "
					inHeader={true}
					remoteHeader={remoteHeader}
					contributionsServiceUrl={contributionsServiceUrl}
				/>
			</Island>
		</div>
	</div>
);
