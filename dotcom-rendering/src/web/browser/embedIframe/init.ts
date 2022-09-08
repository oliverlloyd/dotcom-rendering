import '../webpackPublicPath';
import { startup } from '../startup.ts';
import { embedIframe } from './embedIframe.ts';

startup('embedIframe', null, embedIframe);
