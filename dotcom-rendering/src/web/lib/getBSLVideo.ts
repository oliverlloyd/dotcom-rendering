interface YouTubeVideoDetails {
	webUrl: string;
	embedUrl: string;
}

const BSL_VIDEOS: Record<string, YouTubeVideoDetails> = {
	'world/2022/mar/30/wednesday-briefing-johnson-partygate': {
		webUrl: 'https://youtu.be/5Y7WdsuNlJY',
		embedUrl: 'https://www.youtube.com/embed/5Y7WdsuNlJY',
	},
	'politics/2019/jul/15/it-will-be-boris-johnson-and-it-will-certainly-be-a-disaster':
		{
			webUrl: 'https://youtu.be/5Y7WdsuNlJY',
			embedUrl: 'https://www.youtube.com/embed/5Y7WdsuNlJY',
		},
	'music/2018/aug/31/eminem-kamikaze-album-review': {
		webUrl: 'https://youtu.be/5Y7WdsuNlJY',
		embedUrl: 'https://www.youtube.com/embed/5Y7WdsuNlJY',
	},
};

export const getBSLVideo = (
	articleId: string,
): YouTubeVideoDetails | undefined => {
	return BSL_VIDEOS[articleId];
};
