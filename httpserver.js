const path = require('path');
var express = require('express');
var app = express();
var http = require('http').Server(app);
var serveIndex = require('serve-index');
var data = path.join(__dirname, "data");

console.log(express.static(__dirname));
app.use('/', express.static(__dirname));
app.use('/data', serveIndex(data));

//app.get('/', function(req, res){
//  res.send('<h1>Hello world</h1>');
//});

http.listen(3000, function(){
  console.log('listening on *:3000');
});
