const postxml = require('postxml');
const postxmlAmp = require('postxml-amp');

const cheerioOptions = {};

const output = postxml([
  postxmlAmp(cheerioOptions),
])
  .process(`<html>
    <head>
      <script async src="https://www.googletagmanager.com/gtag/js?id=UA-123456789-1"></script>
      <script>
        window.dataLayer = window.dataLayer || [];
        function gtag(){dataLayer.push(arguments);}
        gtag('js', new Date());
        gtag('config', 'UA-123456789-1');
      </script>
      <title>AMP page</title>
    </head>
    <body>
      <div>
        <p>This is an AMP article</p>
        <iframe src="http://www.youtube.com/embed/OO9oKhs80aI"
                width="560" height="315" frameborder="0" allowfullscreen></iframe>
      </div>
    </body>
  </hmtl>`, cheerioOptions);

console.log(output);
