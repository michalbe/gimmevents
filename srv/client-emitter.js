const ClientBase = require('./client-base');

class ClientEmitter extends ClientBase {
	constructor(options) {
		options.role = 'emitter';
		super(options);

		this.connection.on('message', (msg) => {
			console.log(msg);
		});
	}
}

module.exports = ClientEmitter;
