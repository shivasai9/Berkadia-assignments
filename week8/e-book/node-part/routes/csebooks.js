const express=require('express');
const knex = require('../database');

const router=express.Router();
router.get('/books/cse',(req,res)=>{
    knex()
    .select()
    .from('books')
    .where('dept','cse')
    .then((cseBooks)=>{
        res.send(cseBooks);
    })
})

module.exports=router;