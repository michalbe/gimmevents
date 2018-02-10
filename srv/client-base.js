class ClientBase {
	constructor({ connection, role, pair }) {
		this.connection = connection;
		this.role = role;
		this.pair = pair;
	}
}

module.exports = ClientBase;
