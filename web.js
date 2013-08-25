var express = require('express');
var app = express();
app.use(express.logger());

var buffer;// = new Buffer("Hello World", "utf-8");

fs.readFile('index.html', function (err, data) {
if (err) console.log("Error reading the file");
else 
buffer = new Buffer(data, "utf-8");} 
);

app.get('/', function(request, response) {
  //response.send('Hello World2!');
  response.send(buffer.toString());
});

var port = process.env.PORT || 5000;
app.listen(port, function() {
  console.log("Listening on " + port);
});
