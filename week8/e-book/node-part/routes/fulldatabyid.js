const express = require('express');
const knex = require('../database');

const router = express.Router();
router.get('/fullbookdata/:id', (req, res) => {
    // knex
    // .select('*')
    // .from('books')
    // .fullOuterJoin('rating','books.id','rating.id')
    // .then((fullDetails)=>{
    //     res.send(fullDetails);
    // })
    // knex.raw('select * from books fullOuterJoin rating on books.id=rating.id where books.id=1 ')
    // .then((result)=>{
    //     res.send(result);
    // })

    knex.raw('select * from books left Outer Join rating on books.id=rating.id where books.id=? union select * from books right Outer Join rating on books.id=rating.id where books.id=?', [req.params.id, req.params.id])
        .then((result) => {
            res.send(result[0]);
        })
})

module.exports = router;