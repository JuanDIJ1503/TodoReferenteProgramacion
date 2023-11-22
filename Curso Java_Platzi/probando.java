import java.util.Scanner;
public class probando{
    public static void main(String[] args) {
        Scanner datos = new Scanner(System.in);
        int num,num2;
        System.out.println("Ingrese primer número de 1 digito");
        num = datos.nextInt();
        while(num > 9){
            System.out.println("Primer número erroneo: Ingrese número de 1 digito");
            num = datos.nextInt();
        }

        System.out.println("Ingrese segundo número de 1 digito");
        num2 = datos.nextInt();
        
        while(num2 > 9){
            System.out.println("Segundo número erroneo: Ingrese número de 1 digito");
            num2 = datos.nextInt();
        }
        System.out.println("Primer numero: "+num);
        System.out.println("Segundo número: "+num2);
        System.out.println("La suma es: "+ (num + num2));
        datos.close();
        
    }
}