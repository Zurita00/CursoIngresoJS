/*1.	Para el departamento de facturación:
A.	Ingresar tres precios de productos y mostrar la suma de los mismos.
B.	Ingresar tres precios de productos y mostrar el promedio de los mismos.
C.	ingresar tres precios de productos  y mostrar precio final (más IVA 21%).
*/
function Sumar () 
{
    var num1;
    var num2;
    var num3;
    var suma;
    
    
    num1 = parseFloat(document.getElementById("PrecioUno").value); 
    num2 = parseFloat(document.getElementById("PrecioDos").value);
    num3 = parseFloat(document.getElementById("PrecioTres").value);

    suma = num1+num2+num3;

    alert("La suma es " + suma);
}
function Promedio () 
{
    var num1;
    var num2;
    var num3;
    var promedio;
    
    
    num1 = parseFloat(document.getElementById("PrecioUno").value); 
    num2 = parseFloat(document.getElementById("PrecioDos").value);
    num3 = parseFloat(document.getElementById("PrecioTres").value);

    promedio = (num1+num2+num3)/3;

    alert("El promedio es " + promedio );
}
function PrecioFinal () 
{
	var num1;
    var num2;
    var num3;
    var subTotal;
    var precioFinal;
    var iva;
    
    
    num1 = parseFloat(document.getElementById("PrecioUno").value); 
    num2 = parseFloat(document.getElementById("PrecioDos").value);
    num3 = parseFloat(document.getElementById("PrecioTres").value);

    subTotal = num1 + num2 + num3;
    iva =  (num1 + num2 + num3)*.21;
    precioFinal = subTotal + iva

    alert("El precio final es " + precioFinal );
}