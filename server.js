

var express = require("express");
var app = express();
var port = process.env.PORT || 3000;
/**
app.get("/",function(req,res){
    res.send("welcome")
});

app.listen(port);
 */

// set the view engine to ejs
app.set('view engine', 'ejs');

// make express look in the public directory for assets (css/js/img)
app.use(express.static(__dirname + '/public'));

// set the home page route
app.get('/', function(req, res) {

    // ejs render automatically looks in the views folder
    res.render('index');
});

app.listen(port, function() {
    console.log('Our app is running on http://localhost:' + port);
});


