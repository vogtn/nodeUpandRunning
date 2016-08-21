var express = require('express');
var app = express.createServer();

app.get(/\/(\d+), function(req,res){
  res.send(req.params[0]);
});

app.listen(9001);
