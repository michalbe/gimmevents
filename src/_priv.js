const private_methods = [
	'connect', 'on_connect'
];

export const priv = private_methods.reduce((memo, item) => {
	memo[item] = Symbol(item);
	return memo;
}, {});
