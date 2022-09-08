import React, { Suspense } from 'react';
import { initPerf } from '../../../browser/initPerf.ts';
import { Lazy } from '../../Lazy.ts';
import { canShowMandatoryUs } from '../displayRule.ts';
import type { SignInGateComponent } from '../types.ts';

const SignInGateMain = React.lazy(() => {
	const { start, end } = initPerf('SignInGateMain');
	start();
	return import(
		/* webpackChunkName: "SignInGateMain" */ '../gateDesigns/SignInGateMain'
	).then((module) => {
		end();
		return { default: module.SignInGateMain };
	});
});

export const signInGateComponent: SignInGateComponent = {
	gate: ({
		ophanComponentId,
		dismissGate,
		guUrl,
		signInUrl,
		abTest,
		isComment,
	}) => (
		<Lazy margin={300}>
			<Suspense fallback={<></>}>
				<SignInGateMain
					ophanComponentId={ophanComponentId}
					dismissGate={dismissGate}
					guUrl={guUrl}
					signInUrl={signInUrl}
					abTest={abTest}
					isComment={isComment}
					isMandatory={true}
				/>
			</Suspense>
		</Lazy>
	),
	canShow: canShowMandatoryUs,
};
