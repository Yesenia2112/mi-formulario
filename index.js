document.getElementById("registroForm").addEventListener("submit", function(event) {
    event.preventDefault();

    // Obtener los valores del formulario
    var nombre = document.getElementById("nombre").value;
    var email = document.getElementById("email").value;
    var password = document.getElementById("password").value;

    // Puedes realizar acciones con los datos, como enviarlos a un servidor, almacenarlos en localStorage, etc.
    console.log("Nombre: " + nombre);
    console.log("Email: " + email);
    console.log("Contraseña: " + password);
});
