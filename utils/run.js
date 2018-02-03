const nodemon = require('nodemon');

nodemon({
  script: 'srv/main.js',
  ext: 'js json'
});

nodemon.on('start', function () {
  console.log('Server has started');
}).on('quit', function () {
  console.log('Server has quit');
  process.exit();
}).on('restart', function (files) {
  console.log('Server restarted due to: ', files);
});
