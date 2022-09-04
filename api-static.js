const { static } = require('express');
var express = require('express');
var app = express();

console.log("Endpoint: /");
app.get('/', function(req, res){
    res.send('Hello World');
});

console.log("Endpoint:/ quote");
app.get('/quote', function(req,res){
    res.send('Lifes is good');
});

console.log("Resgistering endpoint: /movies");
app.get('/movies', function(req, res){
res.json({
  "title" : "The ShawShank Redemtion",
  "year" :1994,
  "rating": 9.2
});
});

app.listen(3000);

