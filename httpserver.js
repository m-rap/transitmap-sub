const path = require('path');
var express = require('express');
var fs = require('fs');
var serveIndex = require('serve-index');

var app = express();
//var http = require('http').Server(app);
var data = path.join(__dirname, "data");

app.use('/', express.static(__dirname));
app.use('/data', serveIndex(data));

app.get('/getall', function(req, res) {
  var subDir = path.join(__dirname, 'data/sub');
  fs.readdir(subDir, function(err, items) {
    var resStr = "[\n";
    for (var i in items) {
      if (items[i].indexOf("-paths") !== -1) {
        var line1Str = fs.readFileSync(path.join(subDir, items[i]));
        var line1 = JSON.parse(line1Str);
        var pathsExist = false, isOld = false;
        for (var j in items) {
          if (i == j || items[j].indexOf("-paths") === -1) continue;
          
          var line2Name = (' ' + original_string).slice(1).replace('-paths.json');
          if (line2Name === line1.nama) {
            pathsExist = true;
            break;
          }
        }
        
        if (pathsExist) {
          var line2 = require(path.join(subDir, line1.nama + '-paths.json'));
          if (typeof line2.timestamp != "undefined" && line2.timestamp < line1.timestamp)
            isOld = true;
        }
        
        if (pathsExist && isOld)
          resStr += line1Str;
      }
      
      resStr += fs.readFileSync(path.join(subDir, items[i]));
      if (i < items.length - 1)
        resStr += ",\n";
    }
    resStr += "]";
    
    res.type("json");
    res.send(resStr);
  });
});

//app.get('/', function(req, res){
//  res.send('<h1>Hello world</h1>');
//});

app.listen(3000, function() {
  console.log('Example app listening on port 3000!');
});