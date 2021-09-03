/* 4 - Crie uma função que receba um array de nomes e retorne o nome com a maior quantidade de caracteres.
Array de teste: ['José', 'Lucas', 'Nádia', 'Fernanda', 'Cairo', 'Joana']; .
Valor esperado no retorno da função: Fernanda . */

let names = ['José', 'Lucas', 'Nádia', 'Fernanda', 'Cairo', 'Joana']; 

function biggestName(){
    let result = '';
    for (let i = 0; i < names.length; i += 1) {
    if(names[i].length > result.length){
        result = names[i];
    }
    }
    
    return result;
    
}   
console.log(biggestName(names))