function mostrar() {

    var marca;
    var peso;
    var temperatura;
    var seguir;
    var cantidadPeso;
    var contPeso = 0
    var tempPar = 0;
    var marPesado;
    var contMar = 0;
    var productos = 0;
    var minimo = 0;
    var maximo = 0;
    var promedio = 0;
    var flag = 0;

    do {

        marca = prompt("Ingrese la marca: ");
        peso = parseInt(prompt("Ingrese el peso entre el 1 y 100: "));
        while (peso < 1 || peso > 100 && isNaN(peso)) {

            peso = parseInt(prompt("Reingrese el peso: "));
        }
        temperatura = parseInt(prompt("Ingrese la temperatura: "));
        while (temperatura < -30 || temperatura > 30 && isNaN(temperatura)) {

            temperatura = parseInt(prompt("Reingrese la temperatura: "));
        } seguir = prompt("¿Quiere seguir?");
        
        if( peso > 1 && peso < 100){
            cantidadPeso = peso;
            contPeso++
        }

        if (temperatura % 2 == 0) {

            tempPar++
        }
        if (peso > 0) {

            marPesado = marca;
            contMar++
        }

        if (temperatura < 0) {

            productos++;
        }

        if (peso < minimo || flag == 0) {
            minimo = peso;
        }
        if (peso > maximo || flag == 0) {
            maximo = peso;
            flag=1;
        }
        

    } while (seguir == 's');


    if (contPeso != 0) {
        promedio = cantidadPeso /contPeso ;
    }

   document.write("Cantidad de temperaturas pares: " + tempPar + "<br>" );
   document.write("La marca del producto mas pesado: " + marPesado + "<br>");
   document.write("Cantidad de productos que se conservan a menos de 0 grados: " + productos + "<br>");
   document.write("El promedio del peso de todos los productos: " + promedio + "<br>");
   document.write("El peso máximo: " + maximo + "<br>");
   document.write("El peso minimo: " + minimo + "<br>");
    

}