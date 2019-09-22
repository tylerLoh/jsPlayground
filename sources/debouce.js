let counter = 0;
const api = (...args) => {
	console.log("Fetching API...", counter++);
};

const debouce = function(fn, d, ...args) {
	let context = this;
	let timer;
	return function() {
		clearTimeout(timer);
		timer = setTimeout(() => {
			fn.apply(context, args);
		}, d);
	};
};

const searching = debouce(api, 500, { name: "tyler" }, "hello Archer");

