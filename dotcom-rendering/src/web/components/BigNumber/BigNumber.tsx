import Number0 from './0.svg.ts';
import Number1 from './1.svg.ts';
import Number10 from './10.svg.ts';
import Number2 from './2.svg.ts';
import Number3 from './3.svg.ts';
import Number4 from './4.svg.ts';
import Number5 from './5.svg.ts';
import Number6 from './6.svg.ts';
import Number7 from './7.svg.ts';
import Number8 from './8.svg.ts';
import Number9 from './9.svg.ts';

// This file contains an array of elements, but only exposes one.

export const BigNumber = ({ index }: { index: number }) => {
	const numbers = [
		<Number0 />,
		<Number1 />,
		<Number2 />,
		<Number3 />,
		<Number4 />,
		<Number5 />,
		<Number6 />,
		<Number7 />,
		<Number8 />,
		<Number9 />,
		<Number10 />,
	];

	return numbers[index];
};
