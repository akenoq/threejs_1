"use strict";


let express = require("express");
const app = express();


app.get('/', function(req, res) {

    app.use(express.static(__dirname + "/static"));

    res.sendfile("static/index.html");

});

let port = process.env.PORT || 4040;

app.listen(port, () => {
    console.log("Server works on port " + port);
});