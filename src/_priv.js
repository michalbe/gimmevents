const privates = [
	'connect', 'on_connect', 'send'
];

export const priv = privates.reduce((memo, item) => {
	memo[item] = Symbol(item);
	return memo;
}, {});
