var mysql = require('db-mysql');

var connectParams = {
  'hostname': 'localhost',
  'user': 'dev',
  'password': 'dev',
  'database': 'upandrunning'
}

var db = new mysql.Database(connectParams);

db.connect(fucntion(error){
  if(error) reutnr console.log("Failed to connect");

  this.query()
    .insert('users', ['user_login'],['newbie'])
    .execute(function(error, rows, colums){
      if(error){
        console.log("Error on query");
        console.log(error);
      }
      else console.log(rows);
    });
});
/*
Output:
{ id: 2, affected: 1, warning: 0 }
*/
