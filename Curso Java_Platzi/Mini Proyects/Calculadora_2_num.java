import java.util.Scanner;

class Calculadora{
    int NumeroUno;
    int NumeroDos;
    public Calculadora(int NumeroUno,int NumeroDos){
        this.NumeroUno = NumeroUno;
        this.NumeroDos = NumeroDos;
    }
    public int Resultado(){
        int suma = NumeroUno + NumeroDos;
        return suma;
    }
}
public class Calculadora_2_num {
    public static void main(String[] args) {
        System.out.println("Calculadora");
        System.out.println("____________________________________________________");
        Scanner datos = new Scanner(System.in);
        System.out.println("Ingrese primer numero");
        var num1 = datos.nextInt();
        System.out.println("Ingrese segundo número");
        var num2 = datos.nextInt();
        datos.close();
        
        Calculadora resultadoSuma = new Calculadora(num1, num2);
        var sumaFinal = resultadoSuma.Resultado();
        System.out.println("El resultado es: "+sumaFinal);
    }
}
