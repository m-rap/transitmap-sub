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
          " + waypointToJson(request.waypoints[j]) + ((j == request.waypoints.length - 1) ? "" : ",") + "\n";
      }
      htmlStr += "\
      ],\n\
      \"optimizeWaypoints\": false\n\
    },\n\
    \"color\": \"" + routes[i].color + "\"\n\
  }" + ((i == routes.length - 1) ? "" : ", ");
  }
  return htmlStr;
}

for (var i in data) {  
  var jsonStr = "\
{\n\
  \"nama\": \"" + data[i].nama + "\",\n\
  \"berangkat\": [" + routesToJson(data[i].berangkat) + "],\n\
  \"kembali\": [" + routesToJson(data[i].berangkat) + "]\n\
}";
  fs.writeFile("data/sub/" + data[i].nama + ".json", jsonStr, function(err) {
    if (err) {
      console.log(err);
    }
  });
}