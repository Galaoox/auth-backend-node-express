const { createPool, Pool } = require('mysql');
const { promisify }  = require('util');

const pool = createPool({
    database: "instagramDb",
    host: "localhost",
    user: "root",
    password: "Gg258789",
});

pool.getConnection((error, connection) => {
    if (error) {
        console.log(error);
    } else {
        pool.releaseConnection(connection);
        console.log("DB IS CONNECTED")
    }
});

pool.query = promisify(pool.query) ;

module.exports = pool;