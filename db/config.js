module.exports = db;require('dotenv').config()

const express = require('express'),
	  app = express(),
var db = pgp(process.env.DATABASE_URL || 'postgres://sharonmoskal@localhost:5432/movie_suggestions');
	  bodyParser = require