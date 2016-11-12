var express = require("express");
var path = require("path");

var app = express();

app.use(express.static(path.join(__dirname, "public")));

app.use("/", function(request, response){
    response.sendFile(__dirname.concat("/index.html"));
})
.listen(8080);

console.log("server starts");