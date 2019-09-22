(function() {
	let counter = 0;
	const resizeAPI = function(...args) {
		console.log('args: ', args);
		console.log("API being call..", counter++);
	};

	const throttling = function (fn, d, ...args) {
		let flag = true;
		let context = this;
		return () => {
			if(flag) {
				flag = false;
				fn.apply(context, args);
				setTimeout(() => {
					flag = true;
				}, d)
			}
		}
	}

	const throttlingResize = throttling(resizeAPI, 300, "Resize log", "hello");
	window.addEventListener('resize', throttlingResize);
})();
