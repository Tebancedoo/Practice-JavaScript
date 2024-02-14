//instalar la libreria de mysql de node para que funciones
var mysql = require('mysql');
var express = require("express");
var app = express();

var con = mysql.createConnection({
    host: "localhost",
    user: "root",
    password: "",
    database: "mydb"
})

app.get('/productos/:nombre',(req,res)=>{
    const {nombre} = req.params
    const query = `SELECT * FROM productos WHERE nombre_producto="${nombre}";`
    con.query(query,(error,resultado)=>{
        if(error) return console.error(error.message)

        if(resultado){
            res.json(resultado)
            console.log(res.json(resultado))
        }else{
            res.json('no hay registros con ese ID')
        }
    })
})

app.listen(8080, function(){
    console.log("Servidor activo")
})