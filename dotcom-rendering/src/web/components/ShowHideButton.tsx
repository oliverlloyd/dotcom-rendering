import { css } from 'npm:@emotion/react';
import { from, neutral, space, textSans } from 'npm:@guardian/source-foundations';
import { ButtonLink } from 'npm:@guardian/source-react-components';

type Props = {
	sectionId: string;
	overrideContainerToggleColour?: string;
};

const showHideButtonCss = (
	overrideContainerToggleColour: string | undefined,
) => css`
	color: ${overrideContainerToggleColour ?? neutral[46]};
	${textSans.xsmall()};

	margin-top: ${space[2]}px;
	margin-right: 10px;
	margin-bottom: ${space[2]}px;
	position: relative;
	align-items: bottom;

	${from.wide} {
		position: absolute;
		top: 0;
		right: 0;
	}
`;

/**
 * This component creates the styled button for showing & hiding a container,
 * The functionality for this is implemented in a single island 'ShownHideContainers.importable'
 **/
export const ShowHideButton = ({
	sectionId,
	overrideContainerToggleColour,
}: Props) => {
	return (
		<ButtonLink
			priority="secondary"
			subdued={true}
			cssOverrides={showHideButtonCss(overrideContainerToggleColour)}
			data-link-name="Hide"
			data-show-hide-button={sectionId}
			aria-controls={`container-${sectionId}`}
			aria-expanded={true}
		>
			Hide
		</ButtonLink>
	);
};
