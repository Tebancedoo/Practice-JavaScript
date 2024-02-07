var mysql = require('mysql'); //asignamos mysql  una variable con el mismo nombre

var con = mysql.createConnection({
    host: "localhost",
    user: "root",
    password: ""
});

con.connect(function(err) {
    if (err) throw err;
    console.log("Connected");
});