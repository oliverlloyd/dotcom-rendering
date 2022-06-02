import { ExactlyFive } from './ExactlyFive';
import { FourOrLess } from './FourOrLess';
import { MoreThanEight } from './MoreThanEight';
import { MoreThanFive } from './MoreThanFive';
import { Spotlight } from './Spotlight';

const decideLayout = (trails: TrailType[]) => {
	switch (trails.length) {
		case 1:
			return <Spotlight content={trails} />;
		case 2:
		case 3:
		case 4:
			return <FourOrLess content={trails} />;
		case 5:
			return <ExactlyFive content={trails} />;
		case 6:
		case 7:
		case 8:
			return <MoreThanFive content={trails} />;
		default:
			return <MoreThanEight content={trails} />;
	}
};

type Props = {
	trails: TrailType[];
	// containerPalette?: DCRContainerPalette;
	// showAge?: boolean;
};

export const ExtraCardsContainer = ({
	trails,
}: // containerPalette,
// showAge,
Props) => {
	return <>{decideLayout(trails)}</>;
};
