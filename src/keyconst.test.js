/* eslint-env jest */
import keyconst from './keyconst';

describe('keyconst()', () => {
	it('should create a keymirrored object out of an array of keys', () => {
		const keys = [ 'a', 'b', 'c', 'stupid shit' ];
		const targetObject = {
			a: 'a',
			b: 'b',
			c: 'c',
			'stupid shit': 'stupid shit',
		};

		expect(keyconst(keys)).toEqual(targetObject);
	});
});
