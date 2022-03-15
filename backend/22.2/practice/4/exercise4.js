const fs = require('fs').promises;

async function simpsonsFamily() {
    const simpsons = await fs.readFile('./simpsons.json','utf-8')
    .then((fileContent) => JSON.parse(fileContent));
    
    const simpsonsFamily = simpsons.filter(simpson => ['1','2', '3', '4'].includes(simpson.id));


    await fs.writeFile('./simpsonsFamily.json', JSON.stringify(simpsonsFamily));
    }

    simpsonsFamily()