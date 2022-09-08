import {
	getConsentFor,
	onConsentChange,
} from 'npm:@guardian/consent-management-platform';

const hasRequiredConsents = (): Promise<boolean> =>
	new Promise((resolve, reject) => {
		onConsentChange((state) => {
			try {
				resolve(getConsentFor('braze', state));
			} catch (e) {
				reject(e);
			}
		});
	});

export { hasRequiredConsents };
