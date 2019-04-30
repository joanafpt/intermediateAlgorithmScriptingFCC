//Intermediate Algorithm Scripting: Sum All Odd Fibonacci Numbers

/*Given a positive integer num, return the sum of all odd Fibonacci numbers that are less than or equal to num.

The first two numbers in the Fibonacci sequence are 1 and 1. Every additional number in the sequence is the sum of the two previous numbers. The first six numbers of the Fibonacci sequence are 1, 1, 2, 3, 5 and 8.

For example, sumFibs(10) should return 10 because all odd Fibonacci numbers less than or equal to 10 are 1, 1, 3, and 5.

Remember to use Read-Search-Ask if you get stuck. Try to pair program. Write your own code. */

function sumFibs(num) {
    if (num < 0){
      return 0;
    }
    if(num === 1){
      return 1;
    }
      var sequence = []; //vai guardar os fibonacci 
      var oddFibonacci = [];
      var sum;
      var a = 0; //numero pelo qual se comeca
      var b = 1; //numero q aparece a seguir
      var temp;
        //obter lista de numeros desde num ate 1
        while(b <= num){
          temp = b; // temp guarda o valor de b, 1   
          b = a + b; // b = 1 ( 0 + 1)
          a = temp;
          //console.log(a  + " numero antes")  
          //console.log(b   + " numero depois")  
          sequence.push(a)  
        }
    
        //console.log(sequence)
  
        //filtrar os fibonacci impares:
        oddFibonacci = sequence.filter(function(elem){
          return elem % 2 !== 0;
        });
  
        //console.log(oddFibonacci   + " Fibonacci impares")
  
        sum = oddFibonacci.reduce(function(ac, next){
          return ac + next;
        }); 
  
      //console.log(sum)
      return sum;
  }
  
  sumFibs(75025)