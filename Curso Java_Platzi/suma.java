import java.util.Scanner;
public class suma {
    public static void main(String[] args) {
        Scanner datos = new Scanner(System.in);
        System.out.println("Ingrese primer número:");
        int num1 = datos.nextInt();
        System.out.println("Ingrese segundo número:");
        int num2 = datos.nextInt();
        System.out.println("Ingrese tercer número:");
        int num3 = datos.nextInt();
        
        int suma = num1 + num2 + num3;
        int producto = num1 * num2 * num3;
        
        System.out.println("La suma de los números: "+ suma);
        System.out.println("El producto de los números es: "+ producto);
        datos.close();
    }
}
