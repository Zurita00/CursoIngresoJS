function mostrar() {

    var num;
    var contPares = 0;
    var i;

    num = parseInt(prompt("Ingrese un numero: "));

    for ( i = 1; i <= num; i++){

        if ( i % 2 == 0){
        contPares++
        document.write( i + "<br>");

        }
    }

document.write("Cantidad de pares "+ contPares);
}//FIN DE LA FUNCIÓN