var plugin = require('../');
var postxml = require('postxml');
var expect = require('chai').expect;

var test = function (input, output, opts) {
	var processed = postxml([plugin(opts)]).process(input);
	expect(processed).to.eql(output);
};

describe('postxml-amp', function () {
	it('should add amp attribute on html tag', function () {
		test(
			'<html></html>',
			'<html amp=""></html>',
			{}
		);
	});

	it('should replace img tag with amp-img', function () {
		test(
			'<img src="test.jpg" width="600" height="400">',
			'<amp-img src="test.jpg" width="600" height="400"></amp-img>',
			{}
		);
	});

	xit('should add width and height attributes on amp-img tag', function () {
		test(
			'<img src="test.png">',
			'<amp-img src="test.png"></amp-img>',
			{}
		);
	});

	it('should replace video tag with amp-video', function () {
		test(
			'<video src="test.mpg">',
			'<amp-video src="test.mpg"></amp-video>',
			{}
		);
	});

});
