//instalar la libreria de mysql de node para que funciones
var mysql = require('mysql');
var express = require("express");
var app = express();

var con = mysql.createConnection({
    host: "localhost",
    user: "root",
    password: "",
    database: "mydb"
});

app.get('/productos',(req,res) => {
    const query = 'SELECT * FROM customers'
    con.query(query,(error,resultado)=>{
        if(error) return console.error(error.message)

        if(resultado > 0){
        
        res.json('No hay registros!')

        }else{
            res.json(resultado)
            console.log(res.json(resultado))
        }
    })
})

app.listen(8080, function(){
    console.log("Servidor activo")
})