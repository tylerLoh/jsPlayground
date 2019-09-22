const multi = (x,y,z) => {
	console.log(x*y);
	return x*y;
}

function multiply(x) {
	return function(y, z) {
		console.log(x*y);
	}
}

const add = function() {
	let counter = 0;
	return function () {
		counter +=1;
		return counter;
	}
}();

const add_one = () => {
	let counter = 0;
	return () => {
		counter += 1;
		return counter;
	};
};

let z = add_one();
console.log('add: ', add());
console.log('add: ', add());
console.log('add: ', z());
console.log('add: ', z());


const byTwo = multiply(2);
byTwo(3, 5);

const multiTwo = multi.bind(this, 2);
multiTwo(3, 5);