var express = require('express');
var app = express();
var bodyParser = require('body-parser');
// login demo@demo.com
// senha 123
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

var api = {};
api.login = require('./modules/login/route');

app.use('/login', api.login);


app.listen(3011, function(){
    console.log('Started in port 3011')
})