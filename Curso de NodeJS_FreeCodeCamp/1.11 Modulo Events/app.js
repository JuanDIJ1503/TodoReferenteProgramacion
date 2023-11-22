const EventEmitter = require('events');

const emisorProductos = new EventEmitter;

/*con .on() Registramos un manejador de eventos*/
emisorProductos.on('compra',()=>{
    console.log("Se realizo una compra")
});
/*Tambien puede recibir varios parámetros*/
emisorProductos.on('compra',(total,numProd)=>{
    console.log(`Total de la compra: $${total}`);
    console.log(`Número de productos: ${numProd}`);
});


/*Con .emit() Emitimos un evento en este caso compra*/
emisorProductos.emit('compra',500,4);