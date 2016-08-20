var Sequelize = require('sequelize');

var db = new Sequelize('upandrunning', 'dev', 'dev'{
  host: 'localhost'
});

var Author = db.define('Author', {
  name: Sequelize.STRING,
  biography: Sequelize.TEXT
});

Author.hasMany(Book);
Book.hasMany(Author);

db.sync().on('success', function(){
  Book.build({
    name: 'Through the Storm'
  }).save().on('success', function(book){
    console.log('Book saved');
    Author.build({
      name: 'Lynne Spears',
      biography: 'Author and mother of Britney'
    }).save().on('success', function(record){
      console.log('Author saved.');
      record.setBooks([book]);
      record.save().on('success', function(){
        console.log('Author & Book Relation created');
      });
    });
  }).on('failure', function(error){
    console.log('Could not save book');
  });
}).on('failure', function(error){
  console.log('FAiled to sync database');
});
