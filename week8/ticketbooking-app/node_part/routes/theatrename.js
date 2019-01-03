const express = require('express');

const moviedatatable = require('../models/movie-data model');

const router = express.Router();
var moviedata = [];
var pin;
router.get('/pincode/:pincode', (req, response) => {
  pin = req.params.pincode;
  moviedatatable.findAll({ where: { pincode: pin } }).then((res) => {
    moviedata = res;
    response.send(moviedata);
  })
})

router.get('/:moviename', (req, response) => {
  movie = req.params.moviename;
  moviedatatable.findAll({ where: { moviename: movie } }).then((res) => {
    moviedata = res;
    response.send(moviedata);
  })
})

module.exports = router;