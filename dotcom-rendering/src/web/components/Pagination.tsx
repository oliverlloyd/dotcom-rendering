import { css } from '@emotion/react';

import { space } from '@guardian/src-foundations';
import { EditorialLinkButton } from '@guardian/source-react-components-development-kitchen';
import { textSans } from '@guardian/src-foundations/typography';
import {
	SvgChevronLeftSingle,
	SvgChevronRightSingle,
} from '@guardian/src-icons';
import { until } from '@guardian/src-foundations/mq';
import { Hide } from './Hide';

type Props = {
	format: ArticleFormat;
	currentPage: number;
	totalPages: number;
	newest?: string;
	newer?: string;
	oldest?: string;
	older?: string;
};

const Container = ({ children }: { children: React.ReactNode }) => (
	<nav
		// Used to scroll the page to this point when using permalinks
		id="liveblog-navigation"
		css={css`
			display: flex;
			flex-direction: row;
			justify-content: space-between;
		`}
	>
		{children}
	</nav>
);

const Section = ({ children }: { children: React.ReactNode }) => (
	<section
		css={css`
			display: flex;
			align-items: center;
		`}
	>
		{children}
	</section>
);

const Bold = ({ children }: { children: React.ReactNode }) => (
	<div
		css={css`
			font-weight: bold;
		`}
	>
		{children}
	</div>
);

const Position = ({ children }: { children: React.ReactNode }) => (
	<div
		css={css`
			display: flex;
			flex-direction: row;
			${textSans.small()}
		`}
	>
		{children}
	</div>
);

const Of = () => <span>&nbsp;of&nbsp;</span>;

const Space = () => (
	<div
		css={css`
			${until.phablet} {
				width: ${space[2]}px;
			}
			width: ${space[4]}px;
		`}
	/>
);

export const Pagination = ({
	format,
	currentPage,
	totalPages,
	oldest,
	older,
	newest,
	newer,
}: Props) => {
	return (
		<Container>
			<Section>
				<EditorialLinkButton
					format={format}
					size="small"
					priority="tertiary"
					icon={<SvgChevronLeftSingle />}
					iconSide="left"
					href={newest}
				>
					<Hide when="below" breakpoint="phablet">
						Newest
					</Hide>
				</EditorialLinkButton>
				<Space />
				<EditorialLinkButton
					format={format}
					size="small"
					priority="tertiary"
					icon={<SvgChevronLeftSingle />}
					hideLabel={true}
					href={newer}
				>
					<Hide when="below" breakpoint="phablet">
						Previous
					</Hide>
				</EditorialLinkButton>
			</Section>
			<Section>
				<Position>
					<Bold>{currentPage}</Bold>
					<Of />
					<Bold>{totalPages}</Bold>
				</Position>
			</Section>
			<Section>
				<EditorialLinkButton
					format={format}
					size="small"
					priority="tertiary"
					icon={<SvgChevronRightSingle />}
					hideLabel={true}
					href={older}
				>
					<Hide when="below" breakpoint="phablet">
						Next
					</Hide>
				</EditorialLinkButton>
				<Space />
				<EditorialLinkButton
					format={format}
					size="small"
					priority="tertiary"
					icon={<SvgChevronRightSingle />}
					iconSide="right"
					href={oldest}
				>
					<Hide when="below" breakpoint="phablet">
						Oldest
					</Hide>
				</EditorialLinkButton>
			</Section>
		</Container>
	);
};
