function rotateArray(arr, k) {
	var left = 0,
        right = arr.length - 1;

    var pivot = k;    

    while(left < pivot){
    	var temp = arr[left];
    	arr[left] = arr[pivot];
    	arr[pivot] = temp;
    	left++;
    	pivot--;
    }

    console.log(arr);
    pivot = k+1;

    while(pivot < right){
    	var temp1 = arr[pivot];
    	arr[pivot] = arr[right];
    	arr[right] = temp1;
    	pivot++;
    	right--;
    }

    console.log(arr);

    left = 0;
    right = arr.length - 1
    while(left < right){
    	var temp2 = arr[left];
    	arr[left] = arr[right];
    	arr[right] = temp2;
    	left++;
    	right--;
    }

    console.log(arr);
}

array1 = [1,2,3,4,5,6,7];
rotateArray(array1, 2);