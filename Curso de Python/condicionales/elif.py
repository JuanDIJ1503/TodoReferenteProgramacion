ingreso_mensual = 81
gasto_mensual =  82000

# if anidados y else if (elif)

if ingreso_mensual > 10000:
    if ingreso_mensual - gasto_mensual < 0:
        print("Estas en deficit")
    elif ingreso_mensual - gasto_mensual > 3000:
        print("Estas bien")       
    else:
        print("Estas gastando una banda, hay que ver si te alcanza")

elif ingreso_mensual > 1000:
    print("estas bien en latinoamerica")

elif ingreso_mensual > 500:
    print("estas bien en argentina")

elif ingreso_mensual > 200:
    print("estas bien en venezuela")
    
else:
    print("Eres pobre")