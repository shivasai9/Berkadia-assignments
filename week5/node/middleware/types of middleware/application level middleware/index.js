const express=require('express');
const app=express();
app.use('/',(req,res)=>{
    
    res.send('This is applicationlevel middleware');
    });
    app.listen(3000,()=>console.log('listening on port 3000....'));
    /*
     [nodemon] restarting due to changes...
     [nodemon] starting `node index index.js`
     listening on port 3000....
     */