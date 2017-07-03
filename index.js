require('dotenv').config()

const express = require('express');
const bodyParser = require('body-parser');
const mustache = require('mustache-express');
const session = require('express-session');
const cookieParser = require('cookie-parser');
const passport = require('passport');

const app = express();
const PORT = process.env.PORT || 3000;

console.log(process.env.secret);

app.engine('html', mustache());
app.set('view engine', 'html');
app.set('views', __dirname + '/views');
app.use(express.static(__dirname + '/public'));

// Important: mount express middleware BEFORE passport
app.use(session({
    secret: 'keyboard cat',
    resave: true,
    saveUninitialized: true
}));

//const passport = require('passport');
const auth = require('./services/auth.js');
app.use(auth.passportInstance);
app.use(auth.passportSession);
//==================================================================

app.use(bodyParser.urlencoded({ extended: true }));

app.use(cookieParser());

app.use('/users', require('./controllers/users_controllers'));
app.use('/movies', auth.restrict, require('./controllers/movies_controllers'))




app.get('/', (req, res) => {
    res.render('index');
});

app.listen(PORT, () => console.log('Server listening on port', PORT));
