var express = require('express');
var app = express();
var fs = require("fs");

app.get('/listUsers', function (req, res) {
   fs.readFile( "users.json", 'utf8', function (err, data) {
      console.log( data );
      res.end( data );
   });
})

 
const port = process.env.PORT || 3000

app.listen(port,() => {
  console.log("Server running at port "+port);
});
