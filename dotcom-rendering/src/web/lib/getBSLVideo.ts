interface YouTubeVideoDetails {
	webUrl: string;
	embedUrl: string;
	id: string;
}

const demoVideo: YouTubeVideoDetails = {
	webUrl: 'https://youtu.be/5Y7WdsuNlJY',
	embedUrl: 'https://www.youtube.com/embed/5Y7WdsuNlJY',
	id: '5Y7WdsuNlJY',
};

const BSL_VIDEOS: Record<string, YouTubeVideoDetails> = {
	'world/2022/mar/30/wednesday-briefing-johnson-partygate': demoVideo,
	'politics/2019/jul/15/it-will-be-boris-johnson-and-it-will-certainly-be-a-disaster':
		demoVideo,
	'music/2018/aug/31/eminem-kamikaze-album-review': demoVideo,
};

export const getBSLVideo = (
	articleId: string,
): YouTubeVideoDetails | undefined => {
	return BSL_VIDEOS[articleId];
};
