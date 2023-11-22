//Se crea una clase la cual sera el objeto
class Animal{
    //constructor inicializa los atributos especie,raza y edad del objeto Animal
    constructor(especie,color,edad){
        this.especie = especie;
        this.color = color;
        this.edad = edad;
        this.información = `Soy ${this.especie}, tengo ${this.edad} años y soy de color ${this.color}`;
    }
    //Creamos un método
    verInfo(){
        document.write(this.información+"<br>")
    }
}

//Instanciamos el objeto
let perro = new Animal("Perro","Marrón",5);
let gato = new Animal("Gato","Gris",1);
let pajaro = new Animal("Pajaro","Verde",3)

// document.write(perro.información+"<br>")
// document.write(gato.información+"<br>")
// document.write(pajaro.información+"<br>")

perro.verInfo();
gato.verInfo();
pajaro.verInfo();

