const ClientBase = require('./client-base');

class ClientReceiver extends ClientBase {
	constructor(options) {
		options.role = 'receiver';
		super(options);
	}
}

module.exports = ClientReceiver;
