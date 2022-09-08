import { css } from 'npm:@emotion/react';
import { neutral, space, textSans } from 'npm:@guardian/source-foundations';
import { Button, Label, TextInput } from 'npm:@guardian/source-react-components';

type Props = { newsletterId: string };

const labelStyles = css`
	div {
		${textSans.xsmall({ fontWeight: 'bold' })}
	}
`;

const flexParentStyles = css`
	display: flex;
	flex-direction: row;
	align-items: flex-start;
	flex-wrap: wrap;
`;

const inputContainerStyles = css`
	margin-right: ${space[3]}px;
	margin-bottom: ${space[2]}px;
	flex-basis: 335px;
	flex-shrink: 1;
`;

const textInputStyles = css`
	height: 36px;
	margin-top: 0;
`;

const buttonCssOverrides = css`
	justify-content: center;
	background-color: ${neutral[0]};
	:hover {
		background-color: ${neutral[20]};
	}
	flex-basis: 118px;
	flex-shrink: 0;
	margin-bottom: ${space[2]}px;
`;

/**
 * This component sets the styles for the form component of SecureSignup
 * It should NOT be used as a standalone component and is only represented as a
 * separate component here for storybook mocking ability & better readability
 */
export const NewsletterSignupForm = ({ newsletterId }: Props) => (
	<form id={`secure-signup-${newsletterId}`}>
		<Label text="Enter your email address" cssOverrides={labelStyles} />

		<div css={flexParentStyles}>
			<div css={inputContainerStyles}>
				<TextInput
					hideLabel={true}
					name="email"
					label="Enter your email address"
					type="email"
					cssOverrides={textInputStyles}
				/>
			</div>
			<Button
				size="small"
				type="submit"
				cssOverrides={buttonCssOverrides}
			>
				Sign up
			</Button>
		</div>
	</form>
);
