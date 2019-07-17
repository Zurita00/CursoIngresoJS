function mostrar()
{

var sexo = prompt("ingrese f ó m .");
sexo = sexo.toLowerCase()

while ( sexo !="f" && sexo !="m"){

    alert("No valido");
    sexo = prompt("ingrese f o m.");
    sexo = sexo.toLowerCase()
}

document.getElementById('Sexo').value=sexo;

}//FIN DE LA FUNCIÓN