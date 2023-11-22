const http = require('http');

const servidor = http.createServer((req,res)=>{
    console.log("===> req (solicitud)");
    console.log(req.url);//Devuelve el camino que escribimos despues del dominio de la página
    console.log(req.method);//Indica el método HTTP de la solicitud
    console.log(req.headers);
    res.end('Hola servidor');
});

const puerto = 3000;
servidor.listen(puerto,()=>{
    console.log(`Servido iniciado en el puerto ${puerto}...`)
});