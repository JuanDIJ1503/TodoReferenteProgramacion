cadena1 ="Hola,maquina,Hola,soy,Dalto"
cadena2 = "Bienvenido Maquinola"

#Convierte a mayusculas
mayus = cadena1.upper()

#Convierte a minusculas
minus = cadena1.lower()

#Primera letra en mayuscula
primer_letra_mayus = cadena1.capitalize()

#Buscamos una cadena en otra cadena
busqueda_find = cadena1.find("o")

#Buscamos una cadena en otra cadena, si no hay coincidencia lanza una excepcion
#busqueda_index = cadena1.index("H")

#si es numerico, devolvemos true, sino devolvemos false
es_numerico = cadena1.isnumeric()

#Si es alfanumérico devolvemos true, sino devolvemos false
es_alfanumerico = cadena1.isalpha()

#Contamos coincidencias de una cadena dentro de otra cadena, devuelve la cantidad de coincidencias
contar_coindicencias = cadena1.count("Hola")

#contamos cuantos caracteres tiene una cadena
contar_caracteres = len(cadena1)

#verificamos si una cadena empieza con otra cadena dada, si es asi devuelve true
empieza_con = cadena1.startswith("H")

#verificamos si una cadena termina con otra cadena dada, si es asi devuelve true
termina_con = cadena1.endswith("t")

#reemplaza un pedazo de la cadena dada, por otra dada
cadena_nueva = cadena1.replace("hola","Pedro")

#separar cadenas con la cadena que le pasemos
cadena_separada = cadena1.split(" ")

print(cadena_separada[0])

