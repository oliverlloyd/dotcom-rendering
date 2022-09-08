import { css } from 'npm:@emotion/react';
import type { ArticleFormat } from 'npm:@guardian/libs';
import { ArticleDesign } from 'npm:@guardian/libs';
import { from } from 'npm:@guardian/source-foundations';
import type { ServerSideTests, Switches } from '../../types/config.ts';
import {
	adCollapseStyles,
	labelStyles as adLabelStyles,
} from '../components/AdSlot.ts';
import { interactiveLegacyClasses } from '../layouts/lib/interactiveLegacyStyling.ts';
import { RenderArticleElement } from './renderElement.ts';
import { withSignInGateSlot } from './withSignInGateSlot.ts';

// This is required for spacefinder to work!
const commercialPosition = css`
	position: relative;
`;

// These styles are applied to dynamic ad slots (i.e. slots that are not fixed), e.g. ads inserted
// by spacefinder across all layout types (articles, comments, etc)
//
// spacefinder is scoped to placing elements in spaces within the .article-body-commercial-selector
// hence we scope the styles at the same level
const adStylesDynamic = css`
	${adLabelStyles}
	${adCollapseStyles}

	.ad-slot--im {
		float: left;
		width: 130px;
		${from.mobileLandscape} {
			width: 220px;
		}

		&:not(.ad-slot--rendered) {
			width: 0;
			height: 0;
		}

		&.ad-slot--rendered {
			margin: 5px 10px 6px 0;
			${from.mobileLandscape} {
				margin-bottom: 12px;
				margin-right: 20px;
			}
		}
	}
`;

export const ArticleRenderer: React.FC<{
	format: ArticleFormat;
	elements: CAPIElement[];
	adTargeting?: AdTargeting;
	host?: string;
	pageId: string;
	webTitle: string;
	ajaxUrl: string;
	contentType: string;
	sectionName: string;
	tags: TagType[];
	isPaidContent: boolean;
	isPreview?: boolean;
	idUrl: string;
	switches: Switches;
	isDev: boolean;
	isAdFreeUser: boolean;
	isSensitive: boolean;
	abTests?: ServerSideTests;
}> = ({
	format,
	elements,
	adTargeting,
	host,
	pageId,
	webTitle,
	ajaxUrl,
	contentType,
	sectionName,
	tags,
	isPaidContent,
	isPreview,
	idUrl,
	switches,
	isAdFreeUser,
	isSensitive,
	isDev,
	abTests,
}) => {
	const renderedElements = elements.map((element, index) => {
		return (
			<RenderArticleElement
				// eslint-disable-next-line react/no-array-index-key -- This is only rendered once so we can safely use index to suppress the warning
				key={index}
				format={format}
				element={element}
				adTargeting={adTargeting}
				ajaxUrl={ajaxUrl}
				host={host}
				index={index}
				isMainMedia={false}
				pageId={pageId}
				webTitle={webTitle}
				isAdFreeUser={isAdFreeUser}
				isSensitive={isSensitive}
				switches={switches}
				abTests={abTests}
			/>
		);
	});

	// const cleanedElements = elements.map(element =>
	//     'html' in element ? { ...element, html: clean(element.html) } : element,
	// );
	// ^^ Until we decide where to do the "isomorphism split" in this this code is not safe here.
	//    But should be soon.
	return (
		<div
			className={[
				'article-body-commercial-selector',
				'article-body-viewer-selector',

				// Note, this class MUST be on the *direct parent* of the
				// elements for some legacy interactive styling to work.
				format.design === ArticleDesign.Interactive
					? interactiveLegacyClasses.contentMainColumn
					: '',
			].join(' ')}
			css={[adStylesDynamic, commercialPosition]}
		>
			{/* Insert the placeholder for the sign in gate on the 2nd article element */}
			{withSignInGateSlot({
				renderedElements,
				format,
				contentType,
				sectionName,
				tags,
				isPaidContent,
				isPreview,
				host,
				pageId,
				idUrl,
				switches,
				isSensitive,
				isDev,
			})}
		</div>
	); // classname that space finder is going to target for in-body ads in DCR
};
