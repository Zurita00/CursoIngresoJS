/*3.	Para el departamento de Pinturas:
A.	Al ingresar una temperatura en Fahrenheit debemos mostrar la temperatura en Centígrados con un mensaje concatenado (ej.: " 32 Fahrenheit son 0 centígrados").
B.	Al ingresar una temperatura en Centígrados debemos mostrar la temperatura en Fahrenheit (ej.: "0  centígrados son 32 Fahrenheit ").
*/
function FahrenheitCentigrados () 
{
    var temperatura;
    var pase;
    
    temperatura = document.getElementById("Temperatura").value;

    pase = (temperatura - temperatura)* 5/9 

    alert(temperatura + " Fahrenheit son: "+ pase  );
}

function CentigradosFahrenheit () 
{
	var temperatura;
    var pase1 = 0;
    var pase; 
    
    temperatura = document.getElementById("Temperatura").value;

    pase = (temperatura* 9/5) + 32;//(0 °C × 9/5) + 32 = 32 °F


    alert(temperatura + " Fahrenheit son: "+ pase  );
}
