//Intermediate Algorithm Scripting: Diff Two Arrays

/* Compare two arrays and return a new array with any items only found in one of the two given arrays, but not both. In other words, return the symmetric difference of the two arrays.

Remember to use Read-Search-Ask if you get stuck. Try to pair program. Write your own code.

Note
You can return the array with its elements in any order.*/


function diffArray(arr1, arr2) {
    var newArr = [];
    
    for(var i = 0; i< arr1.length; i++){
      if(arr2.indexOf(arr1[i])=== -1){
        newArr.push(arr1[i])
      }
    }
  
    for(var i = 0; i< arr2.length; i++){
      if(arr1.indexOf(arr2[i])=== -1){
        newArr.push(arr2[i])
      }
    }
    
    return newArr;
  }
  
  diffArray([1, "calf", 3, "piglet"], [7, "filly"]);