# #Creando una lista con list()
# lista = list([34,56,23,True,False,False])

# #Devuelve la cantidad de elementos de una lista
# cantidad_elementos = len(lista)

# #agregando un elemento a la lista
# lista.append("JAJAJAJ")

# #Agregando un elemento a la lista en un indice especifico
# lista.insert(4,"TOMO")

# #Agregando varios elementos a la lista
# lista.extend([False,2023])

# #Eliminando un elemento de la lista por su indice
# lista.pop(-2)

# #Removiendo un elemnto de la lista por su valor
# lista.remove("dalto")

# #ordenando la lista de forma ascendente
# lista.sort()

# #Invierte los elementos de la lista
# lista.reverse()

# #Verificando si un elemento se encuentra en la lista
# elemento_encontrado = lista.index(56)

# # #Eliminando todos los elementos de la lista
# # lista.clear()

# print(dir(elemento_encontrado))

#Dado un diccionario de nombres y edades, imprimir los nombres de las personas mayores de 18 años:
# diccionario = {
#     "Euro" : "€",
#     "Dollar" : "$",
#     "Yen" : "¥"
# }
# divisa = input("Ingrese la divisa: ")

# print(diccionario.get(divisa,"La divisa no esta"))


#Escribir un programa que pregunte al usuario su nombre, edad, dirección y teléfono y lo guarde en un diccionario.
# diccionario = {
    
# }

# diccionario["nombre"] = input("Ingrese su nombre: ")
# diccionario["edad"] = int(input("Ingrese su edad: "))
# diccionario["direccion"] = input("Ingrese su dirección: ")
# diccionario["telefono"] = int(input("Ingrese su telefono: "))

# print(diccionario.get("nombre"),"tiene",diccionario.get("edad"),"años, vive en",diccionario.get("direccion"),"y su número de telefono es",diccionario.get("telefono"))


# #ejercicio 3
# diccionario = {
#     "Platano" : 1.35,
#     "Manzana" : 0.80,
#     "Pera" : 0.85,
#     "Naranja" : 0.70
# }
# fruta = input("Ingrese una fruta: ")
# kilos = float(input("Ingrese un número de kilos: "))


# if fruta in diccionario:
#     print(fruta,"Cuesta: ",kilos * diccionario[fruta])
# else:
#     print(f"La fruta {fruta} no se encuentra en el diccionario")



# c = 0
# for i in range(1,6):
#     print(f"Ingrese {i} número: ")
#     n = int(input())
    
#     if(n >= 1):
#         c = c + 1

# print(f"Hay {c} números positivos")


# s = 0
# for i in range(1,6):
#     n = int(input(f"Ingrese {i}° número: "))
    
#     if(n > 10):
#         s = n + s
# print("La suma de los que fueron mayores que 10 es:",s)



# c = 0
# s = 0
# for i in range(1,6):
#     n = int(input(f"Ingresar {i}° número: "))
    
#     if ((n % 2) ==0):
#         c = c + 1
#     else:
#         s = s + n
# print("-------------------------------------------------")
# print(f"Fueron pares {c} número(s)")
# print(f"La suma de los impares fue {s}")

# for i in range(1,3):
#     n = int(input(f"Ingrese {i}° número entero: "))
    
#     if((n % 2) == 0):
#         p = n
#     else:
#         im = n
# print(f"El número {p} es par")
# print(f"El número {im} es impar")

# Definimos una función para cada operación
def suma(a, b):
    return a + b

def resta(a, b):
    return a - b

def multiplicacion(a, b):
    return a * b

def division(a, b):
    return a / b

# Pedimos al usuario que ingrese los números y la operación deseada
num1 = float(input("Ingresa el primer número: "))
num2 = float(input("Ingresa el segundo número: "))
operacion = input("Ingresa la operación deseada (+, -, *, /): ")

# Realizamos la operación correspondiente
if operacion == "+":
    resultado = suma(num1, num2)
elif operacion == "-":
    resultado = resta(num1, num2)
elif operacion == "*":
    resultado = multiplicacion(num1, num2)
elif operacion == "/":
    resultado = division(num1, num2)
else:
    print("Operación no válida")

# Mostramos el resultado
print("El resultado es:", resultado)