import { css } from 'npm:@emotion/react';
import {
	between,
	from,
	headline,
	news,
	space,
	text,
	until,
} from 'npm:@guardian/source-foundations';
import type { EditionId } from '../../types/edition.ts';
import type { DCRContainerPalette } from '../../types/front.ts';
import type { Colour } from '../../types/palette.ts';
import { decideContainerOverrides } from '../lib/decideContainerOverrides.ts';
import { getEditionFromId } from '../lib/edition.ts';

type Props = {
	title?: string;
	fontColour?: string;
	description?: string;
	url?: string;
	containerPalette?: DCRContainerPalette;
	showDateHeader?: boolean;
	editionId?: EditionId;
};

const linkStyles = css`
	text-decoration: none;
	color: ${text.anchorSecondary};

	:hover {
		text-decoration: underline;
	}
`;

const headerStyles = (fontColour?: string) => css`
	${headline.xsmall({ fontWeight: 'bold' })};
	color: ${fontColour || text.primary};
	padding-bottom: ${space[2]}px;
	padding-top: ${space[1]}px;
	margin-left: 0;

	${from.tablet} {
		margin-left: 10px;
	}

	${from.leftCol} {
		margin-left: 0;
	}
`;

const descriptionStyles = (fontColour?: string) => css`
	${headline.xxxsmall({ fontWeight: 'medium' })};
	color: ${fontColour || text.supporting};
	p {
		/* Handle paragraphs in the description */
		margin-bottom: ${space[3]}px;
	}
	a {
		color: ${text.primary};
		text-decoration: none;
	}
	${between.tablet.and.leftCol} {
		margin-left: 10px;
	}

	${until.leftCol} {
		margin-bottom: ${space[4]}px;
	}
`;

const dateTextStyles = (color: Colour) => css`
	${headline.xxxsmall({ fontWeight: 'bold' })};
	color: ${color};
`;

/**
 * ContainerTitle
 *
 * For the date header to be shown, a valid editionId must be passed, as the
 * date is based off of the edition timezone.
 */
export const ContainerTitle = ({
	title,
	fontColour,
	description,
	url,
	containerPalette,
	showDateHeader,
	editionId,
}: Props) => {
	if (!title) return null;

	const overrides =
		containerPalette && decideContainerOverrides(containerPalette);

	const now = new Date();
	const locale = editionId && getEditionFromId(editionId).locale;

	return (
		<div>
			{url ? (
				<a css={linkStyles} href={url}>
					<h2 css={headerStyles(fontColour)}>{title}</h2>
				</a>
			) : (
				<h2 css={headerStyles(fontColour)}>{title}</h2>
			)}
			{!!description && (
				<p
					css={descriptionStyles(fontColour)}
					dangerouslySetInnerHTML={{ __html: description }}
				/>
			)}
			{showDateHeader && editionId && (
				<div>
					<span
						css={dateTextStyles(
							overrides?.text.containerDate || news[400],
						)}
					>
						{now.toLocaleDateString(locale, { weekday: 'long' })}
					</span>
					<span
						css={[
							css`
								display: block;
							`,
							dateTextStyles(
								overrides?.text.containerDate || news[400],
							),
						]}
					>
						{now.toLocaleDateString(locale, {
							day: 'numeric',
							month: 'long',
							year: 'numeric',
						})}
					</span>
				</div>
			)}
		</div>
	);
};
