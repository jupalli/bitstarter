var express = require('express');
var app = express();
app.use(express.logger());

/*app.get('/', function(request, response) {
  response.send('Hello World2!');
});
*/

var fs = require('fs');
var buf;

fs.readFile('index.html', function (err, data) {
  if (err) throw err;
  console.log(data);
  buf = new Buffer(data);
});

app.get('/', function(request, response) {
  response.send('Hello World3!'+buf.length);
});


var port = process.env.PORT || 5000;
app.listen(port, function() {
  console.log("Listening on " + port);
});
