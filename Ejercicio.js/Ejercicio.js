/*la palabra reservada require nos permite importar archivos de otro sitio*/

const mat = require('./matematicas');//incluimos el archivo de matematicas
//inicializamos las operaciones del archivo matematicas
console.log('La suma de 2 + 2 = ' + mat.sumar(2,2)); //utilizo la funcion sumar del programa "matematicas.js"
console.log('La resta de 4 - 1 = ' + mat.restar(4,1)); //utilizo la funcion restar del programa "matematicas.js"
console.log('La division de 6 / 3 = ' + mat.dividir(6,3)); //utilizo la funcion dividir del programa "matematicas.js"
console.log('La potencia de = ' + mat.potencia(6,5)); //utilizo la funcion potencia del programa "matematicas.js"
console.log('El valor de PI = ' + mat.PI);//Muestro la constante PI






