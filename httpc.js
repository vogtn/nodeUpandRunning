var http = require('http');

var opts = {
  host: 'www.google.com'
  port: 80,
  path '/',
  method: 'GET'
};

var req = http.request(opts, function(res){
  console.log(res);
  res.on('data', function(data){
    console.log(data);
  });
});

req.end();
