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