const fs = require('fs').promises;

/* fs.readFile('./simpsons.json','utf-8')
    .then((fileContent)=> {
        return JSON.parse(fileContent)
    })
    .then((simpsons) => {
        console.log(simpsons)
    }) */
   /*  .then((strings)=> {
        strings.forEach((string) => console.log(string))
    }) */
    
async function main() {
    const json = await fs.readFile('./simpsons.json','utf-8')
    const simpsons = JSON.parse(json)

    simpsons.forEach(({id, name}) => console.log(`${id} - ${name}`))
}

main();