import { priv } from './_priv';

export class Base {
	constructor({ key, host, role }) {
		this.key = key;
		this.host = host;
		this.role = role;
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

	[priv.send] ({ action, event_name = '', event_data = {} }) {
		this.socket_handle.send(JSON.stringify({
			key: this.key,
			role: this.role,
			action,
			event_name,
			event_data
		}));
	}
}
