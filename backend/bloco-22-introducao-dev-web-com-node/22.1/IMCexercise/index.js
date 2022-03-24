const calc = require('./imc');
const readline = require('readline-sync')

const peso = readline.questionInt("Qual seu peso(em kilos)?")

const altura = readline.questionInt("Qual sua altura(em centimetros)?")


console.log(`Teu imc eh ${calc(peso, altura)}.`);