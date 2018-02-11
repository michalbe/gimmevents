const privates = [
	'connect', 'on_connect', 'setup_listeners', 'send', 'listeners', 'on_message',
	'handle_message'
];

export const priv = privates.reduce((memo, item) => {
	memo[item] = Symbol(item);
	return memo;
}, {});
