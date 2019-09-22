class Notifier {
	constructor() {
		this.callback = [];
	}

	on(eventName, fn) {
		if (this.callback[eventName] === undefined) {
			this.callback[eventName] = [];
		}
		this.callback[eventName].push(fn);

		return {
			off: () => {
				let index = this.callback[eventName].indexOf(fn);
				if (~index) this.callback[eventName].splice(index, 1);
			}
		};
	}

	trigger(eventName, ...args) {
		if (this.callback[eventName] !== undefined) {
			this.callback[eventName].forEach(fn => {
				fn(...args);
			});
		}
	}
}

const notifier = new Notifier();
const listerJohn = notifier.on("MY_EVENT", (action, item) => {
	console.log(`John is ${action} ${item}`);
});

const listerJane = notifier.on("MY_EVENT", (action, item) => {
	console.log(`Jane is ${action} ${item}`);
});

notifier.trigger("MY_EVENT", "eating", "a burger");

listerJohn.off();
notifier.trigger("MY_EVENT", "eating", "a burger");