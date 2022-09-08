import { QandaAtom } from 'npm:@guardian/atoms-rendering';
import type { QandaAtomType } from 'npm:@guardian/atoms-rendering/dist/types/types';

export const QandaAtomWrapper = (props: QandaAtomType) => {
	return <QandaAtom {...props} />;
};
