const express = require('express')
const bodyParser = require('body-parser');

const app = express();

app.use(bodyParser.json());

app.listen(3000, () => console.log('ouvindo na porta 3000!'));

app.get('/ping',(req,res) => res.status(200).json({"message": "pong"}));

app.post('/hello', (req,res) => {
    const { name } = req.body
    res.status(200).json({"message": `Hello, ${name}`})
})

