// -------------------------------------
// Elements

import type { PersonalityQuizAtom } from '@guardian/atoms-rendering';

export type QuizAtomType = Parameters<typeof PersonalityQuizAtom>[0];

// -------------------------------------
interface ThirdPartyEmbeddedContent {
	isThirdPartyTracking: boolean;
	source?: string;
	sourceDomain?: string;
}

export interface AudioAtomBlockElement {
	_type: 'model.dotcomrendering.pageElements.AudioAtomBlockElement';
	elementId: string;
	id: string;
	kicker: string;
	title?: string;
	trackUrl: string;
	duration: number;
	coverUrl: string;
	role?: RoleType;
}

interface AudioBlockElement {
	_type: 'model.dotcomrendering.pageElements.AudioBlockElement';
	elementId: string;
}

export interface BlockquoteBlockElement {
	_type: 'model.dotcomrendering.pageElements.BlockquoteBlockElement';
	elementId: string;
	html: string;
	quoted?: boolean;
}

interface CaptionBlockElement {
	_type: 'model.dotcomrendering.pageElements.CaptionBlockElement';
	elementId: string;
	captionText?: string;
	padCaption?: boolean;
	credit?: string;
	displayCredit?: boolean;
	shouldLimitWidth?: boolean;
	isOverlaid?: boolean;
}

export interface CalloutBlockElement {
	_type: 'model.dotcomrendering.pageElements.CalloutBlockElement';
	elementId: string;
	id: string;
	calloutsUrl: string;
	activeFrom: number;
	activeUntil?: number;
	displayOnSensitive: boolean;
	formId: number;
	title: string;
	description: string;
	tagName: string;
	formFields: CampaignFieldType[];
	role?: RoleType;
}

export interface CalloutContactType {
	name: string;
	value: string;
	urlPrefix: string;
	guidance?: string;
}

export interface CalloutBlockElementV2 {
	_type: 'model.dotcomrendering.pageElements.CalloutBlockElementV2';
	elementId: string;
	id: string;
	calloutsUrl: string;
	activeFrom: number;
	activeUntil?: number;
	displayOnSensitive: boolean;
	formId: number;
	prompt: string;
	title: string;
	description: string;
	tagName: string;
	formFields: CampaignFieldType[];
	role?: RoleType;
	isNonCollapsible: boolean;
	contacts?: CalloutContactType[];
}

interface ChartAtomBlockElement {
	_type: 'model.dotcomrendering.pageElements.ChartAtomBlockElement';
	elementId: string;
	id: string;
	url: string;
	html: string;
	css?: string;
	js?: string;
	role?: RoleType;
	placeholderUrl?: string;
}

interface QuizAtomBlockElement {
	_type: 'model.dotcomrendering.pageElements.QuizAtomBlockElement';
	elementId: string;
	quizType: 'personality' | 'knowledge';
	id: string;
	questions: QuestionType[];
	resultBuckets: QuizAtomType['resultBuckets'];
	resultGroups: {
		id: string;
		title: string;
		shareText: string;
		minScore: number;
	}[];
}

interface CodeBlockElement {
	_type: 'model.dotcomrendering.pageElements.CodeBlockElement';
	elementId: string;
	html: string;
	isMandatory: boolean;
	language?: string;
}

export interface CommentBlockElement {
	_type: 'model.dotcomrendering.pageElements.CommentBlockElement';
	elementId: string;
	body: string;
	avatarURL: string;
	profileURL: string;
	profileName: string;
	permalink: string;
	dateTime: string;
	role?: RoleType;
}

export interface ContentAtomBlockElement {
	_type: 'model.dotcomrendering.pageElements.ContentAtomBlockElement';
	elementId: string;
	atomId: string;
}

interface DisclaimerBlockElement {
	_type: 'model.dotcomrendering.pageElements.DisclaimerBlockElement';
	elementId: string;
	html: string;
	role?: RoleType;
}

export interface DividerBlockElement {
	_type: 'model.dotcomrendering.pageElements.DividerBlockElement';
	size?: 'full' | 'partial';
	spaceAbove?: 'tight' | 'loose';
}

export interface DocumentBlockElement extends ThirdPartyEmbeddedContent {
	_type: 'model.dotcomrendering.pageElements.DocumentBlockElement';
	elementId: string;
	embedUrl: string;
	height: number;
	width: number;
	title?: string;
	role?: RoleType;
}

export interface EmbedBlockElement extends ThirdPartyEmbeddedContent {
	_type: 'model.dotcomrendering.pageElements.EmbedBlockElement';
	elementId: string;
	safe?: boolean;
	role?: RoleType;
	alt?: string;
	height?: number;
	width?: number;
	html: string;
	isMandatory: boolean;
	caption?: string;
}

interface ExplainerAtomBlockElement {
	_type: 'model.dotcomrendering.pageElements.ExplainerAtomBlockElement';
	elementId: string;
	id: string;
	title: string;
	body: string;
	role?: RoleType;
}

interface GenericAtomBlockElement {
	_type: 'model.dotcomrendering.pageElements.GenericAtomBlockElement';
	url: string;
	placeholderUrl?: string;
	id?: string;
	html?: string;
	css?: string;
	js?: string;
	elementId: string;
}

interface GuideAtomBlockElement {
	_type: 'model.dotcomrendering.pageElements.GuideAtomBlockElement';
	elementId: string;
	id: string;
	label: string;
	title: string;
	img?: string;
	html: string;
	credit: string;
	role?: RoleType;
}

export interface GuVideoBlockElement {
	_type: 'model.dotcomrendering.pageElements.GuVideoBlockElement';
	elementId: string;
	assets: VideoAssets[];
	caption: string;
	html: string;
	source: string;
	role?: RoleType;
	imageMedia?: { allImages: Image[] };
	originalUrl?: string;
	url?: string;
}

interface HighlightBlockElement {
	_type: 'model.dotcomrendering.pageElements.HighlightBlockElement';
	elementId: string;
	html: string;
}

export interface ImageBlockElement {
	_type: 'model.dotcomrendering.pageElements.ImageBlockElement';
	elementId: string;
	media: { allImages: Image[] };
	data: {
		alt?: string;
		credit?: string;
		caption?: string;
		copyright?: string;
	};
	imageSources: ImageSource[];
	displayCredit?: boolean;
	role: RoleType;
	title?: string;
	starRating?: number;
	isAvatar?: boolean;
}

export interface InstagramBlockElement extends ThirdPartyEmbeddedContent {
	_type: 'model.dotcomrendering.pageElements.InstagramBlockElement';
	elementId: string;
	html: string;
	url: string;
	hasCaption: boolean;
	role?: RoleType;
}

export interface InteractiveAtomBlockElement {
	_type: 'model.dotcomrendering.pageElements.InteractiveAtomBlockElement';
	elementId: string;
	url: string;
	id: string;
	js?: string;
	html?: string;
	css?: string;
	placeholderUrl?: string;
	role?: RoleType;
}

// Can't guarantee anything in interactiveBlockElement :shrug:
interface InteractiveBlockElement {
	_type: 'model.dotcomrendering.pageElements.InteractiveBlockElement';
	elementId: string;
	url?: string;
	isMandatory?: boolean;
	scriptUrl?: string;
	alt?: string;
	role?: RoleType;
	caption?: string;
}

interface ItemLinkBlockElement {
	_type: 'model.dotcomrendering.pageElements.ItemLinkBlockElement';
	elementId: string;
	html: string;
}

export interface MapBlockElement extends ThirdPartyEmbeddedContent {
	_type: 'model.dotcomrendering.pageElements.MapBlockElement';
	elementId: string;
	embedUrl: string;
	originalUrl: string;
	title: string;
	height: number;
	width: number;
	caption?: string;
	role?: RoleType;
}

interface MediaAtomBlockElement {
	_type: 'model.dotcomrendering.pageElements.MediaAtomBlockElement';
	elementId: string;
	id: string;
	assets: VideoAssets[];
	posterImage?: {
		url: string;
		width: number;
	}[];
	title?: string;
	duration?: number;
}

export interface MultiImageBlockElement {
	_type: 'model.dotcomrendering.pageElements.MultiImageBlockElement';
	elementId: string;
	images: ImageBlockElement[];
	caption?: string;
	role?: RoleType;
}

export interface NewsletterSignupBlockElement {
	_type: 'model.dotcomrendering.pageElements.NewsletterSignupBlockElement';
	newsletter: Newsletter;
	elementId?: string;
}

interface NumberedTitleBlockElement {
	_type: 'model.dotcomrendering.pageElements.NumberedTitleBlockElement';
	elementId: string;
	position: number;
	html: string;
	format: FEFormat;
}

export interface InteractiveContentsBlockElement {
	_type: 'model.dotcomrendering.pageElements.InteractiveContentsBlockElement';
	elementId: string;
	subheadingLinks: SubheadingBlockElement[];
	endDocumentElementId?: string;
}

interface ProfileAtomBlockElement {
	_type: 'model.dotcomrendering.pageElements.ProfileAtomBlockElement';
	elementId: string;
	id: string;
	label: string;
	title: string;
	img?: string;
	html: string;
	credit: string;
	role?: RoleType;
}

interface PullquoteBlockElement {
	_type: 'model.dotcomrendering.pageElements.PullquoteBlockElement';
	elementId: string;
	html?: string;
	role: string;
	attribution?: string;
	isThirdPartyTracking?: boolean;
}

interface QABlockElement {
	_type: 'model.dotcomrendering.pageElements.QABlockElement';
	elementId: string;
	id: string;
	title: string;
	img?: string;
	html: string;
	credit: string;
	role?: RoleType;
}

export interface RichLinkBlockElement {
	_type: 'model.dotcomrendering.pageElements.RichLinkBlockElement';
	elementId: string;
	url: string;
	text: string;
	prefix: string;
	role?: RoleType | 'richLink';
}

export interface SoundcloudBlockElement extends ThirdPartyEmbeddedContent {
	_type: 'model.dotcomrendering.pageElements.SoundcloudBlockElement';
	elementId: string;
	html: string;
	id: string;
	isTrack: boolean;
	isMandatory: boolean;
	role?: RoleType;
}

export interface SpotifyBlockElement extends ThirdPartyEmbeddedContent {
	_type: 'model.dotcomrendering.pageElements.SpotifyBlockElement';
	elementId: string;
	embedUrl?: string;
	title?: string;
	height?: number;
	width?: number;
	caption?: string;
	role?: RoleType;
}

interface StarRatingBlockElement {
	_type: 'model.dotcomrendering.pageElements.StarRatingBlockElement';
	elementId: string;
	rating: number;
	size: RatingSizeType;
}

export interface SubheadingBlockElement {
	_type: 'model.dotcomrendering.pageElements.SubheadingBlockElement';
	elementId: string;
	html: string;
}

export interface TableBlockElement {
	_type: 'model.dotcomrendering.pageElements.TableBlockElement';
	elementId: string;
	isMandatory: boolean;
	html: string;
	role?: RoleType;
}

export interface TextBlockElement {
	_type: 'model.dotcomrendering.pageElements.TextBlockElement';
	elementId: string;
	dropCap?: boolean;
	html: string;
}

export interface TimelineBlockElement {
	_type: 'model.dotcomrendering.pageElements.TimelineBlockElement';
	elementId: string;
	id: string;
	title: string;
	description?: string;
	events: TimelineEvent[];
	role?: RoleType;
}

export interface TweetBlockElement extends ThirdPartyEmbeddedContent {
	_type: 'model.dotcomrendering.pageElements.TweetBlockElement';
	elementId: string;
	html: string;
	url: string;
	id: string;
	hasMedia: boolean;
	role?: RoleType;
}

export interface VineBlockElement extends ThirdPartyEmbeddedContent {
	_type: 'model.dotcomrendering.pageElements.VineBlockElement';
	elementId: string;
	url: string;
	height: number;
	width: number;
	originalUrl: string;
	title: string;
}

export interface VideoBlockElement extends ThirdPartyEmbeddedContent {
	_type: 'model.dotcomrendering.pageElements.VideoBlockElement';
	elementId: string;
	role?: RoleType;
}

export interface VideoFacebookBlockElement extends ThirdPartyEmbeddedContent {
	_type: 'model.dotcomrendering.pageElements.VideoFacebookBlockElement';
	elementId: string;
	url: string;
	height: number;
	width: number;
	caption?: string;
	embedUrl?: string;
	role?: RoleType;
}

export interface VideoVimeoBlockElement extends ThirdPartyEmbeddedContent {
	_type: 'model.dotcomrendering.pageElements.VideoVimeoBlockElement';
	elementId: string;
	embedUrl?: string;
	url: string;
	height: number;
	width: number;
	caption?: string;
	credit?: string;
	title?: string;
	originalUrl?: string;
	role?: RoleType;
}

export interface VideoYoutubeBlockElement extends ThirdPartyEmbeddedContent {
	_type: 'model.dotcomrendering.pageElements.VideoYoutubeBlockElement';
	elementId: string;
	embedUrl?: string;
	url: string;
	originalUrl: string;
	height: number;
	width: number;
	caption?: string;
	credit?: string;
	title?: string;
	role?: RoleType;
}

export interface YoutubeBlockElement {
	_type: 'model.dotcomrendering.pageElements.YoutubeBlockElement';
	elementId: string;
	assetId: string;
	mediaTitle: string;
	id: string;
	channelId?: string;
	duration?: number;
	posterImage?: {
		url: string;
		width: number;
	}[];
	expired: boolean;
	overrideImage?: string;
	altText?: string;
	role?: RoleType;
}

interface WitnessTypeDataBase {
	authorUsername: string;
	originalUrl: string;
	source: string;
	title: string;
	url: string;
	dateCreated: string;
	apiUrl: string;
	authorName: string;
	witnessEmbedType: string;
	html?: string;
	authorWitnessProfileUrl: string;
}

interface WitnessTypeDataImage extends WitnessTypeDataBase {
	_type: 'model.dotcomrendering.pageElements.WitnessTypeDataImage';
	type: 'image';
	alt: string;
	caption?: string;
	mediaId: string;
	photographer: string;
}

interface WitnessTypeDataVideo extends WitnessTypeDataBase {
	_type: 'model.dotcomrendering.pageElements.WitnessTypeDataVideo';
	type: 'video';
	description: string;
	youtubeHtml: string;
	youtubeDescription: string;
	youtubeUrl: string;
	width: number;
	youtubeSource: string;
	youtubeAuthorName: string;
	height: number;
	youtubeTitle: string;
}

interface WitnessTypeDataText extends WitnessTypeDataBase {
	_type: 'model.dotcomrendering.pageElements.WitnessTypeDataText';
	type: 'text';
	description: string;
	authorUsername: string;
	originalUrl: string;
	source: string;
	title: string;
	url: string;
	dateCreated: string;
	apiUrl: string;
	authorName: string;
	witnessEmbedType: string;
	authorWitnessProfileUrl: string;
}

export interface WitnessAssetType {
	type: 'Image';
	mimeType: 'image/jpeg';
	file: string;
	typeData: {
		name: string;
	};
}
interface WitnessTypeBlockElement extends ThirdPartyEmbeddedContent {
	_type: 'model.dotcomrendering.pageElements.WitnessBlockElement';
	elementId: string;
	assets: WitnessAssetType[];
	isThirdPartyTracking: boolean;
	witnessTypeData:
		| WitnessTypeDataImage
		| WitnessTypeDataVideo
		| WitnessTypeDataText;
}

export type FEElement =
	| AudioAtomBlockElement
	| AudioBlockElement
	| BlockquoteBlockElement
	| CaptionBlockElement
	| CalloutBlockElement
	| CalloutBlockElementV2
	| ChartAtomBlockElement
	| CodeBlockElement
	| CommentBlockElement
	| ContentAtomBlockElement
	| DisclaimerBlockElement
	| DividerBlockElement
	| DocumentBlockElement
	| EmbedBlockElement
	| ExplainerAtomBlockElement
	| GenericAtomBlockElement
	| GuideAtomBlockElement
	| GuVideoBlockElement
	| HighlightBlockElement
	| ImageBlockElement
	| InstagramBlockElement
	| InteractiveAtomBlockElement
	| InteractiveContentsBlockElement
	| InteractiveBlockElement
	| ItemLinkBlockElement
	| MapBlockElement
	| MediaAtomBlockElement
	| MultiImageBlockElement
	| NumberedTitleBlockElement
	| NewsletterSignupBlockElement
	| ProfileAtomBlockElement
	| PullquoteBlockElement
	| QABlockElement
	| QuizAtomBlockElement
	| RichLinkBlockElement
	| SoundcloudBlockElement
	| SpotifyBlockElement
	| StarRatingBlockElement
	| SubheadingBlockElement
	| TableBlockElement
	| TextBlockElement
	| TimelineBlockElement
	| TweetBlockElement
	| VideoBlockElement
	| VideoFacebookBlockElement
	| VideoVimeoBlockElement
	| VideoYoutubeBlockElement
	| VineBlockElement
	| YoutubeBlockElement
	| WitnessTypeBlockElement;

// -------------------------------------
// Misc
// -------------------------------------

/**
 * This duplicate type is unfortunate, but the image sources come lowercase
 * Note, 'richLink' is used internally but does not exist upstream.
 */
type Weighting = Exclude<RoleType, 'halfWidth' | 'richLink'> | 'halfwidth';

/**
 * Affects how an image is placed.
 *
 * Also known as “weighting” in Composer, but we respect the CAPI naming.
 *
 * @see https://github.com/guardian/frontend/blob/0a32dba0/common/app/model/dotcomrendering/pageElements/Role.scala
 */
export type RoleType =
	| 'immersive'
	| 'supporting'
	| 'showcase'
	| 'inline'
	| 'thumbnail'
	| 'halfWidth';

export interface ImageSource {
	weighting: Weighting;
	srcSet: SrcSetItem[];
}

export interface SrcSetItem {
	src: string;
	width: number;
}

export interface Image {
	index: number;
	fields: {
		height: string;
		width: string;
		isMaster?: string;
		source?: string;
		caption?: string;
	};
	mediaType: string;
	mimeType: string;
	url: string;
}

interface VideoAssets {
	url: string;
	mimeType: string;
	fields?: {
		source?: string;
		embeddable?: string;
		height?: string;
		width?: string;
		caption?: string;
	};
}

interface TimelineEvent {
	title: string;
	date: string;
	unixDate: number;
	body?: string;
	toDate?: string;
	toUnixDate?: number;
}

export type RatingSizeType = 'large' | 'medium' | 'small';

// -------------------------------------
// Callout Campaign
// -------------------------------------

export type CampaignFieldType =
	| CampaignFieldText
	| CampaignFieldTextArea
	| CampaignFieldFile
	| CampaignFieldRadio
	| CampaignFieldCheckbox
	| CampaignFieldSelect;

interface CampaignField {
	id: string;
	name: string;
	description?: string;
	required: boolean;
	textSize?: number;
	hideLabel?: boolean;
	hidden?: boolean;
	label: string;
}

export interface CampaignFieldText extends CampaignField {
	type: 'text' | 'email' | 'phone';
}

export interface CampaignFieldTextArea extends CampaignField {
	type: 'textarea';
	minlength?: number;
	maxlength?: number;
}

export interface CampaignFieldFile extends CampaignField {
	type: 'file';
}

export interface CampaignFieldRadio extends CampaignField {
	type: 'radio';
	options: {
		label: string;
		value: string;
	}[];
}

export interface CampaignFieldCheckbox extends CampaignField {
	type: 'checkbox';
	options: {
		label: string;
		value: string;
	}[];
}

export interface CampaignFieldSelect extends CampaignField {
	type: 'select';
	options: {
		label: string;
		value: string;
	}[];
}

// -------------------------------------
// Message Us
// -------------------------------------

export type MessageUsFieldType = CampaignFieldText | CampaignFieldTextArea;

// -------------------------------------
// Quiz
// -------------------------------------

type AnswerType = {
	id: string;
	text: string;
	revealText?: string;
	isCorrect: boolean;
	answerBuckets: string[];
};

type QuestionType = {
	id: string;
	text: string;
	answers: AnswerType[];
	imageUrl?: string;
	imageAlt?: string;
};

// -------------------------------------
// Newsletter
// -------------------------------------

export type Newsletter = {
	listId: number;
	identityName: string;
	name: string;
	description: string;
	frequency: string;
	successDescription: string;
	theme: string;
	group: string;
	regionFocus?: string;
};
