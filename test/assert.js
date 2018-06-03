const postxml = require('postxml');
const postxmlAmp = require('../');

module.exports = (input, output, opts) => {
	const processed = postxml([postxmlAmp(opts)]).process(input);
	expect(processed).toBe(output);
};