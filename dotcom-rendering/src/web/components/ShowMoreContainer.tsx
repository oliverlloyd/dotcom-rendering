import { css } from '@emotion/react';
import { ArticleDesign } from '@guardian/libs';
import { Container } from '@guardian/source-react-components';
import { Card } from './Card/Card';
import { LI } from './Card/components/LI';
import { UL } from './Card/components/UL';
import { ElementContainer } from './ElementContainer';
import { MoreThanFive } from './MoreThanFive';

type Props = {
	trails: TrailType[];
	containerPalette?: DCRContainerPalette;
	startIndex: number;
	showAge?: boolean;
};

export const ShowMoreContainer = ({
	trails,
	containerPalette, // need to do something about this...
	// startIndex,
	showAge, // need to do something about this...
}: Props) => {
	return (
		<>
			<MoreThanFive
				content={trails}
				containerPalette={containerPalette}
			/>
			<div
				css={css`
					width: 958px;
				`}
			>
				<UL direction="row" wrapCards={true}>
					{trails.map((card, cardIndex) => {
						return (
							<LI
								padSides={true}
								showTopMarginWhenStacked={false}
								padBottom={
									// No bottom margin on the last card
									cardIndex < trails.length - 1
								}
								padBottomOnMobile={false}
							>
								<Card
									containerPalette={containerPalette}
									showAge={showAge}
									linkTo={card.url}
									format={card.format}
									headlineText={card.headline}
									headlineSize="small"
									byline={card.byline}
									showByline={card.showByline}
									showQuotes={
										card.format.design ===
											ArticleDesign.Comment ||
										card.format.design ===
											ArticleDesign.Letter
									}
									webPublicationDate={card.webPublicationDate}
									kickerText={card.kickerText}
									showPulsingDot={
										card.format.design ===
										ArticleDesign.LiveBlog
									}
									showSlash={true}
									showClock={false}
									mediaType={card.mediaType}
									mediaDuration={card.mediaDuration}
									commentCount={card.commentCount}
									starRating={card.starRating}
									branding={card.branding}
									dataLinkName={card.dataLinkName}
								/>
							</LI>
						);
					})}
				</UL>
			</div>
		</>
	);
};
