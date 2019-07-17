function mostrar() {

    var clave = prompt("ingrese el número clave.");

    while (clave != "utn750") {

        alert("La clave es incorrecta");

        clave = prompt("Reingrese la clave");
    }

    alert("La clave: " + clave + " es correcta");

}