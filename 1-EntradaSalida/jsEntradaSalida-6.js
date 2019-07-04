/*Debemos lograr tomar Los numeros por ID ,
transformarlos a enteros (parseInt) y Sumarlos.
mostrar el resulto por medio de "ALERT"*/
function sumar()
{
    var numero1; 
    numero1 = document.getElementById("numeroUno").value;
    var numero2;
    numero2 = document.getElementById("numeroDos").value;
    var numero3;

    numero1 = parseInt(numero1);
    numero2 = parseInt(numero2);
    numero3 = numero1 + numero2;
    
    alert("La suma es " + numero3);
}

