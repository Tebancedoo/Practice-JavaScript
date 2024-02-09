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

const edato = "DELETE FROM productos WHERE codigo_producto = 'D1' ;";
con.query(edato,function(err,result){
    if (err) throw err;
    console.log("Date elimined");    
})                                            
});