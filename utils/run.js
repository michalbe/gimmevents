const nodemon = require('nodemon');
const spawn = require('child_process').spawn;


nodemon({
  script: 'srv/main.js',
  ext: 'js json',
	ignore: ["dist/*", "src/*"],
});

nodemon.on('start', () => {
  console.log('Server has started');
}).on('quit', () => {
  console.log('Server has quit');
  process.exit();
}).on('restart', (files) => {
  console.log('Server restarted due to: ', files);
});


const cmd_process = spawn(
	'rollup', [ '-c', '-w' ]
);

cmd_process.stdout.on('data', data => {
	console.log(data.toString());
});

cmd_process.stderr.on('data', data => {
	console.log(data.toString());
});
