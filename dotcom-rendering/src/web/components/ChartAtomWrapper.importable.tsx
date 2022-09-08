import { ChartAtom } from 'npm:@guardian/atoms-rendering';
import type { ChartAtomType } from 'npm:@guardian/atoms-rendering/dist/types/types';

export const ChartAtomWrapper = (props: ChartAtomType) => {
	return <ChartAtom {...props} />;
};
