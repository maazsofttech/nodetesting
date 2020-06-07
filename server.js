var express = require('express');
var app = express();
var fs = require("fs");

app.get('/listUsers', function (req, res) {
   fs.readFile( "users.json", 'utf8', function (err, data) {
      console.log( data );
      res.end( data );
   });
})

 

const MongoClient = require('mongodb').MongoClient;

var url = "mongodb+srv://freemen:freemen%40mongomongo@freemen-eo4l4.mongodb.net/maaz?retryWrites=true&w=majority";

const client = new MongoClient(url, { useUnifiedTopology: true });  

const dbName = "maaz";



 app.get('/users', function (req, res) {
    

client
      .connect()
      .then(
        client =>
          client
            .db(dbName)
            .collection("freemen").find()
            .toArray()  
      )
    //   .then(cols => console.log("Collections", cols))
.then(cols => res.end(  JSON.stringify(cols) ))
      .finally(() => client.close());


      
   
 })





/*
const uri = "mongodb+srv://freemen:freemen%40mongomongo@freemen-eo4l4.mongodb.net/maaz?retryWrites=true&w=majority";
const client = new MongoClient(uri, { useNewUrlParser: true });
client.connect(err => {
  const collection = client.db("test").collection("freemen");
console.log(collection.find())
  // perform actions on the collection object
  client.close();
});
*/
 
 
 
const port = process.env.PORT || 3000

app.listen(port,() => {
  console.log("Server running at port "+port);
 
});
 