let comPc ={
    nombre:"Hp",
    procesador:"Intel i3",
    ram:"6Gb",
    espacio:"500Gb"
};

let nombre = comPc["nombre"]
let procesador = comPc["procesador"]
let ram = comPc["ram"]
let espacio = comPc["espacio"]


let frase = `Mi laptop <b>${nombre}</b> 
            tiene un procesador <b>${procesador}</b>, 
            una ram de <b>${ram}</b> y un espacio de <b>${espacio}</b>`;
document.write(frase);