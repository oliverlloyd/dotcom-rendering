import { ArticleDesign, ArticleSpecial } from '@guardian/libs';
import { Card } from './Card/Card';
import { LI } from './Card/components/LI';
import { UL } from './Card/components/UL';

type Props = {
	content: TrailType[];
	containerPalette?: DCRContainerPalette;
};

const decidePercentage = (length: number) => {
	// The first row of four is spaced at 25%, this function decides for the second row
	switch (length) {
		case 6:
			return '50%';
		case 7:
			return '34%';
		case 8:
			return '25%';
		default:
			return '25%';
	}
};

export const MoreThanFive = ({ content, containerPalette }: Props) => {
	const secondRowPercentage = decidePercentage(content.length);
	const secondRowTrails = content.slice(4, content.length);
	return (
		<>
			<UL direction="row" padBottom={true}>
				<LI padSides={true} percentage="25%">
					<Card
						containerPalette={containerPalette}
						showAge={true}
						linkTo={content[0].url}
						format={content[0].format}
						headlineText={content[0].headline}
						headlineSize="medium"
						byline={content[0].byline}
						showByline={content[0].showByline}
						showQuotes={
							content[0].format.design ===
								ArticleDesign.Comment ||
							content[0].format.design === ArticleDesign.Letter
						}
						webPublicationDate={content[0].webPublicationDate}
						kickerText={content[0].kickerText}
						showPulsingDot={
							content[0].format.design === ArticleDesign.LiveBlog
						}
						showSlash={true}
						showClock={false}
						imageUrl={content[0].image}
						mediaType={content[0].mediaType}
						mediaDuration={content[0].mediaDuration}
						starRating={content[0].starRating}
						branding={content[0].branding}
						discussionId={content[0].discussionId}
					/>
				</LI>
				<LI
					padSides={true}
					showDivider={true}
					showTopMarginWhenStacked={true}
					percentage="25%"
				>
					<Card
						containerPalette={containerPalette}
						showAge={true}
						linkTo={content[1].url}
						format={content[1].format}
						headlineText={content[1].headline}
						headlineSize="medium"
						byline={content[1].byline}
						showByline={content[1].showByline}
						showQuotes={
							content[1].format.design ===
								ArticleDesign.Comment ||
							content[1].format.design === ArticleDesign.Letter
						}
						webPublicationDate={content[1].webPublicationDate}
						kickerText={content[1].kickerText}
						showPulsingDot={
							content[1].format.design === ArticleDesign.LiveBlog
						}
						showSlash={true}
						showClock={false}
						imageUrl={content[1].image}
						mediaType={content[1].mediaType}
						mediaDuration={content[1].mediaDuration}
						starRating={content[1].starRating}
						branding={content[1].branding}
						discussionId={content[1].discussionId}
					/>
				</LI>
				<LI
					padSides={true}
					showDivider={true}
					showTopMarginWhenStacked={true}
					percentage="25%"
				>
					<Card
						containerPalette={containerPalette}
						showAge={true}
						linkTo={content[2].url}
						format={content[2].format}
						headlineText={content[2].headline}
						headlineSize="medium"
						byline={content[2].byline}
						showByline={content[2].showByline}
						showQuotes={
							content[2].format.design ===
								ArticleDesign.Comment ||
							content[2].format.design === ArticleDesign.Letter
						}
						webPublicationDate={content[2].webPublicationDate}
						kickerText={content[2].kickerText}
						showPulsingDot={
							content[2].format.design === ArticleDesign.LiveBlog
						}
						showSlash={true}
						showClock={false}
						imageUrl={content[2].image}
						mediaType={content[2].mediaType}
						mediaDuration={content[2].mediaDuration}
						starRating={content[2].starRating}
						branding={content[2].branding}
						discussionId={content[2].discussionId}
					/>
				</LI>
				<LI
					padSides={true}
					showDivider={true}
					showTopMarginWhenStacked={true}
					percentage="25%"
				>
					<Card
						containerPalette={containerPalette}
						showAge={true}
						linkTo={content[3].url}
						format={content[3].format}
						headlineText={content[3].headline}
						headlineSize="medium"
						byline={content[3].byline}
						showByline={content[3].showByline}
						showQuotes={
							content[3].format.design ===
								ArticleDesign.Comment ||
							content[3].format.design === ArticleDesign.Letter
						}
						webPublicationDate={content[3].webPublicationDate}
						kickerText={content[3].kickerText}
						showPulsingDot={
							content[3].format.design === ArticleDesign.LiveBlog
						}
						showSlash={true}
						showClock={false}
						imageUrl={content[3].image}
						mediaType={content[3].mediaType}
						mediaDuration={content[3].mediaDuration}
						starRating={content[3].starRating}
						branding={content[3].branding}
						discussionId={content[3].discussionId}
					/>
				</LI>
			</UL>
			<UL direction="row" padBottom={true}>
				{secondRowTrails.map((trail, index) => (
					<LI
						padSides={true}
						showDivider={index > 0}
						showTopMarginWhenStacked={index > 0}
						percentage={secondRowPercentage}
					>
						<Card
							containerPalette={containerPalette}
							showAge={true}
							linkTo={trail.url}
							format={trail.format}
							headlineText={trail.headline}
							headlineSize={
								trail.format.theme === ArticleSpecial.Labs
									? 'medium'
									: 'small'
							}
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
							imageUrl={
								trail.format.theme === ArticleSpecial.Labs
									? trail.image
									: undefined
							}
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
