const express = require('express');

const moviedatatable = require('./models/movie-data model');
const seatstable = require('./models/seats-model')
const theatreNameRoute = require('./routes/theatrename');
const showsRoute = require('./routes/shows');
const ticketbookingRoute = require('./routes/booktickets');
const movienamebytnameRoute = require('./routes/moviename');
const app = express();

app.use(function(req, res, next) {
  res.header('Access-Control-Allow-Origin', "*");
  res.header('Access-Control-Allow-Methods','GET,PUT,POST,DELETE');
  res.header('Access-Control-Allow-Headers', 'Content-Type');
  next();
})

app.use('/theatrename',theatreNameRoute);
app.use('/shows',showsRoute);
app.use('/seats',showsRoute);
app.use('/booktickets',ticketbookingRoute);
app.use('/moviename',movienamebytnameRoute);

moviedatatable
  .sync()
  .then(result => {
    console.log('result result'+result);
   
  })
  .catch(err => {
    console.log(err);
  });

  seatstable
  .sync()
  .then(result => {
    console.log('result result'+result);
    
  })
  .catch(err => {
    console.log(err);
  });
 
  app.listen(3000);