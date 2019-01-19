const express = require('express');
const app = new express();

const signInRoute = require('./routes/signin');
const signUpRoute = require('./routes/signup');
const getQuestionRoute = require('./routes/getQuestions');

app.use(express.json());

app.use(function (req, res, next) {
    res.header('Access-Control-Allow-Origin', "*");
    res.header('Access-Control-Allow-Methods', 'GET,PUT,POST,DELETE');
    res.header('Access-Control-Allow-Headers', 'Content-Type');
    next();
})

app.use(signInRoute);
app.use(signUpRoute);
app.use(getQuestionRoute);

app.listen(3000, () => { console.log("listening at port 3000......") })