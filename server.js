

var express = require("express");
var app = express();
var port = process.env.PORT || 3000;

app.get("/",function(req,res){
    res.render("index.ejs")
});

app.set('view engine','ejs')
app.listen(port);

