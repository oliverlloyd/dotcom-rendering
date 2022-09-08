import { constructQuery } from './querystring.ts';

describe('constructQuery', () => {
	it('constructs the correct query string from an object', () => {
		const testParams = {
			sens: 'f',
			si: 'f',
			vl: 333,
			cc: 'UK',
			s: 'sport',
			inskin: 'f',
			ct: 'article',
			url: '/sport/2017/sep/30/test-article',
			su: ['0'],
			pa: 'f',
		};
		const expectedQuery = `sens=f&si=f&vl=333&cc=UK&s=sport&inskin=f&ct=article&url=%2Fsport%2F2017%2Fsep%2F30%2Ftest-article&su=0&pa=f`;
		expect(constructQuery(testParams)).toBe(expectedQuery);
	});
});
