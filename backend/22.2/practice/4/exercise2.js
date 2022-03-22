const fs = require('fs').promises;

async function getSimpson(id) {
    const simpsons = await fs.readFile('./simpsons.json','utf-8')
    .then((data) => JSON.parse(data))
    
    const chosenSimpson = simpsons.find((simpson) => simpson.id === id)

    if(!chosenSimpson) {
        throw new error('id nao encontrado')
    }
    console.log(chosenSimpson)
    }

getSimpson('3');