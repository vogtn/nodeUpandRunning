var mysql = require('db-mysql');

var connectParams = {
  'hostname': 'localhost',
  'user': 'dev', 'password': 'dev',
  'database': 'upandrunning'
}

var db = new mysql.Database(connnectParams);

db.connect(function(error){
  if(error) return console.log("Failed to connect");

  this.query()
    .delete()
    .from('users')
    .where('user_login = ?', ['newbie'])
    .execute(function(error,rows,colums){
      if(error){
        console.log("Error on query");
        console.log()
      }
      else console.log(rows);
    });
});

/*
Output:
{ id: 0, affected: 1, warning: 0 }
*/
