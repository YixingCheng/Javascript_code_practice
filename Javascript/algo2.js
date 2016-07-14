//get the sum of digis
function getSumRec(num){
	if (parseInt(num) <= 0) return 0;
	var sum = 0;
	var digit = parseInt(num % 10);
	sum = digit + getSumRec(num / 10);
	return sum;
}

//get the sum iterative
function getSumIter(num) {
	if (parseInt(num) <= 0) return 0;
	var sum = 0;
	while(num > 0){
		sum += parseInt(num % 10);
		num = parseInt(num / 10);
	}
	return sum;
}

console.log(getSumRec(123));
console.log(getSumRec(3325));

console.log(getSumIter(123));
console.log(getSumIter(3914));