var express = require('express');
var app = express();
var logger = require('morgan');
var bodyParser = require('body-parser');
var cors = require('cors');

app.use(bodyParser.urlencoded({extended: false}));
app.use(bodyParser.json());
app.use(logger('dev'));
app.use(cors());

app.post('/usuario', function(req, res){

    console.log(req.body);
    var response = "g";
    res.json(response);

});

app.listen(8100);
console.log('App listening in port 8100');