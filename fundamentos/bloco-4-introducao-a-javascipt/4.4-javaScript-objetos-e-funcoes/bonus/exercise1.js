let number = 'IX'




let roman = {
    I:1,
    V:5,
    X:10,
}
/* let soma = numerosRomanos[numero[len - 1]];
let atual = numerosRomanos[numero[len - 1]]; */

let aux = roman[number[number.length - 1]];
let result = 0;
for (let i = 0; i <= number.length; i++) {
    if(aux > roman[number[i]])
    result = aux - roman[number[i]] 
    
}
console.log(result)