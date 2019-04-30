//Intermediate Algorithm Scripting: Spinal Tap Case


/* Convert a string to spinal case. Spinal case is all-lowercase-words-joined-by-dashes.

Remember to use Read-Search-Ask if you get stuck. Try to pair program. Write your own code.*/

function spinalCase(str) {
    //spliting uppercase words 
    var str2 = str.split(/(?=[A-Z])|(=[A-Z])/g)
   
    var toStr = str2.toString()//tostring
    var lowercase = toStr.toLowerCase();//lowercase
   
    var res = lowercase.replace(/([ _ ,+])/g, "-"); 
   
    var final = res.replace(/--+/g, "-");
    console.log(final)
    
    return final;  
   
   }
   spinalCase("AllThe-small Things");
   