const express = require('express');

const seatstable = require('../models/seats-model');

const router = express.Router();
var theatre;
var showsdata = [];
router.get('/:theatrename', (req, resp) => {
  theatre = req.params.theatrename;
  seatstable.findAll({ where: { theatrename: theatre } }).then((res) => {
    showsdata = res;
    resp.send(showsdata);
  })
})

module.exports = router;