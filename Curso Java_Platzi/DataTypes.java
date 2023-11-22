public class DataTypes {
    public static void main(String[] args) {
        int n = 1234567890;
        long nL = 12345678901L;//Se coloca L al ultimo para diferenciarlo del int

        double nD = 123.123456;
        float nF = 123.123456F;//Se coloca F al ultimo apra diferenciarlo del double
    
        var salario = 1000;//"var" reconoce el tipo de dato de manera automatica
        //Pension 3%
        var pension = salario * 0.03;
        var total = salario - pension;
        System.out.println(salario);
        System.out.println(pension);
        System.out.println(total);

        var job = "Nidia";
        System.out.println("El salario de: "+job+" es: "+total);
    }
}