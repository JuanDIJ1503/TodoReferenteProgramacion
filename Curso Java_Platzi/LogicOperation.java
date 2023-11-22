public class LogicOperation {
    public static void main(String[] args){
        int a  = 8;
        int b  = 7;
        //Operadores de equidad
        System.out.println("A es igual a b? ->"+(a == b));
        System.out.println("A es diferente a b ->"+(a!=b));
        //Operadores relacionales
        System.out.println("A es mayor a b? ->"+(a > b));
        System.out.println("A es mayor a b? ->"+(a < b));
        System.out.println("A es mayor a b? ->"+(a >= b));
        System.out.println("A es mayor a b? ->"+(a <= b));

        if(a == b){
            System.out.println("A es igual a B");
        }else if((a != b)&&(a > b)){
            System.out.println("A es diferente a B y B mayor a A");
        }else if(a > b){
            System.out.println("A es mayor es B");
        }else if(a < b){
            System.out.println("A es menor a B");
        }else if(a >= b){
            System.out.println("A es mayor o igual a B");
        }else if(a <= b){
            System.out.println("A es menor o igual a B");
        }

    }
}
