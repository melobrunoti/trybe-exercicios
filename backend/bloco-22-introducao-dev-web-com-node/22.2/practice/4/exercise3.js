const fs = require('fs').promises;

async function getSimpson() {
    const simpsons = await fs.readFile('./simpsons.json','utf-8')
    .then((data) => JSON.parse(data))
    
    const filteredSimpsons = simpsons.filter(({id}) => id !== '10' || id !== '6')


    await fs.writeFile('./simpsons.json', JSON.stringify(filteredSimpsons))
    }

getSimpson();