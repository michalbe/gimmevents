const port = 40510;

const WSServer = require('ws').Server;
const server = new WSServer({ port });

server.on('connection', (ws) => {
	ws.on('message', (message) => {
		message = JSON.parse(message);
		console.log(`Received: ${ message.role }`);
	});
});
