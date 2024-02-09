var mysql = require('mysql'); //asignamos mysql  una variable con el mismo nombre

var con = mysql.createConnection({
    host: "localhost",
    user: "root",
    password: "",
    database: "mydb"
});

con.connect(function(err) {
    if (err) throw err;
    console.log("Connected");
    var sql = "CREATE TABLE customers (name VARCHAR(255), adress VARCHAR(255))";
    con.query(sql,function(err,result){
    if (err) throw err;
    console.log("Table created");    
})                                            
});