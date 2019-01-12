let express = require("express");
let app = express();
app.get('/testing_static_express', (req, res, next) => {
    res.end("Testing express.static");
    console.log(express.static("public"));
});
app.listen(3000, () => console.log("listening on port 3000"));
