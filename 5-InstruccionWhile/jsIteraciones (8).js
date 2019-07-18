function mostrar() {

	var flag = 0;
	var positivo = 0;
	var negativo = 1;
	var numero;

	var respuesta = 'si';

	do {

		numero = parseInt(prompt("Ingrese un numero"));

		while (isNaN(numero)) {
			alert("No es un numero");
			numero = parseInt(prompt("Ingrese un numero"));
		}
		respuesta = prompt("¿Quiere ingresar un numero?").toLowerCase();

		if (numero >= 0) {

			positivo+= numero
		}
		else {

			negativo = numero*negativo;
		}
	
	}while (respuesta == "si");

	document.getElementById('suma').value = positivo;

	if(flag == 0){
		negativo = 0
	}
	document.getElementById('producto').value = negativo;

}//FIN DE LA FUNCIÓN