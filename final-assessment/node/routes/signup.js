



const express = require('express');
const knex = require('../database');

const router = express.Router();
router.post('/post', (req, res) => {
  knex('login-details')
    .insert({
      name: req.body.name,
      password: req.body.password
    })
    .then(() => {
      res.send({ response: 'successfully inserted' });
    })
})

module.exports = router;



// app.post('/books/insert', function(req, res) {
//     knex('rating')
//         .insert({
//           id:'3',
//           bookname:"add book",
//           onestar:'6'

//         })
//         .then(()=>{
//         res.send('successfully inserted');
//         })
  //})

