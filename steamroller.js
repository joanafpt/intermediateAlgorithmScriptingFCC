//Intermediate Algorithm Scripting: Steamroller

/* Flatten a nested array. You must account for varying levels of nesting.

Remember to use Read-Search-Ask if you get stuck. Try to pair program. Write your own code.*/


function steamrollArray(arr) {
    //criar array novo para posteriormente guardar todos os elementos 
    var newArray = [];
      //se algum elemento do arr não é array, "mandá-lo" para o novo array
      if(!Array.isArray(arr)){
      newArray.push(arr)
      }  
    //percorrer o array inicial para validar se existem elementos que sao   de tipo array
    for(var i = 0; i < arr.length; i++){
      //se houver, concatenar a nova array, que ja possui elementos           adicionados, com o array inicial, mas chamando a funcao, para que       se efetue a operaçao as vzes necessarias ate que a array esteja         flat - todos ao mesmo nivel
      if(Array.isArray(arr)){
      newArray = newArray.concat(steamrollArray(arr[i]))
      }
    }
    //retornar o resultado
    //console.log(newArray) //[1,2,3,4]
    return newArray;
  }
  
  steamrollArray([1, [2], [3, [[4]]]]);