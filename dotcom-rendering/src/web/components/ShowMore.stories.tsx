import { enhanceCards } from '../../model/enhanceCollections';
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
		return message;
	}
};
Test.story = { name: 'basic' };

function returnTestData() {
	return {
		cards: [
			{
			  "properties": {
				"isBreaking": false,
				"showMainVideo": false,
				"showKickerTag": false,
				"showByline": false,
				"imageSlideshowReplace": false,
				"maybeContent": {
				  "trail": {
					"trailPicture": {
					  "allImages": [
						{
						  "index": 1,
						  "fields": {
							"displayCredit": "true",
							"source": "PA",
							"photographer": "Chris Radburn",
							"isMaster": "true",
							"altText": "Graduates at Anglia Ruskin University in Cambridge",
							"height": "1799",
							"credit": "Photograph: Chris Radburn/PA",
							"mediaId": "df90043d2abedae6d3b5afe8031d0590b20649c4",
							"width": "3000"
						  },
						  "mediaType": "Image",
						  "url": "https://media.guim.co.uk/df90043d2abedae6d3b5afe8031d0590b20649c4/0_0_3000_1799/master/3000.jpg"
						}
					  ]
					},
					"byline": "Rachel Hall",
					"thumbnailPath": "https://i.guim.co.uk/img/media/df90043d2abedae6d3b5afe8031d0590b20649c4/0_0_3000_1799/500.jpg?quality=85&auto=format&fit=max&s=6167c4570b79302a6611c10417266774",
					"webPublicationDate": 1653886820000
				  },
				  "metadata": {
					"id": "education/2022/may/30/longer-work-visa-could-tempt-more-foreign-students-uk-survey-finds",
					"webTitle": "Longer work visa could tempt more foreign students to UK, survey finds",
					"webUrl": "https://www.theguardian.com/education/2022/may/30/longer-work-visa-could-tempt-more-foreign-students-uk-survey-finds",
					"type": "Article",
					"pillar": {
					  "name": "News"
					},
					"sectionId": {
					  "value": "education"
					},
					"designType": "Article",
					"format": {
					  "design": "ArticleDesign",
					  "theme": "NewsPillar",
					  "display": "StandardDisplay"
					}
				  },
				  "fields": {
					"main": "<figure class=\"element element-image\" data-media-id=\"df90043d2abedae6d3b5afe8031d0590b20649c4\"> <img src=\"https://media.guim.co.uk/df90043d2abedae6d3b5afe8031d0590b20649c4/0_0_3000_1799/1000.jpg\" alt=\"Graduates at Anglia Ruskin University in Cambridge\" width=\"1000\" height=\"600\" class=\"gu-image\" /> <figcaption> <span class=\"element-image__caption\">The two-year visa for overseas graduates was revoked by the then home secretary, Theresa May, in 2012 in an attempt to curb immigration.</span> <span class=\"element-image__credit\">Photograph: Chris Radburn/PA</span> </figcaption> </figure>",
					"body": "<p>International students would be more likely to consider studying in the UK if they were allowed to stay and work for three years instead of two, a survey suggests.</p><p>Foreign students have been able to stay on and work in the UK for two years after completing their course since July last year, when the government reinstated the two-year post-study work visa after years of pressure from universities.</p>",
					"standfirst": "<p>Chancellors urge review of two-year visas as overseas graduates say three-year offer would be more attractive</p>"
				  },
				  "elements": {
					"mediaAtoms": []
				  },
				  "tags": {
					"tags": [
					  {
						"properties": {
						  "id": "education/internationalstudents",
						  "url": "/education/internationalstudents",
						  "tagType": "Keyword",
						  "sectionId": "education",
						  "sectionName": "Education",
						  "webTitle": "International students",
						  "webUrl": "https://www.theguardian.com/education/internationalstudents",
						  "description": "The latest news and comment on international students in the UK",
						  "references": [],
						  "commercial": {
							"editionBrandings": [
							  {
								"edition": {
								  "id": "UK"
								}
							  },
							  {
								"edition": {
								  "id": "US"
								}
							  },
							  {
								"edition": {
								  "id": "AU"
								}
							  },
							  {
								"edition": {
								  "id": "INT"
								}
							  }
							],
							"editionAdTargetings": [
							  {
								"edition": {
								  "id": "UK"
								},
								"paramSet": [
								  {
									"name": "edition",
									"value": "uk"
								  },
								  {
									"name": "ct",
									"value": "tag"
								  },
								  {
									"name": "k",
									"value": [
									  "internationalstudents"
									]
								  },
								  {
									"name": "p",
									"value": "ng"
								  },
								  {
									"name": "url",
									"value": "/education/internationalstudents"
								  }
								]
							  },
							  {
								"edition": {
								  "id": "US"
								},
								"paramSet": [
								  {
									"name": "ct",
									"value": "tag"
								  },
								  {
									"name": "k",
									"value": [
									  "internationalstudents"
									]
								  },
								  {
									"name": "p",
									"value": "ng"
								  },
								  {
									"name": "edition",
									"value": "us"
								  },
								  {
									"name": "url",
									"value": "/education/internationalstudents"
								  }
								]
							  },
							  {
								"edition": {
								  "id": "AU"
								},
								"paramSet": [
								  {
									"name": "ct",
									"value": "tag"
								  },
								  {
									"name": "k",
									"value": [
									  "internationalstudents"
									]
								  },
								  {
									"name": "p",
									"value": "ng"
								  },
								  {
									"name": "url",
									"value": "/education/internationalstudents"
								  },
								  {
									"name": "edition",
									"value": "au"
								  }
								]
							  },
							  {
								"edition": {
								  "id": "INT"
								},
								"paramSet": [
								  {
									"name": "ct",
									"value": "tag"
								  },
								  {
									"name": "edition",
									"value": "int"
								  },
								  {
									"name": "k",
									"value": [
									  "internationalstudents"
									]
								  },
								  {
									"name": "p",
									"value": "ng"
								  },
								  {
									"name": "url",
									"value": "/education/internationalstudents"
								  }
								]
							  }
							],
							"prebidIndexSites": [
							  {
								"bp": "D",
								"id": 208265
							  },
							  {
								"bp": "M",
								"id": 213536
							  },
							  {
								"bp": "T",
								"id": 215471
							  }
							]
						  }
						}
					  },
					  {
						"properties": {
						  "id": "education/universities",
						  "url": "/education/universities",
						  "tagType": "Keyword",
						  "sectionId": "education",
						  "sectionName": "Education",
						  "webTitle": "Universities",
						  "webUrl": "https://www.theguardian.com/education/universities",
						  "references": [],
						  "commercial": {
							"editionBrandings": [
							  {
								"edition": {
								  "id": "UK"
								}
							  },
							  {
								"edition": {
								  "id": "US"
								}
							  },
							  {
								"edition": {
								  "id": "AU"
								}
							  },
							  {
								"edition": {
								  "id": "INT"
								}
							  }
							],
							"editionAdTargetings": [
							  {
								"edition": {
								  "id": "UK"
								},
								"paramSet": [
								  {
									"name": "edition",
									"value": "uk"
								  },
								  {
									"name": "k",
									"value": [
									  "universities"
									]
								  },
								  {
									"name": "url",
									"value": "/education/universities"
								  },
								  {
									"name": "ct",
									"value": "tag"
								  },
								  {
									"name": "p",
									"value": "ng"
								  }
								]
							  },
							  {
								"edition": {
								  "id": "US"
								},
								"paramSet": [
								  {
									"name": "k",
									"value": [
									  "universities"
									]
								  },
								  {
									"name": "url",
									"value": "/education/universities"
								  },
								  {
									"name": "ct",
									"value": "tag"
								  },
								  {
									"name": "p",
									"value": "ng"
								  },
								  {
									"name": "edition",
									"value": "us"
								  }
								]
							  },
							  {
								"edition": {
								  "id": "AU"
								},
								"paramSet": [
								  {
									"name": "k",
									"value": [
									  "universities"
									]
								  },
								  {
									"name": "url",
									"value": "/education/universities"
								  },
								  {
									"name": "ct",
									"value": "tag"
								  },
								  {
									"name": "p",
									"value": "ng"
								  },
								  {
									"name": "edition",
									"value": "au"
								  }
								]
							  },
							  {
								"edition": {
								  "id": "INT"
								},
								"paramSet": [
								  {
									"name": "k",
									"value": [
									  "universities"
									]
								  },
								  {
									"name": "url",
									"value": "/education/universities"
								  },
								  {
									"name": "ct",
									"value": "tag"
								  },
								  {
									"name": "edition",
									"value": "int"
								  },
								  {
									"name": "p",
									"value": "ng"
								  }
								]
							  }
							],
							"prebidIndexSites": [
							  {
								"bp": "D",
								"id": 208265
							  },
							  {
								"bp": "M",
								"id": 213536
							  },
							  {
								"bp": "T",
								"id": 215471
							  }
							]
						  }
						}
					  },
					  {
						"properties": {
						  "id": "education/higher-education",
						  "url": "/education/higher-education",
						  "tagType": "Keyword",
						  "sectionId": "education",
						  "sectionName": "Education",
						  "webTitle": "Higher education",
						  "webUrl": "https://www.theguardian.com/education/higher-education",
						  "references": [],
						  "commercial": {
							"editionBrandings": [
							  {
								"edition": {
								  "id": "UK"
								}
							  },
							  {
								"edition": {
								  "id": "US"
								}
							  },
							  {
								"edition": {
								  "id": "AU"
								}
							  },
							  {
								"edition": {
								  "id": "INT"
								}
							  }
							],
							"editionAdTargetings": [
							  {
								"edition": {
								  "id": "UK"
								},
								"paramSet": [
								  {
									"name": "edition",
									"value": "uk"
								  },
								  {
									"name": "url",
									"value": "/education/higher-education"
								  },
								  {
									"name": "ct",
									"value": "tag"
								  },
								  {
									"name": "p",
									"value": "ng"
								  },
								  {
									"name": "k",
									"value": [
									  "higher-education"
									]
								  }
								]
							  },
							  {
								"edition": {
								  "id": "US"
								},
								"paramSet": [
								  {
									"name": "url",
									"value": "/education/higher-education"
								  },
								  {
									"name": "ct",
									"value": "tag"
								  },
								  {
									"name": "p",
									"value": "ng"
								  },
								  {
									"name": "edition",
									"value": "us"
								  },
								  {
									"name": "k",
									"value": [
									  "higher-education"
									]
								  }
								]
							  },
							  {
								"edition": {
								  "id": "AU"
								},
								"paramSet": [
								  {
									"name": "url",
									"value": "/education/higher-education"
								  },
								  {
									"name": "ct",
									"value": "tag"
								  },
								  {
									"name": "p",
									"value": "ng"
								  },
								  {
									"name": "k",
									"value": [
									  "higher-education"
									]
								  },
								  {
									"name": "edition",
									"value": "au"
								  }
								]
							  },
							  {
								"edition": {
								  "id": "INT"
								},
								"paramSet": [
								  {
									"name": "url",
									"value": "/education/higher-education"
								  },
								  {
									"name": "ct",
									"value": "tag"
								  },
								  {
									"name": "edition",
									"value": "int"
								  },
								  {
									"name": "p",
									"value": "ng"
								  },
								  {
									"name": "k",
									"value": [
									  "higher-education"
									]
								  }
								]
							  }
							],
							"prebidIndexSites": [
							  {
								"bp": "D",
								"id": 208265
							  },
							  {
								"bp": "M",
								"id": 213536
							  },
							  {
								"bp": "T",
								"id": 215471
							  }
							]
						  }
						}
					  },
					  {
						"properties": {
						  "id": "education/education",
						  "url": "/education/education",
						  "tagType": "Keyword",
						  "sectionId": "education",
						  "sectionName": "Education",
						  "webTitle": "Education",
						  "webUrl": "https://www.theguardian.com/education/education",
						  "references": [],
						  "commercial": {
							"editionBrandings": [
							  {
								"edition": {
								  "id": "UK"
								}
							  },
							  {
								"edition": {
								  "id": "US"
								}
							  },
							  {
								"edition": {
								  "id": "AU"
								}
							  },
							  {
								"edition": {
								  "id": "INT"
								}
							  }
							],
							"editionAdTargetings": [
							  {
								"edition": {
								  "id": "UK"
								},
								"paramSet": [
								  {
									"name": "edition",
									"value": "uk"
								  },
								  {
									"name": "url",
									"value": "/education/education"
								  },
								  {
									"name": "ct",
									"value": "tag"
								  },
								  {
									"name": "k",
									"value": [
									  "education"
									]
								  },
								  {
									"name": "p",
									"value": "ng"
								  }
								]
							  },
							  {
								"edition": {
								  "id": "US"
								},
								"paramSet": [
								  {
									"name": "url",
									"value": "/education/education"
								  },
								  {
									"name": "ct",
									"value": "tag"
								  },
								  {
									"name": "k",
									"value": [
									  "education"
									]
								  },
								  {
									"name": "p",
									"value": "ng"
								  },
								  {
									"name": "edition",
									"value": "us"
								  }
								]
							  },
							  {
								"edition": {
								  "id": "AU"
								},
								"paramSet": [
								  {
									"name": "url",
									"value": "/education/education"
								  },
								  {
									"name": "ct",
									"value": "tag"
								  },
								  {
									"name": "k",
									"value": [
									  "education"
									]
								  },
								  {
									"name": "p",
									"value": "ng"
								  },
								  {
									"name": "edition",
									"value": "au"
								  }
								]
							  },
							  {
								"edition": {
								  "id": "INT"
								},
								"paramSet": [
								  {
									"name": "url",
									"value": "/education/education"
								  },
								  {
									"name": "ct",
									"value": "tag"
								  },
								  {
									"name": "edition",
									"value": "int"
								  },
								  {
									"name": "k",
									"value": [
									  "education"
									]
								  },
								  {
									"name": "p",
									"value": "ng"
								  }
								]
							  }
							],
							"prebidIndexSites": [
							  {
								"bp": "D",
								"id": 208265
							  },
							  {
								"bp": "M",
								"id": 213536
							  },
							  {
								"bp": "T",
								"id": 215471
							  }
							]
						  }
						}
					  },
					  {
						"properties": {
						  "id": "uk/immigration",
						  "url": "/uk/immigration",
						  "tagType": "Keyword",
						  "sectionId": "uk-news",
						  "sectionName": "UK news",
						  "webTitle": "Immigration and asylum",
						  "webUrl": "https://www.theguardian.com/uk/immigration",
						  "references": [],
						  "commercial": {
							"editionBrandings": [
							  {
								"edition": {
								  "id": "UK"
								}
							  },
							  {
								"edition": {
								  "id": "US"
								}
							  },
							  {
								"edition": {
								  "id": "AU"
								}
							  },
							  {
								"edition": {
								  "id": "INT"
								}
							  }
							],
							"editionAdTargetings": [
							  {
								"edition": {
								  "id": "UK"
								},
								"paramSet": [
								  {
									"name": "edition",
									"value": "uk"
								  },
								  {
									"name": "ct",
									"value": "tag"
								  },
								  {
									"name": "url",
									"value": "/uk/immigration"
								  },
								  {
									"name": "p",
									"value": "ng"
								  },
								  {
									"name": "k",
									"value": [
									  "immigration"
									]
								  }
								]
							  },
							  {
								"edition": {
								  "id": "US"
								},
								"paramSet": [
								  {
									"name": "ct",
									"value": "tag"
								  },
								  {
									"name": "url",
									"value": "/uk/immigration"
								  },
								  {
									"name": "p",
									"value": "ng"
								  },
								  {
									"name": "edition",
									"value": "us"
								  },
								  {
									"name": "k",
									"value": [
									  "immigration"
									]
								  }
								]
							  },
							  {
								"edition": {
								  "id": "AU"
								},
								"paramSet": [
								  {
									"name": "ct",
									"value": "tag"
								  },
								  {
									"name": "url",
									"value": "/uk/immigration"
								  },
								  {
									"name": "p",
									"value": "ng"
								  },
								  {
									"name": "edition",
									"value": "au"
								  },
								  {
									"name": "k",
									"value": [
									  "immigration"
									]
								  }
								]
							  },
							  {
								"edition": {
								  "id": "INT"
								},
								"paramSet": [
								  {
									"name": "ct",
									"value": "tag"
								  },
								  {
									"name": "url",
									"value": "/uk/immigration"
								  },
								  {
									"name": "edition",
									"value": "int"
								  },
								  {
									"name": "p",
									"value": "ng"
								  },
								  {
									"name": "k",
									"value": [
									  "immigration"
									]
								  }
								]
							  }
							],
							"prebidIndexSites": [
							  {
								"bp": "D",
								"id": 208208
							  },
							  {
								"bp": "M",
								"id": 213482
							  },
							  {
								"bp": "T",
								"id": 215417
							  }
							]
						  }
						}
					  },
					  {
						"properties": {
						  "id": "education/students",
						  "url": "/education/students",
						  "tagType": "Keyword",
						  "sectionId": "education",
						  "sectionName": "Education",
						  "webTitle": "Students",
						  "webUrl": "https://www.theguardian.com/education/students",
						  "references": [],
						  "commercial": {
							"editionBrandings": [
							  {
								"edition": {
								  "id": "UK"
								}
							  },
							  {
								"edition": {
								  "id": "US"
								}
							  },
							  {
								"edition": {
								  "id": "AU"
								}
							  },
							  {
								"edition": {
								  "id": "INT"
								}
							  }
							],
							"editionAdTargetings": [
							  {
								"edition": {
								  "id": "UK"
								},
								"paramSet": [
								  {
									"name": "edition",
									"value": "uk"
								  },
								  {
									"name": "k",
									"value": [
									  "students"
									]
								  },
								  {
									"name": "ct",
									"value": "tag"
								  },
								  {
									"name": "url",
									"value": "/education/students"
								  },
								  {
									"name": "p",
									"value": "ng"
								  }
								]
							  },
							  {
								"edition": {
								  "id": "US"
								},
								"paramSet": [
								  {
									"name": "k",
									"value": [
									  "students"
									]
								  },
								  {
									"name": "ct",
									"value": "tag"
								  },
								  {
									"name": "url",
									"value": "/education/students"
								  },
								  {
									"name": "p",
									"value": "ng"
								  },
								  {
									"name": "edition",
									"value": "us"
								  }
								]
							  },
							  {
								"edition": {
								  "id": "AU"
								},
								"paramSet": [
								  {
									"name": "k",
									"value": [
									  "students"
									]
								  },
								  {
									"name": "ct",
									"value": "tag"
								  },
								  {
									"name": "url",
									"value": "/education/students"
								  },
								  {
									"name": "p",
									"value": "ng"
								  },
								  {
									"name": "edition",
									"value": "au"
								  }
								]
							  },
							  {
								"edition": {
								  "id": "INT"
								},
								"paramSet": [
								  {
									"name": "k",
									"value": [
									  "students"
									]
								  },
								  {
									"name": "ct",
									"value": "tag"
								  },
								  {
									"name": "edition",
									"value": "int"
								  },
								  {
									"name": "url",
									"value": "/education/students"
								  },
								  {
									"name": "p",
									"value": "ng"
								  }
								]
							  }
							],
							"prebidIndexSites": [
							  {
								"bp": "D",
								"id": 208265
							  },
							  {
								"bp": "M",
								"id": 213536
							  },
							  {
								"bp": "T",
								"id": 215471
							  }
							]
						  }
						}
					  },
					  {
						"properties": {
						  "id": "money/work-and-careers",
						  "url": "/money/work-and-careers",
						  "tagType": "Keyword",
						  "sectionId": "money",
						  "sectionName": "Money",
						  "webTitle": "Work & careers",
						  "webUrl": "https://www.theguardian.com/money/work-and-careers",
						  "references": [],
						  "commercial": {
							"editionBrandings": [
							  {
								"edition": {
								  "id": "UK"
								}
							  },
							  {
								"edition": {
								  "id": "US"
								}
							  },
							  {
								"edition": {
								  "id": "AU"
								}
							  },
							  {
								"edition": {
								  "id": "INT"
								}
							  }
							],
							"editionAdTargetings": [
							  {
								"edition": {
								  "id": "UK"
								},
								"paramSet": [
								  {
									"name": "edition",
									"value": "uk"
								  },
								  {
									"name": "k",
									"value": [
									  "work-and-careers"
									]
								  },
								  {
									"name": "ct",
									"value": "tag"
								  },
								  {
									"name": "p",
									"value": "ng"
								  },
								  {
									"name": "url",
									"value": "/money/work-and-careers"
								  }
								]
							  },
							  {
								"edition": {
								  "id": "US"
								},
								"paramSet": [
								  {
									"name": "k",
									"value": [
									  "work-and-careers"
									]
								  },
								  {
									"name": "ct",
									"value": "tag"
								  },
								  {
									"name": "p",
									"value": "ng"
								  },
								  {
									"name": "url",
									"value": "/money/work-and-careers"
								  },
								  {
									"name": "edition",
									"value": "us"
								  }
								]
							  },
							  {
								"edition": {
								  "id": "AU"
								},
								"paramSet": [
								  {
									"name": "k",
									"value": [
									  "work-and-careers"
									]
								  },
								  {
									"name": "ct",
									"value": "tag"
								  },
								  {
									"name": "p",
									"value": "ng"
								  },
								  {
									"name": "url",
									"value": "/money/work-and-careers"
								  },
								  {
									"name": "edition",
									"value": "au"
								  }
								]
							  },
							  {
								"edition": {
								  "id": "INT"
								},
								"paramSet": [
								  {
									"name": "k",
									"value": [
									  "work-and-careers"
									]
								  },
								  {
									"name": "ct",
									"value": "tag"
								  },
								  {
									"name": "edition",
									"value": "int"
								  },
								  {
									"name": "p",
									"value": "ng"
								  },
								  {
									"name": "url",
									"value": "/money/work-and-careers"
								  }
								]
							  }
							],
							"prebidIndexSites": [
							  {
								"bp": "D",
								"id": 208236
							  },
							  {
								"bp": "M",
								"id": 213509
							  },
							  {
								"bp": "T",
								"id": 215444
							  }
							]
						  }
						}
					  },
					  {
						"properties": {
						  "id": "politics/education",
						  "url": "/politics/education",
						  "tagType": "Keyword",
						  "sectionId": "politics",
						  "sectionName": "Politics",
						  "webTitle": "Education policy",
						  "webUrl": "https://www.theguardian.com/politics/education",
						  "references": [],
						  "commercial": {
							"editionBrandings": [
							  {
								"edition": {
								  "id": "UK"
								}
							  },
							  {
								"edition": {
								  "id": "US"
								}
							  },
							  {
								"edition": {
								  "id": "AU"
								}
							  },
							  {
								"edition": {
								  "id": "INT"
								}
							  }
							],
							"editionAdTargetings": [
							  {
								"edition": {
								  "id": "UK"
								},
								"paramSet": [
								  {
									"name": "edition",
									"value": "uk"
								  },
								  {
									"name": "url",
									"value": "/politics/education"
								  },
								  {
									"name": "ct",
									"value": "tag"
								  },
								  {
									"name": "k",
									"value": [
									  "education"
									]
								  },
								  {
									"name": "p",
									"value": "ng"
								  }
								]
							  },
							  {
								"edition": {
								  "id": "US"
								},
								"paramSet": [
								  {
									"name": "url",
									"value": "/politics/education"
								  },
								  {
									"name": "ct",
									"value": "tag"
								  },
								  {
									"name": "k",
									"value": [
									  "education"
									]
								  },
								  {
									"name": "p",
									"value": "ng"
								  },
								  {
									"name": "edition",
									"value": "us"
								  }
								]
							  },
							  {
								"edition": {
								  "id": "AU"
								},
								"paramSet": [
								  {
									"name": "url",
									"value": "/politics/education"
								  },
								  {
									"name": "ct",
									"value": "tag"
								  },
								  {
									"name": "k",
									"value": [
									  "education"
									]
								  },
								  {
									"name": "p",
									"value": "ng"
								  },
								  {
									"name": "edition",
									"value": "au"
								  }
								]
							  },
							  {
								"edition": {
								  "id": "INT"
								},
								"paramSet": [
								  {
									"name": "url",
									"value": "/politics/education"
								  },
								  {
									"name": "ct",
									"value": "tag"
								  },
								  {
									"name": "edition",
									"value": "int"
								  },
								  {
									"name": "k",
									"value": [
									  "education"
									]
								  },
								  {
									"name": "p",
									"value": "ng"
								  }
								]
							  }
							],
							"prebidIndexSites": [
							  {
								"bp": "D",
								"id": 208229
							  },
							  {
								"bp": "M",
								"id": 213502
							  },
							  {
								"bp": "T",
								"id": 215437
							  }
							]
						  }
						}
					  },
					  {
						"properties": {
						  "id": "uk/uk",
						  "url": "/uk/uk",
						  "tagType": "Keyword",
						  "sectionId": "uk-news",
						  "sectionName": "UK news",
						  "webTitle": "UK news",
						  "webUrl": "https://www.theguardian.com/uk/uk",
						  "references": [],
						  "commercial": {
							"editionBrandings": [
							  {
								"edition": {
								  "id": "UK"
								}
							  },
							  {
								"edition": {
								  "id": "US"
								}
							  },
							  {
								"edition": {
								  "id": "AU"
								}
							  },
							  {
								"edition": {
								  "id": "INT"
								}
							  }
							],
							"editionAdTargetings": [
							  {
								"edition": {
								  "id": "UK"
								},
								"paramSet": [
								  {
									"name": "k",
									"value": [
									  "uk/uk"
									]
								  },
								  {
									"name": "edition",
									"value": "uk"
								  },
								  {
									"name": "ct",
									"value": "tag"
								  },
								  {
									"name": "url",
									"value": "/uk/uk"
								  },
								  {
									"name": "p",
									"value": "ng"
								  }
								]
							  },
							  {
								"edition": {
								  "id": "US"
								},
								"paramSet": [
								  {
									"name": "k",
									"value": [
									  "uk/uk"
									]
								  },
								  {
									"name": "ct",
									"value": "tag"
								  },
								  {
									"name": "url",
									"value": "/uk/uk"
								  },
								  {
									"name": "p",
									"value": "ng"
								  },
								  {
									"name": "edition",
									"value": "us"
								  }
								]
							  },
							  {
								"edition": {
								  "id": "AU"
								},
								"paramSet": [
								  {
									"name": "k",
									"value": [
									  "uk/uk"
									]
								  },
								  {
									"name": "ct",
									"value": "tag"
								  },
								  {
									"name": "url",
									"value": "/uk/uk"
								  },
								  {
									"name": "p",
									"value": "ng"
								  },
								  {
									"name": "edition",
									"value": "au"
								  }
								]
							  },
							  {
								"edition": {
								  "id": "INT"
								},
								"paramSet": [
								  {
									"name": "k",
									"value": [
									  "uk/uk"
									]
								  },
								  {
									"name": "ct",
									"value": "tag"
								  },
								  {
									"name": "edition",
									"value": "int"
								  },
								  {
									"name": "url",
									"value": "/uk/uk"
								  },
								  {
									"name": "p",
									"value": "ng"
								  }
								]
							  }
							],
							"prebidIndexSites": [
							  {
								"bp": "D",
								"id": 208208
							  },
							  {
								"bp": "M",
								"id": 213482
							  },
							  {
								"bp": "T",
								"id": 215417
							  }
							]
						  }
						}
					  },
					  {
						"properties": {
						  "id": "type/article",
						  "url": "/type/article",
						  "tagType": "Type",
						  "sectionId": "global",
						  "sectionName": "global",
						  "webTitle": "Article",
						  "webUrl": "https://www.theguardian.com/articles",
						  "references": [],
						  "commercial": {
							"editionBrandings": [
							  {
								"edition": {
								  "id": "UK"
								}
							  },
							  {
								"edition": {
								  "id": "US"
								}
							  },
							  {
								"edition": {
								  "id": "AU"
								}
							  },
							  {
								"edition": {
								  "id": "INT"
								}
							  }
							],
							"editionAdTargetings": [
							  {
								"edition": {
								  "id": "UK"
								},
								"paramSet": [
								  {
									"name": "edition",
									"value": "uk"
								  },
								  {
									"name": "ct",
									"value": "tag"
								  },
								  {
									"name": "url",
									"value": "/type/article"
								  },
								  {
									"name": "p",
									"value": "ng"
								  }
								]
							  },
							  {
								"edition": {
								  "id": "US"
								},
								"paramSet": [
								  {
									"name": "ct",
									"value": "tag"
								  },
								  {
									"name": "url",
									"value": "/type/article"
								  },
								  {
									"name": "p",
									"value": "ng"
								  },
								  {
									"name": "edition",
									"value": "us"
								  }
								]
							  },
							  {
								"edition": {
								  "id": "AU"
								},
								"paramSet": [
								  {
									"name": "ct",
									"value": "tag"
								  },
								  {
									"name": "url",
									"value": "/type/article"
								  },
								  {
									"name": "p",
									"value": "ng"
								  },
								  {
									"name": "edition",
									"value": "au"
								  }
								]
							  },
							  {
								"edition": {
								  "id": "INT"
								},
								"paramSet": [
								  {
									"name": "ct",
									"value": "tag"
								  },
								  {
									"name": "url",
									"value": "/type/article"
								  },
								  {
									"name": "edition",
									"value": "int"
								  },
								  {
									"name": "p",
									"value": "ng"
								  }
								]
							  }
							]
						  }
						}
					  },
					  {
						"properties": {
						  "id": "tone/news",
						  "url": "/tone/news",
						  "tagType": "Tone",
						  "sectionId": "global",
						  "sectionName": "global",
						  "webTitle": "News",
						  "webUrl": "https://www.theguardian.com/tone/news",
						  "references": [],
						  "commercial": {
							"editionBrandings": [
							  {
								"edition": {
								  "id": "UK"
								}
							  },
							  {
								"edition": {
								  "id": "US"
								}
							  },
							  {
								"edition": {
								  "id": "AU"
								}
							  },
							  {
								"edition": {
								  "id": "INT"
								}
							  }
							],
							"editionAdTargetings": [
							  {
								"edition": {
								  "id": "UK"
								},
								"paramSet": [
								  {
									"name": "edition",
									"value": "uk"
								  },
								  {
									"name": "ct",
									"value": "tag"
								  },
								  {
									"name": "tn",
									"value": [
									  "news"
									]
								  },
								  {
									"name": "p",
									"value": "ng"
								  },
								  {
									"name": "url",
									"value": "/tone/news"
								  }
								]
							  },
							  {
								"edition": {
								  "id": "US"
								},
								"paramSet": [
								  {
									"name": "ct",
									"value": "tag"
								  },
								  {
									"name": "tn",
									"value": [
									  "news"
									]
								  },
								  {
									"name": "p",
									"value": "ng"
								  },
								  {
									"name": "url",
									"value": "/tone/news"
								  },
								  {
									"name": "edition",
									"value": "us"
								  }
								]
							  },
							  {
								"edition": {
								  "id": "AU"
								},
								"paramSet": [
								  {
									"name": "ct",
									"value": "tag"
								  },
								  {
									"name": "tn",
									"value": [
									  "news"
									]
								  },
								  {
									"name": "p",
									"value": "ng"
								  },
								  {
									"name": "url",
									"value": "/tone/news"
								  },
								  {
									"name": "edition",
									"value": "au"
								  }
								]
							  },
							  {
								"edition": {
								  "id": "INT"
								},
								"paramSet": [
								  {
									"name": "ct",
									"value": "tag"
								  },
								  {
									"name": "tn",
									"value": [
									  "news"
									]
								  },
								  {
									"name": "edition",
									"value": "int"
								  },
								  {
									"name": "p",
									"value": "ng"
								  },
								  {
									"name": "url",
									"value": "/tone/news"
								  }
								]
							  }
							]
						  }
						}
					  },
					  {
						"properties": {
						  "id": "profile/rachel-hall",
						  "url": "/profile/rachel-hall",
						  "tagType": "Contributor",
						  "sectionId": "global",
						  "sectionName": "global",
						  "webTitle": "Rachel Hall",
						  "webUrl": "https://www.theguardian.com/profile/rachel-hall",
						  "twitterHandle": "rachela_hall",
						  "bio": "<p>Rachel Hall is education reporter at the Guardian. Twitter <a href=\"https://twitter.com/rachela_hall\">@rachela_hall</a></p>",
						  "bylineImageUrl": "https://uploads.guim.co.uk/2018/01/26/unnamed.jpg",
						  "references": [],
						  "commercial": {
							"editionBrandings": [
							  {
								"edition": {
								  "id": "UK"
								}
							  },
							  {
								"edition": {
								  "id": "US"
								}
							  },
							  {
								"edition": {
								  "id": "AU"
								}
							  },
							  {
								"edition": {
								  "id": "INT"
								}
							  }
							],
							"editionAdTargetings": [
							  {
								"edition": {
								  "id": "UK"
								},
								"paramSet": [
								  {
									"name": "edition",
									"value": "uk"
								  },
								  {
									"name": "url",
									"value": "/profile/rachel-hall"
								  },
								  {
									"name": "co",
									"value": [
									  "rachel-hall"
									]
								  },
								  {
									"name": "ct",
									"value": "tag"
								  },
								  {
									"name": "p",
									"value": "ng"
								  }
								]
							  },
							  {
								"edition": {
								  "id": "US"
								},
								"paramSet": [
								  {
									"name": "url",
									"value": "/profile/rachel-hall"
								  },
								  {
									"name": "co",
									"value": [
									  "rachel-hall"
									]
								  },
								  {
									"name": "ct",
									"value": "tag"
								  },
								  {
									"name": "p",
									"value": "ng"
								  },
								  {
									"name": "edition",
									"value": "us"
								  }
								]
							  },
							  {
								"edition": {
								  "id": "AU"
								},
								"paramSet": [
								  {
									"name": "url",
									"value": "/profile/rachel-hall"
								  },
								  {
									"name": "co",
									"value": [
									  "rachel-hall"
									]
								  },
								  {
									"name": "ct",
									"value": "tag"
								  },
								  {
									"name": "p",
									"value": "ng"
								  },
								  {
									"name": "edition",
									"value": "au"
								  }
								]
							  },
							  {
								"edition": {
								  "id": "INT"
								},
								"paramSet": [
								  {
									"name": "url",
									"value": "/profile/rachel-hall"
								  },
								  {
									"name": "co",
									"value": [
									  "rachel-hall"
									]
								  },
								  {
									"name": "ct",
									"value": "tag"
								  },
								  {
									"name": "edition",
									"value": "int"
								  },
								  {
									"name": "p",
									"value": "ng"
								  }
								]
							  }
							]
						  }
						}
					  },
					  {
						"properties": {
						  "id": "tracking/commissioningdesk/uk-home-news",
						  "url": "/tracking/commissioningdesk/uk-home-news",
						  "tagType": "Tracking",
						  "sectionId": "global",
						  "sectionName": "global",
						  "webTitle": "UK Home News",
						  "webUrl": "https://www.theguardian.com/tracking/commissioningdesk/uk-home-news",
						  "references": [],
						  "commercial": {
							"editionBrandings": [
							  {
								"edition": {
								  "id": "UK"
								}
							  },
							  {
								"edition": {
								  "id": "US"
								}
							  },
							  {
								"edition": {
								  "id": "AU"
								}
							  },
							  {
								"edition": {
								  "id": "INT"
								}
							  }
							],
							"editionAdTargetings": [
							  {
								"edition": {
								  "id": "UK"
								},
								"paramSet": [
								  {
									"name": "edition",
									"value": "uk"
								  },
								  {
									"name": "url",
									"value": "/tracking/commissioningdesk/uk-home-news"
								  },
								  {
									"name": "ct",
									"value": "tag"
								  },
								  {
									"name": "p",
									"value": "ng"
								  }
								]
							  },
							  {
								"edition": {
								  "id": "US"
								},
								"paramSet": [
								  {
									"name": "url",
									"value": "/tracking/commissioningdesk/uk-home-news"
								  },
								  {
									"name": "ct",
									"value": "tag"
								  },
								  {
									"name": "p",
									"value": "ng"
								  },
								  {
									"name": "edition",
									"value": "us"
								  }
								]
							  },
							  {
								"edition": {
								  "id": "AU"
								},
								"paramSet": [
								  {
									"name": "url",
									"value": "/tracking/commissioningdesk/uk-home-news"
								  },
								  {
									"name": "ct",
									"value": "tag"
								  },
								  {
									"name": "p",
									"value": "ng"
								  },
								  {
									"name": "edition",
									"value": "au"
								  }
								]
							  },
							  {
								"edition": {
								  "id": "INT"
								},
								"paramSet": [
								  {
									"name": "url",
									"value": "/tracking/commissioningdesk/uk-home-news"
								  },
								  {
									"name": "ct",
									"value": "tag"
								  },
								  {
									"name": "edition",
									"value": "int"
								  },
								  {
									"name": "p",
									"value": "ng"
								  }
								]
							  }
							]
						  }
						}
					  }
					]
				  }
				},
				"maybeContentId": "education/2022/may/30/longer-work-visa-could-tempt-more-foreign-students-uk-survey-finds",
				"isLiveBlog": false,
				"isCrossword": false,
				"byline": "Rachel Hall",
				"webTitle": "Longer work visa could tempt more foreign students to UK, survey finds",
				"linkText": "Longer work visa could tempt more foreign students to UK, survey finds",
				"maybeFrontPublicationDate": 1653906284030,
				"webUrl": "https://www.theguardian.com/education/2022/may/30/longer-work-visa-could-tempt-more-foreign-students-uk-survey-finds",
				"editionBrandings": [
				  {
					"edition": {
					  "id": "UK"
					}
				  },
				  {
					"edition": {
					  "id": "US"
					}
				  },
				  {
					"edition": {
					  "id": "AU"
					}
				  },
				  {
					"edition": {
					  "id": "INT"
					}
				  }
				]
			  },
			  "header": {
				"isVideo": false,
				"isComment": false,
				"isGallery": false,
				"isAudio": false,
				"kicker": {
				  "type": "FreeHtmlKicker",
				  "item": {
					"properties": {
					  "kickerText": "Education"
					},
					"body": "Education"
				  }
				},
				"headline": "Longer work visa could tempt more foreign students to UK, survey finds",
				"url": "/education/2022/may/30/longer-work-visa-could-tempt-more-foreign-students-uk-survey-finds",
				"hasMainVideoElement": false
			  },
			  "card": {
				"id": "education/2022/may/30/longer-work-visa-could-tempt-more-foreign-students-uk-survey-finds",
				"cardStyle": {
				  "type": "DefaultCardstyle"
				},
				"webPublicationDateOption": 1653886820000,
				"lastModifiedOption": 1653919144000,
				"trailText": "Vice-chancellors urge review of two-year visas as overseas graduates say three-year offer would be more attractive",
				"shortUrlPath": "/p/ygjqv",
				"shortUrl": "https://www.theguardian.com/p/ygjqv",
				"group": "0",
				"isLive": false
			  },
			  "discussion": {
				"isCommentable": false,
				"isClosedForComments": true,
				"discussionId": "/p/ygjqv"
			  },
			  "display": {
				"isBoosted": false,
				"showBoostedHeadline": false,
				"showQuotedHeadline": false,
				"imageHide": false,
				"showLivePlayable": false
			  },
			  "format": {
				"design": "ArticleDesign",
				"theme": "NewsPillar",
				"display": "StandardDisplay"
			  },
			  "enriched": {},
			  "supportingContent": [],
			  "cardStyle": {
				"type": "DefaultCardstyle"
			  },
			  "type": "CuratedContent"
			},
			{
			  "properties": {
				"isBreaking": false,
				"showMainVideo": false,
				"showKickerTag": false,
				"showByline": false,
				"imageSlideshowReplace": false,
				"maybeContent": {
				  "trail": {
					"trailPicture": {
					  "allImages": [
						{
						  "index": 2,
						  "fields": {
							"displayCredit": "true",
							"source": "PA",
							"photographer": "Danny Lawson",
							"isMaster": "true",
							"altText": "Windrush protester holding banner: 'Institutional racism'",
							"height": "2101",
							"credit": "Photograph: Danny Lawson/PA",
							"mediaId": "7eb09f62efb06f3664cde7f1c934cd4f45824061",
							"width": "3500"
						  },
						  "mediaType": "Image",
						  "url": "https://media.guim.co.uk/7eb09f62efb06f3664cde7f1c934cd4f45824061/0_173_3500_2101/master/3500.jpg"
						}
					  ]
					},
					"byline": "Amelia Gentleman",
					"thumbnailPath": "https://i.guim.co.uk/img/media/7eb09f62efb06f3664cde7f1c934cd4f45824061/0_173_3500_2101/500.jpg?quality=85&auto=format&fit=max&s=836d3d336d1c53036346f739f370af28",
					"webPublicationDate": 1653840931000
				  },
				  "metadata": {
					"id": "uk-news/2022/may/29/windrush-scandal-caused-by-30-years-of-racist-immigration-laws-report",
					"webTitle": "Windrush scandal caused by ‘30 years of racist immigration laws’ – report",
					"webUrl": "https://www.theguardian.com/uk-news/2022/may/29/windrush-scandal-caused-by-30-years-of-racist-immigration-laws-report",
					"type": "Article",
					"pillar": {
					  "name": "News"
					},
					"sectionId": {
					  "value": "uk-news"
					},
					"designType": "Article",
					"format": {
					  "design": "ArticleDesign",
					  "theme": "NewsPillar",
					  "display": "StandardDisplay"
					}
				  },
				  "fields": {
					"main": "<figure class=\"element element-image\" data-media-id=\"7eb09f62efb06f3664cde7f1c934cd4f45824061\"> <img src=\"https://media.guim.co.uk/7eb09f62efb06f3664cde7f1c934cd4f45824061/0_173_3500_2101/1000.jpg\" alt=\"Windrush protester holding banner: 'Institutional racism'\" width=\"1000\" height=\"600\" class=\"gu-image\" /> <figcaption> <span class=\"element-image__caption\">‘Every single piece of immigration or citizenship legislation was designed at least in part to reduce the number of people with black or brown skin in the UK,’ the report says.</span> <span class=\"element-image__credit\">Photograph: Danny Lawson/PA</span> </figcaption> </figure>",
					"body": "<p>The origins of <a href=\"https://www.theguardian.com/uk-news/2018/apr/16/windrush-era-citizens-row-timeline-of-key-events\">the Windrush scandal</a> lay in 30 years of racist immigration legislation designed to reduce the UK’s non-white population, according to a leaked government report.</p><p>The stark conclusion was set out in a Home Office commissioned paper that officials have repeatedly tried to suppress over the past year.</p>",
					"standfirst": "<p>Exclusive: legislation has been designed to reduce the UK’s non-white population, according to leaked government paper</p><ul><li><a href=\"https://www.theguardian.com/uk-news/2022/may/29/racist-legislation-led-windrush-home-office\">The racist laws that led to the Windrush scandal</a></li></ul>"
				  },
				  "elements": {
					"mediaAtoms": []
				  },
				  "tags": {
					"tags": [
					  {
						"properties": {
						  "id": "uk-news/windrush-scandal",
						  "url": "/uk-news/windrush-scandal",
						  "tagType": "Keyword",
						  "sectionId": "uk-news",
						  "sectionName": "UK news",
						  "webTitle": "Windrush scandal",
						  "webUrl": "https://www.theguardian.com/uk-news/windrush-scandal",
						  "description": "<p><a href=\"https://www.theguardian.com/uk-news/commonwealth-immigration\">Commonwealth immigration</a>&nbsp;stories that aren't directly related to the Windrush scandal can be found <a href=\"https://www.theguardian.com/uk-news/commonwealth-immigration\">here</a>.&nbsp;</p>",
						  "references": [],
						  "commercial": {
							"editionBrandings": [
							  {
								"edition": {
								  "id": "UK"
								}
							  },
							  {
								"edition": {
								  "id": "US"
								}
							  },
							  {
								"edition": {
								  "id": "AU"
								}
							  },
							  {
								"edition": {
								  "id": "INT"
								}
							  }
							],
							"editionAdTargetings": [
							  {
								"edition": {
								  "id": "UK"
								},
								"paramSet": [
								  {
									"name": "edition",
									"value": "uk"
								  },
								  {
									"name": "k",
									"value": [
									  "windrush-scandal"
									]
								  },
								  {
									"name": "ct",
									"value": "tag"
								  },
								  {
									"name": "p",
									"value": "ng"
								  },
								  {
									"name": "url",
									"value": "/uk-news/windrush-scandal"
								  }
								]
							  },
							  {
								"edition": {
								  "id": "US"
								},
								"paramSet": [
								  {
									"name": "k",
									"value": [
									  "windrush-scandal"
									]
								  },
								  {
									"name": "ct",
									"value": "tag"
								  },
								  {
									"name": "p",
									"value": "ng"
								  },
								  {
									"name": "edition",
									"value": "us"
								  },
								  {
									"name": "url",
									"value": "/uk-news/windrush-scandal"
								  }
								]
							  },
							  {
								"edition": {
								  "id": "AU"
								},
								"paramSet": [
								  {
									"name": "k",
									"value": [
									  "windrush-scandal"
									]
								  },
								  {
									"name": "ct",
									"value": "tag"
								  },
								  {
									"name": "p",
									"value": "ng"
								  },
								  {
									"name": "edition",
									"value": "au"
								  },
								  {
									"name": "url",
									"value": "/uk-news/windrush-scandal"
								  }
								]
							  },
							  {
								"edition": {
								  "id": "INT"
								},
								"paramSet": [
								  {
									"name": "k",
									"value": [
									  "windrush-scandal"
									]
								  },
								  {
									"name": "ct",
									"value": "tag"
								  },
								  {
									"name": "edition",
									"value": "int"
								  },
								  {
									"name": "p",
									"value": "ng"
								  },
								  {
									"name": "url",
									"value": "/uk-news/windrush-scandal"
								  }
								]
							  }
							],
							"prebidIndexSites": [
							  {
								"bp": "D",
								"id": 208208
							  },
							  {
								"bp": "M",
								"id": 213482
							  },
							  {
								"bp": "T",
								"id": 215417
							  }
							]
						  }
						}
					  },
					  {
						"properties": {
						  "id": "uk/uk",
						  "url": "/uk/uk",
						  "tagType": "Keyword",
						  "sectionId": "uk-news",
						  "sectionName": "UK news",
						  "webTitle": "UK news",
						  "webUrl": "https://www.theguardian.com/uk/uk",
						  "references": [],
						  "commercial": {
							"editionBrandings": [
							  {
								"edition": {
								  "id": "UK"
								}
							  },
							  {
								"edition": {
								  "id": "US"
								}
							  },
							  {
								"edition": {
								  "id": "AU"
								}
							  },
							  {
								"edition": {
								  "id": "INT"
								}
							  }
							],
							"editionAdTargetings": [
							  {
								"edition": {
								  "id": "UK"
								},
								"paramSet": [
								  {
									"name": "k",
									"value": [
									  "uk/uk"
									]
								  },
								  {
									"name": "edition",
									"value": "uk"
								  },
								  {
									"name": "ct",
									"value": "tag"
								  },
								  {
									"name": "url",
									"value": "/uk/uk"
								  },
								  {
									"name": "p",
									"value": "ng"
								  }
								]
							  },
							  {
								"edition": {
								  "id": "US"
								},
								"paramSet": [
								  {
									"name": "k",
									"value": [
									  "uk/uk"
									]
								  },
								  {
									"name": "ct",
									"value": "tag"
								  },
								  {
									"name": "url",
									"value": "/uk/uk"
								  },
								  {
									"name": "p",
									"value": "ng"
								  },
								  {
									"name": "edition",
									"value": "us"
								  }
								]
							  },
							  {
								"edition": {
								  "id": "AU"
								},
								"paramSet": [
								  {
									"name": "k",
									"value": [
									  "uk/uk"
									]
								  },
								  {
									"name": "ct",
									"value": "tag"
								  },
								  {
									"name": "url",
									"value": "/uk/uk"
								  },
								  {
									"name": "p",
									"value": "ng"
								  },
								  {
									"name": "edition",
									"value": "au"
								  }
								]
							  },
							  {
								"edition": {
								  "id": "INT"
								},
								"paramSet": [
								  {
									"name": "k",
									"value": [
									  "uk/uk"
									]
								  },
								  {
									"name": "ct",
									"value": "tag"
								  },
								  {
									"name": "edition",
									"value": "int"
								  },
								  {
									"name": "url",
									"value": "/uk/uk"
								  },
								  {
									"name": "p",
									"value": "ng"
								  }
								]
							  }
							],
							"prebidIndexSites": [
							  {
								"bp": "D",
								"id": 208208
							  },
							  {
								"bp": "M",
								"id": 213482
							  },
							  {
								"bp": "T",
								"id": 215417
							  }
							]
						  }
						}
					  },
					  {
						"properties": {
						  "id": "uk-news/commonwealth-immigration",
						  "url": "/uk-news/commonwealth-immigration",
						  "tagType": "Keyword",
						  "sectionId": "uk-news",
						  "sectionName": "UK news",
						  "webTitle": "Commonwealth immigration",
						  "webUrl": "https://www.theguardian.com/uk-news/commonwealth-immigration",
						  "references": [],
						  "commercial": {
							"editionBrandings": [
							  {
								"edition": {
								  "id": "UK"
								}
							  },
							  {
								"edition": {
								  "id": "US"
								}
							  },
							  {
								"edition": {
								  "id": "AU"
								}
							  },
							  {
								"edition": {
								  "id": "INT"
								}
							  }
							],
							"editionAdTargetings": [
							  {
								"edition": {
								  "id": "UK"
								},
								"paramSet": [
								  {
									"name": "edition",
									"value": "uk"
								  },
								  {
									"name": "ct",
									"value": "tag"
								  },
								  {
									"name": "p",
									"value": "ng"
								  },
								  {
									"name": "k",
									"value": [
									  "commonwealth-immigration"
									]
								  },
								  {
									"name": "url",
									"value": "/uk-news/commonwealth-immigration"
								  }
								]
							  },
							  {
								"edition": {
								  "id": "US"
								},
								"paramSet": [
								  {
									"name": "ct",
									"value": "tag"
								  },
								  {
									"name": "p",
									"value": "ng"
								  },
								  {
									"name": "edition",
									"value": "us"
								  },
								  {
									"name": "k",
									"value": [
									  "commonwealth-immigration"
									]
								  },
								  {
									"name": "url",
									"value": "/uk-news/commonwealth-immigration"
								  }
								]
							  },
							  {
								"edition": {
								  "id": "AU"
								},
								"paramSet": [
								  {
									"name": "ct",
									"value": "tag"
								  },
								  {
									"name": "p",
									"value": "ng"
								  },
								  {
									"name": "k",
									"value": [
									  "commonwealth-immigration"
									]
								  },
								  {
									"name": "url",
									"value": "/uk-news/commonwealth-immigration"
								  },
								  {
									"name": "edition",
									"value": "au"
								  }
								]
							  },
							  {
								"edition": {
								  "id": "INT"
								},
								"paramSet": [
								  {
									"name": "ct",
									"value": "tag"
								  },
								  {
									"name": "edition",
									"value": "int"
								  },
								  {
									"name": "p",
									"value": "ng"
								  },
								  {
									"name": "k",
									"value": [
									  "commonwealth-immigration"
									]
								  },
								  {
									"name": "url",
									"value": "/uk-news/commonwealth-immigration"
								  }
								]
							  }
							],
							"prebidIndexSites": [
							  {
								"bp": "D",
								"id": 208208
							  },
							  {
								"bp": "M",
								"id": 213482
							  },
							  {
								"bp": "T",
								"id": 215417
							  }
							]
						  }
						}
					  },
					  {
						"properties": {
						  "id": "uk/immigration",
						  "url": "/uk/immigration",
						  "tagType": "Keyword",
						  "sectionId": "uk-news",
						  "sectionName": "UK news",
						  "webTitle": "Immigration and asylum",
						  "webUrl": "https://www.theguardian.com/uk/immigration",
						  "references": [],
						  "commercial": {
							"editionBrandings": [
							  {
								"edition": {
								  "id": "UK"
								}
							  },
							  {
								"edition": {
								  "id": "US"
								}
							  },
							  {
								"edition": {
								  "id": "AU"
								}
							  },
							  {
								"edition": {
								  "id": "INT"
								}
							  }
							],
							"editionAdTargetings": [
							  {
								"edition": {
								  "id": "UK"
								},
								"paramSet": [
								  {
									"name": "edition",
									"value": "uk"
								  },
								  {
									"name": "ct",
									"value": "tag"
								  },
								  {
									"name": "url",
									"value": "/uk/immigration"
								  },
								  {
									"name": "p",
									"value": "ng"
								  },
								  {
									"name": "k",
									"value": [
									  "immigration"
									]
								  }
								]
							  },
							  {
								"edition": {
								  "id": "US"
								},
								"paramSet": [
								  {
									"name": "ct",
									"value": "tag"
								  },
								  {
									"name": "url",
									"value": "/uk/immigration"
								  },
								  {
									"name": "p",
									"value": "ng"
								  },
								  {
									"name": "edition",
									"value": "us"
								  },
								  {
									"name": "k",
									"value": [
									  "immigration"
									]
								  }
								]
							  },
							  {
								"edition": {
								  "id": "AU"
								},
								"paramSet": [
								  {
									"name": "ct",
									"value": "tag"
								  },
								  {
									"name": "url",
									"value": "/uk/immigration"
								  },
								  {
									"name": "p",
									"value": "ng"
								  },
								  {
									"name": "edition",
									"value": "au"
								  },
								  {
									"name": "k",
									"value": [
									  "immigration"
									]
								  }
								]
							  },
							  {
								"edition": {
								  "id": "INT"
								},
								"paramSet": [
								  {
									"name": "ct",
									"value": "tag"
								  },
								  {
									"name": "url",
									"value": "/uk/immigration"
								  },
								  {
									"name": "edition",
									"value": "int"
								  },
								  {
									"name": "p",
									"value": "ng"
								  },
								  {
									"name": "k",
									"value": [
									  "immigration"
									]
								  }
								]
							  }
							],
							"prebidIndexSites": [
							  {
								"bp": "D",
								"id": 208208
							  },
							  {
								"bp": "M",
								"id": 213482
							  },
							  {
								"bp": "T",
								"id": 215417
							  }
							]
						  }
						}
					  },
					  {
						"properties": {
						  "id": "world/race",
						  "url": "/world/race",
						  "tagType": "Keyword",
						  "sectionId": "world",
						  "sectionName": "World news",
						  "webTitle": "Race",
						  "webUrl": "https://www.theguardian.com/world/race",
						  "references": [],
						  "commercial": {
							"editionBrandings": [
							  {
								"edition": {
								  "id": "UK"
								}
							  },
							  {
								"edition": {
								  "id": "US"
								}
							  },
							  {
								"edition": {
								  "id": "AU"
								}
							  },
							  {
								"edition": {
								  "id": "INT"
								}
							  }
							],
							"editionAdTargetings": [
							  {
								"edition": {
								  "id": "UK"
								},
								"paramSet": [
								  {
									"name": "edition",
									"value": "uk"
								  },
								  {
									"name": "k",
									"value": [
									  "race"
									]
								  },
								  {
									"name": "ct",
									"value": "tag"
								  },
								  {
									"name": "p",
									"value": "ng"
								  },
								  {
									"name": "url",
									"value": "/world/race"
								  }
								]
							  },
							  {
								"edition": {
								  "id": "US"
								},
								"paramSet": [
								  {
									"name": "k",
									"value": [
									  "race"
									]
								  },
								  {
									"name": "ct",
									"value": "tag"
								  },
								  {
									"name": "p",
									"value": "ng"
								  },
								  {
									"name": "edition",
									"value": "us"
								  },
								  {
									"name": "url",
									"value": "/world/race"
								  }
								]
							  },
							  {
								"edition": {
								  "id": "AU"
								},
								"paramSet": [
								  {
									"name": "k",
									"value": [
									  "race"
									]
								  },
								  {
									"name": "ct",
									"value": "tag"
								  },
								  {
									"name": "p",
									"value": "ng"
								  },
								  {
									"name": "url",
									"value": "/world/race"
								  },
								  {
									"name": "edition",
									"value": "au"
								  }
								]
							  },
							  {
								"edition": {
								  "id": "INT"
								},
								"paramSet": [
								  {
									"name": "k",
									"value": [
									  "race"
									]
								  },
								  {
									"name": "ct",
									"value": "tag"
								  },
								  {
									"name": "edition",
									"value": "int"
								  },
								  {
									"name": "p",
									"value": "ng"
								  },
								  {
									"name": "url",
									"value": "/world/race"
								  }
								]
							  }
							],
							"prebidIndexSites": [
							  {
								"bp": "D",
								"id": 204985
							  },
							  {
								"bp": "M",
								"id": 213473
							  },
							  {
								"bp": "T",
								"id": 215408
							  }
							]
						  }
						}
					  },
					  {
						"properties": {
						  "id": "type/article",
						  "url": "/type/article",
						  "tagType": "Type",
						  "sectionId": "global",
						  "sectionName": "global",
						  "webTitle": "Article",
						  "webUrl": "https://www.theguardian.com/articles",
						  "references": [],
						  "commercial": {
							"editionBrandings": [
							  {
								"edition": {
								  "id": "UK"
								}
							  },
							  {
								"edition": {
								  "id": "US"
								}
							  },
							  {
								"edition": {
								  "id": "AU"
								}
							  },
							  {
								"edition": {
								  "id": "INT"
								}
							  }
							],
							"editionAdTargetings": [
							  {
								"edition": {
								  "id": "UK"
								},
								"paramSet": [
								  {
									"name": "edition",
									"value": "uk"
								  },
								  {
									"name": "ct",
									"value": "tag"
								  },
								  {
									"name": "url",
									"value": "/type/article"
								  },
								  {
									"name": "p",
									"value": "ng"
								  }
								]
							  },
							  {
								"edition": {
								  "id": "US"
								},
								"paramSet": [
								  {
									"name": "ct",
									"value": "tag"
								  },
								  {
									"name": "url",
									"value": "/type/article"
								  },
								  {
									"name": "p",
									"value": "ng"
								  },
								  {
									"name": "edition",
									"value": "us"
								  }
								]
							  },
							  {
								"edition": {
								  "id": "AU"
								},
								"paramSet": [
								  {
									"name": "ct",
									"value": "tag"
								  },
								  {
									"name": "url",
									"value": "/type/article"
								  },
								  {
									"name": "p",
									"value": "ng"
								  },
								  {
									"name": "edition",
									"value": "au"
								  }
								]
							  },
							  {
								"edition": {
								  "id": "INT"
								},
								"paramSet": [
								  {
									"name": "ct",
									"value": "tag"
								  },
								  {
									"name": "url",
									"value": "/type/article"
								  },
								  {
									"name": "edition",
									"value": "int"
								  },
								  {
									"name": "p",
									"value": "ng"
								  }
								]
							  }
							]
						  }
						}
					  },
					  {
						"properties": {
						  "id": "tone/news",
						  "url": "/tone/news",
						  "tagType": "Tone",
						  "sectionId": "global",
						  "sectionName": "global",
						  "webTitle": "News",
						  "webUrl": "https://www.theguardian.com/tone/news",
						  "references": [],
						  "commercial": {
							"editionBrandings": [
							  {
								"edition": {
								  "id": "UK"
								}
							  },
							  {
								"edition": {
								  "id": "US"
								}
							  },
							  {
								"edition": {
								  "id": "AU"
								}
							  },
							  {
								"edition": {
								  "id": "INT"
								}
							  }
							],
							"editionAdTargetings": [
							  {
								"edition": {
								  "id": "UK"
								},
								"paramSet": [
								  {
									"name": "edition",
									"value": "uk"
								  },
								  {
									"name": "ct",
									"value": "tag"
								  },
								  {
									"name": "tn",
									"value": [
									  "news"
									]
								  },
								  {
									"name": "p",
									"value": "ng"
								  },
								  {
									"name": "url",
									"value": "/tone/news"
								  }
								]
							  },
							  {
								"edition": {
								  "id": "US"
								},
								"paramSet": [
								  {
									"name": "ct",
									"value": "tag"
								  },
								  {
									"name": "tn",
									"value": [
									  "news"
									]
								  },
								  {
									"name": "p",
									"value": "ng"
								  },
								  {
									"name": "url",
									"value": "/tone/news"
								  },
								  {
									"name": "edition",
									"value": "us"
								  }
								]
							  },
							  {
								"edition": {
								  "id": "AU"
								},
								"paramSet": [
								  {
									"name": "ct",
									"value": "tag"
								  },
								  {
									"name": "tn",
									"value": [
									  "news"
									]
								  },
								  {
									"name": "p",
									"value": "ng"
								  },
								  {
									"name": "url",
									"value": "/tone/news"
								  },
								  {
									"name": "edition",
									"value": "au"
								  }
								]
							  },
							  {
								"edition": {
								  "id": "INT"
								},
								"paramSet": [
								  {
									"name": "ct",
									"value": "tag"
								  },
								  {
									"name": "tn",
									"value": [
									  "news"
									]
								  },
								  {
									"name": "edition",
									"value": "int"
								  },
								  {
									"name": "p",
									"value": "ng"
								  },
								  {
									"name": "url",
									"value": "/tone/news"
								  }
								]
							  }
							]
						  }
						}
					  },
					  {
						"properties": {
						  "id": "profile/ameliagentleman",
						  "url": "/profile/ameliagentleman",
						  "tagType": "Contributor",
						  "sectionId": "global",
						  "sectionName": "global",
						  "webTitle": "Amelia Gentleman",
						  "webUrl": "https://www.theguardian.com/profile/ameliagentleman",
						  "twitterHandle": "ameliagentleman",
						  "bio": "<p>Amelia Gentleman is a reporter and author of <a href=\"https://guardianbookshop.com/the-windrush-betrayal-9781783351848.html\">The Windrush Betrayal, \nExposing the Hostile Environment</a>. She won the&nbsp;Paul&nbsp;Foot&nbsp;award, Cudlipp \naward, an Amnesty award, journalist of the year British journalism \nawards and London press club print journalist of the year for Windrush \ninvestigations. She has also won the Orwell prize, feature and \nspecialist writer of the year. Previously she reported from Delhi, Paris\n and Moscow</p>",
						  "contributorLargeImagePath": "https://uploads.guim.co.uk/2017/10/06/Amelia-Gentleman,-L.png",
						  "bylineImageUrl": "https://static.guim.co.uk/sys-images/Guardian/Pix/pictures/2014/4/17/1397749328466/AmeliaGentleman.jpg",
						  "references": [],
						  "commercial": {
							"editionBrandings": [
							  {
								"edition": {
								  "id": "UK"
								}
							  },
							  {
								"edition": {
								  "id": "US"
								}
							  },
							  {
								"edition": {
								  "id": "AU"
								}
							  },
							  {
								"edition": {
								  "id": "INT"
								}
							  }
							],
							"editionAdTargetings": [
							  {
								"edition": {
								  "id": "UK"
								},
								"paramSet": [
								  {
									"name": "edition",
									"value": "uk"
								  },
								  {
									"name": "co",
									"value": [
									  "ameliagentleman"
									]
								  },
								  {
									"name": "url",
									"value": "/profile/ameliagentleman"
								  },
								  {
									"name": "ct",
									"value": "tag"
								  },
								  {
									"name": "p",
									"value": "ng"
								  }
								]
							  },
							  {
								"edition": {
								  "id": "US"
								},
								"paramSet": [
								  {
									"name": "co",
									"value": [
									  "ameliagentleman"
									]
								  },
								  {
									"name": "url",
									"value": "/profile/ameliagentleman"
								  },
								  {
									"name": "ct",
									"value": "tag"
								  },
								  {
									"name": "p",
									"value": "ng"
								  },
								  {
									"name": "edition",
									"value": "us"
								  }
								]
							  },
							  {
								"edition": {
								  "id": "AU"
								},
								"paramSet": [
								  {
									"name": "co",
									"value": [
									  "ameliagentleman"
									]
								  },
								  {
									"name": "url",
									"value": "/profile/ameliagentleman"
								  },
								  {
									"name": "ct",
									"value": "tag"
								  },
								  {
									"name": "p",
									"value": "ng"
								  },
								  {
									"name": "edition",
									"value": "au"
								  }
								]
							  },
							  {
								"edition": {
								  "id": "INT"
								},
								"paramSet": [
								  {
									"name": "co",
									"value": [
									  "ameliagentleman"
									]
								  },
								  {
									"name": "url",
									"value": "/profile/ameliagentleman"
								  },
								  {
									"name": "ct",
									"value": "tag"
								  },
								  {
									"name": "edition",
									"value": "int"
								  },
								  {
									"name": "p",
									"value": "ng"
								  }
								]
							  }
							]
						  }
						}
					  },
					  {
						"properties": {
						  "id": "publication/theguardian",
						  "url": "/publication/theguardian",
						  "tagType": "Publication",
						  "sectionId": "theguardian",
						  "sectionName": "From the Guardian",
						  "webTitle": "The Guardian",
						  "webUrl": "https://www.theguardian.com/theguardian/all",
						  "description": "All the latest from the world's leading liberal voice.",
						  "references": [],
						  "commercial": {
							"editionBrandings": [
							  {
								"edition": {
								  "id": "UK"
								}
							  },
							  {
								"edition": {
								  "id": "US"
								}
							  },
							  {
								"edition": {
								  "id": "AU"
								}
							  },
							  {
								"edition": {
								  "id": "INT"
								}
							  }
							],
							"editionAdTargetings": [
							  {
								"edition": {
								  "id": "UK"
								},
								"paramSet": [
								  {
									"name": "edition",
									"value": "uk"
								  },
								  {
									"name": "url",
									"value": "/publication/theguardian"
								  },
								  {
									"name": "ct",
									"value": "tag"
								  },
								  {
									"name": "p",
									"value": "ng"
								  }
								]
							  },
							  {
								"edition": {
								  "id": "US"
								},
								"paramSet": [
								  {
									"name": "url",
									"value": "/publication/theguardian"
								  },
								  {
									"name": "ct",
									"value": "tag"
								  },
								  {
									"name": "p",
									"value": "ng"
								  },
								  {
									"name": "edition",
									"value": "us"
								  }
								]
							  },
							  {
								"edition": {
								  "id": "AU"
								},
								"paramSet": [
								  {
									"name": "url",
									"value": "/publication/theguardian"
								  },
								  {
									"name": "ct",
									"value": "tag"
								  },
								  {
									"name": "p",
									"value": "ng"
								  },
								  {
									"name": "edition",
									"value": "au"
								  }
								]
							  },
							  {
								"edition": {
								  "id": "INT"
								},
								"paramSet": [
								  {
									"name": "url",
									"value": "/publication/theguardian"
								  },
								  {
									"name": "ct",
									"value": "tag"
								  },
								  {
									"name": "edition",
									"value": "int"
								  },
								  {
									"name": "p",
									"value": "ng"
								  }
								]
							  }
							],
							"prebidIndexSites": [
							  {
								"bp": "D",
								"id": 208213
							  },
							  {
								"bp": "M",
								"id": 213487
							  },
							  {
								"bp": "T",
								"id": 215422
							  }
							]
						  }
						}
					  },
					  {
						"properties": {
						  "id": "theguardian/mainsection",
						  "url": "/theguardian/mainsection",
						  "tagType": "NewspaperBook",
						  "sectionId": "news",
						  "sectionName": "News",
						  "webTitle": "Main section",
						  "webUrl": "https://www.theguardian.com/theguardian/mainsection",
						  "references": [],
						  "commercial": {
							"editionBrandings": [
							  {
								"edition": {
								  "id": "UK"
								}
							  },
							  {
								"edition": {
								  "id": "US"
								}
							  },
							  {
								"edition": {
								  "id": "AU"
								}
							  },
							  {
								"edition": {
								  "id": "INT"
								}
							  }
							],
							"editionAdTargetings": [
							  {
								"edition": {
								  "id": "UK"
								},
								"paramSet": [
								  {
									"name": "edition",
									"value": "uk"
								  },
								  {
									"name": "ct",
									"value": "tag"
								  },
								  {
									"name": "p",
									"value": "ng"
								  },
								  {
									"name": "url",
									"value": "/theguardian/mainsection"
								  }
								]
							  },
							  {
								"edition": {
								  "id": "US"
								},
								"paramSet": [
								  {
									"name": "ct",
									"value": "tag"
								  },
								  {
									"name": "p",
									"value": "ng"
								  },
								  {
									"name": "edition",
									"value": "us"
								  },
								  {
									"name": "url",
									"value": "/theguardian/mainsection"
								  }
								]
							  },
							  {
								"edition": {
								  "id": "AU"
								},
								"paramSet": [
								  {
									"name": "ct",
									"value": "tag"
								  },
								  {
									"name": "p",
									"value": "ng"
								  },
								  {
									"name": "edition",
									"value": "au"
								  },
								  {
									"name": "url",
									"value": "/theguardian/mainsection"
								  }
								]
							  },
							  {
								"edition": {
								  "id": "INT"
								},
								"paramSet": [
								  {
									"name": "ct",
									"value": "tag"
								  },
								  {
									"name": "edition",
									"value": "int"
								  },
								  {
									"name": "p",
									"value": "ng"
								  },
								  {
									"name": "url",
									"value": "/theguardian/mainsection"
								  }
								]
							  }
							],
							"prebidIndexSites": [
							  {
								"bp": "D",
								"id": 208234
							  },
							  {
								"bp": "M",
								"id": 213507
							  },
							  {
								"bp": "T",
								"id": 215442
							  }
							]
						  }
						}
					  },
					  {
						"properties": {
						  "id": "theguardian/mainsection/topstories",
						  "url": "/theguardian/mainsection/topstories",
						  "tagType": "NewspaperBookSection",
						  "sectionId": "theguardian",
						  "sectionName": "From the Guardian",
						  "webTitle": "Top stories",
						  "webUrl": "https://www.theguardian.com/theguardian/mainsection/topstories",
						  "references": [],
						  "commercial": {
							"editionBrandings": [
							  {
								"edition": {
								  "id": "UK"
								}
							  },
							  {
								"edition": {
								  "id": "US"
								}
							  },
							  {
								"edition": {
								  "id": "AU"
								}
							  },
							  {
								"edition": {
								  "id": "INT"
								}
							  }
							],
							"editionAdTargetings": [
							  {
								"edition": {
								  "id": "UK"
								},
								"paramSet": [
								  {
									"name": "edition",
									"value": "uk"
								  },
								  {
									"name": "ct",
									"value": "tag"
								  },
								  {
									"name": "p",
									"value": "ng"
								  },
								  {
									"name": "url",
									"value": "/theguardian/mainsection/topstories"
								  }
								]
							  },
							  {
								"edition": {
								  "id": "US"
								},
								"paramSet": [
								  {
									"name": "ct",
									"value": "tag"
								  },
								  {
									"name": "p",
									"value": "ng"
								  },
								  {
									"name": "edition",
									"value": "us"
								  },
								  {
									"name": "url",
									"value": "/theguardian/mainsection/topstories"
								  }
								]
							  },
							  {
								"edition": {
								  "id": "AU"
								},
								"paramSet": [
								  {
									"name": "ct",
									"value": "tag"
								  },
								  {
									"name": "p",
									"value": "ng"
								  },
								  {
									"name": "url",
									"value": "/theguardian/mainsection/topstories"
								  },
								  {
									"name": "edition",
									"value": "au"
								  }
								]
							  },
							  {
								"edition": {
								  "id": "INT"
								},
								"paramSet": [
								  {
									"name": "ct",
									"value": "tag"
								  },
								  {
									"name": "edition",
									"value": "int"
								  },
								  {
									"name": "p",
									"value": "ng"
								  },
								  {
									"name": "url",
									"value": "/theguardian/mainsection/topstories"
								  }
								]
							  }
							],
							"prebidIndexSites": [
							  {
								"bp": "D",
								"id": 208213
							  },
							  {
								"bp": "M",
								"id": 213487
							  },
							  {
								"bp": "T",
								"id": 215422
							  }
							]
						  }
						}
					  },
					  {
						"properties": {
						  "id": "tracking/commissioningdesk/uk-home-news",
						  "url": "/tracking/commissioningdesk/uk-home-news",
						  "tagType": "Tracking",
						  "sectionId": "global",
						  "sectionName": "global",
						  "webTitle": "UK Home News",
						  "webUrl": "https://www.theguardian.com/tracking/commissioningdesk/uk-home-news",
						  "references": [],
						  "commercial": {
							"editionBrandings": [
							  {
								"edition": {
								  "id": "UK"
								}
							  },
							  {
								"edition": {
								  "id": "US"
								}
							  },
							  {
								"edition": {
								  "id": "AU"
								}
							  },
							  {
								"edition": {
								  "id": "INT"
								}
							  }
							],
							"editionAdTargetings": [
							  {
								"edition": {
								  "id": "UK"
								},
								"paramSet": [
								  {
									"name": "edition",
									"value": "uk"
								  },
								  {
									"name": "url",
									"value": "/tracking/commissioningdesk/uk-home-news"
								  },
								  {
									"name": "ct",
									"value": "tag"
								  },
								  {
									"name": "p",
									"value": "ng"
								  }
								]
							  },
							  {
								"edition": {
								  "id": "US"
								},
								"paramSet": [
								  {
									"name": "url",
									"value": "/tracking/commissioningdesk/uk-home-news"
								  },
								  {
									"name": "ct",
									"value": "tag"
								  },
								  {
									"name": "p",
									"value": "ng"
								  },
								  {
									"name": "edition",
									"value": "us"
								  }
								]
							  },
							  {
								"edition": {
								  "id": "AU"
								},
								"paramSet": [
								  {
									"name": "url",
									"value": "/tracking/commissioningdesk/uk-home-news"
								  },
								  {
									"name": "ct",
									"value": "tag"
								  },
								  {
									"name": "p",
									"value": "ng"
								  },
								  {
									"name": "edition",
									"value": "au"
								  }
								]
							  },
							  {
								"edition": {
								  "id": "INT"
								},
								"paramSet": [
								  {
									"name": "url",
									"value": "/tracking/commissioningdesk/uk-home-news"
								  },
								  {
									"name": "ct",
									"value": "tag"
								  },
								  {
									"name": "edition",
									"value": "int"
								  },
								  {
									"name": "p",
									"value": "ng"
								  }
								]
							  }
							]
						  }
						}
					  }
					]
				  }
				},
				"maybeContentId": "uk-news/2022/may/29/windrush-scandal-caused-by-30-years-of-racist-immigration-laws-report",
				"isLiveBlog": false,
				"isCrossword": false,
				"byline": "Amelia Gentleman",
				"webTitle": "Windrush scandal caused by ‘30 years of racist immigration laws’ – report",
				"linkText": "Windrush scandal caused by ‘30 years of racist immigration laws’ – report",
				"maybeFrontPublicationDate": 1653898977767,
				"webUrl": "https://www.theguardian.com/uk-news/2022/may/29/windrush-scandal-caused-by-30-years-of-racist-immigration-laws-report",
				"editionBrandings": [
				  {
					"edition": {
					  "id": "UK"
					}
				  },
				  {
					"edition": {
					  "id": "US"
					}
				  },
				  {
					"edition": {
					  "id": "AU"
					}
				  },
				  {
					"edition": {
					  "id": "INT"
					}
				  }
				]
			  },
			  "header": {
				"isVideo": false,
				"isComment": false,
				"isGallery": false,
				"isAudio": false,
				"kicker": {
				  "type": "FreeHtmlKicker",
				  "item": {
					"properties": {
					  "kickerText": "Windrush"
					},
					"body": "Windrush"
				  }
				},
				"headline": "Scandal caused by ‘30 years of racist immigration laws’ – report",
				"url": "/uk-news/2022/may/29/windrush-scandal-caused-by-30-years-of-racist-immigration-laws-report",
				"hasMainVideoElement": false
			  },
			  "card": {
				"id": "uk-news/2022/may/29/windrush-scandal-caused-by-30-years-of-racist-immigration-laws-report",
				"cardStyle": {
				  "type": "DefaultCardstyle"
				},
				"webPublicationDateOption": 1653840931000,
				"lastModifiedOption": 1653883959000,
				"trailText": "Exclusive: legislation has been designed to reduce the UK’s non-white population, according to leaked government paper",
				"shortUrlPath": "/p/ygj7z",
				"shortUrl": "https://www.theguardian.com/p/ygj7z",
				"group": "0",
				"isLive": false
			  },
			  "discussion": {
				"isCommentable": false,
				"isClosedForComments": true,
				"discussionId": "/p/ygj7z"
			  },
			  "display": {
				"isBoosted": false,
				"showBoostedHeadline": false,
				"showQuotedHeadline": false,
				"imageHide": false,
				"showLivePlayable": false
			  },
			  "format": {
				"design": "ArticleDesign",
				"theme": "NewsPillar",
				"display": "StandardDisplay"
			  },
			  "enriched": {},
			  "supportingContent": [
				{
				  "properties": {
					"isBreaking": false,
					"showMainVideo": false,
					"showKickerTag": false,
					"showByline": false,
					"imageSlideshowReplace": false,
					"maybeContent": {
					  "trail": {
						"trailPicture": {
						  "allImages": [
							{
							  "index": 1,
							  "fields": {
								"displayCredit": "true",
								"source": "Getty Images",
								"photographer": "Norman Potter",
								"isMaster": "true",
								"altText": "Crowds of West Indians arriving at Waterloo in 1961",
								"height": "3367",
								"credit": "Photograph: Norman Potter/Getty Images",
								"mediaId": "cc175e6ca658d2299dc12304ecbf4d037b17fc17",
								"width": "5610"
							  },
							  "mediaType": "Image",
							  "url": "https://media.guim.co.uk/cc175e6ca658d2299dc12304ecbf4d037b17fc17/0_367_5610_3367/master/5610.jpg"
							}
						  ]
						},
						"byline": "Amelia Gentleman",
						"thumbnailPath": "https://i.guim.co.uk/img/media/cc175e6ca658d2299dc12304ecbf4d037b17fc17/0_367_5610_3367/500.jpg?quality=85&auto=format&fit=max&s=81e73ad34f3ad92c6261dff5baa7473f",
						"webPublicationDate": 1653845580000
					  },
					  "metadata": {
						"id": "uk-news/2022/may/29/racist-legislation-led-windrush-home-office",
						"webTitle": "The racist legislation that led to Windrush",
						"webUrl": "https://www.theguardian.com/uk-news/2022/may/29/racist-legislation-led-windrush-home-office",
						"type": "Article",
						"pillar": {
						  "name": "News"
						},
						"sectionId": {
						  "value": "uk-news"
						},
						"designType": "Article",
						"format": {
						  "design": "ArticleDesign",
						  "theme": "NewsPillar",
						  "display": "StandardDisplay"
						}
					  },
					  "fields": {
						"main": "<figure class=\"element element-image\" data-media-id=\"cc175e6ca658d2299dc12304ecbf4d037b17fc17\"> <img src=\"https://media.guim.co.uk/cc175e6ca658d2299dc12304ecbf4d037b17fc17/0_367_5610_3367/1000.jpg\" alt=\"West Indian immigrants arriving at Waterloo in 1961\" width=\"1000\" height=\"600\" class=\"gu-image\" /> <figcaption> <span class=\"element-image__caption\">Immigrants arriving at Waterloo in 1961. The Home Office has repeatedly refused to make its Windrush report public.</span> <span class=\"element-image__credit\">Photograph: Norman Potter/Getty Images</span> </figcaption> </figure>",
						"body": "<p>A suppressed report on the Windrush scandal has concluded that its origins lie in three decades of racist immigration legislation designed to reduce the UK’s non-white population.</p><p>It found that the “deep-rooted racism of the Windrush scandal” had roots in the fact that “during the period 1950-1981, every single piece of immigration or citizenship legislation was designed at least in part to reduce the number of people with black or brown skin who were permitted to live and work in the UK”.</p><p>The <strong>1962 Commonwealth Immigrants Act</strong> introduced a voucher system, under which only a limited number of migrants from the Commonwealth were permitted to enter the UK, curtailing free movement within the British empire and restricting an open-door policy that had been enshrined in law in 1948</p><p>The <strong>1968 Commonwealth Immigrants Act</strong> altered the rules on who could apply for employment vouchers, dividing applicants into “belonging” and “non-belonging” citizens. To qualify as belonging, an individual had to prove a connection to the UK through a parent or grandparent – in other words, “belonging” was a euphemism for “white”. The legislation also deprived more than a million individuals worldwide of their right to enter Britain, including those from the Caribbean, Malaysia and Singapore, many of whom held only British passports and so were effectively rendered stateless.</p><p>The <strong>1971 Immigration Act</strong> further constrained Commonwealth citizens’ right to enter the UK, ending large-scale immigration from the Commonwealth. It introduced a new term, “patrial”, to describe those to whom immigration controls would not apply. A “patrial” was defined as an individual who had a grandparent born in the UK, or a parent born or naturalised in the UK. This meant that white citizens of former colonies, such as those from Canada, Australia and other “settler colonies”, were the beneficiaries of positive discrimination in that they were far more likely than their counterparts from places like Jamaica to have UK-born ancestors.</p><p>The <strong>1981 British Nationality Act</strong> followed concerns expressed by Margaret Thatcher that “people are really rather afraid that this country might be rather swamped by people with a different culture”. The act required Commonwealth citizens who had settled in the UK to register to become British citizens.</p>",
						"standfirst": "<p>A suppressed report has concluded the fiasco’s roots lie in immigration legislation from 1950 to 1981</p><ul><li><a href=\"https://www.theguardian.com/uk-news/2022/may/29/windrush-scandal-caused-by-30-years-of-racist-immigration-laws-report\">Windrush scandal caused by 30 years of racist laws</a></li></ul>"
					  },
					  "elements": {
						"mediaAtoms": []
					  },
					  "tags": {
						"tags": [
						  {
							"properties": {
							  "id": "uk-news/windrush-scandal",
							  "url": "/uk-news/windrush-scandal",
							  "tagType": "Keyword",
							  "sectionId": "uk-news",
							  "sectionName": "UK news",
							  "webTitle": "Windrush scandal",
							  "webUrl": "https://www.theguardian.com/uk-news/windrush-scandal",
							  "description": "<p><a href=\"https://www.theguardian.com/uk-news/commonwealth-immigration\">Commonwealth immigration</a>&nbsp;stories that aren't directly related to the Windrush scandal can be found <a href=\"https://www.theguardian.com/uk-news/commonwealth-immigration\">here</a>.&nbsp;</p>",
							  "references": [],
							  "commercial": {
								"editionBrandings": [
								  {
									"edition": {
									  "id": "UK"
									}
								  },
								  {
									"edition": {
									  "id": "US"
									}
								  },
								  {
									"edition": {
									  "id": "AU"
									}
								  },
								  {
									"edition": {
									  "id": "INT"
									}
								  }
								],
								"editionAdTargetings": [
								  {
									"edition": {
									  "id": "UK"
									},
									"paramSet": [
									  {
										"name": "edition",
										"value": "uk"
									  },
									  {
										"name": "k",
										"value": [
										  "windrush-scandal"
										]
									  },
									  {
										"name": "ct",
										"value": "tag"
									  },
									  {
										"name": "p",
										"value": "ng"
									  },
									  {
										"name": "url",
										"value": "/uk-news/windrush-scandal"
									  }
									]
								  },
								  {
									"edition": {
									  "id": "US"
									},
									"paramSet": [
									  {
										"name": "k",
										"value": [
										  "windrush-scandal"
										]
									  },
									  {
										"name": "ct",
										"value": "tag"
									  },
									  {
										"name": "p",
										"value": "ng"
									  },
									  {
										"name": "edition",
										"value": "us"
									  },
									  {
										"name": "url",
										"value": "/uk-news/windrush-scandal"
									  }
									]
								  },
								  {
									"edition": {
									  "id": "AU"
									},
									"paramSet": [
									  {
										"name": "k",
										"value": [
										  "windrush-scandal"
										]
									  },
									  {
										"name": "ct",
										"value": "tag"
									  },
									  {
										"name": "p",
										"value": "ng"
									  },
									  {
										"name": "edition",
										"value": "au"
									  },
									  {
										"name": "url",
										"value": "/uk-news/windrush-scandal"
									  }
									]
								  },
								  {
									"edition": {
									  "id": "INT"
									},
									"paramSet": [
									  {
										"name": "k",
										"value": [
										  "windrush-scandal"
										]
									  },
									  {
										"name": "ct",
										"value": "tag"
									  },
									  {
										"name": "edition",
										"value": "int"
									  },
									  {
										"name": "p",
										"value": "ng"
									  },
									  {
										"name": "url",
										"value": "/uk-news/windrush-scandal"
									  }
									]
								  }
								],
								"prebidIndexSites": [
								  {
									"bp": "D",
									"id": 208208
								  },
								  {
									"bp": "M",
									"id": 213482
								  },
								  {
									"bp": "T",
									"id": 215417
								  }
								]
							  }
							}
						  },
						  {
							"properties": {
							  "id": "uk-news/commonwealth-immigration",
							  "url": "/uk-news/commonwealth-immigration",
							  "tagType": "Keyword",
							  "sectionId": "uk-news",
							  "sectionName": "UK news",
							  "webTitle": "Commonwealth immigration",
							  "webUrl": "https://www.theguardian.com/uk-news/commonwealth-immigration",
							  "references": [],
							  "commercial": {
								"editionBrandings": [
								  {
									"edition": {
									  "id": "UK"
									}
								  },
								  {
									"edition": {
									  "id": "US"
									}
								  },
								  {
									"edition": {
									  "id": "AU"
									}
								  },
								  {
									"edition": {
									  "id": "INT"
									}
								  }
								],
								"editionAdTargetings": [
								  {
									"edition": {
									  "id": "UK"
									},
									"paramSet": [
									  {
										"name": "edition",
										"value": "uk"
									  },
									  {
										"name": "ct",
										"value": "tag"
									  },
									  {
										"name": "p",
										"value": "ng"
									  },
									  {
										"name": "k",
										"value": [
										  "commonwealth-immigration"
										]
									  },
									  {
										"name": "url",
										"value": "/uk-news/commonwealth-immigration"
									  }
									]
								  },
								  {
									"edition": {
									  "id": "US"
									},
									"paramSet": [
									  {
										"name": "ct",
										"value": "tag"
									  },
									  {
										"name": "p",
										"value": "ng"
									  },
									  {
										"name": "edition",
										"value": "us"
									  },
									  {
										"name": "k",
										"value": [
										  "commonwealth-immigration"
										]
									  },
									  {
										"name": "url",
										"value": "/uk-news/commonwealth-immigration"
									  }
									]
								  },
								  {
									"edition": {
									  "id": "AU"
									},
									"paramSet": [
									  {
										"name": "ct",
										"value": "tag"
									  },
									  {
										"name": "p",
										"value": "ng"
									  },
									  {
										"name": "k",
										"value": [
										  "commonwealth-immigration"
										]
									  },
									  {
										"name": "url",
										"value": "/uk-news/commonwealth-immigration"
									  },
									  {
										"name": "edition",
										"value": "au"
									  }
									]
								  },
								  {
									"edition": {
									  "id": "INT"
									},
									"paramSet": [
									  {
										"name": "ct",
										"value": "tag"
									  },
									  {
										"name": "edition",
										"value": "int"
									  },
									  {
										"name": "p",
										"value": "ng"
									  },
									  {
										"name": "k",
										"value": [
										  "commonwealth-immigration"
										]
									  },
									  {
										"name": "url",
										"value": "/uk-news/commonwealth-immigration"
									  }
									]
								  }
								],
								"prebidIndexSites": [
								  {
									"bp": "D",
									"id": 208208
								  },
								  {
									"bp": "M",
									"id": 213482
								  },
								  {
									"bp": "T",
									"id": 215417
								  }
								]
							  }
							}
						  },
						  {
							"properties": {
							  "id": "uk/immigration",
							  "url": "/uk/immigration",
							  "tagType": "Keyword",
							  "sectionId": "uk-news",
							  "sectionName": "UK news",
							  "webTitle": "Immigration and asylum",
							  "webUrl": "https://www.theguardian.com/uk/immigration",
							  "references": [],
							  "commercial": {
								"editionBrandings": [
								  {
									"edition": {
									  "id": "UK"
									}
								  },
								  {
									"edition": {
									  "id": "US"
									}
								  },
								  {
									"edition": {
									  "id": "AU"
									}
								  },
								  {
									"edition": {
									  "id": "INT"
									}
								  }
								],
								"editionAdTargetings": [
								  {
									"edition": {
									  "id": "UK"
									},
									"paramSet": [
									  {
										"name": "edition",
										"value": "uk"
									  },
									  {
										"name": "ct",
										"value": "tag"
									  },
									  {
										"name": "url",
										"value": "/uk/immigration"
									  },
									  {
										"name": "p",
										"value": "ng"
									  },
									  {
										"name": "k",
										"value": [
										  "immigration"
										]
									  }
									]
								  },
								  {
									"edition": {
									  "id": "US"
									},
									"paramSet": [
									  {
										"name": "ct",
										"value": "tag"
									  },
									  {
										"name": "url",
										"value": "/uk/immigration"
									  },
									  {
										"name": "p",
										"value": "ng"
									  },
									  {
										"name": "edition",
										"value": "us"
									  },
									  {
										"name": "k",
										"value": [
										  "immigration"
										]
									  }
									]
								  },
								  {
									"edition": {
									  "id": "AU"
									},
									"paramSet": [
									  {
										"name": "ct",
										"value": "tag"
									  },
									  {
										"name": "url",
										"value": "/uk/immigration"
									  },
									  {
										"name": "p",
										"value": "ng"
									  },
									  {
										"name": "edition",
										"value": "au"
									  },
									  {
										"name": "k",
										"value": [
										  "immigration"
										]
									  }
									]
								  },
								  {
									"edition": {
									  "id": "INT"
									},
									"paramSet": [
									  {
										"name": "ct",
										"value": "tag"
									  },
									  {
										"name": "url",
										"value": "/uk/immigration"
									  },
									  {
										"name": "edition",
										"value": "int"
									  },
									  {
										"name": "p",
										"value": "ng"
									  },
									  {
										"name": "k",
										"value": [
										  "immigration"
										]
									  }
									]
								  }
								],
								"prebidIndexSites": [
								  {
									"bp": "D",
									"id": 208208
								  },
								  {
									"bp": "M",
									"id": 213482
								  },
								  {
									"bp": "T",
									"id": 215417
								  }
								]
							  }
							}
						  },
						  {
							"properties": {
							  "id": "uk/uk",
							  "url": "/uk/uk",
							  "tagType": "Keyword",
							  "sectionId": "uk-news",
							  "sectionName": "UK news",
							  "webTitle": "UK news",
							  "webUrl": "https://www.theguardian.com/uk/uk",
							  "references": [],
							  "commercial": {
								"editionBrandings": [
								  {
									"edition": {
									  "id": "UK"
									}
								  },
								  {
									"edition": {
									  "id": "US"
									}
								  },
								  {
									"edition": {
									  "id": "AU"
									}
								  },
								  {
									"edition": {
									  "id": "INT"
									}
								  }
								],
								"editionAdTargetings": [
								  {
									"edition": {
									  "id": "UK"
									},
									"paramSet": [
									  {
										"name": "k",
										"value": [
										  "uk/uk"
										]
									  },
									  {
										"name": "edition",
										"value": "uk"
									  },
									  {
										"name": "ct",
										"value": "tag"
									  },
									  {
										"name": "url",
										"value": "/uk/uk"
									  },
									  {
										"name": "p",
										"value": "ng"
									  }
									]
								  },
								  {
									"edition": {
									  "id": "US"
									},
									"paramSet": [
									  {
										"name": "k",
										"value": [
										  "uk/uk"
										]
									  },
									  {
										"name": "ct",
										"value": "tag"
									  },
									  {
										"name": "url",
										"value": "/uk/uk"
									  },
									  {
										"name": "p",
										"value": "ng"
									  },
									  {
										"name": "edition",
										"value": "us"
									  }
									]
								  },
								  {
									"edition": {
									  "id": "AU"
									},
									"paramSet": [
									  {
										"name": "k",
										"value": [
										  "uk/uk"
										]
									  },
									  {
										"name": "ct",
										"value": "tag"
									  },
									  {
										"name": "url",
										"value": "/uk/uk"
									  },
									  {
										"name": "p",
										"value": "ng"
									  },
									  {
										"name": "edition",
										"value": "au"
									  }
									]
								  },
								  {
									"edition": {
									  "id": "INT"
									},
									"paramSet": [
									  {
										"name": "k",
										"value": [
										  "uk/uk"
										]
									  },
									  {
										"name": "ct",
										"value": "tag"
									  },
									  {
										"name": "edition",
										"value": "int"
									  },
									  {
										"name": "url",
										"value": "/uk/uk"
									  },
									  {
										"name": "p",
										"value": "ng"
									  }
									]
								  }
								],
								"prebidIndexSites": [
								  {
									"bp": "D",
									"id": 208208
								  },
								  {
									"bp": "M",
									"id": 213482
								  },
								  {
									"bp": "T",
									"id": 215417
								  }
								]
							  }
							}
						  },
						  {
							"properties": {
							  "id": "world/race",
							  "url": "/world/race",
							  "tagType": "Keyword",
							  "sectionId": "world",
							  "sectionName": "World news",
							  "webTitle": "Race",
							  "webUrl": "https://www.theguardian.com/world/race",
							  "references": [],
							  "commercial": {
								"editionBrandings": [
								  {
									"edition": {
									  "id": "UK"
									}
								  },
								  {
									"edition": {
									  "id": "US"
									}
								  },
								  {
									"edition": {
									  "id": "AU"
									}
								  },
								  {
									"edition": {
									  "id": "INT"
									}
								  }
								],
								"editionAdTargetings": [
								  {
									"edition": {
									  "id": "UK"
									},
									"paramSet": [
									  {
										"name": "edition",
										"value": "uk"
									  },
									  {
										"name": "k",
										"value": [
										  "race"
										]
									  },
									  {
										"name": "ct",
										"value": "tag"
									  },
									  {
										"name": "p",
										"value": "ng"
									  },
									  {
										"name": "url",
										"value": "/world/race"
									  }
									]
								  },
								  {
									"edition": {
									  "id": "US"
									},
									"paramSet": [
									  {
										"name": "k",
										"value": [
										  "race"
										]
									  },
									  {
										"name": "ct",
										"value": "tag"
									  },
									  {
										"name": "p",
										"value": "ng"
									  },
									  {
										"name": "edition",
										"value": "us"
									  },
									  {
										"name": "url",
										"value": "/world/race"
									  }
									]
								  },
								  {
									"edition": {
									  "id": "AU"
									},
									"paramSet": [
									  {
										"name": "k",
										"value": [
										  "race"
										]
									  },
									  {
										"name": "ct",
										"value": "tag"
									  },
									  {
										"name": "p",
										"value": "ng"
									  },
									  {
										"name": "url",
										"value": "/world/race"
									  },
									  {
										"name": "edition",
										"value": "au"
									  }
									]
								  },
								  {
									"edition": {
									  "id": "INT"
									},
									"paramSet": [
									  {
										"name": "k",
										"value": [
										  "race"
										]
									  },
									  {
										"name": "ct",
										"value": "tag"
									  },
									  {
										"name": "edition",
										"value": "int"
									  },
									  {
										"name": "p",
										"value": "ng"
									  },
									  {
										"name": "url",
										"value": "/world/race"
									  }
									]
								  }
								],
								"prebidIndexSites": [
								  {
									"bp": "D",
									"id": 204985
								  },
								  {
									"bp": "M",
									"id": 213473
								  },
								  {
									"bp": "T",
									"id": 215408
								  }
								]
							  }
							}
						  },
						  {
							"properties": {
							  "id": "type/article",
							  "url": "/type/article",
							  "tagType": "Type",
							  "sectionId": "global",
							  "sectionName": "global",
							  "webTitle": "Article",
							  "webUrl": "https://www.theguardian.com/articles",
							  "references": [],
							  "commercial": {
								"editionBrandings": [
								  {
									"edition": {
									  "id": "UK"
									}
								  },
								  {
									"edition": {
									  "id": "US"
									}
								  },
								  {
									"edition": {
									  "id": "AU"
									}
								  },
								  {
									"edition": {
									  "id": "INT"
									}
								  }
								],
								"editionAdTargetings": [
								  {
									"edition": {
									  "id": "UK"
									},
									"paramSet": [
									  {
										"name": "edition",
										"value": "uk"
									  },
									  {
										"name": "ct",
										"value": "tag"
									  },
									  {
										"name": "url",
										"value": "/type/article"
									  },
									  {
										"name": "p",
										"value": "ng"
									  }
									]
								  },
								  {
									"edition": {
									  "id": "US"
									},
									"paramSet": [
									  {
										"name": "ct",
										"value": "tag"
									  },
									  {
										"name": "url",
										"value": "/type/article"
									  },
									  {
										"name": "p",
										"value": "ng"
									  },
									  {
										"name": "edition",
										"value": "us"
									  }
									]
								  },
								  {
									"edition": {
									  "id": "AU"
									},
									"paramSet": [
									  {
										"name": "ct",
										"value": "tag"
									  },
									  {
										"name": "url",
										"value": "/type/article"
									  },
									  {
										"name": "p",
										"value": "ng"
									  },
									  {
										"name": "edition",
										"value": "au"
									  }
									]
								  },
								  {
									"edition": {
									  "id": "INT"
									},
									"paramSet": [
									  {
										"name": "ct",
										"value": "tag"
									  },
									  {
										"name": "url",
										"value": "/type/article"
									  },
									  {
										"name": "edition",
										"value": "int"
									  },
									  {
										"name": "p",
										"value": "ng"
									  }
									]
								  }
								]
							  }
							}
						  },
						  {
							"properties": {
							  "id": "tone/news",
							  "url": "/tone/news",
							  "tagType": "Tone",
							  "sectionId": "global",
							  "sectionName": "global",
							  "webTitle": "News",
							  "webUrl": "https://www.theguardian.com/tone/news",
							  "references": [],
							  "commercial": {
								"editionBrandings": [
								  {
									"edition": {
									  "id": "UK"
									}
								  },
								  {
									"edition": {
									  "id": "US"
									}
								  },
								  {
									"edition": {
									  "id": "AU"
									}
								  },
								  {
									"edition": {
									  "id": "INT"
									}
								  }
								],
								"editionAdTargetings": [
								  {
									"edition": {
									  "id": "UK"
									},
									"paramSet": [
									  {
										"name": "edition",
										"value": "uk"
									  },
									  {
										"name": "ct",
										"value": "tag"
									  },
									  {
										"name": "tn",
										"value": [
										  "news"
										]
									  },
									  {
										"name": "p",
										"value": "ng"
									  },
									  {
										"name": "url",
										"value": "/tone/news"
									  }
									]
								  },
								  {
									"edition": {
									  "id": "US"
									},
									"paramSet": [
									  {
										"name": "ct",
										"value": "tag"
									  },
									  {
										"name": "tn",
										"value": [
										  "news"
										]
									  },
									  {
										"name": "p",
										"value": "ng"
									  },
									  {
										"name": "url",
										"value": "/tone/news"
									  },
									  {
										"name": "edition",
										"value": "us"
									  }
									]
								  },
								  {
									"edition": {
									  "id": "AU"
									},
									"paramSet": [
									  {
										"name": "ct",
										"value": "tag"
									  },
									  {
										"name": "tn",
										"value": [
										  "news"
										]
									  },
									  {
										"name": "p",
										"value": "ng"
									  },
									  {
										"name": "url",
										"value": "/tone/news"
									  },
									  {
										"name": "edition",
										"value": "au"
									  }
									]
								  },
								  {
									"edition": {
									  "id": "INT"
									},
									"paramSet": [
									  {
										"name": "ct",
										"value": "tag"
									  },
									  {
										"name": "tn",
										"value": [
										  "news"
										]
									  },
									  {
										"name": "edition",
										"value": "int"
									  },
									  {
										"name": "p",
										"value": "ng"
									  },
									  {
										"name": "url",
										"value": "/tone/news"
									  }
									]
								  }
								]
							  }
							}
						  },
						  {
							"properties": {
							  "id": "tone/explainers",
							  "url": "/tone/explainers",
							  "tagType": "Tone",
							  "sectionId": "global",
							  "sectionName": "global",
							  "webTitle": "Explainers",
							  "webUrl": "https://www.theguardian.com/tone/explainers",
							  "references": [],
							  "commercial": {
								"editionBrandings": [
								  {
									"edition": {
									  "id": "UK"
									}
								  },
								  {
									"edition": {
									  "id": "US"
									}
								  },
								  {
									"edition": {
									  "id": "AU"
									}
								  },
								  {
									"edition": {
									  "id": "INT"
									}
								  }
								],
								"editionAdTargetings": [
								  {
									"edition": {
									  "id": "UK"
									},
									"paramSet": [
									  {
										"name": "edition",
										"value": "uk"
									  },
									  {
										"name": "ct",
										"value": "tag"
									  },
									  {
										"name": "p",
										"value": "ng"
									  },
									  {
										"name": "tn",
										"value": [
										  "explainers"
										]
									  },
									  {
										"name": "url",
										"value": "/tone/explainers"
									  }
									]
								  },
								  {
									"edition": {
									  "id": "US"
									},
									"paramSet": [
									  {
										"name": "ct",
										"value": "tag"
									  },
									  {
										"name": "p",
										"value": "ng"
									  },
									  {
										"name": "tn",
										"value": [
										  "explainers"
										]
									  },
									  {
										"name": "edition",
										"value": "us"
									  },
									  {
										"name": "url",
										"value": "/tone/explainers"
									  }
									]
								  },
								  {
									"edition": {
									  "id": "AU"
									},
									"paramSet": [
									  {
										"name": "ct",
										"value": "tag"
									  },
									  {
										"name": "p",
										"value": "ng"
									  },
									  {
										"name": "tn",
										"value": [
										  "explainers"
										]
									  },
									  {
										"name": "edition",
										"value": "au"
									  },
									  {
										"name": "url",
										"value": "/tone/explainers"
									  }
									]
								  },
								  {
									"edition": {
									  "id": "INT"
									},
									"paramSet": [
									  {
										"name": "ct",
										"value": "tag"
									  },
									  {
										"name": "edition",
										"value": "int"
									  },
									  {
										"name": "p",
										"value": "ng"
									  },
									  {
										"name": "tn",
										"value": [
										  "explainers"
										]
									  },
									  {
										"name": "url",
										"value": "/tone/explainers"
									  }
									]
								  }
								]
							  }
							}
						  },
						  {
							"properties": {
							  "id": "profile/ameliagentleman",
							  "url": "/profile/ameliagentleman",
							  "tagType": "Contributor",
							  "sectionId": "global",
							  "sectionName": "global",
							  "webTitle": "Amelia Gentleman",
							  "webUrl": "https://www.theguardian.com/profile/ameliagentleman",
							  "twitterHandle": "ameliagentleman",
							  "bio": "<p>Amelia Gentleman is a reporter and author of <a href=\"https://guardianbookshop.com/the-windrush-betrayal-9781783351848.html\">The Windrush Betrayal, \nExposing the Hostile Environment</a>. She won the&nbsp;Paul&nbsp;Foot&nbsp;award, Cudlipp \naward, an Amnesty award, journalist of the year British journalism \nawards and London press club print journalist of the year for Windrush \ninvestigations. She has also won the Orwell prize, feature and \nspecialist writer of the year. Previously she reported from Delhi, Paris\n and Moscow</p>",
							  "contributorLargeImagePath": "https://uploads.guim.co.uk/2017/10/06/Amelia-Gentleman,-L.png",
							  "bylineImageUrl": "https://static.guim.co.uk/sys-images/Guardian/Pix/pictures/2014/4/17/1397749328466/AmeliaGentleman.jpg",
							  "references": [],
							  "commercial": {
								"editionBrandings": [
								  {
									"edition": {
									  "id": "UK"
									}
								  },
								  {
									"edition": {
									  "id": "US"
									}
								  },
								  {
									"edition": {
									  "id": "AU"
									}
								  },
								  {
									"edition": {
									  "id": "INT"
									}
								  }
								],
								"editionAdTargetings": [
								  {
									"edition": {
									  "id": "UK"
									},
									"paramSet": [
									  {
										"name": "edition",
										"value": "uk"
									  },
									  {
										"name": "co",
										"value": [
										  "ameliagentleman"
										]
									  },
									  {
										"name": "url",
										"value": "/profile/ameliagentleman"
									  },
									  {
										"name": "ct",
										"value": "tag"
									  },
									  {
										"name": "p",
										"value": "ng"
									  }
									]
								  },
								  {
									"edition": {
									  "id": "US"
									},
									"paramSet": [
									  {
										"name": "co",
										"value": [
										  "ameliagentleman"
										]
									  },
									  {
										"name": "url",
										"value": "/profile/ameliagentleman"
									  },
									  {
										"name": "ct",
										"value": "tag"
									  },
									  {
										"name": "p",
										"value": "ng"
									  },
									  {
										"name": "edition",
										"value": "us"
									  }
									]
								  },
								  {
									"edition": {
									  "id": "AU"
									},
									"paramSet": [
									  {
										"name": "co",
										"value": [
										  "ameliagentleman"
										]
									  },
									  {
										"name": "url",
										"value": "/profile/ameliagentleman"
									  },
									  {
										"name": "ct",
										"value": "tag"
									  },
									  {
										"name": "p",
										"value": "ng"
									  },
									  {
										"name": "edition",
										"value": "au"
									  }
									]
								  },
								  {
									"edition": {
									  "id": "INT"
									},
									"paramSet": [
									  {
										"name": "co",
										"value": [
										  "ameliagentleman"
										]
									  },
									  {
										"name": "url",
										"value": "/profile/ameliagentleman"
									  },
									  {
										"name": "ct",
										"value": "tag"
									  },
									  {
										"name": "edition",
										"value": "int"
									  },
									  {
										"name": "p",
										"value": "ng"
									  }
									]
								  }
								]
							  }
							}
						  },
						  {
							"properties": {
							  "id": "publication/theguardian",
							  "url": "/publication/theguardian",
							  "tagType": "Publication",
							  "sectionId": "theguardian",
							  "sectionName": "From the Guardian",
							  "webTitle": "The Guardian",
							  "webUrl": "https://www.theguardian.com/theguardian/all",
							  "description": "All the latest from the world's leading liberal voice.",
							  "references": [],
							  "commercial": {
								"editionBrandings": [
								  {
									"edition": {
									  "id": "UK"
									}
								  },
								  {
									"edition": {
									  "id": "US"
									}
								  },
								  {
									"edition": {
									  "id": "AU"
									}
								  },
								  {
									"edition": {
									  "id": "INT"
									}
								  }
								],
								"editionAdTargetings": [
								  {
									"edition": {
									  "id": "UK"
									},
									"paramSet": [
									  {
										"name": "edition",
										"value": "uk"
									  },
									  {
										"name": "url",
										"value": "/publication/theguardian"
									  },
									  {
										"name": "ct",
										"value": "tag"
									  },
									  {
										"name": "p",
										"value": "ng"
									  }
									]
								  },
								  {
									"edition": {
									  "id": "US"
									},
									"paramSet": [
									  {
										"name": "url",
										"value": "/publication/theguardian"
									  },
									  {
										"name": "ct",
										"value": "tag"
									  },
									  {
										"name": "p",
										"value": "ng"
									  },
									  {
										"name": "edition",
										"value": "us"
									  }
									]
								  },
								  {
									"edition": {
									  "id": "AU"
									},
									"paramSet": [
									  {
										"name": "url",
										"value": "/publication/theguardian"
									  },
									  {
										"name": "ct",
										"value": "tag"
									  },
									  {
										"name": "p",
										"value": "ng"
									  },
									  {
										"name": "edition",
										"value": "au"
									  }
									]
								  },
								  {
									"edition": {
									  "id": "INT"
									},
									"paramSet": [
									  {
										"name": "url",
										"value": "/publication/theguardian"
									  },
									  {
										"name": "ct",
										"value": "tag"
									  },
									  {
										"name": "edition",
										"value": "int"
									  },
									  {
										"name": "p",
										"value": "ng"
									  }
									]
								  }
								],
								"prebidIndexSites": [
								  {
									"bp": "D",
									"id": 208213
								  },
								  {
									"bp": "M",
									"id": 213487
								  },
								  {
									"bp": "T",
									"id": 215422
								  }
								]
							  }
							}
						  },
						  {
							"properties": {
							  "id": "theguardian/mainsection",
							  "url": "/theguardian/mainsection",
							  "tagType": "NewspaperBook",
							  "sectionId": "news",
							  "sectionName": "News",
							  "webTitle": "Main section",
							  "webUrl": "https://www.theguardian.com/theguardian/mainsection",
							  "references": [],
							  "commercial": {
								"editionBrandings": [
								  {
									"edition": {
									  "id": "UK"
									}
								  },
								  {
									"edition": {
									  "id": "US"
									}
								  },
								  {
									"edition": {
									  "id": "AU"
									}
								  },
								  {
									"edition": {
									  "id": "INT"
									}
								  }
								],
								"editionAdTargetings": [
								  {
									"edition": {
									  "id": "UK"
									},
									"paramSet": [
									  {
										"name": "edition",
										"value": "uk"
									  },
									  {
										"name": "ct",
										"value": "tag"
									  },
									  {
										"name": "p",
										"value": "ng"
									  },
									  {
										"name": "url",
										"value": "/theguardian/mainsection"
									  }
									]
								  },
								  {
									"edition": {
									  "id": "US"
									},
									"paramSet": [
									  {
										"name": "ct",
										"value": "tag"
									  },
									  {
										"name": "p",
										"value": "ng"
									  },
									  {
										"name": "edition",
										"value": "us"
									  },
									  {
										"name": "url",
										"value": "/theguardian/mainsection"
									  }
									]
								  },
								  {
									"edition": {
									  "id": "AU"
									},
									"paramSet": [
									  {
										"name": "ct",
										"value": "tag"
									  },
									  {
										"name": "p",
										"value": "ng"
									  },
									  {
										"name": "edition",
										"value": "au"
									  },
									  {
										"name": "url",
										"value": "/theguardian/mainsection"
									  }
									]
								  },
								  {
									"edition": {
									  "id": "INT"
									},
									"paramSet": [
									  {
										"name": "ct",
										"value": "tag"
									  },
									  {
										"name": "edition",
										"value": "int"
									  },
									  {
										"name": "p",
										"value": "ng"
									  },
									  {
										"name": "url",
										"value": "/theguardian/mainsection"
									  }
									]
								  }
								],
								"prebidIndexSites": [
								  {
									"bp": "D",
									"id": 208234
								  },
								  {
									"bp": "M",
									"id": 213507
								  },
								  {
									"bp": "T",
									"id": 215442
								  }
								]
							  }
							}
						  },
						  {
							"properties": {
							  "id": "theguardian/mainsection/topstories",
							  "url": "/theguardian/mainsection/topstories",
							  "tagType": "NewspaperBookSection",
							  "sectionId": "theguardian",
							  "sectionName": "From the Guardian",
							  "webTitle": "Top stories",
							  "webUrl": "https://www.theguardian.com/theguardian/mainsection/topstories",
							  "references": [],
							  "commercial": {
								"editionBrandings": [
								  {
									"edition": {
									  "id": "UK"
									}
								  },
								  {
									"edition": {
									  "id": "US"
									}
								  },
								  {
									"edition": {
									  "id": "AU"
									}
								  },
								  {
									"edition": {
									  "id": "INT"
									}
								  }
								],
								"editionAdTargetings": [
								  {
									"edition": {
									  "id": "UK"
									},
									"paramSet": [
									  {
										"name": "edition",
										"value": "uk"
									  },
									  {
										"name": "ct",
										"value": "tag"
									  },
									  {
										"name": "p",
										"value": "ng"
									  },
									  {
										"name": "url",
										"value": "/theguardian/mainsection/topstories"
									  }
									]
								  },
								  {
									"edition": {
									  "id": "US"
									},
									"paramSet": [
									  {
										"name": "ct",
										"value": "tag"
									  },
									  {
										"name": "p",
										"value": "ng"
									  },
									  {
										"name": "edition",
										"value": "us"
									  },
									  {
										"name": "url",
										"value": "/theguardian/mainsection/topstories"
									  }
									]
								  },
								  {
									"edition": {
									  "id": "AU"
									},
									"paramSet": [
									  {
										"name": "ct",
										"value": "tag"
									  },
									  {
										"name": "p",
										"value": "ng"
									  },
									  {
										"name": "url",
										"value": "/theguardian/mainsection/topstories"
									  },
									  {
										"name": "edition",
										"value": "au"
									  }
									]
								  },
								  {
									"edition": {
									  "id": "INT"
									},
									"paramSet": [
									  {
										"name": "ct",
										"value": "tag"
									  },
									  {
										"name": "edition",
										"value": "int"
									  },
									  {
										"name": "p",
										"value": "ng"
									  },
									  {
										"name": "url",
										"value": "/theguardian/mainsection/topstories"
									  }
									]
								  }
								],
								"prebidIndexSites": [
								  {
									"bp": "D",
									"id": 208213
								  },
								  {
									"bp": "M",
									"id": 213487
								  },
								  {
									"bp": "T",
									"id": 215422
								  }
								]
							  }
							}
						  },
						  {
							"properties": {
							  "id": "tracking/commissioningdesk/uk-home-news",
							  "url": "/tracking/commissioningdesk/uk-home-news",
							  "tagType": "Tracking",
							  "sectionId": "global",
							  "sectionName": "global",
							  "webTitle": "UK Home News",
							  "webUrl": "https://www.theguardian.com/tracking/commissioningdesk/uk-home-news",
							  "references": [],
							  "commercial": {
								"editionBrandings": [
								  {
									"edition": {
									  "id": "UK"
									}
								  },
								  {
									"edition": {
									  "id": "US"
									}
								  },
								  {
									"edition": {
									  "id": "AU"
									}
								  },
								  {
									"edition": {
									  "id": "INT"
									}
								  }
								],
								"editionAdTargetings": [
								  {
									"edition": {
									  "id": "UK"
									},
									"paramSet": [
									  {
										"name": "edition",
										"value": "uk"
									  },
									  {
										"name": "url",
										"value": "/tracking/commissioningdesk/uk-home-news"
									  },
									  {
										"name": "ct",
										"value": "tag"
									  },
									  {
										"name": "p",
										"value": "ng"
									  }
									]
								  },
								  {
									"edition": {
									  "id": "US"
									},
									"paramSet": [
									  {
										"name": "url",
										"value": "/tracking/commissioningdesk/uk-home-news"
									  },
									  {
										"name": "ct",
										"value": "tag"
									  },
									  {
										"name": "p",
										"value": "ng"
									  },
									  {
										"name": "edition",
										"value": "us"
									  }
									]
								  },
								  {
									"edition": {
									  "id": "AU"
									},
									"paramSet": [
									  {
										"name": "url",
										"value": "/tracking/commissioningdesk/uk-home-news"
									  },
									  {
										"name": "ct",
										"value": "tag"
									  },
									  {
										"name": "p",
										"value": "ng"
									  },
									  {
										"name": "edition",
										"value": "au"
									  }
									]
								  },
								  {
									"edition": {
									  "id": "INT"
									},
									"paramSet": [
									  {
										"name": "url",
										"value": "/tracking/commissioningdesk/uk-home-news"
									  },
									  {
										"name": "ct",
										"value": "tag"
									  },
									  {
										"name": "edition",
										"value": "int"
									  },
									  {
										"name": "p",
										"value": "ng"
									  }
									]
								  }
								]
							  }
							}
						  }
						]
					  }
					},
					"maybeContentId": "uk-news/2022/may/29/racist-legislation-led-windrush-home-office",
					"isLiveBlog": false,
					"isCrossword": false,
					"byline": "Amelia Gentleman",
					"webTitle": "The racist legislation that led to Windrush",
					"linkText": "The racist legislation that led to Windrush",
					"maybeFrontPublicationDate": 1653868799882,
					"webUrl": "https://www.theguardian.com/uk-news/2022/may/29/racist-legislation-led-windrush-home-office",
					"editionBrandings": []
				  },
				  "header": {
					"isVideo": false,
					"isComment": false,
					"isGallery": false,
					"isAudio": false,
					"kicker": {
					  "type": "FreeHtmlKicker",
					  "item": {
						"properties": {
						  "kickerText": "Timeline"
						},
						"body": "Timeline"
					  }
					},
					"headline": "The racist legislation that led to Windrush",
					"url": "/uk-news/2022/may/29/racist-legislation-led-windrush-home-office",
					"hasMainVideoElement": false
				  },
				  "card": {
					"id": "uk-news/2022/may/29/racist-legislation-led-windrush-home-office",
					"cardStyle": {
					  "type": "DefaultCardstyle"
					},
					"webPublicationDateOption": 1653845580000,
					"lastModifiedOption": 1653883983000,
					"trailText": "A suppressed report has concluded the fiasco’s roots lie in immigration legislation from 1950 to 1981",
					"shortUrlPath": "/p/yh2z2",
					"shortUrl": "https://www.theguardian.com/p/yh2z2",
					"group": "0",
					"isLive": false
				  },
				  "discussion": {
					"isCommentable": false,
					"isClosedForComments": true,
					"discussionId": "/p/yh2z2"
				  },
				  "display": {
					"isBoosted": false,
					"showBoostedHeadline": false,
					"showQuotedHeadline": false,
					"imageHide": false,
					"showLivePlayable": false
				  },
				  "format": {
					"design": "ArticleDesign",
					"theme": "NewsPillar",
					"display": "StandardDisplay"
				  },
				  "cardStyle": {
					"type": "DefaultCardstyle"
				  },
				  "type": "SupportingCuratedContent"
				}
			  ],
			  "cardStyle": {
				"type": "DefaultCardstyle"
			  },
			  "type": "CuratedContent"
			},
			{
			  "properties": {
				"isBreaking": false,
				"showMainVideo": false,
				"showKickerTag": false,
				"showByline": false,
				"imageSlideshowReplace": false,
				"maybeContent": {
				  "trail": {
					"trailPicture": {
					  "allImages": [
						{
						  "index": 1,
						  "fields": {
							"displayCredit": "true",
							"source": "PA",
							"photographer": "Yui Mok",
							"isMaster": "true",
							"altText": "a row of for sale sign across a housing terrace",
							"height": "1800",
							"credit": "Photograph: Yui Mok/PA",
							"mediaId": "eb078d033154d87045d2a5a27cb83ef99d582bc5",
							"width": "3000"
						  },
						  "mediaType": "Image",
						  "url": "https://media.guim.co.uk/eb078d033154d87045d2a5a27cb83ef99d582bc5/0_136_3000_1800/master/3000.jpg"
						}
					  ]
					},
					"byline": "Staff and agencies",
					"thumbnailPath": "https://i.guim.co.uk/img/media/eb078d033154d87045d2a5a27cb83ef99d582bc5/0_136_3000_1800/500.jpg?quality=85&auto=format&fit=max&s=45ebb8b6f312dea1d9a506582ad77f65",
					"webPublicationDate": 1653865273000
				  },
				  "metadata": {
					"id": "money/2022/may/30/average-uk-house-price-tops-250000-but-market-starting-to-slow",
					"webTitle": "Average UK house price tops £250,000 but ‘market starting to slow’",
					"webUrl": "https://www.theguardian.com/money/2022/may/30/average-uk-house-price-tops-250000-but-market-starting-to-slow",
					"type": "Article",
					"pillar": {
					  "name": "Lifestyle"
					},
					"sectionId": {
					  "value": "money"
					},
					"designType": "Article",
					"format": {
					  "design": "ArticleDesign",
					  "theme": "LifestylePillar",
					  "display": "StandardDisplay"
					}
				  },
				  "fields": {
					"main": "<figure class=\"element element-image\" data-media-id=\"eb078d033154d87045d2a5a27cb83ef99d582bc5\"> <img src=\"https://media.guim.co.uk/eb078d033154d87045d2a5a27cb83ef99d582bc5/0_136_3000_1800/1000.jpg\" alt=\"a row of for sale sign across a housing terrace\" width=\"1000\" height=\"600\" class=\"gu-image\" /> <figcaption> <span class=\"element-image__caption\">Annual house price inflation was down from 9% in March to 8.4%, with Zoopla forecasting this to fall to 3% by the end of the year.</span> <span class=\"element-image__credit\">Photograph: Yui Mok/PA</span> </figcaption> </figure>",
					"body": "<p>The average price of a UK home has topped £250,000 for the first time, but the proportion of sellers reducing their asking price and the time taken to sell a home have both increased, according to Zoopla’s latest market index.</p><p>The property company, which bases its monthly snapshot on a combination of sold prices, mortgage valuations and data for agreed sales, said the average cost of a home hit £250,200 in April, but that the pace of price growth was slowing.</p>",
					"standfirst": "<p>Proportion of sellers reducing asking price and time taken to sell have both increased, says Zoopla</p>"
				  },
				  "elements": {
					"mediaAtoms": []
				  },
				  "tags": {
					"tags": [
					  {
						"properties": {
						  "id": "money/houseprices",
						  "url": "/money/houseprices",
						  "tagType": "Keyword",
						  "sectionId": "money",
						  "sectionName": "Money",
						  "webTitle": "House prices",
						  "webUrl": "https://www.theguardian.com/money/houseprices",
						  "references": [],
						  "commercial": {
							"editionBrandings": [
							  {
								"edition": {
								  "id": "UK"
								}
							  },
							  {
								"edition": {
								  "id": "US"
								}
							  },
							  {
								"edition": {
								  "id": "AU"
								}
							  },
							  {
								"edition": {
								  "id": "INT"
								}
							  }
							],
							"editionAdTargetings": [
							  {
								"edition": {
								  "id": "UK"
								},
								"paramSet": [
								  {
									"name": "edition",
									"value": "uk"
								  },
								  {
									"name": "ct",
									"value": "tag"
								  },
								  {
									"name": "url",
									"value": "/money/houseprices"
								  },
								  {
									"name": "k",
									"value": [
									  "houseprices"
									]
								  },
								  {
									"name": "p",
									"value": "ng"
								  }
								]
							  },
							  {
								"edition": {
								  "id": "US"
								},
								"paramSet": [
								  {
									"name": "ct",
									"value": "tag"
								  },
								  {
									"name": "url",
									"value": "/money/houseprices"
								  },
								  {
									"name": "k",
									"value": [
									  "houseprices"
									]
								  },
								  {
									"name": "p",
									"value": "ng"
								  },
								  {
									"name": "edition",
									"value": "us"
								  }
								]
							  },
							  {
								"edition": {
								  "id": "AU"
								},
								"paramSet": [
								  {
									"name": "ct",
									"value": "tag"
								  },
								  {
									"name": "url",
									"value": "/money/houseprices"
								  },
								  {
									"name": "k",
									"value": [
									  "houseprices"
									]
								  },
								  {
									"name": "p",
									"value": "ng"
								  },
								  {
									"name": "edition",
									"value": "au"
								  }
								]
							  },
							  {
								"edition": {
								  "id": "INT"
								},
								"paramSet": [
								  {
									"name": "ct",
									"value": "tag"
								  },
								  {
									"name": "edition",
									"value": "int"
								  },
								  {
									"name": "url",
									"value": "/money/houseprices"
								  },
								  {
									"name": "k",
									"value": [
									  "houseprices"
									]
								  },
								  {
									"name": "p",
									"value": "ng"
								  }
								]
							  }
							],
							"prebidIndexSites": [
							  {
								"bp": "D",
								"id": 208236
							  },
							  {
								"bp": "M",
								"id": 213509
							  },
							  {
								"bp": "T",
								"id": 215444
							  }
							]
						  }
						}
					  },
					  {
						"properties": {
						  "id": "business/housingmarket",
						  "url": "/business/housingmarket",
						  "tagType": "Keyword",
						  "sectionId": "business",
						  "sectionName": "Business",
						  "webTitle": "Housing market",
						  "webUrl": "https://www.theguardian.com/business/housingmarket",
						  "references": [],
						  "commercial": {
							"editionBrandings": [
							  {
								"edition": {
								  "id": "UK"
								}
							  },
							  {
								"edition": {
								  "id": "US"
								}
							  },
							  {
								"edition": {
								  "id": "AU"
								}
							  },
							  {
								"edition": {
								  "id": "INT"
								}
							  }
							],
							"editionAdTargetings": [
							  {
								"edition": {
								  "id": "UK"
								},
								"paramSet": [
								  {
									"name": "edition",
									"value": "uk"
								  },
								  {
									"name": "k",
									"value": [
									  "housingmarket"
									]
								  },
								  {
									"name": "ct",
									"value": "tag"
								  },
								  {
									"name": "p",
									"value": "ng"
								  },
								  {
									"name": "url",
									"value": "/business/housingmarket"
								  }
								]
							  },
							  {
								"edition": {
								  "id": "US"
								},
								"paramSet": [
								  {
									"name": "k",
									"value": [
									  "housingmarket"
									]
								  },
								  {
									"name": "ct",
									"value": "tag"
								  },
								  {
									"name": "p",
									"value": "ng"
								  },
								  {
									"name": "edition",
									"value": "us"
								  },
								  {
									"name": "url",
									"value": "/business/housingmarket"
								  }
								]
							  },
							  {
								"edition": {
								  "id": "AU"
								},
								"paramSet": [
								  {
									"name": "k",
									"value": [
									  "housingmarket"
									]
								  },
								  {
									"name": "ct",
									"value": "tag"
								  },
								  {
									"name": "p",
									"value": "ng"
								  },
								  {
									"name": "url",
									"value": "/business/housingmarket"
								  },
								  {
									"name": "edition",
									"value": "au"
								  }
								]
							  },
							  {
								"edition": {
								  "id": "INT"
								},
								"paramSet": [
								  {
									"name": "k",
									"value": [
									  "housingmarket"
									]
								  },
								  {
									"name": "ct",
									"value": "tag"
								  },
								  {
									"name": "edition",
									"value": "int"
								  },
								  {
									"name": "p",
									"value": "ng"
								  },
								  {
									"name": "url",
									"value": "/business/housingmarket"
								  }
								]
							  }
							],
							"prebidIndexSites": [
							  {
								"bp": "D",
								"id": 208278
							  },
							  {
								"bp": "M",
								"id": 213548
							  },
							  {
								"bp": "T",
								"id": 215483
							  }
							]
						  }
						}
					  },
					  {
						"properties": {
						  "id": "money/property",
						  "url": "/money/property",
						  "tagType": "Keyword",
						  "sectionId": "money",
						  "sectionName": "Money",
						  "webTitle": "Property",
						  "webUrl": "https://www.theguardian.com/money/property",
						  "references": [],
						  "commercial": {
							"editionBrandings": [
							  {
								"edition": {
								  "id": "UK"
								}
							  },
							  {
								"edition": {
								  "id": "US"
								}
							  },
							  {
								"edition": {
								  "id": "AU"
								}
							  },
							  {
								"edition": {
								  "id": "INT"
								}
							  }
							],
							"editionAdTargetings": [
							  {
								"edition": {
								  "id": "UK"
								},
								"paramSet": [
								  {
									"name": "edition",
									"value": "uk"
								  },
								  {
									"name": "ct",
									"value": "tag"
								  },
								  {
									"name": "k",
									"value": [
									  "property"
									]
								  },
								  {
									"name": "p",
									"value": "ng"
								  },
								  {
									"name": "url",
									"value": "/money/property"
								  }
								]
							  },
							  {
								"edition": {
								  "id": "US"
								},
								"paramSet": [
								  {
									"name": "ct",
									"value": "tag"
								  },
								  {
									"name": "k",
									"value": [
									  "property"
									]
								  },
								  {
									"name": "p",
									"value": "ng"
								  },
								  {
									"name": "edition",
									"value": "us"
								  },
								  {
									"name": "url",
									"value": "/money/property"
								  }
								]
							  },
							  {
								"edition": {
								  "id": "AU"
								},
								"paramSet": [
								  {
									"name": "ct",
									"value": "tag"
								  },
								  {
									"name": "k",
									"value": [
									  "property"
									]
								  },
								  {
									"name": "p",
									"value": "ng"
								  },
								  {
									"name": "url",
									"value": "/money/property"
								  },
								  {
									"name": "edition",
									"value": "au"
								  }
								]
							  },
							  {
								"edition": {
								  "id": "INT"
								},
								"paramSet": [
								  {
									"name": "ct",
									"value": "tag"
								  },
								  {
									"name": "k",
									"value": [
									  "property"
									]
								  },
								  {
									"name": "edition",
									"value": "int"
								  },
								  {
									"name": "p",
									"value": "ng"
								  },
								  {
									"name": "url",
									"value": "/money/property"
								  }
								]
							  }
							],
							"prebidIndexSites": [
							  {
								"bp": "D",
								"id": 208236
							  },
							  {
								"bp": "M",
								"id": 213509
							  },
							  {
								"bp": "T",
								"id": 215444
							  }
							]
						  }
						}
					  },
					  {
						"properties": {
						  "id": "money/money",
						  "url": "/money/money",
						  "tagType": "Keyword",
						  "sectionId": "money",
						  "sectionName": "Money",
						  "webTitle": "Money",
						  "webUrl": "https://www.theguardian.com/money/money",
						  "references": [],
						  "commercial": {
							"editionBrandings": [
							  {
								"edition": {
								  "id": "UK"
								}
							  },
							  {
								"edition": {
								  "id": "US"
								}
							  },
							  {
								"edition": {
								  "id": "AU"
								}
							  },
							  {
								"edition": {
								  "id": "INT"
								}
							  }
							],
							"editionAdTargetings": [
							  {
								"edition": {
								  "id": "UK"
								},
								"paramSet": [
								  {
									"name": "edition",
									"value": "uk"
								  },
								  {
									"name": "ct",
									"value": "tag"
								  },
								  {
									"name": "url",
									"value": "/money/money"
								  },
								  {
									"name": "k",
									"value": [
									  "money"
									]
								  },
								  {
									"name": "p",
									"value": "ng"
								  }
								]
							  },
							  {
								"edition": {
								  "id": "US"
								},
								"paramSet": [
								  {
									"name": "ct",
									"value": "tag"
								  },
								  {
									"name": "url",
									"value": "/money/money"
								  },
								  {
									"name": "k",
									"value": [
									  "money"
									]
								  },
								  {
									"name": "p",
									"value": "ng"
								  },
								  {
									"name": "edition",
									"value": "us"
								  }
								]
							  },
							  {
								"edition": {
								  "id": "AU"
								},
								"paramSet": [
								  {
									"name": "ct",
									"value": "tag"
								  },
								  {
									"name": "url",
									"value": "/money/money"
								  },
								  {
									"name": "k",
									"value": [
									  "money"
									]
								  },
								  {
									"name": "p",
									"value": "ng"
								  },
								  {
									"name": "edition",
									"value": "au"
								  }
								]
							  },
							  {
								"edition": {
								  "id": "INT"
								},
								"paramSet": [
								  {
									"name": "ct",
									"value": "tag"
								  },
								  {
									"name": "edition",
									"value": "int"
								  },
								  {
									"name": "url",
									"value": "/money/money"
								  },
								  {
									"name": "k",
									"value": [
									  "money"
									]
								  },
								  {
									"name": "p",
									"value": "ng"
								  }
								]
							  }
							],
							"prebidIndexSites": [
							  {
								"bp": "D",
								"id": 208236
							  },
							  {
								"bp": "M",
								"id": 213509
							  },
							  {
								"bp": "T",
								"id": 215444
							  }
							]
						  }
						}
					  },
					  {
						"properties": {
						  "id": "business/business",
						  "url": "/business/business",
						  "tagType": "Keyword",
						  "sectionId": "business",
						  "sectionName": "Business",
						  "webTitle": "Business",
						  "webUrl": "https://www.theguardian.com/business/business",
						  "references": [],
						  "commercial": {
							"editionBrandings": [
							  {
								"edition": {
								  "id": "UK"
								}
							  },
							  {
								"edition": {
								  "id": "US"
								}
							  },
							  {
								"edition": {
								  "id": "AU"
								}
							  },
							  {
								"edition": {
								  "id": "INT"
								}
							  }
							],
							"editionAdTargetings": [
							  {
								"edition": {
								  "id": "UK"
								},
								"paramSet": [
								  {
									"name": "edition",
									"value": "uk"
								  },
								  {
									"name": "k",
									"value": [
									  "business"
									]
								  },
								  {
									"name": "ct",
									"value": "tag"
								  },
								  {
									"name": "p",
									"value": "ng"
								  },
								  {
									"name": "url",
									"value": "/business/business"
								  }
								]
							  },
							  {
								"edition": {
								  "id": "US"
								},
								"paramSet": [
								  {
									"name": "k",
									"value": [
									  "business"
									]
								  },
								  {
									"name": "ct",
									"value": "tag"
								  },
								  {
									"name": "p",
									"value": "ng"
								  },
								  {
									"name": "edition",
									"value": "us"
								  },
								  {
									"name": "url",
									"value": "/business/business"
								  }
								]
							  },
							  {
								"edition": {
								  "id": "AU"
								},
								"paramSet": [
								  {
									"name": "k",
									"value": [
									  "business"
									]
								  },
								  {
									"name": "ct",
									"value": "tag"
								  },
								  {
									"name": "p",
									"value": "ng"
								  },
								  {
									"name": "edition",
									"value": "au"
								  },
								  {
									"name": "url",
									"value": "/business/business"
								  }
								]
							  },
							  {
								"edition": {
								  "id": "INT"
								},
								"paramSet": [
								  {
									"name": "k",
									"value": [
									  "business"
									]
								  },
								  {
									"name": "ct",
									"value": "tag"
								  },
								  {
									"name": "edition",
									"value": "int"
								  },
								  {
									"name": "p",
									"value": "ng"
								  },
								  {
									"name": "url",
									"value": "/business/business"
								  }
								]
							  }
							],
							"prebidIndexSites": [
							  {
								"bp": "D",
								"id": 208278
							  },
							  {
								"bp": "M",
								"id": 213548
							  },
							  {
								"bp": "T",
								"id": 215483
							  }
							]
						  }
						}
					  },
					  {
						"properties": {
						  "id": "business/realestate",
						  "url": "/business/realestate",
						  "tagType": "Keyword",
						  "sectionId": "business",
						  "sectionName": "Business",
						  "webTitle": "Real estate",
						  "webUrl": "https://www.theguardian.com/business/realestate",
						  "references": [],
						  "commercial": {
							"editionBrandings": [
							  {
								"edition": {
								  "id": "UK"
								}
							  },
							  {
								"edition": {
								  "id": "US"
								}
							  },
							  {
								"edition": {
								  "id": "AU"
								}
							  },
							  {
								"edition": {
								  "id": "INT"
								}
							  }
							],
							"editionAdTargetings": [
							  {
								"edition": {
								  "id": "UK"
								},
								"paramSet": [
								  {
									"name": "edition",
									"value": "uk"
								  },
								  {
									"name": "url",
									"value": "/business/realestate"
								  },
								  {
									"name": "k",
									"value": [
									  "realestate"
									]
								  },
								  {
									"name": "ct",
									"value": "tag"
								  },
								  {
									"name": "p",
									"value": "ng"
								  }
								]
							  },
							  {
								"edition": {
								  "id": "US"
								},
								"paramSet": [
								  {
									"name": "url",
									"value": "/business/realestate"
								  },
								  {
									"name": "k",
									"value": [
									  "realestate"
									]
								  },
								  {
									"name": "ct",
									"value": "tag"
								  },
								  {
									"name": "p",
									"value": "ng"
								  },
								  {
									"name": "edition",
									"value": "us"
								  }
								]
							  },
							  {
								"edition": {
								  "id": "AU"
								},
								"paramSet": [
								  {
									"name": "url",
									"value": "/business/realestate"
								  },
								  {
									"name": "k",
									"value": [
									  "realestate"
									]
								  },
								  {
									"name": "ct",
									"value": "tag"
								  },
								  {
									"name": "p",
									"value": "ng"
								  },
								  {
									"name": "edition",
									"value": "au"
								  }
								]
							  },
							  {
								"edition": {
								  "id": "INT"
								},
								"paramSet": [
								  {
									"name": "url",
									"value": "/business/realestate"
								  },
								  {
									"name": "k",
									"value": [
									  "realestate"
									]
								  },
								  {
									"name": "ct",
									"value": "tag"
								  },
								  {
									"name": "edition",
									"value": "int"
								  },
								  {
									"name": "p",
									"value": "ng"
								  }
								]
							  }
							],
							"prebidIndexSites": [
							  {
								"bp": "D",
								"id": 208278
							  },
							  {
								"bp": "M",
								"id": 213548
							  },
							  {
								"bp": "T",
								"id": 215483
							  }
							]
						  }
						}
					  },
					  {
						"properties": {
						  "id": "type/article",
						  "url": "/type/article",
						  "tagType": "Type",
						  "sectionId": "global",
						  "sectionName": "global",
						  "webTitle": "Article",
						  "webUrl": "https://www.theguardian.com/articles",
						  "references": [],
						  "commercial": {
							"editionBrandings": [
							  {
								"edition": {
								  "id": "UK"
								}
							  },
							  {
								"edition": {
								  "id": "US"
								}
							  },
							  {
								"edition": {
								  "id": "AU"
								}
							  },
							  {
								"edition": {
								  "id": "INT"
								}
							  }
							],
							"editionAdTargetings": [
							  {
								"edition": {
								  "id": "UK"
								},
								"paramSet": [
								  {
									"name": "edition",
									"value": "uk"
								  },
								  {
									"name": "ct",
									"value": "tag"
								  },
								  {
									"name": "url",
									"value": "/type/article"
								  },
								  {
									"name": "p",
									"value": "ng"
								  }
								]
							  },
							  {
								"edition": {
								  "id": "US"
								},
								"paramSet": [
								  {
									"name": "ct",
									"value": "tag"
								  },
								  {
									"name": "url",
									"value": "/type/article"
								  },
								  {
									"name": "p",
									"value": "ng"
								  },
								  {
									"name": "edition",
									"value": "us"
								  }
								]
							  },
							  {
								"edition": {
								  "id": "AU"
								},
								"paramSet": [
								  {
									"name": "ct",
									"value": "tag"
								  },
								  {
									"name": "url",
									"value": "/type/article"
								  },
								  {
									"name": "p",
									"value": "ng"
								  },
								  {
									"name": "edition",
									"value": "au"
								  }
								]
							  },
							  {
								"edition": {
								  "id": "INT"
								},
								"paramSet": [
								  {
									"name": "ct",
									"value": "tag"
								  },
								  {
									"name": "url",
									"value": "/type/article"
								  },
								  {
									"name": "edition",
									"value": "int"
								  },
								  {
									"name": "p",
									"value": "ng"
								  }
								]
							  }
							]
						  }
						}
					  },
					  {
						"properties": {
						  "id": "tone/news",
						  "url": "/tone/news",
						  "tagType": "Tone",
						  "sectionId": "global",
						  "sectionName": "global",
						  "webTitle": "News",
						  "webUrl": "https://www.theguardian.com/tone/news",
						  "references": [],
						  "commercial": {
							"editionBrandings": [
							  {
								"edition": {
								  "id": "UK"
								}
							  },
							  {
								"edition": {
								  "id": "US"
								}
							  },
							  {
								"edition": {
								  "id": "AU"
								}
							  },
							  {
								"edition": {
								  "id": "INT"
								}
							  }
							],
							"editionAdTargetings": [
							  {
								"edition": {
								  "id": "UK"
								},
								"paramSet": [
								  {
									"name": "edition",
									"value": "uk"
								  },
								  {
									"name": "ct",
									"value": "tag"
								  },
								  {
									"name": "tn",
									"value": [
									  "news"
									]
								  },
								  {
									"name": "p",
									"value": "ng"
								  },
								  {
									"name": "url",
									"value": "/tone/news"
								  }
								]
							  },
							  {
								"edition": {
								  "id": "US"
								},
								"paramSet": [
								  {
									"name": "ct",
									"value": "tag"
								  },
								  {
									"name": "tn",
									"value": [
									  "news"
									]
								  },
								  {
									"name": "p",
									"value": "ng"
								  },
								  {
									"name": "url",
									"value": "/tone/news"
								  },
								  {
									"name": "edition",
									"value": "us"
								  }
								]
							  },
							  {
								"edition": {
								  "id": "AU"
								},
								"paramSet": [
								  {
									"name": "ct",
									"value": "tag"
								  },
								  {
									"name": "tn",
									"value": [
									  "news"
									]
								  },
								  {
									"name": "p",
									"value": "ng"
								  },
								  {
									"name": "url",
									"value": "/tone/news"
								  },
								  {
									"name": "edition",
									"value": "au"
								  }
								]
							  },
							  {
								"edition": {
								  "id": "INT"
								},
								"paramSet": [
								  {
									"name": "ct",
									"value": "tag"
								  },
								  {
									"name": "tn",
									"value": [
									  "news"
									]
								  },
								  {
									"name": "edition",
									"value": "int"
								  },
								  {
									"name": "p",
									"value": "ng"
								  },
								  {
									"name": "url",
									"value": "/tone/news"
								  }
								]
							  }
							]
						  }
						}
					  },
					  {
						"properties": {
						  "id": "publication/theguardian",
						  "url": "/publication/theguardian",
						  "tagType": "Publication",
						  "sectionId": "theguardian",
						  "sectionName": "From the Guardian",
						  "webTitle": "The Guardian",
						  "webUrl": "https://www.theguardian.com/theguardian/all",
						  "description": "All the latest from the world's leading liberal voice.",
						  "references": [],
						  "commercial": {
							"editionBrandings": [
							  {
								"edition": {
								  "id": "UK"
								}
							  },
							  {
								"edition": {
								  "id": "US"
								}
							  },
							  {
								"edition": {
								  "id": "AU"
								}
							  },
							  {
								"edition": {
								  "id": "INT"
								}
							  }
							],
							"editionAdTargetings": [
							  {
								"edition": {
								  "id": "UK"
								},
								"paramSet": [
								  {
									"name": "edition",
									"value": "uk"
								  },
								  {
									"name": "url",
									"value": "/publication/theguardian"
								  },
								  {
									"name": "ct",
									"value": "tag"
								  },
								  {
									"name": "p",
									"value": "ng"
								  }
								]
							  },
							  {
								"edition": {
								  "id": "US"
								},
								"paramSet": [
								  {
									"name": "url",
									"value": "/publication/theguardian"
								  },
								  {
									"name": "ct",
									"value": "tag"
								  },
								  {
									"name": "p",
									"value": "ng"
								  },
								  {
									"name": "edition",
									"value": "us"
								  }
								]
							  },
							  {
								"edition": {
								  "id": "AU"
								},
								"paramSet": [
								  {
									"name": "url",
									"value": "/publication/theguardian"
								  },
								  {
									"name": "ct",
									"value": "tag"
								  },
								  {
									"name": "p",
									"value": "ng"
								  },
								  {
									"name": "edition",
									"value": "au"
								  }
								]
							  },
							  {
								"edition": {
								  "id": "INT"
								},
								"paramSet": [
								  {
									"name": "url",
									"value": "/publication/theguardian"
								  },
								  {
									"name": "ct",
									"value": "tag"
								  },
								  {
									"name": "edition",
									"value": "int"
								  },
								  {
									"name": "p",
									"value": "ng"
								  }
								]
							  }
							],
							"prebidIndexSites": [
							  {
								"bp": "D",
								"id": 208213
							  },
							  {
								"bp": "M",
								"id": 213487
							  },
							  {
								"bp": "T",
								"id": 215422
							  }
							]
						  }
						}
					  },
					  {
						"properties": {
						  "id": "theguardian/mainsection",
						  "url": "/theguardian/mainsection",
						  "tagType": "NewspaperBook",
						  "sectionId": "news",
						  "sectionName": "News",
						  "webTitle": "Main section",
						  "webUrl": "https://www.theguardian.com/theguardian/mainsection",
						  "references": [],
						  "commercial": {
							"editionBrandings": [
							  {
								"edition": {
								  "id": "UK"
								}
							  },
							  {
								"edition": {
								  "id": "US"
								}
							  },
							  {
								"edition": {
								  "id": "AU"
								}
							  },
							  {
								"edition": {
								  "id": "INT"
								}
							  }
							],
							"editionAdTargetings": [
							  {
								"edition": {
								  "id": "UK"
								},
								"paramSet": [
								  {
									"name": "edition",
									"value": "uk"
								  },
								  {
									"name": "ct",
									"value": "tag"
								  },
								  {
									"name": "p",
									"value": "ng"
								  },
								  {
									"name": "url",
									"value": "/theguardian/mainsection"
								  }
								]
							  },
							  {
								"edition": {
								  "id": "US"
								},
								"paramSet": [
								  {
									"name": "ct",
									"value": "tag"
								  },
								  {
									"name": "p",
									"value": "ng"
								  },
								  {
									"name": "edition",
									"value": "us"
								  },
								  {
									"name": "url",
									"value": "/theguardian/mainsection"
								  }
								]
							  },
							  {
								"edition": {
								  "id": "AU"
								},
								"paramSet": [
								  {
									"name": "ct",
									"value": "tag"
								  },
								  {
									"name": "p",
									"value": "ng"
								  },
								  {
									"name": "edition",
									"value": "au"
								  },
								  {
									"name": "url",
									"value": "/theguardian/mainsection"
								  }
								]
							  },
							  {
								"edition": {
								  "id": "INT"
								},
								"paramSet": [
								  {
									"name": "ct",
									"value": "tag"
								  },
								  {
									"name": "edition",
									"value": "int"
								  },
								  {
									"name": "p",
									"value": "ng"
								  },
								  {
									"name": "url",
									"value": "/theguardian/mainsection"
								  }
								]
							  }
							],
							"prebidIndexSites": [
							  {
								"bp": "D",
								"id": 208234
							  },
							  {
								"bp": "M",
								"id": 213507
							  },
							  {
								"bp": "T",
								"id": 215442
							  }
							]
						  }
						}
					  },
					  {
						"properties": {
						  "id": "theguardian/mainsection/financial3",
						  "url": "/theguardian/mainsection/financial3",
						  "tagType": "NewspaperBookSection",
						  "sectionId": "business",
						  "sectionName": "Business",
						  "webTitle": "Financial",
						  "webUrl": "https://www.theguardian.com/theguardian/mainsection/financial3",
						  "references": [],
						  "commercial": {
							"editionBrandings": [
							  {
								"edition": {
								  "id": "UK"
								}
							  },
							  {
								"edition": {
								  "id": "US"
								}
							  },
							  {
								"edition": {
								  "id": "AU"
								}
							  },
							  {
								"edition": {
								  "id": "INT"
								}
							  }
							],
							"editionAdTargetings": [
							  {
								"edition": {
								  "id": "UK"
								},
								"paramSet": [
								  {
									"name": "edition",
									"value": "uk"
								  },
								  {
									"name": "ct",
									"value": "tag"
								  },
								  {
									"name": "p",
									"value": "ng"
								  },
								  {
									"name": "url",
									"value": "/theguardian/mainsection/financial3"
								  }
								]
							  },
							  {
								"edition": {
								  "id": "US"
								},
								"paramSet": [
								  {
									"name": "ct",
									"value": "tag"
								  },
								  {
									"name": "p",
									"value": "ng"
								  },
								  {
									"name": "url",
									"value": "/theguardian/mainsection/financial3"
								  },
								  {
									"name": "edition",
									"value": "us"
								  }
								]
							  },
							  {
								"edition": {
								  "id": "AU"
								},
								"paramSet": [
								  {
									"name": "ct",
									"value": "tag"
								  },
								  {
									"name": "p",
									"value": "ng"
								  },
								  {
									"name": "url",
									"value": "/theguardian/mainsection/financial3"
								  },
								  {
									"name": "edition",
									"value": "au"
								  }
								]
							  },
							  {
								"edition": {
								  "id": "INT"
								},
								"paramSet": [
								  {
									"name": "ct",
									"value": "tag"
								  },
								  {
									"name": "edition",
									"value": "int"
								  },
								  {
									"name": "p",
									"value": "ng"
								  },
								  {
									"name": "url",
									"value": "/theguardian/mainsection/financial3"
								  }
								]
							  }
							],
							"prebidIndexSites": [
							  {
								"bp": "D",
								"id": 208278
							  },
							  {
								"bp": "M",
								"id": 213548
							  },
							  {
								"bp": "T",
								"id": 215483
							  }
							]
						  }
						}
					  },
					  {
						"properties": {
						  "id": "tracking/commissioningdesk/uk-money",
						  "url": "/tracking/commissioningdesk/uk-money",
						  "tagType": "Tracking",
						  "sectionId": "global",
						  "sectionName": "global",
						  "webTitle": "UK Money",
						  "webUrl": "https://www.theguardian.com/tracking/commissioningdesk/uk-money",
						  "references": [],
						  "commercial": {
							"editionBrandings": [
							  {
								"edition": {
								  "id": "UK"
								}
							  },
							  {
								"edition": {
								  "id": "US"
								}
							  },
							  {
								"edition": {
								  "id": "AU"
								}
							  },
							  {
								"edition": {
								  "id": "INT"
								}
							  }
							],
							"editionAdTargetings": [
							  {
								"edition": {
								  "id": "UK"
								},
								"paramSet": [
								  {
									"name": "edition",
									"value": "uk"
								  },
								  {
									"name": "ct",
									"value": "tag"
								  },
								  {
									"name": "url",
									"value": "/tracking/commissioningdesk/uk-money"
								  },
								  {
									"name": "p",
									"value": "ng"
								  }
								]
							  },
							  {
								"edition": {
								  "id": "US"
								},
								"paramSet": [
								  {
									"name": "ct",
									"value": "tag"
								  },
								  {
									"name": "url",
									"value": "/tracking/commissioningdesk/uk-money"
								  },
								  {
									"name": "p",
									"value": "ng"
								  },
								  {
									"name": "edition",
									"value": "us"
								  }
								]
							  },
							  {
								"edition": {
								  "id": "AU"
								},
								"paramSet": [
								  {
									"name": "ct",
									"value": "tag"
								  },
								  {
									"name": "url",
									"value": "/tracking/commissioningdesk/uk-money"
								  },
								  {
									"name": "p",
									"value": "ng"
								  },
								  {
									"name": "edition",
									"value": "au"
								  }
								]
							  },
							  {
								"edition": {
								  "id": "INT"
								},
								"paramSet": [
								  {
									"name": "ct",
									"value": "tag"
								  },
								  {
									"name": "url",
									"value": "/tracking/commissioningdesk/uk-money"
								  },
								  {
									"name": "edition",
									"value": "int"
								  },
								  {
									"name": "p",
									"value": "ng"
								  }
								]
							  }
							]
						  }
						}
					  }
					]
				  }
				},
				"maybeContentId": "money/2022/may/30/average-uk-house-price-tops-250000-but-market-starting-to-slow",
				"isLiveBlog": false,
				"isCrossword": false,
				"byline": "Staff and agencies",
				"webTitle": "Average UK house price tops £250,000 but ‘market starting to slow’",
				"linkText": "Average UK house price tops £250,000 but ‘market starting to slow’",
				"maybeFrontPublicationDate": 1653900425488,
				"webUrl": "https://www.theguardian.com/money/2022/may/30/average-uk-house-price-tops-250000-but-market-starting-to-slow",
				"editionBrandings": [
				  {
					"edition": {
					  "id": "UK"
					}
				  },
				  {
					"edition": {
					  "id": "US"
					}
				  },
				  {
					"edition": {
					  "id": "AU"
					}
				  },
				  {
					"edition": {
					  "id": "INT"
					}
				  }
				]
			  },
			  "header": {
				"isVideo": false,
				"isComment": false,
				"isGallery": false,
				"isAudio": false,
				"kicker": {
				  "type": "FreeHtmlKicker",
				  "item": {
					"properties": {
					  "kickerText": "Property"
					},
					"body": "Property"
				  }
				},
				"headline": "Average UK house price tops £250,000 but ‘market starting to slow’",
				"url": "/money/2022/may/30/average-uk-house-price-tops-250000-but-market-starting-to-slow",
				"hasMainVideoElement": false
			  },
			  "card": {
				"id": "money/2022/may/30/average-uk-house-price-tops-250000-but-market-starting-to-slow",
				"cardStyle": {
				  "type": "DefaultCardstyle"
				},
				"webPublicationDateOption": 1653865273000,
				"lastModifiedOption": 1653912097000,
				"trailText": "Proportion of sellers reducing asking price and time taken to sell have both risen, says Zoopla",
				"shortUrlPath": "/p/yh2vc",
				"shortUrl": "https://www.theguardian.com/p/yh2vc",
				"group": "0",
				"isLive": false
			  },
			  "discussion": {
				"isCommentable": false,
				"isClosedForComments": true,
				"discussionId": "/p/yh2vc"
			  },
			  "display": {
				"isBoosted": false,
				"showBoostedHeadline": false,
				"showQuotedHeadline": false,
				"imageHide": false,
				"showLivePlayable": false
			  },
			  "format": {
				"design": "ArticleDesign",
				"theme": "LifestylePillar",
				"display": "StandardDisplay"
			  },
			  "enriched": {},
			  "supportingContent": [],
			  "cardStyle": {
				"type": "DefaultCardstyle"
			  },
			  "type": "CuratedContent"
			},
			{
			  "properties": {
				"isBreaking": false,
				"showMainVideo": false,
				"showKickerTag": false,
				"showByline": false,
				"imageSlideshowReplace": false,
				"maybeContent": {
				  "trail": {
					"trailPicture": {
					  "allImages": [
						{
						  "index": 1,
						  "fields": {
							"displayCredit": "true",
							"source": "AP",
							"photographer": "Matt Dunham",
							"isMaster": "true",
							"altText": "Union flags above the south hall of the Covent Garden district of London.",
							"height": "5090",
							"credit": "Photograph: Matt Dunham/AP",
							"mediaId": "a05c1fd453fa126435f4e5dafb4db7677025eea0",
							"width": "8483"
						  },
						  "mediaType": "Image",
						  "url": "https://media.guim.co.uk/a05c1fd453fa126435f4e5dafb4db7677025eea0/0_0_8483_5090/master/8483.jpg"
						}
					  ]
					},
					"byline": "Joanna Partridge",
					"thumbnailPath": "https://i.guim.co.uk/img/media/a05c1fd453fa126435f4e5dafb4db7677025eea0/0_0_8483_5090/500.jpg?quality=85&auto=format&fit=max&s=5f2ef94bc0b4f705618a7197f8aa2969",
					"webPublicationDate": 1653865273000
				  },
				  "metadata": {
					"id": "business/2022/may/30/most-small-firms-fear-long-term-fallout-uk-cost-living-crisis",
					"webTitle": "Most small firms fear long-term fallout from UK’s cost of living crisis",
					"webUrl": "https://www.theguardian.com/business/2022/may/30/most-small-firms-fear-long-term-fallout-uk-cost-living-crisis",
					"type": "Article",
					"pillar": {
					  "name": "News"
					},
					"sectionId": {
					  "value": "business"
					},
					"designType": "Article",
					"format": {
					  "design": "ArticleDesign",
					  "theme": "NewsPillar",
					  "display": "StandardDisplay"
					}
				  },
				  "fields": {
					"main": "<figure class=\"element element-image\" data-media-id=\"a05c1fd453fa126435f4e5dafb4db7677025eea0\"> <img src=\"https://media.guim.co.uk/a05c1fd453fa126435f4e5dafb4db7677025eea0/0_0_8483_5090/1000.jpg\" alt=\"Union flags above the south hall of the Covent Garden district of London.\" width=\"1000\" height=\"600\" class=\"gu-image\" /> <figcaption> <span class=\"element-image__caption\">Businesses across the UK are hoping for a four-day bank holiday boost.</span> <span class=\"element-image__credit\">Photograph: Matt Dunham/AP</span> </figcaption> </figure>",
					"body": "<p>Three-quarters of small and medium-sized companies are worried about the long-term impact the <a href=\"https://www.theguardian.com/business/cost-of-living-crisis\">cost of living crisis</a>, soaring energy bills and rising inflation will have on their business, a survey has found.</p><p>Just over half (51%) of SMEs said they were concerned that rocketing prices would dent consumer spending, in response to Barclays’ SME Barometer, a quarterly survey of business sentiment conducted for the bank.</p>",
					"standfirst": "<p>Half worry rocketing prices will cut spending, while three in four fear long-term damage to businesses</p>"
				  },
				  "elements": {
					"mediaAtoms": []
				  },
				  "tags": {
					"tags": [
					  {
						"properties": {
						  "id": "business/cost-of-living-crisis",
						  "url": "/business/cost-of-living-crisis",
						  "tagType": "Keyword",
						  "sectionId": "business",
						  "sectionName": "Business",
						  "webTitle": "Cost of living crisis",
						  "webUrl": "https://www.theguardian.com/business/cost-of-living-crisis",
						  "references": [],
						  "commercial": {
							"editionBrandings": [
							  {
								"edition": {
								  "id": "UK"
								}
							  },
							  {
								"edition": {
								  "id": "US"
								}
							  },
							  {
								"edition": {
								  "id": "AU"
								}
							  },
							  {
								"edition": {
								  "id": "INT"
								}
							  }
							],
							"editionAdTargetings": [
							  {
								"edition": {
								  "id": "UK"
								},
								"paramSet": [
								  {
									"name": "url",
									"value": "/business/cost-of-living-crisis"
								  },
								  {
									"name": "edition",
									"value": "uk"
								  },
								  {
									"name": "ct",
									"value": "tag"
								  },
								  {
									"name": "p",
									"value": "ng"
								  },
								  {
									"name": "k",
									"value": [
									  "cost-of-living-crisis"
									]
								  }
								]
							  },
							  {
								"edition": {
								  "id": "US"
								},
								"paramSet": [
								  {
									"name": "url",
									"value": "/business/cost-of-living-crisis"
								  },
								  {
									"name": "ct",
									"value": "tag"
								  },
								  {
									"name": "p",
									"value": "ng"
								  },
								  {
									"name": "edition",
									"value": "us"
								  },
								  {
									"name": "k",
									"value": [
									  "cost-of-living-crisis"
									]
								  }
								]
							  },
							  {
								"edition": {
								  "id": "AU"
								},
								"paramSet": [
								  {
									"name": "url",
									"value": "/business/cost-of-living-crisis"
								  },
								  {
									"name": "ct",
									"value": "tag"
								  },
								  {
									"name": "p",
									"value": "ng"
								  },
								  {
									"name": "k",
									"value": [
									  "cost-of-living-crisis"
									]
								  },
								  {
									"name": "edition",
									"value": "au"
								  }
								]
							  },
							  {
								"edition": {
								  "id": "INT"
								},
								"paramSet": [
								  {
									"name": "url",
									"value": "/business/cost-of-living-crisis"
								  },
								  {
									"name": "ct",
									"value": "tag"
								  },
								  {
									"name": "edition",
									"value": "int"
								  },
								  {
									"name": "p",
									"value": "ng"
								  },
								  {
									"name": "k",
									"value": [
									  "cost-of-living-crisis"
									]
								  }
								]
							  }
							],
							"prebidIndexSites": [
							  {
								"bp": "D",
								"id": 208278
							  },
							  {
								"bp": "M",
								"id": 213548
							  },
							  {
								"bp": "T",
								"id": 215483
							  }
							]
						  }
						}
					  },
					  {
						"properties": {
						  "id": "business/small-business",
						  "url": "/business/small-business",
						  "tagType": "Keyword",
						  "sectionId": "business",
						  "sectionName": "Business",
						  "webTitle": "Small business",
						  "webUrl": "https://www.theguardian.com/business/small-business",
						  "references": [],
						  "commercial": {
							"editionBrandings": [
							  {
								"edition": {
								  "id": "UK"
								}
							  },
							  {
								"edition": {
								  "id": "US"
								}
							  },
							  {
								"edition": {
								  "id": "AU"
								}
							  },
							  {
								"edition": {
								  "id": "INT"
								}
							  }
							],
							"editionAdTargetings": [
							  {
								"edition": {
								  "id": "UK"
								},
								"paramSet": [
								  {
									"name": "edition",
									"value": "uk"
								  },
								  {
									"name": "url",
									"value": "/business/small-business"
								  },
								  {
									"name": "k",
									"value": [
									  "small-business"
									]
								  },
								  {
									"name": "ct",
									"value": "tag"
								  },
								  {
									"name": "p",
									"value": "ng"
								  }
								]
							  },
							  {
								"edition": {
								  "id": "US"
								},
								"paramSet": [
								  {
									"name": "url",
									"value": "/business/small-business"
								  },
								  {
									"name": "k",
									"value": [
									  "small-business"
									]
								  },
								  {
									"name": "ct",
									"value": "tag"
								  },
								  {
									"name": "p",
									"value": "ng"
								  },
								  {
									"name": "edition",
									"value": "us"
								  }
								]
							  },
							  {
								"edition": {
								  "id": "AU"
								},
								"paramSet": [
								  {
									"name": "url",
									"value": "/business/small-business"
								  },
								  {
									"name": "k",
									"value": [
									  "small-business"
									]
								  },
								  {
									"name": "ct",
									"value": "tag"
								  },
								  {
									"name": "p",
									"value": "ng"
								  },
								  {
									"name": "edition",
									"value": "au"
								  }
								]
							  },
							  {
								"edition": {
								  "id": "INT"
								},
								"paramSet": [
								  {
									"name": "url",
									"value": "/business/small-business"
								  },
								  {
									"name": "k",
									"value": [
									  "small-business"
									]
								  },
								  {
									"name": "ct",
									"value": "tag"
								  },
								  {
									"name": "edition",
									"value": "int"
								  },
								  {
									"name": "p",
									"value": "ng"
								  }
								]
							  }
							],
							"prebidIndexSites": [
							  {
								"bp": "D",
								"id": 208278
							  },
							  {
								"bp": "M",
								"id": 213548
							  },
							  {
								"bp": "T",
								"id": 215483
							  }
							]
						  }
						}
					  },
					  {
						"properties": {
						  "id": "business/business",
						  "url": "/business/business",
						  "tagType": "Keyword",
						  "sectionId": "business",
						  "sectionName": "Business",
						  "webTitle": "Business",
						  "webUrl": "https://www.theguardian.com/business/business",
						  "references": [],
						  "commercial": {
							"editionBrandings": [
							  {
								"edition": {
								  "id": "UK"
								}
							  },
							  {
								"edition": {
								  "id": "US"
								}
							  },
							  {
								"edition": {
								  "id": "AU"
								}
							  },
							  {
								"edition": {
								  "id": "INT"
								}
							  }
							],
							"editionAdTargetings": [
							  {
								"edition": {
								  "id": "UK"
								},
								"paramSet": [
								  {
									"name": "edition",
									"value": "uk"
								  },
								  {
									"name": "k",
									"value": [
									  "business"
									]
								  },
								  {
									"name": "ct",
									"value": "tag"
								  },
								  {
									"name": "p",
									"value": "ng"
								  },
								  {
									"name": "url",
									"value": "/business/business"
								  }
								]
							  },
							  {
								"edition": {
								  "id": "US"
								},
								"paramSet": [
								  {
									"name": "k",
									"value": [
									  "business"
									]
								  },
								  {
									"name": "ct",
									"value": "tag"
								  },
								  {
									"name": "p",
									"value": "ng"
								  },
								  {
									"name": "edition",
									"value": "us"
								  },
								  {
									"name": "url",
									"value": "/business/business"
								  }
								]
							  },
							  {
								"edition": {
								  "id": "AU"
								},
								"paramSet": [
								  {
									"name": "k",
									"value": [
									  "business"
									]
								  },
								  {
									"name": "ct",
									"value": "tag"
								  },
								  {
									"name": "p",
									"value": "ng"
								  },
								  {
									"name": "edition",
									"value": "au"
								  },
								  {
									"name": "url",
									"value": "/business/business"
								  }
								]
							  },
							  {
								"edition": {
								  "id": "INT"
								},
								"paramSet": [
								  {
									"name": "k",
									"value": [
									  "business"
									]
								  },
								  {
									"name": "ct",
									"value": "tag"
								  },
								  {
									"name": "edition",
									"value": "int"
								  },
								  {
									"name": "p",
									"value": "ng"
								  },
								  {
									"name": "url",
									"value": "/business/business"
								  }
								]
							  }
							],
							"prebidIndexSites": [
							  {
								"bp": "D",
								"id": 208278
							  },
							  {
								"bp": "M",
								"id": 213548
							  },
							  {
								"bp": "T",
								"id": 215483
							  }
							]
						  }
						}
					  },
					  {
						"properties": {
						  "id": "business/inflation",
						  "url": "/business/inflation",
						  "tagType": "Keyword",
						  "sectionId": "business",
						  "sectionName": "Business",
						  "webTitle": "Inflation",
						  "webUrl": "https://www.theguardian.com/business/inflation",
						  "references": [],
						  "commercial": {
							"editionBrandings": [
							  {
								"edition": {
								  "id": "UK"
								}
							  },
							  {
								"edition": {
								  "id": "US"
								}
							  },
							  {
								"edition": {
								  "id": "AU"
								}
							  },
							  {
								"edition": {
								  "id": "INT"
								}
							  }
							],
							"editionAdTargetings": [
							  {
								"edition": {
								  "id": "UK"
								},
								"paramSet": [
								  {
									"name": "url",
									"value": "/business/inflation"
								  },
								  {
									"name": "edition",
									"value": "uk"
								  },
								  {
									"name": "ct",
									"value": "tag"
								  },
								  {
									"name": "k",
									"value": [
									  "inflation"
									]
								  },
								  {
									"name": "p",
									"value": "ng"
								  }
								]
							  },
							  {
								"edition": {
								  "id": "US"
								},
								"paramSet": [
								  {
									"name": "url",
									"value": "/business/inflation"
								  },
								  {
									"name": "ct",
									"value": "tag"
								  },
								  {
									"name": "k",
									"value": [
									  "inflation"
									]
								  },
								  {
									"name": "p",
									"value": "ng"
								  },
								  {
									"name": "edition",
									"value": "us"
								  }
								]
							  },
							  {
								"edition": {
								  "id": "AU"
								},
								"paramSet": [
								  {
									"name": "url",
									"value": "/business/inflation"
								  },
								  {
									"name": "ct",
									"value": "tag"
								  },
								  {
									"name": "k",
									"value": [
									  "inflation"
									]
								  },
								  {
									"name": "p",
									"value": "ng"
								  },
								  {
									"name": "edition",
									"value": "au"
								  }
								]
							  },
							  {
								"edition": {
								  "id": "INT"
								},
								"paramSet": [
								  {
									"name": "url",
									"value": "/business/inflation"
								  },
								  {
									"name": "ct",
									"value": "tag"
								  },
								  {
									"name": "edition",
									"value": "int"
								  },
								  {
									"name": "k",
									"value": [
									  "inflation"
									]
								  },
								  {
									"name": "p",
									"value": "ng"
								  }
								]
							  }
							],
							"prebidIndexSites": [
							  {
								"bp": "D",
								"id": 208278
							  },
							  {
								"bp": "M",
								"id": 213548
							  },
							  {
								"bp": "T",
								"id": 215483
							  }
							]
						  }
						}
					  },
					  {
						"properties": {
						  "id": "business/supply-chain-crisis",
						  "url": "/business/supply-chain-crisis",
						  "tagType": "Keyword",
						  "sectionId": "business",
						  "sectionName": "Business",
						  "webTitle": "Supply chain crisis",
						  "webUrl": "https://www.theguardian.com/business/supply-chain-crisis",
						  "references": [],
						  "commercial": {
							"editionBrandings": [
							  {
								"edition": {
								  "id": "UK"
								}
							  },
							  {
								"edition": {
								  "id": "US"
								}
							  },
							  {
								"edition": {
								  "id": "AU"
								}
							  },
							  {
								"edition": {
								  "id": "INT"
								}
							  }
							],
							"editionAdTargetings": [
							  {
								"edition": {
								  "id": "UK"
								},
								"paramSet": [
								  {
									"name": "edition",
									"value": "uk"
								  },
								  {
									"name": "url",
									"value": "/business/supply-chain-crisis"
								  },
								  {
									"name": "ct",
									"value": "tag"
								  },
								  {
									"name": "p",
									"value": "ng"
								  },
								  {
									"name": "k",
									"value": [
									  "supply-chain-crisis"
									]
								  }
								]
							  },
							  {
								"edition": {
								  "id": "US"
								},
								"paramSet": [
								  {
									"name": "url",
									"value": "/business/supply-chain-crisis"
								  },
								  {
									"name": "ct",
									"value": "tag"
								  },
								  {
									"name": "p",
									"value": "ng"
								  },
								  {
									"name": "edition",
									"value": "us"
								  },
								  {
									"name": "k",
									"value": [
									  "supply-chain-crisis"
									]
								  }
								]
							  },
							  {
								"edition": {
								  "id": "AU"
								},
								"paramSet": [
								  {
									"name": "url",
									"value": "/business/supply-chain-crisis"
								  },
								  {
									"name": "ct",
									"value": "tag"
								  },
								  {
									"name": "p",
									"value": "ng"
								  },
								  {
									"name": "k",
									"value": [
									  "supply-chain-crisis"
									]
								  },
								  {
									"name": "edition",
									"value": "au"
								  }
								]
							  },
							  {
								"edition": {
								  "id": "INT"
								},
								"paramSet": [
								  {
									"name": "url",
									"value": "/business/supply-chain-crisis"
								  },
								  {
									"name": "ct",
									"value": "tag"
								  },
								  {
									"name": "edition",
									"value": "int"
								  },
								  {
									"name": "p",
									"value": "ng"
								  },
								  {
									"name": "k",
									"value": [
									  "supply-chain-crisis"
									]
								  }
								]
							  }
							],
							"prebidIndexSites": [
							  {
								"bp": "D",
								"id": 208278
							  },
							  {
								"bp": "M",
								"id": 213548
							  },
							  {
								"bp": "T",
								"id": 215483
							  }
							]
						  }
						}
					  },
					  {
						"properties": {
						  "id": "money/energy",
						  "url": "/money/energy",
						  "tagType": "Keyword",
						  "sectionId": "money",
						  "sectionName": "Money",
						  "webTitle": "Energy bills",
						  "webUrl": "https://www.theguardian.com/money/energy",
						  "references": [],
						  "commercial": {
							"editionBrandings": [
							  {
								"edition": {
								  "id": "UK"
								}
							  },
							  {
								"edition": {
								  "id": "US"
								}
							  },
							  {
								"edition": {
								  "id": "AU"
								}
							  },
							  {
								"edition": {
								  "id": "INT"
								}
							  }
							],
							"editionAdTargetings": [
							  {
								"edition": {
								  "id": "UK"
								},
								"paramSet": [
								  {
									"name": "edition",
									"value": "uk"
								  },
								  {
									"name": "url",
									"value": "/money/energy"
								  },
								  {
									"name": "ct",
									"value": "tag"
								  },
								  {
									"name": "p",
									"value": "ng"
								  },
								  {
									"name": "k",
									"value": [
									  "energy"
									]
								  }
								]
							  },
							  {
								"edition": {
								  "id": "US"
								},
								"paramSet": [
								  {
									"name": "url",
									"value": "/money/energy"
								  },
								  {
									"name": "ct",
									"value": "tag"
								  },
								  {
									"name": "p",
									"value": "ng"
								  },
								  {
									"name": "edition",
									"value": "us"
								  },
								  {
									"name": "k",
									"value": [
									  "energy"
									]
								  }
								]
							  },
							  {
								"edition": {
								  "id": "AU"
								},
								"paramSet": [
								  {
									"name": "url",
									"value": "/money/energy"
								  },
								  {
									"name": "ct",
									"value": "tag"
								  },
								  {
									"name": "p",
									"value": "ng"
								  },
								  {
									"name": "k",
									"value": [
									  "energy"
									]
								  },
								  {
									"name": "edition",
									"value": "au"
								  }
								]
							  },
							  {
								"edition": {
								  "id": "INT"
								},
								"paramSet": [
								  {
									"name": "url",
									"value": "/money/energy"
								  },
								  {
									"name": "ct",
									"value": "tag"
								  },
								  {
									"name": "edition",
									"value": "int"
								  },
								  {
									"name": "p",
									"value": "ng"
								  },
								  {
									"name": "k",
									"value": [
									  "energy"
									]
								  }
								]
							  }
							],
							"prebidIndexSites": [
							  {
								"bp": "D",
								"id": 208236
							  },
							  {
								"bp": "M",
								"id": 213509
							  },
							  {
								"bp": "T",
								"id": 215444
							  }
							]
						  }
						}
					  },
					  {
						"properties": {
						  "id": "business/economics",
						  "url": "/business/economics",
						  "tagType": "Keyword",
						  "sectionId": "business",
						  "sectionName": "Business",
						  "webTitle": "Economics",
						  "webUrl": "https://www.theguardian.com/business/economics",
						  "references": [],
						  "commercial": {
							"editionBrandings": [
							  {
								"edition": {
								  "id": "UK"
								}
							  },
							  {
								"edition": {
								  "id": "US"
								}
							  },
							  {
								"edition": {
								  "id": "AU"
								}
							  },
							  {
								"edition": {
								  "id": "INT"
								}
							  }
							],
							"editionAdTargetings": [
							  {
								"edition": {
								  "id": "UK"
								},
								"paramSet": [
								  {
									"name": "edition",
									"value": "uk"
								  },
								  {
									"name": "k",
									"value": [
									  "economics"
									]
								  },
								  {
									"name": "url",
									"value": "/business/economics"
								  },
								  {
									"name": "ct",
									"value": "tag"
								  },
								  {
									"name": "p",
									"value": "ng"
								  }
								]
							  },
							  {
								"edition": {
								  "id": "US"
								},
								"paramSet": [
								  {
									"name": "k",
									"value": [
									  "economics"
									]
								  },
								  {
									"name": "url",
									"value": "/business/economics"
								  },
								  {
									"name": "ct",
									"value": "tag"
								  },
								  {
									"name": "p",
									"value": "ng"
								  },
								  {
									"name": "edition",
									"value": "us"
								  }
								]
							  },
							  {
								"edition": {
								  "id": "AU"
								},
								"paramSet": [
								  {
									"name": "k",
									"value": [
									  "economics"
									]
								  },
								  {
									"name": "url",
									"value": "/business/economics"
								  },
								  {
									"name": "ct",
									"value": "tag"
								  },
								  {
									"name": "p",
									"value": "ng"
								  },
								  {
									"name": "edition",
									"value": "au"
								  }
								]
							  },
							  {
								"edition": {
								  "id": "INT"
								},
								"paramSet": [
								  {
									"name": "k",
									"value": [
									  "economics"
									]
								  },
								  {
									"name": "url",
									"value": "/business/economics"
								  },
								  {
									"name": "ct",
									"value": "tag"
								  },
								  {
									"name": "edition",
									"value": "int"
								  },
								  {
									"name": "p",
									"value": "ng"
								  }
								]
							  }
							],
							"prebidIndexSites": [
							  {
								"bp": "D",
								"id": 208278
							  },
							  {
								"bp": "M",
								"id": 213548
							  },
							  {
								"bp": "T",
								"id": 215483
							  }
							]
						  }
						}
					  },
					  {
						"properties": {
						  "id": "money/household-bills",
						  "url": "/money/household-bills",
						  "tagType": "Keyword",
						  "sectionId": "money",
						  "sectionName": "Money",
						  "webTitle": "Household bills",
						  "webUrl": "https://www.theguardian.com/money/household-bills",
						  "references": [],
						  "commercial": {
							"editionBrandings": [
							  {
								"edition": {
								  "id": "UK"
								}
							  },
							  {
								"edition": {
								  "id": "US"
								}
							  },
							  {
								"edition": {
								  "id": "AU"
								}
							  },
							  {
								"edition": {
								  "id": "INT"
								}
							  }
							],
							"editionAdTargetings": [
							  {
								"edition": {
								  "id": "UK"
								},
								"paramSet": [
								  {
									"name": "edition",
									"value": "uk"
								  },
								  {
									"name": "k",
									"value": [
									  "household-bills"
									]
								  },
								  {
									"name": "ct",
									"value": "tag"
								  },
								  {
									"name": "url",
									"value": "/money/household-bills"
								  },
								  {
									"name": "p",
									"value": "ng"
								  }
								]
							  },
							  {
								"edition": {
								  "id": "US"
								},
								"paramSet": [
								  {
									"name": "k",
									"value": [
									  "household-bills"
									]
								  },
								  {
									"name": "ct",
									"value": "tag"
								  },
								  {
									"name": "url",
									"value": "/money/household-bills"
								  },
								  {
									"name": "p",
									"value": "ng"
								  },
								  {
									"name": "edition",
									"value": "us"
								  }
								]
							  },
							  {
								"edition": {
								  "id": "AU"
								},
								"paramSet": [
								  {
									"name": "k",
									"value": [
									  "household-bills"
									]
								  },
								  {
									"name": "ct",
									"value": "tag"
								  },
								  {
									"name": "url",
									"value": "/money/household-bills"
								  },
								  {
									"name": "p",
									"value": "ng"
								  },
								  {
									"name": "edition",
									"value": "au"
								  }
								]
							  },
							  {
								"edition": {
								  "id": "INT"
								},
								"paramSet": [
								  {
									"name": "k",
									"value": [
									  "household-bills"
									]
								  },
								  {
									"name": "ct",
									"value": "tag"
								  },
								  {
									"name": "url",
									"value": "/money/household-bills"
								  },
								  {
									"name": "edition",
									"value": "int"
								  },
								  {
									"name": "p",
									"value": "ng"
								  }
								]
							  }
							],
							"prebidIndexSites": [
							  {
								"bp": "D",
								"id": 208236
							  },
							  {
								"bp": "M",
								"id": 213509
							  },
							  {
								"bp": "T",
								"id": 215444
							  }
							]
						  }
						}
					  },
					  {
						"properties": {
						  "id": "money/money",
						  "url": "/money/money",
						  "tagType": "Keyword",
						  "sectionId": "money",
						  "sectionName": "Money",
						  "webTitle": "Money",
						  "webUrl": "https://www.theguardian.com/money/money",
						  "references": [],
						  "commercial": {
							"editionBrandings": [
							  {
								"edition": {
								  "id": "UK"
								}
							  },
							  {
								"edition": {
								  "id": "US"
								}
							  },
							  {
								"edition": {
								  "id": "AU"
								}
							  },
							  {
								"edition": {
								  "id": "INT"
								}
							  }
							],
							"editionAdTargetings": [
							  {
								"edition": {
								  "id": "UK"
								},
								"paramSet": [
								  {
									"name": "edition",
									"value": "uk"
								  },
								  {
									"name": "ct",
									"value": "tag"
								  },
								  {
									"name": "url",
									"value": "/money/money"
								  },
								  {
									"name": "k",
									"value": [
									  "money"
									]
								  },
								  {
									"name": "p",
									"value": "ng"
								  }
								]
							  },
							  {
								"edition": {
								  "id": "US"
								},
								"paramSet": [
								  {
									"name": "ct",
									"value": "tag"
								  },
								  {
									"name": "url",
									"value": "/money/money"
								  },
								  {
									"name": "k",
									"value": [
									  "money"
									]
								  },
								  {
									"name": "p",
									"value": "ng"
								  },
								  {
									"name": "edition",
									"value": "us"
								  }
								]
							  },
							  {
								"edition": {
								  "id": "AU"
								},
								"paramSet": [
								  {
									"name": "ct",
									"value": "tag"
								  },
								  {
									"name": "url",
									"value": "/money/money"
								  },
								  {
									"name": "k",
									"value": [
									  "money"
									]
								  },
								  {
									"name": "p",
									"value": "ng"
								  },
								  {
									"name": "edition",
									"value": "au"
								  }
								]
							  },
							  {
								"edition": {
								  "id": "INT"
								},
								"paramSet": [
								  {
									"name": "ct",
									"value": "tag"
								  },
								  {
									"name": "edition",
									"value": "int"
								  },
								  {
									"name": "url",
									"value": "/money/money"
								  },
								  {
									"name": "k",
									"value": [
									  "money"
									]
								  },
								  {
									"name": "p",
									"value": "ng"
								  }
								]
							  }
							],
							"prebidIndexSites": [
							  {
								"bp": "D",
								"id": 208236
							  },
							  {
								"bp": "M",
								"id": 213509
							  },
							  {
								"bp": "T",
								"id": 215444
							  }
							]
						  }
						}
					  },
					  {
						"properties": {
						  "id": "uk/uk",
						  "url": "/uk/uk",
						  "tagType": "Keyword",
						  "sectionId": "uk-news",
						  "sectionName": "UK news",
						  "webTitle": "UK news",
						  "webUrl": "https://www.theguardian.com/uk/uk",
						  "references": [],
						  "commercial": {
							"editionBrandings": [
							  {
								"edition": {
								  "id": "UK"
								}
							  },
							  {
								"edition": {
								  "id": "US"
								}
							  },
							  {
								"edition": {
								  "id": "AU"
								}
							  },
							  {
								"edition": {
								  "id": "INT"
								}
							  }
							],
							"editionAdTargetings": [
							  {
								"edition": {
								  "id": "UK"
								},
								"paramSet": [
								  {
									"name": "k",
									"value": [
									  "uk/uk"
									]
								  },
								  {
									"name": "edition",
									"value": "uk"
								  },
								  {
									"name": "ct",
									"value": "tag"
								  },
								  {
									"name": "url",
									"value": "/uk/uk"
								  },
								  {
									"name": "p",
									"value": "ng"
								  }
								]
							  },
							  {
								"edition": {
								  "id": "US"
								},
								"paramSet": [
								  {
									"name": "k",
									"value": [
									  "uk/uk"
									]
								  },
								  {
									"name": "ct",
									"value": "tag"
								  },
								  {
									"name": "url",
									"value": "/uk/uk"
								  },
								  {
									"name": "p",
									"value": "ng"
								  },
								  {
									"name": "edition",
									"value": "us"
								  }
								]
							  },
							  {
								"edition": {
								  "id": "AU"
								},
								"paramSet": [
								  {
									"name": "k",
									"value": [
									  "uk/uk"
									]
								  },
								  {
									"name": "ct",
									"value": "tag"
								  },
								  {
									"name": "url",
									"value": "/uk/uk"
								  },
								  {
									"name": "p",
									"value": "ng"
								  },
								  {
									"name": "edition",
									"value": "au"
								  }
								]
							  },
							  {
								"edition": {
								  "id": "INT"
								},
								"paramSet": [
								  {
									"name": "k",
									"value": [
									  "uk/uk"
									]
								  },
								  {
									"name": "ct",
									"value": "tag"
								  },
								  {
									"name": "edition",
									"value": "int"
								  },
								  {
									"name": "url",
									"value": "/uk/uk"
								  },
								  {
									"name": "p",
									"value": "ng"
								  }
								]
							  }
							],
							"prebidIndexSites": [
							  {
								"bp": "D",
								"id": 208208
							  },
							  {
								"bp": "M",
								"id": 213482
							  },
							  {
								"bp": "T",
								"id": 215417
							  }
							]
						  }
						}
					  },
					  {
						"properties": {
						  "id": "business/consumerspending",
						  "url": "/business/consumerspending",
						  "tagType": "Keyword",
						  "sectionId": "business",
						  "sectionName": "Business",
						  "webTitle": "Consumer spending",
						  "webUrl": "https://www.theguardian.com/business/consumerspending",
						  "references": [],
						  "commercial": {
							"editionBrandings": [
							  {
								"edition": {
								  "id": "UK"
								}
							  },
							  {
								"edition": {
								  "id": "US"
								}
							  },
							  {
								"edition": {
								  "id": "AU"
								}
							  },
							  {
								"edition": {
								  "id": "INT"
								}
							  }
							],
							"editionAdTargetings": [
							  {
								"edition": {
								  "id": "UK"
								},
								"paramSet": [
								  {
									"name": "edition",
									"value": "uk"
								  },
								  {
									"name": "k",
									"value": [
									  "consumerspending"
									]
								  },
								  {
									"name": "ct",
									"value": "tag"
								  },
								  {
									"name": "url",
									"value": "/business/consumerspending"
								  },
								  {
									"name": "p",
									"value": "ng"
								  }
								]
							  },
							  {
								"edition": {
								  "id": "US"
								},
								"paramSet": [
								  {
									"name": "k",
									"value": [
									  "consumerspending"
									]
								  },
								  {
									"name": "ct",
									"value": "tag"
								  },
								  {
									"name": "url",
									"value": "/business/consumerspending"
								  },
								  {
									"name": "p",
									"value": "ng"
								  },
								  {
									"name": "edition",
									"value": "us"
								  }
								]
							  },
							  {
								"edition": {
								  "id": "AU"
								},
								"paramSet": [
								  {
									"name": "k",
									"value": [
									  "consumerspending"
									]
								  },
								  {
									"name": "ct",
									"value": "tag"
								  },
								  {
									"name": "url",
									"value": "/business/consumerspending"
								  },
								  {
									"name": "p",
									"value": "ng"
								  },
								  {
									"name": "edition",
									"value": "au"
								  }
								]
							  },
							  {
								"edition": {
								  "id": "INT"
								},
								"paramSet": [
								  {
									"name": "k",
									"value": [
									  "consumerspending"
									]
								  },
								  {
									"name": "ct",
									"value": "tag"
								  },
								  {
									"name": "edition",
									"value": "int"
								  },
								  {
									"name": "url",
									"value": "/business/consumerspending"
								  },
								  {
									"name": "p",
									"value": "ng"
								  }
								]
							  }
							],
							"prebidIndexSites": [
							  {
								"bp": "D",
								"id": 208278
							  },
							  {
								"bp": "M",
								"id": 213548
							  },
							  {
								"bp": "T",
								"id": 215483
							  }
							]
						  }
						}
					  },
					  {
						"properties": {
						  "id": "money/consumer-affairs",
						  "url": "/money/consumer-affairs",
						  "tagType": "Keyword",
						  "sectionId": "money",
						  "sectionName": "Money",
						  "webTitle": "Consumer affairs",
						  "webUrl": "https://www.theguardian.com/money/consumer-affairs",
						  "references": [],
						  "commercial": {
							"editionBrandings": [
							  {
								"edition": {
								  "id": "UK"
								}
							  },
							  {
								"edition": {
								  "id": "US"
								}
							  },
							  {
								"edition": {
								  "id": "AU"
								}
							  },
							  {
								"edition": {
								  "id": "INT"
								}
							  }
							],
							"editionAdTargetings": [
							  {
								"edition": {
								  "id": "UK"
								},
								"paramSet": [
								  {
									"name": "edition",
									"value": "uk"
								  },
								  {
									"name": "k",
									"value": [
									  "consumer-affairs"
									]
								  },
								  {
									"name": "url",
									"value": "/money/consumer-affairs"
								  },
								  {
									"name": "ct",
									"value": "tag"
								  },
								  {
									"name": "p",
									"value": "ng"
								  }
								]
							  },
							  {
								"edition": {
								  "id": "US"
								},
								"paramSet": [
								  {
									"name": "k",
									"value": [
									  "consumer-affairs"
									]
								  },
								  {
									"name": "url",
									"value": "/money/consumer-affairs"
								  },
								  {
									"name": "ct",
									"value": "tag"
								  },
								  {
									"name": "p",
									"value": "ng"
								  },
								  {
									"name": "edition",
									"value": "us"
								  }
								]
							  },
							  {
								"edition": {
								  "id": "AU"
								},
								"paramSet": [
								  {
									"name": "k",
									"value": [
									  "consumer-affairs"
									]
								  },
								  {
									"name": "url",
									"value": "/money/consumer-affairs"
								  },
								  {
									"name": "ct",
									"value": "tag"
								  },
								  {
									"name": "p",
									"value": "ng"
								  },
								  {
									"name": "edition",
									"value": "au"
								  }
								]
							  },
							  {
								"edition": {
								  "id": "INT"
								},
								"paramSet": [
								  {
									"name": "k",
									"value": [
									  "consumer-affairs"
									]
								  },
								  {
									"name": "url",
									"value": "/money/consumer-affairs"
								  },
								  {
									"name": "ct",
									"value": "tag"
								  },
								  {
									"name": "edition",
									"value": "int"
								  },
								  {
									"name": "p",
									"value": "ng"
								  }
								]
							  }
							],
							"prebidIndexSites": [
							  {
								"bp": "D",
								"id": 208236
							  },
							  {
								"bp": "M",
								"id": 213509
							  },
							  {
								"bp": "T",
								"id": 215444
							  }
							]
						  }
						}
					  },
					  {
						"properties": {
						  "id": "type/article",
						  "url": "/type/article",
						  "tagType": "Type",
						  "sectionId": "global",
						  "sectionName": "global",
						  "webTitle": "Article",
						  "webUrl": "https://www.theguardian.com/articles",
						  "references": [],
						  "commercial": {
							"editionBrandings": [
							  {
								"edition": {
								  "id": "UK"
								}
							  },
							  {
								"edition": {
								  "id": "US"
								}
							  },
							  {
								"edition": {
								  "id": "AU"
								}
							  },
							  {
								"edition": {
								  "id": "INT"
								}
							  }
							],
							"editionAdTargetings": [
							  {
								"edition": {
								  "id": "UK"
								},
								"paramSet": [
								  {
									"name": "edition",
									"value": "uk"
								  },
								  {
									"name": "ct",
									"value": "tag"
								  },
								  {
									"name": "url",
									"value": "/type/article"
								  },
								  {
									"name": "p",
									"value": "ng"
								  }
								]
							  },
							  {
								"edition": {
								  "id": "US"
								},
								"paramSet": [
								  {
									"name": "ct",
									"value": "tag"
								  },
								  {
									"name": "url",
									"value": "/type/article"
								  },
								  {
									"name": "p",
									"value": "ng"
								  },
								  {
									"name": "edition",
									"value": "us"
								  }
								]
							  },
							  {
								"edition": {
								  "id": "AU"
								},
								"paramSet": [
								  {
									"name": "ct",
									"value": "tag"
								  },
								  {
									"name": "url",
									"value": "/type/article"
								  },
								  {
									"name": "p",
									"value": "ng"
								  },
								  {
									"name": "edition",
									"value": "au"
								  }
								]
							  },
							  {
								"edition": {
								  "id": "INT"
								},
								"paramSet": [
								  {
									"name": "ct",
									"value": "tag"
								  },
								  {
									"name": "url",
									"value": "/type/article"
								  },
								  {
									"name": "edition",
									"value": "int"
								  },
								  {
									"name": "p",
									"value": "ng"
								  }
								]
							  }
							]
						  }
						}
					  },
					  {
						"properties": {
						  "id": "tone/news",
						  "url": "/tone/news",
						  "tagType": "Tone",
						  "sectionId": "global",
						  "sectionName": "global",
						  "webTitle": "News",
						  "webUrl": "https://www.theguardian.com/tone/news",
						  "references": [],
						  "commercial": {
							"editionBrandings": [
							  {
								"edition": {
								  "id": "UK"
								}
							  },
							  {
								"edition": {
								  "id": "US"
								}
							  },
							  {
								"edition": {
								  "id": "AU"
								}
							  },
							  {
								"edition": {
								  "id": "INT"
								}
							  }
							],
							"editionAdTargetings": [
							  {
								"edition": {
								  "id": "UK"
								},
								"paramSet": [
								  {
									"name": "edition",
									"value": "uk"
								  },
								  {
									"name": "ct",
									"value": "tag"
								  },
								  {
									"name": "tn",
									"value": [
									  "news"
									]
								  },
								  {
									"name": "p",
									"value": "ng"
								  },
								  {
									"name": "url",
									"value": "/tone/news"
								  }
								]
							  },
							  {
								"edition": {
								  "id": "US"
								},
								"paramSet": [
								  {
									"name": "ct",
									"value": "tag"
								  },
								  {
									"name": "tn",
									"value": [
									  "news"
									]
								  },
								  {
									"name": "p",
									"value": "ng"
								  },
								  {
									"name": "url",
									"value": "/tone/news"
								  },
								  {
									"name": "edition",
									"value": "us"
								  }
								]
							  },
							  {
								"edition": {
								  "id": "AU"
								},
								"paramSet": [
								  {
									"name": "ct",
									"value": "tag"
								  },
								  {
									"name": "tn",
									"value": [
									  "news"
									]
								  },
								  {
									"name": "p",
									"value": "ng"
								  },
								  {
									"name": "url",
									"value": "/tone/news"
								  },
								  {
									"name": "edition",
									"value": "au"
								  }
								]
							  },
							  {
								"edition": {
								  "id": "INT"
								},
								"paramSet": [
								  {
									"name": "ct",
									"value": "tag"
								  },
								  {
									"name": "tn",
									"value": [
									  "news"
									]
								  },
								  {
									"name": "edition",
									"value": "int"
								  },
								  {
									"name": "p",
									"value": "ng"
								  },
								  {
									"name": "url",
									"value": "/tone/news"
								  }
								]
							  }
							]
						  }
						}
					  },
					  {
						"properties": {
						  "id": "profile/joanna-partridge",
						  "url": "/profile/joanna-partridge",
						  "tagType": "Contributor",
						  "sectionId": "global",
						  "sectionName": "global",
						  "webTitle": "Joanna Partridge",
						  "webUrl": "https://www.theguardian.com/profile/joanna-partridge",
						  "bio": "<p>Joanna Partridge is a Guardian business reporter</p>",
						  "contributorLargeImagePath": "https://uploads.guim.co.uk/2020/08/24/Joanna_Partridge,_L.png",
						  "bylineImageUrl": "https://uploads.guim.co.uk/2020/08/24/Joanna_Partridge.jpg",
						  "references": [],
						  "commercial": {
							"editionBrandings": [
							  {
								"edition": {
								  "id": "UK"
								}
							  },
							  {
								"edition": {
								  "id": "US"
								}
							  },
							  {
								"edition": {
								  "id": "AU"
								}
							  },
							  {
								"edition": {
								  "id": "INT"
								}
							  }
							],
							"editionAdTargetings": [
							  {
								"edition": {
								  "id": "UK"
								},
								"paramSet": [
								  {
									"name": "edition",
									"value": "uk"
								  },
								  {
									"name": "co",
									"value": [
									  "joanna-partridge"
									]
								  },
								  {
									"name": "ct",
									"value": "tag"
								  },
								  {
									"name": "url",
									"value": "/profile/joanna-partridge"
								  },
								  {
									"name": "p",
									"value": "ng"
								  }
								]
							  },
							  {
								"edition": {
								  "id": "US"
								},
								"paramSet": [
								  {
									"name": "co",
									"value": [
									  "joanna-partridge"
									]
								  },
								  {
									"name": "ct",
									"value": "tag"
								  },
								  {
									"name": "url",
									"value": "/profile/joanna-partridge"
								  },
								  {
									"name": "p",
									"value": "ng"
								  },
								  {
									"name": "edition",
									"value": "us"
								  }
								]
							  },
							  {
								"edition": {
								  "id": "AU"
								},
								"paramSet": [
								  {
									"name": "co",
									"value": [
									  "joanna-partridge"
									]
								  },
								  {
									"name": "ct",
									"value": "tag"
								  },
								  {
									"name": "url",
									"value": "/profile/joanna-partridge"
								  },
								  {
									"name": "p",
									"value": "ng"
								  },
								  {
									"name": "edition",
									"value": "au"
								  }
								]
							  },
							  {
								"edition": {
								  "id": "INT"
								},
								"paramSet": [
								  {
									"name": "co",
									"value": [
									  "joanna-partridge"
									]
								  },
								  {
									"name": "ct",
									"value": "tag"
								  },
								  {
									"name": "url",
									"value": "/profile/joanna-partridge"
								  },
								  {
									"name": "edition",
									"value": "int"
								  },
								  {
									"name": "p",
									"value": "ng"
								  }
								]
							  }
							]
						  }
						}
					  },
					  {
						"properties": {
						  "id": "publication/theguardian",
						  "url": "/publication/theguardian",
						  "tagType": "Publication",
						  "sectionId": "theguardian",
						  "sectionName": "From the Guardian",
						  "webTitle": "The Guardian",
						  "webUrl": "https://www.theguardian.com/theguardian/all",
						  "description": "All the latest from the world's leading liberal voice.",
						  "references": [],
						  "commercial": {
							"editionBrandings": [
							  {
								"edition": {
								  "id": "UK"
								}
							  },
							  {
								"edition": {
								  "id": "US"
								}
							  },
							  {
								"edition": {
								  "id": "AU"
								}
							  },
							  {
								"edition": {
								  "id": "INT"
								}
							  }
							],
							"editionAdTargetings": [
							  {
								"edition": {
								  "id": "UK"
								},
								"paramSet": [
								  {
									"name": "edition",
									"value": "uk"
								  },
								  {
									"name": "url",
									"value": "/publication/theguardian"
								  },
								  {
									"name": "ct",
									"value": "tag"
								  },
								  {
									"name": "p",
									"value": "ng"
								  }
								]
							  },
							  {
								"edition": {
								  "id": "US"
								},
								"paramSet": [
								  {
									"name": "url",
									"value": "/publication/theguardian"
								  },
								  {
									"name": "ct",
									"value": "tag"
								  },
								  {
									"name": "p",
									"value": "ng"
								  },
								  {
									"name": "edition",
									"value": "us"
								  }
								]
							  },
							  {
								"edition": {
								  "id": "AU"
								},
								"paramSet": [
								  {
									"name": "url",
									"value": "/publication/theguardian"
								  },
								  {
									"name": "ct",
									"value": "tag"
								  },
								  {
									"name": "p",
									"value": "ng"
								  },
								  {
									"name": "edition",
									"value": "au"
								  }
								]
							  },
							  {
								"edition": {
								  "id": "INT"
								},
								"paramSet": [
								  {
									"name": "url",
									"value": "/publication/theguardian"
								  },
								  {
									"name": "ct",
									"value": "tag"
								  },
								  {
									"name": "edition",
									"value": "int"
								  },
								  {
									"name": "p",
									"value": "ng"
								  }
								]
							  }
							],
							"prebidIndexSites": [
							  {
								"bp": "D",
								"id": 208213
							  },
							  {
								"bp": "M",
								"id": 213487
							  },
							  {
								"bp": "T",
								"id": 215422
							  }
							]
						  }
						}
					  },
					  {
						"properties": {
						  "id": "theguardian/mainsection",
						  "url": "/theguardian/mainsection",
						  "tagType": "NewspaperBook",
						  "sectionId": "news",
						  "sectionName": "News",
						  "webTitle": "Main section",
						  "webUrl": "https://www.theguardian.com/theguardian/mainsection",
						  "references": [],
						  "commercial": {
							"editionBrandings": [
							  {
								"edition": {
								  "id": "UK"
								}
							  },
							  {
								"edition": {
								  "id": "US"
								}
							  },
							  {
								"edition": {
								  "id": "AU"
								}
							  },
							  {
								"edition": {
								  "id": "INT"
								}
							  }
							],
							"editionAdTargetings": [
							  {
								"edition": {
								  "id": "UK"
								},
								"paramSet": [
								  {
									"name": "edition",
									"value": "uk"
								  },
								  {
									"name": "ct",
									"value": "tag"
								  },
								  {
									"name": "p",
									"value": "ng"
								  },
								  {
									"name": "url",
									"value": "/theguardian/mainsection"
								  }
								]
							  },
							  {
								"edition": {
								  "id": "US"
								},
								"paramSet": [
								  {
									"name": "ct",
									"value": "tag"
								  },
								  {
									"name": "p",
									"value": "ng"
								  },
								  {
									"name": "edition",
									"value": "us"
								  },
								  {
									"name": "url",
									"value": "/theguardian/mainsection"
								  }
								]
							  },
							  {
								"edition": {
								  "id": "AU"
								},
								"paramSet": [
								  {
									"name": "ct",
									"value": "tag"
								  },
								  {
									"name": "p",
									"value": "ng"
								  },
								  {
									"name": "edition",
									"value": "au"
								  },
								  {
									"name": "url",
									"value": "/theguardian/mainsection"
								  }
								]
							  },
							  {
								"edition": {
								  "id": "INT"
								},
								"paramSet": [
								  {
									"name": "ct",
									"value": "tag"
								  },
								  {
									"name": "edition",
									"value": "int"
								  },
								  {
									"name": "p",
									"value": "ng"
								  },
								  {
									"name": "url",
									"value": "/theguardian/mainsection"
								  }
								]
							  }
							],
							"prebidIndexSites": [
							  {
								"bp": "D",
								"id": 208234
							  },
							  {
								"bp": "M",
								"id": 213507
							  },
							  {
								"bp": "T",
								"id": 215442
							  }
							]
						  }
						}
					  },
					  {
						"properties": {
						  "id": "theguardian/mainsection/financial3",
						  "url": "/theguardian/mainsection/financial3",
						  "tagType": "NewspaperBookSection",
						  "sectionId": "business",
						  "sectionName": "Business",
						  "webTitle": "Financial",
						  "webUrl": "https://www.theguardian.com/theguardian/mainsection/financial3",
						  "references": [],
						  "commercial": {
							"editionBrandings": [
							  {
								"edition": {
								  "id": "UK"
								}
							  },
							  {
								"edition": {
								  "id": "US"
								}
							  },
							  {
								"edition": {
								  "id": "AU"
								}
							  },
							  {
								"edition": {
								  "id": "INT"
								}
							  }
							],
							"editionAdTargetings": [
							  {
								"edition": {
								  "id": "UK"
								},
								"paramSet": [
								  {
									"name": "edition",
									"value": "uk"
								  },
								  {
									"name": "ct",
									"value": "tag"
								  },
								  {
									"name": "p",
									"value": "ng"
								  },
								  {
									"name": "url",
									"value": "/theguardian/mainsection/financial3"
								  }
								]
							  },
							  {
								"edition": {
								  "id": "US"
								},
								"paramSet": [
								  {
									"name": "ct",
									"value": "tag"
								  },
								  {
									"name": "p",
									"value": "ng"
								  },
								  {
									"name": "url",
									"value": "/theguardian/mainsection/financial3"
								  },
								  {
									"name": "edition",
									"value": "us"
								  }
								]
							  },
							  {
								"edition": {
								  "id": "AU"
								},
								"paramSet": [
								  {
									"name": "ct",
									"value": "tag"
								  },
								  {
									"name": "p",
									"value": "ng"
								  },
								  {
									"name": "url",
									"value": "/theguardian/mainsection/financial3"
								  },
								  {
									"name": "edition",
									"value": "au"
								  }
								]
							  },
							  {
								"edition": {
								  "id": "INT"
								},
								"paramSet": [
								  {
									"name": "ct",
									"value": "tag"
								  },
								  {
									"name": "edition",
									"value": "int"
								  },
								  {
									"name": "p",
									"value": "ng"
								  },
								  {
									"name": "url",
									"value": "/theguardian/mainsection/financial3"
								  }
								]
							  }
							],
							"prebidIndexSites": [
							  {
								"bp": "D",
								"id": 208278
							  },
							  {
								"bp": "M",
								"id": 213548
							  },
							  {
								"bp": "T",
								"id": 215483
							  }
							]
						  }
						}
					  },
					  {
						"properties": {
						  "id": "tracking/commissioningdesk/uk-business",
						  "url": "/tracking/commissioningdesk/uk-business",
						  "tagType": "Tracking",
						  "sectionId": "global",
						  "sectionName": "global",
						  "webTitle": "UK Business",
						  "webUrl": "https://www.theguardian.com/tracking/commissioningdesk/uk-business",
						  "references": [],
						  "commercial": {
							"editionBrandings": [
							  {
								"edition": {
								  "id": "UK"
								}
							  },
							  {
								"edition": {
								  "id": "US"
								}
							  },
							  {
								"edition": {
								  "id": "AU"
								}
							  },
							  {
								"edition": {
								  "id": "INT"
								}
							  }
							],
							"editionAdTargetings": [
							  {
								"edition": {
								  "id": "UK"
								},
								"paramSet": [
								  {
									"name": "edition",
									"value": "uk"
								  },
								  {
									"name": "ct",
									"value": "tag"
								  },
								  {
									"name": "url",
									"value": "/tracking/commissioningdesk/uk-business"
								  },
								  {
									"name": "p",
									"value": "ng"
								  }
								]
							  },
							  {
								"edition": {
								  "id": "US"
								},
								"paramSet": [
								  {
									"name": "ct",
									"value": "tag"
								  },
								  {
									"name": "url",
									"value": "/tracking/commissioningdesk/uk-business"
								  },
								  {
									"name": "p",
									"value": "ng"
								  },
								  {
									"name": "edition",
									"value": "us"
								  }
								]
							  },
							  {
								"edition": {
								  "id": "AU"
								},
								"paramSet": [
								  {
									"name": "ct",
									"value": "tag"
								  },
								  {
									"name": "url",
									"value": "/tracking/commissioningdesk/uk-business"
								  },
								  {
									"name": "p",
									"value": "ng"
								  },
								  {
									"name": "edition",
									"value": "au"
								  }
								]
							  },
							  {
								"edition": {
								  "id": "INT"
								},
								"paramSet": [
								  {
									"name": "ct",
									"value": "tag"
								  },
								  {
									"name": "edition",
									"value": "int"
								  },
								  {
									"name": "url",
									"value": "/tracking/commissioningdesk/uk-business"
								  },
								  {
									"name": "p",
									"value": "ng"
								  }
								]
							  }
							]
						  }
						}
					  }
					]
				  }
				},
				"maybeContentId": "business/2022/may/30/most-small-firms-fear-long-term-fallout-uk-cost-living-crisis",
				"isLiveBlog": false,
				"isCrossword": false,
				"byline": "Joanna Partridge",
				"webTitle": "Most small firms fear long-term fallout from UK’s cost of living crisis",
				"linkText": "Most small firms fear long-term fallout from UK’s cost of living crisis",
				"maybeFrontPublicationDate": 1653891153721,
				"webUrl": "https://www.theguardian.com/business/2022/may/30/most-small-firms-fear-long-term-fallout-uk-cost-living-crisis",
				"editionBrandings": [
				  {
					"edition": {
					  "id": "UK"
					}
				  },
				  {
					"edition": {
					  "id": "US"
					}
				  },
				  {
					"edition": {
					  "id": "AU"
					}
				  },
				  {
					"edition": {
					  "id": "INT"
					}
				  }
				]
			  },
			  "header": {
				"isVideo": false,
				"isComment": false,
				"isGallery": false,
				"isAudio": false,
				"kicker": {
				  "type": "FreeHtmlKicker",
				  "item": {
					"properties": {
					  "kickerText": "Cost of living "
					},
					"body": "Cost of living "
				  }
				},
				"headline": "Most small firms fear long-term fallout from UK’s crisis",
				"url": "/business/2022/may/30/most-small-firms-fear-long-term-fallout-uk-cost-living-crisis",
				"hasMainVideoElement": false
			  },
			  "card": {
				"id": "business/2022/may/30/most-small-firms-fear-long-term-fallout-uk-cost-living-crisis",
				"cardStyle": {
				  "type": "DefaultCardstyle"
				},
				"webPublicationDateOption": 1653865273000,
				"lastModifiedOption": 1653865273000,
				"trailText": "Half worry rocketing prices will cut spending, while three in four fear long-term damage to businesses",
				"shortUrlPath": "/p/yhxdn",
				"shortUrl": "https://www.theguardian.com/p/yhxdn",
				"group": "0",
				"isLive": false
			  },
			  "discussion": {
				"isCommentable": false,
				"isClosedForComments": true,
				"discussionId": "/p/yhxdn"
			  },
			  "display": {
				"isBoosted": false,
				"showBoostedHeadline": false,
				"showQuotedHeadline": false,
				"imageHide": false,
				"showLivePlayable": false
			  },
			  "format": {
				"design": "ArticleDesign",
				"theme": "NewsPillar",
				"display": "StandardDisplay"
			  },
			  "enriched": {},
			  "supportingContent": [
				{
				  "properties": {
					"isBreaking": false,
					"showMainVideo": false,
					"showKickerTag": false,
					"showByline": false,
					"imageSlideshowReplace": false,
					"maybeContent": {
					  "trail": {
						"trailPicture": {
						  "allImages": [
							{
							  "index": 3,
							  "fields": {
								"displayCredit": "true",
								"source": "Getty Images",
								"photographer": "Michael Saint Maur Sheil",
								"isMaster": "true",
								"altText": "Oil rig on horizon; stormy sea in foreground",
								"height": "3281",
								"credit": "Photograph: Michael Saint Maur Sheil/Getty Images",
								"mediaId": "8b85772f84f97f591c362b8bf0556579250e7575",
								"width": "5469"
							  },
							  "mediaType": "Image",
							  "url": "https://media.guim.co.uk/8b85772f84f97f591c362b8bf0556579250e7575/0_118_5469_3281/master/5469.jpg"
							}
						  ]
						},
						"byline": "Phillip Inman Economics editor",
						"thumbnailPath": "https://i.guim.co.uk/img/media/8b85772f84f97f591c362b8bf0556579250e7575/0_118_5469_3281/500.jpg?quality=85&auto=format&fit=max&s=3e00bc309c12e49d8c60d36732f55b4b",
						"webPublicationDate": 1653807602000
					  },
					  "metadata": {
						"id": "business/2022/may/29/loophole-could-let-north-sea-oil-and-gas-giants-slash-uk-windfall-tax-bill",
						"webTitle": "Loophole could let North Sea oil and gas giants slash UK windfall tax bill ",
						"webUrl": "https://www.theguardian.com/business/2022/may/29/loophole-could-let-north-sea-oil-and-gas-giants-slash-uk-windfall-tax-bill",
						"type": "Article",
						"pillar": {
						  "name": "News"
						},
						"sectionId": {
						  "value": "business"
						},
						"designType": "Article",
						"format": {
						  "design": "ArticleDesign",
						  "theme": "NewsPillar",
						  "display": "StandardDisplay"
						}
					  },
					  "fields": {
						"main": "<figure class=\"element element-image\" data-media-id=\"8b85772f84f97f591c362b8bf0556579250e7575\"> <img src=\"https://media.guim.co.uk/8b85772f84f97f591c362b8bf0556579250e7575/0_118_5469_3281/1000.jpg\" alt=\"Oil rig on horizon; stormy sea in foreground\" width=\"1000\" height=\"600\" class=\"gu-image\" /> <figcaption> <span class=\"element-image__caption\">A rig in Brent oilfield in the North Sea. </span> <span class=\"element-image__credit\">Photograph: Michael Saint Maur Sheil/Getty Images</span> </figcaption> </figure>",
						"body": "<p>North Sea oil and gas companies that already benefit from huge tax breaks could use fresh rules to slash how much they pay under a new <a href=\"https://www.theguardian.com/politics/2022/may/26/sunak-announces-windfall-tax-energy-firms\" title=\"\">windfall tax</a> announced by Rishi Sunak as part of his £15bn cost of living package, according to a thinktank.</p><p>The chancellor risks raising a fraction of the £5bn he expects from the complex scheme – which allows the cost of new investments to be offset against profits – should oil and gas companies take the opportunity to dramatically reduce their contribution to the exchequer, said the left of centre Common Wealth.</p>",
						"standfirst": "<p>Critics warn chancellor Rishi Sunak will raise only a fraction of planned £5bn if firms offset new investment against profits</p>"
					  },
					  "elements": {
						"mediaAtoms": []
					  },
					  "tags": {
						"tags": [
						  {
							"properties": {
							  "id": "business/oilandgascompanies",
							  "url": "/business/oilandgascompanies",
							  "tagType": "Keyword",
							  "sectionId": "business",
							  "sectionName": "Business",
							  "webTitle": "Oil and gas companies",
							  "webUrl": "https://www.theguardian.com/business/oilandgascompanies",
							  "references": [],
							  "commercial": {
								"editionBrandings": [
								  {
									"edition": {
									  "id": "UK"
									}
								  },
								  {
									"edition": {
									  "id": "US"
									}
								  },
								  {
									"edition": {
									  "id": "AU"
									}
								  },
								  {
									"edition": {
									  "id": "INT"
									}
								  }
								],
								"editionAdTargetings": [
								  {
									"edition": {
									  "id": "UK"
									},
									"paramSet": [
									  {
										"name": "edition",
										"value": "uk"
									  },
									  {
										"name": "k",
										"value": [
										  "oilandgascompanies"
										]
									  },
									  {
										"name": "ct",
										"value": "tag"
									  },
									  {
										"name": "url",
										"value": "/business/oilandgascompanies"
									  },
									  {
										"name": "p",
										"value": "ng"
									  }
									]
								  },
								  {
									"edition": {
									  "id": "US"
									},
									"paramSet": [
									  {
										"name": "k",
										"value": [
										  "oilandgascompanies"
										]
									  },
									  {
										"name": "ct",
										"value": "tag"
									  },
									  {
										"name": "url",
										"value": "/business/oilandgascompanies"
									  },
									  {
										"name": "p",
										"value": "ng"
									  },
									  {
										"name": "edition",
										"value": "us"
									  }
									]
								  },
								  {
									"edition": {
									  "id": "AU"
									},
									"paramSet": [
									  {
										"name": "k",
										"value": [
										  "oilandgascompanies"
										]
									  },
									  {
										"name": "ct",
										"value": "tag"
									  },
									  {
										"name": "url",
										"value": "/business/oilandgascompanies"
									  },
									  {
										"name": "p",
										"value": "ng"
									  },
									  {
										"name": "edition",
										"value": "au"
									  }
									]
								  },
								  {
									"edition": {
									  "id": "INT"
									},
									"paramSet": [
									  {
										"name": "k",
										"value": [
										  "oilandgascompanies"
										]
									  },
									  {
										"name": "ct",
										"value": "tag"
									  },
									  {
										"name": "edition",
										"value": "int"
									  },
									  {
										"name": "url",
										"value": "/business/oilandgascompanies"
									  },
									  {
										"name": "p",
										"value": "ng"
									  }
									]
								  }
								],
								"prebidIndexSites": [
								  {
									"bp": "D",
									"id": 208278
								  },
								  {
									"bp": "M",
									"id": 213548
								  },
								  {
									"bp": "T",
									"id": 215483
								  }
								]
							  }
							}
						  },
						  {
							"properties": {
							  "id": "business/business",
							  "url": "/business/business",
							  "tagType": "Keyword",
							  "sectionId": "business",
							  "sectionName": "Business",
							  "webTitle": "Business",
							  "webUrl": "https://www.theguardian.com/business/business",
							  "references": [],
							  "commercial": {
								"editionBrandings": [
								  {
									"edition": {
									  "id": "UK"
									}
								  },
								  {
									"edition": {
									  "id": "US"
									}
								  },
								  {
									"edition": {
									  "id": "AU"
									}
								  },
								  {
									"edition": {
									  "id": "INT"
									}
								  }
								],
								"editionAdTargetings": [
								  {
									"edition": {
									  "id": "UK"
									},
									"paramSet": [
									  {
										"name": "edition",
										"value": "uk"
									  },
									  {
										"name": "k",
										"value": [
										  "business"
										]
									  },
									  {
										"name": "ct",
										"value": "tag"
									  },
									  {
										"name": "p",
										"value": "ng"
									  },
									  {
										"name": "url",
										"value": "/business/business"
									  }
									]
								  },
								  {
									"edition": {
									  "id": "US"
									},
									"paramSet": [
									  {
										"name": "k",
										"value": [
										  "business"
										]
									  },
									  {
										"name": "ct",
										"value": "tag"
									  },
									  {
										"name": "p",
										"value": "ng"
									  },
									  {
										"name": "edition",
										"value": "us"
									  },
									  {
										"name": "url",
										"value": "/business/business"
									  }
									]
								  },
								  {
									"edition": {
									  "id": "AU"
									},
									"paramSet": [
									  {
										"name": "k",
										"value": [
										  "business"
										]
									  },
									  {
										"name": "ct",
										"value": "tag"
									  },
									  {
										"name": "p",
										"value": "ng"
									  },
									  {
										"name": "edition",
										"value": "au"
									  },
									  {
										"name": "url",
										"value": "/business/business"
									  }
									]
								  },
								  {
									"edition": {
									  "id": "INT"
									},
									"paramSet": [
									  {
										"name": "k",
										"value": [
										  "business"
										]
									  },
									  {
										"name": "ct",
										"value": "tag"
									  },
									  {
										"name": "edition",
										"value": "int"
									  },
									  {
										"name": "p",
										"value": "ng"
									  },
									  {
										"name": "url",
										"value": "/business/business"
									  }
									]
								  }
								],
								"prebidIndexSites": [
								  {
									"bp": "D",
									"id": 208278
								  },
								  {
									"bp": "M",
									"id": 213548
								  },
								  {
									"bp": "T",
									"id": 215483
								  }
								]
							  }
							}
						  },
						  {
							"properties": {
							  "id": "business/energy-industry",
							  "url": "/business/energy-industry",
							  "tagType": "Keyword",
							  "sectionId": "business",
							  "sectionName": "Business",
							  "webTitle": "Energy industry",
							  "webUrl": "https://www.theguardian.com/business/energy-industry",
							  "references": [],
							  "commercial": {
								"editionBrandings": [
								  {
									"edition": {
									  "id": "UK"
									}
								  },
								  {
									"edition": {
									  "id": "US"
									}
								  },
								  {
									"edition": {
									  "id": "AU"
									}
								  },
								  {
									"edition": {
									  "id": "INT"
									}
								  }
								],
								"editionAdTargetings": [
								  {
									"edition": {
									  "id": "UK"
									},
									"paramSet": [
									  {
										"name": "edition",
										"value": "uk"
									  },
									  {
										"name": "ct",
										"value": "tag"
									  },
									  {
										"name": "url",
										"value": "/business/energy-industry"
									  },
									  {
										"name": "p",
										"value": "ng"
									  },
									  {
										"name": "k",
										"value": [
										  "energy-industry"
										]
									  }
									]
								  },
								  {
									"edition": {
									  "id": "US"
									},
									"paramSet": [
									  {
										"name": "ct",
										"value": "tag"
									  },
									  {
										"name": "url",
										"value": "/business/energy-industry"
									  },
									  {
										"name": "p",
										"value": "ng"
									  },
									  {
										"name": "edition",
										"value": "us"
									  },
									  {
										"name": "k",
										"value": [
										  "energy-industry"
										]
									  }
									]
								  },
								  {
									"edition": {
									  "id": "AU"
									},
									"paramSet": [
									  {
										"name": "ct",
										"value": "tag"
									  },
									  {
										"name": "url",
										"value": "/business/energy-industry"
									  },
									  {
										"name": "p",
										"value": "ng"
									  },
									  {
										"name": "k",
										"value": [
										  "energy-industry"
										]
									  },
									  {
										"name": "edition",
										"value": "au"
									  }
									]
								  },
								  {
									"edition": {
									  "id": "INT"
									},
									"paramSet": [
									  {
										"name": "ct",
										"value": "tag"
									  },
									  {
										"name": "edition",
										"value": "int"
									  },
									  {
										"name": "url",
										"value": "/business/energy-industry"
									  },
									  {
										"name": "p",
										"value": "ng"
									  },
									  {
										"name": "k",
										"value": [
										  "energy-industry"
										]
									  }
									]
								  }
								],
								"prebidIndexSites": [
								  {
									"bp": "D",
									"id": 208278
								  },
								  {
									"bp": "M",
									"id": 213548
								  },
								  {
									"bp": "T",
									"id": 215483
								  }
								]
							  }
							}
						  },
						  {
							"properties": {
							  "id": "politics/rishi-sunak",
							  "url": "/politics/rishi-sunak",
							  "tagType": "Keyword",
							  "sectionId": "politics",
							  "sectionName": "Politics",
							  "webTitle": "Rishi Sunak",
							  "webUrl": "https://www.theguardian.com/politics/rishi-sunak",
							  "references": [],
							  "commercial": {
								"editionBrandings": [
								  {
									"edition": {
									  "id": "UK"
									}
								  },
								  {
									"edition": {
									  "id": "US"
									}
								  },
								  {
									"edition": {
									  "id": "AU"
									}
								  },
								  {
									"edition": {
									  "id": "INT"
									}
								  }
								],
								"editionAdTargetings": [
								  {
									"edition": {
									  "id": "UK"
									},
									"paramSet": [
									  {
										"name": "edition",
										"value": "uk"
									  },
									  {
										"name": "ct",
										"value": "tag"
									  },
									  {
										"name": "url",
										"value": "/politics/rishi-sunak"
									  },
									  {
										"name": "p",
										"value": "ng"
									  },
									  {
										"name": "k",
										"value": [
										  "rishi-sunak"
										]
									  }
									]
								  },
								  {
									"edition": {
									  "id": "US"
									},
									"paramSet": [
									  {
										"name": "ct",
										"value": "tag"
									  },
									  {
										"name": "url",
										"value": "/politics/rishi-sunak"
									  },
									  {
										"name": "p",
										"value": "ng"
									  },
									  {
										"name": "k",
										"value": [
										  "rishi-sunak"
										]
									  },
									  {
										"name": "edition",
										"value": "us"
									  }
									]
								  },
								  {
									"edition": {
									  "id": "AU"
									},
									"paramSet": [
									  {
										"name": "ct",
										"value": "tag"
									  },
									  {
										"name": "url",
										"value": "/politics/rishi-sunak"
									  },
									  {
										"name": "p",
										"value": "ng"
									  },
									  {
										"name": "k",
										"value": [
										  "rishi-sunak"
										]
									  },
									  {
										"name": "edition",
										"value": "au"
									  }
									]
								  },
								  {
									"edition": {
									  "id": "INT"
									},
									"paramSet": [
									  {
										"name": "ct",
										"value": "tag"
									  },
									  {
										"name": "edition",
										"value": "int"
									  },
									  {
										"name": "url",
										"value": "/politics/rishi-sunak"
									  },
									  {
										"name": "p",
										"value": "ng"
									  },
									  {
										"name": "k",
										"value": [
										  "rishi-sunak"
										]
									  }
									]
								  }
								],
								"prebidIndexSites": [
								  {
									"bp": "D",
									"id": 208229
								  },
								  {
									"bp": "M",
									"id": 213502
								  },
								  {
									"bp": "T",
									"id": 215437
								  }
								]
							  }
							}
						  },
						  {
							"properties": {
							  "id": "politics/politics",
							  "url": "/politics/politics",
							  "tagType": "Keyword",
							  "sectionId": "politics",
							  "sectionName": "Politics",
							  "webTitle": "Politics",
							  "webUrl": "https://www.theguardian.com/politics/politics",
							  "description": "<p><br></p>",
							  "references": [],
							  "commercial": {
								"editionBrandings": [
								  {
									"edition": {
									  "id": "UK"
									}
								  },
								  {
									"edition": {
									  "id": "US"
									}
								  },
								  {
									"edition": {
									  "id": "AU"
									}
								  },
								  {
									"edition": {
									  "id": "INT"
									}
								  }
								],
								"editionAdTargetings": [
								  {
									"edition": {
									  "id": "UK"
									},
									"paramSet": [
									  {
										"name": "edition",
										"value": "uk"
									  },
									  {
										"name": "k",
										"value": [
										  "politics"
										]
									  },
									  {
										"name": "url",
										"value": "/politics/politics"
									  },
									  {
										"name": "ct",
										"value": "tag"
									  },
									  {
										"name": "p",
										"value": "ng"
									  }
									]
								  },
								  {
									"edition": {
									  "id": "US"
									},
									"paramSet": [
									  {
										"name": "k",
										"value": [
										  "politics"
										]
									  },
									  {
										"name": "url",
										"value": "/politics/politics"
									  },
									  {
										"name": "ct",
										"value": "tag"
									  },
									  {
										"name": "p",
										"value": "ng"
									  },
									  {
										"name": "edition",
										"value": "us"
									  }
									]
								  },
								  {
									"edition": {
									  "id": "AU"
									},
									"paramSet": [
									  {
										"name": "k",
										"value": [
										  "politics"
										]
									  },
									  {
										"name": "url",
										"value": "/politics/politics"
									  },
									  {
										"name": "ct",
										"value": "tag"
									  },
									  {
										"name": "p",
										"value": "ng"
									  },
									  {
										"name": "edition",
										"value": "au"
									  }
									]
								  },
								  {
									"edition": {
									  "id": "INT"
									},
									"paramSet": [
									  {
										"name": "k",
										"value": [
										  "politics"
										]
									  },
									  {
										"name": "url",
										"value": "/politics/politics"
									  },
									  {
										"name": "ct",
										"value": "tag"
									  },
									  {
										"name": "edition",
										"value": "int"
									  },
									  {
										"name": "p",
										"value": "ng"
									  }
									]
								  }
								],
								"prebidIndexSites": [
								  {
									"bp": "D",
									"id": 208229
								  },
								  {
									"bp": "M",
									"id": 213502
								  },
								  {
									"bp": "T",
									"id": 215437
								  }
								]
							  }
							}
						  },
						  {
							"properties": {
							  "id": "politics/taxandspending",
							  "url": "/politics/taxandspending",
							  "tagType": "Keyword",
							  "sectionId": "politics",
							  "sectionName": "Politics",
							  "webTitle": "Tax and spending",
							  "webUrl": "https://www.theguardian.com/politics/taxandspending",
							  "references": [],
							  "commercial": {
								"editionBrandings": [
								  {
									"edition": {
									  "id": "UK"
									}
								  },
								  {
									"edition": {
									  "id": "US"
									}
								  },
								  {
									"edition": {
									  "id": "AU"
									}
								  },
								  {
									"edition": {
									  "id": "INT"
									}
								  }
								],
								"editionAdTargetings": [
								  {
									"edition": {
									  "id": "UK"
									},
									"paramSet": [
									  {
										"name": "edition",
										"value": "uk"
									  },
									  {
										"name": "k",
										"value": [
										  "taxandspending"
										]
									  },
									  {
										"name": "ct",
										"value": "tag"
									  },
									  {
										"name": "url",
										"value": "/politics/taxandspending"
									  },
									  {
										"name": "p",
										"value": "ng"
									  }
									]
								  },
								  {
									"edition": {
									  "id": "US"
									},
									"paramSet": [
									  {
										"name": "k",
										"value": [
										  "taxandspending"
										]
									  },
									  {
										"name": "ct",
										"value": "tag"
									  },
									  {
										"name": "url",
										"value": "/politics/taxandspending"
									  },
									  {
										"name": "p",
										"value": "ng"
									  },
									  {
										"name": "edition",
										"value": "us"
									  }
									]
								  },
								  {
									"edition": {
									  "id": "AU"
									},
									"paramSet": [
									  {
										"name": "k",
										"value": [
										  "taxandspending"
										]
									  },
									  {
										"name": "ct",
										"value": "tag"
									  },
									  {
										"name": "url",
										"value": "/politics/taxandspending"
									  },
									  {
										"name": "p",
										"value": "ng"
									  },
									  {
										"name": "edition",
										"value": "au"
									  }
									]
								  },
								  {
									"edition": {
									  "id": "INT"
									},
									"paramSet": [
									  {
										"name": "k",
										"value": [
										  "taxandspending"
										]
									  },
									  {
										"name": "ct",
										"value": "tag"
									  },
									  {
										"name": "url",
										"value": "/politics/taxandspending"
									  },
									  {
										"name": "edition",
										"value": "int"
									  },
									  {
										"name": "p",
										"value": "ng"
									  }
									]
								  }
								],
								"prebidIndexSites": [
								  {
									"bp": "D",
									"id": 208229
								  },
								  {
									"bp": "M",
									"id": 213502
								  },
								  {
									"bp": "T",
									"id": 215437
								  }
								]
							  }
							}
						  },
						  {
							"properties": {
							  "id": "politics/thinktanks",
							  "url": "/politics/thinktanks",
							  "tagType": "Keyword",
							  "sectionId": "politics",
							  "sectionName": "Politics",
							  "webTitle": "Thinktanks",
							  "webUrl": "https://www.theguardian.com/politics/thinktanks",
							  "references": [],
							  "commercial": {
								"editionBrandings": [
								  {
									"edition": {
									  "id": "UK"
									}
								  },
								  {
									"edition": {
									  "id": "US"
									}
								  },
								  {
									"edition": {
									  "id": "AU"
									}
								  },
								  {
									"edition": {
									  "id": "INT"
									}
								  }
								],
								"editionAdTargetings": [
								  {
									"edition": {
									  "id": "UK"
									},
									"paramSet": [
									  {
										"name": "edition",
										"value": "uk"
									  },
									  {
										"name": "k",
										"value": [
										  "thinktanks"
										]
									  },
									  {
										"name": "ct",
										"value": "tag"
									  },
									  {
										"name": "p",
										"value": "ng"
									  },
									  {
										"name": "url",
										"value": "/politics/thinktanks"
									  }
									]
								  },
								  {
									"edition": {
									  "id": "US"
									},
									"paramSet": [
									  {
										"name": "k",
										"value": [
										  "thinktanks"
										]
									  },
									  {
										"name": "ct",
										"value": "tag"
									  },
									  {
										"name": "p",
										"value": "ng"
									  },
									  {
										"name": "edition",
										"value": "us"
									  },
									  {
										"name": "url",
										"value": "/politics/thinktanks"
									  }
									]
								  },
								  {
									"edition": {
									  "id": "AU"
									},
									"paramSet": [
									  {
										"name": "k",
										"value": [
										  "thinktanks"
										]
									  },
									  {
										"name": "ct",
										"value": "tag"
									  },
									  {
										"name": "p",
										"value": "ng"
									  },
									  {
										"name": "edition",
										"value": "au"
									  },
									  {
										"name": "url",
										"value": "/politics/thinktanks"
									  }
									]
								  },
								  {
									"edition": {
									  "id": "INT"
									},
									"paramSet": [
									  {
										"name": "k",
										"value": [
										  "thinktanks"
										]
									  },
									  {
										"name": "ct",
										"value": "tag"
									  },
									  {
										"name": "edition",
										"value": "int"
									  },
									  {
										"name": "p",
										"value": "ng"
									  },
									  {
										"name": "url",
										"value": "/politics/thinktanks"
									  }
									]
								  }
								],
								"prebidIndexSites": [
								  {
									"bp": "D",
									"id": 208229
								  },
								  {
									"bp": "M",
									"id": 213502
								  },
								  {
									"bp": "T",
									"id": 215437
								  }
								]
							  }
							}
						  },
						  {
							"properties": {
							  "id": "uk/uk",
							  "url": "/uk/uk",
							  "tagType": "Keyword",
							  "sectionId": "uk-news",
							  "sectionName": "UK news",
							  "webTitle": "UK news",
							  "webUrl": "https://www.theguardian.com/uk/uk",
							  "references": [],
							  "commercial": {
								"editionBrandings": [
								  {
									"edition": {
									  "id": "UK"
									}
								  },
								  {
									"edition": {
									  "id": "US"
									}
								  },
								  {
									"edition": {
									  "id": "AU"
									}
								  },
								  {
									"edition": {
									  "id": "INT"
									}
								  }
								],
								"editionAdTargetings": [
								  {
									"edition": {
									  "id": "UK"
									},
									"paramSet": [
									  {
										"name": "k",
										"value": [
										  "uk/uk"
										]
									  },
									  {
										"name": "edition",
										"value": "uk"
									  },
									  {
										"name": "ct",
										"value": "tag"
									  },
									  {
										"name": "url",
										"value": "/uk/uk"
									  },
									  {
										"name": "p",
										"value": "ng"
									  }
									]
								  },
								  {
									"edition": {
									  "id": "US"
									},
									"paramSet": [
									  {
										"name": "k",
										"value": [
										  "uk/uk"
										]
									  },
									  {
										"name": "ct",
										"value": "tag"
									  },
									  {
										"name": "url",
										"value": "/uk/uk"
									  },
									  {
										"name": "p",
										"value": "ng"
									  },
									  {
										"name": "edition",
										"value": "us"
									  }
									]
								  },
								  {
									"edition": {
									  "id": "AU"
									},
									"paramSet": [
									  {
										"name": "k",
										"value": [
										  "uk/uk"
										]
									  },
									  {
										"name": "ct",
										"value": "tag"
									  },
									  {
										"name": "url",
										"value": "/uk/uk"
									  },
									  {
										"name": "p",
										"value": "ng"
									  },
									  {
										"name": "edition",
										"value": "au"
									  }
									]
								  },
								  {
									"edition": {
									  "id": "INT"
									},
									"paramSet": [
									  {
										"name": "k",
										"value": [
										  "uk/uk"
										]
									  },
									  {
										"name": "ct",
										"value": "tag"
									  },
									  {
										"name": "edition",
										"value": "int"
									  },
									  {
										"name": "url",
										"value": "/uk/uk"
									  },
									  {
										"name": "p",
										"value": "ng"
									  }
									]
								  }
								],
								"prebidIndexSites": [
								  {
									"bp": "D",
									"id": 208208
								  },
								  {
									"bp": "M",
									"id": 213482
								  },
								  {
									"bp": "T",
									"id": 215417
								  }
								]
							  }
							}
						  },
						  {
							"properties": {
							  "id": "type/article",
							  "url": "/type/article",
							  "tagType": "Type",
							  "sectionId": "global",
							  "sectionName": "global",
							  "webTitle": "Article",
							  "webUrl": "https://www.theguardian.com/articles",
							  "references": [],
							  "commercial": {
								"editionBrandings": [
								  {
									"edition": {
									  "id": "UK"
									}
								  },
								  {
									"edition": {
									  "id": "US"
									}
								  },
								  {
									"edition": {
									  "id": "AU"
									}
								  },
								  {
									"edition": {
									  "id": "INT"
									}
								  }
								],
								"editionAdTargetings": [
								  {
									"edition": {
									  "id": "UK"
									},
									"paramSet": [
									  {
										"name": "edition",
										"value": "uk"
									  },
									  {
										"name": "ct",
										"value": "tag"
									  },
									  {
										"name": "url",
										"value": "/type/article"
									  },
									  {
										"name": "p",
										"value": "ng"
									  }
									]
								  },
								  {
									"edition": {
									  "id": "US"
									},
									"paramSet": [
									  {
										"name": "ct",
										"value": "tag"
									  },
									  {
										"name": "url",
										"value": "/type/article"
									  },
									  {
										"name": "p",
										"value": "ng"
									  },
									  {
										"name": "edition",
										"value": "us"
									  }
									]
								  },
								  {
									"edition": {
									  "id": "AU"
									},
									"paramSet": [
									  {
										"name": "ct",
										"value": "tag"
									  },
									  {
										"name": "url",
										"value": "/type/article"
									  },
									  {
										"name": "p",
										"value": "ng"
									  },
									  {
										"name": "edition",
										"value": "au"
									  }
									]
								  },
								  {
									"edition": {
									  "id": "INT"
									},
									"paramSet": [
									  {
										"name": "ct",
										"value": "tag"
									  },
									  {
										"name": "url",
										"value": "/type/article"
									  },
									  {
										"name": "edition",
										"value": "int"
									  },
									  {
										"name": "p",
										"value": "ng"
									  }
									]
								  }
								]
							  }
							}
						  },
						  {
							"properties": {
							  "id": "tone/news",
							  "url": "/tone/news",
							  "tagType": "Tone",
							  "sectionId": "global",
							  "sectionName": "global",
							  "webTitle": "News",
							  "webUrl": "https://www.theguardian.com/tone/news",
							  "references": [],
							  "commercial": {
								"editionBrandings": [
								  {
									"edition": {
									  "id": "UK"
									}
								  },
								  {
									"edition": {
									  "id": "US"
									}
								  },
								  {
									"edition": {
									  "id": "AU"
									}
								  },
								  {
									"edition": {
									  "id": "INT"
									}
								  }
								],
								"editionAdTargetings": [
								  {
									"edition": {
									  "id": "UK"
									},
									"paramSet": [
									  {
										"name": "edition",
										"value": "uk"
									  },
									  {
										"name": "ct",
										"value": "tag"
									  },
									  {
										"name": "tn",
										"value": [
										  "news"
										]
									  },
									  {
										"name": "p",
										"value": "ng"
									  },
									  {
										"name": "url",
										"value": "/tone/news"
									  }
									]
								  },
								  {
									"edition": {
									  "id": "US"
									},
									"paramSet": [
									  {
										"name": "ct",
										"value": "tag"
									  },
									  {
										"name": "tn",
										"value": [
										  "news"
										]
									  },
									  {
										"name": "p",
										"value": "ng"
									  },
									  {
										"name": "url",
										"value": "/tone/news"
									  },
									  {
										"name": "edition",
										"value": "us"
									  }
									]
								  },
								  {
									"edition": {
									  "id": "AU"
									},
									"paramSet": [
									  {
										"name": "ct",
										"value": "tag"
									  },
									  {
										"name": "tn",
										"value": [
										  "news"
										]
									  },
									  {
										"name": "p",
										"value": "ng"
									  },
									  {
										"name": "url",
										"value": "/tone/news"
									  },
									  {
										"name": "edition",
										"value": "au"
									  }
									]
								  },
								  {
									"edition": {
									  "id": "INT"
									},
									"paramSet": [
									  {
										"name": "ct",
										"value": "tag"
									  },
									  {
										"name": "tn",
										"value": [
										  "news"
										]
									  },
									  {
										"name": "edition",
										"value": "int"
									  },
									  {
										"name": "p",
										"value": "ng"
									  },
									  {
										"name": "url",
										"value": "/tone/news"
									  }
									]
								  }
								]
							  }
							}
						  },
						  {
							"properties": {
							  "id": "profile/phillipinman",
							  "url": "/profile/phillipinman",
							  "tagType": "Contributor",
							  "sectionId": "global",
							  "sectionName": "global",
							  "webTitle": "Phillip Inman",
							  "webUrl": "https://www.theguardian.com/profile/phillipinman",
							  "twitterHandle": "phillipinman",
							  "bio": "<p>Phillip Inman is economics editor of the Observer and&nbsp;an economics writer for the Guardian. He is the author of Managing Your Debt, a Which? essential guide; and the Guardian e-book The Financial Crisis: How Did We Get Here?</p>",
							  "bylineImageUrl": "https://static.guim.co.uk/sys-images/Guardian/Pix/contributor/2007/09/28/phillip_inman_140x140.jpg",
							  "references": [],
							  "commercial": {
								"editionBrandings": [
								  {
									"edition": {
									  "id": "UK"
									}
								  },
								  {
									"edition": {
									  "id": "US"
									}
								  },
								  {
									"edition": {
									  "id": "AU"
									}
								  },
								  {
									"edition": {
									  "id": "INT"
									}
								  }
								],
								"editionAdTargetings": [
								  {
									"edition": {
									  "id": "UK"
									},
									"paramSet": [
									  {
										"name": "url",
										"value": "/profile/phillipinman"
									  },
									  {
										"name": "edition",
										"value": "uk"
									  },
									  {
										"name": "ct",
										"value": "tag"
									  },
									  {
										"name": "co",
										"value": [
										  "phillipinman"
										]
									  },
									  {
										"name": "p",
										"value": "ng"
									  }
									]
								  },
								  {
									"edition": {
									  "id": "US"
									},
									"paramSet": [
									  {
										"name": "url",
										"value": "/profile/phillipinman"
									  },
									  {
										"name": "ct",
										"value": "tag"
									  },
									  {
										"name": "co",
										"value": [
										  "phillipinman"
										]
									  },
									  {
										"name": "p",
										"value": "ng"
									  },
									  {
										"name": "edition",
										"value": "us"
									  }
									]
								  },
								  {
									"edition": {
									  "id": "AU"
									},
									"paramSet": [
									  {
										"name": "url",
										"value": "/profile/phillipinman"
									  },
									  {
										"name": "ct",
										"value": "tag"
									  },
									  {
										"name": "co",
										"value": [
										  "phillipinman"
										]
									  },
									  {
										"name": "p",
										"value": "ng"
									  },
									  {
										"name": "edition",
										"value": "au"
									  }
									]
								  },
								  {
									"edition": {
									  "id": "INT"
									},
									"paramSet": [
									  {
										"name": "url",
										"value": "/profile/phillipinman"
									  },
									  {
										"name": "ct",
										"value": "tag"
									  },
									  {
										"name": "edition",
										"value": "int"
									  },
									  {
										"name": "co",
										"value": [
										  "phillipinman"
										]
									  },
									  {
										"name": "p",
										"value": "ng"
									  }
									]
								  }
								]
							  }
							}
						  },
						  {
							"properties": {
							  "id": "publication/theobserver",
							  "url": "/publication/theobserver",
							  "tagType": "Publication",
							  "sectionId": "theobserver",
							  "sectionName": "From the Observer",
							  "webTitle": "The Observer",
							  "webUrl": "https://www.theguardian.com/theobserver/all",
							  "description": "From the Observer, the Sunday newspaper and sister publication of the Guardian.",
							  "references": [],
							  "commercial": {
								"editionBrandings": [
								  {
									"edition": {
									  "id": "UK"
									}
								  },
								  {
									"edition": {
									  "id": "US"
									}
								  },
								  {
									"edition": {
									  "id": "AU"
									}
								  },
								  {
									"edition": {
									  "id": "INT"
									}
								  }
								],
								"editionAdTargetings": [
								  {
									"edition": {
									  "id": "UK"
									},
									"paramSet": [
									  {
										"name": "edition",
										"value": "uk"
									  },
									  {
										"name": "ct",
										"value": "tag"
									  },
									  {
										"name": "url",
										"value": "/publication/theobserver"
									  },
									  {
										"name": "p",
										"value": "ng"
									  }
									]
								  },
								  {
									"edition": {
									  "id": "US"
									},
									"paramSet": [
									  {
										"name": "ct",
										"value": "tag"
									  },
									  {
										"name": "url",
										"value": "/publication/theobserver"
									  },
									  {
										"name": "p",
										"value": "ng"
									  },
									  {
										"name": "edition",
										"value": "us"
									  }
									]
								  },
								  {
									"edition": {
									  "id": "AU"
									},
									"paramSet": [
									  {
										"name": "ct",
										"value": "tag"
									  },
									  {
										"name": "url",
										"value": "/publication/theobserver"
									  },
									  {
										"name": "p",
										"value": "ng"
									  },
									  {
										"name": "edition",
										"value": "au"
									  }
									]
								  },
								  {
									"edition": {
									  "id": "INT"
									},
									"paramSet": [
									  {
										"name": "ct",
										"value": "tag"
									  },
									  {
										"name": "edition",
										"value": "int"
									  },
									  {
										"name": "url",
										"value": "/publication/theobserver"
									  },
									  {
										"name": "p",
										"value": "ng"
									  }
									]
								  }
								],
								"prebidIndexSites": [
								  {
									"bp": "D",
									"id": 208212
								  },
								  {
									"bp": "M",
									"id": 213486
								  },
								  {
									"bp": "T",
									"id": 215421
								  }
								]
							  }
							}
						  },
						  {
							"properties": {
							  "id": "theobserver/news",
							  "url": "/theobserver/news",
							  "tagType": "NewspaperBook",
							  "sectionId": "theobserver",
							  "sectionName": "From the Observer",
							  "webTitle": "Main section",
							  "webUrl": "https://www.theguardian.com/theobserver/news",
							  "references": [],
							  "commercial": {
								"editionBrandings": [
								  {
									"edition": {
									  "id": "UK"
									}
								  },
								  {
									"edition": {
									  "id": "US"
									}
								  },
								  {
									"edition": {
									  "id": "AU"
									}
								  },
								  {
									"edition": {
									  "id": "INT"
									}
								  }
								],
								"editionAdTargetings": [
								  {
									"edition": {
									  "id": "UK"
									},
									"paramSet": [
									  {
										"name": "edition",
										"value": "uk"
									  },
									  {
										"name": "ct",
										"value": "tag"
									  },
									  {
										"name": "url",
										"value": "/theobserver/news"
									  },
									  {
										"name": "p",
										"value": "ng"
									  }
									]
								  },
								  {
									"edition": {
									  "id": "US"
									},
									"paramSet": [
									  {
										"name": "ct",
										"value": "tag"
									  },
									  {
										"name": "url",
										"value": "/theobserver/news"
									  },
									  {
										"name": "p",
										"value": "ng"
									  },
									  {
										"name": "edition",
										"value": "us"
									  }
									]
								  },
								  {
									"edition": {
									  "id": "AU"
									},
									"paramSet": [
									  {
										"name": "ct",
										"value": "tag"
									  },
									  {
										"name": "url",
										"value": "/theobserver/news"
									  },
									  {
										"name": "p",
										"value": "ng"
									  },
									  {
										"name": "edition",
										"value": "au"
									  }
									]
								  },
								  {
									"edition": {
									  "id": "INT"
									},
									"paramSet": [
									  {
										"name": "ct",
										"value": "tag"
									  },
									  {
										"name": "edition",
										"value": "int"
									  },
									  {
										"name": "url",
										"value": "/theobserver/news"
									  },
									  {
										"name": "p",
										"value": "ng"
									  }
									]
								  }
								],
								"prebidIndexSites": [
								  {
									"bp": "D",
									"id": 208212
								  },
								  {
									"bp": "M",
									"id": 213486
								  },
								  {
									"bp": "T",
									"id": 215421
								  }
								]
							  }
							}
						  },
						  {
							"properties": {
							  "id": "theobserver/news/uknews",
							  "url": "/theobserver/news/uknews",
							  "tagType": "NewspaperBookSection",
							  "sectionId": "theobserver",
							  "sectionName": "From the Observer",
							  "webTitle": "News",
							  "webUrl": "https://www.theguardian.com/theobserver/news/uknews",
							  "references": [],
							  "commercial": {
								"editionBrandings": [
								  {
									"edition": {
									  "id": "UK"
									}
								  },
								  {
									"edition": {
									  "id": "US"
									}
								  },
								  {
									"edition": {
									  "id": "AU"
									}
								  },
								  {
									"edition": {
									  "id": "INT"
									}
								  }
								],
								"editionAdTargetings": [
								  {
									"edition": {
									  "id": "UK"
									},
									"paramSet": [
									  {
										"name": "edition",
										"value": "uk"
									  },
									  {
										"name": "ct",
										"value": "tag"
									  },
									  {
										"name": "p",
										"value": "ng"
									  },
									  {
										"name": "url",
										"value": "/theobserver/news/uknews"
									  }
									]
								  },
								  {
									"edition": {
									  "id": "US"
									},
									"paramSet": [
									  {
										"name": "ct",
										"value": "tag"
									  },
									  {
										"name": "p",
										"value": "ng"
									  },
									  {
										"name": "url",
										"value": "/theobserver/news/uknews"
									  },
									  {
										"name": "edition",
										"value": "us"
									  }
									]
								  },
								  {
									"edition": {
									  "id": "AU"
									},
									"paramSet": [
									  {
										"name": "ct",
										"value": "tag"
									  },
									  {
										"name": "p",
										"value": "ng"
									  },
									  {
										"name": "url",
										"value": "/theobserver/news/uknews"
									  },
									  {
										"name": "edition",
										"value": "au"
									  }
									]
								  },
								  {
									"edition": {
									  "id": "INT"
									},
									"paramSet": [
									  {
										"name": "ct",
										"value": "tag"
									  },
									  {
										"name": "edition",
										"value": "int"
									  },
									  {
										"name": "p",
										"value": "ng"
									  },
									  {
										"name": "url",
										"value": "/theobserver/news/uknews"
									  }
									]
								  }
								],
								"prebidIndexSites": [
								  {
									"bp": "D",
									"id": 208212
								  },
								  {
									"bp": "M",
									"id": 213486
								  },
								  {
									"bp": "T",
									"id": 215421
								  }
								]
							  }
							}
						  },
						  {
							"properties": {
							  "id": "tracking/commissioningdesk/uk-business",
							  "url": "/tracking/commissioningdesk/uk-business",
							  "tagType": "Tracking",
							  "sectionId": "global",
							  "sectionName": "global",
							  "webTitle": "UK Business",
							  "webUrl": "https://www.theguardian.com/tracking/commissioningdesk/uk-business",
							  "references": [],
							  "commercial": {
								"editionBrandings": [
								  {
									"edition": {
									  "id": "UK"
									}
								  },
								  {
									"edition": {
									  "id": "US"
									}
								  },
								  {
									"edition": {
									  "id": "AU"
									}
								  },
								  {
									"edition": {
									  "id": "INT"
									}
								  }
								],
								"editionAdTargetings": [
								  {
									"edition": {
									  "id": "UK"
									},
									"paramSet": [
									  {
										"name": "edition",
										"value": "uk"
									  },
									  {
										"name": "ct",
										"value": "tag"
									  },
									  {
										"name": "url",
										"value": "/tracking/commissioningdesk/uk-business"
									  },
									  {
										"name": "p",
										"value": "ng"
									  }
									]
								  },
								  {
									"edition": {
									  "id": "US"
									},
									"paramSet": [
									  {
										"name": "ct",
										"value": "tag"
									  },
									  {
										"name": "url",
										"value": "/tracking/commissioningdesk/uk-business"
									  },
									  {
										"name": "p",
										"value": "ng"
									  },
									  {
										"name": "edition",
										"value": "us"
									  }
									]
								  },
								  {
									"edition": {
									  "id": "AU"
									},
									"paramSet": [
									  {
										"name": "ct",
										"value": "tag"
									  },
									  {
										"name": "url",
										"value": "/tracking/commissioningdesk/uk-business"
									  },
									  {
										"name": "p",
										"value": "ng"
									  },
									  {
										"name": "edition",
										"value": "au"
									  }
									]
								  },
								  {
									"edition": {
									  "id": "INT"
									},
									"paramSet": [
									  {
										"name": "ct",
										"value": "tag"
									  },
									  {
										"name": "edition",
										"value": "int"
									  },
									  {
										"name": "url",
										"value": "/tracking/commissioningdesk/uk-business"
									  },
									  {
										"name": "p",
										"value": "ng"
									  }
									]
								  }
								]
							  }
							}
						  }
						]
					  }
					},
					"maybeContentId": "business/2022/may/29/loophole-could-let-north-sea-oil-and-gas-giants-slash-uk-windfall-tax-bill",
					"isLiveBlog": false,
					"isCrossword": false,
					"byline": "Phillip Inman Economics editor",
					"webTitle": "Loophole could let North Sea oil and gas giants slash UK windfall tax bill ",
					"linkText": "Loophole could let North Sea oil and gas giants slash UK windfall tax bill ",
					"maybeFrontPublicationDate": 1653818615051,
					"webUrl": "https://www.theguardian.com/business/2022/may/29/loophole-could-let-north-sea-oil-and-gas-giants-slash-uk-windfall-tax-bill",
					"editionBrandings": []
				  },
				  "header": {
					"isVideo": false,
					"isComment": false,
					"isGallery": false,
					"isAudio": false,
					"kicker": {
					  "type": "FreeHtmlKicker",
					  "item": {
						"properties": {
						  "kickerText": "Oil and gas"
						},
						"body": "Oil and gas"
					  }
					},
					"headline": "Loophole could let North Sea giants slash UK windfall tax bill ",
					"url": "/business/2022/may/29/loophole-could-let-north-sea-oil-and-gas-giants-slash-uk-windfall-tax-bill",
					"hasMainVideoElement": false
				  },
				  "card": {
					"id": "business/2022/may/29/loophole-could-let-north-sea-oil-and-gas-giants-slash-uk-windfall-tax-bill",
					"cardStyle": {
					  "type": "DefaultCardstyle"
					},
					"webPublicationDateOption": 1653807602000,
					"lastModifiedOption": 1653807602000,
					"trailText": "Critics warn chancellor Rishi Sunak will raise only a fraction of planned £5bn if firms offset new investment against profits",
					"shortUrlPath": "/p/ygkbg",
					"shortUrl": "https://www.theguardian.com/p/ygkbg",
					"group": "0",
					"isLive": false
				  },
				  "discussion": {
					"isCommentable": false,
					"isClosedForComments": true,
					"discussionId": "/p/ygkbg"
				  },
				  "display": {
					"isBoosted": true,
					"showBoostedHeadline": false,
					"showQuotedHeadline": false,
					"imageHide": false,
					"showLivePlayable": false
				  },
				  "format": {
					"design": "ArticleDesign",
					"theme": "NewsPillar",
					"display": "StandardDisplay"
				  },
				  "cardStyle": {
					"type": "DefaultCardstyle"
				  },
				  "type": "SupportingCuratedContent"
				}
			  ],
			  "cardStyle": {
				"type": "DefaultCardstyle"
			  },
			  "type": "CuratedContent"
			},
			{
			  "properties": {
				"isBreaking": false,
				"showMainVideo": false,
				"showKickerTag": false,
				"showByline": false,
				"imageSlideshowReplace": false,
				"maybeContent": {
				  "trail": {
					"trailPicture": {
					  "allImages": [
						{
						  "index": 2,
						  "fields": {
							"displayCredit": "true",
							"source": "AFP/Getty Images",
							"photographer": "Justin Tallis",
							"isMaster": "true",
							"altText": "A medical lab.",
							"height": "3329",
							"credit": "Photograph: Justin Tallis/AFP/Getty Images",
							"mediaId": "849c7944b4057c349029fc2177e576bedec92350",
							"width": "5548"
						  },
						  "mediaType": "Image",
						  "url": "https://media.guim.co.uk/849c7944b4057c349029fc2177e576bedec92350/0_370_5548_3329/master/5548.jpg"
						}
					  ]
					},
					"byline": "Linda Geddes Science correspondent",
					"thumbnailPath": "https://i.guim.co.uk/img/media/849c7944b4057c349029fc2177e576bedec92350/0_370_5548_3329/500.jpg?quality=85&auto=format&fit=max&s=8b2802950b2d2259bcf01f4e35cd1564",
					"webPublicationDate": 1653865273000
				  },
				  "metadata": {
					"id": "science/2022/may/30/medical-research-stalled-as-nhs-focuses-on-small-number-of-trials-experts-say",
					"webTitle": "Medical research stalled as NHS focuses on small number of trials, experts say",
					"webUrl": "https://www.theguardian.com/science/2022/may/30/medical-research-stalled-as-nhs-focuses-on-small-number-of-trials-experts-say",
					"type": "Article",
					"pillar": {
					  "name": "News"
					},
					"sectionId": {
					  "value": "science"
					},
					"designType": "Article",
					"format": {
					  "design": "ArticleDesign",
					  "theme": "NewsPillar",
					  "display": "StandardDisplay"
					}
				  },
				  "fields": {
					"main": "<figure class=\"element element-image\" data-media-id=\"849c7944b4057c349029fc2177e576bedec92350\"> <img src=\"https://media.guim.co.uk/849c7944b4057c349029fc2177e576bedec92350/0_370_5548_3329/1000.jpg\" alt=\"A medical lab.\" width=\"1000\" height=\"600\" class=\"gu-image\" /> <figcaption> <span class=\"element-image__caption\">Staff and resources were recently diverted towards researching Covid vaccines.</span> <span class=\"element-image__credit\">Photograph: Justin Tallis/AFP/Getty Images</span> </figcaption> </figure>",
					"body": "<p>Government efforts to focus NHS resources on a smaller number of well-designed clinical trials could inadvertently be contributing to a backlog of stalled medical research, and result in some important trials being scrapped, researchers say.</p><p>Their warning comes as a report outlines the scale of “research waste” that has occurred during the pandemic, with rampant duplication of scientific efforts and weakly designed clinical trials exposing millions of patients to unproven treatments, with little scientific benefit.</p>",
					"standfirst": "<p>Report outlines ‘research waste’ that occurred during the pandemic, with weakly designed trials exposing millions to unproven treatments</p>"
				  },
				  "elements": {
					"mediaAtoms": []
				  },
				  "tags": {
					"tags": [
					  {
						"properties": {
						  "id": "science/medical-research",
						  "url": "/science/medical-research",
						  "tagType": "Keyword",
						  "sectionId": "science",
						  "sectionName": "Science",
						  "webTitle": "Medical research",
						  "webUrl": "https://www.theguardian.com/science/medical-research",
						  "references": [],
						  "commercial": {
							"editionBrandings": [
							  {
								"edition": {
								  "id": "UK"
								}
							  },
							  {
								"edition": {
								  "id": "US"
								}
							  },
							  {
								"edition": {
								  "id": "AU"
								}
							  },
							  {
								"edition": {
								  "id": "INT"
								}
							  }
							],
							"editionAdTargetings": [
							  {
								"edition": {
								  "id": "UK"
								},
								"paramSet": [
								  {
									"name": "k",
									"value": [
									  "medical-research"
									]
								  },
								  {
									"name": "edition",
									"value": "uk"
								  },
								  {
									"name": "url",
									"value": "/science/medical-research"
								  },
								  {
									"name": "ct",
									"value": "tag"
								  },
								  {
									"name": "p",
									"value": "ng"
								  }
								]
							  },
							  {
								"edition": {
								  "id": "US"
								},
								"paramSet": [
								  {
									"name": "k",
									"value": [
									  "medical-research"
									]
								  },
								  {
									"name": "url",
									"value": "/science/medical-research"
								  },
								  {
									"name": "ct",
									"value": "tag"
								  },
								  {
									"name": "p",
									"value": "ng"
								  },
								  {
									"name": "edition",
									"value": "us"
								  }
								]
							  },
							  {
								"edition": {
								  "id": "AU"
								},
								"paramSet": [
								  {
									"name": "k",
									"value": [
									  "medical-research"
									]
								  },
								  {
									"name": "url",
									"value": "/science/medical-research"
								  },
								  {
									"name": "ct",
									"value": "tag"
								  },
								  {
									"name": "p",
									"value": "ng"
								  },
								  {
									"name": "edition",
									"value": "au"
								  }
								]
							  },
							  {
								"edition": {
								  "id": "INT"
								},
								"paramSet": [
								  {
									"name": "k",
									"value": [
									  "medical-research"
									]
								  },
								  {
									"name": "url",
									"value": "/science/medical-research"
								  },
								  {
									"name": "ct",
									"value": "tag"
								  },
								  {
									"name": "edition",
									"value": "int"
								  },
								  {
									"name": "p",
									"value": "ng"
								  }
								]
							  }
							],
							"prebidIndexSites": [
							  {
								"bp": "D",
								"id": 208226
							  },
							  {
								"bp": "M",
								"id": 213499
							  },
							  {
								"bp": "T",
								"id": 215434
							  }
							]
						  }
						}
					  },
					  {
						"properties": {
						  "id": "science/science",
						  "url": "/science/science",
						  "tagType": "Keyword",
						  "sectionId": "science",
						  "sectionName": "Science",
						  "webTitle": "Science",
						  "webUrl": "https://www.theguardian.com/science/science",
						  "references": [],
						  "commercial": {
							"editionBrandings": [
							  {
								"edition": {
								  "id": "UK"
								}
							  },
							  {
								"edition": {
								  "id": "US"
								}
							  },
							  {
								"edition": {
								  "id": "AU"
								}
							  },
							  {
								"edition": {
								  "id": "INT"
								}
							  }
							],
							"editionAdTargetings": [
							  {
								"edition": {
								  "id": "UK"
								},
								"paramSet": [
								  {
									"name": "edition",
									"value": "uk"
								  },
								  {
									"name": "k",
									"value": [
									  "science"
									]
								  },
								  {
									"name": "url",
									"value": "/science/science"
								  },
								  {
									"name": "ct",
									"value": "tag"
								  },
								  {
									"name": "p",
									"value": "ng"
								  }
								]
							  },
							  {
								"edition": {
								  "id": "US"
								},
								"paramSet": [
								  {
									"name": "k",
									"value": [
									  "science"
									]
								  },
								  {
									"name": "url",
									"value": "/science/science"
								  },
								  {
									"name": "ct",
									"value": "tag"
								  },
								  {
									"name": "p",
									"value": "ng"
								  },
								  {
									"name": "edition",
									"value": "us"
								  }
								]
							  },
							  {
								"edition": {
								  "id": "AU"
								},
								"paramSet": [
								  {
									"name": "k",
									"value": [
									  "science"
									]
								  },
								  {
									"name": "url",
									"value": "/science/science"
								  },
								  {
									"name": "ct",
									"value": "tag"
								  },
								  {
									"name": "p",
									"value": "ng"
								  },
								  {
									"name": "edition",
									"value": "au"
								  }
								]
							  },
							  {
								"edition": {
								  "id": "INT"
								},
								"paramSet": [
								  {
									"name": "k",
									"value": [
									  "science"
									]
								  },
								  {
									"name": "url",
									"value": "/science/science"
								  },
								  {
									"name": "ct",
									"value": "tag"
								  },
								  {
									"name": "edition",
									"value": "int"
								  },
								  {
									"name": "p",
									"value": "ng"
								  }
								]
							  }
							],
							"prebidIndexSites": [
							  {
								"bp": "D",
								"id": 208226
							  },
							  {
								"bp": "M",
								"id": 213499
							  },
							  {
								"bp": "T",
								"id": 215434
							  }
							]
						  }
						}
					  },
					  {
						"properties": {
						  "id": "uk/uk",
						  "url": "/uk/uk",
						  "tagType": "Keyword",
						  "sectionId": "uk-news",
						  "sectionName": "UK news",
						  "webTitle": "UK news",
						  "webUrl": "https://www.theguardian.com/uk/uk",
						  "references": [],
						  "commercial": {
							"editionBrandings": [
							  {
								"edition": {
								  "id": "UK"
								}
							  },
							  {
								"edition": {
								  "id": "US"
								}
							  },
							  {
								"edition": {
								  "id": "AU"
								}
							  },
							  {
								"edition": {
								  "id": "INT"
								}
							  }
							],
							"editionAdTargetings": [
							  {
								"edition": {
								  "id": "UK"
								},
								"paramSet": [
								  {
									"name": "k",
									"value": [
									  "uk/uk"
									]
								  },
								  {
									"name": "edition",
									"value": "uk"
								  },
								  {
									"name": "ct",
									"value": "tag"
								  },
								  {
									"name": "url",
									"value": "/uk/uk"
								  },
								  {
									"name": "p",
									"value": "ng"
								  }
								]
							  },
							  {
								"edition": {
								  "id": "US"
								},
								"paramSet": [
								  {
									"name": "k",
									"value": [
									  "uk/uk"
									]
								  },
								  {
									"name": "ct",
									"value": "tag"
								  },
								  {
									"name": "url",
									"value": "/uk/uk"
								  },
								  {
									"name": "p",
									"value": "ng"
								  },
								  {
									"name": "edition",
									"value": "us"
								  }
								]
							  },
							  {
								"edition": {
								  "id": "AU"
								},
								"paramSet": [
								  {
									"name": "k",
									"value": [
									  "uk/uk"
									]
								  },
								  {
									"name": "ct",
									"value": "tag"
								  },
								  {
									"name": "url",
									"value": "/uk/uk"
								  },
								  {
									"name": "p",
									"value": "ng"
								  },
								  {
									"name": "edition",
									"value": "au"
								  }
								]
							  },
							  {
								"edition": {
								  "id": "INT"
								},
								"paramSet": [
								  {
									"name": "k",
									"value": [
									  "uk/uk"
									]
								  },
								  {
									"name": "ct",
									"value": "tag"
								  },
								  {
									"name": "edition",
									"value": "int"
								  },
								  {
									"name": "url",
									"value": "/uk/uk"
								  },
								  {
									"name": "p",
									"value": "ng"
								  }
								]
							  }
							],
							"prebidIndexSites": [
							  {
								"bp": "D",
								"id": 208208
							  },
							  {
								"bp": "M",
								"id": 213482
							  },
							  {
								"bp": "T",
								"id": 215417
							  }
							]
						  }
						}
					  },
					  {
						"properties": {
						  "id": "world/coronavirus-outbreak",
						  "url": "/world/coronavirus-outbreak",
						  "tagType": "Keyword",
						  "sectionId": "world",
						  "sectionName": "World news",
						  "webTitle": "Coronavirus",
						  "webUrl": "https://www.theguardian.com/world/coronavirus-outbreak",
						  "references": [],
						  "commercial": {
							"editionBrandings": [
							  {
								"edition": {
								  "id": "UK"
								}
							  },
							  {
								"edition": {
								  "id": "US"
								}
							  },
							  {
								"edition": {
								  "id": "AU"
								}
							  },
							  {
								"edition": {
								  "id": "INT"
								}
							  }
							],
							"editionAdTargetings": [
							  {
								"edition": {
								  "id": "UK"
								},
								"paramSet": [
								  {
									"name": "edition",
									"value": "uk"
								  },
								  {
									"name": "ct",
									"value": "tag"
								  },
								  {
									"name": "p",
									"value": "ng"
								  },
								  {
									"name": "k",
									"value": [
									  "coronavirus-outbreak"
									]
								  },
								  {
									"name": "url",
									"value": "/world/coronavirus-outbreak"
								  }
								]
							  },
							  {
								"edition": {
								  "id": "US"
								},
								"paramSet": [
								  {
									"name": "ct",
									"value": "tag"
								  },
								  {
									"name": "p",
									"value": "ng"
								  },
								  {
									"name": "edition",
									"value": "us"
								  },
								  {
									"name": "k",
									"value": [
									  "coronavirus-outbreak"
									]
								  },
								  {
									"name": "url",
									"value": "/world/coronavirus-outbreak"
								  }
								]
							  },
							  {
								"edition": {
								  "id": "AU"
								},
								"paramSet": [
								  {
									"name": "ct",
									"value": "tag"
								  },
								  {
									"name": "p",
									"value": "ng"
								  },
								  {
									"name": "k",
									"value": [
									  "coronavirus-outbreak"
									]
								  },
								  {
									"name": "edition",
									"value": "au"
								  },
								  {
									"name": "url",
									"value": "/world/coronavirus-outbreak"
								  }
								]
							  },
							  {
								"edition": {
								  "id": "INT"
								},
								"paramSet": [
								  {
									"name": "ct",
									"value": "tag"
								  },
								  {
									"name": "edition",
									"value": "int"
								  },
								  {
									"name": "p",
									"value": "ng"
								  },
								  {
									"name": "k",
									"value": [
									  "coronavirus-outbreak"
									]
								  },
								  {
									"name": "url",
									"value": "/world/coronavirus-outbreak"
								  }
								]
							  }
							],
							"prebidIndexSites": [
							  {
								"bp": "D",
								"id": 204985
							  },
							  {
								"bp": "M",
								"id": 213473
							  },
							  {
								"bp": "T",
								"id": 215408
							  }
							]
						  }
						}
					  },
					  {
						"properties": {
						  "id": "science/infectiousdiseases",
						  "url": "/science/infectiousdiseases",
						  "tagType": "Keyword",
						  "sectionId": "science",
						  "sectionName": "Science",
						  "webTitle": "Infectious diseases",
						  "webUrl": "https://www.theguardian.com/science/infectiousdiseases",
						  "references": [],
						  "commercial": {
							"editionBrandings": [
							  {
								"edition": {
								  "id": "UK"
								}
							  },
							  {
								"edition": {
								  "id": "US"
								}
							  },
							  {
								"edition": {
								  "id": "AU"
								}
							  },
							  {
								"edition": {
								  "id": "INT"
								}
							  }
							],
							"editionAdTargetings": [
							  {
								"edition": {
								  "id": "UK"
								},
								"paramSet": [
								  {
									"name": "edition",
									"value": "uk"
								  },
								  {
									"name": "url",
									"value": "/science/infectiousdiseases"
								  },
								  {
									"name": "ct",
									"value": "tag"
								  },
								  {
									"name": "p",
									"value": "ng"
								  },
								  {
									"name": "k",
									"value": [
									  "infectiousdiseases"
									]
								  }
								]
							  },
							  {
								"edition": {
								  "id": "US"
								},
								"paramSet": [
								  {
									"name": "url",
									"value": "/science/infectiousdiseases"
								  },
								  {
									"name": "ct",
									"value": "tag"
								  },
								  {
									"name": "p",
									"value": "ng"
								  },
								  {
									"name": "edition",
									"value": "us"
								  },
								  {
									"name": "k",
									"value": [
									  "infectiousdiseases"
									]
								  }
								]
							  },
							  {
								"edition": {
								  "id": "AU"
								},
								"paramSet": [
								  {
									"name": "url",
									"value": "/science/infectiousdiseases"
								  },
								  {
									"name": "ct",
									"value": "tag"
								  },
								  {
									"name": "p",
									"value": "ng"
								  },
								  {
									"name": "edition",
									"value": "au"
								  },
								  {
									"name": "k",
									"value": [
									  "infectiousdiseases"
									]
								  }
								]
							  },
							  {
								"edition": {
								  "id": "INT"
								},
								"paramSet": [
								  {
									"name": "url",
									"value": "/science/infectiousdiseases"
								  },
								  {
									"name": "ct",
									"value": "tag"
								  },
								  {
									"name": "edition",
									"value": "int"
								  },
								  {
									"name": "p",
									"value": "ng"
								  },
								  {
									"name": "k",
									"value": [
									  "infectiousdiseases"
									]
								  }
								]
							  }
							],
							"prebidIndexSites": [
							  {
								"bp": "D",
								"id": 208226
							  },
							  {
								"bp": "M",
								"id": 213499
							  },
							  {
								"bp": "T",
								"id": 215434
							  }
							]
						  }
						}
					  },
					  {
						"properties": {
						  "id": "science/microbiology",
						  "url": "/science/microbiology",
						  "tagType": "Keyword",
						  "sectionId": "science",
						  "sectionName": "Science",
						  "webTitle": "Microbiology",
						  "webUrl": "https://www.theguardian.com/science/microbiology",
						  "references": [],
						  "commercial": {
							"editionBrandings": [
							  {
								"edition": {
								  "id": "UK"
								}
							  },
							  {
								"edition": {
								  "id": "US"
								}
							  },
							  {
								"edition": {
								  "id": "AU"
								}
							  },
							  {
								"edition": {
								  "id": "INT"
								}
							  }
							],
							"editionAdTargetings": [
							  {
								"edition": {
								  "id": "UK"
								},
								"paramSet": [
								  {
									"name": "edition",
									"value": "uk"
								  },
								  {
									"name": "k",
									"value": [
									  "microbiology"
									]
								  },
								  {
									"name": "ct",
									"value": "tag"
								  },
								  {
									"name": "p",
									"value": "ng"
								  },
								  {
									"name": "url",
									"value": "/science/microbiology"
								  }
								]
							  },
							  {
								"edition": {
								  "id": "US"
								},
								"paramSet": [
								  {
									"name": "k",
									"value": [
									  "microbiology"
									]
								  },
								  {
									"name": "ct",
									"value": "tag"
								  },
								  {
									"name": "p",
									"value": "ng"
								  },
								  {
									"name": "url",
									"value": "/science/microbiology"
								  },
								  {
									"name": "edition",
									"value": "us"
								  }
								]
							  },
							  {
								"edition": {
								  "id": "AU"
								},
								"paramSet": [
								  {
									"name": "k",
									"value": [
									  "microbiology"
									]
								  },
								  {
									"name": "ct",
									"value": "tag"
								  },
								  {
									"name": "p",
									"value": "ng"
								  },
								  {
									"name": "url",
									"value": "/science/microbiology"
								  },
								  {
									"name": "edition",
									"value": "au"
								  }
								]
							  },
							  {
								"edition": {
								  "id": "INT"
								},
								"paramSet": [
								  {
									"name": "k",
									"value": [
									  "microbiology"
									]
								  },
								  {
									"name": "ct",
									"value": "tag"
								  },
								  {
									"name": "edition",
									"value": "int"
								  },
								  {
									"name": "p",
									"value": "ng"
								  },
								  {
									"name": "url",
									"value": "/science/microbiology"
								  }
								]
							  }
							],
							"prebidIndexSites": [
							  {
								"bp": "D",
								"id": 208226
							  },
							  {
								"bp": "M",
								"id": 213499
							  },
							  {
								"bp": "T",
								"id": 215434
							  }
							]
						  }
						}
					  },
					  {
						"properties": {
						  "id": "science/biology",
						  "url": "/science/biology",
						  "tagType": "Keyword",
						  "sectionId": "science",
						  "sectionName": "Science",
						  "webTitle": "Biology",
						  "webUrl": "https://www.theguardian.com/science/biology",
						  "references": [],
						  "commercial": {
							"editionBrandings": [
							  {
								"edition": {
								  "id": "UK"
								}
							  },
							  {
								"edition": {
								  "id": "US"
								}
							  },
							  {
								"edition": {
								  "id": "AU"
								}
							  },
							  {
								"edition": {
								  "id": "INT"
								}
							  }
							],
							"editionAdTargetings": [
							  {
								"edition": {
								  "id": "UK"
								},
								"paramSet": [
								  {
									"name": "edition",
									"value": "uk"
								  },
								  {
									"name": "k",
									"value": [
									  "biology"
									]
								  },
								  {
									"name": "ct",
									"value": "tag"
								  },
								  {
									"name": "p",
									"value": "ng"
								  },
								  {
									"name": "url",
									"value": "/science/biology"
								  }
								]
							  },
							  {
								"edition": {
								  "id": "US"
								},
								"paramSet": [
								  {
									"name": "k",
									"value": [
									  "biology"
									]
								  },
								  {
									"name": "ct",
									"value": "tag"
								  },
								  {
									"name": "p",
									"value": "ng"
								  },
								  {
									"name": "url",
									"value": "/science/biology"
								  },
								  {
									"name": "edition",
									"value": "us"
								  }
								]
							  },
							  {
								"edition": {
								  "id": "AU"
								},
								"paramSet": [
								  {
									"name": "k",
									"value": [
									  "biology"
									]
								  },
								  {
									"name": "ct",
									"value": "tag"
								  },
								  {
									"name": "p",
									"value": "ng"
								  },
								  {
									"name": "url",
									"value": "/science/biology"
								  },
								  {
									"name": "edition",
									"value": "au"
								  }
								]
							  },
							  {
								"edition": {
								  "id": "INT"
								},
								"paramSet": [
								  {
									"name": "k",
									"value": [
									  "biology"
									]
								  },
								  {
									"name": "ct",
									"value": "tag"
								  },
								  {
									"name": "edition",
									"value": "int"
								  },
								  {
									"name": "p",
									"value": "ng"
								  },
								  {
									"name": "url",
									"value": "/science/biology"
								  }
								]
							  }
							],
							"prebidIndexSites": [
							  {
								"bp": "D",
								"id": 208226
							  },
							  {
								"bp": "M",
								"id": 213499
							  },
							  {
								"bp": "T",
								"id": 215434
							  }
							]
						  }
						}
					  },
					  {
						"properties": {
						  "id": "type/article",
						  "url": "/type/article",
						  "tagType": "Type",
						  "sectionId": "global",
						  "sectionName": "global",
						  "webTitle": "Article",
						  "webUrl": "https://www.theguardian.com/articles",
						  "references": [],
						  "commercial": {
							"editionBrandings": [
							  {
								"edition": {
								  "id": "UK"
								}
							  },
							  {
								"edition": {
								  "id": "US"
								}
							  },
							  {
								"edition": {
								  "id": "AU"
								}
							  },
							  {
								"edition": {
								  "id": "INT"
								}
							  }
							],
							"editionAdTargetings": [
							  {
								"edition": {
								  "id": "UK"
								},
								"paramSet": [
								  {
									"name": "edition",
									"value": "uk"
								  },
								  {
									"name": "ct",
									"value": "tag"
								  },
								  {
									"name": "url",
									"value": "/type/article"
								  },
								  {
									"name": "p",
									"value": "ng"
								  }
								]
							  },
							  {
								"edition": {
								  "id": "US"
								},
								"paramSet": [
								  {
									"name": "ct",
									"value": "tag"
								  },
								  {
									"name": "url",
									"value": "/type/article"
								  },
								  {
									"name": "p",
									"value": "ng"
								  },
								  {
									"name": "edition",
									"value": "us"
								  }
								]
							  },
							  {
								"edition": {
								  "id": "AU"
								},
								"paramSet": [
								  {
									"name": "ct",
									"value": "tag"
								  },
								  {
									"name": "url",
									"value": "/type/article"
								  },
								  {
									"name": "p",
									"value": "ng"
								  },
								  {
									"name": "edition",
									"value": "au"
								  }
								]
							  },
							  {
								"edition": {
								  "id": "INT"
								},
								"paramSet": [
								  {
									"name": "ct",
									"value": "tag"
								  },
								  {
									"name": "url",
									"value": "/type/article"
								  },
								  {
									"name": "edition",
									"value": "int"
								  },
								  {
									"name": "p",
									"value": "ng"
								  }
								]
							  }
							]
						  }
						}
					  },
					  {
						"properties": {
						  "id": "tone/news",
						  "url": "/tone/news",
						  "tagType": "Tone",
						  "sectionId": "global",
						  "sectionName": "global",
						  "webTitle": "News",
						  "webUrl": "https://www.theguardian.com/tone/news",
						  "references": [],
						  "commercial": {
							"editionBrandings": [
							  {
								"edition": {
								  "id": "UK"
								}
							  },
							  {
								"edition": {
								  "id": "US"
								}
							  },
							  {
								"edition": {
								  "id": "AU"
								}
							  },
							  {
								"edition": {
								  "id": "INT"
								}
							  }
							],
							"editionAdTargetings": [
							  {
								"edition": {
								  "id": "UK"
								},
								"paramSet": [
								  {
									"name": "edition",
									"value": "uk"
								  },
								  {
									"name": "ct",
									"value": "tag"
								  },
								  {
									"name": "tn",
									"value": [
									  "news"
									]
								  },
								  {
									"name": "p",
									"value": "ng"
								  },
								  {
									"name": "url",
									"value": "/tone/news"
								  }
								]
							  },
							  {
								"edition": {
								  "id": "US"
								},
								"paramSet": [
								  {
									"name": "ct",
									"value": "tag"
								  },
								  {
									"name": "tn",
									"value": [
									  "news"
									]
								  },
								  {
									"name": "p",
									"value": "ng"
								  },
								  {
									"name": "url",
									"value": "/tone/news"
								  },
								  {
									"name": "edition",
									"value": "us"
								  }
								]
							  },
							  {
								"edition": {
								  "id": "AU"
								},
								"paramSet": [
								  {
									"name": "ct",
									"value": "tag"
								  },
								  {
									"name": "tn",
									"value": [
									  "news"
									]
								  },
								  {
									"name": "p",
									"value": "ng"
								  },
								  {
									"name": "url",
									"value": "/tone/news"
								  },
								  {
									"name": "edition",
									"value": "au"
								  }
								]
							  },
							  {
								"edition": {
								  "id": "INT"
								},
								"paramSet": [
								  {
									"name": "ct",
									"value": "tag"
								  },
								  {
									"name": "tn",
									"value": [
									  "news"
									]
								  },
								  {
									"name": "edition",
									"value": "int"
								  },
								  {
									"name": "p",
									"value": "ng"
								  },
								  {
									"name": "url",
									"value": "/tone/news"
								  }
								]
							  }
							]
						  }
						}
					  },
					  {
						"properties": {
						  "id": "profile/linda-geddes",
						  "url": "/profile/linda-geddes",
						  "tagType": "Contributor",
						  "sectionId": "global",
						  "sectionName": "global",
						  "webTitle": "Linda Geddes",
						  "webUrl": "https://www.theguardian.com/profile/linda-geddes",
						  "bio": "<p>Linda Geddes is a Guardian science correspondent</p>",
						  "references": [],
						  "commercial": {
							"editionBrandings": [
							  {
								"edition": {
								  "id": "UK"
								}
							  },
							  {
								"edition": {
								  "id": "US"
								}
							  },
							  {
								"edition": {
								  "id": "AU"
								}
							  },
							  {
								"edition": {
								  "id": "INT"
								}
							  }
							],
							"editionAdTargetings": [
							  {
								"edition": {
								  "id": "UK"
								},
								"paramSet": [
								  {
									"name": "edition",
									"value": "uk"
								  },
								  {
									"name": "co",
									"value": [
									  "linda-geddes"
									]
								  },
								  {
									"name": "ct",
									"value": "tag"
								  },
								  {
									"name": "url",
									"value": "/profile/linda-geddes"
								  },
								  {
									"name": "p",
									"value": "ng"
								  }
								]
							  },
							  {
								"edition": {
								  "id": "US"
								},
								"paramSet": [
								  {
									"name": "co",
									"value": [
									  "linda-geddes"
									]
								  },
								  {
									"name": "ct",
									"value": "tag"
								  },
								  {
									"name": "url",
									"value": "/profile/linda-geddes"
								  },
								  {
									"name": "p",
									"value": "ng"
								  },
								  {
									"name": "edition",
									"value": "us"
								  }
								]
							  },
							  {
								"edition": {
								  "id": "AU"
								},
								"paramSet": [
								  {
									"name": "co",
									"value": [
									  "linda-geddes"
									]
								  },
								  {
									"name": "ct",
									"value": "tag"
								  },
								  {
									"name": "url",
									"value": "/profile/linda-geddes"
								  },
								  {
									"name": "p",
									"value": "ng"
								  },
								  {
									"name": "edition",
									"value": "au"
								  }
								]
							  },
							  {
								"edition": {
								  "id": "INT"
								},
								"paramSet": [
								  {
									"name": "co",
									"value": [
									  "linda-geddes"
									]
								  },
								  {
									"name": "ct",
									"value": "tag"
								  },
								  {
									"name": "edition",
									"value": "int"
								  },
								  {
									"name": "url",
									"value": "/profile/linda-geddes"
								  },
								  {
									"name": "p",
									"value": "ng"
								  }
								]
							  }
							]
						  }
						}
					  },
					  {
						"properties": {
						  "id": "publication/theguardian",
						  "url": "/publication/theguardian",
						  "tagType": "Publication",
						  "sectionId": "theguardian",
						  "sectionName": "From the Guardian",
						  "webTitle": "The Guardian",
						  "webUrl": "https://www.theguardian.com/theguardian/all",
						  "description": "All the latest from the world's leading liberal voice.",
						  "references": [],
						  "commercial": {
							"editionBrandings": [
							  {
								"edition": {
								  "id": "UK"
								}
							  },
							  {
								"edition": {
								  "id": "US"
								}
							  },
							  {
								"edition": {
								  "id": "AU"
								}
							  },
							  {
								"edition": {
								  "id": "INT"
								}
							  }
							],
							"editionAdTargetings": [
							  {
								"edition": {
								  "id": "UK"
								},
								"paramSet": [
								  {
									"name": "edition",
									"value": "uk"
								  },
								  {
									"name": "url",
									"value": "/publication/theguardian"
								  },
								  {
									"name": "ct",
									"value": "tag"
								  },
								  {
									"name": "p",
									"value": "ng"
								  }
								]
							  },
							  {
								"edition": {
								  "id": "US"
								},
								"paramSet": [
								  {
									"name": "url",
									"value": "/publication/theguardian"
								  },
								  {
									"name": "ct",
									"value": "tag"
								  },
								  {
									"name": "p",
									"value": "ng"
								  },
								  {
									"name": "edition",
									"value": "us"
								  }
								]
							  },
							  {
								"edition": {
								  "id": "AU"
								},
								"paramSet": [
								  {
									"name": "url",
									"value": "/publication/theguardian"
								  },
								  {
									"name": "ct",
									"value": "tag"
								  },
								  {
									"name": "p",
									"value": "ng"
								  },
								  {
									"name": "edition",
									"value": "au"
								  }
								]
							  },
							  {
								"edition": {
								  "id": "INT"
								},
								"paramSet": [
								  {
									"name": "url",
									"value": "/publication/theguardian"
								  },
								  {
									"name": "ct",
									"value": "tag"
								  },
								  {
									"name": "edition",
									"value": "int"
								  },
								  {
									"name": "p",
									"value": "ng"
								  }
								]
							  }
							],
							"prebidIndexSites": [
							  {
								"bp": "D",
								"id": 208213
							  },
							  {
								"bp": "M",
								"id": 213487
							  },
							  {
								"bp": "T",
								"id": 215422
							  }
							]
						  }
						}
					  },
					  {
						"properties": {
						  "id": "theguardian/mainsection",
						  "url": "/theguardian/mainsection",
						  "tagType": "NewspaperBook",
						  "sectionId": "news",
						  "sectionName": "News",
						  "webTitle": "Main section",
						  "webUrl": "https://www.theguardian.com/theguardian/mainsection",
						  "references": [],
						  "commercial": {
							"editionBrandings": [
							  {
								"edition": {
								  "id": "UK"
								}
							  },
							  {
								"edition": {
								  "id": "US"
								}
							  },
							  {
								"edition": {
								  "id": "AU"
								}
							  },
							  {
								"edition": {
								  "id": "INT"
								}
							  }
							],
							"editionAdTargetings": [
							  {
								"edition": {
								  "id": "UK"
								},
								"paramSet": [
								  {
									"name": "edition",
									"value": "uk"
								  },
								  {
									"name": "ct",
									"value": "tag"
								  },
								  {
									"name": "p",
									"value": "ng"
								  },
								  {
									"name": "url",
									"value": "/theguardian/mainsection"
								  }
								]
							  },
							  {
								"edition": {
								  "id": "US"
								},
								"paramSet": [
								  {
									"name": "ct",
									"value": "tag"
								  },
								  {
									"name": "p",
									"value": "ng"
								  },
								  {
									"name": "edition",
									"value": "us"
								  },
								  {
									"name": "url",
									"value": "/theguardian/mainsection"
								  }
								]
							  },
							  {
								"edition": {
								  "id": "AU"
								},
								"paramSet": [
								  {
									"name": "ct",
									"value": "tag"
								  },
								  {
									"name": "p",
									"value": "ng"
								  },
								  {
									"name": "edition",
									"value": "au"
								  },
								  {
									"name": "url",
									"value": "/theguardian/mainsection"
								  }
								]
							  },
							  {
								"edition": {
								  "id": "INT"
								},
								"paramSet": [
								  {
									"name": "ct",
									"value": "tag"
								  },
								  {
									"name": "edition",
									"value": "int"
								  },
								  {
									"name": "p",
									"value": "ng"
								  },
								  {
									"name": "url",
									"value": "/theguardian/mainsection"
								  }
								]
							  }
							],
							"prebidIndexSites": [
							  {
								"bp": "D",
								"id": 208234
							  },
							  {
								"bp": "M",
								"id": 213507
							  },
							  {
								"bp": "T",
								"id": 215442
							  }
							]
						  }
						}
					  },
					  {
						"properties": {
						  "id": "theguardian/mainsection/uknews",
						  "url": "/theguardian/mainsection/uknews",
						  "tagType": "NewspaperBookSection",
						  "sectionId": "uk-news",
						  "sectionName": "UK news",
						  "webTitle": "UK news",
						  "webUrl": "https://www.theguardian.com/theguardian/mainsection/uknews",
						  "references": [],
						  "commercial": {
							"editionBrandings": [
							  {
								"edition": {
								  "id": "UK"
								}
							  },
							  {
								"edition": {
								  "id": "US"
								}
							  },
							  {
								"edition": {
								  "id": "AU"
								}
							  },
							  {
								"edition": {
								  "id": "INT"
								}
							  }
							],
							"editionAdTargetings": [
							  {
								"edition": {
								  "id": "UK"
								},
								"paramSet": [
								  {
									"name": "edition",
									"value": "uk"
								  },
								  {
									"name": "ct",
									"value": "tag"
								  },
								  {
									"name": "url",
									"value": "/theguardian/mainsection/uknews"
								  },
								  {
									"name": "p",
									"value": "ng"
								  }
								]
							  },
							  {
								"edition": {
								  "id": "US"
								},
								"paramSet": [
								  {
									"name": "ct",
									"value": "tag"
								  },
								  {
									"name": "url",
									"value": "/theguardian/mainsection/uknews"
								  },
								  {
									"name": "p",
									"value": "ng"
								  },
								  {
									"name": "edition",
									"value": "us"
								  }
								]
							  },
							  {
								"edition": {
								  "id": "AU"
								},
								"paramSet": [
								  {
									"name": "ct",
									"value": "tag"
								  },
								  {
									"name": "url",
									"value": "/theguardian/mainsection/uknews"
								  },
								  {
									"name": "p",
									"value": "ng"
								  },
								  {
									"name": "edition",
									"value": "au"
								  }
								]
							  },
							  {
								"edition": {
								  "id": "INT"
								},
								"paramSet": [
								  {
									"name": "ct",
									"value": "tag"
								  },
								  {
									"name": "edition",
									"value": "int"
								  },
								  {
									"name": "url",
									"value": "/theguardian/mainsection/uknews"
								  },
								  {
									"name": "p",
									"value": "ng"
								  }
								]
							  }
							],
							"prebidIndexSites": [
							  {
								"bp": "D",
								"id": 208208
							  },
							  {
								"bp": "M",
								"id": 213482
							  },
							  {
								"bp": "T",
								"id": 215417
							  }
							]
						  }
						}
					  },
					  {
						"properties": {
						  "id": "tracking/commissioningdesk/uk-home-news",
						  "url": "/tracking/commissioningdesk/uk-home-news",
						  "tagType": "Tracking",
						  "sectionId": "global",
						  "sectionName": "global",
						  "webTitle": "UK Home News",
						  "webUrl": "https://www.theguardian.com/tracking/commissioningdesk/uk-home-news",
						  "references": [],
						  "commercial": {
							"editionBrandings": [
							  {
								"edition": {
								  "id": "UK"
								}
							  },
							  {
								"edition": {
								  "id": "US"
								}
							  },
							  {
								"edition": {
								  "id": "AU"
								}
							  },
							  {
								"edition": {
								  "id": "INT"
								}
							  }
							],
							"editionAdTargetings": [
							  {
								"edition": {
								  "id": "UK"
								},
								"paramSet": [
								  {
									"name": "edition",
									"value": "uk"
								  },
								  {
									"name": "url",
									"value": "/tracking/commissioningdesk/uk-home-news"
								  },
								  {
									"name": "ct",
									"value": "tag"
								  },
								  {
									"name": "p",
									"value": "ng"
								  }
								]
							  },
							  {
								"edition": {
								  "id": "US"
								},
								"paramSet": [
								  {
									"name": "url",
									"value": "/tracking/commissioningdesk/uk-home-news"
								  },
								  {
									"name": "ct",
									"value": "tag"
								  },
								  {
									"name": "p",
									"value": "ng"
								  },
								  {
									"name": "edition",
									"value": "us"
								  }
								]
							  },
							  {
								"edition": {
								  "id": "AU"
								},
								"paramSet": [
								  {
									"name": "url",
									"value": "/tracking/commissioningdesk/uk-home-news"
								  },
								  {
									"name": "ct",
									"value": "tag"
								  },
								  {
									"name": "p",
									"value": "ng"
								  },
								  {
									"name": "edition",
									"value": "au"
								  }
								]
							  },
							  {
								"edition": {
								  "id": "INT"
								},
								"paramSet": [
								  {
									"name": "url",
									"value": "/tracking/commissioningdesk/uk-home-news"
								  },
								  {
									"name": "ct",
									"value": "tag"
								  },
								  {
									"name": "edition",
									"value": "int"
								  },
								  {
									"name": "p",
									"value": "ng"
								  }
								]
							  }
							]
						  }
						}
					  }
					]
				  }
				},
				"maybeContentId": "science/2022/may/30/medical-research-stalled-as-nhs-focuses-on-small-number-of-trials-experts-say",
				"isLiveBlog": false,
				"isCrossword": false,
				"byline": "Linda Geddes Science correspondent",
				"webTitle": "Medical research stalled as NHS focuses on small number of trials, experts say",
				"linkText": "Medical research stalled as NHS focuses on small number of trials, experts say",
				"maybeFrontPublicationDate": 1653887229095,
				"webUrl": "https://www.theguardian.com/science/2022/may/30/medical-research-stalled-as-nhs-focuses-on-small-number-of-trials-experts-say",
				"editionBrandings": [
				  {
					"edition": {
					  "id": "UK"
					}
				  },
				  {
					"edition": {
					  "id": "US"
					}
				  },
				  {
					"edition": {
					  "id": "AU"
					}
				  },
				  {
					"edition": {
					  "id": "INT"
					}
				  }
				]
			  },
			  "header": {
				"isVideo": false,
				"isComment": false,
				"isGallery": false,
				"isAudio": false,
				"kicker": {
				  "type": "FreeHtmlKicker",
				  "item": {
					"properties": {
					  "kickerText": "NHS"
					},
					"body": "NHS"
				  }
				},
				"headline": "Medical research 'stalled' due to focus on small number of trials",
				"url": "/science/2022/may/30/medical-research-stalled-as-nhs-focuses-on-small-number-of-trials-experts-say",
				"hasMainVideoElement": false
			  },
			  "card": {
				"id": "science/2022/may/30/medical-research-stalled-as-nhs-focuses-on-small-number-of-trials-experts-say",
				"cardStyle": {
				  "type": "DefaultCardstyle"
				},
				"webPublicationDateOption": 1653865273000,
				"lastModifiedOption": 1653908096000,
				"trailText": "Report outlines ‘research waste’ that occurred during the pandemic, with weakly designed trials exposing millions to unproven treatments",
				"shortUrlPath": "/p/yddjv",
				"shortUrl": "https://www.theguardian.com/p/yddjv",
				"group": "0",
				"isLive": false
			  },
			  "discussion": {
				"isCommentable": false,
				"isClosedForComments": true,
				"discussionId": "/p/yddjv"
			  },
			  "display": {
				"isBoosted": false,
				"showBoostedHeadline": false,
				"showQuotedHeadline": false,
				"imageHide": false,
				"showLivePlayable": false
			  },
			  "format": {
				"design": "ArticleDesign",
				"theme": "NewsPillar",
				"display": "StandardDisplay"
			  },
			  "enriched": {},
			  "supportingContent": [],
			  "cardStyle": {
				"type": "DefaultCardstyle"
			  },
			  "type": "CuratedContent"
			},
			{
			  "properties": {
				"isBreaking": false,
				"showMainVideo": false,
				"showKickerTag": false,
				"showByline": false,
				"imageSlideshowReplace": false,
				"maybeContent": {
				  "trail": {
					"trailPicture": {
					  "allImages": [
						{
						  "index": 1,
						  "fields": {
							"displayCredit": "true",
							"source": "PA",
							"photographer": "Arthur Carron",
							"isMaster": "true",
							"altText": "Jon Boutcher",
							"height": "2160",
							"credit": "Photograph: Arthur Carron/PA",
							"mediaId": "8f766f5a197bc18fb93d48da6124f2bf5deb821a",
							"width": "3600"
						  },
						  "mediaType": "Image",
						  "url": "https://media.guim.co.uk/8f766f5a197bc18fb93d48da6124f2bf5deb821a/0_150_3600_2160/master/3600.jpg"
						}
					  ]
					},
					"byline": "Vikram Dodd Police and crime correspondent",
					"thumbnailPath": "https://i.guim.co.uk/img/media/8f766f5a197bc18fb93d48da6124f2bf5deb821a/0_150_3600_2160/500.jpg?quality=85&auto=format&fit=max&s=f3a93a5319736bb3925af5e8ed7e75f7",
					"webPublicationDate": 1653846600000
				  },
				  "metadata": {
					"id": "uk-news/2022/may/29/chief-who-challenged-met-on-race-ousted-as-commissioner-candidate",
					"webTitle": "Chief who challenged police on race ousted as Met commissioner candidate",
					"webUrl": "https://www.theguardian.com/uk-news/2022/may/29/chief-who-challenged-met-on-race-ousted-as-commissioner-candidate",
					"type": "Article",
					"pillar": {
					  "name": "News"
					},
					"sectionId": {
					  "value": "uk-news"
					},
					"designType": "Article",
					"format": {
					  "design": "ArticleDesign",
					  "theme": "NewsPillar",
					  "display": "StandardDisplay"
					}
				  },
				  "fields": {
					"main": "<figure class=\"element element-image\" data-media-id=\"8f766f5a197bc18fb93d48da6124f2bf5deb821a\"> <img src=\"https://media.guim.co.uk/8f766f5a197bc18fb93d48da6124f2bf5deb821a/0_150_3600_2160/1000.jpg\" alt=\"Jon Boutcher\" width=\"1000\" height=\"600\" class=\"gu-image\" /> <figcaption> <span class=\"element-image__caption\">In a 2018 Guardian interview, Boutcher said of making policing less white-dominated: ‘It’s not rocket science, increasing the numbers of black, minority and ethnic officers.’</span> <span class=\"element-image__credit\">Photograph: Arthur Carron/PA</span> </figcaption> </figure>",
					"body": "<p>A police chief who criticised his colleagues for failures on racial justice has been ousted as a candidate to be the next commissioner of the Metropolitan police.</p><p>Jon Boutcher, the former head of the Bedfordshire force and a former Met senior counter-terrorism detective, applied three weeks ago to succeed Cressida Dick as Britain’s top officer. But the Guardian has learned that he has been told by the Home Office that his application will no longer be considered.</p>",
					"standfirst": "<p>Jon Boutcher, former head of the Bedfordshire force, has been told his application will no longer be considered</p>"
				  },
				  "elements": {
					"mediaAtoms": []
				  },
				  "tags": {
					"tags": [
					  {
						"properties": {
						  "id": "uk/metropolitan-police",
						  "url": "/uk/metropolitan-police",
						  "tagType": "Keyword",
						  "sectionId": "uk-news",
						  "sectionName": "UK news",
						  "webTitle": "Metropolitan police",
						  "webUrl": "https://www.theguardian.com/uk/metropolitan-police",
						  "references": [],
						  "commercial": {
							"editionBrandings": [
							  {
								"edition": {
								  "id": "UK"
								}
							  },
							  {
								"edition": {
								  "id": "US"
								}
							  },
							  {
								"edition": {
								  "id": "AU"
								}
							  },
							  {
								"edition": {
								  "id": "INT"
								}
							  }
							],
							"editionAdTargetings": [
							  {
								"edition": {
								  "id": "UK"
								},
								"paramSet": [
								  {
									"name": "edition",
									"value": "uk"
								  },
								  {
									"name": "k",
									"value": [
									  "metropolitan-police"
									]
								  },
								  {
									"name": "ct",
									"value": "tag"
								  },
								  {
									"name": "url",
									"value": "/uk/metropolitan-police"
								  },
								  {
									"name": "p",
									"value": "ng"
								  }
								]
							  },
							  {
								"edition": {
								  "id": "US"
								},
								"paramSet": [
								  {
									"name": "k",
									"value": [
									  "metropolitan-police"
									]
								  },
								  {
									"name": "ct",
									"value": "tag"
								  },
								  {
									"name": "url",
									"value": "/uk/metropolitan-police"
								  },
								  {
									"name": "p",
									"value": "ng"
								  },
								  {
									"name": "edition",
									"value": "us"
								  }
								]
							  },
							  {
								"edition": {
								  "id": "AU"
								},
								"paramSet": [
								  {
									"name": "k",
									"value": [
									  "metropolitan-police"
									]
								  },
								  {
									"name": "ct",
									"value": "tag"
								  },
								  {
									"name": "url",
									"value": "/uk/metropolitan-police"
								  },
								  {
									"name": "p",
									"value": "ng"
								  },
								  {
									"name": "edition",
									"value": "au"
								  }
								]
							  },
							  {
								"edition": {
								  "id": "INT"
								},
								"paramSet": [
								  {
									"name": "k",
									"value": [
									  "metropolitan-police"
									]
								  },
								  {
									"name": "ct",
									"value": "tag"
								  },
								  {
									"name": "url",
									"value": "/uk/metropolitan-police"
								  },
								  {
									"name": "edition",
									"value": "int"
								  },
								  {
									"name": "p",
									"value": "ng"
								  }
								]
							  }
							],
							"prebidIndexSites": [
							  {
								"bp": "D",
								"id": 208208
							  },
							  {
								"bp": "M",
								"id": 213482
							  },
							  {
								"bp": "T",
								"id": 215417
							  }
							]
						  }
						}
					  },
					  {
						"properties": {
						  "id": "uk/police",
						  "url": "/uk/police",
						  "tagType": "Keyword",
						  "sectionId": "uk-news",
						  "sectionName": "UK news",
						  "webTitle": "Police",
						  "webUrl": "https://www.theguardian.com/uk/police",
						  "references": [],
						  "commercial": {
							"editionBrandings": [
							  {
								"edition": {
								  "id": "UK"
								}
							  },
							  {
								"edition": {
								  "id": "US"
								}
							  },
							  {
								"edition": {
								  "id": "AU"
								}
							  },
							  {
								"edition": {
								  "id": "INT"
								}
							  }
							],
							"editionAdTargetings": [
							  {
								"edition": {
								  "id": "UK"
								},
								"paramSet": [
								  {
									"name": "edition",
									"value": "uk"
								  },
								  {
									"name": "url",
									"value": "/uk/police"
								  },
								  {
									"name": "ct",
									"value": "tag"
								  },
								  {
									"name": "k",
									"value": [
									  "police"
									]
								  },
								  {
									"name": "p",
									"value": "ng"
								  }
								]
							  },
							  {
								"edition": {
								  "id": "US"
								},
								"paramSet": [
								  {
									"name": "url",
									"value": "/uk/police"
								  },
								  {
									"name": "ct",
									"value": "tag"
								  },
								  {
									"name": "k",
									"value": [
									  "police"
									]
								  },
								  {
									"name": "p",
									"value": "ng"
								  },
								  {
									"name": "edition",
									"value": "us"
								  }
								]
							  },
							  {
								"edition": {
								  "id": "AU"
								},
								"paramSet": [
								  {
									"name": "url",
									"value": "/uk/police"
								  },
								  {
									"name": "ct",
									"value": "tag"
								  },
								  {
									"name": "k",
									"value": [
									  "police"
									]
								  },
								  {
									"name": "p",
									"value": "ng"
								  },
								  {
									"name": "edition",
									"value": "au"
								  }
								]
							  },
							  {
								"edition": {
								  "id": "INT"
								},
								"paramSet": [
								  {
									"name": "url",
									"value": "/uk/police"
								  },
								  {
									"name": "ct",
									"value": "tag"
								  },
								  {
									"name": "edition",
									"value": "int"
								  },
								  {
									"name": "k",
									"value": [
									  "police"
									]
								  },
								  {
									"name": "p",
									"value": "ng"
								  }
								]
							  }
							],
							"prebidIndexSites": [
							  {
								"bp": "D",
								"id": 208208
							  },
							  {
								"bp": "M",
								"id": 213482
							  },
							  {
								"bp": "T",
								"id": 215417
							  }
							]
						  }
						}
					  },
					  {
						"properties": {
						  "id": "uk/london",
						  "url": "/uk/london",
						  "tagType": "Keyword",
						  "sectionId": "uk-news",
						  "sectionName": "UK news",
						  "webTitle": "London",
						  "webUrl": "https://www.theguardian.com/uk/london",
						  "references": [],
						  "commercial": {
							"editionBrandings": [
							  {
								"edition": {
								  "id": "UK"
								}
							  },
							  {
								"edition": {
								  "id": "US"
								}
							  },
							  {
								"edition": {
								  "id": "AU"
								}
							  },
							  {
								"edition": {
								  "id": "INT"
								}
							  }
							],
							"editionAdTargetings": [
							  {
								"edition": {
								  "id": "UK"
								},
								"paramSet": [
								  {
									"name": "edition",
									"value": "uk"
								  },
								  {
									"name": "url",
									"value": "/uk/london"
								  },
								  {
									"name": "k",
									"value": [
									  "london"
									]
								  },
								  {
									"name": "ct",
									"value": "tag"
								  },
								  {
									"name": "p",
									"value": "ng"
								  }
								]
							  },
							  {
								"edition": {
								  "id": "US"
								},
								"paramSet": [
								  {
									"name": "url",
									"value": "/uk/london"
								  },
								  {
									"name": "k",
									"value": [
									  "london"
									]
								  },
								  {
									"name": "ct",
									"value": "tag"
								  },
								  {
									"name": "p",
									"value": "ng"
								  },
								  {
									"name": "edition",
									"value": "us"
								  }
								]
							  },
							  {
								"edition": {
								  "id": "AU"
								},
								"paramSet": [
								  {
									"name": "url",
									"value": "/uk/london"
								  },
								  {
									"name": "k",
									"value": [
									  "london"
									]
								  },
								  {
									"name": "ct",
									"value": "tag"
								  },
								  {
									"name": "p",
									"value": "ng"
								  },
								  {
									"name": "edition",
									"value": "au"
								  }
								]
							  },
							  {
								"edition": {
								  "id": "INT"
								},
								"paramSet": [
								  {
									"name": "url",
									"value": "/uk/london"
								  },
								  {
									"name": "k",
									"value": [
									  "london"
									]
								  },
								  {
									"name": "ct",
									"value": "tag"
								  },
								  {
									"name": "edition",
									"value": "int"
								  },
								  {
									"name": "p",
									"value": "ng"
								  }
								]
							  }
							],
							"prebidIndexSites": [
							  {
								"bp": "D",
								"id": 208208
							  },
							  {
								"bp": "M",
								"id": 213482
							  },
							  {
								"bp": "T",
								"id": 215417
							  }
							]
						  }
						}
					  },
					  {
						"properties": {
						  "id": "uk/uk",
						  "url": "/uk/uk",
						  "tagType": "Keyword",
						  "sectionId": "uk-news",
						  "sectionName": "UK news",
						  "webTitle": "UK news",
						  "webUrl": "https://www.theguardian.com/uk/uk",
						  "references": [],
						  "commercial": {
							"editionBrandings": [
							  {
								"edition": {
								  "id": "UK"
								}
							  },
							  {
								"edition": {
								  "id": "US"
								}
							  },
							  {
								"edition": {
								  "id": "AU"
								}
							  },
							  {
								"edition": {
								  "id": "INT"
								}
							  }
							],
							"editionAdTargetings": [
							  {
								"edition": {
								  "id": "UK"
								},
								"paramSet": [
								  {
									"name": "k",
									"value": [
									  "uk/uk"
									]
								  },
								  {
									"name": "edition",
									"value": "uk"
								  },
								  {
									"name": "ct",
									"value": "tag"
								  },
								  {
									"name": "url",
									"value": "/uk/uk"
								  },
								  {
									"name": "p",
									"value": "ng"
								  }
								]
							  },
							  {
								"edition": {
								  "id": "US"
								},
								"paramSet": [
								  {
									"name": "k",
									"value": [
									  "uk/uk"
									]
								  },
								  {
									"name": "ct",
									"value": "tag"
								  },
								  {
									"name": "url",
									"value": "/uk/uk"
								  },
								  {
									"name": "p",
									"value": "ng"
								  },
								  {
									"name": "edition",
									"value": "us"
								  }
								]
							  },
							  {
								"edition": {
								  "id": "AU"
								},
								"paramSet": [
								  {
									"name": "k",
									"value": [
									  "uk/uk"
									]
								  },
								  {
									"name": "ct",
									"value": "tag"
								  },
								  {
									"name": "url",
									"value": "/uk/uk"
								  },
								  {
									"name": "p",
									"value": "ng"
								  },
								  {
									"name": "edition",
									"value": "au"
								  }
								]
							  },
							  {
								"edition": {
								  "id": "INT"
								},
								"paramSet": [
								  {
									"name": "k",
									"value": [
									  "uk/uk"
									]
								  },
								  {
									"name": "ct",
									"value": "tag"
								  },
								  {
									"name": "edition",
									"value": "int"
								  },
								  {
									"name": "url",
									"value": "/uk/uk"
								  },
								  {
									"name": "p",
									"value": "ng"
								  }
								]
							  }
							],
							"prebidIndexSites": [
							  {
								"bp": "D",
								"id": 208208
							  },
							  {
								"bp": "M",
								"id": 213482
							  },
							  {
								"bp": "T",
								"id": 215417
							  }
							]
						  }
						}
					  },
					  {
						"properties": {
						  "id": "type/article",
						  "url": "/type/article",
						  "tagType": "Type",
						  "sectionId": "global",
						  "sectionName": "global",
						  "webTitle": "Article",
						  "webUrl": "https://www.theguardian.com/articles",
						  "references": [],
						  "commercial": {
							"editionBrandings": [
							  {
								"edition": {
								  "id": "UK"
								}
							  },
							  {
								"edition": {
								  "id": "US"
								}
							  },
							  {
								"edition": {
								  "id": "AU"
								}
							  },
							  {
								"edition": {
								  "id": "INT"
								}
							  }
							],
							"editionAdTargetings": [
							  {
								"edition": {
								  "id": "UK"
								},
								"paramSet": [
								  {
									"name": "edition",
									"value": "uk"
								  },
								  {
									"name": "ct",
									"value": "tag"
								  },
								  {
									"name": "url",
									"value": "/type/article"
								  },
								  {
									"name": "p",
									"value": "ng"
								  }
								]
							  },
							  {
								"edition": {
								  "id": "US"
								},
								"paramSet": [
								  {
									"name": "ct",
									"value": "tag"
								  },
								  {
									"name": "url",
									"value": "/type/article"
								  },
								  {
									"name": "p",
									"value": "ng"
								  },
								  {
									"name": "edition",
									"value": "us"
								  }
								]
							  },
							  {
								"edition": {
								  "id": "AU"
								},
								"paramSet": [
								  {
									"name": "ct",
									"value": "tag"
								  },
								  {
									"name": "url",
									"value": "/type/article"
								  },
								  {
									"name": "p",
									"value": "ng"
								  },
								  {
									"name": "edition",
									"value": "au"
								  }
								]
							  },
							  {
								"edition": {
								  "id": "INT"
								},
								"paramSet": [
								  {
									"name": "ct",
									"value": "tag"
								  },
								  {
									"name": "url",
									"value": "/type/article"
								  },
								  {
									"name": "edition",
									"value": "int"
								  },
								  {
									"name": "p",
									"value": "ng"
								  }
								]
							  }
							]
						  }
						}
					  },
					  {
						"properties": {
						  "id": "tone/news",
						  "url": "/tone/news",
						  "tagType": "Tone",
						  "sectionId": "global",
						  "sectionName": "global",
						  "webTitle": "News",
						  "webUrl": "https://www.theguardian.com/tone/news",
						  "references": [],
						  "commercial": {
							"editionBrandings": [
							  {
								"edition": {
								  "id": "UK"
								}
							  },
							  {
								"edition": {
								  "id": "US"
								}
							  },
							  {
								"edition": {
								  "id": "AU"
								}
							  },
							  {
								"edition": {
								  "id": "INT"
								}
							  }
							],
							"editionAdTargetings": [
							  {
								"edition": {
								  "id": "UK"
								},
								"paramSet": [
								  {
									"name": "edition",
									"value": "uk"
								  },
								  {
									"name": "ct",
									"value": "tag"
								  },
								  {
									"name": "tn",
									"value": [
									  "news"
									]
								  },
								  {
									"name": "p",
									"value": "ng"
								  },
								  {
									"name": "url",
									"value": "/tone/news"
								  }
								]
							  },
							  {
								"edition": {
								  "id": "US"
								},
								"paramSet": [
								  {
									"name": "ct",
									"value": "tag"
								  },
								  {
									"name": "tn",
									"value": [
									  "news"
									]
								  },
								  {
									"name": "p",
									"value": "ng"
								  },
								  {
									"name": "url",
									"value": "/tone/news"
								  },
								  {
									"name": "edition",
									"value": "us"
								  }
								]
							  },
							  {
								"edition": {
								  "id": "AU"
								},
								"paramSet": [
								  {
									"name": "ct",
									"value": "tag"
								  },
								  {
									"name": "tn",
									"value": [
									  "news"
									]
								  },
								  {
									"name": "p",
									"value": "ng"
								  },
								  {
									"name": "url",
									"value": "/tone/news"
								  },
								  {
									"name": "edition",
									"value": "au"
								  }
								]
							  },
							  {
								"edition": {
								  "id": "INT"
								},
								"paramSet": [
								  {
									"name": "ct",
									"value": "tag"
								  },
								  {
									"name": "tn",
									"value": [
									  "news"
									]
								  },
								  {
									"name": "edition",
									"value": "int"
								  },
								  {
									"name": "p",
									"value": "ng"
								  },
								  {
									"name": "url",
									"value": "/tone/news"
								  }
								]
							  }
							]
						  }
						}
					  },
					  {
						"properties": {
						  "id": "profile/vikramdodd",
						  "url": "/profile/vikramdodd",
						  "tagType": "Contributor",
						  "sectionId": "global",
						  "sectionName": "global",
						  "webTitle": "Vikram Dodd",
						  "webUrl": "https://www.theguardian.com/profile/vikramdodd",
						  "bio": "<p>Vikram Dodd is a <a href=\"http://www.guardian.co.uk/uk/ukcrime\">crime correspondent</a></p>",
						  "contributorLargeImagePath": "https://uploads.guim.co.uk/2017/12/26/Vikram_Dodd,_L.png",
						  "bylineImageUrl": "https://uploads.guim.co.uk/2017/12/26/Vikram-Dodd.jpg",
						  "references": [],
						  "commercial": {
							"editionBrandings": [
							  {
								"edition": {
								  "id": "UK"
								}
							  },
							  {
								"edition": {
								  "id": "US"
								}
							  },
							  {
								"edition": {
								  "id": "AU"
								}
							  },
							  {
								"edition": {
								  "id": "INT"
								}
							  }
							],
							"editionAdTargetings": [
							  {
								"edition": {
								  "id": "UK"
								},
								"paramSet": [
								  {
									"name": "edition",
									"value": "uk"
								  },
								  {
									"name": "url",
									"value": "/profile/vikramdodd"
								  },
								  {
									"name": "ct",
									"value": "tag"
								  },
								  {
									"name": "p",
									"value": "ng"
								  },
								  {
									"name": "co",
									"value": [
									  "vikramdodd"
									]
								  }
								]
							  },
							  {
								"edition": {
								  "id": "US"
								},
								"paramSet": [
								  {
									"name": "url",
									"value": "/profile/vikramdodd"
								  },
								  {
									"name": "ct",
									"value": "tag"
								  },
								  {
									"name": "p",
									"value": "ng"
								  },
								  {
									"name": "edition",
									"value": "us"
								  },
								  {
									"name": "co",
									"value": [
									  "vikramdodd"
									]
								  }
								]
							  },
							  {
								"edition": {
								  "id": "AU"
								},
								"paramSet": [
								  {
									"name": "url",
									"value": "/profile/vikramdodd"
								  },
								  {
									"name": "ct",
									"value": "tag"
								  },
								  {
									"name": "p",
									"value": "ng"
								  },
								  {
									"name": "edition",
									"value": "au"
								  },
								  {
									"name": "co",
									"value": [
									  "vikramdodd"
									]
								  }
								]
							  },
							  {
								"edition": {
								  "id": "INT"
								},
								"paramSet": [
								  {
									"name": "url",
									"value": "/profile/vikramdodd"
								  },
								  {
									"name": "ct",
									"value": "tag"
								  },
								  {
									"name": "edition",
									"value": "int"
								  },
								  {
									"name": "p",
									"value": "ng"
								  },
								  {
									"name": "co",
									"value": [
									  "vikramdodd"
									]
								  }
								]
							  }
							]
						  }
						}
					  },
					  {
						"properties": {
						  "id": "publication/theguardian",
						  "url": "/publication/theguardian",
						  "tagType": "Publication",
						  "sectionId": "theguardian",
						  "sectionName": "From the Guardian",
						  "webTitle": "The Guardian",
						  "webUrl": "https://www.theguardian.com/theguardian/all",
						  "description": "All the latest from the world's leading liberal voice.",
						  "references": [],
						  "commercial": {
							"editionBrandings": [
							  {
								"edition": {
								  "id": "UK"
								}
							  },
							  {
								"edition": {
								  "id": "US"
								}
							  },
							  {
								"edition": {
								  "id": "AU"
								}
							  },
							  {
								"edition": {
								  "id": "INT"
								}
							  }
							],
							"editionAdTargetings": [
							  {
								"edition": {
								  "id": "UK"
								},
								"paramSet": [
								  {
									"name": "edition",
									"value": "uk"
								  },
								  {
									"name": "url",
									"value": "/publication/theguardian"
								  },
								  {
									"name": "ct",
									"value": "tag"
								  },
								  {
									"name": "p",
									"value": "ng"
								  }
								]
							  },
							  {
								"edition": {
								  "id": "US"
								},
								"paramSet": [
								  {
									"name": "url",
									"value": "/publication/theguardian"
								  },
								  {
									"name": "ct",
									"value": "tag"
								  },
								  {
									"name": "p",
									"value": "ng"
								  },
								  {
									"name": "edition",
									"value": "us"
								  }
								]
							  },
							  {
								"edition": {
								  "id": "AU"
								},
								"paramSet": [
								  {
									"name": "url",
									"value": "/publication/theguardian"
								  },
								  {
									"name": "ct",
									"value": "tag"
								  },
								  {
									"name": "p",
									"value": "ng"
								  },
								  {
									"name": "edition",
									"value": "au"
								  }
								]
							  },
							  {
								"edition": {
								  "id": "INT"
								},
								"paramSet": [
								  {
									"name": "url",
									"value": "/publication/theguardian"
								  },
								  {
									"name": "ct",
									"value": "tag"
								  },
								  {
									"name": "edition",
									"value": "int"
								  },
								  {
									"name": "p",
									"value": "ng"
								  }
								]
							  }
							],
							"prebidIndexSites": [
							  {
								"bp": "D",
								"id": 208213
							  },
							  {
								"bp": "M",
								"id": 213487
							  },
							  {
								"bp": "T",
								"id": 215422
							  }
							]
						  }
						}
					  },
					  {
						"properties": {
						  "id": "theguardian/mainsection",
						  "url": "/theguardian/mainsection",
						  "tagType": "NewspaperBook",
						  "sectionId": "news",
						  "sectionName": "News",
						  "webTitle": "Main section",
						  "webUrl": "https://www.theguardian.com/theguardian/mainsection",
						  "references": [],
						  "commercial": {
							"editionBrandings": [
							  {
								"edition": {
								  "id": "UK"
								}
							  },
							  {
								"edition": {
								  "id": "US"
								}
							  },
							  {
								"edition": {
								  "id": "AU"
								}
							  },
							  {
								"edition": {
								  "id": "INT"
								}
							  }
							],
							"editionAdTargetings": [
							  {
								"edition": {
								  "id": "UK"
								},
								"paramSet": [
								  {
									"name": "edition",
									"value": "uk"
								  },
								  {
									"name": "ct",
									"value": "tag"
								  },
								  {
									"name": "p",
									"value": "ng"
								  },
								  {
									"name": "url",
									"value": "/theguardian/mainsection"
								  }
								]
							  },
							  {
								"edition": {
								  "id": "US"
								},
								"paramSet": [
								  {
									"name": "ct",
									"value": "tag"
								  },
								  {
									"name": "p",
									"value": "ng"
								  },
								  {
									"name": "edition",
									"value": "us"
								  },
								  {
									"name": "url",
									"value": "/theguardian/mainsection"
								  }
								]
							  },
							  {
								"edition": {
								  "id": "AU"
								},
								"paramSet": [
								  {
									"name": "ct",
									"value": "tag"
								  },
								  {
									"name": "p",
									"value": "ng"
								  },
								  {
									"name": "edition",
									"value": "au"
								  },
								  {
									"name": "url",
									"value": "/theguardian/mainsection"
								  }
								]
							  },
							  {
								"edition": {
								  "id": "INT"
								},
								"paramSet": [
								  {
									"name": "ct",
									"value": "tag"
								  },
								  {
									"name": "edition",
									"value": "int"
								  },
								  {
									"name": "p",
									"value": "ng"
								  },
								  {
									"name": "url",
									"value": "/theguardian/mainsection"
								  }
								]
							  }
							],
							"prebidIndexSites": [
							  {
								"bp": "D",
								"id": 208234
							  },
							  {
								"bp": "M",
								"id": 213507
							  },
							  {
								"bp": "T",
								"id": 215442
							  }
							]
						  }
						}
					  },
					  {
						"properties": {
						  "id": "theguardian/mainsection/uknews",
						  "url": "/theguardian/mainsection/uknews",
						  "tagType": "NewspaperBookSection",
						  "sectionId": "uk-news",
						  "sectionName": "UK news",
						  "webTitle": "UK news",
						  "webUrl": "https://www.theguardian.com/theguardian/mainsection/uknews",
						  "references": [],
						  "commercial": {
							"editionBrandings": [
							  {
								"edition": {
								  "id": "UK"
								}
							  },
							  {
								"edition": {
								  "id": "US"
								}
							  },
							  {
								"edition": {
								  "id": "AU"
								}
							  },
							  {
								"edition": {
								  "id": "INT"
								}
							  }
							],
							"editionAdTargetings": [
							  {
								"edition": {
								  "id": "UK"
								},
								"paramSet": [
								  {
									"name": "edition",
									"value": "uk"
								  },
								  {
									"name": "ct",
									"value": "tag"
								  },
								  {
									"name": "url",
									"value": "/theguardian/mainsection/uknews"
								  },
								  {
									"name": "p",
									"value": "ng"
								  }
								]
							  },
							  {
								"edition": {
								  "id": "US"
								},
								"paramSet": [
								  {
									"name": "ct",
									"value": "tag"
								  },
								  {
									"name": "url",
									"value": "/theguardian/mainsection/uknews"
								  },
								  {
									"name": "p",
									"value": "ng"
								  },
								  {
									"name": "edition",
									"value": "us"
								  }
								]
							  },
							  {
								"edition": {
								  "id": "AU"
								},
								"paramSet": [
								  {
									"name": "ct",
									"value": "tag"
								  },
								  {
									"name": "url",
									"value": "/theguardian/mainsection/uknews"
								  },
								  {
									"name": "p",
									"value": "ng"
								  },
								  {
									"name": "edition",
									"value": "au"
								  }
								]
							  },
							  {
								"edition": {
								  "id": "INT"
								},
								"paramSet": [
								  {
									"name": "ct",
									"value": "tag"
								  },
								  {
									"name": "edition",
									"value": "int"
								  },
								  {
									"name": "url",
									"value": "/theguardian/mainsection/uknews"
								  },
								  {
									"name": "p",
									"value": "ng"
								  }
								]
							  }
							],
							"prebidIndexSites": [
							  {
								"bp": "D",
								"id": 208208
							  },
							  {
								"bp": "M",
								"id": 213482
							  },
							  {
								"bp": "T",
								"id": 215417
							  }
							]
						  }
						}
					  },
					  {
						"properties": {
						  "id": "tracking/commissioningdesk/uk-home-news",
						  "url": "/tracking/commissioningdesk/uk-home-news",
						  "tagType": "Tracking",
						  "sectionId": "global",
						  "sectionName": "global",
						  "webTitle": "UK Home News",
						  "webUrl": "https://www.theguardian.com/tracking/commissioningdesk/uk-home-news",
						  "references": [],
						  "commercial": {
							"editionBrandings": [
							  {
								"edition": {
								  "id": "UK"
								}
							  },
							  {
								"edition": {
								  "id": "US"
								}
							  },
							  {
								"edition": {
								  "id": "AU"
								}
							  },
							  {
								"edition": {
								  "id": "INT"
								}
							  }
							],
							"editionAdTargetings": [
							  {
								"edition": {
								  "id": "UK"
								},
								"paramSet": [
								  {
									"name": "edition",
									"value": "uk"
								  },
								  {
									"name": "url",
									"value": "/tracking/commissioningdesk/uk-home-news"
								  },
								  {
									"name": "ct",
									"value": "tag"
								  },
								  {
									"name": "p",
									"value": "ng"
								  }
								]
							  },
							  {
								"edition": {
								  "id": "US"
								},
								"paramSet": [
								  {
									"name": "url",
									"value": "/tracking/commissioningdesk/uk-home-news"
								  },
								  {
									"name": "ct",
									"value": "tag"
								  },
								  {
									"name": "p",
									"value": "ng"
								  },
								  {
									"name": "edition",
									"value": "us"
								  }
								]
							  },
							  {
								"edition": {
								  "id": "AU"
								},
								"paramSet": [
								  {
									"name": "url",
									"value": "/tracking/commissioningdesk/uk-home-news"
								  },
								  {
									"name": "ct",
									"value": "tag"
								  },
								  {
									"name": "p",
									"value": "ng"
								  },
								  {
									"name": "edition",
									"value": "au"
								  }
								]
							  },
							  {
								"edition": {
								  "id": "INT"
								},
								"paramSet": [
								  {
									"name": "url",
									"value": "/tracking/commissioningdesk/uk-home-news"
								  },
								  {
									"name": "ct",
									"value": "tag"
								  },
								  {
									"name": "edition",
									"value": "int"
								  },
								  {
									"name": "p",
									"value": "ng"
								  }
								]
							  }
							]
						  }
						}
					  }
					]
				  }
				},
				"maybeContentId": "uk-news/2022/may/29/chief-who-challenged-met-on-race-ousted-as-commissioner-candidate",
				"isLiveBlog": false,
				"isCrossword": false,
				"byline": "Vikram Dodd Police and crime correspondent",
				"webTitle": "Chief who challenged police on race ousted as Met commissioner candidate",
				"linkText": "Chief who challenged police on race ousted as Met commissioner candidate",
				"maybeFrontPublicationDate": 1653869685446,
				"webUrl": "https://www.theguardian.com/uk-news/2022/may/29/chief-who-challenged-met-on-race-ousted-as-commissioner-candidate",
				"editionBrandings": [
				  {
					"edition": {
					  "id": "UK"
					}
				  },
				  {
					"edition": {
					  "id": "US"
					}
				  },
				  {
					"edition": {
					  "id": "AU"
					}
				  },
				  {
					"edition": {
					  "id": "INT"
					}
				  }
				]
			  },
			  "header": {
				"isVideo": false,
				"isComment": false,
				"isGallery": false,
				"isAudio": false,
				"kicker": {
				  "type": "FreeHtmlKicker",
				  "item": {
					"properties": {
					  "kickerText": "Metropolitan police"
					},
					"body": "Metropolitan police"
				  }
				},
				"headline": "Chief who challenged force on race ousted as Met candidate",
				"url": "/uk-news/2022/may/29/chief-who-challenged-met-on-race-ousted-as-commissioner-candidate",
				"hasMainVideoElement": false
			  },
			  "card": {
				"id": "uk-news/2022/may/29/chief-who-challenged-met-on-race-ousted-as-commissioner-candidate",
				"cardStyle": {
				  "type": "DefaultCardstyle"
				},
				"webPublicationDateOption": 1653846600000,
				"lastModifiedOption": 1653883747000,
				"trailText": "Jon Boutcher, former head of the Bedfordshire force, has been told his application will no longer be considered",
				"shortUrlPath": "/p/yh2kc",
				"shortUrl": "https://www.theguardian.com/p/yh2kc",
				"group": "0",
				"isLive": false
			  },
			  "discussion": {
				"isCommentable": false,
				"isClosedForComments": true,
				"discussionId": "/p/yh2kc"
			  },
			  "display": {
				"isBoosted": false,
				"showBoostedHeadline": false,
				"showQuotedHeadline": false,
				"imageHide": false,
				"showLivePlayable": false
			  },
			  "format": {
				"design": "ArticleDesign",
				"theme": "NewsPillar",
				"display": "StandardDisplay"
			  },
			  "enriched": {},
			  "supportingContent": [],
			  "cardStyle": {
				"type": "DefaultCardstyle"
			  },
			  "type": "CuratedContent"
			}
		  ],
		startIndex: 5,
		containerPalette: 'EventPalette',
	} as unknown as ShowMoreRequest;
}
