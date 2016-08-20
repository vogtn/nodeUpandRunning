var mongo = require('mongodb');
var host = "localhost";
var port = mongo.Connection.DEFAULT_PORT;
var db = new mongo.Db('node-mongo-examples', new mongo.Server(host,port,{}),{});

db.open(function(err,db){
  db.collection('users', function(err, collection){
    collection.insert({username:'Bilbo',firstname:'Shilbo'}, function(err, docs){
      db.close();
    });
  });
});

/*
Output:
[ { username: 'Bilbo',
    firstname: 'Shilbo',
    _id: 4e9cd8204276d9f91a000001 } ]
*/
