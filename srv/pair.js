class Pair {
	constructor(options = {}) {
		this.key = options.key;
		this.emitter = options.emitter;
		this.receiver = options.receiver;
	}
};

module.exports = Pair;
