const bubbleSort = function(arr){
	for (let length = arr.length; length > 1; length--){
		for (let i = 0; i < length-1; i++){
			compare(arr, i);
		}
	}	

	return arr;

}

var compare = function (arr, index){
	if (arr[index] > arr[index+1]){
		swap(arr,index);
	}
}

var swap = function (arr, index){
	let temp = arr[index+1];
	arr[index+1] = arr[index];
	arr[index] = temp;
}