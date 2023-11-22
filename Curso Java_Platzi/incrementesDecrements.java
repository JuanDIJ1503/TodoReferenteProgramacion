public class incrementesDecrements {
    public static void main(String[] args) {
        int lives = 5;
        //El "--" decrementa la variable en 1. Primero se dirije a la variable y luego decrementa
        lives--;
        //System.out.println(lives);

        //El "++" incrementa la variable en 1. Primero se diriji a la variable y luego incrementa
        lives++;
        //System.out.println(lives);

        //Hasta aqui lives vale 5

        //Postfijo
        int puntos = 100 + lives++;//No incrementa a 6 xq primero accedio a la variable pero luego no lo incremento
        System.out.println("Con postfijo: "+puntos);

        //Hasta aqui lives vale 6

        //Prefijo
        int puntos2 = 100 + ++lives;//Aqui incrementa a 7 xq primero le decimos que incremente a la variable
        System.out.println("Con prefijo: "+puntos2);
    }
}