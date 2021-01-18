function DecimalABinario(num) {
  // tu codigo aca

  var array = [];
  var str = "";
  while (num > 1) {

    str = (num % 2) + str;
    num = Math.floor(num / 2);
        
  }
  str = num + str;
  var resultado = array.toString();
  return console.log(str);
}



DecimalABinario(4); // toBe('100');
  
DecimalABinario(7);   //.toBe('111');
