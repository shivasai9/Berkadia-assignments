let express = require("express");
let app = express();
app.get('/testing_router', (req, res, next) => {
    res.end("Testing express.router");
    console.log(express.Router());
});
app.listen(3000, () => console.log("listening on port 3000"));

/*
  [nodemon] starting `node router.js`
listening on port 3000

*/