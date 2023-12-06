const http = require('http');

const servidor = http.createServer((req,res)=>{
    res.end('Hola, estoy aprendiendo Node.js');
});

const PORT = 3000;
servidor.listen(PORT,()=>{
    console.log(`El servidor esta escuchando en el puerto ${PORT}`);
});