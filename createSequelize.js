var Sequelize = require('sequelize');

var db = new Sequelize('upandrunning', 'dev', 'dev', {
  host: 'localhost'
});

var Author = db.define('Author', {
  name: Sequelize.STRING,
  biography: Sequelize.TEXT
});

Author.sync().on('success', function(){
  console.log('Author table was created.');
}).on('failure', function(error){
  console.log('Unable to create author table');
});

/*
Output:
Executing: CREATE TABLE IF NOT EXISTS `Authors` (`name` VARCHAR(255), `biography`
TEXT, `id` INT NOT NULL auto_increment , `createdAt` DATETIME NOT NULL, `updatedAt`
DATETIME NOT NULL, PRIMARY KEY (`id`)) ENGINE=InnoDB;
Author table was created.
*/
