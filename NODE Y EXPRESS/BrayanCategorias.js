var express = require("express")
var app = express()

//Endpoint de seleccionar
app.get("/categorias", function(req,res){
    res.send("Usted esta mostrando información de la tabla categorias!")
})
//Endpoint de insertar
app.post("/categorias", function(req,res){
    res.send("Usted esta insertando información de la tabla categorias!")
})
//Endpoint de actualizar
app.put("/categorias", function(req,res){
    res.send("Usted esta actualizando información de la tabla categorias!")
})
//Endpoint de eliminar
app.delete("/categorias", function(req,res){
    res.send("Usted esta eliminando información de la tabla categorias!")
})

app.listen(8080, function(){
    console.log("Aplicación ejemplo, escuchando al puerto 8080!")
})