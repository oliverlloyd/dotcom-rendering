import { ArticleDesign, ArticleDisplay, ArticlePillar } from '@guardian/libs';

export const trails: TrailType[] = [
	{
		url: 'https://www.theguardian.com/business/2019/dec/02/directors-climate-disclosures-tci-hedge-fund',
		headline:
			"Punish directors who don't make climate disclosures, says hedge fund",
		showByline: false,
		byline: 'Julia Kollewe',
		image: 'https://i.guim.co.uk/img/media/d4124d7bb89be381cbe9d72c849fad136f843086/0_84_4974_2985/master/4974.jpg?width=900&quality=85&s=4bdf16831b01b6fcc649992c52e6011b',
		webPublicationDate: '2019-12-02T09:45:30.000Z',
		format: {
			theme: ArticlePillar.Opinion,
			design: ArticleDesign.Comment,
			display: ArticleDisplay.Standard,
		},
		dataLinkName: 'news | group-0 | card-@1',

		supportingContent: [
			{
				url: 'https://www.theguardian.com',
				format: {
					display: ArticleDisplay.Standard,
					design: ArticleDesign.Standard,
					theme: ArticlePillar.News,
				},
				headline: 'Headline 1',
				kickerText: 'Kicker',
			},
			{
				url: 'https://www.theguardian.com',
				format: {
					display: ArticleDisplay.Standard,
					design: ArticleDesign.Standard,
					theme: ArticlePillar.News,
				},
				headline: 'Headline 2',
				kickerText: 'Kicker',
			},
			{
				url: 'https://www.theguardian.com',
				format: {
					display: ArticleDisplay.Standard,
					design: ArticleDesign.Standard,
					theme: ArticlePillar.News,
				},
				headline: 'Headline 3',
				kickerText: 'Kicker',
			},
		],
	},
	{
		url: 'https://www.theguardian.com/environment/2019/dec/02/migration-v-climate-europes-new-political-divide',
		headline: "Migration v climate: Europe's new political divide",
		showByline: false,
		byline: 'Shaun Walker in Budapest',
		image: 'https://i.guim.co.uk/img/media/e060e9b7c92433b3dfeccc98b9206778cda8b8e8/0_180_6680_4009/master/6680.jpg?width=900&quality=85&s=f27d36b8e7563f226cb5c22049559569',
		webPublicationDate: '2019-12-02T09:45:30.000Z',
		format: {
			theme: ArticlePillar.News,
			design: ArticleDesign.Video,
			display: ArticleDisplay.Standard,
		},
		mediaType: 'Video',
		mediaDuration: 378,
		dataLinkName: 'news | group-0 | card-@2',
	},
	{
		url: 'https://www.theguardian.com/world/2019/nov/28/eu-parliament-declares-climate-emergency',
		headline: 'An active live blog',
		showByline: false,
		byline: 'Jennifer Rankin in Brussels',
		image: 'https://i.guim.co.uk/img/media/e8de0c5e27a2d92ced64f690daf48fd9b3b5c079/0_0_5101_3061/master/5101.jpg?width=900&quality=85&s=6c1cec769f59569c150794ae5f3d6c44',
		webPublicationDate: '2019-12-02T09:45:30.000Z',
		format: {
			theme: ArticlePillar.News,
			design: ArticleDesign.LiveBlog,
			display: ArticleDisplay.Standard,
		},
		kickerText: 'Live',
		dataLinkName: 'news | group-0 | card-@3',
	},
	{
		url: 'https://www.theguardian.com/environment/2019/nov/27/climate-emergency-world-may-have-crossed-tipping-points',
		headline: 'An inactive live sport blog - as it happened',
		showByline: true,
		byline: 'Damian Carrington Environment editor',
		image: 'https://i.guim.co.uk/img/media/1774967ff6b9127a43b06c0685d1fd499c965141/98_0_3413_2048/master/3413.jpg?width=900&quality=85&s=7332d70e260400883bfdcb5b1453ef10',
		webPublicationDate: '2019-12-02T09:45:30.000Z',
		format: {
			theme: ArticlePillar.Opinion,
			design: ArticleDesign.Comment,
			display: ArticleDisplay.Standard,
		},
		dataLinkName: 'news | group-0 | card-@4',
	},
	{
		url: 'https://www.theguardian.com/world/2019/nov/26/european-parliament-split-on-declaring-climate-emergency',
		headline: 'European parliament split on declaring climate emergency',
		showByline: false,
		byline: 'Jennifer Rankin in Brussels',
		image: 'https://i.guim.co.uk/img/media/6db4a6d23e6e8d78ca6893f14b03e79869b2fef1/0_220_3500_2101/master/3500.jpg?width=900&quality=85&s=c212dd884c83237b2a1f24349bd9973b',
		webPublicationDate: '2019-12-02T09:45:30.000Z',
		format: {
			theme: ArticlePillar.News,
			design: ArticleDesign.Standard,
			display: ArticleDisplay.Standard,
		},
		dataLinkName: 'news | group-0 | card-@5',
	},
	{
		url: 'https://www.theguardian.com/world/2019/nov/23/north-pole-explorers-on-thin-ice-as-climate-change-hits-expedition',
		headline:
			'North Pole  explorers on thin ice as climate change hits expedition',
		showByline: false,
		byline: 'Simon Murphy',
		image: 'https://i.guim.co.uk/img/media/deb1f0b7f61ebbed2086a55dc34fecb2433a04bc/0_0_6000_3600/master/6000.jpg?width=900&quality=85&s=52aefcb20c15c279b6a6d360f5af9828',
		webPublicationDate: '2019-12-02T09:45:30.000Z',
		format: {
			theme: ArticlePillar.News,
			design: ArticleDesign.Standard,
			display: ArticleDisplay.Standard,
		},
		dataLinkName: 'news | group-0 | card-@6',
	},
	{
		url: 'https://www.theguardian.com/environment/2019/oct/25/scientists-glacial-rivers-absorb-carbon-faster-rainforests',
		headline:
			'Glacial rivers absorb carbon faster than rainforests, scientists find',
		showByline: false,
		byline: 'Leyland Cecco',
		image: 'https://i.guim.co.uk/img/media/5e8ea90ae9f503aa1c98fd35dbf13235b1207fea/0_490_3264_1958/master/3264.jpg?width=900&quality=85&s=80890967a26cab02bd524331818e6e23',
		webPublicationDate: '2019-12-02T09:45:30.000Z',
		format: {
			theme: ArticlePillar.News,
			design: ArticleDesign.Standard,
			display: ArticleDisplay.Standard,
		},
		dataLinkName: 'news | group-0 | card-@7',
	},
	{
		url: 'https://www.theguardian.com/business/2019/oct/20/uk-urges-world-bank-to-channel-more-money-into-tackling-climate-crisis',
		headline:
			'UK urges World Bank to channel more money into tackling climate crisis',
		showByline: false,
		byline: 'Larry Elliott  in Washington',
		image: 'https://i.guim.co.uk/img/media/2905d1c09d1a27de1c183dfa5cdcc10c869932d9/0_124_5472_3284/master/5472.jpg?width=900&quality=85&s=88c182d909be33c918fc17f26778d0c1',
		webPublicationDate: '2019-12-02T09:45:30.000Z',
		format: {
			theme: ArticlePillar.News,
			design: ArticleDesign.Standard,
			display: ArticleDisplay.Standard,
		},
		dataLinkName: 'news | group-0 | card-@8',
	},

	{
		url: 'https://www.theguardian.com/politics/live/2021/feb/17/uk-covid-nationwide-rapid-testing-lockdown-coronavirus-latest-update',
		showByline: false,
		byline: 'Yohannes Lowe',
		image: 'https://i.guim.co.uk/img/media/77e960298d4339e047eac5c1986d0f3214f6285d/419_447_4772_2863/master/4772.jpg?width=300&quality=85&auto=format&fit=max&s=9a17ef5d7a6240caa29965407ef912e0',

		format: {
			display: ArticleDisplay.Standard,
			theme: ArticlePillar.News,
			design: ArticleDesign.LiveBlog,
		},
		webPublicationDate: '2021-02-17T12:45:05.000Z',
		headline:
			'UK Covid live: England lockdown to be eased in stages, says PM, amid reports of nationwide mass testing',
		dataLinkName: 'news | group-0 | card-@9',
	},
	{
		url: 'https://www.theguardian.com/world/2021/feb/17/uk-to-begin-worlds-first-covid-human-challenge-study-within-weeks',
		showByline: false,
		byline: 'Nicola Davis and agency',
		image: 'https://i.guim.co.uk/img/media/56d554a7c453dc1040f70453a01fefcb227f2055/0_0_3060_1836/master/3060.jpg?width=300&quality=85&auto=format&fit=max&s=501112ecfd78672fc4a19133053fe04a',

		format: {
			display: ArticleDisplay.Standard,
			theme: ArticlePillar.News,
			design: ArticleDesign.Standard,
		},
		webPublicationDate: '2021-02-17T10:03:02.000Z',
		headline:
			'UK to infect up to 90 healthy volunteers with Covid in world first trial',
		dataLinkName: 'news | group-0 | card-@10',
	},
	{
		url: 'https://www.theguardian.com/world/2021/feb/17/scottish-government-inadequately-prepared-for-covid-audit-scotland-report',
		showByline: false,
		byline: 'Libby Brooks Scotland correspondent',
		image: 'https://i.guim.co.uk/img/media/df5aea6391e21b5a5d2d25fd9aad81d497f99d42/0_45_3062_1837/master/3062.jpg?width=300&quality=85&auto=format&fit=max&s=4de26576c2388e49ee9c9414d5c46d6d',

		format: {
			display: ArticleDisplay.Standard,
			theme: ArticlePillar.News,
			design: ArticleDesign.Standard,
		},
		webPublicationDate: '2021-02-17T11:11:43.000Z',
		headline:
			'Scottish government inadequately prepared for Covid, says watchdog',
		dataLinkName: 'news | group-0 | card-@11',
	},
	{
		url: 'https://www.theguardian.com/society/2021/feb/16/encouraging-signs-covid-vaccine-over-80s-deaths-fall-england',
		showByline: false,
		byline: 'Anna Leach, Ashley Kirk and Pamela Duncan',
		image: 'https://i.guim.co.uk/img/media/5ebec1a8d662f0da39887dae16e4b2720379246e/0_0_5000_3000/master/5000.jpg?width=300&quality=85&auto=format&fit=max&s=51c9ef2f26b312a7c057d86e9a53f365',

		format: {
			display: ArticleDisplay.Standard,
			theme: ArticlePillar.News,
			design: ArticleDesign.Standard,
		},
		webPublicationDate: '2021-02-16T16:00:55.000Z',
		headline:
			'‘Encouraging’ signs for Covid vaccine as over-80s deaths fall in England',
		dataLinkName: 'news | group-0 | card-@12',
	},
	{
		url: 'https://www.theguardian.com/world/2021/feb/16/contact-tracing-alone-has-little-impact-on-curbing-covid-spread-report-finds',
		showByline: false,
		byline: 'Nicola Davis and Natalie Grover',
		image: 'https://i.guim.co.uk/img/media/046002abfc13c8cf7f0c40454349eb0e95d842b2/0_147_3884_2331/master/3884.jpg?width=300&quality=85&auto=format&fit=max&s=63ca0f0e218f3c7d886231b544a82cbd',

		format: {
			display: ArticleDisplay.Standard,
			theme: ArticlePillar.News,
			design: ArticleDesign.Standard,
		},
		webPublicationDate: '2021-02-16T18:22:53.000Z',
		headline:
			'Contact tracing alone has little impact on curbing Covid spread, report finds',
		dataLinkName: 'news | group-0 | card-@1',
	},
	{
		url: 'https://www.theguardian.com/world/2021/feb/16/covid-almost-2m-more-people-asked-shield-england',
		showByline: false,
		byline: 'Sarah Boseley Health editor and Aamna Mohdin Community affairs correspondent',
		image: 'https://i.guim.co.uk/img/media/9e47ac13c7ffc63ee56235e8ef64301d6ed96d03/0_90_3520_2111/master/3520.jpg?width=300&quality=85&auto=format&fit=max&s=206ae21754ca45db0f098b08091562ef',

		format: {
			display: ArticleDisplay.Standard,
			theme: ArticlePillar.News,
			design: ArticleDesign.Standard,
		},
		webPublicationDate: '2021-02-16T16:35:45.000Z',
		headline:
			'Ethnicity and poverty are Covid risk factors, new Oxford modelling tool shows',
		dataLinkName: 'news | group-0 | card-@13',
	},
	{
		url: 'https://www.theguardian.com/politics/live/2021/feb/16/uk-covid-live-coronavirus-sturgeon-return-scottish-schools-latest-updates',
		showByline: false,
		byline: 'Nicola Slawson',
		image: 'https://i.guim.co.uk/img/media/c01ad5ee63034e0f478959fc7a705c93debf8ba7/0_220_4104_2462/master/4104.jpg?width=300&quality=85&auto=format&fit=max&s=5dbe0a813852f2ce7304f2eddd0b6e45',

		format: {
			display: ArticleDisplay.Standard,
			theme: ArticlePillar.News,
			design: ArticleDesign.LiveBlog,
		},
		webPublicationDate: '2021-02-16T17:00:15.000Z',
		headline:
			'UK Covid: 799 more deaths and 10,625 new cases reported; Scottish schools in phased return from Monday – as it happened',
		dataLinkName: 'news | group-0 | card-@14',
	},
	{
		url: 'https://www.theguardian.com/uk-news/2021/feb/16/qcovid-how-improved-algorithm-can-identify-more-higher-risk-adults',
		showByline: false,
		byline: 'Sarah Boseley Health editor',
		image: 'https://i.guim.co.uk/img/media/6d152e60fdb37dbbc063a68e2cffccf97cdab183/0_40_5458_3275/master/5458.jpg?width=300&quality=85&auto=format&fit=max&s=de76d3ccfb81477fa0ec3e24a93a0daf',

		format: {
			display: ArticleDisplay.Standard,
			theme: ArticlePillar.News,
			design: ArticleDesign.Analysis,
		},
		webPublicationDate: '2021-02-16T18:42:44.000Z',
		headline:
			'QCovid: how improved algorithm can identify more higher-risk adults',
		dataLinkName: 'news | group-0 | card-@1',
	},
	{
		url: 'https://www.theguardian.com/world/2019/nov/28/eu-parliament-declares-climate-emergency',
		headline: 'An active sport blog',
		showByline: false,
		byline: 'Jennifer Rankin in Brussels',
		image: 'https://i.guim.co.uk/img/media/e8de0c5e27a2d92ced64f690daf48fd9b3b5c079/0_0_5101_3061/master/5101.jpg?width=900&quality=85&s=6c1cec769f59569c150794ae5f3d6c44',
		webPublicationDate: '2019-12-02T09:45:30.000Z',
		format: {
			theme: ArticlePillar.Sport,
			design: ArticleDesign.LiveBlog,
			display: ArticleDisplay.Standard,
		},
		dataLinkName: 'news | group-0 | card-@15',
	},
];
