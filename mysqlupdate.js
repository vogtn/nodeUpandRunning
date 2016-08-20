var mysql = require('db-mysql');

var connectParams = {
  'hostname': 'localhost',
  'user': 'dev',
  'password': 'dev',
  'database': 'upandrunning'
}

var db = new mysql.Database(connectParams);

db.connect(function(error){
  if(error)return console.log("Failed to connect");

  this.query()
    .update('users')
    .set({'user_nicename': 'New User'})
    .where('user_login = ?', ['newbie'])
    .execute(function(error, rows, columns){
      if(error){
        console.log("Error on query");
        console.log(error);
      }
      else console.log(rows);
    });
});

/*
Output:
{ id: 0, affected: 1, warning: 0 }
*/
