import { ArticleDesign } from '@guardian/libs';
import { Card } from './Card/Card';
import { LI } from './Card/components/LI';
import { UL } from './Card/components/UL';

type Props = {
	content: TrailType[];
	containerPalette?: DCRContainerPalette;
};

const decidePercentage = (length: number) => {
	switch (length) {
		case 1:
			return '100%';
		case 2:
			return '50%';
		case 3:
			return '34%';
		case 4:
		default:
			return '25%';
	}
};

export const FourOrLess = ({ content, containerPalette }: Props) => {
	const percentage = decidePercentage(content.length);

	return (
		<>
			<UL direction="row" padBottom={true}>
				{content.map((trail, index) => (
					<LI
						padSides={true}
						showDivider={index > 0}
						showTopMarginWhenStacked={index > 0}
						percentage={percentage}
					>
						<Card
							containerPalette={containerPalette}
							showAge={true}
							linkTo={trail.url}
							format={trail.format}
							headlineText={trail.headline}
							headlineSize="medium"
							byline={trail.byline}
							showByline={trail.showByline}
							showQuotes={
								trail.format.design === ArticleDesign.Comment ||
								trail.format.design === ArticleDesign.Letter
							}
							webPublicationDate={trail.webPublicationDate}
							kickerText={trail.kickerText}
							showPulsingDot={
								trail.format.design === ArticleDesign.LiveBlog
							}
							showSlash={true}
							showClock={false}
							imageUrl={trail.image}
							mediaType={trail.mediaType}
							mediaDuration={trail.mediaDuration}
							starRating={trail.starRating}
							branding={trail.branding}
							discussionId={trail.discussionId}
						/>
					</LI>
				))}
			</UL>
		</>
	);
};
