class Client {
	constructor(options = {}) {
		this.connection = options.connection;
		this.role = options.role;
	}
}

module.exports = Client;
