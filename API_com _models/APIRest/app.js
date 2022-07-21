const express = require('express');
const app = express();
const bodyParser = require("body-parser");
const cors = require("cors");
const gamesRouter = require('./routes/gamesRouter');
const usersRouter = require('./routes/usersRouter');
const authRouter = require('./routes/authRouter');
const middleware = require('./middlewares/authMiddleware');

app.use(cors());
app.use(bodyParser.urlencoded({extended:false}));//configuração padrao
app.use(bodyParser.json());

app.use('/games', gamesRouter);
app.use('/users',middleware.auth, usersRouter);
app.use('/auth',authRouter);



module.exports = app;