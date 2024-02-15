//instalar la libreria de mysql de node para que funciones
var mysql = require('mysql');
var express = require("express");
var app = express();

//app.use(express.json());


var con = mysql.createConnection({
    host: "localhost",
    user: "root",
    password: "",
    database: "mydb"
})

app.post('/agregar', (request, response) => {
   const {name, adress} = request.body;
   
    con.query("INSERT INTO customers (name, adress) VALUES (?,?)", 
    [name,adress],
    (error,results) => {
        if(error)
        throw error;
    response.status(200).json({"Item añadido correctamente": results.affectedRows});

    });
});


app.listen(8080, function(){
    console.log("Servidor activo")
})