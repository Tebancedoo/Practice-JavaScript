//instalar la libreria de mysql de node para que funciones
var mysql = require('mysql');
var express = require("express");
var app = express();

app.use(express.json());

var con = mysql.createConnection({
    host: "localhost",
    user: "root",
    password: "",
    database: "mydb"
})

app.post('/agregar', (req, res) => {
   const {name, adress} = req.body;
   
    con.query("INSERT INTO customers (name, adress) VALUES (?,?)", 
    [name,adress],
    (error,results) => {
        if(error)
        throw error;
    res.status(200).json({"Item añadido correctamente": results.affectedRows});

    });
});


app.post('/agregarP', (req, res) => {
    const {id_producto,codigo_producto,nombre_producto,id_categoria,documento_creador,precio_producto,id_estado} = req.body;
    
     con.query("INSERT INTO productos (id_producto, codigo_producto, nombre_producto, id_categoria, documento_creador, precio_producto, id_estado) VALUES (?,?,?,?,?,?,?)", 
     [id_producto,codigo_producto,nombre_producto,id_categoria,documento_creador,precio_producto,id_estado],
     (error,results) => {
         if(error)
         throw error;
     res.status(200).json({"Item añadido correctamente": results.affectedRows});
 
     });
 });

app.listen(8080, function(){
    console.log("Servidor activo")
})
