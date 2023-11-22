const http = require('http');

const servidor = http.createServer((req,res)=>{
    console.log("===> res (respuesta)");
    /*Establece el código de estado en la respuesta que se enviara al cliente. Por defecto es 200*/
    console.log(res.statusCode);

    /*Podemos cambiar el código de estado*/
    // res.statusCode = 404;
    // console.log(res.statusCode);

    /*Establece un valor específico para un encabezado HTTP*/
    res.setHeader('content-type','aplication/json');
    console.log(res.getHeaders());//Muestra el valor del encabezado
    res.end('Hola servidor');
});

const puerto = 3000;
servidor.listen(puerto,()=>{
    console.log(`Servido iniciado en el puerto ${puerto}...`)
});