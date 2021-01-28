import React, { useEffect, useState } from 'react';
import * as emotion from 'emotion';
import * as emotionCore from '@emotion/core';
import * as emotionTheming from 'emotion-theming';
import { checkBrazeDependencies } from '@root/src/web/lib/braze/checkBrazeDependencies';
import { getInitialisedAppboy } from '@root/src/web/lib/braze/initialiseAppboy';
import { BrazeMessages } from '@root/src/web/lib/braze/BrazeMessages';
import { CanShowResult } from '../StickyBottomBanner/bannerPicker';

const { css } = emotion;

const wrapperMargins = css`
	margin: 18px 0;
`;

const EPIC_COMPONENT_PATH = '/epic.js';

type Meta = {
	dataFromBraze: {
		[key: string]: string;
	};
	logImpressionWithBraze: () => void;
	// logButtonClickWithBraze: (id: number) => void;
};

type Props = {
	meta: Meta;
	contributionsServiceUrl: string;
};

export const canShow = async (
	isSignedIn: boolean,
	idApiUrl: string,
): Promise<CanShowResult> => {
	console.log({ idApiUrl });
	const dependenciesResult = await checkBrazeDependencies(
		isSignedIn,
		idApiUrl,
	);

	if (!dependenciesResult.isSuccessful) {
		console.log(
			`Not attempting to show Braze messages. Dependency ${dependenciesResult.failureField} failed with ${dependenciesResult.failureData}.`,
		);
		return { result: false };
	}

	const appboy = await getInitialisedAppboy(
		dependenciesResult.data.apiKey as string,
	);

	const brazeMessages = new BrazeMessages(appboy);

	appboy.changeUser(dependenciesResult.data.brazeUuid as string);
	appboy.openSession();

	const messagePromise = brazeMessages.getMessagesForEndOfArticle();

	return messagePromise
		.then((message) => {
			console.log('epic message extras', message.extras());
			return {
				result: true,
				meta: {
					dataFromBraze: message.extras(),
					logImpressionWithBraze: () => {
						message.logImpression();
					},
				},
			};
		})
		.catch((e) => {
			console.log('Failed to get epic messages', e);
			return { result: false };
		});
};

const buildProps = () => {
	const variant = {
		name: 'control',
		heading: 'Epic from Braze',
		paragraphs: [
			'... we have a small favour to ask. More people, like you, are reading and supporting the Guardian’s independent, investigative journalism than ever before. And unlike many news organisations, we made the choice to keep our reporting open for all, regardless of where they live or what they can afford to pay.',
			'The Guardian will engage with the most critical issues of our time – from the escalating climate catastrophe to widespread inequality to the influence of big tech on our lives. At a time when factual information is a necessity, we believe that each of us, around the world, deserves access to accurate reporting with integrity at its heart.',
			'Our editorial independence means we set our own agenda and voice our own opinions. Guardian journalism is free from commercial and political bias and not influenced by billionaire owners or shareholders. This means we can give a voice to those less heard, explore where others turn away, and rigorously challenge those in power.',
			'We hope you will consider supporting us today. We need your support to keep delivering quality journalism that’s open and independent. Every reader contribution, however big or small, is so valuable. ',
		],
		highlightedText:
			'Support The Guardian from as little as %%CURRENCY_SYMBOL%%1 - and it only takes a minute. Thank you.',
		cta: {
			text: 'Support The Guardian',
			baseUrl: 'https://support.theguardian.com/contribute',
		},
	};

	const pageTracking = {
		ophanPageId: 'k5nxn0mxg7ytwpkxuwms',
		platformId: 'GUARDIAN_WEB',
		clientName: 'dcr',
		referrerUrl:
			'http://localhost:3000/politics/2020/jan/17/uk-rules-out-automatic-deportation-of-eu-citizens-verhofstadt-brexit',
	};

	const testTracking = {
		campaignCode: 'gdnwb_copts_memco_remote_epic_test_api',
		campaignId: 'remote_epic_test',
		abTestName: 'remote_epic_test',
		abTestVariant: 'api',
		componentType: 'ACQUISITIONS_EPIC',
		products: ['CONTRIBUTION', 'MEMBERSHIP_SUPPORTER'],
	};

	const tracking = {
		...pageTracking,
		...testTracking,
	};

	return { variant, tracking, numArticles: 0 };
};

export const BrazeEpic = ({ contributionsServiceUrl, meta }: Props) => {
	const [Epic, setEpic] = useState<React.FC>();

	useEffect(() => {
		window.guardian.automat = {
			react: React,
			preact: React,
			emotionCore,
			emotionTheming,
			emotion,
		};
		const componentUrl = `${contributionsServiceUrl}${EPIC_COMPONENT_PATH}`;
		window
			.guardianPolyfilledImport(componentUrl)
			.then((epicModule) => {
				setEpic(() => epicModule.ContributionsEpic); // useState requires functions to be wrapped
				// log the impression
				console.log('Logging epic impression');
				meta.logImpressionWithBraze();
			})
			// eslint-disable-next-line no-console
			.catch((error) => console.log(`epic - error is: ${error}`));
		// eslint-disable-next-line react-hooks/exhaustive-deps
	}, []);

	if (Epic && meta.dataFromBraze.header) {
		// This will come from Braze via the meta from canShow
		const props: any = buildProps();
		props.variant.heading = meta.dataFromBraze.header;

		return (
			<div className={wrapperMargins}>
				{/* eslint-disable-next-line react/jsx-props-no-spreading */}
				<Epic {...props} />
			</div>
		);
	}

	return null;
};
