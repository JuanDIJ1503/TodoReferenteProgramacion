function EstudiarTema(tema){
    console.log(`Estoy aprendiendo ${tema}`);
}

console.log("Mensaje antes de setImmediate");

//Ejecuta una función cuando se termine de ejecutar código sincrono
setImmediate(EstudiarTema,'Node.js');

//Ejecuta un bloque de código cuando se termine de ejecutar código sincrono
setImmediate(()=>{
    console.log("2do setImmediate")
})

console.log("Mensaje después de setImmediate");