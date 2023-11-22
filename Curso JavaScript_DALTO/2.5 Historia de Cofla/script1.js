let free = false;

const ValidarEntrada = (tiempo)=>{
    let edad = prompt("¿Cuál es tu edad?")
    if(edad >= 18){
        if((tiempo >= 2 && tiempo <= 7 && free == false)){
            alert(`Puedes entrar completamente GRATIS, porque eres la 1era persona en venir a las ${tiempo}`)
            free = true;
        }else{
            alert(`Son las: ${tiempo} Puedes pasar pero tienes que PAGAR`)
        }
    }else{
        alert("No puedes pasar porque eres menor de edad")
    }
}
ValidarEntrada(1);
ValidarEntrada(2);
ValidarEntrada(4);
ValidarEntrada(21);
ValidarEntrada(23);
ValidarEntrada(3);