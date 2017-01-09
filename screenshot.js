var Nightmare = require('nightmare');
var nightmare = Nightmare({
  show: false,
  width: ~~process.env.width
});

if (!process.env.url) {
  console.error('Please set an environment variable with url');
  process.exit();
}

nightmare
  .goto(process.env.url)
  .evaluate(() => {
    const body = document.body;
    const html = document.documentElement;

    return {
      height: Math.max(body.scrollHeight, body.offsetHeight, html.clientHeight, html.scrollHeight, html.offsetHeight),
      width: Math.max(body.scrollWidth, body.offsetWidth, html.clientWidth, html.scrollWidth, html.offsetWidth)
    };
  })
  .then(function(dimensions) {
    return nightmare
      .scrollTo(dimensions.height, 0)
      .scrollTo(0, 0)
      .viewport(dimensions.width, dimensions.height)
      .wait(5000)
      .screenshot('/screenshot/screenshot.png')
  })
  .then(function() {
    nightmare.end(function() {
      console.log('done');
    });
  })
  .catch(function (error) {
    console.error('failed:', error);
    process.exit();
  });