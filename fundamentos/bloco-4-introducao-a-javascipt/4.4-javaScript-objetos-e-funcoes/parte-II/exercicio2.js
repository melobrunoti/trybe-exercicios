/* 2 - Crie uma função que receba um array de inteiros e retorne o índice do maior valor.
Array de teste: [2, 3, 6, 7, 10, 1]; .
Valor esperado no retorno da função: 4 . */


let numbers = [2, 3, 6, 7, 10, 1];


function biggestNumber(){
    let result = 0;
    for (let i = 0; i < numbers.length; i += 1) {
    if(numbers[i] > result){
        result = numbers[i];
    }
    }
    
    return numbers.indexOf(result)
    
}   

console.log(biggestNumber(numbers))