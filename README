# postxml-amp
[![npm version][npm-image]][npm-url]

> [PostXML] plugin to convert plain HTML to Google Accelerated Mobile Pages (AMP).

## Installation
`npm install postxml-amp --save-dev`

## Usage
[Postxml]

## Options
### cwd
**Directory of parsing file. It is needed for images' urls.**<br>
Type: `String`<br>
Default: `''`

### round
**Enable rounding sizes**<br>
Type: `String`<br>
Default: `true`

## Example

### Input
```html
<html><head><link rel="stylesheet" href="style.css"></head><img src="image.png"></html>
```

style.css
```css
body {
  background-color: #FFF;
}
```

### Output
```html
<html amp=""><head><style amp-custom="">body{background-color:#FFF}</style></head><amp-img src="image.png" width="600" height="400"></amp-img></html>
```

## Licence
MIT

[PostXML]: https://github.com/rkazakov/postxml

[npm-url]: https://www.npmjs.org/package/postxml-image-size
[npm-image]: http://img.shields.io/npm/v/postxml-image-size.svg?style=flat-square
