import { GuideAtom } from 'npm:@guardian/atoms-rendering';
import type { GuideAtomType } from 'npm:@guardian/atoms-rendering/dist/types/types';

export const GuideAtomWrapper = (props: GuideAtomType) => {
	return <GuideAtom {...props} />;
};
