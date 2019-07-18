function mostrar()
{

	var positivo;
	var negativo;
	var pares;
	var ceros;
	var contador = 0;
	var numero;
	var seguir = "si"
	var promedio
	
	do {
		numero = parseInt(prompt("Ingrese un numnero"));

		if ( numero > 0 ){

			positivo = numero;

		}

		else if ( numero < 0){

			negativo = numero;

		}
		else { 
			numero = ceros;
		}


		if ( numero = numero%2){

			pares = numero
		}

		seguir = prompt("¿Quiere agregar mas numeros?");

		//fijarme si es positivo/negativo/cero
		//si es par
		//si quiere continuar

	} while ( seguir == "si");

	document.write()
	//promedios de negativo y positivo
	// diferencia entre negativos y positivos




}//FIN DE LA FUNCIÓN