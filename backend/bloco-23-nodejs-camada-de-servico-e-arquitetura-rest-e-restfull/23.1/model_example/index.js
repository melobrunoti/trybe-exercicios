    // index.js
    const bodyParser = require('body-parser');
    const express = require('express');

    const { getAll, getById, isValid, create } = require('./models/Authors')

    const app = express();

    app.use(bodyParser.json());

    const PORT = process.env.PORT || 3000;

    app.get('/authors', async(req, res) => {
        const authors = await getAll();

        res.status(200).json(authors);
    })

    app.get('/authors/:id', async(req, res) => {
        const { id } = req.params;
        const author = await getById(id);

        res.status(200).json(author);
    })

    app.listen(PORT, () => {
        console.log(`Ouvindo a porta ${PORT}`);
    });

    app.post('/authors', async (req, res) => {
        const { first_name, middle_name, last_name } = req.body;

        if (!isValid(first_name, middle_name, last_name)) {
            return res.status(400).json({ message: 'Dados inválidos' });
        }

        await create(first_name, middle_name, last_name);

        res.status(201).json({ message: 'Autor criado com sucesso! '});
    });