import { FourOrLess } from './FourOrLess';

type Props = {
	content: TrailType[];
	containerPalette?: DCRContainerPalette;
};

function chunk<T>(arr: T[], chunkSize: number): T[][] {
	if (arr.length === 0) return [];
	const chunkedArray = [];
	for (let i = 0; i <= arr.length; i += chunkSize) {
		chunkedArray.push(arr.slice(i, i + chunkSize));
	}
	return chunkedArray;
}

export const MoreThanEight = ({ content, containerPalette }: Props) => {
	const rows = chunk(content, 4);
	return (
		<>
			{rows.map((row) => (
				<FourOrLess
					content={row}
					containerPalette={containerPalette}
					showImages={false}
				/>
			))}
		</>
	);
};
