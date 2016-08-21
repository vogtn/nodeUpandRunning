var mysql = require('db-mysql');
var poolModule = require('generic-pool');

var connectParams = {
  'hostname': 'localhost',
  'user': 'dev',
  'password': 'dev',
  'database': 'zborowski'
}

var pool = poolModule.Pool({
  name: 'mysql',
  create : function(callback){
    var db = new mysql.Database(connectParams);
    db.connect(function(error){
      callback(error, db);
    });
  },
  destroy: function(client) {client.disconnect(); },
  max    : 10,
  idleTimeoutMillis : 3000,
  log    : true
});

pool.aquire(function(error, client){
  if(error) return console.log("Failed to connect");

  client.query()
    .select(['id','user_login'])
    .from('wp_users')
    .execute(function(error, rows, colums){
      if(error){
        console.log("Error on query");
      }else{
        console.log(rows);
      }
      pool.release(client);
    });
});
