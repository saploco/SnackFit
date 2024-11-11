document.querySelector("form").addEventListener("submit", function(event) {
    event.preventDefault();
    
    var nombre = document.getElementById("nombre").value.trim();
    var email = document.getElementById("email").value.trim();
    var mensaje = document.getElementById("mensaje").value.trim();

    if (nombre && email && mensaje) {
        alert("¡Gracias por tu mensaje, " + nombre + "! Nos pondremos en contacto contigo pronto.");
        document.querySelector("form").reset();
    } else {
        alert("Por favor, completa todos los campos antes de enviar.");
    }
});
