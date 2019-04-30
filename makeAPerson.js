//Intermediate Algorithm Scripting: Make a Person
/* Fill in the object constructor with the following methods below:

getFirstName() getLastName() getFullName() setFirstName(first) setLastName(last) setFullName(firstAndLast)
Run the tests to see the expected output for each method.

The methods that take an argument must accept only one argument and it has to be a string.

These methods must be the only available means of interacting with the object.

Remember to use Read-Search-Ask if you get stuck. Try to pair program. Write your own code.*/


var Person = function(firstAndLast) {
    //console.log(typeof firstAndLast)//str
    var arr = firstAndLast.split(' ')//object / arr
  
    //getFirstName retorna o index 0 (isto é, o 1.º nome)
    this.getFirstName = function(){
      return arr[0];
    };
  
    //getLastName retorna o index 1 (isto é, o último nome)
    this.getLastName = function(){
      return arr[1];
    };
    //getFullName retorna a junção dos indices 0 e 1 (isto é, 1.º e último nomes)
    this.getFullName = function(){
      return arr[0].concat(" " + arr[1]);
    };
  
    //setFirstName define que ao index0 deve ser atribuido o valor do input do metodo 
    this.setFirstName = function(fname){
      arr[0] = fname;
    };
   //setLastName define que ao index1 deve ser atribuido o valor do input do metodo 
    this.setLastName = function(lname){
     arr[1] = lname;
    };
  
  //setFullName "chama" o metodo setFirstName e passa-lhe o index 0 do novo array cm arg, e "chama" o metodo setLastName, passando-lhe o index 1 como argumento
    this.setFullName = function(firstAndLast){
     var x  = firstAndLast.split(' ')
     this.setFirstName(x[0])
     this.setLastName(x[1])
    };
  };
  
  var bob = new Person('Bob Ross');
  bob.getFullName();