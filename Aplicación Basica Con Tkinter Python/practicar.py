from tkinter import*

class Product:
    def __init__(self,ventana):
        self.ventana = ventana
        self.ventana.title("Titulo de mi ventana")
        
        boton = Button(self.ventana,text="Boton")
        cuadro = LabelFrame(self.ventana,labelwidget=boton,labelanchor="e",relief=FLAT)#Crea un cuadro que rodea el contenido
        cuadro.pack()
        
        texto = Label(cuadro,text="Hola como estas")
        texto.pack()
if __name__ == '__main__':
    ventana = Tk()
    aplicacion = Product(ventana)
    ventana.mainloop()

