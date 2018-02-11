const ClientBase = require('./client-base');

class ClientEmitter extends ClientBase {
	constructor(options) {
		options.role = 'emitter';
		super(options);

		this.connection.on('message', (msg) => {
			msg = JSON.parse(msg);
			if (msg.action === 'update') {
				this.part.get_client_by_role('receiver')
					.send(JSON.stringify(msg));
			}
		});
	}
}

module.exports = ClientEmitter;
