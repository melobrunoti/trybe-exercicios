// hello-msc/index.js

const express = require('express');
const bodyParser = require('body-parser');

const AuthorController = require('./controllers/AuthorController')

const app = express();

app.use(bodyParser.json());

app.get('/authors', AuthorController.getAll)

const PORT = 3000;

app.listen(PORT, () => {
  console.log(`Ouvindo a porta ${PORT}`);
});