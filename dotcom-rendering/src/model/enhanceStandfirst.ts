import { transformDots } from './transformDots.ts';

export const enhanceStandfirst = (html: string): string => transformDots(html);
