//El algoritmo permite conocer el importe total de la compra con descuento y el ahorro total a partir de que el usuario ingrese el precio de lista del producto

alert("¡Bienvenido a nuestro servicio de consulta de ahorros! Presione Enter o Aceptar para continuar");

let precio1 = prompt("Ingrese el precio del primer producto");
let precio2 = prompt("Ingrese el precio del segundo producto");

let descuento1 = 0.20;
let descuento2 = 0.30;

let precio1Oferta = ((precio1)-(precio1*descuento1));
let precio2Oferta = ((precio2)-(precio2*descuento2));

alert("Los productos que usted quiere comprar suman" + " " + "AR$"+(precio1Oferta+precio2Oferta) + ".");

alert(" Está ahorrando" + " " + "AR$"+((precio1*descuento1)+(precio2*descuento2)));


let otraConsulta = prompt("¿Desea consultar otros productos? Escriba 'S' y Enter o Aceptar para continuar o culaquier tecla para cerrar")

if (otraConsulta == "S") {
    precio1 = prompt("Ingrese el precio del primer producto");
    precio2 = prompt("Ingrese el precio del segundo producto");

    descuento1 = 0.20;
    descuento2 = 0.30;

    precio1Oferta = ((precio1)-(precio1*descuento1));
    precio2Oferta = ((precio2)-(precio2*descuento2));

    alert("Los productos que usted quiere comprar suman" + " " + "AR$"+(precio1Oferta+precio2Oferta) + ".");

    alert(" Está ahorrando" + " " + "AR$"+((precio1*descuento1)+(precio2*descuento2)));

    otraConsulta = prompt("¿Desea consultar otros productos? Escriba 'S' y Enter o Aceptar para continuar o culaquier tecla para cerrar")

} else {
    alert("Muchas gracias por utilizar nuestro servicio. ¡Que tenga un lindo día!")
}