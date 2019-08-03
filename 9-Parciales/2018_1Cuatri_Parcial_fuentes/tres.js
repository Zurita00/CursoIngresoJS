function mostrar()
{
 var precio;
 var descuento;
 var precioFinal;

 precio = parseFloat(prompt("Ingrese el precio: "));
 descuento = parseFloat(prompt("Ingrese el descuento: "));

 precioFinal = (precio * descuento)/100

 document.getElementById("elPrecioFinal").value = precioFinal;
}
