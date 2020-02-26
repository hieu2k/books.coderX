const express = require('express');
const bodyParser = require('body-parser')

const app = express();
const port = 3000;

app.set('view engine', 'pug')

// parse application/x-www-form-urlencoded
app.use(bodyParser.urlencoded({ extended: false }))
// parse application/json
app.use(bodyParser.json())

//routers
const homeRouter = require('./routers/home.route');

app.use('/', homeRouter);

app.listen(port, () => {
    console.log('Server connect with port: ', port);
})