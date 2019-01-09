const express = require('express');
const app = new express();

const getEceBooksRoute = require('./routes/ecebooks');
const getCseBooksRoute = require('./routes/csebooks');
const getCivilBooksRoute = require('./routes/civilbooks');
const geteeeBooksRoute = require('./routes/eeebooks');
const ratingRoute = require('./routes/rating');
const fullDetailsRoute = require('./routes/fulldatabyid');

app.use(express.json());
app.use(function (req, res, next) {
  res.header('Access-Control-Allow-Origin', "*");
  res.header('Access-Control-Allow-Methods', 'GET,PUT,POST,DELETE');
  res.header('Access-Control-Allow-Headers', 'Content-Type');
  next();
})
app.use(getEceBooksRoute);
app.use(getCseBooksRoute);
app.use(geteeeBooksRoute);
app.use(getCivilBooksRoute);
app.use(ratingRoute);
app.use(fullDetailsRoute);

app.listen(3000, () => { console.log('listening at port 3000') });