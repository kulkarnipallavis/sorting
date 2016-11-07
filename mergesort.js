var split = function(wholeArray) {

  /* your code here to define the firstHalf and secondHalf arrays */
  var index = Math.floor(wholeArray.length/2);

  var firstHalf = wholeArray.slice(0, index);
  var secondHalf = wholeArray.slice(index);
  return [firstHalf, secondHalf];
}

var merge = function(left, right){
	var ldx = 0, rdx = 0, result = [];
	while(left[ldx] && right[rdx]){
		if(left[ldx] < right[rdx]){
			result.push(left[ldx++]);

		}else{
			result.push(right[rdx++]);
		}
	}

	return result.concat(left.splice(ldx)).concat(right.splice(rdx));
}

var mergeSort = function(wholeArray){
	var arr = split(wholeArray);
	var left = arr[0];
	var right = arr[1];
	if (left.length > 1) left = mergeSort(left);
	if (right.length >1) right = mergeSort(right);
	return merge(left, right);

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

  // console.time(numItems + ' bubble');
  // bubbleSort(bTestArray);
  // console.timeEnd(numItems + ' bubble');

  console.time(numItems + ' merge');
  mergeSort(mTestArray);
  console.timeEnd(numItems + ' merge');
}