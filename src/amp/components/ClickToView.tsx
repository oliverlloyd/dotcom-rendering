/* eslint-disable jsx-a11y/label-has-associated-control */

import React from 'react';
import { renderToString } from 'react-dom/server';

type Props = {
	children: React.ReactNode;
	isTracking: boolean;
	source?: string;
	sourceDomain?: string;
	index: number;
};

export const ClickToView = ({
	children,
	isTracking,
	source,
	sourceDomain = 'unknown',
	index,
}: Props) => {
	if (isTracking) {
		const ampStateId = `clickToViewState${index}`;
		const ampListId = `clickToViewList${index}`;
		return (
			<div
				dangerouslySetInnerHTML={{
					__html: `
			<amp-state id="${ampStateId}">
				<script type="application/json">
				{
						"clicked": false,
						"embedHtml": ${JSON.stringify(renderToString(<>{children}</>))}
				}
				</script>
		    </amp-state>
			<amp-list id="${ampListId}" layout="responsive"  src="amp-state:${ampStateId}" [src]="${ampStateId}" single-item="true" width="5" height="3" items=".">
			<template type="amp-mustache">
				{{#clicked}}
				{{{embedHtml}}}
				{{/clicked}}
				{{^clicked}}
				<div>
					Allow ${source} content?
				</div>
				<p>
				This article includes content provided by
				${source}. We ask for your permission before
				anything is loaded, as they may be using cookies
				and other technologies.
				</p>
				<p>
					To view this content, click &apos;Allow and
					continue&apos;.
				</p>
				<div>
				<button on="tap:AMP.setState( { ${ampStateId}: { clicked : true } } );">Allow and
				continue</button>
				</div>
				{{/clicked}}
		    </template>
			</amp-list>
			`,
				}}
			/>
		);
	}
	return <>children</>;
};
