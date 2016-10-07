var express = require('express');
var bodyParser = require('body-parser');
var path = require('path');

var app = express();

//middleware
app.use(express.static('public'));
app.use(bodyParser.urlencoded({extended: true}));

//help make sure stuff works
app.use(function(req, res, next){
  console.log('Got a request!');
  next();
});

app.get('/', function(req, res){
  console.log('Received a request at', new Date());
  // __dirname is the folder this file lives in
  var filename = path.join(__dirname, 'Public/views/index.html');
  console.log('filename:', filename);
  res.sendFile(filename);
});

//set what port it listens too
app.listen(3000);
