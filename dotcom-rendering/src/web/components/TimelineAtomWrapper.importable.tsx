import { TimelineAtom } from 'npm:@guardian/atoms-rendering';
import type { TimelineAtomType } from 'npm:@guardian/atoms-rendering/dist/types/types';

export const TimelineAtomWrapper = (props: TimelineAtomType) => {
	return <TimelineAtom {...props} />;
};
