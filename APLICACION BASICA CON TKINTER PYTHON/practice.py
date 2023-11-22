from tkinter import*

class Aplication:
    def __init__(self,ventana):
        self.ventana = ventana
        self.ventana.title("Hola Tkinter")
if __name__ == '__main__':
    ventana = Tk()
    Aplication(ventana)
    ventana.mainloop()