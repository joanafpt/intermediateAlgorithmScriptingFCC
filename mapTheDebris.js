//Intermediate Algorithm Scripting: Map the Debris
  /*Return a new array that transforms the elements' average altitude into their orbital periods (in seconds).

The array will contain objects in the format {name: 'name', avgAlt: avgAlt}.

You can read about orbital periods on Wikipedia.

The values should be rounded to the nearest whole number. The body being orbited is Earth.

The radius of the earth is 6367.4447 kilometers, and the GM value of earth is 398600.4418 km3s-2.

Remember to use Read-Search-Ask if you get stuck. Try to pair program. Write your own code. */


function orbitalPeriod(arr) {
    var GM = 398600.4418;
    var earthRadius = 6367.4447;
      for(var i in arr){
        var averageAlt = arr[i].avgAlt; 
        var periodoOrbital =  Math.round(2 * Math.PI * (Math.sqrt(Math.pow(earthRadius + averageAlt, 3) / GM)));
        console.log(periodoOrbital   + "   periodoOrbital")
        arr[i].orbitalPeriod = periodoOrbital;//cria prop  orbitalPeriod nos objetos da arr e assigna-lhe o valor q está na var periodoOrbital
      /*Object.defineProperty(arr[i], 'orbitalPeriod', {
    value: periodoOrbital,
   }); - outra forma de definir propriedades */
        delete arr[i].avgAlt;
      }
    console.log(arr);
  return arr;
  }
  orbitalPeriod([{name: "iss", avgAlt: 413.6}, {name: "hubble", avgAlt: 556.7}, {name: "moon", avgAlt: 378632.553}]);