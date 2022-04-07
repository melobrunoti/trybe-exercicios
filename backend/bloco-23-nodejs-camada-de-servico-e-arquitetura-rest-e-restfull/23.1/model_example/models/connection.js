    const mysql = require('mysql2/promise');

    const connection = mysql.createPool({
        host: 'localhost',
        user: 'melo',
        password: 'senhateste',
        database: 'model_example' });

    module.exports = connection;