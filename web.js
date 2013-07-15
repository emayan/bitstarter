var express = require('express');
var fs = require('fs');

var app = express.createServer(express.logger());
var indexContent = fs.readFileSync("index.html","utf8");
var buf = new Buffer(indexContent);

app.get('/', function(request, response) {
    response.send(buf.toString());
    });

var port = process.env.PORT || 5000;
app.listen(port, function() {
  console.log("Listening on " + port);
});
