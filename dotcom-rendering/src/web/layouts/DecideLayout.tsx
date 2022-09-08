import { ArticleDesign, ArticleDisplay } from 'npm:@guardian/libs';
import type { ArticleFormat } from 'npm:@guardian/libs';
import type { NavType } from '../../model/extract-nav.ts';
import type { CAPIArticleType } from '../../types/frontend.ts';
import { CommentLayout } from './CommentLayout.tsx';
import { FullPageInteractiveLayout } from './FullPageInteractiveLayout.tsx';
import { ImmersiveLayout } from './ImmersiveLayout.tsx';
import { InteractiveLayout } from './InteractiveLayout.tsx';
import { LiveLayout } from './LiveLayout.tsx';
import { ShowcaseLayout } from './ShowcaseLayout.tsx';
import { StandardLayout } from './StandardLayout.tsx';

type Props = {
	CAPIArticle: CAPIArticleType;
	NAV: NavType;
	format: ArticleFormat;
};

export const DecideLayout = ({ CAPIArticle, NAV, format }: Props) => {
	// TODO we can probably better express this as data
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
							CAPIArticle={CAPIArticle}
							NAV={NAV}
							format={format}
						/>
					);
				}
				default: {
					return (
						<ImmersiveLayout
							CAPIArticle={CAPIArticle}
							NAV={NAV}
							format={format}
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
							CAPIArticle={CAPIArticle}
							NAV={NAV}
							format={format}
						/>
					);
				case ArticleDesign.Comment:
				case ArticleDesign.Editorial:
				case ArticleDesign.Letter:
					return (
						<CommentLayout
							CAPIArticle={CAPIArticle}
							NAV={NAV}
							format={format}
						/>
					);
				default:
					return (
						<ShowcaseLayout
							CAPIArticle={CAPIArticle}
							NAV={NAV}
							format={format}
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
							CAPIArticle={CAPIArticle}
							NAV={NAV}
							format={format}
						/>
					);
				case ArticleDesign.FullPageInteractive: {
					return (
						<FullPageInteractiveLayout
							CAPIArticle={CAPIArticle}
							NAV={NAV}
							format={format}
						/>
					);
				}
				case ArticleDesign.LiveBlog:
				case ArticleDesign.DeadBlog:
					return (
						<LiveLayout
							CAPIArticle={CAPIArticle}
							NAV={NAV}
							format={format}
						/>
					);
				case ArticleDesign.Comment:
				case ArticleDesign.Editorial:
				case ArticleDesign.Letter:
					return (
						<CommentLayout
							CAPIArticle={CAPIArticle}
							NAV={NAV}
							format={format}
						/>
					);
				default:
					return (
						<StandardLayout
							CAPIArticle={CAPIArticle}
							NAV={NAV}
							format={format}
						/>
					);
			}
		}
	}
};
