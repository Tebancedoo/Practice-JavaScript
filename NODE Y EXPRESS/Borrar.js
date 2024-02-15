var mysql = require('mysql');
var express = require("express");
var app = express();

var conexion = mysql.createConnection({
    host: "localhost",
    user: "root",
    password: "",
    database: "mydb"
})

/*app.delete('/borrar1/:id', (request,response) => {
    const id = request.params.id;
    conexion.query("DELETE FROM productos WHERE id_producto = ?",
    [id],
    (error,results) =>{

    })
})*/

app.delete('/borrar/:id', (req,res) => {
    const {id} = req.params

    const query = `DELETE FROM productos WHERE id_producto = ${id};`
    conexion.query(query, (error) => {
        if(error) console.error(error.message)

        res.json('Se elimino correctamente el producto')
    })
})


app.listen(8080, function(){
    console.log("Servidor activo")
})