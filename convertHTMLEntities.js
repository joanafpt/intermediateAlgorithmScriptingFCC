//Intermediate Algorithm Scripting: Convert HTML Entities
/* Convert the characters &, <, >, " (double quote), and ' (apostrophe), in a string to their corresponding HTML entities.

Remember to use Read-Search-Ask if you get stuck. Try to pair program. Write your own code.*/


function convertHTML(str) {
    var str1 = "";
      if(str.includes("<>")){
      str1 = str.replace(/<>/g,"&lt;&gt;");
      return str1;
      }
  
      if(str.includes("&")){
      str1 = str.replace(/&/g,"&amp;");
      return str1;
      }
      if(str.includes("<")){
      str1 = str.replace(/</g,"&lt;");
      return str1;
      }
      if(str.includes(">")){
      str1 = str.replace(/>/g,"&gt;");
      return str1;
     }
      if(str.includes('"')){
      str1 = str.replace(/"/g,"&quot;");
      return str1;
     }
      if(str.includes("'")){
      str1 = str.replace(/'/g, "&apos;");
      return str1;
     }else{
      return str;
    }
  
  }
  convertHTML("<>");