//Intermediate Algorithm Scripting: Arguments Optional


/* Create a function that sums two arguments together. If only one argument is provided, then return a function that expects one argument and returns the sum.

For example, addTogether(2, 3) should return 5, and addTogether(2) should return a function.

Calling this returned function with a single argument will then return the sum:

var sumTwoAnd = addTogether(2);

sumTwoAnd(3) returns 5.

If either argument isn't a valid number, return undefined.

Remember to use Read-Search-Ask if you get stuck. Try to pair program. Write your own code.*/


function addTogether() {
    var arg = arguments[0] //guardar aqui o argumento arguments[0]p usar na funcao "inner". se nao o guardar n consigo usa-lo la, posteriormente
    
      //se sao dois numeros, soma-los
      if(typeof arguments[0]  === 'number' && typeof arguments[1] === 'number' && arguments.length === 2){
        var sum = arguments[0] + arguments[1];
        console.log(sum)
        return sum;
      }
      if(arguments.length >=2 && typeof arguments !== 'number'){
        console.log("undefined") 
        return undefined;
      }
      if(arguments.length === 1 && typeof arguments[0] === 'number'){
      console.log("so ha 1 arg na func principal, chama a outra funcao")
      //meter aqui a funcao "inner"
        return function sumTwoAnd(num) {
          if(typeof num !== 'number'){
            return undefined;
          }
          return num + arg;
        }
      }
    }
    addTogether(2)(3);