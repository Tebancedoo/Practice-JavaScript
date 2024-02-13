var express = require("express")
var app = express()

/*app.get("/", function(req,res){
    res.send("Hola mundo!")
})
*/app.get("/Mensaje", function(req,res){
    res.send("Hola julian-!")
})
    app.listen(8080, function(){
        console.log("Aplicación ejemplo, escuchando al puerto 8080!")
    })