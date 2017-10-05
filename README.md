# postxml-amp
[![npm version][npm-image]][npm-url]
[![Downloads Stats][npm-downloads]][npm-url]
[![Known Vulnerabilities](https://snyk.io/test/github/rkazakov/postxml-amp/badge.svg)](https://snyk.io/test/github/rkazakov/postxml-amp)

> [PostXML] plugin to convert plain HTML to Google Accelerated Mobile Pages (AMP).

## Installation
```sh
npm install postxml-amp --save-dev
```

## Usage
[Postxml]

## Options
### cwd
**Assets (images/styles) file path**
Type: `String`
Default: `''`

### round
**Enable images dimensions rounding**
Type: `String`
Default: `true`

## Example

### Input
```html
<html>
	<head>
		<link rel="stylesheet" href="style.css">
	</head>
	<img src="image.png">
</html>
```

###### image.png
[image.png](/test/image.png)

###### style.css
```css
body {
  background-color: #fff;
}
```

### Output
```html
<html amp="">
	<head>
		<style amp-custom="">body{background-color:#fff}</style>
	</head>
	<amp-img src="image.png" width="600" height="400"></amp-img>
</html>
```

## Release History

* 0.2.6
	* UPDATE: head tag charset order
	* UPDATE: remove invalid img tag
	* UPDATE: unit tests
	* UPDATE: readme documentation
	* UPDATE: package.json
* 0.2.4
	* UPDATE: package.json
* 0.2.3
	* ADD: meta tag viewport
	* ADD: style amp-boilerplate
* 0.2.2
  * ADD: meta tag charset
  * ADD: AMP library script tag
* 0.2.1
  * ADD: inline styles
  * ADD: amp-img tag
  * ADD: amp-video tag
  * ADD: unit tests
* 0.1.0
  * ADD: AMP HTML tag
  * Work in progress

## Licence
MIT (c) Ruslan Kazakov

[PostXML]: https://github.com/postxml/postxml
[npm-url]: https://www.npmjs.org/package/postxml-amp
[npm-image]: https://img.shields.io/npm/v/postxml-amp.svg?style=flat-square
[npm-downloads]: https://img.shields.io/npm/dm/postxml-amp.svg?style=flat-square
