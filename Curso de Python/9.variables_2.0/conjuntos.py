# #Creando un conjunto con set()
# conjunto = set(["Dato1","Dato2","Dato3"])

# #Metiendo un conjunto dentro de otro conjunto
# conjunto1 = frozenset(["Dato 1","Dato 2"])
# conjunto2 = {conjunto1,"Dato3"}

# #Teoria de conjuntos
# conjunto1 = {1,3,5,-10,7}
# conjunto2 = {1,3}

#Verificado si es un subconjunto
# resultado = conjunto2.issubset(conjunto1)
# resultado = conjunto2 <= conjunto1


# # Verificando si es un superconjunto
# resultado = conjunto1.issuperset(conjunto2)
# resultado = conjunto2 > conjunto1 #Otra forma de verificar


# #Verificando si tienen un número en común
# resultado = conjunto1.isdisjoint(conjunto2)

# print(resultado)


# # Crear una lista
# my_list = frozenset(['apple', 'banana', 'cherry'])

# print(my_list)


# Crear dos frozensets

fs1 = ([1, 2, 3])

fs1.append(4)

print(fs1)