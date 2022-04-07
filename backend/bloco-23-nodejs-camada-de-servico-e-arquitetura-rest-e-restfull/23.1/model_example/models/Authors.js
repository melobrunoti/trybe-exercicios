    // models/Author.js

    const connection = require('./connection');

    // Busca todas as pessoas autoras do banco.
    const getNewAuthor = ({ id, firstName, middleName, lastName }) => {
      const fullName = [firstName, middleName, lastName]
          .filter(Boolean)
          .join(' ');
      
      return {
          id,
          firstName,
          middleName,
          lastName,
          fullName,
      };
     };

    const serialize = (authorData) => ({
        id: authorData.id,
        firstName: authorData.first_name,
        middleName: authorData.middle_name,
        lastName: authorData.last_name,
    });

    const getAll = async () => {
        const [authors] = await connection.execute(
            'SELECT id, first_name, middle_name, last_name FROM model_example.authors;',
        );
        return authors.map(serialize);
    };

    const getById = async (id) => {
        const [author] = await connection.execute(
            'SELECT id, first_name, middle_name, last_name FROM model_example.authors WHERE id = ?', [id]
        )
        
                if (author.length === 0) return null;

        const { firstName, middleName, lastName } = author.map(serialize)[0];
        return getNewAuthor({
            id,
            firstName,
            middleName,
            lastName,
        });
        

    }

    const isValid = (firstName, middleName, lastName) => {
        if (!firstName || typeof firstName !== 'string') return false;
        if (!lastName || typeof lastName !== 'string') return false;
        if (middleName && typeof middleName !== 'string') return false;

        return true;
    };

    const create = async (firstName, middleName, lastName) => connection.execute(
        'INSERT INTO model_example.authors (first_name, middle_name, last_name) VALUES (?,?,?)',
        [firstName, middleName, lastName],
    );

    module.exports = {
        getAll,
        getById,
        create,
        isValid
    };