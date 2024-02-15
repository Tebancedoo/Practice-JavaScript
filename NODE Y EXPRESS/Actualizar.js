var mysql = require('mysql');
var express = require("express");
var app = express();

var conexion = mysql.createConnection({
    host: "localhost",
    user: "root",
    password: "",
    database: "mydb"
})


/*app.put('/actualizar/:id', (req,res) =>{
    const {id} = req.params
    const {codigo_producto, nombre_producto, id_categoria, documento_creador, precio_producto, id_estado} = req.body

    const query = `UPDATE productos SET codigo_producto = '${codigo_producto}', nombre_producto = '${nombre_producto}', id_categoria = '${id_categoria}', documento_creador = '${documento_creador}',
    precio_producto = '${precio_producto}', id_estado = '${id_estado}' WHERE id_producto = '${id}';`

    console.log(query)

    conexion.query(query, (error) => {
        if (error) return console.error(error.message)

        res.json('Se actualizo correctamente el producto')
    })
})
*/

/*app.put('/actualizar1/:id', (request,response) =>{
    const id = request.params.id;
    const {codigo_producto, nombre_producto, id_categoria, documento_creador, precio_producto, id_estado} = request.body
    
    const sql = "UPDATE productos SET codigo_producto = ?, nombre_producto = ?, id_categoria = ?, documento_creador = ?, precio_producto = ?, id_estado = ? ";
    conexion.query(sql, [codigo_producto, nombre_producto, id_categoria, documento_creador, precio_producto, id_estado],
    (error,results) => {
    if(error)
        throw error;
    response.status(201).json({"Datos actualizados":results.affectedRows, "id": id,});
    });

});*/

app.use(express.json());

app.put('/actualizar/:id', (req, res)=>{
    const {id}=req.params;
    const {codigo_producto, nombre_producto, id_categoria, documento_creador, precio_producto, id_estado} = req.body;

    
    const query = `UPDATE productos SET codigo_producto = ?, nombre_producto = ?, id_categoria = ?, documento_creador = ?, precio_producto = ?, id_estado = ? WHERE id_producto = ?`;
    conexion.query(query, [codigo_producto, nombre_producto, id_categoria, documento_creador, precio_producto, id_estado, id], (error) => {
        if(error) return console.log(error.message);

        res.json('Se actualizo correctamente el producto');
    });
});

app.listen(8080, function(){
    console.log("Servidor activo")
})