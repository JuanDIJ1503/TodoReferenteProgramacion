import pygame,sys
from pygame.locals import *

pygame.init()

pantalla = pygame.display.set_mode((400,300))
pygame.display.set_caption("Hola Mundo")

blanco = (255,255,255)
negro = (0,0,0)
rojo = (255,0,0)
azul = (0,0,255)
verde = (0,255,0)

pantalla.fill(verde) #Cambia el color de fondo de una variable. En este caso pantalla

rectangulo = pygame.draw.rect(pantalla,"red",(100,50,100,50)) #Crea un rectangulo

pygame.draw.line(pantalla,azul,(100,104),(300,104),5)





Ejecutar = True
while(Ejecutar):
    for event in pygame.event.get():
        if(event.type == QUIT):
            Ejecutar = False
            break
    pygame.display.update()
