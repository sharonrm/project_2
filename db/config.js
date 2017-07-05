require('dotenv').config();
const pgp = require('pg-promise')();


var db = pgp(process.env.DATABASE_URL || 'postgres://sharonmoskal@localhost:5432/movie_suggestions');

module.exports = db;