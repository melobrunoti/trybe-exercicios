const connection = require('./connection');



const getAll = async () => {
  const [authors] = await connection.execute(
    'SELECT id, first_name, middle_name, last_name FROM model_example.authors;'
  );
  
  return authors;
};

const create = async ({first_name, middle_name, last_name}) => {
  const [author] = await connection.execute(
    'INSERT INTO model_example.authors (first_name, middle_name, last_name) VALUES (?, ?, ?)',
    [first_name, middle_name, last_name]
  );
  return { id: author.insertId, first_name, middle_name, last_name };
}

module.exports = {
  getAll,
  create,
};