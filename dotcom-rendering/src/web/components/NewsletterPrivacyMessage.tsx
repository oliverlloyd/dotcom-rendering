import { css } from 'npm:@emotion/react';
import { neutral, text, textSans } from 'npm:@guardian/source-foundations';
import { Link } from 'npm:@guardian/source-react-components';

const GUARDIAN_PRIVACY_POLICY =
	'https://www.theguardian.com/help/privacy-policy';
const GOOGLE_PRIVACY_POLICY = 'https://policies.google.com/privacy';
const GOOGLE_TERMS_OF_SERVICE = 'https://policies.google.com/terms';

type PolicyUrl =
	| typeof GUARDIAN_PRIVACY_POLICY
	| typeof GOOGLE_PRIVACY_POLICY
	| typeof GOOGLE_TERMS_OF_SERVICE;

type LegalLinkProps = { href: PolicyUrl; children: string };

/** Link component fixed with data-ignore and rel attributes for consistency in this file only */
const LegalLink = ({ href, children }: LegalLinkProps) => (
	<Link
		data-ignore="global-link-styling"
		href={href}
		rel="noopener noreferrer"
	>
		{children}
	</Link>
);

const termsStyle = css`
	${textSans.xxsmall({ lineHeight: 'tight' })}
	color: ${text.supporting};
	a {
		${textSans.xxsmall()};
		color: ${neutral[0]};
		text-decoration: underline;
		:hover {
			color: ${neutral[0]};
			text-decoration: underline;
		}
	}
	strong {
		color: ${neutral[0]};
		font-weight: bold;
	}
`;

export const NewsletterPrivacyMessage = () => (
	<span css={termsStyle}>
		<strong>Privacy Notice: </strong>
		Newsletters may contain info about charities, online ads, and content
		funded by outside parties. For more information see our{' '}
		<LegalLink href={GUARDIAN_PRIVACY_POLICY}>Privacy Policy</LegalLink>. We
		use Google reCaptcha to protect our website and the Google{' '}
		<LegalLink href={GOOGLE_PRIVACY_POLICY}>Privacy Policy</LegalLink> and{' '}
		<LegalLink href={GOOGLE_TERMS_OF_SERVICE}>Terms of Service</LegalLink>{' '}
		apply.
	</span>
);
