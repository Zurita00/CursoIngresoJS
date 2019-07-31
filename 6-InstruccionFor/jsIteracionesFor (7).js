function mostrar()
{
    var num;
    var divisores = 0;
    var i;

    num = parseInt(prompt("Ingrese un numero: "));

    for ( i = 1; i <= num; i++){

        if ( num % i == 0){
        divisores++
        document.write( i + "<br>");

        }
    }

document.write("Cantidad de divisores "+ divisores);



}//FIN DE LA FUNCIÓN