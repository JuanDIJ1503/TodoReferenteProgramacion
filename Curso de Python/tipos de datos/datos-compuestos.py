#Creando una lista (se puede modificar)
lista = ["Lucas Dalto","Soy Dalto",True,1.85,"Soy Dalto"]
#Creando una tupla (no se puede modificar)
tupla = ("Lucas Dalto","Soy Dalto",True,1.85,"Soy Dalto")

#Esto es valido
lista[3] = "Maquinola"

#Esto no es valido. Las tuplas va con corchete apesar de que se declara con parentesis
#tupla [3]= "Maquinola"

#creando un conjunto (set) (no se accede a elementos por indice, no almacena datos duplicados )
conjunto = {"Lucas Dalto","Soy Dalto",True,1.85,"Soy Dalto"}

#print(conjunto[3]) -> no se puede acceder al elemento


#creando un diccionario (dict) (la estructura es key : value y separamos con comas)
diccionario = {
    'nombre' : "Lucas Dalto",
    'canal' : "Soy Dalto",
    'esta_emocionado' : True,
    'altura' : 1.85,
    'dato_duplicado' : "Soy Dalto"
}

print(diccionario['altura'] + 2)
print(lista[3])