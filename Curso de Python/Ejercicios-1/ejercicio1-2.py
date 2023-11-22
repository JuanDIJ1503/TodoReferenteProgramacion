frase = input("Dime un frase y te calculo cuanto tardarias en decirla: ")
palabras_separadas =  frase.split(" ")
cantidad_de_palabras = len(palabras_separadas)


if(cantidad_de_palabras > 100):
    print("No te pedi un testamento")
else:
    print(f"Dijiste {cantidad_de_palabras} palabras, y tardarias {cantidad_de_palabras / 2} segundos en decirlo")
    print(f"Dalto lo diria en {cantidad_de_palabras * 100 // 2 * 1.3 / 100} segundos")