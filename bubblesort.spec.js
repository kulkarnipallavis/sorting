describe('Bubble Sort', function(){
  it('handles an empty array', function(){
    expect( bubbleSort([]) ).toEqual( [] );

  });


  it('handles a single element array', function(){
  	 spyOn(window, "compare").and.callThrough();
    let arr = [2, 1];
    bubbleSort(arr);
    expect(window.compare.calls.count()).toEqual(1);
    
  });

  it ('handles an array with multiple elements', function(){
  	 let multi = [5, 3, 9, 8, 2];
  	expect(bubbleSort(multi)).toEqual([2, 3, 5, 8, 9]);
  });

});