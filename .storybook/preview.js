import { setCookie } from '@guardian/libs';
import { AB } from '@guardian/ab-core';

import isChromatic from 'chromatic/isChromatic';
import MockDate from 'mockdate';

import { getFontsCss } from '../dotcom-rendering/src/lib/fonts-css';

import { resets } from '@guardian/source-foundations';

import { Lazy } from '../dotcom-rendering/src/web/components/Lazy';
import { Picture } from '../dotcom-rendering/src/web/components/Picture';
import { mockRESTCalls } from '../dotcom-rendering/src/web/lib/mockRESTCalls';
import { setABTests } from '../dotcom-rendering/src/web/lib/useAB';

// Prevent components being lazy rendered when we're taking Chromatic snapshots
Lazy.disabled = isChromatic();
Picture.disableLazyLoading = isChromatic();

if (isChromatic()) {
	// Fix the date to prevent false negatives
	MockDate.set('Sat Jan 1 2022 12:00:00 GMT+0000 (Greenwich Mean Time)');
}

mockRESTCalls();

setABTests(
	new AB({
		mvtMaxValue: 1_000_000,
		mvtId: 1234,
		pageIsSensitive: false,
		abTestSwitches: {},
		arrayOfTestObjects: [],
	}),
);

// Add base css for the site
let css = `${getFontsCss()}${resets.resetCSS}`;
let head = document.getElementsByTagName('head')[0];
let style = document.createElement('style');
head.appendChild(style);
style.type = 'text/css';
style.appendChild(document.createTextNode(css));

// Mock certain page properties to ensure client side hydration completes as expected
// in our page/layout stories. These properties were specifically added after we refactored
// how the CMP loads in App.tsx but they are also used in other areas and can be taken
// as an example for a quick way to mock cookies or the window object.
// Could this be better? Sure, we could investigate ways to really, truly server side
// render in Storybook but for now this (and some of the other steps we take around
// hydration) achieve what we need
window.guardian = {
	config: {
		ophan: {
			pageViewId: 'mockPageViewId',
		},
	},
	ophan: {
		record: ({}) => {},
	},
	modules: {
		sentry: {
			reportError: () => {
				/* a tree falls in the forest */
			},
		},
	},
};

setCookie({ name: 'bwid', value: 'mockBrowserId' });

const guardianViewports = {
	mobileMedium: {
		name: 'mobileMedium',
		styles: {
			width: '375px',
			height: '800px',
		},
	},
	mobileLandscape: {
		name: 'mobileLandscape',
		styles: {
			width: '480px',
			height: '800px',
		},
	},
	phablet: {
		name: 'phablet',
		styles: {
			width: '660px',
			height: '800px',
		},
	},
	tablet: {
		name: 'tablet',
		styles: {
			width: '740px',
			height: '800px',
		},
	},
	desktop: {
		name: 'desktop',
		styles: {
			width: '980px',
			height: '800px',
		},
	},
	leftCol: {
		name: 'leftCol',
		styles: {
			width: '1140px',
			height: '800px',
		},
	},
	wide: {
		name: 'wide',
		styles: {
			width: '1300px',
			height: '800px',
		},
	},
};

export const viewports = [375, 480, 660, 740, 980, 1140, 1300];

export const parameters = {
	viewport: {
		viewports: guardianViewports,
		defaultViewport: 'wide',
	},
	layout: 'fullscreen',
};
