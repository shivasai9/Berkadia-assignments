const express = require('express');

const moviedatatable = require('../models/movie-data model');

const router = express.Router();
var moviedata = [];
var tname;
router.get('/:theatrename', (req, response) => {
  tname = req.params.theatrename;
  moviedatatable.findAll({ where: { theatrename: tname } }).then((res) => {
    moviedata = res;
    response.send(moviedata);
  })
})

module.exports = router;