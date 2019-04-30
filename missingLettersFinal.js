
//Intermediate Algorithm Scripting: Missing letters
/*Find the missing letter in the passed letter range and return it.

If all letters are present in the range, return undefined.

Remember to use Read-Search-Ask if you get stuck. Try to pair program. Write your own code.*/

//FULLY WORKING

function fearNotLetter(str) {
  var alf = "abcdefghijklmnopqrstuvwxyz";
  var inicialString = str[0]
  var parteAlf = alf.substr(alf.indexOf(inicialString), str.length)
  var last;
   //comparing the given str with the partial alphabet
    for(var i = 0; i < parteAlf.length; i++){
      if(str.indexOf(parteAlf[i]) === -1 && parteAlf.indexOf(parteAlf[i])>= 0){
      last = parteAlf[i];
      }
    }

  return last;
}
fearNotLetter("stvwx");

