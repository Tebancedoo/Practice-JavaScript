var express = require("express")
var app = express()

app.get("/productos", function(req,res){
    res.send("Usted esta consultando la informacion")
})
app.post("/productos", function(req,res){
    res.send("Usted esta insertando informacion")
})
app.put("/productos", function(req,res){
    res.send("Usted esta modificando la informacion")
})
app.delete("/productos", function(req,res){
    res.send("Usted esta eliminando la informacion ")
})
    app.listen(8080, function(){
        console.log("Aplicación ejemplo, escuchando al puerto 8080!")
    })