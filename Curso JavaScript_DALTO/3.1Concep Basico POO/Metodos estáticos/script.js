//Se crea una clase la cual sera el objeto
class Animal{
    //constructor inicializa los atributos especie,raza y edad del objeto Animal
    constructor(especie,color,edad){
        this.especie = especie;
        this.color = color;
        this.edad = edad;
        this.informacion = `Soy ${this.especie}, tengo ${this.edad} años y soy de color ${this.color}`;
    }
    //Creamos un método
    verInfo(){
        document.write(this.informacion+"<br>")
    }
}

//Creamos una herencia
class Perro extends Animal{
    //Colocamos los mismos atributos y adicionamos si es necesario algunos
    constructor(especie,color,edad,raza){
        super(especie,color,edad);
        this.raza = raza;
    }
    //static: Permite ejecutar métodos sin necesidad de los atributos
    static ladrar(){
        document.write("Wauf")
    }
}

//Instanciamos el objeto
const gato = new Animal("Gato","Gris",1);
const pajaro = new Animal("Pajaro","Verde",3)

Perro.ladrar();

