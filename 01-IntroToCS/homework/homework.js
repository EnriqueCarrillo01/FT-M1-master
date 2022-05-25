'use strict'

function BinarioADecimal(num) {
  // tu codigo aca
let a = 0;
for(let i = 0; i < num.length; i++) {
  a = a + num[i] * Math.pow(2, num.length - 1 - i)
}
return a;
}

function DecimalABinario(num) {
  // tu codigo aca
  let a = ""
while(num > 0) {
 a = (num % 2) + a
 num = Math.floor(num/2)
}
return a;
}


module.exports = {
  BinarioADecimal,
  DecimalABinario,
}