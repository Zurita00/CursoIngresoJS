function mostrar()
{
    var numero;
    var numero2;
    var suma;
    var resta;

    var numero1 = parseInt(prompt("Ingrese el primer numero: "));
    var numero2 = parseInt(prompt("Ingrese el segundo numero: "));

    if ( numero1 == numero2){

        alert(numero1 +""+ numero2);
    }

    if ( numero1 > numero2){

        resta = numero1 - numero2;

        alert(resta);
    }
        else{
            suma = numero1 + numero2;

            alert(suma);
        }
        
    if ( suma > 10 ){

        alert("La suma es " + suma + " y supero el 10.");
    }
}
