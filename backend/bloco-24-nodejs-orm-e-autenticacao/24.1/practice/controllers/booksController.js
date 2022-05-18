const express = require('express')
const { Book } = require('../models')
const router = express.Router();

router.get('/', async (req, res) => {

  try{
    console.log(Book)
    const books = await Book.findAll();
    return res.status(200).json(books);
  } catch (e) {
    console.log(e.message);
    res.status(500).json({ message: 'Unexpected error'})
  }
});

router.get('/:id', async (req, res) => {
  try{
    const { id } = req.params;
    const books = await Book.findByPk(id);
    return res.status(200).json(books);
  } catch (e) {
    console.log(e.message);
    res.status(500).json({ message: 'Unexpected error'})
  }
})

router.post('/', async (req, res) => {
  try{
    const { title, author, pageQuantity} = req.body;

    console.log(title, author, pageQuantity)
    const books = await Book.create({
      title,
      author,
      pageQuantity,
    }
    );
    return res.status(200).json(books);
  } catch (e) {
    console.log(e.message);
    res.status(500).json({ message: 'Unexpected error'})
  }
})

router.put('/:id', async (req, res) => {
  try{
    const { id } = req.params
    const { title, author, pageQuantity} = req.body;
    const book = await Book.update({
      title,
      author,
      pageQuantity,
    },
    { where: { id } }
    );
    return res.status(200).json(book);
    
  } catch (e) {
    console.log(e.message);
    res.status(500).json({ message: 'Unexpected error'})
  }
})

router.delete('/:id', async (req, res) => {
  try{
    const { id } = req.params
    const book = await Book.destroy({ where: { id } });
    return res.status(200).json(book);
    
  } catch (e) {
    console.log(e.message);
    res.status(500).json({ message: 'Unexpected error'})
  }
})

module.exports = router;