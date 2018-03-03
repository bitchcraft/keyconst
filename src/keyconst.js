// @flow

/**
 * Creates a keymirrored Object from an Array of string keys
 * @public
 * @func keyconst
 * @param  {Array} keys - Array of string keys
 * @return {Object} - Object with identical key/value pairs
 */
function keyconst(keys: Array<string>): { [string]: string, } {
	return keys.reduce((acc, value) => {
		acc[value] = value;
		return acc;
	}, {});
}

export default keyconst;
