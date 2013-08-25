var express = require('express');
var app = express();
app.use(express.logger());

var buf;// = new Buffer("Hello World", "utf-8");
var fs = require('fs');

fs.readFile('index.html', function (err, data) {
//response.send("Reading the file");
if (err) 
{
console.log("Error reading the file");
}
else
{
buf = new Buffer(data, "utf-8");
} 
});

app.get('/', function(request, response) {
//  response.send('Hello World2!');
  response.send(buf.toString());
});

var port = process.env.PORT || 5000;
app.listen(port, function() {
  console.log("Listening on " + port);
});
