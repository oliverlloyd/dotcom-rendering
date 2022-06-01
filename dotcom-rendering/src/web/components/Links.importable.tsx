import { css } from '@emotion/react';
import { getCookie, joinUrl } from '@guardian/libs';
import {
	brand,
	brandAlt,
	brandText,
	from,
	textSans,
} from '@guardian/source-foundations';
import { createAuthenticationEventParams } from '../../lib/identity-component-event';
import ProfileIcon from '../../static/icons/profile.svg';
import SearchIcon from '../../static/icons/search.svg';
import { getZIndex } from '../lib/getZIndex';
import { useApi } from '../lib/useApi';
import type { DropdownLinkType } from './Dropdown';
import { Dropdown } from './Dropdown';

type Props = {
	supporterCTA: string;
	discussionApiUrl: string;
	idUrl?: string;
	mmaUrl?: string;
};

const linkStyles = css`
	${textSans.medium()};
	color: ${brandText.primary};
	float: left;
	position: relative;
	transition: color 80ms ease-out;
	text-decoration: none;
	padding: 7px 0;

	${from.tablet} {
		padding: 5px 7px;
	}

	:hover,
	:focus {
		color: ${brandAlt[400]};
	}

	svg {
		fill: currentColor;
		float: left;
		height: 18px;
		width: 18px;
		margin: 3px 4px 0 0;
	}
`;

const searchLinkStyles = css`
	${linkStyles}
	${getZIndex('searchHeaderLink')}
`;

const linkTablet = ({ showAtTablet }: { showAtTablet: boolean }) => css`
	display: none;

	${from.tablet} {
		display: ${showAtTablet ? 'block' : 'none'};
	}

	${from.desktop} {
		display: block;
	}
`;

const seperatorStyles = css`
	border-left: 1px solid ${brand[600]};
	float: left;
	height: 24px;
	margin: 0 -2px 0 10px;
	display: none;

	${from.desktop} {
		display: block;
	}
`;

const seperatorHideStyles = css`
	border-left: 1px solid ${brand[600]};
	float: left;
	height: 24px;
	margin: 0 -2px 0 10px;
	display: none;

	${from.tablet} {
		display: block;
	}
`;

const Search = ({
	children,
	href,
	dataLinkName,
}: {
	children: React.ReactNode;
	href: string;
	dataLinkName: string;
}) => (
	<a
		href={href}
		css={[linkTablet({ showAtTablet: false }), searchLinkStyles]}
		data-link-name={dataLinkName}
	>
		{children}
	</a>
);

const linkWrapperStyles = css`
	display: inline;
`;

const linksStyles = css`
	position: absolute;
	left: 10px;
	top: 0;

	${from.mobileLandscape} {
		left: 20px;
	}

	${from.tablet} {
		left: auto;
		right: 205px;
	}

	${from.desktop} {
		right: 266px;
	}

	${from.wide} {
		right: 342px;
	}
`;

const SignIn = ({ idUrl }: { idUrl: string }) => (
	<a
		css={linkStyles}
		href={`${idUrl}/signin?INTCMP=DOTCOM_NEWHEADER_SIGNIN&ABCMP=ab-sign-in&${createAuthenticationEventParams(
			'guardian_signin_header',
		)}`}
		data-link-name="nav2 : topbar : signin"
	>
		<ProfileIcon /> Sign in
	</a>
);

const MyAccount = ({
	mmaUrl,
	idUrl,
	discussionApiUrl,
}: {
	mmaUrl: string;
	idUrl: string;
	discussionApiUrl: string;
}) => {
	const { data, error } = useApi<{ userProfile: UserProfile }>(
		joinUrl(discussionApiUrl, 'profile/me?strict_sanctions_check=false'),
		{},
		{
			credentials: 'include',
		},
	);

	// If we encounter an error or don't have user data display sign in to the user.
	// SWR will retry in the background if the request failed
	if (error || !data?.userProfile.userId) return <SignIn idUrl={idUrl} />;

	const identityLinks: DropdownLinkType[] = [
		{
			url: `${mmaUrl}/`,
			title: 'Account overview',
			dataLinkName: 'nav2 : topbar : account overview',
		},
		{
			url: `${mmaUrl}/public-settings`,
			title: 'Profile',
			dataLinkName: 'nav2 : topbar : edit profile',
		},
		{
			url: `${mmaUrl}/email-prefs`,
			title: 'Emails & marketing',
			dataLinkName: 'nav2 : topbar : email prefs',
		},
		{
			url: `${mmaUrl}/account-settings`,
			title: 'Settings',
			dataLinkName: 'nav2 : topbar : settings',
		},
		{
			url: `${mmaUrl}/help`,
			title: 'Help',
			dataLinkName: 'nav2 : topbar : help',
		},
		{
			url: `${idUrl}/user/id/${data.userProfile.userId}`,
			title: 'Comments & replies',
			dataLinkName: 'nav2 : topbar : comment activity',
		},
		{
			url: `${idUrl}/signout`,
			title: 'Sign out',
			dataLinkName: 'nav2 : topbar : sign out',
		},
	];

	return (
		<div css={linkStyles}>
			<ProfileIcon />
			<Dropdown
				label="My account"
				links={identityLinks}
				id="my-account"
				dataLinkName="nav2 : topbar: my account"
			/>
		</div>
	);
};

export const Links = ({
	supporterCTA,
	discussionApiUrl: discussionApiUrlFromConfig,
	idUrl: idUrlServerFromConfig,
	mmaUrl: mmaUrlServerFromConfig,
}: Props) => {
	// Fall back on prod URLs just in case these aren't set for any reason
	const discussionApiUrl =
		discussionApiUrlFromConfig ||
		'https://discussion.theguardian.com/discussion-api';
	const idUrl = idUrlServerFromConfig || 'https://profile.theguardian.com';
	const mmaUrl = mmaUrlServerFromConfig || 'https://manage.theguardian.com';

	const isServer = typeof window === 'undefined';

	const showSupporterCTA =
		!isServer &&
		getCookie({
			name: 'gu_hide_support_messaging',
			shouldMemoize: true,
		}) === 'true';

	const isSignedIn =
		!isServer && !!getCookie({ name: 'GU_U', shouldMemoize: true });

	return (
		<div data-print-layout="hide" css={linksStyles}>
			{/* Since 'subscriptions' is only rendered on the client, rendering it within
				a div is required to prevent DOM elements getting mis-matched during hydration  */}
			<div css={linkWrapperStyles}>
				{showSupporterCTA && supporterCTA !== '' && (
					<>
						<div css={seperatorStyles} id="supporter" />
						<a
							href={supporterCTA}
							css={[
								linkTablet({ showAtTablet: false }),
								linkStyles,
							]}
							data-link-name="nav2 : supporter-cta"
						>
							Subscriptions
						</a>
					</>
				)}
			</div>

			<div css={seperatorStyles} />
			<a
				href="https://jobs.theguardian.com/?INTCMP=jobs_uk_web_newheader"
				css={[linkTablet({ showAtTablet: false }), linkStyles]}
				data-link-name="nav2 : job-cta"
			>
				Search jobs
			</a>
			<div css={seperatorHideStyles} />

			{/* Since we switch from SignIn to MyAccount between SSR & hydration (if the user is logged in), we need to wrap
				the conditional in a div so preact knows where the old component was & is able to swap it out. */}
			<div css={linkWrapperStyles}>
				{isSignedIn ? (
					<MyAccount
						mmaUrl={mmaUrl}
						idUrl={idUrl}
						discussionApiUrl={discussionApiUrl}
					/>
				) : (
					<SignIn idUrl={idUrl} />
				)}
			</div>

			<Search
				href="https://www.google.co.uk/advanced_search?q=site:www.theguardian.com"
				dataLinkName="nav2 : search"
			>
				<SearchIcon />
				<>Search</>
			</Search>
		</div>
	);
};
