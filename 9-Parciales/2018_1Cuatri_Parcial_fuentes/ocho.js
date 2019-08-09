function mostrar() {

    var letra;
    var numero;
    var seguir;
    var contadorPares = 0;
    var contadorImpares = 0;
    var contadorCeros = 0;
    var numPositivos = 0;
    var contPositivos = 0;
    var numNegativos = 0;
    var numMaximo;
    var numMinimo;
    var letraMaximo;
    var letraMinimo;
    var flag = 0;
    var promedio;

    do {

        letra = prompt("Ingrese una letra: ").toLowerCase();

        numero = parseInt(prompt(" Ingrese un numero: "));

        while (!(numero >= -100 && numero <= 100)) {

            numero = parseInt(prompt("Error. Reingrese un numero: "));
        }

        if (numero % 2 == 0){ 
            contadorPares++;
        }
        else { 

            contadorImpares++;

        }

        if (numero > 0) { 

            numPositivos += numero; 
            contPositivos++;

        } else if (numero < 0 ){ 

            numNegativos += numero; 
        }
        else{

            contadorCeros++; 
        }


        if ( numero < numMinimo || flag == 0 ){

            numMinimo = numero; 
            letraMinimo = letra; 

        }

        if( numero > numMaximo || flag == 0 ){ 

            numMaximo = numero; 
            letraMaximo = letra; 
            flag = 1 ;
        }

            seguir = prompt("Quiere seguir? ");

    } while (seguir == 's');


    if ( contPositivos != 0 ){
    promedio = numPositivos / contPositivos;
    }

    document.write("Cantidad de números pares: " + contadorPares + "<br>");
    document.write("Cantidad de números impares: " + contadorImpares + "<br>" );
    document.write("Cantidad de ceros: " + contadorCeros + "<br>" );
    document.write("Promedio de todos los números positivos: " + promedio + "<br>" );
    document.write("Suma de todos los números negativos: " + numNegativos + "<br>" );
    document.write("Numero y letra maximo: " + numMaximo + " " + letraMaximo + "<br>" );
    document.write("Numero y letra minimo: " + numMinimo + " " + letraMinimo + "<br>" );
    
}
