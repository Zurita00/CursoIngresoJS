/*4.	Para el departamento de iluminación:
Tomando en cuenta que todas las lámparas están en oferta al mismo precio de $35 pesos final.
A.	Si compra 6 o más  lamparitas bajo consumo tiene un descuento del 50%. 
B.	Si compra 5  lamparitas bajo consumo marca "ArgentinaLuz" se hace un descuento del 40 % y si es de otra marca el descuento es del 30%.
C.	Si compra 4  lamparitas bajo consumo marca "ArgentinaLuz" o “FelipeLamparas” se hace un descuento del 25 % y si es de otra marca el descuento es del 20%.
D.	Si compra 3  lamparitas bajo consumo marca "ArgentinaLuz"  el descuento es del 15%, si es  “FelipeLamparas” se hace un descuento del 10 % y si es de otra marca un 5%.
E.	Si el importe final con descuento suma más de $120  se debe sumar un 10% de ingresos brutos en informar del impuesto con el siguiente mensaje:
 ”Usted pago X de IIBB.”, siendo X el impuesto que se pagó. 

 */
function CalcularPrecio() {
    var cantidad;
    var marca;
    var porcentajeDescuento = 0;
    var precio = 35;
    var precioFinal;
    var impuesto;
    var suma;

    cantidad = document.getElementById("Cantidad").value;
    marca = document.getElementById("Marca").value;

    switch (cantidad) {

        case 1:
        case 2:
            porcentajeDescuento;
            break;
        case 3:
            if (marca == "Argentin  aLuz") {
                porcentajeDescuento = .15
            }
            else if (marca == "Felipe") {
                porcentajeDescuento = .10
            }
            else {
                porcentajeDescuento = .5
            }
            break;
        case 4: if (marca == "ArgentinaLuz" || marca == "FelipeLamparas") {
            porcentajeDescuento = .25
        }

        else {
            porcentajeDescuento = .20
        }
            break;

        case 5: if (marca == "ArgentinaLuz") {
            porcentajeDescuento = .40
        }
        else {
            porcentajeDescuento = .30
        }
            break;

        default:
            porcentajeDescuento = .50;
            break;

    }
    if (cantidad = 3) {

        precioFinal = precio * porcentajeDescuento;
    }

    else if (cantidad = 4) {

        precioFinal = precio * porcentajeDescuento;
    }


    else if (cantidad = 5) {

        precioFinal = precio * porcentajeDescuento;
    }


    else {
        precioFinal = precio * porcentajeDescuento;


    }


    if (precioFinal > 120) {

        impuesto = precioFinal * .1;
        precioFinal = impuesto + precioFinal;
    }

    document.getElementById("precioDescuento").value = precioFinsal;
}

//while ( !(cantidad > 0)){  //isNaN())

