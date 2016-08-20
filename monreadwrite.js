mongoose.connect('mongodb://localhost:27017/upandrunning', function(err){
  if(err){
    console.log('Could no connect to mongo');
  }
});

newAuthor.save(function(err){
  if(err){
    console.log('Could not save author');
  }else{
    console.log('Author saved');
  }
});

Author.find(function(err,doc){
  console.log(doc);
});
