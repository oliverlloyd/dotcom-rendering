import { ProfileAtom } from 'npm:@guardian/atoms-rendering';
import type { ProfileAtomType } from 'npm:@guardian/atoms-rendering/dist/types/types';

export const ProfileAtomWrapper = (props: ProfileAtomType) => {
	return <ProfileAtom {...props} />;
};
