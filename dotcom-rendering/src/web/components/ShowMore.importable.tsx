import { css } from '@emotion/react';
import {
	from,
	neutral,
	space,
	visuallyHidden,
} from '@guardian/source-foundations';
import {
	Button,
	InlineError,
	SvgCross,
	SvgPlus,
} from '@guardian/source-react-components';
import { useEffect, useState } from 'react';
import { enhanceCards } from '../../model/enhanceCards';
import type { DCRContainerPalette, FEFrontCard } from '../../types/front';
import { shouldPadWrappableRows } from '../lib/dynamicSlices';
import { useApi } from '../lib/useApi';
import { useOnce } from '../lib/useOnce';
import { LI } from './Card/components/LI';
import { UL } from './Card/components/UL';
import { FrontCard } from './FrontCard';

function decideButtonText({
	isOpen,
	loading,
	containerTitle,
}: {
	isOpen: boolean;
	loading: boolean;
	containerTitle: string;
}) {
	if (isOpen && loading) return 'Loading';
	if (isOpen) return `Less ${containerTitle}`;
	return `More ${containerTitle}`;
}

type Props = {
	containerTitle: string;
	path: string;
	containerId: string;
	showAge: boolean;
	baseUrl: string;
	containerPalette?: DCRContainerPalette;
};

export const ShowMore = ({
	containerTitle,
	path,
	containerId,
	showAge,
	baseUrl,
	containerPalette,
}: Props) => {
	const [existingCardLinks, setExistingCardLinks] = useState<string[]>([]);
	const [isOpen, setIsOpen] = useState(false);

	useOnce(() => {
		const container = document.getElementById(containerId);
		const containerLinks = Array.from(
			container?.querySelectorAll('a') ?? [],
		)
			.map((element) => element.attributes.getNamedItem('href')?.value)
			// Remove values that are not strings and coerce the type to a string[]
			.filter((item): item is string => !!item);

		setExistingCardLinks(containerLinks);
	}, []);

	/** We only pass an actual URL to SWR when 'showMore' is true.
	 * Toggling 'isOpen' will trigger a re-render
	 *   @see https://swr.vercel.app/docs/conditional-fetching#conditional
	 */
	const url = isOpen
		? `${baseUrl}/${path}/show-more/${containerId}.json?dcr=true`
		: undefined;
	const { data, error, loading } = useApi<FEFrontCard[]>(url);

	const filteredData =
		data &&
		enhanceCards(data).filter(
			(card) => !existingCardLinks.includes(card.url),
		);

	const showMoreContainerId = `show-more-${containerId}`;

	useEffect(() => {
		/**
		 * Focus the first of the new cards when they're loaded in.
		 * There's no need to check `isOpen` here because if `isOpen` is
		 * `false` then `filteredData` will be `undefined`.
		 * */
		if (filteredData?.length) {
			const maybeFirstCard = document.querySelector(
				`#${showMoreContainerId} [data-link-name="${filteredData[0].dataLinkName}"]`,
			);
			if (maybeFirstCard instanceof HTMLElement) {
				maybeFirstCard.focus();
			}
		}
	}, [filteredData, showMoreContainerId]);

	return (
		<>
			<div id={showMoreContainerId} aria-live="polite">
				{filteredData && (
					<>
						<div
							css={css`
								height: ${space[3]}px;
							`}
						/>
						<UL direction="row" wrapCards={true}>
							{filteredData.map((card, cardIndex) => {
								const columns = 3;
								return (
									<LI
										key={card.url}
										percentage="33.333%"
										stretch={
											filteredData.length % columns !== 1
										}
										padSides={true}
										showDivider={cardIndex % columns !== 0}
										offsetBottomPaddingOnDivider={shouldPadWrappableRows(
											cardIndex,
											filteredData.length -
												(filteredData.length % columns),
											columns,
										)}
									>
										<FrontCard
											trail={card}
											imageUrl={undefined}
											avatarUrl={undefined}
											containerPalette={containerPalette}
											showAge={showAge}
											headlineSize="small"
										/>
									</LI>
								);
							})}
						</UL>
					</>
				)}
			</div>
			<div
				css={css`
					display: flex;
				`}
			>
				<Button
					priority="tertiary"
					size="small"
					icon={isOpen ? <SvgCross /> : <SvgPlus />}
					isLoading={loading}
					iconSide="left"
					onClick={() => setIsOpen(!isOpen)}
					cssOverrides={css`
						margin-top: ${space[4]}px;
						margin-right: 10px;
						color: ${neutral[100]};
						background-color: ${neutral[7]};
						&:hover {
							color: ${neutral[7]};
						}
						${from.tablet} {
							margin-left: 10px;
						}
					`}
					aria-controls={showMoreContainerId}
					aria-expanded={isOpen && !loading}
					aria-describedby={`show-more-button-${containerId}-description`}
					data-cy={`show-more-button-${containerId}`}
				>
					{decideButtonText({
						isOpen,
						loading,
						containerTitle,
					})}
				</Button>
				<span
					id={`show-more-button-${containerId}-description`}
					css={css`
						${visuallyHidden}
					`}
				>
					Loads more stories and moves focus to first new story.
				</span>
				{error && (
					<InlineError
						cssOverrides={css`
							font-size: 14px;
							padding-top: 18px;
						`}
					>
						Sorry, failed to load more stories. Retrying in a few
						seconds.
					</InlineError>
				)}
			</div>
		</>
	);
};
