public class IfStatement {
    public static void main(String[] args) {
        boolean isBluetootEnable = false;
        int fileSended = 3;

        if(isBluetootEnable){ //Se ejecuta cuando la condición es true
            fileSended++;
            System.out.println("Archivo enviado.");
            System.out.println("Cantidad de archivos enviados:" + fileSended);
            int i  = 0;
            i++;
            System.out.println(i);//Aqui si esta correcto
        }
        else{
            System.out.println("Por favor enciende tu Bluetooth");
        }
        
        
    }
}
