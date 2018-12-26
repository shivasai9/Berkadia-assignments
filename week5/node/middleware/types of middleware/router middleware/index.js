var express=require('express');
var app=new express();
var router = express.Router();

router.get('/', function (req, res) {
  res.send('Router middleware');
});
app.listen(3000,()=>console.log('listening on port 3000'));
app.use('/', router);

/*
console o/p

[nodemon] starting `node index index.js`
listening on port 3000
*/
