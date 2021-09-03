/* 5 - Crie uma função que receba um array de inteiros e retorne o inteiro que mais se repete.
Array de teste: [2, 3, 2, 5, 8, 2, 3]; .
Valor esperado no retorno da função: 2 . */

let numbers = [2, 3, 2, 5, 8, 2, 3];

function reppeatedNumber(){
    let result = 0;
    let count = 0;
    let comparated = 0;
    for (let i = 0; i < numbers.length; i+= 1) {
       for (let j = 0; j < numbers.length ; j+= 1) {
           if(numbers[i] === numbers[j]){
           count +=1
           }
       }
       if(count > comparated){
           comparated = count;
           result = numbers[i]
       }
       count = 0;
    }
    return result;
} 

console.log(reppeatedNumber(numbers))