//Intermediate Algorithm Scripting: Search and Replace

/*
Intermediate Algorithm Scripting: Search and Replace
Perform a search and replace on the sentence using the arguments provided and return the new sentence.

First argument is the sentence to perform the search and replace on.

Second argument is the word that you will be replacing (before).

Third argument is what you will be replacing the second argument with (after).

Note
Preserve the case of the first character in the original word when you are replacing it. For example if you mean to replace the word "Book" with the word "dog", it should be replaced as "Dog"

Remember to use Read-Search-Ask if you get stuck. Try to pair program. Write your own code. */

function myReplace(str, before, after) {
    var sentence = str.split(" "); 
    var nova = [];
    var str2 = "";
    var before = before + ""; //string
    var after = after + ""; //string
  
      for(var p = 0; p < sentence.length; p++){
        if(sentence[p].match(before) && before.charAt(0).match(/^[A-Z]/)){
          var zeroCharAfter = after.charAt(0).toUpperCase();//S
          var restOfAfter = after.substr(1, ); //itting
          var up = zeroCharAfter.concat(restOfAfter); //Sitting
          nova = sentence.splice(sentence.indexOf(sentence[p]), 1, up);
        }
      }
      for(var i = 0; i < sentence.length; i++){
        if(sentence[i].match(before) && !before.charAt(0).match(/^[A-Z]/)){    
          nova = sentence.splice(sentence.indexOf(sentence[i]), 1, after);
        }
      }
    str2 = sentence.join(' ');//turns into string
    console.log(str2);
    return str2;
  }
  myReplace("Let us go to the store", "store", "mall");