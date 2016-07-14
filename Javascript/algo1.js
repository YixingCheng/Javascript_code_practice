//@return string
function findLongestUniqueSubstring(str){
	var map = {};
	var max = {
		start: 0,
		end: 0,
		length: 1
	};

	var pre_cur = -1;
	for(var i=0; i< str.length; i++){
		if(map[str[i]]) {                 //string.charAt(i)   vs   string[i]
			pre_cur = map[str[i]] > pre_cur ? map[str[i]] : pre_cur;

			if(i - pre_cur > max.length){
				max.start = pre_cur+1;
				max.end = i,
				max.length = i - pre_cur;
			}
		} else {
			if (pre_cur != -1){
				max.start = pre_cur + 1;
			}
			max.end = i;
			max.length = max.end - max.start + 1;
		}

		map[str[i]] = i;

		console.log('pre_cur', pre_cur, str[i]);
		console.log('mpa + max', map, max);
	}

	return str.substring(max.start, max.end + 1);
}

//test
console.log(findLongestUniqueSubstring('geekforgeeks'));