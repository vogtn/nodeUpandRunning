dns.resolve('yahoo.com','A', function(e,r){
  if(e){
    console.log(e);
  }
  console.log(r);
});
// using resolveMx

dns.resolveMx('example.com', function(e,r){
  if(e){
    console.log(e);
  }
  console.log(r);
});
