import '../webpackPublicPath';
import { startup } from '../startup.ts';
import { atomIframe } from './atomIframe.ts';

startup('atomIframe', null, atomIframe);
