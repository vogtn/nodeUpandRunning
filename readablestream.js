var fs = require('fs');
var filehandle = fs.readfile('data.txt', function(err, data){
  console.log(data);
});
