const concat = require('concat');

(async function build() {
  const files = [
    './dist/PCFAngularElement/runtime.js',
    './dist/PCFAngularElement/polyfills.js',
    './dist/PCFAngularElement/scripts.js',
    './dist/PCFAngularElement/main.js'
  ];
  await concat(files, './dist/PCFAngularElement/bundle.js');
  await concat(files, './plainHTML/bundle.js');
})();
