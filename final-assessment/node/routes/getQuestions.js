const express=require('express');
const knex = require('../database');

const router=express.Router();
router.get('/questions',(req,res)=>{
    knex()
    .select()
    .from('questions')
    .then((question)=>{
        res.send(question);
    })
})

module.exports=router;
