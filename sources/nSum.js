// closure method
const nSum = a => b => (b ? nSumm(a + b) : a);
const nSumm = a => {
	return function(b) {
		return b ? nSumm(a + b) : a;
	};
};

const normalSum = function(a) {
	return function(b) {
		if (b) {
			return normalSum(a + b);
		}
		return a;
	};
};

console.log(nSumm(10)(20)(30)());
console.log(normalSum(10)(20)());
