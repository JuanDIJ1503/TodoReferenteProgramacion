
import java.util.Scanner;
public class basicSwitchExercise {
    public static void main(String[] args) {
        Scanner colorEntered = new Scanner(System.in);
        System.out.println("Elija un modo:");
        System.out.println("-Light");
        System.out.println("-Dark");
        System.out.println("-Blue Dark");
        System.out.println("-Night");
        String selectedColor = colorEntered.nextLine();
        String colorModeSelect = selectedColor;
        colorEntered.close();

        //Switch funciona como un if else y no permite ejecutar codigo dependiendo de la variable que le pasemos
        switch (colorModeSelect){
            case "Light"://El evalua la variable que le pasamos en switch
                System.out.println("Seleccionaste Light Mode");
                break;//Los case siempre terminan con un break
            case "Dark":
                System.out.println("Seleccionaste Dark Mode");
                break;
            case "Blue Dark":
                System.out.println("Seleccionaste Blue Dark Mode");
                break;
            case "Night":
                System.out.println("Seleccionaste Night Mode");
                break;
        }
    }
}

