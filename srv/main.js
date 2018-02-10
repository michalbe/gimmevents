const port = 40510;

const WSServer = require('ws').Server;
const Pair = require('./pair');

const server = new WSServer({ port });
const pairs = new Map();

const Clients = {
	'emitter': require('./client-emitter'),
	'receiver': require('./client-receiver')
};

server.on('connection', (ws) => {
	ws.on('message', (message) => {
		message = JSON.parse(message);
		if (!pairs.has(message.key)) {
			const pair = new Pair({
				key: message.key
			});
			pairs.set(message.key, pair);
		}

		const pair = pairs.get(message.key);
		if (message.action === 'create') {
			if (pair.get_client_by_role(message.role)) {
				ws.send(JSON.stringify({
					message: `This pair already have a ${message.role}`
				}));
				ws.terminate();
			} else {
				const client = new Clients[message.role]({
					connection: ws
				});

				pair.assign_client(client);
			}
		}
	});
});
