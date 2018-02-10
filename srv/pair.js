const CLIENT_ROLES = ['emitter', 'receiver'];

class Pair {
	constructor({ key }) {
		this.key = key;
	}

	assign_client(client) {
		if (!CLIENT_ROLES.includes(client.role)) {
			throw new Error(`${client.role} is not a proper role.`);
			return;
		}

		this[client.role] = client;
	}

	get_client_by_role(role) {
		return this[role];
	}

};

module.exports = Pair;
