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

for (var i = 9; i <= 12; i++) {
  var numItems = Math.pow(2, i);
  var nativeTestArray = [];

  for(var j = 0; j < numItems; j++) {
    var rand = Math.floor(Math.random() * numItems);
    nativeTestArray.push(rand);
  }

  var bTestArray = nativeTestArray.slice(0);
  var mTestArray = nativeTestArray.slice(0);

  console.time(numItems + ' native');
  nativeTestArray.sort(function(a, b){ return a - b; });
  console.timeEnd(numItems + ' native');

  console.time(numItems + ' bubble');
  bubbleSort(bTestArray);
  console.timeEnd(numItems + ' bubble');

  // console.time(numItems + ' merge');
  // mergeSort(mTestArray);
  // console.timeEnd(numItems + ' merge');
}