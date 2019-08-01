function mostrar()
{
//es la misma vrga pero con diferentes palabras
        var letra;
        var num;
        var seguir;
        var numPar = 0;
        var numImpar = 0;
        var ceros = 0;
        var promedio = 0;
        var numPos = 0;
        var contPos = 0;
        var numNeg=0;
        var minimo;
        var maximo;
        var lMinimo;
        var lMaximo;
        var flag = 0;
    
        do {
    
            letra = prompt("Ingrese una letra: ");
            num = parseInt(prompt("Ingrese un numero entre el -100 y 100: "));
    
            while (num < -100 || num > 100 && isNaN(num)) {
    
                num = parseInt(prompt("Reingrese un numero: "));
            }
            seguir = prompt("¿Quiere seguir?");
    
            if (num % 2 == 0) {
    
                numPar++
            }
            else {
                numImpar++
            }
    
    
            if (num > 0) {
    
                numPos += num
                contPos ++
            }
            else if (num < 0) {
    
                numNeg+=num
    
            }
    
            else {
                ceros++
            }
    
            if( num < minimo || flag == 0){
                minimo = num
                lMinimo = letra
            }
            if ( num > maximo || flag == 0 ){
                maximo = num
                lMaximo = letra
    
            }
    
        } while (seguir == 's');
    
    if( contPos !=0 ){
        promedio = numPos / contPos;
    }
    
    document.write("Cantidad de numeros pares: " + numPar + "<br>");
    document.write("Cantidad de numeros impares: " + numImpar + "<br>");
    document.write("Cantidad de ceros: " + ceros + "<br>");
    document.write("Promedio de los numeros positivos: "+ promedio + "<br>");
    document.write("Suma de los numeros negativos:" + numNeg + "<br>");
    document.write("Numero y letra del maximo: " + maximo + " " + lMaximo + "<br>");
    document.write("Numero y letra del minimo: " + minimo + " " + lMinimo + "<br>");
    
    }

