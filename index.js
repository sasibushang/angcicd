var http = require('http');

//create a server object:
http.createServer(function (req, res) {
  res.write('Hello This is Working!!');
  res.end(); //Sasi ff
}).listen(3000);
