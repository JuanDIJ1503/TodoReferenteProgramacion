dineroCofla = prompt("Cuanto dinero tienes Cofla?");
dineroPedro = prompt("Cuanto dinero tienes Pedro?");
dineroRoberto = prompt("Cuanto dinero tienes Roberto?");


//Para Cofla
if(dineroCofla >= 0.6 && dineroCofla < 1){
    alert("Cofla; Comprate el helado de agua");
    alert("Y te sobran " + (dineroCofla - 0.6));
}
else if(dineroCofla >= 1 && dineroCofla < 1.6){
    alert("Cofla; Comprate el helado de crema");
    alert("Y te sobran " + (dineroCofla - 1));
}
else if(dineroCofla >= 1.6 && dineroCofla < 1.7){
    alert("Cofla; Comprate un helado marca Heladix");
    alert("Y te sobran " + (dineroCofla - 1.6))
}
else if(dineroCofla >=1.7 && dineroCofla < 1.8){
    alert("Cofla; Comprate un helado marca Heladovich");
    alert("Y te sobran " + (dineroCofla - 1.7));
}
else if(dineroCofla >=1.8 && dineroCofla < 2.9){
    alert("Cofla; Comprate un helado marca Helardo");
    alert("Y te sobran " + (dineroCofla - 1.8));
}
else if(dineroCofla >=2.9){
    alert("Cofla; Comprate helado con confites o el pote de 1/4 Kg");
    alert("Y te sobran " + (dineroCofla - 2.9));
}
else{
    alert("No te alcanza para nada Cofla");
}


//Para Pedro
if(dineroPedro >= 0.6 && dineroPedro < 1){
    alert("Pedro; Comprate el helado de agua");
}
else if(dineroPedro >= 1 && dineroPedro < 1.6){
    alert("Pedro; Comprate el helado de crema");
}
else if(dineroPedro >= 1.6 && dineroPedro < 1.7){
    alert("Pedro; Comprate un helado marca Heladix");
}
else if(dineroPedro >=1.7 && dineroPedro < 1.8){
    alert("Pedro; Comprate un helado marca Heladovich");
}
else if(dineroPedro >=1.8 && dineroPedro < 2.9){
    alert("Pedro; Comprate un helado marca Helardo");
}
else if(dineroPedro >=2.9){
    alert("Pedro; Comprate helado con confites o el pote de 1/4 Kg");
}
else{
    alert("No te alcanza para nada Pedro")
}

//Para Roberto
if(dineroRoberto >= 0.6 && dineroRoberto < 1){
    alert("Comprate el helado de agua");
}
else if(dineroRoberto >= 1 && dineroRoberto < 1.6){
    alert("Roberto; Comprate el helado de crema");
}
else if(dineroRoberto >= 1.6 && dineroRoberto < 1.7){
    alert("Roberto; Comprate un helado marca Heladix");
}
else if(dineroRoberto >=1.7 && dineroRoberto < 1.8){
    alert("Roberto; Comprate un helado marca Heladovich");
}
else if(dineroRoberto >=1.8 && dineroRoberto < 2.9){
    alert("Roberto; Comprate un helado marca Helardo");
}
else if(dineroRoberto >=2.9){
    alert("Roberto; Comprate helado con confites o el pote de 1/4 Kg");
}
else{
    alert("No te alcanza para nada Roberto");
}




