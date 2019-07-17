function mostrar()
{

	var numero = parseInt(prompt("ingrese un número entre 0 y 10."));

	while( !(numero <= 9 && numero >= 0) ){ 

		alert( "Numero incorrecto");
		numero = parseInt(prompt("Ingrese un numero nuevamente"));

	}

	document.getElementById("Numero").value = numero + " Es correcto";


}//FIN DE LA FUNCIÓN