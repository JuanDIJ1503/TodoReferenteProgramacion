public class UpdatingsVariables {
    public static void main(String[] args) {
        int salary = 1000;
        //Bono 200
        salary = salary + 200;
        System.out.println("El salario total es: "+salary);
        //Pension: 50 descuento
        salary = salary - 50;
        System.out.println("El precio final es: "+salary);

        //2 horas extras 30c/u
        //Comida :45
        salary = salary + (30 * 2) - 45;
        System.out.println("Sueldo final es: "+salary);
        
        //Actualizando cadenas de texto
        String Empleado = "Anahi Salgado";
        Empleado = Empleado + " Díaz de la Vega";
        System.out.println(Empleado);
        Empleado = "Irene " + Empleado;//Agrega una cadena de texto antes de la cadena anteriormente generada
        System.out.println(Empleado); 
    }
}
