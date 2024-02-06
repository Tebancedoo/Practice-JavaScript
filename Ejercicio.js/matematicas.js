const PI = 3.14;

//funcion que me rpermita sumar
function sumar (x1,x2){
    return x1+x2;
}
//funcion que me permita restar
function restar (x1,x2){
    return x1-x2;
}
//funcion que me permita dividir pero no por cero
function dividir(x1,x2){
    if(x2==0){
        mostrarErrorDivision();
    }else{
        return x1/x2;
    }
}

function potencia(x1,x2){

    x = 1;

    for (i = 1; i <= x2; i++) {    
        x = x * x1;
        
      }

    return x;
     
}
//funcion en caso de que se multipique por cero 
function mostrarErrorDivision(){
    console.log('No se puede dividir por cero.');
}
//exportamos funciones 
exports.sumar = sumar;//exportamos la funcion sumar
exports.restar = restar;//exportamos la funcion restar
exports.dividir = dividir;//exportamos la funcion dividir
exports.potencia = potencia;//exportamos la funcion potencia
exports.PI = PI;//exportamos la constante PI

//Para ejecutar un programa usamos node mas el nombre del programa