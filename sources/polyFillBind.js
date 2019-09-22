let name = {
	name: 'tyler',
}

const printName = function() {
	const Arr = [...this, ...arguments];
	Arr.forEach(function(obj, index) {
		Object.entries(obj).forEach(([key, value]) => {
			console.log(`${key} : ${value}`);
		})
	})
}

let oriPrint = printName.bind([name, {'From': 'Marina', 'Town' : 'Bay'}]);
oriPrint({'number': '01234567', 'telco' : 'TIME'});

Function.prototype.polyBind = function() {
	let context = this;
	let args = arguments;
	return function() {
		context.apply(args, arguments);
	}
}

let polyPrint = printName.polyBind(name, {'From': 'Marina', 'Town' : 'Bay'});
polyPrint({'number': '01234567', 'telco' : 'TIME'});

let testObj = {'number': 'one'};
// console.log([{'number': 'one'}]);