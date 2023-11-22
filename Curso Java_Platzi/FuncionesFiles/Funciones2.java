package FuncionesFiles;

public class Funciones2{
    //Area Circulo
    public static double CircleArea(double radio){
        return Math.PI * Math.pow(radio, 2);
    }
    //Area Esfera
    public static double SphereArea(double radio){
        return 4 * Math.PI * Math.pow(radio,2);
    }
    //Volumen de la Esfera
    /**
     * <b>Descripción:</b> Función que con el radio obtiene el volumen de la Esfera
     * @param radio El radio de la esfera expresado en valor double
     * @return Volumen de la esfera
     */
    public static double VolumeSphere(double radio){
        return (4 / 3.0) * Math.PI * Math.pow(radio,3);
    }


    /**
     * Descripción: Función que especificando su moneda convierte una cantidad de dinero a dolares
     * @param nameCurrency Tipo de Moneda: Solo acepta MXN o COP
     * @param amount Cantidad de dinero
     * @return amount Devuelve la cantidad actualizada en dólares
     */
    public static double converToDolar(String nameCurrency,double amount){
        switch (nameCurrency) {
            case "MXN":
                amount = amount * 0.052;
                break;
            case "COP":
                amount = amount * 0.00031;
                break;
            default:
                System.out.println("Ingrese una moneda correcta");
                break;
        }
        return amount;
        
    }

    public static void main(String[] args) {
        double resultado = CircleArea(5.2);
        System.out.println("El Área del Circulo es: "+Math.round(resultado*100)/100.0);

        double resultadoSphere = SphereArea(5.2);
        System.out.println("El Área de la esfera es: "+Math.round(resultadoSphere*100)/100.0);

        double resultadoVSphere = VolumeSphere(5.2);
        System.out.println("El Volumen de la esfera es: "+Math.round(resultadoVSphere*100)/100.0);

        double pesosDolares = converToDolar("MXN", 2.5);
        System.out.println("PESOS A DOLARES: "+pesosDolares);

    }

}