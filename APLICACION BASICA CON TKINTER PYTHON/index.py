from tkinter import ttk #Bibloteca que nos permite crear interfaz
from tkinter import*

import sqlite3 #Modulo de conexión con sqlite

class Producto: #Se crea una clase
    def __init__(self,ventana):
        self.wind = ventana #Inciamos el atributo de clase self.wind
        self.wind.title("Products Application") #Pone un titulo a nuestra ventana
        
        #Creamos recuadro para contenido
        frame = LabelFrame(self.wind,text="Register a new product")#Creará un marco al contenido, con un titulo
        frame.grid(row=0,column=0,columnspan=3,pady=30)#Posicionamos el elemento
        
        #Name input
        Label(frame,text="Name: ").grid(row=1,column=0)
        self.userInput = Entry(frame)#Crea un cuadro de entrada de datos para el usuario
        self.userInput.focus()#Da foco a UserInput ni bien se ejecuta la aplicación
        self.userInput.grid(row=1,column=1)
        
        #Price Input
        Label(frame,text="Price: ").grid(row=2,column=0)
        self.priceInput = Entry(frame,bg="yellow")
        self.priceInput.grid(row=2,column=1)
        
        ttk.Button(frame,text="Save Product").grid(row=3,columnspan=2,sticky=W+E)#Crea un boton
        
        #Table
        self.table = ttk.Treeview(height=10,columns=2)#Crea una tabla
        self.table.grid(row=4,column=0,columnspan=2)
if __name__ == '__main__':
    ventana = Tk() #Crea una ventana principal
    aplication = Producto(ventana) #Instanciamos la clase Producto
    ventana.mainloop() #Mantiene la ventana abierta