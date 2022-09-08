import { ArticleDesign, ArticleSpecial } from 'npm:@guardian/libs';
import React from 'react';
import type { ArticleModel } from '../../types/ArticleModel.ts';
import { TopMetaAnalysis } from './TopMetaAnalysis.ts';
import { TopMetaNews } from './TopMetaNews.ts';
import { TopMetaOpinion } from './TopMetaOpinion.ts';
import { TopMetaPaidContent } from './TopMetaPaidContent.ts';

export const TopMeta: React.FunctionComponent<{
	data: ArticleModel;
	design: ArticleDesign;
	pillar: ArticleTheme;
	adTargeting?: AdTargeting;
}> = ({ data, design, pillar, adTargeting }) => {
	if (pillar === ArticleSpecial.Labs)
		return <TopMetaPaidContent articleData={data} pillar={pillar} />;
	switch (design) {
		case ArticleDesign.Comment:
		case ArticleDesign.Letter:
			return <TopMetaOpinion articleData={data} pillar={pillar} />;
		case ArticleDesign.Analysis:
			return <TopMetaAnalysis articleData={data} pillar={pillar} />;
		default:
			return (
				<TopMetaNews
					articleData={data}
					adTargeting={adTargeting}
					pillar={pillar}
				/>
			);
	}
};
