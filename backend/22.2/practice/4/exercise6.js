const fs = require('fs').promises;

 async function replaceNelson() {
   const simpsonsFamily = await fs
     .readFile('./simpsonsFamily.json', 'utf-8')
     .then((fileContent) => JSON.parse(fileContent));

   const simpsonsWithoutNelson = simpsonsFamily.filter(simpson => simpson.id !== '8');

    simpsonsWithoutNelson.push({ id: '8', name: 'Maggie Simpson' });

await fs.writeFile('./simpsonsFamily.json', JSON.stringify(simpsonsWithoutNelson));
console.log(simpsonsWithoutNelson)
 }

 replaceNelson()
