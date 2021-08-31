/* 3 - Crie uma função que receba um array de inteiros e retorne o índice do menor valor.
Array de teste: [2, 4, 6, 7, 10, 0, -3]; .
Valor esperado no retorno da função: 6 ./*  */ 

let numbers = [2, 4, 6, 7, 10, 0, -3];

function smallestNumberIndex(){
    let result = 0;
    for (let i = 0; i < numbers.length; i += 1) {
    if(numbers[i] < result){
        result = numbers[i];
    }
    }
    
    return numbers.indexOf(result)
    
}   

console.log(smallestNumberIndex(numbers))