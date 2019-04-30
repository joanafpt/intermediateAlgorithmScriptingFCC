//Intermediate Algorithm Scripting: Drop it

/*Given the array arr, iterate through and remove each element starting from the first element (the 0 index) until the function func returns true when the iterated element is passed through it.

Then return the rest of the array once the condition is satisfied, otherwise, arr should be returned as an empty array.

Remember to use Read-Search-Ask if you get stuck. Try to pair program. Write your own code. */


function dropElements(arr, func) {
    var len = arr.length //because the length changes
      for(var i = 0; i < len; i++){
        if(!func(arr[0])){
        arr.shift()
        }
      else{
      }
    }
    
    return arr;
  }
  dropElements([1, 2, 3, 4], function(n) {return n >= 3;});