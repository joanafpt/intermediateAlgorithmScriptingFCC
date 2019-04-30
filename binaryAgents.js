//Intermediate Algorithm Scripting: Binary Agents

/*Return an English translated sentence of the passed binary string.

The binary string will be space separated.

Remember to use Read-Search-Ask if you get stuck. Try to pair program. Write your own code. */

function binaryAgent(str) {
  //converter str em array p manipulacao facilitada  
  var str1 = str.split(' '); //object
  var nums = [];
  var str2 = []; //arr recetor
    //percorrer "string"
    for(var i = 0; i < str1.length; i++){
    //console.log(str1[i]) //aceder a cada "caractere"
      //percorrer "str" e converter cada caractere
      var parsed = parseInt(str1[i],2);
      //console.log(parsed) escreve os caracteres 
      nums.push(parsed); //array
    }
    //console.log(nums) //obj
    for(var k = 0; k < nums.length; k++){
    //console.log(typeof nums[k])//number
      var x = String.fromCharCode(nums[k]);
      //console.log(x)
      str2.push(x);
    }
    //console.log(typeof str2)//array
  var sentence = str2.join("");
  console.log(sentence)

return sentence;

}

binaryAgent("01000001 01110010 01100101 01101110 00100111 01110100 00100000 01100010 01101111 01101110 01100110 01101001 01110010 01100101 01110011 00100000 01100110 01110101 01101110 00100001 00111111");