function saludar(nombre){
    return `Hola ${nombre}`
}

function saludarHolaMundo(){
    return '!Hola Mundo';
}


//FORMAS DE EXPORTAR VARIOS ELEMENTOS
//Primera forma
//El modulo exportado va a tener el nombre del saludar que esta despues exports
module.exports.saludar = saludar;
module.exports.saludarHolaMundo = saludarHolaMundo;

//Segunda Forma
module.exports = {
    saludar:saludar,
    saludarHolaMundo:saludarHolaMundo,
}