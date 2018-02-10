import { priv } from './_priv';

export class Base {
	constructor(options = {}) {
		this.key = options.key;
		this.host = options.host;
		this.role = options.role;
		this[priv.connect]();
	}

	[priv.connect] () {
		this.socket_handle = new WebSocket(`ws://${host}`);
		this.socket_handle.onopen = this[priv.on_connect].bind(this);
	}

	[priv.on_connect] () {
		console.log('Connected ...');
		this.is_connected = true;
		this[priv.send]({ action: 'create' });
	}

	[priv.send] ({ action }) {
		this.socket_handle.send(JSON.stringify({
			key: this.key,
			role: this.role,
			action
		}));
	}
}
