const express = require('express');
const bodyParser = require('body-parser');
const session = require('express-session');
const cookieParser = require('cookie-parser');

const Key = require('./config/default');

const app = express();
const port = 8080;

//connect mongose
const connectDB = require('./config/connectDB');
connectDB();

app.set('view engine', 'pug')

//cookie
app.use(cookieParser(Key.sessions.secret));
//sessionID
app.use(session({
    secret: Key.sessions.secret,
    resave: false,
    saveUninitialized: true,
    cookie: { secure: true }
}));

// parse application/x-www-form-urlencoded
app.use(bodyParser.urlencoded({ extended: false }))
// parse application/json
app.use(bodyParser.json())

//routers
const homeRouter = require('./routers/home.route');
const bookRouter = require('./routers/book.route');

app.use('/admin', homeRouter);
app.use('/api', bookRouter);

app.listen(port, () => {
    console.log('Server connect with port: ', port);
})