public class Switch {
    public static void main(String[] args) {
        String colorModeSelect = "Light";

        //Switch funciona como un if else y no permite ejecutar codigo dependiendo de la variable que le pasemos
        switch (colorModeSelect){
            //Case se comporta como: Si esto se cumple ejecuta esto
            case "Light"://El evalua la variable que le pasamos en switch
                System.out.println("Seleccionaste Light Mode");
                break;//Los case siempre terminan con un break. Y significa que sale del bloque de codigo
            case "Dark":
                System.out.println("Seleccionaste Dark Mode");
                break;
            case "Blue Dark":
                System.out.println("Seleccionaste Blue Dark Mode");
                break;
            case "Night":
                System.out.println("Seleccionaste Night Mode");
                break;
            //Default se comporta como: Si ninguno se cumple ejecuta esto
            default://Ejecuta el codigo si ninguna de las opciones anteriores se cumple
                System.out.println("Selecciona una opción correcta");
        }
    }
}
