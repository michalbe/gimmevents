import { priv } from './_priv';
import { Base } from './base';

export class Receiver extends Base {
	constructor(options = {}) {
		options.role = 'receiver';
		super(options);

		this[priv.listeners] = [];

		this[priv.on_message](this[priv.handle_message]);
	}

	on(event, handler) {
		this[priv.listeners].push({
			event_name: event,
			handler,
		});
	}

	[priv.handle_message] (message) {
		this[priv.listeners].forEach((listener) => {
			if (listener.event_name === message.event_name) {
				listener.handler(message);
			}
		})
	}
}
