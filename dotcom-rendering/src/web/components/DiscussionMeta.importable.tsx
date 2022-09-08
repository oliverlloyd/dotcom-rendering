import { joinUrl } from 'npm:@guardian/libs';
import { decidePalette } from '../lib/decidePalette.ts';
import { useApi } from '../lib/useApi.ts';
import { useDiscussion } from '../lib/useDiscussion.ts';
import { SignedInAs } from './SignedInAs.ts';

export type Props = {
	format: ArticleFormat;
	discussionApiUrl: string;
	shortUrlId: string;
	enableDiscussionSwitch: boolean;
};

export const DiscussionMeta = ({
	format,
	discussionApiUrl,
	shortUrlId,
	enableDiscussionSwitch,
}: Props) => {
	const { commentCount, isClosedForComments } = useDiscussion(
		joinUrl(discussionApiUrl, 'discussion', shortUrlId),
	);

	const { data } = useApi<{ userProfile: UserProfile }>(
		joinUrl(discussionApiUrl, 'profile/me?strict_sanctions_check=false'),
		{},
		{
			credentials: 'include',
		},
	);

	const palette = decidePalette(format);

	return (
		<SignedInAs
			palette={palette}
			enableDiscussionSwitch={enableDiscussionSwitch}
			user={data?.userProfile}
			commentCount={commentCount}
			isClosedForComments={isClosedForComments}
		/>
	);
};
