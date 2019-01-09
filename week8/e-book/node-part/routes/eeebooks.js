const express=require('express');
const knex = require('../database');

const router=express.Router();
router.get('/books/eee',(req,res)=>{
    knex()
    .select()
    .from('books')
    .where('dept','eee')
    .then((eeeBooks)=>{
        res.send(eeeBooks);
    })
})

module.exports=router;