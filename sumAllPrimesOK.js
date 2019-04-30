//Intermediate Algorithm Scripting: Sum All Primes

/*Sum all the prime numbers up to and including the provided number.

A prime number is defined as a number greater than one and having only two divisors, one and itself. For example, 2 is a prime number because it's only divisible by one and two.

The provided number may not be a prime.

Remember to use Read-Search-Ask if you get stuck. Try to pair program. Write your own code. */


function sumPrimes(num) {
    var list = [];
    var numsImpares = [];
    var primos = [];
    var primitos = [];
    var sum;
      while(num > 1){
      //console.log(num)
      list.push(num)
      num--
      }
        for(var i = 0; i < list.length; i++){
          if(list[i] === 2 || list[i] % 2 !== 0){
          numsImpares.push(list[i])
          }
        }
        //console.log(numsImpares) // devolve os impares todos e o 2
        for(var a = 0; a < numsImpares.length; a++){
        //console.log(numsImpares[a]) //cada numero separado...
          for(var j = 2; j< numsImpares[a]; j++){
          //console.log(numsImpares[a])
            if(numsImpares[a] % j === 0){
              delete numsImpares[a]
            }
          }
          //console.log(numsImpares[a]) //number
          primos.push(numsImpares[a])        
        }  
          //console.log(primos)
          primitos = primos.filter(function(elem){
            return elem !== undefined
          });
          //console.log(primitos)
  
          sum = primitos.reduce(function(ac, valor){
            return ac + valor;
          });
    console.log(sum)
    return sum;
   }
  sumPrimes(977);