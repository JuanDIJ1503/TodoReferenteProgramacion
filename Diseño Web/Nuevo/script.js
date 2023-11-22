document.getElementById("miFormulario").addEventListener("submit", function(event) {
    event.preventDefault(); // Evitar que se envíe el formulario de forma predeterminada

    var nombre = document.getElementById("nombre").value;
    var correo = document.getElementById("correo").value;
    var mensaje = document.getElementById("mensaje").value;

    var data = {
        nombre: nombre,
        correo: correo,
        mensaje: mensaje
    };

    fetch("60757555@gmail.com", {
        method: "POST",
        headers: {
        "Content-Type": "application/json"
    },
        body: JSON.stringify(data)
    })
    .then(function(response) {
    if (response.ok) {
        alert("El correo electrónico se envió correctamente");
        document.getElementById("miFormulario").reset(); // Restablecer el formulario después del envío
    } else {
        alert("Error al enviar el correo electrónico");
    }
    })
    .catch(function(error) {
    console.error("Error en la solicitud:", error);
    alert("Ocurrió un error en la solicitud");
    });
});