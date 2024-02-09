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

const mdato = "UPDATE productos set documento_creador=1212 WHERE documento_creador=111 ;";
con.query(mdato, function(err,result){
    if (err) throw err;
    console.log("Dates modified");    
})                                            
});