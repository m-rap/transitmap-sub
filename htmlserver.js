var express = require('express');
var app = express();
var http = require('http').Server(app);

app.use('/', express.static(__dirname));

//app.get('/', function(req, res){
//  res.send('<h1>Hello world</h1>');
//});

http.listen(3000, function(){
  console.log('listening on *:3000');
});
