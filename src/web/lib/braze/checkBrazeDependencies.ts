import { getBrazeUuid } from '@root/src/web/lib/getBrazeUuid';
import { hasRequiredConsents } from './hasRequiredConsents';
import { hideSupportMessaging } from './hideSupportMessaging';

type SuccessResult = {
	isSuccessful: true;
	data: ResultData;
};

type FailureResult = {
	isSuccessful: false;
	failureField: string;
	failureData: any;
	data: ResultData;
};

type DependencyResult = SuccessResult | FailureResult;

type ResultData = { [key: string]: string | boolean };

const buildFailureResponse = (name: string, value: any, data: ResultData) => ({
	isSuccessful: false,
	failureField: name,
	failureData: value,
	data,
});

const checkBrazeDependencies = async (
	isSignedIn: boolean,
	idApiUrl: string,
): Promise<DependencyResult> => {
	const data: ResultData = {};

	{
		const name = 'brazeSwitch';
		const value = window.guardian.config.switches.brazeSwitch;
		if (!value) {
			return buildFailureResponse(name, value, data);
		}
		data[name] = value;
	}

	{
		const name = 'apiKey';
		const value = window.guardian.config.page.brazeApiKey;
		if (!value) {
			return buildFailureResponse(name, value, data);
		}
		data[name] = value;
	}

	{
		const name = 'consent';
		const value = await hasRequiredConsents();
		if (!value) {
			return buildFailureResponse(name, value, data);
		}
		data[name] = value;
	}

	{
		const name = 'isNotPaidContent';
		const value = !window.guardian.config.page.isPaidContent;
		if (!value) {
			return buildFailureResponse(name, value, data);
		}
		data[name] = value;
	}

	{
		const name = 'brazeUuid';
		const value = await (isSignedIn
			? getBrazeUuid(idApiUrl)
			: Promise.resolve(null));
		if (!value) {
			return buildFailureResponse(name, value, data);
		}
		data[name] = value;
	}

	{
		const name = 'userIsGuSupporter';
		const value = hideSupportMessaging();
		if (!value) {
			return buildFailureResponse(name, value, data);
		}
		data[name] = value;
	}

	return {
		isSuccessful: true,
		data,
	};
};

export { checkBrazeDependencies };
