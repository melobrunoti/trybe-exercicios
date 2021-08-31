/* 1 - Crie uma função que receba uma string e retorne true se for um palíndromo , ou false , se não for.
Exemplo de palíndromo: arara .
verificaPalindrome('arara') ;
Retorno esperado: true
verificaPalindrome('desenvolvimento') ;
Retorno esperado: false */

let isPallindrome = true;

function verificaPalindrome (pallindrome) {
    let reverse = pallindrome.split('').reverse().join('');
    if(reverse == pallindrome){
        return isPallindrome = true;
    }
    else{
        return isPallindrome = false;
    }   
}
console.log(verificaPalindrome('arara'))