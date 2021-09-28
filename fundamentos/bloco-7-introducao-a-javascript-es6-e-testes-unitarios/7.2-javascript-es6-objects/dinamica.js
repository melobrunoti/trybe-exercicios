
/* const  getEvenNumbers = (array) => { 
   let aux = []
   for (i in array )
   { array[i] % 2 === 0 ? aux.push(array[i]) : null; }
   return aux;
   }
   
console.log(getEvenNumbers([5,8,10,4,2,65,23,1])) */
// Desenvolva uma função que receba um array de objetos com cidades e estados e retorne um array contendo o nome da cidade e do estado concatenados.

// Ex:
const citiesAndStates = [
  {
    city: 'Belo Horizonte',
    state: 'Minas Gerais',
  },
  {
    city: 'Salvador',
    state: 'Bahia',
  },
  {
    city: 'Porto Alegre',
    state: 'Rio Grande do Sul',
  },
  {
    city: 'Manaus',
    state: 'Amazonas',
  }
]

// Resultado esperado
//['Belo Horizonte - Minas Gerais', 'Salvador - Bahia', 'Porto Alegre - Rio Grande do Sul', 'Manaus - Amazonas']



/* let obj = Object.values(citiesAndStates) */


function test (array){
  aux = [];
  for (let index = 0; index < array.length; index++) {
    aux.push(array[index].city) + aux.push(array[index].state)
    
  }
  return aux
}
console.log(test(citiesAndStates))