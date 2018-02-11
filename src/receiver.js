import { priv } from './_priv';
import { Base } from './base';

export class Receiver extends Base {
	constructor(options = {}) {
		options.role = 'receiver';
		super(options);
	}


}
