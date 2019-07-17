function mostrar() {
	var numero;
	var suma = 0; //siempre debe tener un valor inicial
	var contador = 0; // idem

	while (contador < 5) {

		numero = parseInt(prompt("Ingrese un numero: ")); //los numeros que se ingresan son acumulados dentro de la variable
		suma += numero; //suma = suma + numero

		contador++// contador = contador + 1
	}

	document.getElementById("suma").value = suma; //es la suma acumulada
	document.getElementById("promedio").value = suma / 5; 

}//FIN DE LA FUNCIÓN