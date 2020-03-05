const express = require('express');
const bodyParser = require('body-parser');
const session = require('express-session');
const cookieParser = require('cookie-parser');
const cors = require('cors');


const Key = require('./config/default');

const app = express();
const port = 8080;

//connect mongose
const connectDB = require('./config/connectDB');
connectDB();

//routers
const authRouter = require('./routers/auth.route');
const bookRouter = require('./routers/book.route');
const adminRouter = require('./routers/admin.route');;
const userRouter = require('./routers/user.route');
const sessionRouter = require('./routers/session.route');

//middleware
const authMiddleware = require('./middleware/auth.middleware');
const sessionMiddleware = require('./middleware/session.middleware');

app.set('view engine', 'pug')

app.use(cors({
    origin: 'http://localhost:3000/', //Chan tat ca cac domain khac ngoai domain nay
    credentials: true //Để bật cookie HTTP qua CORS
}))

//cookie
app.use(cookieParser(Key.sessions.secret));

//sessionID
app.use(session({
    secret: Key.sessions.secret,
    resave: false,
    saveUninitialized: true,
    cookie: {
        secure: true,
        httpOnly: true,
        maxAge: 1000 * 60 * 60 * 24
    }
}));

// parse application/x-www-form-urlencoded
app.use(bodyParser.urlencoded({ extended: false }))
// parse application/json
app.use(bodyParser.json())

//static file
app.use(express.static('public'))


app.use('/admin', authRouter);
app.use('/admin', authMiddleware, adminRouter);
app.use('/api', bookRouter);
app.use('/api', userRouter);
app.use('/session', sessionMiddleware, sessionRouter);

app.listen(port, () => {
    console.log('Server connect with port: ', port);
})