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

const nregistros = "INSERT INTO customers (name, adress) VALUES ('Juan Perez', 1),('Jose Gomez', 2),('Pepe Gonzalez', 3),('Carla ', 4),('Mateo', 5)";
con.query(nregistros,function(err,result){
    if (err) throw err;
    console.log("Registers created");    
})                                            
});