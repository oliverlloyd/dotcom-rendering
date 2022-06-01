import type { SerializedStyles } from '@emotion/react';
import { css } from '@emotion/react';
import Img from '@guardian/common-rendering/src/components/img';
import type { Sizes } from '@guardian/common-rendering/src/sizes';
import type { ArticleFormat } from '@guardian/libs';
import {
	from,
	neutral,
	remSpace,
	textSans,
} from '@guardian/source-foundations';
import type { Option } from '@guardian/types';
import { map, none, OptionKind, some, withDefault } from '@guardian/types';
import type { Image } from 'bodyElement';
import { maybeRender, pipe } from 'lib';
import type { FC } from 'react';
import { getThemeStyles } from 'themeStyles';

const width = '100%';

type Props = {
	image: Image;
	format: ArticleFormat;
};

type CaptionProps = {
	details: CaptionDetails;
	format: ArticleFormat;
};

type CaptionDetails = {
	location: Option<string[]>;
	description: Option<string[]>;
};

const sizes: Sizes = {
	mediaQueries: [],
	default: width,
};

const styles = css`
	margin: 0 0 ${remSpace[6]};
	width: ${width};
	position: relative;
	p {
		${from.tablet} {
			margin: 0;
			padding: 0;
		}
	}
`;

const getCaptionDetails = (oDoc: Option<DocumentFragment>): CaptionDetails => {
	const details: CaptionDetails = {
		location: some([]),
		description: some([]),
	};

	const pushToDetails = (
		section: 'location' | 'description',
		details: CaptionDetails,
		node: Node,
	): CaptionDetails => {
		const detailsSection = details[section];

		node.textContent &&
			detailsSection.kind === OptionKind.Some &&
			detailsSection.value.push(node.textContent);

		return details;
	};

	const parseCaptionNode = (doc: DocumentFragment): CaptionDetails =>
		Array.from(doc.childNodes).reduce((details, node) => {
			if (node.nodeName === 'STRONG') {
				details = pushToDetails('location', details, node);
			} else if (
				node.nodeName === '#text' ||
				node.nodeName === 'A' ||
				node.nodeName === 'EM'
			) {
				details = pushToDetails('description', details, node);
			}
			return details;
		}, details);

	return pipe(
		oDoc,
		map(parseCaptionNode),
		withDefault<CaptionDetails>(details),
	);
};

const triangleStyles = (color: string): SerializedStyles => css`
	fill: ${color};
	height: 0.6875rem;
	width: 0.8125rem;
	padding-right: ${remSpace[1]};
`;

const Triangle: FC<{ color: string }> = ({ color }) => (
	<svg
		viewBox="0 0 13 11"
		css={triangleStyles(color)}
		xmlns="http://www.w3.org/2000/svg"
	>
		<path d="M6.5 0L13 11H0L6.5 0Z" />
	</svg>
);

const CaptionLocation: FC<{ location: string[]; triangleColor: string }> = ({
	location,
	triangleColor,
}) => {
	const styles = css`
		${textSans.small({ fontWeight: 'bold' })}
		color: ${neutral[100]};
		margin: 0;
		padding: ${remSpace[1]} 0 0;

		${from.tablet} {
			padding: 0;
			svg {
				transform: translateX(-10%) translateY(-15%) rotateZ(-90deg);
			}
		}
	`;
	return (
		<h2 css={styles}>
			<Triangle color={triangleColor} />
			{location.join(', ')}
		</h2>
	);
};

const CaptionDescription: FC<{ description: string[] }> = ({ description }) => {
	const styles = css`
		${textSans.small({ lineHeight: 'regular' })};
		color: ${neutral[100]};
		margin: 0;
		padding: 0;
		display: inline;
	`;
	return (
		<>
			{description.map((desc, i) => (
				<p key={i} css={styles}>
					{desc}
				</p>
			))}
		</>
	);
};

const GalleryImageCaption: FC<CaptionProps> = ({ details, format }) => {
	const { kicker } = getThemeStyles(format.theme);
	const tabletWidth = '170px';
	const styles = css`
		${from.tablet} {
			position: absolute;
			top: -${remSpace[1]};
			width: ${tabletWidth};
			right: calc(-${tabletWidth} - 2rem);
		}
	`;
	return (
		<div css={styles} className="editions-gallery-caption">
			{maybeRender(details.location, (location) => (
				<CaptionLocation location={location} triangleColor={kicker} />
			))}
			{maybeRender(details.description, (description) => (
				<CaptionDescription description={description} />
			))}
		</div>
	);
};

const GalleryImage: FC<Props> = ({ image, format }) => {
	return (
		<figure css={styles} className="editions-gallery-figure">
			<Img
				image={image}
				sizes={sizes}
				className={none}
				format={format}
				supportsDarkMode={false}
				lightbox={some({
					className: 'js-launch-slideshow',
					caption: none,
					credit: none,
				})}
			/>
			<GalleryImageCaption
				details={getCaptionDetails(image.caption)}
				format={format}
			/>
		</figure>
	);
};

export default GalleryImage;
