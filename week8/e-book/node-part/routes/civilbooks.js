const express=require('express');
const knex = require('../database');

const router=express.Router();
router.get('/books/civil',(req,res)=>{
    knex()
    .select()
    .from('books')
    .where('dept','civil')
    .then((civilBooks)=>{
        res.send(civilBooks);
    })
})

module.exports=router;