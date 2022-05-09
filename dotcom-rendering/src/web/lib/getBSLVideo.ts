const BSL_VIDEOS: Record<string, string> = {
	'world/2022/mar/30/wednesday-briefing-johnson-partygate':
		'https://youtu.be/5Y7WdsuNlJY',
};

export const getBSLVideo = (articleId: string): string | undefined => {
	return BSL_VIDEOS[articleId];
};
