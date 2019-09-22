const printArrayValue = arr => {
	arr.forEach(value => {
		if (Array.isArray(value)) {
			printArrayValue(value);
		} else {
			console.log(value);
		}
	});
};

let newArray = [];
const splitArray = a => {
	a.forEach(value => {
		if (Array.isArray(value)) {
			splitArray(value);
		} else {
			newArray.push(value);
		}
	});
};

printArrayValue([1, 2, 3, 4, [5, 6, [7, 8, 9]], 10, 11]);
splitArray([1, 2, 3, 4, [5, [6, 7]]]);
console.log(newArray);
