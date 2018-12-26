/*
 an example for third party middleware is morgan
 it logs the http requests on the console.
*/

const morgan=require('morgan');
const express=require('express');
const app=express();
app.use(morgan('tiny'));
app.get('/',(req,res)=>{
    
    res.send('Example for thirdparty middleware');
    });
    app.listen(3000,()=>console.log('listening on port 3000....'));

    /*
      [nodemon] restarting due to changes...
      [nodemon] starting `node index index.js`
      listening on port 3000....
      GET / 200 33 - 8.885 ms
    */