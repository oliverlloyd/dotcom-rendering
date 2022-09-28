/* eslint-disable no-undef */
/* eslint-disable func-names */
import { storage } from '@guardian/libs';
import { mockApi } from '../../lib/mocks.js';
import { setLocalBaseUrl } from '../../lib/setLocalBaseUrl.js';
import { cmpIframe } from '../../lib/cmpIframe.js';

const blogUrl =
	'https://www.theguardian.com/australia-news/live/2022/feb/22/australia-news-live-updates-scott-morrison-nsw-trains-coronavirus-covid-omicron-weather';

const stubUpdates = () => {
	cy.intercept(
		{
			url: /\?lastUpdate=.*/,
		},
		{},
	);
};

describe('Epics', function () {
	beforeEach(function () {
		setLocalBaseUrl();
		mockApi();
	});

	it('should render the liveblog epic in the list of blocks', function () {
		stubUpdates();
		storage.local.set('gu.geo.override', 'GB');
		cy.visit(`/Article?url=${blogUrl}?live=true&force-liveblog-epic=true`);
		cmpIframe().contains('Yes, I’m happy').click();

		// Wait for hydration of the Epic
		cy.get('gu-island[name=LiveBlogEpic]')
			.first()
			.should('have.attr', 'data-gu-ready', 'true');
		cy.get('[data-cy=contributions-liveblog-epic]').scrollIntoView();
		cy.get('[data-cy=contributions-liveblog-epic]').should('be.visible');
	});
});
