const expect = require('chai').expect;
const postxml = require('postxml');
const plugin = require('../');

module.exports = (input, output, opts) => {
	const processed = postxml([plugin(opts)]).process(input);
	expect(processed).to.eql(output);
};