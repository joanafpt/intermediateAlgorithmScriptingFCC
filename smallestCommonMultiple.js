//Intermediate Algorithm Scripting: Smallest Common Multiple

/* Find the smallest common multiple of the provided parameters that can be evenly divided by both, as well as by all sequential numbers in the range between these parameters.

The range will be an array of two numbers that will not necessarily be in numerical order.

For example, if given 1 and 3, find the smallest common multiple of both 1 and 3 that is also evenly divisible by all numbers between 1 and 3. The answer here would be 6.

Remember to use Read-Search-Ask if you get stuck. Try to pair program. Write your own code.*/


function smallestCommons(arr) {
  var orderedArr = arr.sort(function(a, b){return a-b}); //ordem crescente
 //obter a range entre os limites [2 e 6]
  var range = [];
    for(var i = 0; i < orderedArr.length; i++){
      while(orderedArr[0] <= orderedArr[orderedArr.length - 1]){
      range.push(orderedArr[i])
      orderedArr[i]++
      }
    }

    range.reverse(); //6,5,4,3,2
  var min = range[range.length-1] //2
  var max = range[0] //6
  var multDoMaximo = max;
    //loop a andar p tras 
    for(var i = max; i >= min; i--){
      //se o multiplo do valor maximo n é divisivel pelos is todos
      if(multDoMaximo % i != 0){
    //ao multiplo do valor maximo(6,12,18...) soma-se o valor maximo(6)
      multDoMaximo = multDoMaximo + max;

//para que as operacoes so parem qd for achado um multiplo q seja multiplo de *TODOS* os is, é preciso (re)atribuir ao i o valor de maximo (isto e, 6), tal como tem no inicio do for loop
      i = max;
      }
    }
 
console.log(multDoMaximo)
return multDoMaximo
}

smallestCommons([6,2]);



