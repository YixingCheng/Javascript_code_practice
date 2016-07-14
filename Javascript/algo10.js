function indexOf(str, substr) {
	var res = [];
	for(var i= 0; i< str.length; i++){
		var isEqual = true;
		for(var j= 0, indexStr = i; j<substr.length; ){
			if(indexStr < str.length && str[indexStr] === substr[j]){
				j++;
				indexStr++;
			}else{
				isEqual = false;
				break;
			}
		}
		if(isEqual){
			res.push(i);
		}
	}

	return res.length ? res: null;
}

console.log(indexOf('dxxaaaaxxxaaaxxxaaa', 'aaa'));