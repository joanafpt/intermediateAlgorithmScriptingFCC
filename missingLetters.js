//Intermediate Algorithm Scripting: Missing letters

/*Find the missing letter in the passed letter range and return it.

If all letters are present in the range, return undefined.

Remember to use Read-Search-Ask if you get stuck. Try to pair program. Write your own code. */


//INITIAL CODE, NOT FULLY WORKING

function fearNotLetter(str) {
    var alf = "abcdefghijklmnopqrstuvwxyz";
    var inicialString = str[0] 
    console.log(inicialString)
    console.log(str.length)
    var parteAlf = alf.slice(alf.indexOf(inicialString), str.length + 1)
    console.log(parteAlf)
    var last;
    
    //comparar string stvwx com alfabeto parcial stuvwxyz
    for(var i = 0; i < parteAlf.length; i++){
    
     if(str.indexOf(parteAlf[i]) === -1 && parteAlf.indexOf(parteAlf[i]) >= 0){
      last = parteAlf[i];
      break;
       }
    
    
    }
    
    return last
    }
    fearNotLetter("stvwx");