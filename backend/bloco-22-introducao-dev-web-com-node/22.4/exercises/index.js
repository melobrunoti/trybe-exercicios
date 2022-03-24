const express = require('express')

const bodyParser = require('body-parser');

const rescue = require('express-rescue');

const simpsonsUtils = require('./fs-util');


const app = express();

app.use(bodyParser.json());

app.listen(3000, () => console.log('ouvindo na porta 3000!'));

app.get('/ping',(req,res) => res.status(200).json({"message": "pong"}));

app.post('/hello', (req,res) => {
    const { name } = req.body
    res.status(200).json({"message": `Hello, ${name}`})
})

app.post('/greetings', (req, res) => {
    const { name, age } = req.body   
    if(+age <= 17){
        return res.status(401).json({"message": "unautorized"})
    }
    res.status(200).json({"message": `Hello, ${name}`})
})

app.put('/users/:name/":age', (req, res) => {
    const {name, age} = req.params
    res.status(200).json({ "message": `Seu nome e ${name} e você tem ${age} anos de idade` })
})

// simpsons

app.get('/simpsons', rescue(async (req, res) => {

    const simpsons = await simpsonsUtils.getSimpsons();
    res.status(200).json(simpsons);
}));;

app.get('/simpsons/:id', rescue(async (req, res) => {
    const {id} = req.params
    const simpsons = await simpsonsUtils.getSimpsons();
    const simpson = simpsons.find((s) => s.id === id)

    res.status(200).json(simpson);
}));;

app.post('/simpsons', rescue(async ( req, res) => {
    const {id, name} = req.body
    const simpsons = await simpsonsUtils.getSimpsons();

    if(simpsons.some((s) => s.id === id)){
        return res.status(409).json({"message": "id already exists"})
    }

    simpsons.push({id, name});

    await simpsonsUtils.setSimpsons(simpsons)

    res.status(204).end();
}))