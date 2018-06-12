require.ensure(['./a','./b'], function(require) {
  var content = require('./a');
  var b = require('./b');
  document.open();
  document.write('<h1>' + content + '</h1>');
  document.write('<h1>' + b.click(1,2) + '</h1>');
  document.write('<h1>' + (new b.output()).total(3,3) + '</h1>');

  var out = new b.output()
  console.log(out.total(3,3))
  console.log((new b.output()).total(3,3))
  document.close();
});
