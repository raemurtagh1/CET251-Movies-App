var sqlite3 = require('sqlite3').verbose();
var db = new sqlite3.Database('movies.DB');

db.serialize(function(){
    db.run("CREATE TABLE IF NOT EXISTS MOVIES (title TEXT, year INTEGER, rating INTERGER)");
    db.run("DELETE FROM movies");
    db.run("INSERT INTO movies (title, year, rating) VALUES (?, ?, ?)","The Dark Knight", 2008, 9.0);
    db.run("INSERT INTO movies (title, year, rating) VALUES (?,?,?)","The Lion King", 1995, 8.5);
    db.run("INSERT INTO movies (title, year, rating) VALUES (?,?,?)","Raiders of the Lost ark", 1981, 8.4);
    db.run("INSERT INTO movies (title, year, rating) VALUES (?,?,?)","Joker", 2019, 8.4);
    db.run("INSERT INTO movies (title, year, rating) VALUES (?,?,?)","Finding Nemo", 2003, 8.1);
});

var express = require('express');
var restapi = express();


//display all rows in table and return as json
restapi.get('/movies', function(req,res){
    db.all("SELECT * FROM movies", function(err,rows){
        res.jsonp(rows);
    });
});

restapi.listen(3000);
console.log("Up and running..");