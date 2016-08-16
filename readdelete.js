var fs = require('fs');

fs.readFile('warandpeace.txt', function(e, data){
  console.log('War and peace: ' + data);
  fs.unlink('warandpeace.txt');
});
