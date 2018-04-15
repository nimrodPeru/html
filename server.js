

var express = require("express");
var app = express();
var port = process.env.PORT || 3000;

// set the view engine to ejs
app.set('view engine', 'ejs');

app.get("/",function(req,res){
    res.render("index.ejs")
});

app.set('view engine','ejs')
app.listen(port);

