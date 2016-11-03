describe('Split Array function', function() {
  it('is able to split an array into two halves', function() {
    // your code here 
    var arr = [5,3,2,8,9];
    expect(split(arr)).toEqual([[5,3],[2,8,9]]);
  });
});

describe('Merge Sort', function(){
  it('is able to merge two sorted arrays into one sorted array', function(){
    // test the merging algorithm
    let multi = [5, 3, 9, 8, 2];
  	expect(mergeSort(multi)).toEqual([2, 3, 5, 8, 9]);
  });
});