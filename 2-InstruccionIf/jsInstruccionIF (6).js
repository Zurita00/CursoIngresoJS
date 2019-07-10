function mostrar() {
    //tomo la edad  

    var edad;
    edad = parseInt(document.getElementById("edad").value);

    if (edad >= 18) { //Si la edad es mayor o igual a 18 es un adulto

        alert("Es un adulto");

    }

    else { // Entonces si es falso es un adolescente o un niño
        if (edad >= 13 && edad <= 17) { //Si es mayor de 13 y menor de 17 es adolescente

            alert("Es adolescente");

        }

        else { //Si es falso que es un adolescente entonces es un niño

            alert("Es un niño")
        }

    }

// if (condicion){        Otra posiblidad para cuando son mas que una condicion 
// }                        sin necesidad de demasiados else o if
// else if (condicion) {   
//}
}//FIN DE LA FUNCIÓN