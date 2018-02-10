const ClientBase = require('./client-base');

class ClientEmitter extends ClientBase {
	constructor(options) {
		options.role = 'emitter';
		super(options);
	}
}

module.exports = ClientEmitter;
