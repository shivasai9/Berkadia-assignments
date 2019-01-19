

const express=require('express');
const knex = require('../database');

const router=express.Router();
router.get('/get/:password/:name',(req,res)=>{
    knex()
    .select()
    .from('login-details')
    .where({'password':req.params.password,'name':req.params.name})
   // .andWhere('name',req.params.name)
    .then((result)=>{
        if(result.length==0)
        res.send(false);
        if(result.length>0)
        {
            res.send(true);
        }
        
    })
})

 module.exports=router;

















