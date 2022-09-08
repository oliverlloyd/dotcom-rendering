import { ArticleDesign } from 'npm:@guardian/libs';
import type { SWRConfiguration } from 'swr';
import { useApi } from '../lib/useApi.ts';
import { MatchStats } from './MatchStats.ts';
import { Placeholder } from './Placeholder.ts';

type Props = {
	matchUrl: string;
	format: ArticleFormat;
};

const Loading = () => <Placeholder height={800} />;

export const GetMatchStats = ({ matchUrl, format }: Props) => {
	const options: SWRConfiguration = {};
	// If this blog is live then poll for new stats
	if (format.design === ArticleDesign.LiveBlog) {
		options.refreshInterval = 14_000;
	}
	const { data, error, loading } = useApi<{
		id: string;
		homeTeam: TeamType;
		awayTeam: TeamType;
	}>(matchUrl, options);

	if (loading) return <Loading />;
	if (error) {
		// Send the error to Sentry and then prevent the element from rendering
		window.guardian.modules.sentry.reportError(error, 'match=stats');

		return null;
	}
	if (data) {
		return (
			<MatchStats
				home={data.homeTeam}
				away={data.awayTeam}
				format={format}
			/>
		);
	}

	return null;
};
