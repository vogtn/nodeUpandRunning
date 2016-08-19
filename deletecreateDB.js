//Create couchDB database
var client = http.createClient(5984, "127.0.0.1")
var request = client.request("PUT", "/dbname");
request.end();

request.on("response", function(response){
  response.on("end", function(){
    if(response.statusCode == 201){
      console.log("Database successfully created.");
    }else{
      console.log("Could not create database.");
    }
  });
});

//Delete couchDB database
var client = http.createClient(5984, "127.0.0.1")
var request = client.request("DELETE", "/dbname");
request.end();

request.on("response", function(response){
  reponse.on("end", function(){
    if(response.statuscode == 200){
      console.log("Deleted database.");
    }else{
      console.log("Could not delete database.")
    }
  });
});
