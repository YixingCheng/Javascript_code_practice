function findMissing(arr){
	var xorDiff = arr[0];
	for(var i = 1; i < arr.length; i++){
		xorDiff ^= arr[i];	
	}

	var xorSame;
	for(var i =1; i<=(arr.length + 1); i++){
		xorSame = xorSame ? xorSame ^i : i;
	}

	return xorDiff ^ xorSame;

}

console.log(findMissing([1,2,3,4,5,7,8,9]));