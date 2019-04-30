//Intermediate Algorithm Scripting: Pig Latin

/* Translate the provided string to pig latin.

Pig Latin takes the first consonant (or consonant cluster) of an English word, moves it to the end of the word and suffixes an "ay".

If a word begins with a vowel you just add "way" to the end.

Input strings are guaranteed to be English words in all lowercase.

Remember to use Read-Search-Ask if you get stuck. Try to pair program. Write your own code.*/


function translatePigLatin(str) {
    var regex = /[aeiou]/ 
    var newStr = "";
    var afterVowel = "";
    var beforeVowel = "";
      for(var i = 0; i< str.length; i++){
        if(str[i].match(regex)){ break; }{
          beforeVowel += str[i]  
          afterVowel = str.substr(beforeVowel.length, ); 
          newStr = afterVowel + beforeVowel + "ay"
        }
      }
  
    //eight and algorithm
        if(str.charAt(0).match(regex)){//se 1o caractere é vogal
          newStr = str + "way";
        }
  
    return newStr
  }
  translatePigLatin("paragraph");
  