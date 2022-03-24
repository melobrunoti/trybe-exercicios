const calc = (a, b, c) => {
    return new Promise((resolve, reject) => {
        if (typeof a !== 'number' || typeof b !== 'number' || typeof c !== 'number')
        reject('Informe apenas números');

        
        const result = ((a + b) * c);

        if (result < 50){
            return reject('Valor muito baixo')
        }
        resolve(result)
    });
}

calc(4, 40, 10)
  .then(resolve => console.log(`sucesso: ${resolve}`))
  .catch(err => console.log(`erro: ${err}`));


calc(1, 2, 3)
.then(resolve => console.log(`sucesso: ${resolve}`))
.catch(err => console.log(`erro: ${err}`));


calc(4, 40, 'a')
  .then(resolve => console.log(`sucesso: ${resolve}`))
  .catch(err => console.log(`erro: ${err}`));

