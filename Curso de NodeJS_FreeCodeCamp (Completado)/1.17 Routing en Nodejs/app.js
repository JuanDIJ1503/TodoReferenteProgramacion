const http = require('http');
const {infoCursos} = require('./cursos');

const servidor = http.createServer((req,res)=>{
    const metodo = req.method;//Tambien se puede utilizar la sintaxis de desestructuracion: const {method} = req;
    switch (metodo) {
        case 'GET':
            return manejarSolicitudGET(req,res);
        case 'POST':
            return manejarSolicitudPOST(req,res);
        default:
            res.statusCode = 501;
            res.end(`El método usado no puede ser manejado por el servidor. Metodo usado: ${metodo}`);
            break;
    }
});

function manejarSolicitudGET(req,res){
    const path = req.url;
    if(path === '/'){
        return res.end('Bienvenidos a mi primer Servidor y API creado con Node.js');
    }else if(path === '/api/cursos'){
        return res.end(JSON.stringify(infoCursos));//stringify: Convierte a formato JSON
    }else if(path === '/api/cursos/programacion'){
        return res.end(JSON.stringify(infoCursos.programacion));
    }

    res.statusCode = 404;
    res.end('El recurso solicitado no existe...');
}
function manejarSolicitudPOST(req,res){
    const path = req.url;
    if(path === '/api/cursos/programacion'){
        let cuerpo = '';

        req.on('data',contenido =>{
            cuerpo += contenido.toString();
        });

        req.on('end',()=>{
            console.log(cuerpo);
            console.log(typeof cuerpo);

            /*Convertimos cuerpo a un objeto de JavaScript*/
            cuerpo = JSON.parse(cuerpo);
            console.log(typeof cuerpo);
            console.log(cuerpo.titulo)
            res.end('El servidor recibió una solicitud POST para /cursos/programacion');
        });

        //return res.end('El servidor recibió una solicitud POST para /cursos/programacion')
    }
}

const PUERTO = 3000;
servidor.listen(PUERTO,()=>{
    console.log(`El servidor esta escuchando en el puerto: ${PUERTO}`)
});
