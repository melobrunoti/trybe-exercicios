
const AuthorServices = require('../services/AuthorServices')
const AuthorModels = require('../models/AuthorModels')

const getAll = async (_req, res) => {
  const authors = await AuthorServices.getAll();

  res.status(200).json(authors);
};

const getAll = async (_req, res) => {
  const authors = await AuthorModels.create();

  res.status(200).json(authors);
};



module.exports = {
  getAll,
}