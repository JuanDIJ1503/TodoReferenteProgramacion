class Celulares{
    constructor(color,peso,resoPantalla,resoCamara,memoriaRam){
        this.color = color;
        this.peso = peso;
        this.resoPantalla = resoPantalla;
        this.resoCamara = resoCamara;
        this.memoriaRam = memoriaRam;
        this.encendido = false;
    }
    presionarBotonEncendido(){
        if(this.encendido == false){
            alert("El celular esta encendido")
            this.encendido = true;
        }else{
            alert("El celular esta apagado")
            this.encendido = false;
        }
    }
    reiniciar(){
        if(this.encendido == true){
            alert("Reiniciando celular")
        }else{
            alert("El celular esta apagado")
            this.encendido = false;
        }
    }
    tomarFoto(){
        alert(`Tomando foto con una resolución de ${this.resoCamara}`)
    }
    grabandoVideo(){
        alert(`Realizando un video con una resolución de ${this.resoCamara}`)
    }
    infoCel(){
        return `
            Color: ${this.color}<br>
            Peso: ${this.peso}<br>
            Resolución de Pantalla: ${this.resoPantalla}<br>
            Resolución de Camara: ${this.resoCamara}<br>
            Memoria RAM: ${this.memoriaRam}<br>
        `
    }
}


const celular1 = new Celulares("Negro","150g","5'","Full HD","2GB");
const celular2 = new Celulares("Rojo","170g","4'","HD","4GB");
const celular3 = new Celulares("Blanco","140g","6'","Full HD","8GB");

document.write(celular1.infoCel())

// celular1.presionarBotonEncendido();
// celular1.tomarFoto();
// celular1.grabandoVideo();
// celular1.presionarBotonEncendido();
// celular1.reiniciar();