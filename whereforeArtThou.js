//Intermediate Algorithm Scripting: Wherefore art thou

/*Make a function that looks through an array of objects (first argument) and returns an array of all objects that have matching name and value pairs (second argument). Each name and value pair of the source object has to be present in the object from the collection if it is to be included in the returned array.

For example, if the first argument is [{ first: "Romeo", last: "Montague" }, { first: "Mercutio", last: null }, { first: "Tybalt", last: "Capulet" }], and the second argument is { last: "Capulet" }, then you must return the third object from the array (the first argument), because it contains the name and its value, that was passed on as the second argument.

Remember to use Read-Search-Ask if you get stuck. Write your own code. */

function whatIsInAName(collection, source) {
    var arr = collection.filter(function(elemInCollection){
      console.log(elemInCollection)
    
       for(var key in source){ //key is what's inside source (last)
        //if({last:Capulet} is != from {first: "Romeo", last: "Montague"} (in this case, it is!)
         if(source[key] !== elemInCollection[key]){
           return false;
         }
       }
      return true;
    });
      console.log(arr)
      return arr;
    }
    
    whatIsInAName([{ first: "Romeo", last: "Montague" }, { first: "Mercutio", last: null }, {first: "Joaquim", last: "Capulet"}, { first: "Tybalt", last: "Capulet" }], { last: "Capulet" });