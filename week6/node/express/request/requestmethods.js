const express=require('express');
const app= new express();

app.use('/college/:id', function (req, res) {
    console.log(req.baseUrl); 
    console.log(req.ip);
    console.log(req.xhr);
    console.log(req.fresh);
    console.log(req.hostname);
    console.log(req.method);
    console.log(req.ips);
    console.log(req.originalUrl);
    console.log(req.params);
    console.log(req.path);
    console.log(req.protocol);
    console.log(req.query.q);
    console.log(req.secure);
    console.log(req.stale);
    res.send("tesing all request functions");
  }) 

app.listen(3000);

/* output

[nodemon] starting `node requestmethods.js`
/college/1
::1
false
false
localhost
GET
[]
/college/1?q=shiva
{ id: '1' }
/
http
shiva
false
true
*/