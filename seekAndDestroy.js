//Intermediate Algorithm Scripting: Seek and Destroy

/*You will be provided with an initial array (the first argument in the destroyer function), followed by one or more arguments. Remove all elements from the initial array that are of the same value as these arguments.

Note
You have to use the arguments object.

Remember to use Read-Search-Ask if you get stuck. Write your own code. */

function destroyer(arr) {
    console.log(arguments[0])//1,2,3,1,2,3
    console.log(arguments[1])//2
    console.log(arguments[2])//3
      var newArray = [] 
      //slice method to turn the arguments[1] and arguments [2] into array
      var args = Array.prototype.slice.call(arguments, 1, ); 
      //arr [1, 2, 3, 1, 2, 3]
      //args [2, 3]
        for(var i = 0; i < arr.length; i++){
          if(args.indexOf(arr[i]) >= 0){
            delete arr[i] 
          }
          newArray.push(arr[i])
        }
     
      console.log(newArray) //1,,,1,,,
      console.log(typeof newArray[0]) //number
      console.log(typeof newArray[1])//undefined
      console.log(typeof newArray[2])//undefined
      console.log(typeof newArray[3]) //number
      console.log(typeof newArray[4])//undefined
      console.log(typeof newArray[5])//undefined
      console.log(typeof newArray[6])//undefined
      console.log(typeof newArray[7])//undefined
      console.log(typeof newArray[8])//undefined
  
    //filter in order to only show the numbers and not the undefined values
    var returnedArr = newArray.filter(e => e !== undefined)
  return returnedArr
  }
  
  destroyer([1, 2, 3, 1, 2, 3], 2, 3);