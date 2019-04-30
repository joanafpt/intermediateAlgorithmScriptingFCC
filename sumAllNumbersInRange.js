//Intermediate Algorithm Scripting: Sum All Numbers in a Range

/*We'll pass you an array of two numbers. Return the sum of those two numbers plus the sum of all the numbers between them.

The lowest number will not always come first.

Remember to use Read-Search-Ask if you get stuck. Try to pair program. Write your own code. */


function sumAll(arr) {

    //"The lowest number will not always come first."
    var sortedArr = arr.sort(function(a, b){return a-b})
        for(var i = 0; i< sortedArr.length; i++){
          var numeroExterior = 0;       
          var numMaior = sortedArr[1]; //10
          var numMenor = sortedArr[0]; //5
          
          while(numMaior > numMenor + 1){
            var newNumba = numMaior - 1;
            //console.log(newNumba)//9,8,7,6
            numeroExterior += newNumba;
            numMaior --
          }            
        }
    var PremiereSum = Number(sortedArr[0]) + Number(sortedArr[sortedArr.length -1]) //PremiereSum é 15, soma dos numeros do arr
    var result = numeroExterior + PremiereSum;
  return result;
  }
  sumAll([10, 5]);