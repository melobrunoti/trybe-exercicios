/* 7 - Crie uma função que receba uma string word e outra string ending . Verifique se a string ending é o final da string word . Considere que a string ending sempre será menor que a string word .
Valor de teste: 'trybe' e 'be'
Valor esperado no retorno da função: true
verificaFimPalavra('trybe', 'be') ;
Retorno esperado: true
verificaFimPalavra('joaofernando', 'fernan') ;
Retorno esperado: false
 */

let word = 'trybe'
let ending = 'be'


function verificaFimPalavra(){
    let auxWord = word.split('').reverse().join('')
    let auxEnding = ending.split('').reverse().join('')
    
    auxWord = auxWord.slice(0,ending.length)

    if(auxWord === auxEnding){
        return true
    }
    else{
        return false
    }
}

console.log(verificaFimPalavra(word,ending))