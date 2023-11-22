public class Casting {
    public static void main(String[] args) {
        // //En un año ubique 30 perritos
        // //¿Cuantos perritos ubique al mes?
        // double monthLyDogs = 30.0/12.0;
        // System.out.println(monthLyDogs);
        
        // //Estimación
        // int estimateMonthLyDogs = (int) monthLyDogs;//Eliminara los decimales sin redondear al número si se pasa de double a int
        // System.out.println("Con estimación: "+estimateMonthLyDogs);

        //Exactitud
        int a = 30;
        int b = 12;
        System.out.println("Con exactitud: "+(double)a/b);


        double c = a / b; //Esto casteara el resultado automaticamente
        System.out.println(c);


        //En este caso char si cabe dentro de un int
        char n = '1';//Almacena un caracter
        int nEntero = n;//Convertimos char a int
        System.out.println(nEntero);
        
        //En este otro caso un char no cabe dentro de un short
        short nS = (short)n;//Aqui si se requiere casteo
        System.out.println(nS);

    }
}
