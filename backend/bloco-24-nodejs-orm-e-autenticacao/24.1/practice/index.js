const express = require('express');
const bodyParser = require('body-parser');
const booksController = require('./controllers/booksController');

const app = express();
const PORT = 3000;

app.use(bodyParser.json());

app.use('/books', booksController);

app.listen(PORT, () => console.log(`Ouvindo na porta ${PORT}!`));