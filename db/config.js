module.exports = db;require('dotenv').config()

const express = require('express'),
	  app = express(),
	  port = process.env.PORT || 3000,
	  bodyParser = require