
const express = require('express');
const knex = require('../database');
const router = express.Router();

router.get('/books/ece', (req, res) => {
  knex.select()
    .from('books').
    where('dept','ece')
    .then((books) => {
      res.send(books);
    })
})

module.exports = router;