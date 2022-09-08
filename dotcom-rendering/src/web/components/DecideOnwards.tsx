import type { CAPIOnwards } from '../../types/onwards.ts';
import { decideTrail } from '../lib/decideTrail.ts';
import { Carousel } from './Carousel.importable.ts';
import { FetchOnwardsData } from './FetchOnwardsData.importable.ts';
import { Island } from './Island.ts';
import { Section } from './Section.ts';

export const DecideOnwards = ({
	onwards,
	format,
}: {
	onwards: CAPIOnwards[];
	format: ArticleFormat;
}) => (
	<>
		{onwards.map(({ heading, trails, onwardsSource, url }) => {
			if (trails.length > 0) {
				return (
					<Section
						fullWidth={true}
						key={onwardsSource}
						showTopBorder={false}
					>
						<Island deferUntil="visible">
							<Carousel
								heading={heading}
								trails={trails.map(decideTrail)}
								onwardsSource={onwardsSource}
								format={format}
							/>
						</Island>
					</Section>
				);
			}

			if (url) {
				return (
					<Section
						fullWidth={true}
						key={onwardsSource}
						showTopBorder={false}
					>
						<Island
							clientOnly={true}
							deferUntil="visible"
							placeholderHeight={600}
						>
							<FetchOnwardsData
								url={url}
								limit={8}
								onwardsSource={onwardsSource}
								format={format}
							/>
						</Island>
					</Section>
				);
			}

			return null;
		})}
	</>
);
