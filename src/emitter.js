import { Base } from './base';

export class Emitter extends Base {
	constructor(options) {
		options.role = 'emitter';
		super(options);
	}
}
