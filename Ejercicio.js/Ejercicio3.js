/* os es el sistema operativo*/

const os=require('os');

console.log('Sistema operativo: '+os.platform());//me permite saber el sistema operativo
console.log('Version del sistema: '+os.release());//me permite saber la version del sistema
console.log('Memoria total: '+os.totalmem()+ ' bytes');//me permite saber la capacidad del almacenamiento total
console.log('Memoria libre: '+os.freemem()+ ' bytes');//me permite saber la capacidad restante de la memoria