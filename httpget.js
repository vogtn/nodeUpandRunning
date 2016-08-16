var http = require('http');

var opts = {
  host: 'www.google.com'
  port: 80,
  path: '/'
}

var req = http.get(opts, function(res){
  console.log(res);
  res.on('data',function(data){
    console.log(data);
  });
});
