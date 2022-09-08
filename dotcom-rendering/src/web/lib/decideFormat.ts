import { decideDesign } from './decideDesign.ts';
import { decideDisplay } from './decideDisplay.ts';
import { decideTheme } from './decideTheme.ts';

export const decideFormat = (format: Partial<CAPIFormat>): ArticleFormat => ({
	display: decideDisplay(format),
	theme: decideTheme(format),
	design: decideDesign(format),
});
