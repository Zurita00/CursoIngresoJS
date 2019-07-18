function mostrar() {

	var flag = 0;
	var minimo;
	var maximo;
	var numero;
	var respuesta = 'si';

	do {

		numero = parseInt(prompt("Ingrese un numero: "));

			if (numero > maximo || flag == 0) {
				maximo = numero;
			}
			if (numero < minimo || flag == 0) {
				mimimo = numero;
				flag = 1;
			}

		respuesta = prompt("¿Quiere ingresar mas numeros?");

	} while (respuesta == "si");


	document.getElementById("minimo").value = minimo;
	document.getElementById('maximo').value = maximo;


}//FIN DE LA FUNCIÓN