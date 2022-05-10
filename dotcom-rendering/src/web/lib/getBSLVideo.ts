interface YouTubeVideoDetails {
	webUrl: string;
	embedUrl: string;
}

const BSL_VIDEOS: Record<string, YouTubeVideoDetails> = {
	'world/2022/mar/30/wednesday-briefing-johnson-partygate': {
		webUrl: 'https://youtu.be/5Y7WdsuNlJY',
		embedUrl: 'https://www.youtube.com/embed/5Y7WdsuNlJY',
	},
};

export const getBSLVideo = (articleId: string): YouTubeVideoDetails | undefined => {
	return BSL_VIDEOS[articleId];
};
