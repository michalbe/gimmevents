import { Base } from './base';

export class Receiver extends Base {
	constructor(options = {}) {
		options.role = 'receiver';
		super(options);
	}
}
