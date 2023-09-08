var http = require('http');

//create a server object:
http.createServer(function (req, res) {
  res.write('Hello Sasi is this working?');
  res.end(); //Sasi ff
}).listen(3000);
