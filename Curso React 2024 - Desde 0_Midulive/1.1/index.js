const boton = document.querySelectorAll("button");

boton.forEach((boton) => {
  boton.addEventListener("click", () => {
    const id = boton.getAttribute("data-id");

    if (boton.classList.contains("liked")) {
      boton.classList.remove("liked");
      boton.innerText = "Me gusta";
    } else {
      boton.classList.add("liked");
      boton.innerText = "Quitar Me Gusta";
    }
  });
});
