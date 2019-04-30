function dropElements(arr, func) {
  var len = arr.length;
    for(var i = 0; i < len; i++){
      if(func(arr[0])){
      break;   
      }
    arr.shift()
    } 
  return arr
  
}
dropElements([1, 2, 3], function(n) {return n > 0;});