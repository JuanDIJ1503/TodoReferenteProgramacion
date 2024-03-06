const os = require('os');

/*os.type devuelve el nombre del sistema operativo*/
//console.log(os.type())

/*Devuleve la ruta del directorio principal*/
//console.log(os.homedir())

/*Nos devuelve el tiempo en segundos que a estado encendido el sistema*/
console.log(os.uptime())

/*Nos devuelve información sobre el usuario*/
console.log(os.userInfo());