public class MatematicOperation {
    public static void main(String[] args) {
        double x = 2;
        double y = 3;
        //Nos devuelve el valor de PI
        System.out.println(Math.PI);
        //Método ceil redondea el número hacia arriba
        System.out.println(Math.floor(x));
        //Método pow devuelve un numero elevado a otro numero
        System.out.println(Math.pow(x, y));
        //Método max devuelve el número mayor entre dos numeros
        System.out.println(Math.max(x,y));
        //Método sqrt devuelve la raiz cuadrada de un número
        System.out.println(Math.sqrt(y));

        //Area circulo
        System.out.println(Math.PI*Math.pow(y,2));

        //Area de una esfera
        //4*PI*R
        System.out.println(4 * Math.PI * Math.pow(y,2));

        //Volumen de una esfera
        //(4/3) * PI * r3
        System.out.println((4/3) * Math.PI * Math.pow(y,3));
    }
}