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

//app.get("/" )

app.get('/productos/:id',(req,res)=>{
    const {id} = req.params
    const query = `SELECT * FROM productos WHERE id_producto=${id};`
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