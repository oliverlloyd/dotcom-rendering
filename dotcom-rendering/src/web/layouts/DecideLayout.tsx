import { ArticleDesign, ArticleDisplay } from '@guardian/libs';
import type { ArticleFormat } from '@guardian/libs';
import type { NavType } from '../../model/extract-nav';
import type { FEArticleType } from '../../types/frontend';
import type { RenderingTarget } from '../../types/renderingTarget';
import { CommentLayout } from './CommentLayout';
import { FullPageInteractiveLayout } from './FullPageInteractiveLayout';
import { GalleryLayout } from './GalleryLayout';
import { ImmersiveLayout } from './ImmersiveLayout';
import { InteractiveLayout } from './InteractiveLayout';
import { LiveLayout } from './LiveLayout';
import { NewsletterSignupLayout } from './NewsletterSignupLayout';
import { ShowcaseLayout } from './ShowcaseLayout';
import { StandardLayout } from './StandardLayout';

interface BaseProps {
	article: FEArticleType;
	format: ArticleFormat;
	renderingTarget: RenderingTarget;
}

interface AppProps extends BaseProps {
	renderingTarget: 'Apps';
}

interface WebProps extends BaseProps {
	renderingTarget: 'Web';
	NAV: NavType;
}

const DecideLayoutApps = ({
	article,
	format,
}: {
	article: FEArticleType;
	format: ArticleFormat;
}) => {
	if (
		format.display === ArticleDisplay.Standard &&
		format.design === ArticleDesign.Standard
	) {
		return (
			<StandardLayout
				article={article}
				format={format}
				renderingTarget="Apps"
			/>
		);
	}

	return <pre>Not supported</pre>;
};

const DecideLayoutWeb = ({
	article,
	format,
	NAV,
	renderingTarget,
}: WebProps) => {
	if (format.design === ArticleDesign.Gallery) {
		return (
			<GalleryLayout
				article={article}
				NAV={NAV}
				format={format}
				renderingTarget={renderingTarget}
			/>
		);
	}
	switch (format.display) {
		case ArticleDisplay.Immersive: {
			switch (format.design) {
				case ArticleDesign.Interactive: {
					// Render all 'immersive interactives' until switchover date as 'FullPageInteractive'
					// TBD: After 'immersive interactive' changes to CAPI are merged, add logic here to either use
					// 'InteractiveImmersiveLayout' if published after switchover date, or 'FullPageInteractiveLayout'
					// if published before.
					return (
						<FullPageInteractiveLayout
							article={article}
							NAV={NAV}
							format={format}
						/>
					);
				}
				default: {
					return (
						<ImmersiveLayout
							article={article}
							NAV={NAV}
							format={format}
							renderingTarget={renderingTarget}
						/>
					);
				}
			}
		}
		case ArticleDisplay.NumberedList:
		case ArticleDisplay.Showcase: {
			switch (format.design) {
				case ArticleDesign.LiveBlog:
				case ArticleDesign.DeadBlog:
					return (
						<LiveLayout
							article={article}
							NAV={NAV}
							format={format}
							renderingTarget={renderingTarget}
						/>
					);
				case ArticleDesign.Comment:
				case ArticleDesign.Editorial:
				case ArticleDesign.Letter:
					return (
						<CommentLayout
							article={article}
							NAV={NAV}
							format={format}
							renderingTarget={renderingTarget}
						/>
					);
				default:
					return (
						<ShowcaseLayout
							article={article}
							NAV={NAV}
							format={format}
							renderingTarget={renderingTarget}
						/>
					);
			}
		}
		case ArticleDisplay.Standard:
		default: {
			switch (format.design) {
				case ArticleDesign.Interactive:
					return (
						<InteractiveLayout
							article={article}
							NAV={NAV}
							format={format}
							renderingTarget={renderingTarget}
						/>
					);
				case ArticleDesign.FullPageInteractive: {
					return (
						<FullPageInteractiveLayout
							article={article}
							NAV={NAV}
							format={format}
						/>
					);
				}
				case ArticleDesign.LiveBlog:
				case ArticleDesign.DeadBlog:
					return (
						<LiveLayout
							article={article}
							NAV={NAV}
							format={format}
							renderingTarget={renderingTarget}
						/>
					);
				case ArticleDesign.Comment:
				case ArticleDesign.Editorial:
				case ArticleDesign.Letter:
					return (
						<CommentLayout
							article={article}
							NAV={NAV}
							format={format}
							renderingTarget={renderingTarget}
						/>
					);
				case ArticleDesign.NewsletterSignup:
					return (
						<NewsletterSignupLayout
							article={article}
							NAV={NAV}
							format={format}
						/>
					);
				default:
					return (
						<StandardLayout
							article={article}
							NAV={NAV}
							format={format}
							renderingTarget={renderingTarget}
						/>
					);
			}
		}
	}
};

export const DecideLayout = (props: AppProps | WebProps) => {
	const { article, format, renderingTarget } = props;

	switch (renderingTarget) {
		case 'Apps':
			return <DecideLayoutApps article={article} format={format} />;
		case 'Web':
			return (
				<DecideLayoutWeb
					NAV={props.NAV}
					article={article}
					format={format}
					renderingTarget={renderingTarget}
				/>
			);
	}
};
