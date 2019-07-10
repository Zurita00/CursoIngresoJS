function mostrar() {
    //tomo la edad  
    var edad;
    edad = parseInt(document.getElementById("edad").value);

    document.getElementById("estadoCivil").value = "Soltero"

    if (edad < 18) {

        alert("Es muy pequeño para no ser soltero")
    }

}//FIN DE LA FUNCIÓN