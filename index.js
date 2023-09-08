var http = require('http');

//create a server object:
http.createServer(function (req, res) {
  res.write('Hello Sasi this is working??');
  res.end(); //Sasi ff
}).listen(3000);
