function mostrar() {
    //tomo la edad  
    var edad;
    var estadoCivil;
    edad = parseInt(document.getElementById("edad").value);
    estadoCivil = document.getElementById("estadoCivil").value;

    if (edad < 18 && estadoCivil != "Soltero") { // Si la edad es menor de 18 y el estado civil es DISTINTO a Soltero

        alert("Es muy pequeño para no estar soltero");
    }

}//FIN DE LA FUNCIÓN