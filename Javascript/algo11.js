function findCommonElem(arr1, arr2){
	var commElem = [];
	var map = {};
	for(var i= 0; i< arr1.length; i++){
		for(var j= 0; j< arr2.length; j++){
			if (arr1[i] === arr2[j] && !map[arr1[i]]){
				commElem.push(arr1[i]);
				map[arr1[i]] = true;
			}
		}
	}
	return commElem;
}

console.log(findCommonElem([1,2,3,5,6,7,9,10], [2,3,10]));