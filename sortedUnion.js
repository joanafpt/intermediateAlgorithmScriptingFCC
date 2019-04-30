//Intermediate Algorithm Scripting: Sorted Union

/* Write a function that takes two or more arrays and returns a new array of unique values in the order of the original provided arrays.

In other words, all values present from all arrays should be included in their original order, but with no duplicates in the final array.

The unique numbers should be sorted by their original order, but the final array should not be sorted in numerical order.

Check the assertion tests for examples.

Remember to use Read-Search-Ask if you get stuck. Try to pair program. Write your own code.*/


function uniteUnique(arr) {
  var args = Array.from(arguments) //[1, 3, 2], [5, 2, 1, 4], [2, 1]
  var final = [];
    for(var i = 0; i < args.length; i ++){
    //args[i]) - [1, 3, 2], [5, 2, 1, 4], [2, 1]
      for(var k = 0; k < args[i].length; k++){
      //args[i][k]) - 1,3,2,5,2,1,4,2,1
   
      //validar se os indices do args[i][k] existem no array final - so       pretendemos que sejam "pushados" para o array final uma vez,            eliminando repeticoes. Se ja la estiverem (indexOf !== de -1),          nao fazer "push" 

        if(final.indexOf(args[i][k]) === -1){
        final.push(args[i][k])
        }

      }

    }

  return final;
}

uniteUnique([1, 3, 2], [5, 2, 1, 4], [2, 1]);