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
    var descuento;
    var precioConDescuento;
    var precio = 35;
    var flag = 0;
    var IIBB;
    var precioFinal;

    cantidad = parseInt(document.getElementById("Cantidad").value);
    marca = document.getElementById("Marca").value;

    switch (cantidad) {

        case 1:
        case 2:
            porcentajeDescuento;
            break;
        case 3:
            if (marca == "ArgentinaLuz") {
                porcentajeDescuento = .15
            }
            else if (marca == "FelipeLamparas") {
                porcentajeDescuento = .1
            }
            else {
                porcentajeDescuento = .05
            }
            break;
        case 4: if (marca == "ArgentinaLuz" || marca == "FelipeLamparas") {
            porcentajeDescuento = .25
        }

        else {
            porcentajeDescuento = .2
        }
            break;

        case 5: if (marca == "ArgentinaLuz") {
            porcentajeDescuento = .4
        }
        else {
            porcentajeDescuento = .3
        }
            break;

        default:
            porcentajeDescuento = .5;
            break;

    }

descuento = precio * porcentajeDescuento;
precioConDescuento = precio - descuento;
precioFinal = precioConDescuento * cantidad;

document.getElementById("precioDescuento").value = precioConDescuento;

            if (precioFinal> 120) {

                IIBB = precioConDescuento * .1;
                precioFinal = IIBB + precioConDescuento;
                flag = 1
            }

           

            alert("El precio a pagar es $" + precioFinal);

            if (flag == 1 ){

                alert("Usted pagó " + "$" + IIBB);
            }
    
    }



