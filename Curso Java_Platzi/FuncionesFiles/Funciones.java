package FuncionesFiles;//Declaramos un paquete que no es más que la carpeta donde se encuentra
public class Funciones{
    //Creamos la función
    public static float Funcion1(float a,float b){
        return a + b;
    }
    public static void main(String[] args) {
        System.out.println("Probando funciones");
        //Llamamos y almacenamos el valor de la función
        float valorRecuperado = Funcion1(5.3f, 5.2f);
        //Imprimimos el valor
        System.out.println(valorRecuperado);
    }
    
    
}
