var mysql = require('mysql'); //asignamos mysql  una variable con el mismo nombre

var con = mysql.createConnection({
    host: "127.0.0.1", //uso la direccion en lugar de localhost
    user: "root",
    password: "",
    database: "mydb"
});

con.connect(function(err) {
    if (err) throw err;
    console.log("Connected");

con.query("SELECT * FROM productos WHERE id_categoria = 1", function(err,result){//aqui se hace la consultas de forma directa
    if (err) throw err;
    console.log(result);    
})                                            
});