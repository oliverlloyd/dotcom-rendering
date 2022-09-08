import type { Switches } from '../types/config.ts';

export type ABTestSwitches = { [key: `ab${string}`]: boolean | undefined };

/**
 * Switches that start with "ab" are used for AB tests.
 *
 * We strip those out of the list of switches to reduce
 * the amount of prop data that needs to be serialised
 * for the SetABTests Island.
 *
 * Ref: [`frontend`][] Switches & [`ab-testing`][] filter.
 *
 * [`frontend`]: https://github.com/guardian/frontend/blob/016e9e26/common/app/conf/switches/ABTestSwitches.scala
 * [`ab-testing`]: https://github.com/guardian/ab-testing/blob/b5de0e09/packages/ab-core/src/core.ts#L29-L30
 *
 * @param {Switches} switches
 * @returns {ABTestSwitches} an object containing only AB switches
 */
export const filterABTestSwitches = (switches: Switches): ABTestSwitches =>
	Object.fromEntries(
		Object.entries(switches).filter(([key]) => key.startsWith('ab')),
	);
