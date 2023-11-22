function EstudiarTema(tema){
    console.log(`Estoy estudiando ${tema}`)
}

/*Ejecuta la función infinitas veces cada 2 segundos Ctrl+C para cancelar esta ejecución*/
// setInterval(EstudiarTema,2000,'Node.js');

// setInterval(()=>{
//     console.log("Repitiendo");
// },2000);


function Sumar(a,b){
    console.log(a+b);
}
//Tambien puede recibir dos argumentos
setInterval(Sumar,1500,5,5);