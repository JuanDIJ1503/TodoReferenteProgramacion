const http = require('http');

/*
createServer(): 
    Crear un servidor utilizando nuestra computadora
    Toma dos parametros request y response (solicitud del cliente y respuesta del servidor)
    Esa función anonima o callback se ejecutara cuando reciba una solicitud
*/
const servidor = http.createServer((req,res)=>{
    //Envia una respuesta al cliente e indica al servidor que se a termiando de enviar respuestas
    res.end('Hola Mundo');
});


const puerto = 3000;
/*
.listen()
    -Inicializa el servidor en un puerto especifico
    -Ejecuta una función cuando empieza a escuchar solicitudes
*/
servidor.listen(puerto,()=>{
    console.log(`El servidor esta escuchando en http://localhost:${puerto}/`);
});