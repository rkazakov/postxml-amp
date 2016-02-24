var plugin = require('../');
var postxml = require('postxml');
var expect = require('chai').expect;

var test = function (input, output, opts) {

	var processed = postxml([plugin(opts)]).process(input);

	expect(processed).to.eql(output);
};

describe('postxml-amp', function () {
	it('', function () {
		test(
			'',
			'',
			{}
		);
	});
});
