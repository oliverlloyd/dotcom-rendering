import { css } from '@emotion/react';
import {
	from,
	neutral,
	news,
	text,
	textSans,
} from '@guardian/source-foundations';
import { useEffect, useRef, useState } from 'react';
import type { SubNavType } from '../../model/extract-nav';
import type { Palette } from '../../types/palette';
import { decidePalette } from '../lib/decidePalette';

type Props = {
	subNavSections: SubNavType;
	currentNavLink: string;
	format: ArticleFormat;
};

const wrapperCollapsedStyles = css`
	height: 36px;
	overflow: hidden;

	${from.tablet} {
		height: 42px;
	}
`;

const rootSubnavStyles = css`
	list-style: none;
	/* https://developer.mozilla.org/en-US/docs/Web/CSS/list-style#accessibility_concerns */
	padding: 0 5px;

	${from.mobileLandscape} {
		padding: 0 15px;
	}

	li {
		float: left;
		display: block;
	}
`;

const expandedStyles = css`
	${rootSubnavStyles};
`;

const collapsedStyles = css`
	${rootSubnavStyles};
	max-width: calc(100% - 60px);

	${from.mobileLandscape} {
		max-width: calc(100% - 70px);
	}
`;

const fontStyle = (palette: Palette) => css`
	${textSans.small()};
	font-size: 14px;
	${from.tablet} {
		${textSans.medium()};
		font-size: 16px;
	}
	font-weight: 500;
	color: ${palette.text.article};
	padding: 0 5px;
	height: 36px;
	/* Design System: Line height is being used here for centering layout, we need the primitives */
	line-height: 36px;

	${from.tablet} {
		height: 42px;
		/* Design System: Line height is being used here for centering layout, we need the primitives */
		line-height: 42px;
	}
`;

const linkStyle = (palette: Palette) => css`
	${fontStyle(palette)};
	float: left;
	text-decoration: none;

	:hover {
		color: ${palette.text.articleLinkHover};
	}

	:focus {
		line-height: 26px;
		height: 26px;
		margin-top: 5px;

		${from.tablet} {
			height: 32px;
			line-height: 32px;
		}
	}
`;

const selected = css`
	font-weight: 700;
`;

const spaceBetween = css`
	display: flex;
	justify-content: space-between;
`;

const showMoreStyle = (palette: Palette) => css`
	${fontStyle(palette)};

	padding-left: 10px;
	padding-right: 10px;

	cursor: pointer;
	border: none;
	background-color: transparent;
	color: ${text.supporting};

	:hover {
		color: ${news[400]};
	}

	${from.desktop} {
		display: none;
	}
`;

const listItemStyles = (palette: Palette) => css`
	:after {
		content: '';
		display: inline-block;
		width: 0;
		height: 0;
		border-top: 6px solid transparent;
		border-bottom: 6px solid transparent;
		border-left: 10px solid ${neutral[7]};
		margin-top: 12px;
		margin-left: 2px;
		border-left-color: ${palette.border.subNav};

		${from.tablet} {
			margin-top: 16px;
		}
	}
`;

const trimLeadingSlash = (url: string): string =>
	url.startsWith('/') ? url.slice(1) : url;

export const SubNav = ({ subNavSections, currentNavLink, format }: Props) => {
	const [showMore, setShowMore] = useState(false);
	const [isExpanded, setIsExpanded] = useState(false);
	const ulRef = useRef<HTMLUListElement>(null);
	const palette = decidePalette(format);

	useEffect(() => {
		const ulEl = ulRef.current;

		const lis = ulEl?.querySelectorAll('li');
		const lastLi = lis && lis[lis.length - 1];

		if (ulEl && lastLi) {
			const ulTop = ulEl.getBoundingClientRect().top;
			const liTop = lastLi.getBoundingClientRect().top;

			setShowMore(ulTop !== liTop);
		} else {
			setShowMore(false);
		}
	}, []);

	const collapseWrapper = !showMore || !isExpanded;
	const expandSubNav = !showMore || isExpanded;

	return (
		<div
			data-print-layout="hide"
			css={[collapseWrapper && wrapperCollapsedStyles, spaceBetween]}
			data-cy="sub-nav"
			data-component="sub-nav"
		>
			{/* eslint-disable jsx-a11y/no-redundant-roles -- A11y fix for Safari {@see https://github.com/guardian/dotcom-rendering/pull/5041} */}
			<ul
				ref={ulRef}
				css={[expandSubNav ? expandedStyles : collapsedStyles]}
				role="list"
			>
				{/* eslint-enable jsx-a11y/no-redundant-roles */}
				{subNavSections.parent && (
					<li
						key={subNavSections.parent.url}
						css={listItemStyles(palette)}
					>
						<a
							data-src-focus-disabled={true}
							css={linkStyle(palette)}
							href={subNavSections.parent.url}
						>
							{subNavSections.parent.title}
						</a>
					</li>
				)}
				{subNavSections.links.map((link) => (
					<li
						key={link.url}
						/**
						 * We’ve getting many false positive on changes to Obituaries.
						 * Let’s try ignoring it for now.
						 *
						 * @see https://www.chromatic.com/docs/ignoring-elements#ignore-dom-elements
						 */
						data-chromatic={
							link.title === 'Obituaries' ? 'ignore' : undefined
						}
					>
						<a
							css={linkStyle(palette)}
							data-src-focus-disabled={true}
							href={link.url}
							data-link-name={`nav2 : subnav : ${trimLeadingSlash(
								link.url,
							)}`}
						>
							{link.title === currentNavLink ? (
								<span css={selected}>{link.title}</span>
							) : (
								link.title
							)}
						</a>
					</li>
				))}
			</ul>
			{showMore && (
				<button
					onClick={() => setIsExpanded(!isExpanded)}
					css={showMoreStyle(palette)}
					data-link-name="nav2 : subnav-toggle"
					data-cy="subnav-toggle"
				>
					{isExpanded ? 'Less' : 'More'}
				</button>
			)}
		</div>
	);
};
