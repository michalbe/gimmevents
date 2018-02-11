import { priv } from './_priv';
import { Base } from './base';

export class Emitter extends Base {
	constructor(options = {}) {
		options.role = 'emitter';
		super(options);
	}

	register(event) {
		document.addEventListener(event, (evt) => {
			const {
				keyCode,
				which,
				key,
				screenX,
				screenY,
				clientX,
				clientY
			 } = evt;

			this[priv.send]({
				action: 'update',
				event_name: event,
				event_data: {
					keyCode,
					which,
					key,
					screenX,
					screenY,
					clientX,
					clientY
				}
			})
		});
	}
}
