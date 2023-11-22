class Persona{
    public String nombre;
    public int edad;
    public Persona(String nombre,int edad){
        this.nombre = nombre;
        this.edad = edad;
    }
    void Saludar(){
        System.out.println("Hola soy "+this.nombre+" y tengo "+this.edad);
    }
}

public class otros{
    public static void main(String[] args) {
        Persona persona1 = new Persona("Juan Diego", 15);
        persona1.Saludar();
    }
}