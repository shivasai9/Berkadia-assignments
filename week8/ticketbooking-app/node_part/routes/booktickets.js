const express = require('express');

const seatstable = require('../models/seats-model');

const router = express.Router();
var theatre;
var updateddata = [];
router.get('/:theatre/:number', (req, response) => {
  theatre = req.params.theatre;
  ticketsbooked = req.params.number;
  seatstable.findAll({ where: { theatrename: theatre } }).then((res) => {
    res[0].availableseats = res[0].availableseats - ticketsbooked;
    res[0].save();
    updateddata = res;
    response.send(updateddata);
  })
})

module.exports = router;