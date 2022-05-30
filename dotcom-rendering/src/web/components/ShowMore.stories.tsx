import { enhanceCards } from '../../model/enhanceCollections';
// import showMoreTestData from '../server/showMoreTestData.json';
// import { showMoreCardsToHtml } from '../server/showMoretoHtml';
import { ShowMoreContainer } from './ShowMoreContainer';

export default {
	component: ShowMoreContainer,
	title: 'SHOW MORE',
};

export const Test = () => {
	try {
		/* eslint-disable @typescript-eslint/no-use-before-define -- just for dev */
		const exampleData = returnTestData() as unknown as ShowMoreRequest;
		/* eslint-enable @typescript-eslint/no-use-before-define */
		const { cards, startIndex, containerPalette } = exampleData;

		const dcrTrails = enhanceCards(cards, containerPalette);

		// const html = showMoreCardsToHtml({
		// 	cards: dcrTrails,
		// 	startIndex,
		// 	containerPalette,
		// });
		console.log('okay!');
		return <ShowMoreContainer trails={dcrTrails} startIndex={startIndex} />;
	} catch (e) {
		const message = e instanceof Error ? e.stack : 'Unknown Error';
		console.log(message);
		// res.status(500).send(`<pre>${message}</pre>`);
	}
	console.log('test log!');
};
Test.story = { name: 'basic' };

function returnTestData() {
	return {
		cards: [
			{
				properties: {
					isBreaking: false,
					showMainVideo: false,
					showKickerTag: false,
					showByline: false,
					imageSlideshowReplace: false,
					maybeContent: {
						trail: {
							trailPicture: {
								allImages: [
									{
										index: 3,
										fields: {
											displayCredit: 'true',
											source: 'Gamma-Keystone via Getty Images',
											photographer: 'Keystone-France',
											altText:
												'Inside a trolleybus in Moscow circa 1960. ',
											height: '3032',
											credit: 'Photograph: Keystone-France/Gamma-Keystone via Getty Images',
											mediaId:
												'64c1bc9c4b89b20ca1b16c2d390cf33645b6f4e5',
											width: '5053',
										},
										mediaType: 'Image',
										url: 'https://media.guim.co.uk/64c1bc9c4b89b20ca1b16c2d390cf33645b6f4e5/0_190_5053_3032/5053.jpg',
									},
								],
							},
							byline: 'Shaun Walker in Moscow',
							thumbnailPath:
								'https://i.guim.co.uk/img/media/64c1bc9c4b89b20ca1b16c2d390cf33645b6f4e5/0_190_5053_3032/500.jpg?quality=85&auto=format&fit=max&s=1b42b7551dbb7d305a06063b023306c8',
							webPublicationDate: 1460469478000,
						},
						metadata: {
							id: 'world/2016/apr/12/end-road-moscow-trolleybuses-campaign',
							webTitle:
								"End of the road for Moscow's trolleybuses",
							webUrl: 'https://www.theguardian.com/world/2016/apr/12/end-road-moscow-trolleybuses-campaign',
							type: 'Article',
							pillar: {
								name: 'News',
							},
							sectionId: {
								value: 'world',
							},
							designType: 'Article',
							format: {
								design: 'ArticleDesign',
								theme: 'NewsPillar',
								display: 'StandardDisplay',
							},
						},
						fields: {
							main: '<figure class="element element-image" data-media-id="64c1bc9c4b89b20ca1b16c2d390cf33645b6f4e5"> <img src="https://media.guim.co.uk/64c1bc9c4b89b20ca1b16c2d390cf33645b6f4e5/0_190_5053_3032/1000.jpg" alt="Inside a trolleybus in Moscow circa 1960. " width="1000" height="600" class="gu-image" /> <figcaption> <span class="element-image__caption">Inside a Moscow trolleybus circa 1960. </span> <span class="element-image__credit">Photograph: Gamma-Keystone via Getty Images</span> </figcaption> </figure>',
							body: '<p>To their detractors they are a clunky, slow form of transport, liable to cause traffic jams and clutter streets with unseemly overhead electric wiring. But to their Moscow fans, the trolleybus is a thing of beauty: an economical form of transport that glides silently through the streets, is environmentally friendly and is part of the Russian capital’s historic fabric.</p><p>Trolleybuses, which run using electricity from overhead wiring, have glided slowly through Moscow’s streets since 1933, but the city government plans to phase them out by 2020, and trolleybus routes could be removed from the city centre as soon as Tuesday evening. </p>',
							standfirst:
								'<p>Campaign launched as authorities plan to phase out the vehicles, which have operated in city for 83 years</p>',
						},
						elements: {
							mediaAtoms: [],
						},
						tags: {
							tags: [
								{
									properties: {
										id: 'world/russia',
										url: '/world/russia',
										tagType: 'Keyword',
										sectionId: 'world',
										sectionName: 'World news',
										webTitle: 'Russia',
										webUrl: 'https://www.theguardian.com/world/russia',
										references: [],
										commercial: {
											editionBrandings: [
												{
													edition: {
														id: 'UK',
													},
												},
												{
													edition: {
														id: 'US',
													},
												},
												{
													edition: {
														id: 'AU',
													},
												},
												{
													edition: {
														id: 'INT',
													},
												},
											],
											editionAdTargetings: [
												{
													edition: {
														id: 'UK',
													},
													paramSet: [
														{
															name: 'edition',
															value: 'uk',
														},
														{
															name: 'k',
															value: ['russia'],
														},
														{
															name: 'url',
															value: '/world/russia',
														},
														{
															name: 'ct',
															value: 'tag',
														},
														{
															name: 'p',
															value: 'ng',
														},
													],
												},
												{
													edition: {
														id: 'US',
													},
													paramSet: [
														{
															name: 'k',
															value: ['russia'],
														},
														{
															name: 'url',
															value: '/world/russia',
														},
														{
															name: 'ct',
															value: 'tag',
														},
														{
															name: 'p',
															value: 'ng',
														},
														{
															name: 'edition',
															value: 'us',
														},
													],
												},
												{
													edition: {
														id: 'AU',
													},
													paramSet: [
														{
															name: 'k',
															value: ['russia'],
														},
														{
															name: 'url',
															value: '/world/russia',
														},
														{
															name: 'ct',
															value: 'tag',
														},
														{
															name: 'p',
															value: 'ng',
														},
														{
															name: 'edition',
															value: 'au',
														},
													],
												},
												{
													edition: {
														id: 'INT',
													},
													paramSet: [
														{
															name: 'k',
															value: ['russia'],
														},
														{
															name: 'url',
															value: '/world/russia',
														},
														{
															name: 'ct',
															value: 'tag',
														},
														{
															name: 'edition',
															value: 'int',
														},
														{
															name: 'p',
															value: 'ng',
														},
													],
												},
											],
											prebidIndexSites: [
												{
													bp: 'D',
													id: 204985,
												},
												{
													bp: 'M',
													id: 213473,
												},
												{
													bp: 'T',
													id: 215408,
												},
											],
										},
									},
								},
								{
									properties: {
										id: 'world/europe-news',
										url: '/world/europe-news',
										tagType: 'Keyword',
										sectionId: 'world',
										sectionName: 'World news',
										webTitle: 'Europe',
										webUrl: 'https://www.theguardian.com/world/europe-news',
										references: [],
										commercial: {
											editionBrandings: [
												{
													edition: {
														id: 'UK',
													},
												},
												{
													edition: {
														id: 'US',
													},
												},
												{
													edition: {
														id: 'AU',
													},
												},
												{
													edition: {
														id: 'INT',
													},
												},
											],
											editionAdTargetings: [
												{
													edition: {
														id: 'UK',
													},
													paramSet: [
														{
															name: 'edition',
															value: 'uk',
														},
														{
															name: 'url',
															value: '/world/europe-news',
														},
														{
															name: 'ct',
															value: 'tag',
														},
														{
															name: 'p',
															value: 'ng',
														},
														{
															name: 'k',
															value: [
																'europe-news',
															],
														},
													],
												},
												{
													edition: {
														id: 'US',
													},
													paramSet: [
														{
															name: 'url',
															value: '/world/europe-news',
														},
														{
															name: 'ct',
															value: 'tag',
														},
														{
															name: 'p',
															value: 'ng',
														},
														{
															name: 'edition',
															value: 'us',
														},
														{
															name: 'k',
															value: [
																'europe-news',
															],
														},
													],
												},
												{
													edition: {
														id: 'AU',
													},
													paramSet: [
														{
															name: 'url',
															value: '/world/europe-news',
														},
														{
															name: 'ct',
															value: 'tag',
														},
														{
															name: 'p',
															value: 'ng',
														},
														{
															name: 'k',
															value: [
																'europe-news',
															],
														},
														{
															name: 'edition',
															value: 'au',
														},
													],
												},
												{
													edition: {
														id: 'INT',
													},
													paramSet: [
														{
															name: 'url',
															value: '/world/europe-news',
														},
														{
															name: 'ct',
															value: 'tag',
														},
														{
															name: 'edition',
															value: 'int',
														},
														{
															name: 'p',
															value: 'ng',
														},
														{
															name: 'k',
															value: [
																'europe-news',
															],
														},
													],
												},
											],
											prebidIndexSites: [
												{
													bp: 'D',
													id: 204985,
												},
												{
													bp: 'M',
													id: 213473,
												},
												{
													bp: 'T',
													id: 215408,
												},
											],
										},
									},
								},
								{
									properties: {
										id: 'world/world',
										url: '/world/world',
										tagType: 'Keyword',
										sectionId: 'world',
										sectionName: 'World news',
										webTitle: 'World news',
										webUrl: 'https://www.theguardian.com/world/world',
										references: [],
										commercial: {
											editionBrandings: [
												{
													edition: {
														id: 'UK',
													},
												},
												{
													edition: {
														id: 'US',
													},
												},
												{
													edition: {
														id: 'AU',
													},
												},
												{
													edition: {
														id: 'INT',
													},
												},
											],
											editionAdTargetings: [
												{
													edition: {
														id: 'UK',
													},
													paramSet: [
														{
															name: 'edition',
															value: 'uk',
														},
														{
															name: 'k',
															value: ['world'],
														},
														{
															name: 'url',
															value: '/world/world',
														},
														{
															name: 'ct',
															value: 'tag',
														},
														{
															name: 'p',
															value: 'ng',
														},
													],
												},
												{
													edition: {
														id: 'US',
													},
													paramSet: [
														{
															name: 'k',
															value: ['world'],
														},
														{
															name: 'url',
															value: '/world/world',
														},
														{
															name: 'ct',
															value: 'tag',
														},
														{
															name: 'p',
															value: 'ng',
														},
														{
															name: 'edition',
															value: 'us',
														},
													],
												},
												{
													edition: {
														id: 'AU',
													},
													paramSet: [
														{
															name: 'k',
															value: ['world'],
														},
														{
															name: 'url',
															value: '/world/world',
														},
														{
															name: 'ct',
															value: 'tag',
														},
														{
															name: 'p',
															value: 'ng',
														},
														{
															name: 'edition',
															value: 'au',
														},
													],
												},
												{
													edition: {
														id: 'INT',
													},
													paramSet: [
														{
															name: 'k',
															value: ['world'],
														},
														{
															name: 'url',
															value: '/world/world',
														},
														{
															name: 'ct',
															value: 'tag',
														},
														{
															name: 'edition',
															value: 'int',
														},
														{
															name: 'p',
															value: 'ng',
														},
													],
												},
											],
											prebidIndexSites: [
												{
													bp: 'D',
													id: 204985,
												},
												{
													bp: 'M',
													id: 213473,
												},
												{
													bp: 'T',
													id: 215408,
												},
											],
										},
									},
								},
								{
									properties: {
										id: 'world/road-transport',
										url: '/world/road-transport',
										tagType: 'Keyword',
										sectionId: 'world',
										sectionName: 'World news',
										webTitle: 'Road transport',
										webUrl: 'https://www.theguardian.com/world/road-transport',
										references: [],
										commercial: {
											editionBrandings: [
												{
													edition: {
														id: 'UK',
													},
												},
												{
													edition: {
														id: 'US',
													},
												},
												{
													edition: {
														id: 'AU',
													},
												},
												{
													edition: {
														id: 'INT',
													},
												},
											],
											editionAdTargetings: [
												{
													edition: {
														id: 'UK',
													},
													paramSet: [
														{
															name: 'edition',
															value: 'uk',
														},
														{
															name: 'url',
															value: '/world/road-transport',
														},
														{
															name: 'k',
															value: [
																'road-transport',
															],
														},
														{
															name: 'ct',
															value: 'tag',
														},
														{
															name: 'p',
															value: 'ng',
														},
													],
												},
												{
													edition: {
														id: 'US',
													},
													paramSet: [
														{
															name: 'url',
															value: '/world/road-transport',
														},
														{
															name: 'k',
															value: [
																'road-transport',
															],
														},
														{
															name: 'ct',
															value: 'tag',
														},
														{
															name: 'p',
															value: 'ng',
														},
														{
															name: 'edition',
															value: 'us',
														},
													],
												},
												{
													edition: {
														id: 'AU',
													},
													paramSet: [
														{
															name: 'url',
															value: '/world/road-transport',
														},
														{
															name: 'k',
															value: [
																'road-transport',
															],
														},
														{
															name: 'ct',
															value: 'tag',
														},
														{
															name: 'p',
															value: 'ng',
														},
														{
															name: 'edition',
															value: 'au',
														},
													],
												},
												{
													edition: {
														id: 'INT',
													},
													paramSet: [
														{
															name: 'url',
															value: '/world/road-transport',
														},
														{
															name: 'k',
															value: [
																'road-transport',
															],
														},
														{
															name: 'ct',
															value: 'tag',
														},
														{
															name: 'edition',
															value: 'int',
														},
														{
															name: 'p',
															value: 'ng',
														},
													],
												},
											],
											prebidIndexSites: [
												{
													bp: 'D',
													id: 204985,
												},
												{
													bp: 'M',
													id: 213473,
												},
												{
													bp: 'T',
													id: 215408,
												},
											],
										},
									},
								},
								{
									properties: {
										id: 'cities/cities',
										url: '/cities/cities',
										tagType: 'Keyword',
										sectionId: 'cities',
										sectionName: 'Cities',
										webTitle: 'Cities',
										webUrl: 'https://www.theguardian.com/cities/cities',
										references: [],
										commercial: {
											editionBrandings: [
												{
													edition: {
														id: 'UK',
													},
												},
												{
													edition: {
														id: 'US',
													},
												},
												{
													edition: {
														id: 'AU',
													},
												},
												{
													edition: {
														id: 'INT',
													},
												},
											],
											editionAdTargetings: [
												{
													edition: {
														id: 'UK',
													},
													paramSet: [
														{
															name: 'edition',
															value: 'uk',
														},
														{
															name: 'k',
															value: ['cities'],
														},
														{
															name: 'ct',
															value: 'tag',
														},
														{
															name: 'url',
															value: '/cities/cities',
														},
														{
															name: 'p',
															value: 'ng',
														},
													],
												},
												{
													edition: {
														id: 'US',
													},
													paramSet: [
														{
															name: 'k',
															value: ['cities'],
														},
														{
															name: 'ct',
															value: 'tag',
														},
														{
															name: 'url',
															value: '/cities/cities',
														},
														{
															name: 'p',
															value: 'ng',
														},
														{
															name: 'edition',
															value: 'us',
														},
													],
												},
												{
													edition: {
														id: 'AU',
													},
													paramSet: [
														{
															name: 'k',
															value: ['cities'],
														},
														{
															name: 'ct',
															value: 'tag',
														},
														{
															name: 'url',
															value: '/cities/cities',
														},
														{
															name: 'p',
															value: 'ng',
														},
														{
															name: 'edition',
															value: 'au',
														},
													],
												},
												{
													edition: {
														id: 'INT',
													},
													paramSet: [
														{
															name: 'k',
															value: ['cities'],
														},
														{
															name: 'ct',
															value: 'tag',
														},
														{
															name: 'edition',
															value: 'int',
														},
														{
															name: 'url',
															value: '/cities/cities',
														},
														{
															name: 'p',
															value: 'ng',
														},
													],
												},
											],
											prebidIndexSites: [
												{
													bp: 'D',
													id: 208275,
												},
												{
													bp: 'M',
													id: 213545,
												},
												{
													bp: 'T',
													id: 215480,
												},
											],
										},
									},
								},
								{
									properties: {
										id: 'type/article',
										url: '/type/article',
										tagType: 'Type',
										sectionId: 'global',
										sectionName: 'global',
										webTitle: 'Article',
										webUrl: 'https://www.theguardian.com/articles',
										references: [],
										commercial: {
											editionBrandings: [
												{
													edition: {
														id: 'UK',
													},
												},
												{
													edition: {
														id: 'US',
													},
												},
												{
													edition: {
														id: 'AU',
													},
												},
												{
													edition: {
														id: 'INT',
													},
												},
											],
											editionAdTargetings: [
												{
													edition: {
														id: 'UK',
													},
													paramSet: [
														{
															name: 'edition',
															value: 'uk',
														},
														{
															name: 'ct',
															value: 'tag',
														},
														{
															name: 'url',
															value: '/type/article',
														},
														{
															name: 'p',
															value: 'ng',
														},
													],
												},
												{
													edition: {
														id: 'US',
													},
													paramSet: [
														{
															name: 'ct',
															value: 'tag',
														},
														{
															name: 'url',
															value: '/type/article',
														},
														{
															name: 'p',
															value: 'ng',
														},
														{
															name: 'edition',
															value: 'us',
														},
													],
												},
												{
													edition: {
														id: 'AU',
													},
													paramSet: [
														{
															name: 'ct',
															value: 'tag',
														},
														{
															name: 'url',
															value: '/type/article',
														},
														{
															name: 'p',
															value: 'ng',
														},
														{
															name: 'edition',
															value: 'au',
														},
													],
												},
												{
													edition: {
														id: 'INT',
													},
													paramSet: [
														{
															name: 'ct',
															value: 'tag',
														},
														{
															name: 'url',
															value: '/type/article',
														},
														{
															name: 'edition',
															value: 'int',
														},
														{
															name: 'p',
															value: 'ng',
														},
													],
												},
											],
										},
									},
								},
								{
									properties: {
										id: 'tone/news',
										url: '/tone/news',
										tagType: 'Tone',
										sectionId: 'global',
										sectionName: 'global',
										webTitle: 'News',
										webUrl: 'https://www.theguardian.com/tone/news',
										references: [],
										commercial: {
											editionBrandings: [
												{
													edition: {
														id: 'UK',
													},
												},
												{
													edition: {
														id: 'US',
													},
												},
												{
													edition: {
														id: 'AU',
													},
												},
												{
													edition: {
														id: 'INT',
													},
												},
											],
											editionAdTargetings: [
												{
													edition: {
														id: 'UK',
													},
													paramSet: [
														{
															name: 'edition',
															value: 'uk',
														},
														{
															name: 'ct',
															value: 'tag',
														},
														{
															name: 'tn',
															value: ['news'],
														},
														{
															name: 'p',
															value: 'ng',
														},
														{
															name: 'url',
															value: '/tone/news',
														},
													],
												},
												{
													edition: {
														id: 'US',
													},
													paramSet: [
														{
															name: 'ct',
															value: 'tag',
														},
														{
															name: 'tn',
															value: ['news'],
														},
														{
															name: 'p',
															value: 'ng',
														},
														{
															name: 'url',
															value: '/tone/news',
														},
														{
															name: 'edition',
															value: 'us',
														},
													],
												},
												{
													edition: {
														id: 'AU',
													},
													paramSet: [
														{
															name: 'ct',
															value: 'tag',
														},
														{
															name: 'tn',
															value: ['news'],
														},
														{
															name: 'p',
															value: 'ng',
														},
														{
															name: 'url',
															value: '/tone/news',
														},
														{
															name: 'edition',
															value: 'au',
														},
													],
												},
												{
													edition: {
														id: 'INT',
													},
													paramSet: [
														{
															name: 'ct',
															value: 'tag',
														},
														{
															name: 'tn',
															value: ['news'],
														},
														{
															name: 'edition',
															value: 'int',
														},
														{
															name: 'p',
															value: 'ng',
														},
														{
															name: 'url',
															value: '/tone/news',
														},
													],
												},
											],
										},
									},
								},
								{
									properties: {
										id: 'profile/shaun-walker',
										url: '/profile/shaun-walker',
										tagType: 'Contributor',
										sectionId: 'global',
										sectionName: 'global',
										webTitle: 'Shaun Walker',
										webUrl: 'https://www.theguardian.com/profile/shaun-walker',
										bio: "<p>Shaun Walker is the Guardian's central and eastern Europe correspondent. Previously, he spent more than a decade in Moscow and is the author of The Long Hangover: Putin's New Russia and the Ghosts of the Past</p>",
										contributorLargeImagePath:
											'https://uploads.guim.co.uk/2019/08/19/Shaun_Walker.png',
										bylineImageUrl:
											'https://uploads.guim.co.uk/2019/08/19/Shaun_Walker.jpg',
										references: [],
										commercial: {
											editionBrandings: [
												{
													edition: {
														id: 'UK',
													},
												},
												{
													edition: {
														id: 'US',
													},
												},
												{
													edition: {
														id: 'AU',
													},
												},
												{
													edition: {
														id: 'INT',
													},
												},
											],
											editionAdTargetings: [
												{
													edition: {
														id: 'UK',
													},
													paramSet: [
														{
															name: 'edition',
															value: 'uk',
														},
														{
															name: 'url',
															value: '/profile/shaun-walker',
														},
														{
															name: 'ct',
															value: 'tag',
														},
														{
															name: 'co',
															value: [
																'shaun-walker',
															],
														},
														{
															name: 'p',
															value: 'ng',
														},
													],
												},
												{
													edition: {
														id: 'US',
													},
													paramSet: [
														{
															name: 'url',
															value: '/profile/shaun-walker',
														},
														{
															name: 'ct',
															value: 'tag',
														},
														{
															name: 'co',
															value: [
																'shaun-walker',
															],
														},
														{
															name: 'p',
															value: 'ng',
														},
														{
															name: 'edition',
															value: 'us',
														},
													],
												},
												{
													edition: {
														id: 'AU',
													},
													paramSet: [
														{
															name: 'url',
															value: '/profile/shaun-walker',
														},
														{
															name: 'ct',
															value: 'tag',
														},
														{
															name: 'co',
															value: [
																'shaun-walker',
															],
														},
														{
															name: 'p',
															value: 'ng',
														},
														{
															name: 'edition',
															value: 'au',
														},
													],
												},
												{
													edition: {
														id: 'INT',
													},
													paramSet: [
														{
															name: 'url',
															value: '/profile/shaun-walker',
														},
														{
															name: 'ct',
															value: 'tag',
														},
														{
															name: 'co',
															value: [
																'shaun-walker',
															],
														},
														{
															name: 'edition',
															value: 'int',
														},
														{
															name: 'p',
															value: 'ng',
														},
													],
												},
											],
										},
									},
								},
								{
									properties: {
										id: 'publication/theguardian',
										url: '/publication/theguardian',
										tagType: 'Publication',
										sectionId: 'theguardian',
										sectionName: 'From the Guardian',
										webTitle: 'The Guardian',
										webUrl: 'https://www.theguardian.com/theguardian/all',
										description:
											"All the latest from the world's leading liberal voice.",
										references: [],
										commercial: {
											editionBrandings: [
												{
													edition: {
														id: 'UK',
													},
												},
												{
													edition: {
														id: 'US',
													},
												},
												{
													edition: {
														id: 'AU',
													},
												},
												{
													edition: {
														id: 'INT',
													},
												},
											],
											editionAdTargetings: [
												{
													edition: {
														id: 'UK',
													},
													paramSet: [
														{
															name: 'edition',
															value: 'uk',
														},
														{
															name: 'url',
															value: '/publication/theguardian',
														},
														{
															name: 'ct',
															value: 'tag',
														},
														{
															name: 'p',
															value: 'ng',
														},
													],
												},
												{
													edition: {
														id: 'US',
													},
													paramSet: [
														{
															name: 'url',
															value: '/publication/theguardian',
														},
														{
															name: 'ct',
															value: 'tag',
														},
														{
															name: 'p',
															value: 'ng',
														},
														{
															name: 'edition',
															value: 'us',
														},
													],
												},
												{
													edition: {
														id: 'AU',
													},
													paramSet: [
														{
															name: 'url',
															value: '/publication/theguardian',
														},
														{
															name: 'ct',
															value: 'tag',
														},
														{
															name: 'p',
															value: 'ng',
														},
														{
															name: 'edition',
															value: 'au',
														},
													],
												},
												{
													edition: {
														id: 'INT',
													},
													paramSet: [
														{
															name: 'url',
															value: '/publication/theguardian',
														},
														{
															name: 'ct',
															value: 'tag',
														},
														{
															name: 'edition',
															value: 'int',
														},
														{
															name: 'p',
															value: 'ng',
														},
													],
												},
											],
											prebidIndexSites: [
												{
													bp: 'D',
													id: 208213,
												},
												{
													bp: 'M',
													id: 213487,
												},
												{
													bp: 'T',
													id: 215422,
												},
											],
										},
									},
								},
								{
									properties: {
										id: 'theguardian/mainsection',
										url: '/theguardian/mainsection',
										tagType: 'NewspaperBook',
										sectionId: 'news',
										sectionName: 'News',
										webTitle: 'Main section',
										webUrl: 'https://www.theguardian.com/theguardian/mainsection',
										references: [],
										commercial: {
											editionBrandings: [
												{
													edition: {
														id: 'UK',
													},
												},
												{
													edition: {
														id: 'US',
													},
												},
												{
													edition: {
														id: 'AU',
													},
												},
												{
													edition: {
														id: 'INT',
													},
												},
											],
											editionAdTargetings: [
												{
													edition: {
														id: 'UK',
													},
													paramSet: [
														{
															name: 'edition',
															value: 'uk',
														},
														{
															name: 'ct',
															value: 'tag',
														},
														{
															name: 'p',
															value: 'ng',
														},
														{
															name: 'url',
															value: '/theguardian/mainsection',
														},
													],
												},
												{
													edition: {
														id: 'US',
													},
													paramSet: [
														{
															name: 'ct',
															value: 'tag',
														},
														{
															name: 'p',
															value: 'ng',
														},
														{
															name: 'edition',
															value: 'us',
														},
														{
															name: 'url',
															value: '/theguardian/mainsection',
														},
													],
												},
												{
													edition: {
														id: 'AU',
													},
													paramSet: [
														{
															name: 'ct',
															value: 'tag',
														},
														{
															name: 'p',
															value: 'ng',
														},
														{
															name: 'edition',
															value: 'au',
														},
														{
															name: 'url',
															value: '/theguardian/mainsection',
														},
													],
												},
												{
													edition: {
														id: 'INT',
													},
													paramSet: [
														{
															name: 'ct',
															value: 'tag',
														},
														{
															name: 'edition',
															value: 'int',
														},
														{
															name: 'p',
															value: 'ng',
														},
														{
															name: 'url',
															value: '/theguardian/mainsection',
														},
													],
												},
											],
											prebidIndexSites: [
												{
													bp: 'D',
													id: 208234,
												},
												{
													bp: 'M',
													id: 213507,
												},
												{
													bp: 'T',
													id: 215442,
												},
											],
										},
									},
								},
								{
									properties: {
										id: 'theguardian/mainsection/international',
										url: '/theguardian/mainsection/international',
										tagType: 'NewspaperBookSection',
										sectionId: 'theguardian',
										sectionName: 'From the Guardian',
										webTitle: 'International',
										webUrl: 'https://www.theguardian.com/theguardian/mainsection/international',
										references: [],
										commercial: {
											editionBrandings: [
												{
													edition: {
														id: 'UK',
													},
												},
												{
													edition: {
														id: 'US',
													},
												},
												{
													edition: {
														id: 'AU',
													},
												},
												{
													edition: {
														id: 'INT',
													},
												},
											],
											editionAdTargetings: [
												{
													edition: {
														id: 'UK',
													},
													paramSet: [
														{
															name: 'edition',
															value: 'uk',
														},
														{
															name: 'ct',
															value: 'tag',
														},
														{
															name: 'url',
															value: '/theguardian/mainsection/international',
														},
														{
															name: 'p',
															value: 'ng',
														},
													],
												},
												{
													edition: {
														id: 'US',
													},
													paramSet: [
														{
															name: 'ct',
															value: 'tag',
														},
														{
															name: 'url',
															value: '/theguardian/mainsection/international',
														},
														{
															name: 'p',
															value: 'ng',
														},
														{
															name: 'edition',
															value: 'us',
														},
													],
												},
												{
													edition: {
														id: 'AU',
													},
													paramSet: [
														{
															name: 'ct',
															value: 'tag',
														},
														{
															name: 'url',
															value: '/theguardian/mainsection/international',
														},
														{
															name: 'p',
															value: 'ng',
														},
														{
															name: 'edition',
															value: 'au',
														},
													],
												},
												{
													edition: {
														id: 'INT',
													},
													paramSet: [
														{
															name: 'ct',
															value: 'tag',
														},
														{
															name: 'url',
															value: '/theguardian/mainsection/international',
														},
														{
															name: 'edition',
															value: 'int',
														},
														{
															name: 'p',
															value: 'ng',
														},
													],
												},
											],
											prebidIndexSites: [
												{
													bp: 'D',
													id: 208213,
												},
												{
													bp: 'M',
													id: 213487,
												},
												{
													bp: 'T',
													id: 215422,
												},
											],
										},
									},
								},
								{
									properties: {
										id: 'tracking/commissioningdesk/uk-foreign',
										url: '/tracking/commissioningdesk/uk-foreign',
										tagType: 'Tracking',
										sectionId: 'global',
										sectionName: 'global',
										webTitle: 'UK Foreign',
										webUrl: 'https://www.theguardian.com/tracking/commissioningdesk/uk-foreign',
										references: [],
										commercial: {
											editionBrandings: [
												{
													edition: {
														id: 'UK',
													},
												},
												{
													edition: {
														id: 'US',
													},
												},
												{
													edition: {
														id: 'AU',
													},
												},
												{
													edition: {
														id: 'INT',
													},
												},
											],
											editionAdTargetings: [
												{
													edition: {
														id: 'UK',
													},
													paramSet: [
														{
															name: 'edition',
															value: 'uk',
														},
														{
															name: 'url',
															value: '/tracking/commissioningdesk/uk-foreign',
														},
														{
															name: 'ct',
															value: 'tag',
														},
														{
															name: 'p',
															value: 'ng',
														},
													],
												},
												{
													edition: {
														id: 'US',
													},
													paramSet: [
														{
															name: 'url',
															value: '/tracking/commissioningdesk/uk-foreign',
														},
														{
															name: 'ct',
															value: 'tag',
														},
														{
															name: 'p',
															value: 'ng',
														},
														{
															name: 'edition',
															value: 'us',
														},
													],
												},
												{
													edition: {
														id: 'AU',
													},
													paramSet: [
														{
															name: 'url',
															value: '/tracking/commissioningdesk/uk-foreign',
														},
														{
															name: 'ct',
															value: 'tag',
														},
														{
															name: 'p',
															value: 'ng',
														},
														{
															name: 'edition',
															value: 'au',
														},
													],
												},
												{
													edition: {
														id: 'INT',
													},
													paramSet: [
														{
															name: 'url',
															value: '/tracking/commissioningdesk/uk-foreign',
														},
														{
															name: 'ct',
															value: 'tag',
														},
														{
															name: 'edition',
															value: 'int',
														},
														{
															name: 'p',
															value: 'ng',
														},
													],
												},
											],
										},
									},
								},
							],
						},
					},
					maybeContentId:
						'world/2016/apr/12/end-road-moscow-trolleybuses-campaign',
					isLiveBlog: false,
					isCrossword: false,
					byline: 'Shaun Walker in Moscow',
					webTitle: "End of the road for Moscow's trolleybuses",
					linkText: "End of the road for Moscow's trolleybuses",
					maybeFrontPublicationDate: 1460469683399,
					webUrl: 'https://www.theguardian.com/world/2016/apr/12/end-road-moscow-trolleybuses-campaign',
					editionBrandings: [
						{
							edition: {
								id: 'UK',
							},
						},
						{
							edition: {
								id: 'US',
							},
						},
						{
							edition: {
								id: 'AU',
							},
						},
						{
							edition: {
								id: 'INT',
							},
						},
					],
				},
				header: {
					isVideo: false,
					isComment: false,
					isGallery: false,
					isAudio: false,
					headline: "End of the road for Moscow's trolleybuses",
					url: '/world/2016/apr/12/end-road-moscow-trolleybuses-campaign',
					hasMainVideoElement: false,
				},
				card: {
					id: 'world/2016/apr/12/end-road-moscow-trolleybuses-campaign',
					cardStyle: {
						type: 'DefaultCardstyle',
					},
					webPublicationDateOption: 1460469478000,
					lastModifiedOption: 1580734335000,
					trailText:
						'Campaign launched as authorities plan to phase out the vehicles, which have operated in city for 83 years',
					shortUrlPath: '/p/4t9ma',
					shortUrl: 'https://www.theguardian.com/p/4t9ma',
					group: '0',
					isLive: false,
				},
				discussion: {
					isCommentable: true,
					isClosedForComments: true,
					discussionId: '/p/4t9ma',
				},
				display: {
					isBoosted: false,
					showBoostedHeadline: false,
					showQuotedHeadline: false,
					imageHide: false,
					showLivePlayable: false,
				},
				format: {
					design: 'ArticleDesign',
					theme: 'NewsPillar',
					display: 'StandardDisplay',
				},
				enriched: {},
				supportingContent: [],
				cardStyle: {
					type: 'DefaultCardstyle',
				},
				type: 'CuratedContent',
			},
			{
				properties: {
					isBreaking: false,
					showMainVideo: false,
					showKickerTag: false,
					showByline: false,
					imageSlideshowReplace: false,
					maybeContent: {
						trail: {
							trailPicture: {
								allImages: [
									{
										index: 2,
										fields: {
											displayCredit: 'true',
											source: 'The Guardian',
											photographer: 'Rachel Roddy',
											altText:
												'‘Anchovies are much loved in Rome. They can steal the show, or they can play a more discreet role – anchovies used at the foundation of a dish disappear like an obedient manservant’',
											height: '4797',
											credit: 'Photograph: Rachel Roddy/The Guardian',
											mediaId:
												'89488dbddb542bd8549b56c33c476c79e6dddbe1',
											width: '7994',
										},
										mediaType: 'Image',
										url: 'https://media.guim.co.uk/89488dbddb542bd8549b56c33c476c79e6dddbe1/0_1191_7994_4797/7994.jpg',
									},
								],
							},
							byline: 'Rachel Roddy',
							thumbnailPath:
								'https://i.guim.co.uk/img/media/89488dbddb542bd8549b56c33c476c79e6dddbe1/0_1191_7994_4797/500.jpg?quality=85&auto=format&fit=max&s=cb902a43762221cd2f7c2b4bbec38862',
							webPublicationDate: 1460460548000,
						},
						metadata: {
							id: 'lifeandstyle/2016/apr/12/rachel-roddys-anchovy-and-garlic-stuffed-roast-lamb-recipe',
							webTitle:
								'Rachel Roddy’s anchovy stuffed roast lamb recipe | A Kitchen in Rome',
							webUrl: 'https://www.theguardian.com/lifeandstyle/2016/apr/12/rachel-roddys-anchovy-and-garlic-stuffed-roast-lamb-recipe',
							type: 'Article',
							pillar: {
								name: 'Lifestyle',
							},
							sectionId: {
								value: 'food',
							},
							designType: 'Recipe',
							format: {
								design: 'RecipeDesign',
								theme: 'LifestylePillar',
								display: 'StandardDisplay',
							},
						},
						fields: {
							main: '<figure class="element element-image" data-media-id="89488dbddb542bd8549b56c33c476c79e6dddbe1"> <img src="https://media.guim.co.uk/89488dbddb542bd8549b56c33c476c79e6dddbe1/0_1191_7994_4797/1000.jpg" alt="‘Anchovies are much loved in Rome. They can steal the show, or they can play a more discreet role – anchovies used at the foundation of a dish disappear like an obedient manservant’" width="1000" height="600" class="gu-image" /> <figcaption> <span class="element-image__caption">‘Anchovies are much loved in Rome. They can steal the show, or they can play a more discreet role – anchovies used at the foundation of a dish disappear like an obedient manservant’</span> <span class="element-image__credit">Photograph: Rachel Roddy/The Guardian</span> </figcaption> </figure>',
							body: '<p>Anchovies are lovely fish – small, silvery and slender with green and blue reflections. They are related to herrings and sardines, and their flavour is reminiscent of both – more fragrant but with slight bitterness too. Anchovies are loved in Rome, and being plentiful in the warm Mediterranean, you will always find them on local fish stalls. My wily <em>pescivendolo</em> at Testaccio market gets his daily catch from a nearby coastal town called Anzio, their silver sides shining like newly minted coins against their bright white polystyrene packaging. There are usually some prepared anchovies on the counter too: headless, boneless fillets, opened up and looking a bit like fleshy butterflies ready to take home to be marinated, baked or fried.</p><p>I was taught by my Sicilian family to coat the fillets in breadcrumbs before frying. Augusto at the trattoria La Torricella plunges them in cold water, then flour, then water again before dropping them in hot fat. Either way, they seize into crisp curls which need only a spritz of lemon and to be eaten as quickly as possible. I often meet Augusto at Mauro’s fish stall, negotiating that day’s fish for the trattoria until the vein in his throat throbs. If we go for lunch at La Torricella, there is a pretty good chance Mauro will be there eating lunch, which I imagine is all part of the throbbing deal.</p>',
							standfirst:
								'<p>For its size, the humble anchovy packs a flavourful punch as both ingredient and seasoning. It’s glorious mashed into softened butter, spread on toast and dipped into soft-boiled eggs, or simply tossed with fresh veg. Here a few fillets transform a classic spring roast lamb recipe.</p>',
						},
						elements: {
							mediaAtoms: [],
						},
						tags: {
							tags: [
								{
									properties: {
										id: 'food/food',
										url: '/food/food',
										tagType: 'Keyword',
										sectionId: 'global',
										sectionName: 'global',
										webTitle: 'Food',
										webUrl: 'https://www.theguardian.com/food/food',
										references: [],
										commercial: {
											editionBrandings: [
												{
													edition: {
														id: 'UK',
													},
												},
												{
													edition: {
														id: 'US',
													},
												},
												{
													edition: {
														id: 'AU',
													},
												},
												{
													edition: {
														id: 'INT',
													},
												},
											],
											editionAdTargetings: [
												{
													edition: {
														id: 'UK',
													},
													paramSet: [
														{
															name: 'k',
															value: ['food'],
														},
														{
															name: 'edition',
															value: 'uk',
														},
														{
															name: 'url',
															value: '/food/food',
														},
														{
															name: 'ct',
															value: 'tag',
														},
														{
															name: 'p',
															value: 'ng',
														},
													],
												},
												{
													edition: {
														id: 'US',
													},
													paramSet: [
														{
															name: 'k',
															value: ['food'],
														},
														{
															name: 'url',
															value: '/food/food',
														},
														{
															name: 'ct',
															value: 'tag',
														},
														{
															name: 'p',
															value: 'ng',
														},
														{
															name: 'edition',
															value: 'us',
														},
													],
												},
												{
													edition: {
														id: 'AU',
													},
													paramSet: [
														{
															name: 'k',
															value: ['food'],
														},
														{
															name: 'url',
															value: '/food/food',
														},
														{
															name: 'ct',
															value: 'tag',
														},
														{
															name: 'p',
															value: 'ng',
														},
														{
															name: 'edition',
															value: 'au',
														},
													],
												},
												{
													edition: {
														id: 'INT',
													},
													paramSet: [
														{
															name: 'k',
															value: ['food'],
														},
														{
															name: 'url',
															value: '/food/food',
														},
														{
															name: 'ct',
															value: 'tag',
														},
														{
															name: 'edition',
															value: 'int',
														},
														{
															name: 'p',
															value: 'ng',
														},
													],
												},
											],
										},
									},
								},
								{
									properties: {
										id: 'food/series/a-kitchen-in-rome',
										url: '/food/series/a-kitchen-in-rome',
										tagType: 'Series',
										sectionId: 'food',
										sectionName: 'Food',
										webTitle: 'A kitchen in Rome',
										webUrl: 'https://www.theguardian.com/food/series/a-kitchen-in-rome',
										description:
											'<p>Rachel Roddy dispatches weekly from her kitchen in Rome, where seasonal ingredients are worked into an everyday dish you can adapt easily and quickly</p>',
										references: [],
										commercial: {
											editionBrandings: [
												{
													edition: {
														id: 'UK',
													},
												},
												{
													edition: {
														id: 'US',
													},
												},
												{
													edition: {
														id: 'AU',
													},
												},
												{
													edition: {
														id: 'INT',
													},
												},
											],
											editionAdTargetings: [
												{
													edition: {
														id: 'UK',
													},
													paramSet: [
														{
															name: 'edition',
															value: 'uk',
														},
														{
															name: 'ct',
															value: 'tag',
														},
														{
															name: 'p',
															value: 'ng',
														},
														{
															name: 'url',
															value: '/food/series/a-kitchen-in-rome',
														},
														{
															name: 'se',
															value: [
																'a-kitchen-in-rome',
															],
														},
													],
												},
												{
													edition: {
														id: 'US',
													},
													paramSet: [
														{
															name: 'ct',
															value: 'tag',
														},
														{
															name: 'p',
															value: 'ng',
														},
														{
															name: 'edition',
															value: 'us',
														},
														{
															name: 'url',
															value: '/food/series/a-kitchen-in-rome',
														},
														{
															name: 'se',
															value: [
																'a-kitchen-in-rome',
															],
														},
													],
												},
												{
													edition: {
														id: 'AU',
													},
													paramSet: [
														{
															name: 'ct',
															value: 'tag',
														},
														{
															name: 'p',
															value: 'ng',
														},
														{
															name: 'url',
															value: '/food/series/a-kitchen-in-rome',
														},
														{
															name: 'edition',
															value: 'au',
														},
														{
															name: 'se',
															value: [
																'a-kitchen-in-rome',
															],
														},
													],
												},
												{
													edition: {
														id: 'INT',
													},
													paramSet: [
														{
															name: 'ct',
															value: 'tag',
														},
														{
															name: 'edition',
															value: 'int',
														},
														{
															name: 'p',
															value: 'ng',
														},
														{
															name: 'url',
															value: '/food/series/a-kitchen-in-rome',
														},
														{
															name: 'se',
															value: [
																'a-kitchen-in-rome',
															],
														},
													],
												},
											],
											prebidIndexSites: [
												{
													bp: 'D',
													id: 208283,
												},
												{
													bp: 'M',
													id: 213553,
												},
												{
													bp: 'T',
													id: 215488,
												},
											],
										},
									},
								},
								{
									properties: {
										id: 'food/vegetables',
										url: '/food/vegetables',
										tagType: 'Keyword',
										sectionId: 'food',
										sectionName: 'Food',
										webTitle: 'Vegetables',
										webUrl: 'https://www.theguardian.com/food/vegetables',
										description:
											'<p>Recipes, reviews and food commentary on vegetables</p>',
										references: [],
										commercial: {
											editionBrandings: [
												{
													edition: {
														id: 'UK',
													},
												},
												{
													edition: {
														id: 'US',
													},
												},
												{
													edition: {
														id: 'AU',
													},
												},
												{
													edition: {
														id: 'INT',
													},
												},
											],
											editionAdTargetings: [
												{
													edition: {
														id: 'UK',
													},
													paramSet: [
														{
															name: 'edition',
															value: 'uk',
														},
														{
															name: 'url',
															value: '/food/vegetables',
														},
														{
															name: 'ct',
															value: 'tag',
														},
														{
															name: 'p',
															value: 'ng',
														},
														{
															name: 'k',
															value: [
																'vegetables',
															],
														},
													],
												},
												{
													edition: {
														id: 'US',
													},
													paramSet: [
														{
															name: 'url',
															value: '/food/vegetables',
														},
														{
															name: 'ct',
															value: 'tag',
														},
														{
															name: 'p',
															value: 'ng',
														},
														{
															name: 'edition',
															value: 'us',
														},
														{
															name: 'k',
															value: [
																'vegetables',
															],
														},
													],
												},
												{
													edition: {
														id: 'AU',
													},
													paramSet: [
														{
															name: 'url',
															value: '/food/vegetables',
														},
														{
															name: 'ct',
															value: 'tag',
														},
														{
															name: 'p',
															value: 'ng',
														},
														{
															name: 'k',
															value: [
																'vegetables',
															],
														},
														{
															name: 'edition',
															value: 'au',
														},
													],
												},
												{
													edition: {
														id: 'INT',
													},
													paramSet: [
														{
															name: 'url',
															value: '/food/vegetables',
														},
														{
															name: 'ct',
															value: 'tag',
														},
														{
															name: 'edition',
															value: 'int',
														},
														{
															name: 'p',
															value: 'ng',
														},
														{
															name: 'k',
															value: [
																'vegetables',
															],
														},
													],
												},
											],
											prebidIndexSites: [
												{
													bp: 'D',
													id: 208283,
												},
												{
													bp: 'M',
													id: 213553,
												},
												{
													bp: 'T',
													id: 215488,
												},
											],
										},
									},
								},
								{
									properties: {
										id: 'lifeandstyle/lifeandstyle',
										url: '/lifeandstyle/lifeandstyle',
										tagType: 'Keyword',
										sectionId: 'lifeandstyle',
										sectionName: 'Life and style',
										webTitle: 'Life and style',
										webUrl: 'https://www.theguardian.com/lifeandstyle/lifeandstyle',
										references: [],
										commercial: {
											editionBrandings: [
												{
													edition: {
														id: 'UK',
													},
												},
												{
													edition: {
														id: 'US',
													},
												},
												{
													edition: {
														id: 'AU',
													},
												},
												{
													edition: {
														id: 'INT',
													},
												},
											],
											editionAdTargetings: [
												{
													edition: {
														id: 'UK',
													},
													paramSet: [
														{
															name: 'edition',
															value: 'uk',
														},
														{
															name: 'url',
															value: '/lifeandstyle/lifeandstyle',
														},
														{
															name: 'ct',
															value: 'tag',
														},
														{
															name: 'k',
															value: [
																'lifeandstyle',
															],
														},
														{
															name: 'p',
															value: 'ng',
														},
													],
												},
												{
													edition: {
														id: 'US',
													},
													paramSet: [
														{
															name: 'url',
															value: '/lifeandstyle/lifeandstyle',
														},
														{
															name: 'ct',
															value: 'tag',
														},
														{
															name: 'k',
															value: [
																'lifeandstyle',
															],
														},
														{
															name: 'p',
															value: 'ng',
														},
														{
															name: 'edition',
															value: 'us',
														},
													],
												},
												{
													edition: {
														id: 'AU',
													},
													paramSet: [
														{
															name: 'url',
															value: '/lifeandstyle/lifeandstyle',
														},
														{
															name: 'ct',
															value: 'tag',
														},
														{
															name: 'k',
															value: [
																'lifeandstyle',
															],
														},
														{
															name: 'p',
															value: 'ng',
														},
														{
															name: 'edition',
															value: 'au',
														},
													],
												},
												{
													edition: {
														id: 'INT',
													},
													paramSet: [
														{
															name: 'url',
															value: '/lifeandstyle/lifeandstyle',
														},
														{
															name: 'ct',
															value: 'tag',
														},
														{
															name: 'edition',
															value: 'int',
														},
														{
															name: 'k',
															value: [
																'lifeandstyle',
															],
														},
														{
															name: 'p',
															value: 'ng',
														},
													],
												},
											],
											prebidIndexSites: [
												{
													bp: 'D',
													id: 208242,
												},
												{
													bp: 'M',
													id: 213515,
												},
												{
													bp: 'T',
													id: 215450,
												},
											],
										},
									},
								},
								{
									properties: {
										id: 'tone/recipes',
										url: '/tone/recipes',
										tagType: 'Tone',
										sectionId: 'global',
										sectionName: 'global',
										webTitle: 'Recipes',
										webUrl: 'https://www.theguardian.com/tone/recipes',
										references: [],
										commercial: {
											editionBrandings: [
												{
													edition: {
														id: 'UK',
													},
												},
												{
													edition: {
														id: 'US',
													},
												},
												{
													edition: {
														id: 'AU',
													},
												},
												{
													edition: {
														id: 'INT',
													},
												},
											],
											editionAdTargetings: [
												{
													edition: {
														id: 'UK',
													},
													paramSet: [
														{
															name: 'edition',
															value: 'uk',
														},
														{
															name: 'ct',
															value: 'tag',
														},
														{
															name: 'p',
															value: 'ng',
														},
														{
															name: 'tn',
															value: ['recipes'],
														},
														{
															name: 'url',
															value: '/tone/recipes',
														},
													],
												},
												{
													edition: {
														id: 'US',
													},
													paramSet: [
														{
															name: 'ct',
															value: 'tag',
														},
														{
															name: 'p',
															value: 'ng',
														},
														{
															name: 'edition',
															value: 'us',
														},
														{
															name: 'tn',
															value: ['recipes'],
														},
														{
															name: 'url',
															value: '/tone/recipes',
														},
													],
												},
												{
													edition: {
														id: 'AU',
													},
													paramSet: [
														{
															name: 'ct',
															value: 'tag',
														},
														{
															name: 'p',
															value: 'ng',
														},
														{
															name: 'tn',
															value: ['recipes'],
														},
														{
															name: 'edition',
															value: 'au',
														},
														{
															name: 'url',
															value: '/tone/recipes',
														},
													],
												},
												{
													edition: {
														id: 'INT',
													},
													paramSet: [
														{
															name: 'ct',
															value: 'tag',
														},
														{
															name: 'edition',
															value: 'int',
														},
														{
															name: 'p',
															value: 'ng',
														},
														{
															name: 'tn',
															value: ['recipes'],
														},
														{
															name: 'url',
															value: '/tone/recipes',
														},
													],
												},
											],
										},
									},
								},
								{
									properties: {
										id: 'food/italian-food-and-drink',
										url: '/food/italian-food-and-drink',
										tagType: 'Keyword',
										sectionId: 'food',
										sectionName: 'Food',
										webTitle: 'Italian food and drink',
										webUrl: 'https://www.theguardian.com/food/italian-food-and-drink',
										references: [],
										commercial: {
											editionBrandings: [
												{
													edition: {
														id: 'UK',
													},
												},
												{
													edition: {
														id: 'US',
													},
												},
												{
													edition: {
														id: 'AU',
													},
												},
												{
													edition: {
														id: 'INT',
													},
												},
											],
											editionAdTargetings: [
												{
													edition: {
														id: 'UK',
													},
													paramSet: [
														{
															name: 'edition',
															value: 'uk',
														},
														{
															name: 'url',
															value: '/food/italian-food-and-drink',
														},
														{
															name: 'ct',
															value: 'tag',
														},
														{
															name: 'p',
															value: 'ng',
														},
														{
															name: 'k',
															value: [
																'italian-food-and-drink',
															],
														},
													],
												},
												{
													edition: {
														id: 'US',
													},
													paramSet: [
														{
															name: 'url',
															value: '/food/italian-food-and-drink',
														},
														{
															name: 'ct',
															value: 'tag',
														},
														{
															name: 'p',
															value: 'ng',
														},
														{
															name: 'edition',
															value: 'us',
														},
														{
															name: 'k',
															value: [
																'italian-food-and-drink',
															],
														},
													],
												},
												{
													edition: {
														id: 'AU',
													},
													paramSet: [
														{
															name: 'url',
															value: '/food/italian-food-and-drink',
														},
														{
															name: 'ct',
															value: 'tag',
														},
														{
															name: 'p',
															value: 'ng',
														},
														{
															name: 'k',
															value: [
																'italian-food-and-drink',
															],
														},
														{
															name: 'edition',
															value: 'au',
														},
													],
												},
												{
													edition: {
														id: 'INT',
													},
													paramSet: [
														{
															name: 'url',
															value: '/food/italian-food-and-drink',
														},
														{
															name: 'ct',
															value: 'tag',
														},
														{
															name: 'edition',
															value: 'int',
														},
														{
															name: 'p',
															value: 'ng',
														},
														{
															name: 'k',
															value: [
																'italian-food-and-drink',
															],
														},
													],
												},
											],
											prebidIndexSites: [
												{
													bp: 'D',
													id: 208283,
												},
												{
													bp: 'M',
													id: 213553,
												},
												{
													bp: 'T',
													id: 215488,
												},
											],
										},
									},
								},
								{
									properties: {
										id: 'type/article',
										url: '/type/article',
										tagType: 'Type',
										sectionId: 'global',
										sectionName: 'global',
										webTitle: 'Article',
										webUrl: 'https://www.theguardian.com/articles',
										references: [],
										commercial: {
											editionBrandings: [
												{
													edition: {
														id: 'UK',
													},
												},
												{
													edition: {
														id: 'US',
													},
												},
												{
													edition: {
														id: 'AU',
													},
												},
												{
													edition: {
														id: 'INT',
													},
												},
											],
											editionAdTargetings: [
												{
													edition: {
														id: 'UK',
													},
													paramSet: [
														{
															name: 'edition',
															value: 'uk',
														},
														{
															name: 'ct',
															value: 'tag',
														},
														{
															name: 'url',
															value: '/type/article',
														},
														{
															name: 'p',
															value: 'ng',
														},
													],
												},
												{
													edition: {
														id: 'US',
													},
													paramSet: [
														{
															name: 'ct',
															value: 'tag',
														},
														{
															name: 'url',
															value: '/type/article',
														},
														{
															name: 'p',
															value: 'ng',
														},
														{
															name: 'edition',
															value: 'us',
														},
													],
												},
												{
													edition: {
														id: 'AU',
													},
													paramSet: [
														{
															name: 'ct',
															value: 'tag',
														},
														{
															name: 'url',
															value: '/type/article',
														},
														{
															name: 'p',
															value: 'ng',
														},
														{
															name: 'edition',
															value: 'au',
														},
													],
												},
												{
													edition: {
														id: 'INT',
													},
													paramSet: [
														{
															name: 'ct',
															value: 'tag',
														},
														{
															name: 'url',
															value: '/type/article',
														},
														{
															name: 'edition',
															value: 'int',
														},
														{
															name: 'p',
															value: 'ng',
														},
													],
												},
											],
										},
									},
								},
								{
									properties: {
										id: 'profile/rachel-roddy',
										url: '/profile/rachel-roddy',
										tagType: 'Contributor',
										sectionId: 'global',
										sectionName: 'global',
										webTitle: 'Rachel Roddy',
										webUrl: 'https://www.theguardian.com/profile/rachel-roddy',
										twitterHandle: 'racheleats',
										bio: '<p>Rachel Roddy is a food writer and author based in Rome</p>',
										contributorLargeImagePath:
											'https://uploads.guim.co.uk/2018/01/29/Rachel_Roddy,_L.png',
										bylineImageUrl:
											'https://uploads.guim.co.uk/2018/01/29/Rachel-Roddy.jpg',
										references: [],
										commercial: {
											editionBrandings: [
												{
													edition: {
														id: 'UK',
													},
												},
												{
													edition: {
														id: 'US',
													},
												},
												{
													edition: {
														id: 'AU',
													},
												},
												{
													edition: {
														id: 'INT',
													},
												},
											],
											editionAdTargetings: [
												{
													edition: {
														id: 'UK',
													},
													paramSet: [
														{
															name: 'edition',
															value: 'uk',
														},
														{
															name: 'co',
															value: [
																'rachel-roddy',
															],
														},
														{
															name: 'url',
															value: '/profile/rachel-roddy',
														},
														{
															name: 'ct',
															value: 'tag',
														},
														{
															name: 'p',
															value: 'ng',
														},
													],
												},
												{
													edition: {
														id: 'US',
													},
													paramSet: [
														{
															name: 'co',
															value: [
																'rachel-roddy',
															],
														},
														{
															name: 'url',
															value: '/profile/rachel-roddy',
														},
														{
															name: 'ct',
															value: 'tag',
														},
														{
															name: 'p',
															value: 'ng',
														},
														{
															name: 'edition',
															value: 'us',
														},
													],
												},
												{
													edition: {
														id: 'AU',
													},
													paramSet: [
														{
															name: 'co',
															value: [
																'rachel-roddy',
															],
														},
														{
															name: 'url',
															value: '/profile/rachel-roddy',
														},
														{
															name: 'ct',
															value: 'tag',
														},
														{
															name: 'p',
															value: 'ng',
														},
														{
															name: 'edition',
															value: 'au',
														},
													],
												},
												{
													edition: {
														id: 'INT',
													},
													paramSet: [
														{
															name: 'co',
															value: [
																'rachel-roddy',
															],
														},
														{
															name: 'url',
															value: '/profile/rachel-roddy',
														},
														{
															name: 'ct',
															value: 'tag',
														},
														{
															name: 'edition',
															value: 'int',
														},
														{
															name: 'p',
															value: 'ng',
														},
													],
												},
											],
										},
									},
								},
								{
									properties: {
										id: 'publication/theguardian',
										url: '/publication/theguardian',
										tagType: 'Publication',
										sectionId: 'theguardian',
										sectionName: 'From the Guardian',
										webTitle: 'The Guardian',
										webUrl: 'https://www.theguardian.com/theguardian/all',
										description:
											"All the latest from the world's leading liberal voice.",
										references: [],
										commercial: {
											editionBrandings: [
												{
													edition: {
														id: 'UK',
													},
												},
												{
													edition: {
														id: 'US',
													},
												},
												{
													edition: {
														id: 'AU',
													},
												},
												{
													edition: {
														id: 'INT',
													},
												},
											],
											editionAdTargetings: [
												{
													edition: {
														id: 'UK',
													},
													paramSet: [
														{
															name: 'edition',
															value: 'uk',
														},
														{
															name: 'url',
															value: '/publication/theguardian',
														},
														{
															name: 'ct',
															value: 'tag',
														},
														{
															name: 'p',
															value: 'ng',
														},
													],
												},
												{
													edition: {
														id: 'US',
													},
													paramSet: [
														{
															name: 'url',
															value: '/publication/theguardian',
														},
														{
															name: 'ct',
															value: 'tag',
														},
														{
															name: 'p',
															value: 'ng',
														},
														{
															name: 'edition',
															value: 'us',
														},
													],
												},
												{
													edition: {
														id: 'AU',
													},
													paramSet: [
														{
															name: 'url',
															value: '/publication/theguardian',
														},
														{
															name: 'ct',
															value: 'tag',
														},
														{
															name: 'p',
															value: 'ng',
														},
														{
															name: 'edition',
															value: 'au',
														},
													],
												},
												{
													edition: {
														id: 'INT',
													},
													paramSet: [
														{
															name: 'url',
															value: '/publication/theguardian',
														},
														{
															name: 'ct',
															value: 'tag',
														},
														{
															name: 'edition',
															value: 'int',
														},
														{
															name: 'p',
															value: 'ng',
														},
													],
												},
											],
											prebidIndexSites: [
												{
													bp: 'D',
													id: 208213,
												},
												{
													bp: 'M',
													id: 213487,
												},
												{
													bp: 'T',
													id: 215422,
												},
											],
										},
									},
								},
								{
									properties: {
										id: 'theguardian/cook',
										url: '/theguardian/cook',
										tagType: 'NewspaperBook',
										sectionId: 'lifeandstyle',
										sectionName: 'Life and style',
										webTitle: 'Cook',
										webUrl: 'https://www.theguardian.com/theguardian/cook',
										references: [],
										commercial: {
											editionBrandings: [
												{
													edition: {
														id: 'UK',
													},
												},
												{
													edition: {
														id: 'US',
													},
												},
												{
													edition: {
														id: 'AU',
													},
												},
												{
													edition: {
														id: 'INT',
													},
												},
											],
											editionAdTargetings: [
												{
													edition: {
														id: 'UK',
													},
													paramSet: [
														{
															name: 'edition',
															value: 'uk',
														},
														{
															name: 'ct',
															value: 'tag',
														},
														{
															name: 'p',
															value: 'ng',
														},
														{
															name: 'url',
															value: '/theguardian/cook',
														},
													],
												},
												{
													edition: {
														id: 'US',
													},
													paramSet: [
														{
															name: 'ct',
															value: 'tag',
														},
														{
															name: 'p',
															value: 'ng',
														},
														{
															name: 'edition',
															value: 'us',
														},
														{
															name: 'url',
															value: '/theguardian/cook',
														},
													],
												},
												{
													edition: {
														id: 'AU',
													},
													paramSet: [
														{
															name: 'ct',
															value: 'tag',
														},
														{
															name: 'p',
															value: 'ng',
														},
														{
															name: 'url',
															value: '/theguardian/cook',
														},
														{
															name: 'edition',
															value: 'au',
														},
													],
												},
												{
													edition: {
														id: 'INT',
													},
													paramSet: [
														{
															name: 'ct',
															value: 'tag',
														},
														{
															name: 'edition',
															value: 'int',
														},
														{
															name: 'p',
															value: 'ng',
														},
														{
															name: 'url',
															value: '/theguardian/cook',
														},
													],
												},
											],
											prebidIndexSites: [
												{
													bp: 'D',
													id: 208242,
												},
												{
													bp: 'M',
													id: 213515,
												},
												{
													bp: 'T',
													id: 215450,
												},
											],
										},
									},
								},
								{
									properties: {
										id: 'theguardian/cook/cook',
										url: '/theguardian/cook/cook',
										tagType: 'NewspaperBookSection',
										sectionId: 'lifeandstyle',
										sectionName: 'Life and style',
										webTitle: 'Cook',
										webUrl: 'https://www.theguardian.com/theguardian/cook/cook',
										references: [],
										commercial: {
											editionBrandings: [
												{
													edition: {
														id: 'UK',
													},
												},
												{
													edition: {
														id: 'US',
													},
												},
												{
													edition: {
														id: 'AU',
													},
												},
												{
													edition: {
														id: 'INT',
													},
												},
											],
											editionAdTargetings: [
												{
													edition: {
														id: 'UK',
													},
													paramSet: [
														{
															name: 'edition',
															value: 'uk',
														},
														{
															name: 'url',
															value: '/theguardian/cook/cook',
														},
														{
															name: 'ct',
															value: 'tag',
														},
														{
															name: 'p',
															value: 'ng',
														},
													],
												},
												{
													edition: {
														id: 'US',
													},
													paramSet: [
														{
															name: 'url',
															value: '/theguardian/cook/cook',
														},
														{
															name: 'ct',
															value: 'tag',
														},
														{
															name: 'p',
															value: 'ng',
														},
														{
															name: 'edition',
															value: 'us',
														},
													],
												},
												{
													edition: {
														id: 'AU',
													},
													paramSet: [
														{
															name: 'url',
															value: '/theguardian/cook/cook',
														},
														{
															name: 'ct',
															value: 'tag',
														},
														{
															name: 'p',
															value: 'ng',
														},
														{
															name: 'edition',
															value: 'au',
														},
													],
												},
												{
													edition: {
														id: 'INT',
													},
													paramSet: [
														{
															name: 'url',
															value: '/theguardian/cook/cook',
														},
														{
															name: 'ct',
															value: 'tag',
														},
														{
															name: 'edition',
															value: 'int',
														},
														{
															name: 'p',
															value: 'ng',
														},
													],
												},
											],
											prebidIndexSites: [
												{
													bp: 'D',
													id: 208242,
												},
												{
													bp: 'M',
													id: 213515,
												},
												{
													bp: 'T',
													id: 215450,
												},
											],
										},
									},
								},
								{
									properties: {
										id: 'tracking/commissioningdesk/cook',
										url: '/tracking/commissioningdesk/cook',
										tagType: 'Tracking',
										sectionId: 'global',
										sectionName: 'global',
										webTitle: 'UK Cook',
										webUrl: 'https://www.theguardian.com/tracking/commissioningdesk/cook',
										references: [],
										commercial: {
											editionBrandings: [
												{
													edition: {
														id: 'UK',
													},
												},
												{
													edition: {
														id: 'US',
													},
												},
												{
													edition: {
														id: 'AU',
													},
												},
												{
													edition: {
														id: 'INT',
													},
												},
											],
											editionAdTargetings: [
												{
													edition: {
														id: 'UK',
													},
													paramSet: [
														{
															name: 'edition',
															value: 'uk',
														},
														{
															name: 'ct',
															value: 'tag',
														},
														{
															name: 'url',
															value: '/tracking/commissioningdesk/cook',
														},
														{
															name: 'p',
															value: 'ng',
														},
													],
												},
												{
													edition: {
														id: 'US',
													},
													paramSet: [
														{
															name: 'ct',
															value: 'tag',
														},
														{
															name: 'url',
															value: '/tracking/commissioningdesk/cook',
														},
														{
															name: 'p',
															value: 'ng',
														},
														{
															name: 'edition',
															value: 'us',
														},
													],
												},
												{
													edition: {
														id: 'AU',
													},
													paramSet: [
														{
															name: 'ct',
															value: 'tag',
														},
														{
															name: 'url',
															value: '/tracking/commissioningdesk/cook',
														},
														{
															name: 'p',
															value: 'ng',
														},
														{
															name: 'edition',
															value: 'au',
														},
													],
												},
												{
													edition: {
														id: 'INT',
													},
													paramSet: [
														{
															name: 'ct',
															value: 'tag',
														},
														{
															name: 'edition',
															value: 'int',
														},
														{
															name: 'url',
															value: '/tracking/commissioningdesk/cook',
														},
														{
															name: 'p',
															value: 'ng',
														},
													],
												},
											],
										},
									},
								},
							],
						},
					},
					maybeContentId:
						'lifeandstyle/2016/apr/12/rachel-roddys-anchovy-and-garlic-stuffed-roast-lamb-recipe',
					isLiveBlog: false,
					isCrossword: false,
					byline: 'Rachel Roddy',
					webTitle:
						'Rachel Roddy’s anchovy stuffed roast lamb recipe | A Kitchen in Rome',
					linkText:
						'Rachel Roddy’s anchovy stuffed roast lamb recipe | A Kitchen in Rome',
					maybeFrontPublicationDate: 1460460922260,
					webUrl: 'https://www.theguardian.com/lifeandstyle/2016/apr/12/rachel-roddys-anchovy-and-garlic-stuffed-roast-lamb-recipe',
					editionBrandings: [
						{
							edition: {
								id: 'UK',
							},
						},
						{
							edition: {
								id: 'US',
							},
						},
						{
							edition: {
								id: 'AU',
							},
						},
						{
							edition: {
								id: 'INT',
							},
						},
					],
				},
				header: {
					isVideo: false,
					isComment: false,
					isGallery: false,
					isAudio: false,
					kicker: {
						type: 'FreeHtmlKicker',
						item: {
							properties: {
								kickerText: 'Recipe from Rome',
							},
							body: 'Recipe from Rome',
						},
					},
					seriesOrBlogKicker: {
						properties: {
							kickerText: 'A kitchen in Rome',
						},
						name: 'A kitchen in Rome',
						url: 'https://www.theguardian.com/food/series/a-kitchen-in-rome',
						id: 'food/series/a-kitchen-in-rome',
					},
					headline:
						'Rachel Roddy’s anchovy and garlic stuffed roast lamb',
					url: '/lifeandstyle/2016/apr/12/rachel-roddys-anchovy-and-garlic-stuffed-roast-lamb-recipe',
					hasMainVideoElement: false,
				},
				card: {
					id: 'lifeandstyle/2016/apr/12/rachel-roddys-anchovy-and-garlic-stuffed-roast-lamb-recipe',
					cardStyle: {
						type: 'Feature',
					},
					webPublicationDateOption: 1460460548000,
					lastModifiedOption: 1562661597000,
					trailText:
						'<strong>A Kitchen in Rome: </strong>For its size, the humble anchovy packs a flavourful punch as both ingredient and seasoning, mashed into softened butter, spread on toast to be dipped into soft-boiled eggs or tossed with fresh veg. Here a few fillets transform a classic spring roast lamb recipe.',
					shortUrlPath: '/p/4t963',
					shortUrl: 'https://www.theguardian.com/p/4t963',
					group: '0',
					isLive: false,
				},
				discussion: {
					isCommentable: true,
					isClosedForComments: true,
					discussionId: '/p/4t963',
				},
				display: {
					isBoosted: false,
					showBoostedHeadline: false,
					showQuotedHeadline: false,
					imageHide: false,
					showLivePlayable: false,
				},
				format: {
					design: 'RecipeDesign',
					theme: 'LifestylePillar',
					display: 'StandardDisplay',
				},
				enriched: {},
				supportingContent: [],
				cardStyle: {
					type: 'Feature',
				},
				type: 'CuratedContent',
			},
		],
		startIndex: 5,
		containerPalette: 'EventPalette',
	} as unknown as ShowMoreRequest;
}
