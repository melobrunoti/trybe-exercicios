// Faça uma lista com as suas frutas favoritas
const specialFruit = ['morango', 'maracuja', 'banana'];

// Faça uma lista de complementos que você gostaria de adicionar
const additionalItens = ['leite-conensado', 'chocoball', 'cobertura'];

const fruitSalad = (fruit, additional) => {
  return  [...fruit, ...additional]
};

console.log(fruitSalad(specialFruit, additionalItens));