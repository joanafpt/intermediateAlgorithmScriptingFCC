//Intermediate Algorithm Scripting: Wherefore art thou

function whatIsInAName(collection, source) {
  var filteredArr = collection.filter(function(elemInCollection){
    console.log(elemInCollection) //imprime cada objeto ({ first: "Romeo", last: "Montague" }, { first: "Mercutio", last: null }, { first: "Tybalt", last: "Capulet"}...)

  //check if these objects are coincident with what's inside source ({ last: "Capulet" })
    for(var key in source){
      if(elemInCollection[key] !== source[key]){
        return false;
      }
    }
  return true
});
  
return filteredArr;
}

whatIsInAName([{ first: "Romeo", last: "Montague" }, { first: "Mercutio", last: null }, { first: "Tybalt", last: "Capulet" }], { last: "Capulet" });
