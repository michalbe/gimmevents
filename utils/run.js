const nodemon = require('nodemon');

nodemon({
  script: 'srv/main.js',
  ext: 'js json'
});

nodemon.on('start', () => {
  console.log('Server has started');
}).on('quit', () => {
  console.log('Server has quit');
  process.exit();
}).on('restart', (files) => {
  console.log('Server restarted due to: ', files);
});
