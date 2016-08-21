var express = require('express');

var app = express.createServer();

var users = [{name: 'tj'}, {name: 'tom'}];

app.all('/user/:id/:op?', function(req,res,next){
  req.user = users[req.params.id];

  if(req.user){
    next();
  }else{
    next(new Error('Cannot find user with ID: ' + req.params.id));
  }
});

app.get('/user/:id', function(req,res){
  res.send('Viewing ' + req.user.name);
});

app.get('/user/:id/edit', function(req,res){
  res.send('Editing ' + req.user.name);
});

app.put('/user/:id', function(req,res){
  res.send('Updating ' + req.user.name);
});

app.get('*', function(req,res){
  res.send('Danger, Will Robinson!', 404);
});

app.listen(3000);
