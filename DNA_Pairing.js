//Intermediate Algorithm Scripting: DNA Pairing

/*The DNA strand is missing the pairing element. Take each character, get its pair, and return the results as a 2d array.

Base pairs are a pair of AT and CG. Match the missing element to the provided character.

Return the provided character as the first element in each array.

For example, for the input GCG, return [["G", "C"], ["C","G"],["G", "C"]]

The character and its pair are paired up in an array, and all the arrays are grouped into one encapsulating array.

Remember to use Read-Search-Ask if you get stuck. Try to pair program. Write your own code. */


function pairElement(str) {
    var internalArray = [];
    var externalArray = [];
  
    //transf str num array:
    var arr = str.split(""); //arr é object | arr é A,T,C,G,A
      for(var i = 0; i < arr.length; i++){
        if(arr[i] === 'A'){
        internalArray.push(arr[i], "T");
        externalArray.push(internalArray)
        internalArray = [];
        }
        if(arr[i] === 'T'){
        internalArray.push(arr[i], "A");
        externalArray.push(internalArray)
        internalArray = [];
        }
  
        if(arr[i]==='C'){
        internalArray.push(arr[i], "G");
        externalArray.push(internalArray)
        internalArray = [];
        }
        if(arr[i] === 'G'){
        internalArray.push(arr[i], "C");
        externalArray.push(internalArray)
        internalArray = [];
        }
      }
  
    console.log(externalArray) //A,T,T,A,C,G,G,C,A,T
    return externalArray
    
  }
  
  pairElement("ATCGA");