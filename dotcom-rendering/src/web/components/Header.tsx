import { css } from 'npm:@emotion/react';
import { brand } from 'npm:@guardian/source-foundations';
import type { EditionId } from '../../types/edition.ts';
import { EditionDropdown } from './EditionDropdown.importable.tsx';
import { Hide } from './Hide.tsx';
import { Island } from './Island.tsx';
import { Links } from './Links.importable.tsx';
import { Logo } from './Logo.tsx';
import { ReaderRevenueLinks } from './ReaderRevenueLinks.importable.tsx';

const headerStyles = css`
	/* Ensure header height contains it's children */
	overflow: auto;
	/* Prevent a scrollbar appearing here on IE/Edge */
	-ms-overflow-style: none;
	background-color: ${brand[400]};
`;

type Props = {
	editionId: EditionId;
	idUrl?: string;
	mmaUrl?: string;
	supporterCTA: string;
	discussionApiUrl: string;
	urls: ReaderRevenueCategories;
	remoteHeader: boolean;
	contributionsServiceUrl: string;
	idApiUrl: string;
};

export const Header = ({
	editionId,
	idUrl,
	mmaUrl,
	supporterCTA,
	discussionApiUrl,
	urls,
	remoteHeader,
	contributionsServiceUrl,
	idApiUrl,
}: Props) => (
	<div css={headerStyles}>
		<Hide when="below" breakpoint="desktop">
			<Island deferUntil="idle">
				<EditionDropdown
					editionId={editionId}
					dataLinkName="nav2 : topbar : edition-picker: toggle"
				/>
			</Island>
		</Hide>
		<Logo />
		<Island deferUntil="idle" clientOnly={true}>
			<ReaderRevenueLinks
				urls={urls}
				editionId={editionId}
				dataLinkNamePrefix="nav2 : "
				inHeader={true}
				remoteHeader={remoteHeader}
				contributionsServiceUrl={contributionsServiceUrl}
			/>
		</Island>
		<div id="links-root">
			<Island>
				<Links
					supporterCTA={supporterCTA}
					idUrl={idUrl}
					mmaUrl={mmaUrl}
					discussionApiUrl={discussionApiUrl}
					idApiUrl={idApiUrl}
				/>
			</Island>
		</div>
	</div>
);
