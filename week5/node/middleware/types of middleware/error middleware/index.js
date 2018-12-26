let express = require("express");
let app = express();
let error=require('./error');
app.get("/error", function (req, res,next) {
    try{
        throw new Error('error'); //this error will be handled by express
    }
    catch(err){
   next(err);
    }
  });
  app.use(error);

app.listen(3000, () => console.log("listening on port 3000...."));

/*
[nodemon] starting `node index index.js`
listening on port 3000....

*/