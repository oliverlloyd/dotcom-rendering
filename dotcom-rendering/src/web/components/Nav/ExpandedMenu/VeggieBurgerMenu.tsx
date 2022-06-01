import { css } from '@emotion/react';
import { ArticleDisplay } from '@guardian/libs';
import {
	brandAlt,
	from,
	neutral,
	visuallyHidden,
} from '@guardian/source-foundations';
import { getZIndex } from '../../../lib/getZIndex';
import { navInputCheckboxId, veggieBurgerId } from '../config';

const screenReadable = css`
	${visuallyHidden};
`;

const beforeAfterStyles = css`
	content: '';
	background-color: currentColor;
`;

const lineStyles = css`
	height: 2px;
	left: 0;
	position: absolute;
	width: 20px;
`;
const veggieBurgerIconStyles = css`
	background-color: currentColor;
	/*
            IMPORTANT NOTE:
            we need to specify the adjacent path to the a (current) tag
            to apply styles to the nested tabs due to the fact we use ~
            to support NoJS
        */
	/* stylelint-disable-next-line selector-type-no-unknown */
	${`#${navInputCheckboxId}`}:checked ~ div & {
		background-color: transparent;
	}

	top: 50%;
	right: 0;
	margin-top: -1px;
	margin-left: auto;
	margin-right: auto;
	${lineStyles};

	:before {
		${lineStyles};
		${beforeAfterStyles};
		top: -6px;
		/* refer to comment above */
		/* stylelint-disable-next-line selector-type-no-unknown */
		${`#${navInputCheckboxId}`}:checked ~ div & {
			top: 0;
			transform: rotate(-45deg);
		}
	}
	:after {
		${lineStyles};
		${beforeAfterStyles};
		bottom: -6px;
		/* refer to comment above */
		/* stylelint-disable-next-line selector-type-no-unknown */
		${`#${navInputCheckboxId}`}:checked ~ div & {
			bottom: 0;
			transform: rotate(45deg);
		}
	}
`;

const veggieBurgerStyles = (display: ArticleDisplay) => css`
	background-color: ${brandAlt[400]};
	color: ${neutral[7]};
	cursor: pointer;
	height: 42px;
	min-width: 42px;
	position: absolute;
	border: 0;
	border-radius: 50%;

	${getZIndex('burger')}

	right: 5px;
	bottom: 58px;
	${from.mobileMedium} {
		bottom: ${display === ArticleDisplay.Immersive ? '3px' : '-3px'};
		right: 5px;
	}
	${from.mobileLandscape} {
		right: 18px;
	}
	${from.tablet} {
		bottom: 3px;
	}
	${from.desktop} {
		display: none;
	}

	:focus {
		outline: none;
	}
`;

export const VeggieBurgerMenu: React.FC<{
	display: ArticleDisplay;
}> = ({ display }) => {
	return (
		<label
			id={veggieBurgerId}
			css={veggieBurgerStyles(display)}
			aria-label="Toggle main menu"
			key="OpenExpandedMenuButton"
			htmlFor={navInputCheckboxId}
			data-link-name="nav2 : veggie-burger: show"
			tabIndex={0}
			role="button"
			data-cy="veggie-burger"
		>
			<span css={screenReadable}>Show More</span>
			<span css={veggieBurgerIconStyles} />
		</label>
	);
};
