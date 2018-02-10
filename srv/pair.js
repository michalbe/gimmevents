const CLIENT_ROLES = ['emitter', 'receiver'];

class Pair {
	constructor({ key }) {
		this.key = key;
	}

	assignClient(client) {
		if (!CLIENT_ROLES.has(client.role)) {
			throw new Error(`${client.role} is not a proper role.`);
			return;
		}

		this[client.role] = client;
	}

	getClientByRole(role) {
		return this[role];
	}
};

module.exports = Pair;
