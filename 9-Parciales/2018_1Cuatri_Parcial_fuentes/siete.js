function mostrar() {

    var sexo;
    var alumno;
    var notas;
    var acumNotas = 0;
    var sexoBajo;
    var notaBaja;
    var contadorV6 = 0;
    var flag = 0;
    var promedio


    for (alumno = 1; alumno <= 5; alumno++) {

        notas = parseInt(prompt("Ingrese un numero:"));
       //while( notas < 0 || notas > 10 || isNaN(notas))
        while( !(notas>= 0 && notas<= 10)){

            notas = parseInt(prompt("Reingrese un numero:"));
        }

        sexo = prompt("Ingrese el sexo:").toLowerCase();
       
        while( !(sexo == 'f' || sexo == 'm')){

           sexo = prompt("Reingrese el sexo:").toLowerCase();
        }
    }

    acumNotas += notas;

if ( notas < notaBaja || flag == 0){

    notaBaja = notas;
    sexoBajo = sexo;
    flag == 1
}

if ( sexo == 'm' && notas >= 6){

    contadorV6++
}

promedio = acumNotas / 5

alert("Promedio: " + promedio +  "\nNota mas baja: " + notaBaja + " " + sexoBajo + "\nCantidad de varones notas >=6: " + contadorV6);
}