const express=require('express');
const knex = require('../database');

const router=express.Router();
router.put('/rating/:starnumber/:id/:rating',(req,res)=>{
   const star=req.params.starnumber;
   const id=req.params.id;
   const rating=req.params.rating;
   if(star==1)
   {
    knex('rating')
    .where('id',id)
    .update({
        onestar:rating
    })
    .then(()=>{
        res.send({response:'rating successfully updated in database'});
    }); 
   }

   if(star==2)
   {
    knex('rating')
    .where('id',id)
    .update({
        twostar:rating
    })
    .then(()=>{
        res.send({response:'rating successfully updated in database'});
    }); 
   }

   if(star==3)
   {
    knex('rating')
    .where('id',id)
    .update({
        threestar:rating
    })
    .then(()=>{
        res.send({response:'rating successfully updated in database'});
    }); 
   }

   if(star==4)
   {
    knex('rating')
    .where('id',id)
    .update({
        fourstar:rating
    })
    .then(()=>{
        res.send({response:'rating successfully updated in database'});
    }); 
   }

   if(star==5)
   {
    knex('rating')
    .where('id',id)
    .update({
        fivestar:rating
    })
    .then(()=>{
        res.send({response:'rating successfully updated in database'});
    }); 
   }
})
module.exports=router;

