const Pool = require('pg').Pool
require('dotenv').config()

const pool = new Pool({
    user: process.env.USER,
    password: process.env.PASSWORD,
    connectionString: process.env.POSTGRES_URL + "?sslmode=require",
    port: process.env.DBPORT,
    database: "todoapp_nuiy_ln4s"
});
module.exports = pool
