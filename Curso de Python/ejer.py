# diccionario = {
#     "Juana" : "Paris",
#     "Pablo" : "Misa",
#     "Mariana" : "Parque"
# }

# for nombres,lugaresfav in diccionario.items():
#     print(f"{nombres} le gusta ir a {lugaresfav}")

cadena = "Eo"
frecuencia = {}

for letra in cadena:
    if letra not in frecuencia:
        frecuencia[letra] = 1
    else:
        frecuencia[letra] += 1

for letra, frec in frecuencia.items():
    print(f"La letra {letra} aparece {frec} veces.")