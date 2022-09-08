import { css } from 'npm:@emotion/react';
import { neutral } from 'npm:@guardian/source-foundations';
import React from 'react';
import type { NavType } from '../../model/extract-nav.ts';
import type { ConfigType } from '../../types/config.ts';
import { AdConsent } from '../components/AdConsent.ts';
import { AmpExperimentComponent } from '../components/AmpExperiment.ts';
import type { AnalyticsModel } from '../components/Analytics.ts';
import { Analytics } from '../components/Analytics.ts';
import { AnalyticsIframe } from '../components/AnalyticsIframe.ts';
import { Body as BodyArticle } from '../components/BodyArticle.ts';
import { Body as BodyLiveblog } from '../components/BodyLiveblog.ts';
import { ContentABTestProvider } from '../components/ContentABTest.ts';
import { Footer } from '../components/Footer.ts';
import { Header } from '../components/Header.ts';
import { Onward } from '../components/Onward.ts';
import { Sidebar } from '../components/Sidebar.ts';
import { filterForTagsOfType } from '../lib/tag-utils.ts';
import type { AmpExperiments } from '../server/ampExperimentCache.ts';
import type { ArticleModel } from '../types/ArticleModel.ts';

const containerStyles = css`
	margin: auto;
	max-width: 600px;
`;

const backgroundColour = css`
	background-color: ${neutral[97]};
`;

const Body: React.FunctionComponent<{
	data: ArticleModel;
	config: ConfigType;
}> = ({ data, config }) => {
	const { format } = data;

	if (
		format.design === 'LiveBlogDesign' ||
		format.design === 'DeadBlogDesign'
	) {
		return <BodyLiveblog data={data} config={config} />;
	}
	return <BodyArticle data={data} config={config} />;
};

export const Article: React.FC<{
	experimentsData?: AmpExperiments;
	nav: NavType;
	articleData: ArticleModel;
	config: ConfigType;
	analytics: AnalyticsModel;
}> = ({ nav, articleData, config, analytics, experimentsData }) => {
	return (
		<ContentABTestProvider
			switches={config.switches}
			pageId={config.pageId}
		>
			<Analytics key="analytics" analytics={analytics} />
			<AnalyticsIframe url={config.ampIframeUrl} />
			<AdConsent />
			{experimentsData && (
				<AmpExperimentComponent experimentsData={experimentsData} />
			)}

			{/* /TODO change to gray bgcolor */}
			<div key="main" css={[backgroundColour, containerStyles]}>
				<Header
					nav={nav}
					guardianBaseURL={articleData.guardianBaseURL}
				/>
				<Body data={articleData} config={config} />
				<Onward
					pageID={articleData.pageId}
					sectionID={articleData.sectionName}
					hasRelated={articleData.hasRelated}
					hasStoryPackage={articleData.hasStoryPackage}
					seriesTags={filterForTagsOfType(articleData.tags, 'Series')}
					guardianBaseURL={articleData.guardianBaseURL}
				/>
				<Footer nav={nav} />
			</div>

			{/* The sidebar has to live here unfortunately to be valid AMP
            but note the click handler lives in the Header. */}
			<Sidebar key="sidebar" nav={nav} />
		</ContentABTestProvider>
	);
};
