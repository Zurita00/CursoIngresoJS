/*2.	Para el departamento de Construcción:
A.	 mostrar la cantidad de alambre a comprar  si se ingresara el largo y el ancho de un terreno rectangular y se debe alambra con tres hilos de alambre.
B.	mostrar la cantidad de alambre a comprar  si se ingresara el radio  de un terreno circular y se debe alambra con tres hilos de alambre.
C.	Para hacer un contrapiso de 1m x 1m se necesitan 2 bolsas de cemento y 3 de cal, debemos mostrar cuantas bolsas se necesitan de cada uno para las medidas que nos ingresen.
*/

function Rectangulo() {
    var largo;
    var ancho;
    var alambre;
    var perimetro;

    largo = parseInt(document.getElementById("Largo").value);
    ancho = parseInt(document.getElementById("Ancho").value);

    perimetro = largo * 2 + ancho * 2;
    alambre = perimetro * 3;

    alert("Se necesitan comprar " + alambre + "mts de alambre");
}
function Circulo() {
    var radio;
    var perimetro;
    var alambre;

    radio = parseInt(document.getElementById("Radio").value);
    perimetro = 2 * Math.PI * radio;

    alambre = perimetro * 3;

    alert("Se necesitan " + alambre.toFixed(2));

}
function Materiales() {
    var largo;
    var ancho;
    var cemento;
    var cal;
    var superficie;

    largo = parseInt(document.getElementById("Largo").value);
    ancho = parseInt(document.getElementById("Ancho").value);

    superficie = largo * ancho;

    cemento = superficie * 2;
    cal = superficie * 3;

    alert("cemento: " + cemento + " cal: " + cal);
}