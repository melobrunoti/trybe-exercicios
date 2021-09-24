const oddsAndEvens = [13, 3, 4, 10, 7, 2];

let sort = oddsAndEvens.sort(function(a, b){
  return a - b
})


console.log(`OS numeros ${sort} estao ordenados de forma crescente`); // será necessário alterar essa linha 😉
