import { css } from 'npm:@emotion/react';
import {
	border,
	brandAlt,
	brandText,
	from,
	neutral,
	news,
	palette,
	text,
	textSans,
	until,
	visuallyHidden,
} from 'npm:@guardian/source-foundations';
import { useEffect, useState } from 'react';
import { getZIndex } from '../lib/getZIndex.ts';
import { linkNotificationCount } from '../lib/linkNotificationCount.ts';

export interface DropdownLinkType {
	id: string;
	url: string;
	title: string;
	isActive?: boolean;
	dataLinkName: string;
	notifications?: string[];
}

interface Props {
	id: string;
	label: string;
	links: DropdownLinkType[];
	dataLinkName: string;
	overrideColor?: string;
	children?: React.ReactNode;
}

const ulStyles = css`
	${getZIndex('dropdown')}
	list-style: none;
	/* https://developer.mozilla.org/en-US/docs/Web/CSS/list-style#accessibility_concerns */
	/* Needs double escape char: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Template_literals#es2018_revision_of_illegal_escape_sequences */
	li::before {
		content: '\\200B'; /* Zero width space */
		display: block;
		height: 0;
		width: 0;
	}
	background-color: white;
	padding: 6px 0;
	box-shadow: 0 0 0 1px rgba(0, 0, 0, 0.1);

	${until.tablet} {
		position: fixed;
		border-radius: 0;
		top: 32px;
		left: 0;
		right: 0;
		width: auto;
		max-height: calc(100% - 50px);
		overflow: auto;
	}

	${from.tablet} {
		position: absolute;
		right: 0;
		width: 200px;
		border-radius: 3px;
	}
`;

const displayBlock = css`
	display: block;
`;

const displayNone = css`
	display: none;
`;

const linkStyles = css`
	${textSans.small()};
	color: ${text.anchorSecondary};
	position: relative;
	transition: color 80ms ease-out;
	margin: -1px 0 0 0;
	text-decoration: none;
	display: block;
	padding: 10px 18px 15px 30px;

	:hover {
		background-color: ${neutral[93]};
		text-decoration: none;
	}

	:focus {
		text-decoration: underline;
	}

	:before {
		content: '';
		border-top: 1px solid ${border.secondary};
		display: block;
		position: absolute;
		top: 0px;
		left: 30px;
		right: 0px;
	}
`;

const linkActive = css`
	font-weight: bold;

	:after {
		content: '';
		border: 2px solid ${news[400]};
		border-top: 0px;
		border-right: 0px;
		position: absolute;
		top: 19px;
		left: 12px;
		width: 10px;
		height: 4px;
		transform: rotate(-45deg);
	}
`;

const linkFirst = css`
	:before {
		content: none;
	}
`;

const buttonStyles = (overrideColor?: string) => css`
	${textSans.medium()};
	display: block;
	cursor: pointer;
	background: none;
	border: none;
	/* Design System: The buttons should be components that handle their own layout using primitives  */
	line-height: 1.2;
	color: ${overrideColor || brandText.primary};
	transition: color 80ms ease-out;
	padding: 0px 10px 6px 5px;
	margin: 1px 0 0;
	text-decoration: none;
	position: relative;

	:hover {
		color: ${brandAlt[400]};

		:after {
			transform: translateY(0) rotate(45deg);
		}
	}

	:after {
		content: '';
		display: inline-block;
		width: 5px;
		height: 5px;
		transform: translateY(-2px) rotate(45deg);
		border: 1px solid currentColor;
		border-left: transparent;
		border-top: transparent;
		margin-left: 5px;
		vertical-align: middle;
		transition: transform 250ms ease-out;
	}
`;

const buttonExpanded = css`
	:hover:after {
		transform: translateY(-1px) rotate(-135deg);
	}
	:after {
		transform: translateY(1px) rotate(-135deg);
	}
`;

const badgeDiameter = 20;
const notificationColor = palette.error[400];

const notificationBadgeStyles = css`
	background-color: ${notificationColor};
	color: ${palette.neutral[100]};
	position: absolute;
	top: 0;
	left: 0;
	min-width: ${badgeDiameter}px;
	height: ${badgeDiameter}px;
	border-radius: ${badgeDiameter / 2}px;
	text-align: center;
	display: flex;
	justify-content: center;
	align-items: center;
	padding: 0 5px;
	margin-left: -10px;
	margin-top: -3px;
`;

const notificationStyles = css`
	${textSans.xxsmall()};
	color: ${notificationColor};
`;

const redDotDiameter = 16;
const redDotStyles = css`
	background-color: ${notificationColor};
	width: ${redDotDiameter}px;
	height: ${redDotDiameter}px;
	border-radius: ${redDotDiameter / 2}px;
	position: absolute;
	left: 5px;
	top: 12px;
`;

const notificationCountStyles = css`
	${textSans.xsmall()};
	line-height: ${badgeDiameter}px;
`;

const NotificationBadge = ({ count }: { count: number }) => {
	return (
		<div css={notificationBadgeStyles}>
			<span css={notificationCountStyles}>{count + 0}</span>
		</div>
	);
};

const RedDot = () => <div css={redDotStyles} />;

export const Dropdown = ({
	id,
	label,
	links,
	dataLinkName,
	overrideColor,
	children,
}: Props) => {
	const [isExpanded, setIsExpanded] = useState(false);
	const [noJS, setNoJS] = useState(true);

	useEffect(() => {
		// If hook runs we know client-side JS is enabled
		setNoJS(false);
	}, []);

	useEffect(() => {
		const dismissOnEsc = (event: KeyboardEvent) => {
			if (isExpanded && event.code === 'Escape') {
				setIsExpanded(false);
			}
		};

		document.addEventListener('keydown', dismissOnEsc, false);

		// Remove listener on unmount
		return () => document.removeEventListener('keydown', dismissOnEsc);
	}, [isExpanded]);

	useEffect(() => {
		const dismissOnClick = (event: MouseEvent) => {
			if (isExpanded) {
				event.stopPropagation();
				setIsExpanded(false);
			}
		};

		document.addEventListener('click', dismissOnClick, false);

		// Remove listener on unmount
		return () => document.removeEventListener('click', dismissOnClick);
	}, [isExpanded]);

	const handleToggle = () => setIsExpanded(!isExpanded);

	// needs to be unique to allow multiple dropdowns on same page
	const dropdownID = `dropbox-id-${id}`;
	const checkboxID = `checkbox-id-${id}`;

	const notificationCount = linkNotificationCount(links);

	return (
		<>
			{noJS ? (
				<div
					css={css`
						${`#${checkboxID}`} {
							/* Never show the input */
							${visuallyHidden}
						}
						${`#${dropdownID}`} {
							/* Hide caption by default */
							display: none;
						}
						/* stylelint-disable-next-line selector-type-no-unknown */
						${`#${checkboxID}`}:checked + ${`#${dropdownID}`} {
							/* Show the caption if the input is checked */
							display: block;
						}
					`}
				>
					<label
						htmlFor={checkboxID}
						css={buttonStyles(overrideColor)}
					>
						{label}
					</label>
					<input
						type="checkbox"
						id={checkboxID}
						aria-checked="false"
						tabIndex={-1}
					/>
					<ul id={dropdownID} css={ulStyles}>
						{links.map((l, index) => (
							<li key={l.title}>
								<a
									href={l.url}
									css={[
										linkStyles,
										!!l.isActive && linkActive,
										index === 0 && linkFirst,
									]}
									data-link-name={l.dataLinkName}
								>
									{l.title}
								</a>
							</li>
						))}
					</ul>
				</div>
			) : (
				<>
					<button
						onClick={handleToggle}
						css={[
							buttonStyles(overrideColor),
							isExpanded && buttonExpanded,
						]}
						aria-expanded={isExpanded ? 'true' : 'false'}
						data-link-name={dataLinkName}
						data-cy="dropdown-button"
						type="button"
					>
						{label}
						{notificationCount > 0 && (
							<NotificationBadge count={notificationCount} />
						)}
					</button>
					<div css={isExpanded ? displayBlock : displayNone}>
						{children ? (
							<>{children}</>
						) : (
							<ul css={ulStyles} data-cy="dropdown-options">
								{links.map((l, index) => (
									<li
										css={css`
											position: relative;
										`}
										key={l.title}
									>
										<a
											href={l.url}
											css={[
												linkStyles,
												!!l.isActive && linkActive,
												index === 0 && linkFirst,
											]}
											data-link-name={l.dataLinkName}
										>
											{l.title}
											{l.notifications?.map(
												(notification) => (
													<div
														css={notificationStyles}
													>
														{notification}
													</div>
												),
											)}
										</a>

										{!!l.notifications?.length && (
											<RedDot />
										)}
									</li>
								))}
							</ul>
						)}
					</div>
				</>
			)}
		</>
	);
};
