	function mostrar()
	{
	var numero;
	var maximo;
	var minimo;
	var flag =  0 ;
	var respuesta = "si" ;
	
	do {
		numero = parseInt(prompt("Ingrese un numero:"));

		while (isNaN(numero)) {
			alert("No es un numero");
			numero = parseInt(prompt("Ingrese un numero:"));
		}
			// la primera vez numero es undefainer pero flag es verdadero; la primera vez entra
			if (numero > maximo || flag == 0 ) { // x aca pero se pisa su valor x el otro if

				maximo = numero;
			}
			// tambien el flag nos hace entrar aca xq su condicion es V y recien aca
			if (numero < minimo || flag == 0 ) { // maximo y minimo reciben un valor
				
				minimo = numero;

				flag =  1  // aca es donde se cambia el valor y no vuelve a entrar x aca
			}

		// pregunto si quiero ingresar otro numero (fuera de los ifs pero dentro del while)
		respuesta = prompt("¿Quiere ingresar otro numero?");

	} while (respuesta == "si"); // si la respuesta es igual a "si" va a volver a entrar al bucle


	document.getElementById( "maximo" ).value = maximo;
	document.getElementById( "minimo" ).value = minimo;
}
