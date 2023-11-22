diccionario = {
    "nombre" : 'lucas',
    "apellido" : 'dalto',
    "subs" : 1000000,
}
#Nos devuelve un objeto dict_item
claves = diccionario.keys()

#Obteniendo un elemento con get() (no me lanza una excepción y si no encuentra nada el programa continua)
valor_de_asdaskj = diccionario.get("asdaskj")
print("Hola, el programa continua")

#eliminando todo del diccionario
# diccionario.clear()

#eliminando un elemento del diccionario
diccionario.pop("subs")

#obteniendo un elemento dict_items iterable
diccionario_iterable = diccionario.items()

print(diccionario_iterable)