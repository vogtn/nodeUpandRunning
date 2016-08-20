//sudo apt-get install libmysqlclient-dev
//npm install -g db-mysql

var mysql = require('db-mysql');

var connectParams = {
  'hostname': 'localhost',
  'user': 'dev',
  'password':'dev',
  'database': 'upandrunning'
}

var db = new mysql.Database(connectParams);

db.connect(function(error){
  if(error) return console.log("Failed to connect");

  this.query()
    .select(['id', 'user_login'])
    .form('users')
    .execute(function(error, rows, colums){
      if (error){
        console.log("Error on query");
      }else {
        console.log(rows);
      }
    });
});
/*
Output:
{ id: 1, user_login: 'mwilson' }
*/
