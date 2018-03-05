var data;

var fs = require('fs');
eval(fs.readFileSync('data/sub.js') + '');

initData();

var mkdirp = require('mkdirp');
mkdirp('data/sub', function(err) {
  if (err) console.log(err);
});

function locToJson(loc) {
  if (loc == null)
    return "null";
  if (typeof loc == "string")
    return "\"" + loc + "\"";
  return "{\"lat\": " + loc.lat + ", \"lng\": " + loc.lng + "}";
}

function waypointToJson(waypoint) {
  return "{\"location\": " + locToJson(waypoint.location) + ", \"stopover\": false}";
}

function routesToJson(routes) {
  var htmlStr = "";
  for (var i in routes) {
    var request = routes[i].request;
    htmlStr += "\
  {\n\
    \"request\":\n\
    {\n\
      \"origin\": " + locToJson(request.origin) + ",\n\
      \"destination\": " + locToJson(request.destination) + ",\n\
      \"waypoints\": [\n";
      for (var j in request.waypoints) {
        htmlStr += "\
          " + locToJson(request.waypoints[j].location) + ((j == request.waypoints.length - 1) ? "" : ",") + "\n";
      }
      htmlStr += "\
      ]\n\
    },\n\
    \"color\": \"" + routes[i].color + "\"\n\
  }" + ((i == routes.length - 1) ? "" : ", ");
  }
  return htmlStr;
}

function writeFileLoop(i) {
  if (i >= data.length)
    return;
  
  var jsonStr = "\
{\n\
  \"timestamp\": " + Math.floor(Date.now() / 1000) + ",\n\
  \"nama\": \"" + data[i].nama + "\",\n\
  \"berangkat\": [" + routesToJson(data[i].berangkat) + "],\n\
  \"kembali\": [" + routesToJson(data[i].kembali) + "]\n\
}";
  fs.writeFile("data/sub/" + data[i].nama + ".json", jsonStr, function(err) {
    if (err) {
      console.log(err);
    } else {
      console.log(data[i].nama + ".json written");
      i++;
      writeFileLoop(i);
    }
  });
}

writeFileLoop(0);

//for (var i in data) {  
//  var jsonStr = "\
//{\n\
//  \"nama\": \"" + data[i].nama + "\",\n\
//  \"berangkat\": [" + routesToJson(data[i].berangkat) + "],\n\
//  \"kembali\": [" + routesToJson(data[i].berangkat) + "]\n\
//}";
//  fs.writeFile("data/sub/" + data[i].nama + ".json", jsonStr, function(err) {
//    if (err) {
//      console.log(err);
//    }
//  });
//}