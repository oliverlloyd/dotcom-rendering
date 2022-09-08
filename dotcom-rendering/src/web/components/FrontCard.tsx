import { ArticleDesign } from 'npm:@guardian/libs';
import type { TrailType } from '../../types/trails.ts';
import type { Props as CardProps } from './Card/Card.ts';
import { Card } from './Card/Card.ts';

type Props = {
	trail: TrailType;
} & Partial<CardProps>;

/**
 * A wrapper around the normal Card component providing sensible defaults for Cards on front containers.
 *
 * Any prop used by the original Card can be used in FrontCard to override the defaults.
 *
 * Note: Below parameters are not an exhaustive list of params used by FrontCard, rather they are a list of
 * commonly overridden params to make it easier for a developer to know if they actually need to override these values.
 *
 * @param [headlineSize] - Defaults to "medium"
 * @param [imagePosition] - Defaults to "top"
 * @param [imagePositionOnMobile] - Defaults to "left"
 * @param [imageSize] - Defaults to "medium"
 * @param [supportingContent] - Defaults to undefined, set to trail.supportingContent if you want this card to show sublinks.
 * @param [trailText] - Defailts to undefined, set to trail.trailTrext if you want this card to show trail text.
 */
export const FrontCard = (props: Props) => {
	const { trail, ...cardProps } = props;
	const defaultProps: CardProps = {
		linkTo: trail.url,
		format: trail.format,
		headlineText: trail.headline,
		byline: trail.byline,
		showByline: trail.showByline,
		showQuotes:
			trail.format.design === ArticleDesign.Comment ||
			trail.format.design === ArticleDesign.Letter,
		webPublicationDate: trail.webPublicationDate,
		kickerText: trail.kickerText,
		showPulsingDot: trail.format.design === ArticleDesign.LiveBlog,
		showSlash: true,
		showClock: false,
		imageUrl: trail.image,
		mediaType: trail.mediaType,
		mediaDuration: trail.mediaDuration,
		starRating: trail.starRating,
		branding: trail.branding,
		dataLinkName: trail.dataLinkName,
		snapData: trail.snapData,
		discussionId: trail.discussionId,
		avatarUrl: trail.avatarUrl,
	};

	return Card({ ...defaultProps, ...cardProps });
};
