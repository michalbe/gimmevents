const private_methods = [
	'connect', 'on_connect'
];

const priv = private_methods.reduce((memo, item) => {
	memo[item] = Symbol(item);
	return memo;
}, {});

export class Sender {
	constructor(options = {}) {
		this.key = options.key;
		this.host = options.host;

		this[priv.connect]();
	}

	[priv.connect] () {
		this.socket_handle = new WebSocket(`ws://${host}`);
		this.socket_handle.onopen = this[priv.on_connect].bind(this);
	}

	[priv.on_connect] () {
		console.log('Connected ...');
		this.is_connected = true;
		this.socket_handle.send({
			action: 'create',
			key: this.key
		});
	}
}
