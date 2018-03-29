const path = require('path');
var express = require('express');
var fs = require('fs');
var serveIndex = require('serve-index');

var app = express();
var data = path.join(__dirname, "data");

app.use('/', express.static(__dirname));
app.use('/data', serveIndex(data));

var subDir = path.join(__dirname, 'data/sub');
app.get('/getall', function(req, res) {
  fs.readdir(subDir, function(err, items) {
    var resObj = [];
    var resStr = "";
    for (var i = 0; i < items.length; i++) {
      if (items[i].indexOf("-paths") == -1) {
        var line1Str = fs.readFileSync(path.join(subDir, items[i]));
        var line1 = JSON.parse(line1Str);
        var pathsExist = false, isOld = false;
        for (var j = 0; j < items.length; j++) {
          if (i == j || items[j].indexOf("-paths") == -1) continue;
          
          var line2Name = (' ' + items[j]).slice(1).replace('-paths.json', '');
          
          if (line2Name === line1.nama) {
            pathsExist = true;
            break;
          }
        }
        
        console.log("path exists " + pathsExist);
        if (pathsExist) {
          var line2 = require(path.join(subDir, line1.nama + '-paths.json'));
          if (line2 instanceof Array &&
              line2.length > 1 &&
              typeof line2.timestamp != "undefined" &&
              line2.timestamp < line1.timestamp) {
            console.log(line1.nama + " is old (" + line2.timestamp + "<" + line1.timestamp + ")");
            isOld = true;
          }
        }
        
        if (!pathsExist || (pathsExist && isOld)) {
          resObj.push(line1);
        }
      }
    }
    
    res.type("json");
    resStr = JSON.stringify(resObj);
    console.log(resStr.length);
    res.send(resStr);
  });
});

app.get("/getpaths", function(req, res) {
  fs.readdir(subDir, function(err, items) {
    var resObj = [];
    for (var i = 0; i < items.length; i++) {
      if (items[i].indexOf("-paths") != -1) {
        var line = require(path.join(subDir, items[i]));
        resObj = resObj.concat(line);
      }
    }
    res.send(JSON.stringify(resObj));
  });
});

app.post('/put', function(req, res) {
  var dataStr = "";
  req.on('data', function(data) {
    dataStr += data.toString();
  });
  req.on('end', function() {
    var routes = JSON.parse(dataStr);
    if (routes.length === 0)
      return;
    
    for (var i in routes) {
      console.log("writing file " + routes[i].nama + '-paths.json');
      fs.writeFile(path.join(subDir, routes[i].nama + '-paths.json'), JSON.stringify(routes[i]), function(err) {
        if (err) console.log(err.stack);
      });
    }
    
    //var routesByName = [];
    //var i, j;
    //for (i in routes) {
    //  if (routesByName.length === 0) {
    //    routesByName.push([routes[i]]);
    //    continue;
    //  }
    //  var found = false;
    //  for (j in routesByName) {
    //    if (routesByName[j][0].nama != routes[i].nama)
    //      continue;
    //    routesByName[j].push(routes[i]);
    //    found = true;
    //    break;
    //  }
    //  if (!found)
    //    routesByName.push([routes[i]]);
    //}
    //for (i in routesByName) {
    //  console.log("writing file " + routesByName[i][0].nama + '-paths.json');
    //  fs.writeFile(path.join(subDir, routesByName[i][0].nama + '-paths.json'), JSON.stringify(routesByName[i]), function(err) {
    //    if (err) console.log(err.stack);
    //  });
    //}
  });
});

app.listen(3000, function() {
  console.log('Example app listening on port 3000!');
});