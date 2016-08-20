var mongoose = require('mongoose')

var Schema = mongoose.Schema,
    ObjectId = Schema.ObjectId

var AuthorSchema = new Schema({
    name:{
      first     : String,
      last      : String,
      full      : String
    },
    contact:{
      email     : String,
      twitter   : String,
      google    : String
    },
    photo       : String
});

var CommentSchema = new Schema({
  commenter    : String,
  body         : String,
  posted       : Date
});

var ArticleSchema = new Schema({
  author     : ObjectId,
  title      : String,
  contents   : String,
  published  : Date,
  comments   : [CommentSchema]
});

var Author = mongoose.model('Author', AuthorSchema);
var Article = mongoose.model('Article', ArticleSchema);
