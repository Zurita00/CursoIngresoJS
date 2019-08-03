function mostrar() {
    var hora = document.getElementById("laHora");
    while (hora > 24 || hora < 1 && isNaN(hora)) {

        alert("Eso no es una hora. Ingrese la hora nuevamente.");
    }
    
    switch (hora) {

        case 6: 
        case 7:
        case 8:
        case 9:
        case 10:
        case 11:
                if (hora >= 6 && hora <= 11) {
                    alert("es de mañana");
                }
                break;
        case 1:
        case 2:
        case 3:
        case 4:
        case 5:
        case 12:
        case 13:
        case 14:
        case 15:
        case 16:
        case 17:
        case 18:
        case 19:
        case 20:
        case 21:
        case 22:
        case 23:
    

   

}

}
