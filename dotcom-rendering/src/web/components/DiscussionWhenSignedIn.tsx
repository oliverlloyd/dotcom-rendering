import { joinUrl } from 'npm:@guardian/libs';
import type { Props as DiscussionProps } from 'src/web/components/Discussion';
import { useApi } from '../lib/useApi.ts';
import { Discussion } from './Discussion.ts';

export const DiscussionWhenSignedIn = (props: DiscussionProps) => {
	const { discussionApiUrl } = props;
	const { data } = useApi<{ userProfile: UserProfile }>(
		joinUrl(discussionApiUrl, 'profile/me?strict_sanctions_check=false'),
		{},
		{
			credentials: 'include',
		},
	);
	if (!data) return null;

	return <Discussion user={data.userProfile} {...props} />;
};
