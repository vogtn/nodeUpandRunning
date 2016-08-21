app.get('/a*', function(req,res){
  res.send('a');
  //matches /afoo /a.bar /a/qux etc.
});

app.get('/b*/c*d', function(req,res){
  res.send('b');
  //matches /b/cd /b/cfood /b//c/d/ etc.
  //does not match /b/c/d/foo
});

app.get('*', function(req,res){
  res.send('*');
  //matches /a /c /b/cd /b/c/d /b/c/d/foo
  //does not match /afoo /bfoo/cbard
});
